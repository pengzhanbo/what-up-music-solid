import cn from 'classnames'
import type { ComponentProps, JSX } from 'solid-js'
import { createMemo, splitProps } from 'solid-js'
import { IconLoading } from './Icons'
import styles from './Loading.module.css'

export default function Loading(
  props: ComponentProps<'div'> & { height?: number, style?: JSX.CSSProperties },
) {
  const [p, op] = splitProps(props, ['class', 'style'])
  const style = createMemo(() => {
    const style = p.style || {}
    return {
      height: `${op.height || 100}px`,
      ...style,
    }
  })
  return (
    <div
      class={cn(styles.loading, 'flex-center', p.class)}
      style={style()}
      {...op}
    >
      <div class={styles.content}>
        <IconLoading />
        <span class={styles.text}>加载中...</span>
      </div>
    </div>
  )
}
