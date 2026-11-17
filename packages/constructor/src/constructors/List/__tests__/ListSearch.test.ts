// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { reactive } from 'vue'
import { ListSearch } from '../ListSearch'
import type { ListProps } from '../props'

describe('ListSearch', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('manages set, reset, and fallback to props.highlight', () => {
      const props = reactive<ListProps>({ highlight: 'initial' })
      const search = new ListSearch(props)

      expect(search.highlight.value).toBe('initial')
      expect(search.is()).toBe(true)

      search.set('  query  ')
      expect(search.item.value).toBe('query')
      expect(search.highlight.value).toBe('query')

      search.reset()
      expect(search.item.value).toBeUndefined()
      expect(search.highlight.value).toBe('initial')
      expect(search.is()).toBe(true)

      props.highlight = undefined
      expect(search.is()).toBe(false)
    })

    it('buffers consecutive characters within timeout and starts a new buffer after expiration', () => {
      vi.useFakeTimers()
      const search = new ListSearch({})

      search.add('a')
      expect(search.highlight.value).toBe('a')

      vi.advanceTimersByTime(1000)
      search.add('b')
      expect(search.highlight.value).toBe('ab')

      vi.advanceTimersByTime(2000)
      search.add('c')
      expect(search.highlight.value).toBe('c')
    })
  })

  describe('Boundary values, whitespace, and non-string inputs', () => {
    it('treats empty and whitespace-only strings as undefined', () => {
      const search = new ListSearch({ highlight: 'fallback' })

      search.set('   \t\n  ')
      expect(search.item.value).toBeUndefined()
      expect(search.highlight.value).toBe('fallback')

      search.set('')
      expect(search.item.value).toBeUndefined()
      expect(search.highlight.value).toBe('fallback')
    })

    it('handles undefined and non-string runtime inputs safely without throwing', () => {
      const search = new ListSearch({})

      search.set(undefined)
      expect(search.item.value).toBeUndefined()

      search.set(123 as unknown as string)
      expect(search.item.value).toBeUndefined()
    })

    it('preserves Unicode, Cyrillic, Vietnamese diacritics, and special regex characters', () => {
      const search = new ListSearch({})

      search.set('  Привет Nguyễn C++  ')
      expect(search.highlight.value).toBe('Привет Nguyễn C++')
      expect(search.is()).toBe(true)
    })
  })

  describe('Lifecycle and resource cleanup', () => {
    it('clears pending timeout on reset and onUnmounted', () => {
      vi.useFakeTimers()
      const clearSpy = vi.spyOn(globalThis, 'clearTimeout')
      const search = new ListSearch({})

      search.add('x')
      search.reset()
      expect(clearSpy).toHaveBeenCalledTimes(1)

      search.add('y')
      search.onUnmounted()
      expect(clearSpy).toHaveBeenCalledTimes(2)

      vi.advanceTimersByTime(5000)
      search.add('z')
      expect(search.highlight.value).toBe('z')
    })
  })
})
