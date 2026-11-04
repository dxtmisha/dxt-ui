import { ref, watch, type Ref } from 'vue'
import {
  isDomRuntime,
  SearchList,
  type SearchColumns,
  type SearchItem
} from '@dxtmisha/functional-basic'

/**
 * Return interface for `useSearchValueRef` composable /
 * Интерфейс возвращаемого значения композабла `useSearchValueRef`
 */
export interface UseSearchValueRef {
  /** Current search value / Текущее значение поиска */
  search: Ref<string>
  /** Search value with applied delay / Значение поиска с примененной задержкой */
  searchDelay: Ref<string>
  /** Loading status during delay / Статус загрузки во время задержки */
  loading: Ref<boolean>
}

/**
 * Composable for managing search value state and handling delays.
 *
 * Композабл для управления состоянием значения поиска и обработки задержек.
 * Он изолирует логику debounce, предоставляя `searchDelay` (строка с задержкой)
 * и `loading` (флаг ожидания), которые затем читаются классом `SearchList` или `useSearchRef`.
 * @template T search item type / тип элемента поиска
 * @template K search columns type / тип колонок поиска
 * @param item search list instance / экземпляр поиска `SearchList`
 * @param value reactive search string / реактивная строка поиска (опционально)
 * @returns reactive search value state and delay status / реактивное состояние значения поиска и статус задержки
 */
export function useSearchValueRef<
  T extends SearchItem,
  K extends SearchColumns<T>
>(
  item: SearchList<T, K>,
  value?: Ref<string>
): UseSearchValueRef {
  /** Reactive search string / Реактивная строка поиска */
  const search = value ?? ref('')

  /** Search value with applied delay / Значение поиска с примененной задержкой */
  const searchDelay = ref(search.value)

  /** Loading status during delay / Статус загрузки во время задержки */
  const loading = ref<boolean>(false)

  /** Timeout for delay / Таймаут для задержки */
  let timeout: ReturnType<typeof setTimeout> | undefined

  watch(search, (_, __, onCleanup) => {
    const delay = item.getOptions().getDelay()

    if (delay && isDomRuntime()) {
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
