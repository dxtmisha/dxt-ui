/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi } from 'vitest'
import { nextTick, ref } from 'vue'
import { useSearchRef } from '../useSearchRef'

describe('useSearchRef', () => {
  const listItems = [
    { id: 1, name: 'Apple', Category: 'Fruit' },
    { id: 2, name: 'Banana', Category: 'Fruit' },
    { id: 3, name: 'Carrot', Category: 'Vegetable' }
  ]
  const columns = ['name', 'Category'] as any

  it('should initialize with default states', () => {
    const { isSearch, loading, listSearch } = useSearchRef(listItems, columns)

    expect(isSearch.value).toBe(false)
    expect(loading.value).toBe(false)
    expect(listSearch.value).toHaveLength(3)
    // Check if items are formatted (added Search keys)
    expect(listSearch.value[0]).toHaveProperty('nameSearch', 'Apple')
    expect(listSearch.value[0]).toHaveProperty('CategorySearch', 'Fruit')
    expect(listSearch.value[0]).toHaveProperty('searchActive', false)
  })

  it('should filter items when searching', async () => {
    const { search, isSearch, listSearch } = useSearchRef(listItems, columns)

    search.value = 'app'
    await nextTick()

    expect(isSearch.value).toBe(true)
    expect(listSearch.value).toHaveLength(1)
    expect(listSearch.value[0]?.name).toBe('Apple')
    expect(listSearch.value[0]?.searchActive).toBe(true)
    // Highlight check (addTagHighlightMatch uses span with sys-search-selection by default)
    expect(listSearch.value[0]?.nameSearch).toContain('<span class="sys-search-selection">App</span>le')
  })

  it('should return everything if the returnEverything option is true', async () => {
    const { search, listSearch } = useSearchRef(listItems, columns, undefined, { returnEverything: true })

    search.value = 'app'
    await nextTick()

    expect(listSearch.value).toHaveLength(3)
    expect(listSearch.value[0]?.searchActive).toBe(true)
    expect(listSearch.value[1]?.searchActive).toBe(false)
    expect(listSearch.value[1]?.nameSearch).toBe('Banana')
  })

  it('should handle search delay', async () => {
    vi.useFakeTimers()
    const { search, loading } = useSearchRef(listItems, columns, undefined, { delay: 100 })

    search.value = 'app'
    // Give it a tick to trigger the watch
    await Promise.resolve()

    expect(loading.value).toBe(true)

    vi.advanceTimersByTime(100)
    expect(loading.value).toBe(false)

    vi.useRealTimers()
  })

  it('should react to list changes', async () => {
    const listRef = ref([...listItems])
    const { listSearch } = useSearchRef(listRef, columns)

    expect(listSearch.value).toHaveLength(3)

    listRef.value.push({ id: 4, name: 'Date', Category: 'Fruit' })
    await nextTick()

    expect(listSearch.value).toHaveLength(4)
    expect(listSearch.value[3]?.name).toBe('Date')
  })

  it('should handle findExactMatch option (phrase vs. multiple words)', async () => {
    // Default is fuzzy (contains all words)
    const { search: searchFuzzy, listSearch: listFuzzy } = useSearchRef(listItems, columns)
    searchFuzzy.value = 'Fruit Apple' // Different order or all words
    await nextTick()
    expect(listFuzzy.value).toHaveLength(1)

    // Exact match is a literal phrase
    const { search: searchExact, listSearch: listExact } = useSearchRef(listItems, columns, undefined, { findExactMatch: true })
    searchExact.value = 'Fruit Apple' // Doesn't exist as a phrase
    await nextTick()
    expect(listExact.value).toHaveLength(0)

    searchExact.value = 'Apple' // Phrase exists
    await nextTick()
    expect(listExact.value).toHaveLength(1)
  })

  it('should respect character limit for search activation', async () => {
    const { search, isSearch, listSearch } = useSearchRef(listItems, columns, undefined, { limit: 5 })

    search.value = 'App'
    await nextTick()
    expect(isSearch.value).toBe(false)
    expect(listSearch.value).toHaveLength(3)

    search.value = 'Apple'
    await nextTick()
    expect(isSearch.value).toBe(true)
    expect(listSearch.value).toHaveLength(1)
  })
})
