import type { ParentProps } from 'solid-js'
import styles from './SidebarList.module.css'

export default function SidebarList(props: ParentProps & { title?: string }) {
  return (
    <div class={styles.sidebarWrapper}>
      {props.title && <h3 class={styles.title}>{props.title}</h3>}
      {props.children}
    </div>
  )
}
