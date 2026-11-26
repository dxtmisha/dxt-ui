// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, ref } from 'vue'
import { DesignName, ScrollbarWidthRef } from '@dxtmisha/functional'

import { ScrollStickyScroll } from '../ScrollStickyScroll'
import type { ScrollStickyProps } from '../props'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('ScrollStickyScroll (isolated class)', () => {
  it('does not attach DOM listeners until onMounted and cleans up watchers and listeners on onUnmounted', async () => {
    const element = ref<HTMLDivElement | undefined>()
    const scrollElement = ref<HTMLDivElement | undefined>()
    const naming = new DesignName('d1.scrollSticky')
    const widthRef = new ScrollbarWidthRef()
    widthRef.width.value = 18

    const mainEl = document.createElement('div')
    Object.defineProperty(mainEl, 'scrollWidth', { value: 960, configurable: true })
    mainEl.scrollLeft = 45

    const scrollEl = document.createElement('div')
    const addMainSpy = vi.spyOn(mainEl, 'addEventListener')
    const removeMainSpy = vi.spyOn(mainEl, 'removeEventListener')
    const addScrollSpy = vi.spyOn(scrollEl, 'addEventListener')
    const removeScrollSpy = vi.spyOn(scrollEl, 'removeEventListener')

    const props: ScrollStickyProps = { visible: true }
    const helper = new ScrollStickyScroll(
      props,
      element,
      naming,
      () => widthRef,
      scrollElement
    )

    element.value = mainEl
    scrollElement.value = scrollEl
    await nextTick()

    // No watchers registered in constructor
    expect(addMainSpy).not.toHaveBeenCalled()
    expect(addScrollSpy).not.toHaveBeenCalled()

    const scope = effectScope()
    scope.run(() => {
      helper.onMounted()
    })

    expect(addMainSpy).toHaveBeenCalled()
    expect(addScrollSpy).toHaveBeenCalled()
    expect(scrollEl.style.getPropertyValue('--d1-scrollSticky-sys-width')).toBe('960px')
    expect(scrollEl.style.getPropertyValue('--d1-scrollSticky-sys-scrollHeight')).toBe('18px')
    expect(scrollEl.scrollLeft).toBe(45)

    scrollEl.scrollLeft = 120
    helper.onScroll()
    expect(mainEl.scrollLeft).toBe(120)

    mainEl.scrollLeft = 200
    helper.onMain()
    expect(scrollEl.scrollLeft).toBe(200)

    widthRef.width.value = 24
    await nextTick()
    expect(scrollEl.style.getPropertyValue('--d1-scrollSticky-sys-scrollHeight')).toBe('24px')

    helper.onUnmounted()
    scope.stop()

    expect(removeMainSpy).toHaveBeenCalled()
    expect(removeScrollSpy).toHaveBeenCalled()
  })
})
