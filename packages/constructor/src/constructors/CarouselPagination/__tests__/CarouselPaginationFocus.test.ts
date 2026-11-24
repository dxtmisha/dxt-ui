// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { reactive, ref } from 'vue'

import { CarouselPaginationFocus } from '../CarouselPaginationFocus'
import { CarouselPaginationSelected } from '../CarouselPaginationSelected'
import type { CarouselPaginationProps } from '../props'

describe('CarouselPaginationFocus', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
    document.body.innerHTML = ''
  })

  const createInstance = (customProps: Partial<CarouselPaginationProps> = {}) => {
    const props = reactive<CarouselPaginationProps>({
      count: 5,
      selected: 1,
      ...customProps
    })

    const selected = new CarouselPaginationSelected(props)
    const selectedGetter = vi.fn(() => selected)
    const element = ref<HTMLDivElement>()

    const instance = new CarouselPaginationFocus(
      props,
      element,
      selectedGetter
    )

    return { instance, props, selected, selectedGetter, element }
  }

  describe('Static predicate and focusable eligibility', () => {
    it.each([
      ['bullets', true, true],
      ['dots', true, true],
      ['lines', true, true],
      ['fraction', true, false],
      ['progressbar', true, false],
      ['bullets', false, false],
      ['dots', false, false],
      ['lines', false, false],
      [undefined, undefined, true],
      [undefined, false, false]
    ] as const)('should evaluate static is(%s, control=%s) as %s', (type, control, expected) => {
      expect(CarouselPaginationFocus.is({ type, control })).toBe(expected)
    })

    it('should evaluate static is(undefined) as true', () => {
      expect(CarouselPaginationFocus.is(undefined)).toBe(true)
    })

    it('should not invoke selected getter eagerly in constructor', () => {
      const { selectedGetter } = createInstance()
      expect(selectedGetter).not.toHaveBeenCalled()
    })

    it('should return onKeydown bind when focusable and empty object otherwise', () => {
      const { instance } = createInstance({ type: 'bullets', control: true })
      expect(instance.binds).toHaveProperty('onKeydown')
      expect(instance.binds).not.toHaveProperty('tabindex')
      expect(instance.binds).not.toHaveProperty('onFocus')
      expect(instance.binds).not.toHaveProperty('onBlur')

      const { instance: disabledControl } = createInstance({ control: false })
      expect(disabledControl.binds).toEqual({})

      const { instance: fraction } = createInstance({ control: true, type: 'fraction' })
      expect(fraction.binds).toEqual({})

      const { instance: progressbar } = createInstance({ control: true, type: 'progressbar' })
      expect(progressbar.binds).toEqual({})
    })
  })

  describe('Keyboard navigation and boundary clamping', () => {
    it('should navigate next on ArrowRight and ArrowDown keydown', () => {
      const { instance, selected } = createInstance({ control: true, selected: 1, count: 5 })
      const onKeydown = instance.binds.onKeydown as (event: KeyboardEvent) => void

      const eventRight = new KeyboardEvent('keydown', { key: 'ArrowRight' })
      const preventDefaultRight = vi.spyOn(eventRight, 'preventDefault')
      onKeydown(eventRight)

      expect(preventDefaultRight).toHaveBeenCalledTimes(1)
      expect(selected.get()).toBe(2)

      const eventDown = new KeyboardEvent('keydown', { key: 'ArrowDown' })
      const preventDefaultDown = vi.spyOn(eventDown, 'preventDefault')
      onKeydown(eventDown)

      expect(preventDefaultDown).toHaveBeenCalledTimes(1)
      expect(selected.get()).toBe(3)
    })

    it('should navigate previous on ArrowLeft and ArrowUp keydown', () => {
      const { instance, selected } = createInstance({ control: true, selected: 3, count: 5 })
      const onKeydown = instance.binds.onKeydown as (event: KeyboardEvent) => void

      const eventLeft = new KeyboardEvent('keydown', { key: 'ArrowLeft' })
      const preventDefaultLeft = vi.spyOn(eventLeft, 'preventDefault')
      onKeydown(eventLeft)

      expect(preventDefaultLeft).toHaveBeenCalledTimes(1)
      expect(selected.get()).toBe(2)

      const eventUp = new KeyboardEvent('keydown', { key: 'ArrowUp' })
      const preventDefaultUp = vi.spyOn(eventUp, 'preventDefault')
      onKeydown(eventUp)

      expect(preventDefaultUp).toHaveBeenCalledTimes(1)
      expect(selected.get()).toBe(1)
    })

    it('should not exceed min/max boundaries on repeated navigation', () => {
      const { instance, selected } = createInstance({ control: true, selected: 1, count: 3 })
      const onKeydown = instance.binds.onKeydown as (event: KeyboardEvent) => void

      onKeydown(new KeyboardEvent('keydown', { key: 'ArrowLeft' }))
      expect(selected.get()).toBe(1)

      onKeydown(new KeyboardEvent('keydown', { key: 'End' }))
      expect(selected.get()).toBe(3)

      onKeydown(new KeyboardEvent('keydown', { key: 'ArrowRight' }))
      expect(selected.get()).toBe(3)

      onKeydown(new KeyboardEvent('keydown', { key: 'Home' }))
      expect(selected.get()).toBe(1)
    })

    it('should ignore unrelated keys without calling preventDefault', () => {
      const { instance, selected } = createInstance({ control: true, selected: 2, count: 5 })
      const onKeydown = instance.binds.onKeydown as (event: KeyboardEvent) => void

      const eventTab = new KeyboardEvent('keydown', { key: 'Tab' })
      const preventDefaultTab = vi.spyOn(eventTab, 'preventDefault')
      onKeydown(eventTab)

      expect(preventDefaultTab).not.toHaveBeenCalled()
      expect(selected.get()).toBe(2)
    })
  })

  describe('DOM focus delegation', () => {
    it('should move DOM focus to the target button by data-index selector', () => {
      vi.useFakeTimers()
      const { instance, element } = createInstance({ control: true, selected: 1, count: 3 })
      const onKeydown = instance.binds.onKeydown as (event: KeyboardEvent) => void

      const container = document.createElement('div')
      const button1 = document.createElement('button')
      button1.setAttribute('data-index', '1')
      const button2 = document.createElement('button')
      button2.setAttribute('data-index', '2')
      container.appendChild(button1)
      container.appendChild(button2)
      document.body.appendChild(container)

      element.value = container

      const focusSpy = vi.spyOn(button2, 'focus')
      onKeydown(new KeyboardEvent('keydown', { key: 'ArrowRight' }))

      vi.runAllTimers()
      expect(focusSpy).toHaveBeenCalledTimes(1)
    })

    it('should handle missing container element gracefully without throwing', () => {
      vi.useFakeTimers()
      const { instance } = createInstance({ control: true, selected: 1, count: 3 })
      const onKeydown = instance.binds.onKeydown as (event: KeyboardEvent) => void

      expect(() => {
        onKeydown(new KeyboardEvent('keydown', { key: 'ArrowRight' }))
        vi.runAllTimers()
      }).not.toThrow()
    })
  })
})
