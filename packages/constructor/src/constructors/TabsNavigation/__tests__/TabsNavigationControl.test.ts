// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { ListDataRef } from '@dxtmisha/functional'

import type { HorizontalScrollInclude } from '../../HorizontalScroll'
import type { TabsNavigationFocus } from '../TabsNavigationFocus'
import type { TabsNavigationSelected } from '../TabsNavigationSelected'
import { TabsNavigationControl } from '../TabsNavigationControl'

describe('TabsNavigationControl', () => {
  afterEach(() => {
    document.dir = ''
    document.documentElement.dir = ''
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  const createFixture = (
    items: Array<{ value: string | number, label: string, disabled?: boolean }> = [
      { value: 'tab-1', label: 'Tab 1' },
      { value: 'tab-2', label: 'Tab 2' },
      { value: 'tab-3', label: 'Tab 3' }
    ],
    options: { dir?: string, styleDirection?: string } = {}
  ) => {
    const container = document.createElement('div')

    if (options.dir) {
      container.setAttribute('dir', options.dir)
    }

    if (options.styleDirection) {
      container.style.direction = options.styleDirection
    }

    document.body.appendChild(container)

    const focusValue = ref<string | number | undefined>()
    const selectedValue = ref<string | number | undefined>(items[0]?.value)

    const data = new ListDataRef(
      ref(items),
      focusValue,
      undefined,
      undefined,
      undefined,
      selectedValue
    )

    const setFocus = vi.fn((value?: string | number | boolean) => {
      focusValue.value = value as string | number | undefined
    })
    const positionFocus = vi.fn(() => {
      focusValue.value = selectedValue.value
    })
    const resetFocus = vi.fn(() => {
      focusValue.value = undefined
    })
    const focus = {
      get: () => focusValue.value,
      set: setFocus,
      position: positionFocus,
      reset: resetFocus
    } as unknown as TabsNavigationFocus

    const setSelected = vi.fn((value?: string | number | boolean) => {
      selectedValue.value = value as string | number | undefined
    })
    const selected = {
      set: setSelected
    } as unknown as TabsNavigationSelected

    const scroll = {
      elementHtml: container
    } as unknown as HorizontalScrollInclude

    const control = new TabsNavigationControl(
      () => data,
      () => focus,
      () => scroll,
      () => selected
    )

    return {
      container,
      focusValue,
      selectedValue,
      setFocus,
      positionFocus,
      resetFocus,
      setSelected,
      control
    }
  }

  it('should define focus/blur binds and expose first and last items', () => {
    const { control } = createFixture()

    expect(control.binds).toEqual({
      onFocus: control.onFocus,
      onBlur: control.onBlur
    })
    expect(control.getFirstItem()).toBe('tab-1')
    expect(control.getLastItem()).toBe('tab-3')
  })

  it('should start keydown listener on focus, stop on blur, and clean up onUnmounted without leaks', () => {
    const addSpy = vi.spyOn(document.body, 'addEventListener')
    const removeSpy = vi.spyOn(document.body, 'removeEventListener')
    const { control, positionFocus, resetFocus } = createFixture()

    control.onFocus()
    expect(positionFocus).toHaveBeenCalledTimes(1)
    expect(addSpy).toHaveBeenCalledWith('keydown', expect.any(Function), undefined)

    control.onBlur()
    expect(resetFocus).toHaveBeenCalledTimes(1)
    expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function), undefined)

    // Focus again and unmount directly without blur
    control.onFocus()
    control.onUnmounted()
    expect(resetFocus).toHaveBeenCalledTimes(2)
    expect(removeSpy).toHaveBeenCalledTimes(2)
  })

  it('should navigate ArrowLeft, ArrowRight, Home, End, and select via Enter/Space in LTR', () => {
    const { control, focusValue, setFocus, setSelected } = createFixture()

    control.onFocus()
    expect(focusValue.value).toBe('tab-1')

    // ArrowRight -> tab-2
    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight', bubbles: true, cancelable: true }))
    expect(setFocus).toHaveBeenLastCalledWith('tab-2')

    // ArrowLeft -> tab-1
    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft', bubbles: true, cancelable: true }))
    expect(setFocus).toHaveBeenLastCalledWith('tab-1')

    // End -> tab-3
    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'End', bubbles: true, cancelable: true }))
    expect(setFocus).toHaveBeenLastCalledWith('tab-3')

    // Enter selects focused tab-3
    const enterEvent = new KeyboardEvent('keydown', { code: 'Enter', bubbles: true, cancelable: true })
    document.body.dispatchEvent(enterEvent)
    expect(enterEvent.defaultPrevented).toBe(true)
    expect(setSelected).toHaveBeenLastCalledWith('tab-3')

    // Home -> tab-1
    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'Home', bubbles: true, cancelable: true }))
    expect(setFocus).toHaveBeenLastCalledWith('tab-1')

    // Space selects focused tab-1
    const spaceEvent = new KeyboardEvent('keydown', { code: 'Space', bubbles: true, cancelable: true })
    document.body.dispatchEvent(spaceEvent)
    expect(spaceEvent.defaultPrevented).toBe(true)
    expect(setSelected).toHaveBeenLastCalledWith('tab-1')

    control.onUnmounted()
  })

  it('should invert ArrowLeft and ArrowRight navigation in RTL mode', () => {
    const { control, setFocus } = createFixture(undefined, { dir: 'rtl' })

    control.onFocus()

    // In RTL, ArrowLeft moves to next (tab-2)
    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft', bubbles: true, cancelable: true }))
    expect(setFocus).toHaveBeenLastCalledWith('tab-2')

    // In RTL, ArrowRight moves to prev (tab-1)
    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight', bubbles: true, cancelable: true }))
    expect(setFocus).toHaveBeenLastCalledWith('tab-1')

    control.onUnmounted()
  })

  it('should ignore IME composition events, disabled items, and empty lists', () => {
    const { control, setFocus, setSelected } = createFixture([
      { value: 'tab-1', label: 'Tab 1', disabled: true },
      { value: 'tab-2', label: 'Tab 2' }
    ])

    control.onFocus()

    // IME composition guard
    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight', isComposing: true }))
    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'Enter', isComposing: true }))
    expect(setFocus).not.toHaveBeenCalled()
    expect(setSelected).not.toHaveBeenCalled()

    // Disabled item must not be selected via Enter
    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'Enter', cancelable: true }))
    expect(setSelected).not.toHaveBeenCalled()

    control.onUnmounted()

    // Empty list no-op
    const emptyFixture = createFixture([])
    emptyFixture.control.onFocus()
    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight' }))
    expect(emptyFixture.setFocus).not.toHaveBeenCalled()
    emptyFixture.control.onUnmounted()
  })

  it('should navigate numeric 0 tab indices accurately', () => {
    const { control, setFocus, setSelected } = createFixture([
      { value: 0, label: 'Zero' },
      { value: 1, label: 'One' }
    ])

    control.onFocus()
    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight', cancelable: true }))
    expect(setFocus).toHaveBeenLastCalledWith(1)

    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'Home', cancelable: true }))
    expect(setFocus).toHaveBeenLastCalledWith(0)

    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'Enter', cancelable: true }))
    expect(setSelected).toHaveBeenLastCalledWith(0)

    control.onUnmounted()
  })
})
