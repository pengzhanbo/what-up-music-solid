import type { JSX } from 'solid-js'
import { createMemo } from 'solid-js'

type Position = 'top' | 'right' | 'bottom' | 'left'

export interface PopoverBeaconProps {
  className?: string
  position?: Position
  offset?: number
  size?: number
  color?: string
}

const borderProperties: Record<Position, string> = {
  top: 'border-bottom',
  right: 'border-left',
  bottom: 'border-top',
  left: 'border-right',
}

function createStyles(
  position: Position,
  size: number,
  color: string,
  offset?: number,
) {
  offset = offset ?? size
  const dir = position === 'bottom' || position === 'top' ? 'x' : 'h'
  const borderProperty = borderProperties[position]
  const offsetProperty =
    dir === 'x'
      ? offset >= 0
        ? 'left'
        : 'right'
      : offset >= 0
      ? 'top'
      : 'bottom'

  offset = Math.abs(offset)

  const outStyle: JSX.CSSProperties = {
    'border': `${size}px solid transparent`,
    [borderProperty]: `${size}px solid rgb(240,241,243)`,
    [position]: `-${size * 2 + 2}px`,
    [offsetProperty]: `${offset}px`,
    'position': 'absolute',
    'z-index': 1,
    'display': 'inline-block',
  }
  const innerStyle: JSX.CSSProperties = {
    'border': `${size}px solid transparent`,
    [borderProperty]: `${size}px solid ${color}`,
    [position]: `-${size * 2}px`,
    [offsetProperty]: `${offset}px`,
    'position': 'absolute',
    'z-index': 1,
    'display': 'inline-block',
  }

  return { outStyle, innerStyle }
}

export default function PopoverBeacon(props: PopoverBeaconProps) {
  const styles = createMemo(() =>
    createStyles(
      props.position || 'top',
      props.size || 7,
      props.color || '#fff',
      props.offset,
    ),
  )
  return (
    <>
      <span style={styles().outStyle}></span>
      <span style={styles().innerStyle}></span>
    </>
  )
}
