import type { ComponentProps } from 'solid-js'
import { Match, Switch, createEffect, createSignal, splitProps } from 'solid-js'
import styles from './LazyImage.module.css'
import { useInViewport } from '~/hooks/in-viewport'

type CacheMapItem = [
  () => Promise<string>, // image loader
  Promise<string> | null, // image promise
  string, // loaded
]
const cache = new Map<string, CacheMapItem>()

export type LazyImageProps = {
  src: string
  transparent?: boolean
} & ComponentProps<'div'>

export default function LazyImage(props: LazyImageProps) {
  const [p, op] = splitProps(props, ['src', 'transparent'])
  const cached = cache.get(p.src)
  const [src, setSrc] = createSignal(cached ? cached[2] : '')

  return (
    <Switch>
      <Match when={src()}>
        <SyncImage src={src()} {...op} />
      </Match>
      <Match when={!src()}>
        <AsyncImage {...props} update={setSrc} />
      </Match>
    </Switch>
  )
}

/**
 * 已缓存的图片直接使用静态版本
 */
function SyncImage(props: LazyImageProps) {
  const [p, op] = splitProps(props, ['src'])
  return (
    <div {...op}>
      <div
        class={styles.staticImg}
        style={{ 'background-image': `url(${p.src})` }}
      />
    </div>
  )
}

/**
 * 当检查到图片未缓存时，监听元素是否进入可视区域，
 * 当预测元素即将进入可视区域时，开始加载图片
 */
function AsyncImage(props: LazyImageProps & { update: (src: string) => void }) {
  const [p, op] = splitProps(props, [
    'src',
    'update',
    'transparent',
    'classList',
  ])
  const [src, setSrc] = createSignal('')
  const [waiting, setWaiting] = createSignal(false)

  let el!: HTMLDivElement

  const [inViewport] = useInViewport(() => el, { rootMargin: '200px' })

  if (cache.has(p.src)) {
    const cached = cache.get(p.src)!
    if (cached[2]) {
      setSrc(cached[2])
      p.update(cached[2])
    }
  } else {
    cache.set(p.src, [
      () =>
        new Promise((resolve) => {
          let img: any = new Image()
          img.onload = () => {
            resolve(img.src)
            img = null
          }
          img.src = p.src
        }),
      null,
      '',
    ])
  }

  createEffect(() => {
    const cached = cache.get(p.src)!
    if (inViewport() && !cached[2] && !src() && !waiting()) {
      setWaiting(true)
      if (!cached[1]) {
        cached[1] = cached[0]()
      }
      cached[1].then((url) => {
        setSrc(url)
        cached[2] = url
        cached[1] = null
        cached[0] = null as any
        setTimeout(() => p.update(url), 400)
      })
    }
  })

  return (
    <div
      ref={el}
      {...op}
      classList={{ [styles.bg]: !p.transparent, ...(p.classList || {}) }}
    >
      <div
        class={`box-full transition ${styles.img}`}
        classList={{ [styles.active]: Boolean(src()) }}
        style={src() ? { 'background-image': `url(${src()})` } : {}}
      ></div>
    </div>
  )
}
