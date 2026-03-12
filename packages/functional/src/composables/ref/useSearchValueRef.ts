import { ref, watch, type Ref } from 'vue'
import {
  SearchList,
  type SearchColumns,
  type SearchItem
} from '@dxtmisha/functional-basic'

/**
 * Composable for managing search value state and handling delays.
 *
 * Композабл для управления состоянием значения поиска и обработки задержек.
 * Он изолирует логику debounce, предоставляя `searchDelay` (строка с задержкой)
 * и `loading` (флаг ожидания), которые затем читаются классом `SearchList` или `useSearchRef`.
 * @param item search list instance / экземпляр поиска `SearchList`
 * @param value reactive search string / реактивная строка поиска (опционально)
 */
export function useSearchValueRef<
  T extends SearchItem,
  K extends SearchColumns<T>
>(
  item: SearchList<T, K>,
  value?: Ref<string>
) {
  /** reactive search string / реактивная строка поиска */
  const search = value ?? ref('')

  /** search value with applied delay / значение поиска с примененной задержкой */
  const searchDelay = ref(search.value)

  /** loading status during delay / статус загрузки во время задержки */
  const loading = ref<boolean>(false)

  /** timeout for delay / таймаут для задержки */
  let timeout: any

  watch(search, (_, __, onCleanup) => {
    const delay = item.getOptions().getDelay()

    if (delay) {
      loading.value = true

      timeout = setTimeout(() => {
        timeout = undefined
        searchDelay.value = search.value
        loading.value = false
      }, delay)

      onCleanup(() => {
        if (timeout) {
          clearTimeout(timeout)
        }
      })
    } else {
      searchDelay.value = search.value
    }
  })

  return {
    /** Current search value / Текущее значение поиска */
    search,

    /** Search value with applied delay / Значение поиска с примененной задержкой */
    searchDelay,

    /** Loading status during delay / Статус загрузки во время задержки */
    loading
  }
}
