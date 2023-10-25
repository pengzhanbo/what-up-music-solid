import { mergeProps, splitProps } from 'solid-js'
import { IconPlayFill, type IconProps } from './Icons'
import styles from './PlayPlayFill.module.css'

export interface PlayerPlayFillProps extends IconProps {
  size?: 'normal' | 'small' | 'smaller'
  position?: 'center' | 'rb'
  blur?: 'dark' | 'light' | 'lighter'
  hover?: boolean
}

export default function PlayerPlayFill(props: PlayerPlayFillProps) {
  const [p, attrs] = splitProps(
    mergeProps(
      {
        size: 'normal',
        position: 'center',
        blur: 'light',
        hover: true,
      },
      props,
    ),
    ['size', 'position', 'blur', 'hover'],
  )

  return (
    <IconPlayFill
      classList={{
        'flex-center': true,
        [styles.playFill]: true,
        [styles.center]: p.position === 'center',
        [styles.rb]: p.position === 'rb',
        [styles.normal]: p.size === 'normal',
        [styles.small]: p.size === 'small',
        [styles.smaller]: p.size === 'smaller',
        [styles.dark]: p.blur === 'dark',
        [styles.light]: p.blur === 'light',
        [styles.lighter]: p.blur === 'lighter',
        [`${styles.hover} transition`]: p.hover,
      }}
      {...attrs}
    />
  )
}
