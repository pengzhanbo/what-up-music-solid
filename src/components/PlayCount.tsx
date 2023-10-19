import cn from 'classnames'
import { type ComponentProps, splitProps } from 'solid-js'
import { IconPlayOutline } from './Icons'
import styles from './PlayCount.module.css'

export default function PlayCount(
  props: ComponentProps<'div'> & { count: string },
) {
  const [p, attrs] = splitProps(props, ['count', 'class'])

  return (
    <div class={cn('flex-items-center', styles.playCount, p.class)} {...attrs}>
      <p class={styles.iconPlay}>
        <IconPlayOutline class={styles.iconHigh} />
        <IconPlayOutline class={styles.iconHosts} />
      </p>
      <span>{p.count}</span>
    </div>
  )
}
