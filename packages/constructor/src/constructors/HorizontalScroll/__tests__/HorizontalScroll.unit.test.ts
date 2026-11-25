// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import { effectScope, nextTick, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import * as functional from '@dxtmisha/functional'

import { HorizontalScroll } from '../HorizontalScroll'
import type { HorizontalScrollProps } from '../props'

describe('HorizontalScroll (Unit)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should lazily instantiate scroll helper only when binds is accessed', () => {
    const elementRef = ref<HTMLDivElement | undefined>(document.createElement('div'))
    const scope = effectScope()
    let instance!: HorizontalScroll

    scope.run(() => {
      instance = new HorizontalScroll(
        {} as HorizontalScrollProps,
        elementRef,
        new DesignName('d1.horizontalScroll')
      )
    })

    expect(instance.hasInstance('scroll')).toBe(false)
    expect(instance.tag).toBe('div')
    expect(instance.slotData).toEqual({
      classItem: 'd1-horizontalScroll__item',
      classItemSelected: 'd1-horizontalScroll__item--selected',
      binds: {
        class: 'd1-horizontalScroll__item'
      }
    })
    expect(instance.hasInstance('scroll')).toBe(false)

    const binds = instance.binds
    expect(instance.hasInstance('scroll')).toBe(true)
    expect(binds.onWheel).toBeTypeOf('function')

    scope.stop()
  })

  it('should support DI override for ScrollToXInclude and custom tag', () => {
    const customOnWheel = vi.fn()
    class CustomScroll {
      get binds() {
        return { onWheel: customOnWheel }
      }
    }

    const element = document.createElement('div')
    const elementRef = ref<HTMLDivElement | undefined>(element)
    const scope = effectScope()
    let instance!: HorizontalScroll

    scope.run(() => {
      instance = new HorizontalScroll(
        { tag: 'section' } as HorizontalScrollProps,
        elementRef,
        new DesignName('d1.horizontalScroll'),
        undefined,
        undefined,
        undefined,
        { scroll: CustomScroll as unknown as typeof import('../../../classes/ScrollToXInclude').ScrollToXInclude }
      )
    })

    expect(instance.tag).toBe('section')
    expect(instance.binds).toEqual({ onWheel: customOnWheel })
    expect(instance.expose.getElement()).toBe(element)

    scope.stop()
  })

  it('should scroll to selected item on mount and cancel pending animation frame on unmount', async () => {
    const container = document.createElement('div')
    const selectedItem = document.createElement('div')
    selectedItem.className = 'd1-horizontalScroll__item--selected'
    container.appendChild(selectedItem)

    const goScrollToSpy = vi.spyOn(functional, 'goScrollTo').mockImplementation(() => undefined)
    let rafCallback: FrameRequestCallback | undefined
    const rafSpy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      rafCallback = callback
      return 123
    })
    const cancelRafSpy = vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => undefined)

    const instance = new HorizontalScroll(
      {} as HorizontalScrollProps,
      ref(container),
      new DesignName('d1.horizontalScroll')
    )

    await (instance as unknown as { onMounted: () => Promise<void> }).onMounted()
    expect(rafSpy).toHaveBeenCalledTimes(1)

    ;(instance as unknown as { onUnmounted: () => void }).onUnmounted()
    expect(cancelRafSpy).toHaveBeenCalledWith(123)

    // Re-test normal execution path
    const instanceActive = new HorizontalScroll(
      {} as HorizontalScrollProps,
      ref(container),
      new DesignName('d1.horizontalScroll')
    )
    await (instanceActive as unknown as { onMounted: () => Promise<void> }).onMounted()
    await nextTick()
    rafCallback?.(0)

    expect(goScrollToSpy).toHaveBeenCalledWith(container, selectedItem)
  })
})
