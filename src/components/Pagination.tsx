import cn from 'classnames'
import { For, Show, createMemo } from 'solid-js'
import { IconPageNext, IconPagePrev } from './Icons'
import styles from './Pagination.module.css'

export interface PaginationProps {
  total: number
  page: number
  onChange: (page: number) => void
}

export default function Pagination(props: PaginationProps) {
  const range = createMemo(() => getPageRange(props.total, props.page))

  const onChange = (page: number) => {
    if (page === props.page) return
    props.onChange(page)
  }
  const onPrevious = () => onChange(props.page - 1 < 1 ? 1 : props.page - 1)
  const onNext = () =>
    onChange(props.page + 1 > props.total ? props.total : props.page + 1)

  return (
    <Show when={range().length}>
      <div class={`flex-center ${styles.pagination}`}>
        <div class="flex-items-center">
          <div
            class={cn(styles.page, styles.prev)}
            classList={{ [styles.disabled]: props.page === 1 }}
            onClick={onPrevious}
          >
            <IconPagePrev />
          </div>
          <For each={range()}>
            {({ value, more }) => (
              <div
                class={cn(styles.page, styles.item)}
                classList={{ [styles.active]: props.page === value }}
                onClick={() => !more && onChange(value as number)}
              >
                {more ? '...' : value}
              </div>
            )}
          </For>
          <div
            class={cn(styles.page, styles.next)}
            classList={{ [styles.disabled]: props.page === props.total }}
            onClick={onNext}
          >
            <IconPageNext />
          </div>
        </div>
      </div>
    </Show>
  )
}

function getPageRange(total: number, page: number) {
  let range: { value: number | string; more?: true }[] = []
  if (total <= 0) return range
  if (total <= 10) {
    range = Array.from({ length: total }, (_, i) => ({ value: i + 1 }))
  } else {
    let i = 1
    let hasMore = false
    while (i <= total) {
      if ((page <= 5 && i <= 5) || (page >= total - 4 && i >= total - 4)) {
        hasMore = false
        range.push({ value: i })
      } else if (i <= 2 || i >= total - 1) {
        hasMore = false
        range.push({ value: i })
      } else if (
        (page > 6 || page < total - 6) &&
        page - i < 3 &&
        i - page < 3
      ) {
        hasMore = false
        range.push({ value: i })
      } else if (!hasMore) {
        hasMore = true
        range.push({ value: i, more: true })
      }
      i++
    }
  }
  return range
}
