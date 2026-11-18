// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { reactive } from 'vue'

import { ListItemLazyHeight } from '../ListItemLazyHeight'
import type { ListItemProps } from '../props'

/**
 * Creates a minimal IntersectionObserverEntry mock with the specified bounding rect height.
 *
 * Создает минимальный мок IntersectionObserverEntry с указанной высотой boundingClientRect.
 * @param height measured bounding height / измеренная высота элемента
 * @returns mock observer entry / мок записи наблюдателя
 */
const createObserverEntry = (height?: number): IntersectionObserverEntry => {
  return {
    boundingClientRect: height === undefined ? undefined : { height } as DOMRectReadOnly
  } as IntersectionObserverEntry
}

describe('ListItemLazyHeight', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Static predicate (ListItemLazyHeight.is)', () => {
    it('returns true only when lazy is enabled and lazyCacheHeight is not false', () => {
      expect(ListItemLazyHeight.is()).toBe(false)
      expect(ListItemLazyHeight.is({})).toBe(false)
      expect(ListItemLazyHeight.is({ lazy: false })).toBe(false)
      expect(ListItemLazyHeight.is({ lazy: true, lazyCacheHeight: false })).toBe(false)
      expect(ListItemLazyHeight.is({ lazy: true })).toBe(true)
      expect(ListItemLazyHeight.is({ lazy: true, lazyCacheHeight: true })).toBe(true)
    })
  })

  describe('Height caching, styles, and reset lifecycle', () => {
    it('caches positive measured heights, exposes containIntrinsicHeight, and clears on reset', () => {
      const props = reactive<ListItemProps>({
        lazy: true
      })
      const lazyHeight = new ListItemLazyHeight(props)

      expect(lazyHeight.styles).toEqual({})

      lazyHeight.set(createObserverEntry(72))
      expect(lazyHeight.styles).toEqual({
        containIntrinsicHeight: '72px'
      })

      lazyHeight.set(createObserverEntry(108.5))
      expect(lazyHeight.styles).toEqual({
        containIntrinsicHeight: '108.5px'
      })

      lazyHeight.reset()
      expect(lazyHeight.styles).toEqual({})
    })

    it('ignores undefined entries, zero, and negative heights without corrupting cached state', () => {
      const props = reactive<ListItemProps>({
        lazy: true
      })
      const lazyHeight = new ListItemLazyHeight(props)

      lazyHeight.set(undefined)
      expect(lazyHeight.styles).toEqual({})

      lazyHeight.set(createObserverEntry(undefined))
      expect(lazyHeight.styles).toEqual({})

      lazyHeight.set(createObserverEntry(0))
      expect(lazyHeight.styles).toEqual({})

      lazyHeight.set(createObserverEntry(-24))
      expect(lazyHeight.styles).toEqual({})

      lazyHeight.set(createObserverEntry(64))
      expect(lazyHeight.styles).toEqual({
        containIntrinsicHeight: '64px'
      })

      // Zero measurement does not overwrite existing valid height
      lazyHeight.set(createObserverEntry(0))
      expect(lazyHeight.styles).toEqual({
        containIntrinsicHeight: '64px'
      })
    })

    it('clears cached height and returns empty styles when lazy or lazyCacheHeight disables caching', () => {
      const props = reactive<ListItemProps>({
        lazy: true,
        lazyCacheHeight: true
      })
      const lazyHeight = new ListItemLazyHeight(props)

      lazyHeight.set(createObserverEntry(90))
      expect(lazyHeight.styles).toEqual({
        containIntrinsicHeight: '90px'
      })

      props.lazyCacheHeight = false
      expect(lazyHeight.styles).toEqual({})

      lazyHeight.set(createObserverEntry(120))
      expect(lazyHeight.styles).toEqual({})

      props.lazyCacheHeight = true
      expect(lazyHeight.styles).toEqual({})

      props.lazy = false
      lazyHeight.set(createObserverEntry(50))
      expect(lazyHeight.styles).toEqual({})
    })

    it('isolates cached height between independent instances', () => {
      const first = new ListItemLazyHeight(reactive<ListItemProps>({ lazy: true }))
      const second = new ListItemLazyHeight(reactive<ListItemProps>({ lazy: true }))

      first.set(createObserverEntry(48))
      second.set(createObserverEntry(96))

      expect(first.styles).toEqual({ containIntrinsicHeight: '48px' })
      expect(second.styles).toEqual({ containIntrinsicHeight: '96px' })

      first.reset()
      expect(first.styles).toEqual({})
      expect(second.styles).toEqual({ containIntrinsicHeight: '96px' })
    })
  })
})
