import { splitProps } from 'solid-js'
import type { ComponentProps, JSX } from 'solid-js'

export type IconProps = ComponentProps<'span'>

const genIcon = (icon: (...args: any) => JSX.Element) => {
  const IconInternal = (props: IconProps) => {
    const [p, op] = splitProps(props, ['class', 'classList'])
    return (
      <span class={`icon ${p.class || ''}`} classList={p.classList} {...op}>
        {icon()}
      </span>
    )
  }
  return IconInternal
}

export default genIcon
