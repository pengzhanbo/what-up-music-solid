import { children, onMount } from 'solid-js'
import type { JSX } from 'solid-js'
import { useUpdateEffect } from '~/hooks/updateEffect'

export default function Visibility(props: {
  when: boolean
  children: JSX.Element
}) {
  const resolvedChild = children(() => props.children)
  let defaultDisplay = 'block'

  onMount(() => {
    const child = resolvedChild() as HTMLElement
    if (!child) return
    defaultDisplay = getComputedStyle(child).display ?? 'block'
  })

  useUpdateEffect(() => {
    const child = resolvedChild() as HTMLElement
    if (!child) return
    child.style.display = props.when ? defaultDisplay : 'none'
  }, [() => props.when])

  return resolvedChild()
}
