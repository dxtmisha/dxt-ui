/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi } from 'vitest'
import { nextTick, ref } from 'vue'
import { SearchList } from '@dxtmisha/functional-basic'
import { useSearchValueRef } from '../useSearchValueRef'

describe('useSearchValueRef', () => {
  const dummyList = [{ id: 1, name: 'Apple' }]
  const columns = ['name'] as any

  it('should initialize with default states', () => {
    const searchList = new SearchList(dummyList, columns)
    const { search, searchDelay, loading } = useSearchValueRef(searchList)

    expect(search.value).toBe('')
    expect(searchDelay.value).toBe('')
    expect(loading.value).toBe(false)
  })

  it('should use external search ref', () => {
    const searchList = new SearchList(dummyList, columns)
    const externalSearch = ref('test')
    const { search } = useSearchValueRef(searchList, externalSearch)

    expect(search.value).toBe('test')
    expect(search).toBe(externalSearch)
  })

  it('should update searchDelay immediately if no delay is set', async () => {
    const searchList = new SearchList(dummyList, columns)
    const { search, searchDelay } = useSearchValueRef(searchList)

    search.value = 'hello'
    await nextTick()

    // Without a delay, writing to search directly updates searchDelay
    expect(searchDelay.value).toBe('hello')
  })

  it('should handle search delay (debounce)', async () => {
    vi.useFakeTimers()
    const searchList = new SearchList(dummyList, columns, undefined, { delay: 100 })
    const { search, searchDelay, loading } = useSearchValueRef(searchList)

    search.value = 'hello'

    // Allow Vue watcher to pick up update to set loading and timeout
    await Promise.resolve()

    expect(loading.value).toBe(true)
    expect(searchDelay.value).toBe('')

    vi.advanceTimersByTime(100)
    // Need a tick to resolve timeout callback updates
    await nextTick()

    expect(loading.value).toBe(false)
    expect(searchDelay.value).toBe('hello')

    vi.useRealTimers()
  })
})
