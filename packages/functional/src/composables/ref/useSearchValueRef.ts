import { ref, watch, type Ref } from 'vue'
import {
  getExactSearchExp,
  getSearchExp,
  isFilled
} from '@dxtmisha/functional-basic'

import type {
  SearchCacheItem,
  SearchItem,
  SearchOptions
} from '../../types/searchTypes'

/**
 * Composable for managing search value state and matching logic.
 *
 * Композабл для управления состоянием значения поиска и логикой совпадений.
 * @param value external search ref / внешняя ссылка на поиск
 * @param options search options / настройки поиска
 */
export function useSearchValueRef<T extends SearchItem>(
  value?: Ref<string>,
  options?: SearchOptions
) {
  const {
    limit = 2,
    delay = 0,
    findExactMatch = false
  } = options ?? {}

  const search = value ?? ref('')
  const searchDelay = ref(search.value)
  const loading = ref<boolean>(false)

  let matcher: RegExp | undefined
  let timeout: any

  const updateMatcher = () => {
    if (isFilled(searchDelay.value)) {
      matcher = findExactMatch
        ? getExactSearchExp(searchDelay.value)
        : getSearchExp(searchDelay.value)
    } else {
      matcher = undefined
    }
  }

  updateMatcher()

  watch(search, () => {
    if (delay) {
      loading.value = true

      if (timeout) {
        clearTimeout(timeout)
      }

      timeout = setTimeout(() => {
        timeout = undefined
        searchDelay.value = search.value
        loading.value = false
      }, delay)
    } else {
      searchDelay.value = search.value
    }
  })

  watch(
    searchDelay,
    () => updateMatcher(),
    { immediate: true }
  )

  return {
    /** Current search value / Текущее значение поиска */
    search,

    /** Search value with applied delay / Значение поиска с примененной задержкой */
    searchDelay,

    /** Loading status during delay / Статус загрузки во время задержки */
    loading,

    /**
     * Checks if the search is active based on character limit.
     *
     * Проверяет, активен ли поиск на основе лимита символов.
     */
    isSearch() {
      return (searchDelay.value?.length ?? 0) >= limit
    },

    /**
     * Checks if a cached item matches the search pattern.
     *
     * Проверяет, соответствует ли кэшированный элемент шаблону поиска.
     * @param item cached item / кэшированный элемент
     */
    isSelection(item: SearchCacheItem<T>): boolean {
      if (!matcher) {
        return false
      }

      return Boolean(item.value.match(matcher))
    },

    /**
     * Checks if a matcher (RegExp) is currently active.
     *
     * Проверяет, активен ли в данный момент сопоставитель (RegExp).
     */
    isMatched() {
      return Boolean(matcher)
    },

    /**
     * Returns the current RegExp matcher.
     *
     * Возвращает текущий RegExp для сопоставления.
     */
    getMatcher() {
      return matcher
    }
  }
}
