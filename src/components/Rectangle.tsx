import { isNumber } from '@pengzhanbo/utils'
import cn from 'classnames'
import { createMemo, mergeProps, splitProps } from 'solid-js'
import type { ComponentProps, JSX, ParentProps } from 'solid-js'
import styles from './Rectangle.module.css'

export default function Rectangle(props: RectangleProps) {
  const [p, attrs] = splitProps(
    mergeProps(
      {
        size: '100%',
        ratio: 1,
      },
      props,
    ),
    ['size', 'ratio', 'class', 'style', 'children'],
  )
  const size = createMemo(() => (isNumber(p.size) ? `${p.size}px` : p.size))
  const hostStyle = createMemo<JSX.CSSProperties>(() => {
    const isPx = size().endsWith('px')
    const width = size()
    const height = isPx ? size() : 0
    return {
      width,
      height,
      'padding-top': isPx ? 0 : `${p.ratio * 100}%`,
    }
  })

  return (
    <div
      class={cn(styles.rectangle, p.class)}
      style={{ width: size(), ...(p.style || {}) }}
      {...attrs}
    >
      <div class={styles.hosts} style={hostStyle()}></div>
      <div class={`${styles.content} box-full`}>{p.children}</div>
    </div>
  )
}

export interface RectangleProps extends ComponentProps<'div'>, ParentProps {
  size?: number | string
  ratio?: number
  style?: JSX.CSSProperties
}
