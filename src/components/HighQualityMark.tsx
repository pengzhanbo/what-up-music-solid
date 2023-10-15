import styles from './HighQualityMark.module.css'
import { IconQueen } from './Icons'

export default function HighQualityMark() {
  return (
    <p class={`flex-center ${styles.mark}`}>
      <IconQueen />
    </p>
  )
}
