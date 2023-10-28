import { isFunction } from '@pengzhanbo/utils'
import type { Ref } from 'solid-js'
import { createSignal, onMount } from 'solid-js'
import { IconSearch, IconSearchClose } from './Icons'
import styles from './SearchInput.module.css'

export default function SearchInput(props: SearchInputProps) {
  const [value, setValue] = createSignal('')
  const [focus, setFocus] = createSignal(false)
  let inputEl!: HTMLInputElement

  onMount(() => {
    if (isFunction(props.ref)) {
      props.ref(inputEl)
    } else {
      props.ref = inputEl
    }
  })

  const onMouseDown = (e: MouseEvent) => {
    e.stopPropagation()
  }
  const onFocus = () => {
    setFocus(true)
    props.onFocus?.(value())
  }
  const onBlur = () => {
    setFocus(false)
    props.onBlur?.(value())
  }
  const onInput = () => {
    const v = inputEl.value
    setValue(v)
    props.onInPut?.(v)
  }

  const onClear = () => {
    inputEl.value = ''
    setValue('')
    props.onClear?.()
  }

  return (
    <div class={styles.wrapper} classList={{ [styles.focus]: focus() }}>
      <div class="box-full flex-center">
        <IconSearch class={styles.iconSearch} />
        <input
          class={`${styles.searchInput} box-full`}
          type="text"
          ref={inputEl}
          placeholder={props.placeholder}
          onMouseDown={onMouseDown}
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <IconSearchClose
          class={`${styles.iconClose} transition`}
          classList={{ [styles.show]: Boolean(value()) }}
          onClick={onClear}
        />
      </div>
    </div>
  )
}
export interface SearchInputProps {
  placeholder?: string
  onInPut?: (value: string) => void
  onFocus?: (value: string) => void
  onBlur?: (value: string) => void
  onClear?: () => void
  ref?: Ref<HTMLInputElement>
}
