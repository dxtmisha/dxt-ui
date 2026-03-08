/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi } from 'vitest'
import { nextTick, ref } from 'vue'

vi.mock('@dxtmisha/functional-basic', () => ({
  getExactSearchExp: (value: string) => new RegExp(`^${value}$`, 'i'),
  getSearchExp: (value: string) => new RegExp(value, 'i'),
  isFilled: (value: any) => value !== null && value !== undefined && value !== ''
}))

import { useSearchValueRef } from '../useSearchValueRef'

describe('useSearchValueRef', () => {
  it('should initialize with default values', () => {
    const { search, searchDelay, loading, isSearch } = useSearchValueRef()

    expect(search.value).toBe('')
    expect(searchDelay.value).toBe('')
    expect(loading.value).toBe(false)
    expect(isSearch()).toBe(false)
  })

  it('should use external search ref', () => {
    const externalSearch = ref('test')
    const { search } = useSearchValueRef(externalSearch)

    expect(search.value).toBe('test')
    expect(search).toBe(externalSearch)
  })

  it('should update searchDelay immediately if no delay is set', async () => {
    const { search, searchDelay } = useSearchValueRef()

    search.value = 'hello'
    await nextTick()

    expect(searchDelay.value).toBe('hello')
  })

  it('should handle search delay (debounce)', async () => {
    vi.useFakeTimers()
    const { search, searchDelay, loading } = useSearchValueRef(undefined, { delay: 100 })

    search.value = 'hello'
    // Give it a tick to trigger the watch
    await Promise.resolve()

    expect(loading.value).toBe(true)
    expect(searchDelay.value).toBe('')

    vi.advanceTimersByTime(100)
    expect(loading.value).toBe(false)
    expect(searchDelay.value).toBe('hello')

    vi.useRealTimers()
  })

  it('isSearch should respect character limit', async () => {
    const { search, isSearch, searchDelay } = useSearchValueRef(undefined, { limit: 5 })

    search.value = 'abc'
    searchDelay.value = 'abc' // Simulate immediate update for testing isSearch
    await nextTick()
    expect(isSearch()).toBe(false)

    search.value = 'abcde'
    searchDelay.value = 'abcde'
    await nextTick()
    expect(isSearch()).toBe(true)
  })

  it('should update matcher and check selection (fuzzy)', async () => {
    const { search, isSelection, searchDelay } = useSearchValueRef()

    search.value = 'apple'
    searchDelay.value = 'apple'
    await nextTick()

    expect(isSelection({ item: {} as any, value: 'I have an Apple' })).toBe(true)
    expect(isSelection({ item: {} as any, value: 'Banana' })).toBe(false)
  })

  it('should update matcher and check selection (exact)', async () => {
    const { search, isSelection, searchDelay } = useSearchValueRef(undefined, { findExactMatch: true })

    search.value = 'apple'
    searchDelay.value = 'apple'
    await nextTick()

    // getExactSearchExp returns ^...$ regex
    expect(isSelection({ item: {} as any, value: 'apple' })).toBe(true)
    expect(isSelection({ item: {} as any, value: 'Apple' })).toBe(true) // case insensitive in mock
    expect(isSelection({ item: {} as any, value: 'an apple' })).toBe(false)
  })

  it('isMatched should return true when there is search value', async () => {
    const { search, isMatched, searchDelay } = useSearchValueRef()

    expect(isMatched()).toBe(false)

    search.value = 'a'
    searchDelay.value = 'a'
    await nextTick()
    expect(isMatched()).toBe(true)
  })

  it('getMatcher should return the RegExp instance', async () => {
    const { search, getMatcher, searchDelay } = useSearchValueRef()

    expect(getMatcher()).toBeUndefined()

    search.value = 'test'
    searchDelay.value = 'test'
    await nextTick()
    expect(getMatcher()).toBeInstanceOf(RegExp)
    expect(getMatcher()?.source).toBe('test')
  })
})
