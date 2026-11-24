// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { CollageElement } from '../CollageElement'
import { CollageGrow } from '../CollageGrow'
import { CollageMasonryHorizontal } from '../CollageMasonryHorizontal'
import { CollageMasonryVertical } from '../CollageMasonryVertical'
import {
  COLLAGE_RESIZE_DEBOUNCE_MS,
  CollageVariant
} from '../CollageVariant'
import { CollageWoven } from '../CollageWoven'
import type { CollageProps } from '../props'

/**
 * Helper creating CollageVariant and its lazy collaborator stubs.
 *
 * Вспомогательная функция для создания CollageVariant и его ленивых зависимостей.
 */
function createVariantContext(
  initialProps: CollageProps = {},
  initialElement?: HTMLElement
) {
  const props = reactive<CollageProps>({ ...initialProps })
  const element = ref<HTMLElement | undefined>(initialElement)
  const naming = new DesignName('d.collage')
  const elementItem = new CollageElement(element)
  const grow = new CollageGrow(naming, () => elementItem)
  const masonryHorizontal = new CollageMasonryHorizontal(() => elementItem, () => grow)
  const masonryVertical = new CollageMasonryVertical(() => elementItem, () => grow)
  const woven = new CollageWoven(naming, () => elementItem)

  const variant = new CollageVariant(
    props,
    () => elementItem,
    () => grow,
    () => masonryHorizontal,
    () => masonryVertical,
    () => woven
  )

  return {
    props,
    element,
    elementItem,
    grow,
    masonryHorizontal,
    masonryVertical,
    woven,
    variant
  }
}

describe('CollageVariant', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('Constants and static predicate', () => {
    it('should export COLLAGE_RESIZE_DEBOUNCE_MS as 320', () => {
      expect(COLLAGE_RESIZE_DEBOUNCE_MS).toBe(320)
    })

    it.each([
      ['woven', true],
      ['masonryHorizontal', true],
      ['masonryVertical', true],
      ['standard', false],
      ['quilted', false],
      [undefined, false]
    ] as const)('should return %s from CollageVariant.is for variant=%s', (variantName, expected) => {
      expect(CollageVariant.is({ variant: variantName })).toBe(expected)
    })

    it('should return false when props is undefined', () => {
      expect(CollageVariant.is(undefined)).toBe(false)
    })
  })

  describe('Constructor purity and variant dispatch', () => {
    it('should not invoke dependency getters or side effects inside constructor', () => {
      const elementGetter = vi.fn()
      const growGetter = vi.fn()
      const horizontalGetter = vi.fn()
      const verticalGetter = vi.fn()
      const wovenGetter = vi.fn()

      const variant = new CollageVariant(
        { variant: 'woven' },
        elementGetter as unknown as () => CollageElement,
        growGetter as unknown as () => CollageGrow | undefined,
        horizontalGetter as unknown as () => CollageMasonryHorizontal | undefined,
        verticalGetter as unknown as () => CollageMasonryVertical | undefined,
        wovenGetter as unknown as () => CollageWoven | undefined
      )

      expect(typeof variant.update).toBe('function')
      expect(typeof variant.updateByTime).toBe('function')
      expect(elementGetter).not.toHaveBeenCalled()
      expect(growGetter).not.toHaveBeenCalled()
      expect(horizontalGetter).not.toHaveBeenCalled()
      expect(verticalGetter).not.toHaveBeenCalled()
      expect(wovenGetter).not.toHaveBeenCalled()
    })

    it('should dispatch resize to the matching variant helper after resetting previous states', () => {
      const container = document.createElement('div')
      const { props, grow, masonryHorizontal, masonryVertical, woven, variant } = createVariantContext(
        { variant: 'woven' },
        container
      )

      const resetWovenSpy = vi.spyOn(woven, 'reset')
      const resizeWovenSpy = vi.spyOn(woven, 'resize').mockImplementation(() => undefined)
      const cancelHorizontalSpy = vi.spyOn(masonryHorizontal, 'cancel')
      const resizeHorizontalSpy = vi.spyOn(masonryHorizontal, 'resize').mockImplementation(() => undefined)
      const cancelVerticalSpy = vi.spyOn(masonryVertical, 'cancel')
      const resizeVerticalSpy = vi.spyOn(masonryVertical, 'resize').mockImplementation(() => undefined)
      const resetGrowSpy = vi.spyOn(grow, 'resetGrow')

      variant.update()
      expect(resetWovenSpy).toHaveBeenCalledTimes(1)
      expect(cancelHorizontalSpy).toHaveBeenCalledTimes(1)
      expect(cancelVerticalSpy).toHaveBeenCalledTimes(1)
      expect(resetGrowSpy).toHaveBeenCalledTimes(1)
      expect(resizeWovenSpy).toHaveBeenCalledTimes(1)
      expect(resizeHorizontalSpy).not.toHaveBeenCalled()
      expect(resizeVerticalSpy).not.toHaveBeenCalled()

      props.variant = 'masonryHorizontal'
      variant.update()
      expect(resizeHorizontalSpy).toHaveBeenCalledTimes(1)

      props.variant = 'masonryVertical'
      variant.update()
      expect(resizeVerticalSpy).toHaveBeenCalledTimes(1)

      props.variant = 'standard'
      variant.update()
      expect(resetWovenSpy).toHaveBeenCalledTimes(4)
      expect(resetGrowSpy).toHaveBeenCalledTimes(4)

      variant.onUnmounted()
    })

    it('should handle undefined optional helpers gracefully without throwing', () => {
      const container = document.createElement('div')
      const elementItem = new CollageElement(ref<HTMLElement | undefined>(container))
      const variant = new CollageVariant(
        { variant: 'woven' },
        () => elementItem,
        () => undefined,
        () => undefined,
        () => undefined,
        () => undefined
      )

      expect(() => variant.update()).not.toThrow()
      expect(() => variant.onUnmounted()).not.toThrow()
    })
  })

  describe('Debounced resize handling (updateByTime)', () => {
    it('should debounce resize recalculation by COLLAGE_RESIZE_DEBOUNCE_MS when container width changes', () => {
      vi.useFakeTimers()

      const container = document.createElement('div')
      Object.defineProperty(container, 'offsetWidth', { value: 400, configurable: true, writable: true })

      const { woven, variant } = createVariantContext({ variant: 'woven' }, container)
      const resizeWovenSpy = vi.spyOn(woven, 'resize').mockImplementation(() => undefined)

      variant.updateByTime()
      expect(resizeWovenSpy).not.toHaveBeenCalled()

      // Same width should not reschedule
      vi.advanceTimersByTime(200)
      variant.updateByTime()

      // Width changes again -> resets debounce timer
      Object.defineProperty(container, 'offsetWidth', { value: 600, configurable: true, writable: true })
      variant.updateByTime()

      vi.advanceTimersByTime(COLLAGE_RESIZE_DEBOUNCE_MS - 1)
      expect(resizeWovenSpy).not.toHaveBeenCalled()

      vi.advanceTimersByTime(1)
      expect(resizeWovenSpy).toHaveBeenCalledTimes(1)

      variant.onUnmounted()
    })

    it('should cancel pending debounced timer when unmounted or switched to static variant', () => {
      vi.useFakeTimers()

      const container = document.createElement('div')
      Object.defineProperty(container, 'offsetWidth', { value: 500, configurable: true, writable: true })

      const { props, woven, variant } = createVariantContext({ variant: 'woven' }, container)
      const resizeWovenSpy = vi.spyOn(woven, 'resize').mockImplementation(() => undefined)

      variant.updateByTime()
      props.variant = 'standard'
      variant.update()

      vi.advanceTimersByTime(COLLAGE_RESIZE_DEBOUNCE_MS * 2)
      expect(resizeWovenSpy).not.toHaveBeenCalled()

      variant.onUnmounted()
    })
  })

  describe('Lifecycle hooks (onMounted & onUnmounted) and reactive watchers', () => {
    it('should register reactive prop watchers on mount, re-run update on changes, and stop on unmount', async () => {
      const container = document.createElement('div')
      const { props, woven, masonryHorizontal, variant } = createVariantContext(
        { variant: 'woven', columns: '4' },
        container
      )

      const resizeWovenSpy = vi.spyOn(woven, 'resize').mockImplementation(() => undefined)
      const resizeHorizontalSpy = vi.spyOn(masonryHorizontal, 'resize').mockImplementation(() => undefined)

      const scope = effectScope()
      scope.run(() => {
        variant.onMounted()
      })

      expect(resizeWovenSpy).toHaveBeenCalledTimes(1)

      props.columns = '3'
      await nextTick()
      expect(resizeWovenSpy).toHaveBeenCalledTimes(2)

      props.cellSize = 200
      await nextTick()
      expect(resizeWovenSpy).toHaveBeenCalledTimes(3)

      props.variant = 'masonryHorizontal'
      await nextTick()
      expect(resizeHorizontalSpy).toHaveBeenCalledTimes(1)

      variant.onUnmounted()
      scope.stop()

      props.columns = '2'
      await nextTick()
      expect(resizeHorizontalSpy).toHaveBeenCalledTimes(1)
    })

    it('should replace resize event listener cleanly when container element changes', () => {
      const firstContainer = document.createElement('div')
      const secondContainer = document.createElement('div')
      const { element, woven, variant } = createVariantContext({ variant: 'woven' }, firstContainer)

      vi.spyOn(woven, 'resize').mockImplementation(() => undefined)

      variant.update()
      element.value = secondContainer
      expect(() => variant.update()).not.toThrow()

      variant.onUnmounted()
    })
  })
})
