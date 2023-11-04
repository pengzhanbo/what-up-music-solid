import { isDef } from '@pengzhanbo/utils'
import { type JSX, type ParentProps, createMemo } from 'solid-js'
import { useMatch } from 'solid-start'
import styles from './SidebarList.module.css'
import { useNavigate } from '~/hooks/pageNavigate'

export interface SidebarItemProps extends ParentProps {
  text?: string
  icon?: JSX.Element
  suffix?: JSX.Element
  link?: string
  active?: boolean
  matches?: string
}
export default function SidebarItem(props: SidebarItemProps) {
  const navigate = useNavigate()
  const linkTo = (e: MouseEvent) => {
    e.preventDefault()
    props.link && navigate(props.link)
  }
  const matched = useMatch(() => props.matches || props.link || '')
  const isMatched = createMemo(() =>
    isDef(props.active) ? props.active : Boolean(matched()),
  )

  return (
    <div
      class={`${styles.sidebarItem} flex-center transition`}
      classList={{ [styles.active]: isMatched() }}
    >
      {props.icon && <span class={`icon ${styles.icon}`}>{props.icon}</span>}
      <p class={styles.content} onClick={linkTo}>
        {props.children || props.text}
      </p>
      {props.suffix && <div class={styles.suffix}>{props.suffix}</div>}
    </div>
  )
}
