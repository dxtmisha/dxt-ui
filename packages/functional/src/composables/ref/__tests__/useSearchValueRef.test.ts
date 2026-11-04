/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi } from 'vitest'
import { nextTick, ref } from 'vue'
import { SearchList } from '@dxtmisha/functional-basic'
import { useSearchValueRef } from '../useSearchValueRef'

describe('useSearchValueRef', () => {
  const dummyList = [{ id: 1, name: 'Apple' }]
  const columns: ['name'] = ['name']

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
    const { search, searchDelay } = useSearchValueRef(searchList, externalSearch)

    expect(search.value).toBe('test')
    expect(searchDelay.value).toBe('test')
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

  it('should handle search delay (debounce) and cancel previous timer on rapid changes', async () => {
    vi.useFakeTimers()
    const searchList = new SearchList(dummyList, columns, undefined, { delay: 100 })
    const { search, searchDelay, loading } = useSearchValueRef(searchList)

    search.value = 'hel'
    await Promise.resolve()

    expect(loading.value).toBe(true)
    expect(searchDelay.value).toBe('')

    vi.advanceTimersByTime(50)
    search.value = 'hello'

    // Allow Vue watcher to pick up update, run cleanup on previous timeout, and set new timeout
    await Promise.resolve()

    expect(loading.value).toBe(true)
    expect(searchDelay.value).toBe('')

    // First 50ms passes (total 100ms from first input, but only 50ms from second)
    vi.advanceTimersByTime(50)
    await nextTick()
    expect(loading.value).toBe(true)
    expect(searchDelay.value).toBe('')

    // Remaining 50ms passes for second input
    vi.advanceTimersByTime(50)
    await nextTick()

    expect(loading.value).toBe(false)
    expect(searchDelay.value).toBe('hello')

    vi.useRealTimers()
  })
})
