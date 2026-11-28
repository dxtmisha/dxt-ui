// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { ref, type Ref } from 'vue'
import * as functional from '@dxtmisha/functional'
import type { ConstrBind } from '@dxtmisha/functional'

import { ControlAbstract } from '../ControlAbstract'
import { FrameAbstract } from '../FrameAbstract'
import type { ControlProps } from '../../types/controlTypes'

describe('ControlAbstract', () => {
  beforeEach(() => {
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      callback(0)
      return 1
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
    vi.useRealTimers()
    document.body.innerHTML = ''
    document.documentElement.removeAttribute('dir')
    document.dir = ''
  })

  class TestControl extends ControlAbstract {
    constructor(
      props: ControlProps | undefined,
      element: Ref<HTMLElement | undefined>,
      public currentIndex: number = 1,
      public maxCount: number = 5,
      public minCount: number = 1,
      public selectorPattern: (index: number) => string = index => `[data-index="${index}"]`
    ) {
      super(props, element)
    }

    public override isFocusable(): boolean {
      return super.isFocusable()
    }

    public override isRtl(): boolean {
      return super.isRtl()
    }

    public override getIndex(): number {
      return this.currentIndex
    }

    public override getMax(): number {
      return this.maxCount
    }

    public override getMin(): number {
      return this.minCount
    }

    public override getSelector(index: number): string {
      return this.selectorPattern(index)
    }

    public override setIndex(index: number): void {
      this.currentIndex = index
    }

    public override set(index: number): void {
      super.set(index)
    }

    public override first(): void {
      super.first()
    }

    public override last(): void {
      super.last()
    }

    public override next(): void {
      super.next()
    }

    public override previous(): void {
      super.previous()
    }

    public override focus(index?: number): void {
      super.focus(index)
    }

    public callOnKeydown(event: KeyboardEvent): void {
      this.onKeydown(event)
    }
  }

  const createInstance = (options: {
    props?: ControlProps
    initialIndex?: number
    max?: number
    min?: number
    selector?: (index: number) => string
  } = {}) => {
    const element = ref<HTMLDivElement>()
    const instance = new TestControl(
      options.props,
      element,
      options.initialIndex ?? 1,
      options.max ?? 5,
      options.min ?? 1,
      options.selector
    )

    return {
      instance,
      element,
      getCurrentIndex: () => instance.currentIndex,
      onKeydown: (event: KeyboardEvent) => {
        const handler = instance.binds.onKeydown as ((e: KeyboardEvent) => void) | undefined
        handler?.(event)
      }
    }
  }

  describe('Static predicate and focusable eligibility', () => {
    it('should evaluate static is() correctly for control prop variants', () => {
      expect(ControlAbstract.is()).toBe(true)
      expect(ControlAbstract.is(undefined)).toBe(true)
      expect(ControlAbstract.is({})).toBe(true)
      expect(ControlAbstract.is({ control: true })).toBe(true)
      expect(ControlAbstract.is({ control: false })).toBe(false)

      expectTypeOf(ControlAbstract.is).returns.toEqualTypeOf<boolean>()
    })

    it('should be focusable by default when props is undefined, empty, or control is true', () => {
      const { instance: undefinedProps } = createInstance()
      expect(undefinedProps).toBeInstanceOf(FrameAbstract)
      expect(undefinedProps.isFocusable()).toBe(true)
      expect(undefinedProps.binds).toHaveProperty('onKeydown')
      expectTypeOf(undefinedProps.binds).toEqualTypeOf<ConstrBind>()

      const { instance: emptyProps } = createInstance({ props: {} })
      expect(emptyProps.isFocusable()).toBe(true)
      expect(emptyProps.binds).toHaveProperty('onKeydown')

      const { instance: trueProps } = createInstance({ props: { control: true } })
      expect(trueProps.isFocusable()).toBe(true)
      expect(trueProps.binds).toHaveProperty('onKeydown')
    })

    it('should not be focusable when control is false', () => {
      const { instance } = createInstance({ props: { control: false } })

      expect(instance.isFocusable()).toBe(false)
      expect(instance.binds).toEqual({})
    })

    it('can be overridden by subclass for custom focusable conditions', () => {
      class CustomControl extends TestControl {
        override isFocusable(): boolean {
          return super.isFocusable() && false
        }
      }

      const element = ref<HTMLDivElement>()
      const customInstance = new CustomControl({ control: true }, element)

      expect(customInstance.isFocusable()).toBe(false)
      expect(customInstance.binds).toEqual({})
    })
  })

  describe('Keyboard navigation and IME composition guard', () => {
    it('should navigate next on ArrowRight and ArrowDown keydown', () => {
      const { getCurrentIndex, onKeydown } = createInstance({
        initialIndex: 1,
        max: 5
      })

      const eventRight = new KeyboardEvent('keydown', { key: 'ArrowRight' })
      const preventDefaultRight = vi.spyOn(eventRight, 'preventDefault')
      onKeydown(eventRight)

      expect(preventDefaultRight).toHaveBeenCalledTimes(1)
      expect(getCurrentIndex()).toBe(2)

      const eventDown = new KeyboardEvent('keydown', { key: 'ArrowDown' })
      const preventDefaultDown = vi.spyOn(eventDown, 'preventDefault')
      onKeydown(eventDown)

      expect(preventDefaultDown).toHaveBeenCalledTimes(1)
      expect(getCurrentIndex()).toBe(3)
    })

    it('should navigate previous on ArrowLeft and ArrowUp keydown', () => {
      const { getCurrentIndex, onKeydown } = createInstance({
        initialIndex: 3,
        max: 5
      })

      const eventLeft = new KeyboardEvent('keydown', { key: 'ArrowLeft' })
      const preventDefaultLeft = vi.spyOn(eventLeft, 'preventDefault')
      onKeydown(eventLeft)

      expect(preventDefaultLeft).toHaveBeenCalledTimes(1)
      expect(getCurrentIndex()).toBe(2)

      const eventUp = new KeyboardEvent('keydown', { key: 'ArrowUp' })
      const preventDefaultUp = vi.spyOn(eventUp, 'preventDefault')
      onKeydown(eventUp)

      expect(preventDefaultUp).toHaveBeenCalledTimes(1)
      expect(getCurrentIndex()).toBe(1)
    })

    it('should navigate to first item on Home and last item on End', () => {
      const { getCurrentIndex, onKeydown } = createInstance({
        initialIndex: 3,
        max: 5
      })

      const eventHome = new KeyboardEvent('keydown', { key: 'Home' })
      const preventDefaultHome = vi.spyOn(eventHome, 'preventDefault')
      onKeydown(eventHome)

      expect(preventDefaultHome).toHaveBeenCalledTimes(1)
      expect(getCurrentIndex()).toBe(1)

      const eventEnd = new KeyboardEvent('keydown', { key: 'End' })
      const preventDefaultEnd = vi.spyOn(eventEnd, 'preventDefault')
      onKeydown(eventEnd)

      expect(preventDefaultEnd).toHaveBeenCalledTimes(1)
      expect(getCurrentIndex()).toBe(5)
    })

    it('should ignore unrelated keys without calling preventDefault', () => {
      const { getCurrentIndex, onKeydown } = createInstance({
        initialIndex: 2,
        max: 5
      })

      for (const key of ['Tab', 'Enter', ' ', 'Escape']) {
        const event = new KeyboardEvent('keydown', { key })
        const preventDefaultSpy = vi.spyOn(event, 'preventDefault')
        onKeydown(event)

        expect(preventDefaultSpy).not.toHaveBeenCalled()
        expect(getCurrentIndex()).toBe(2)
      }
    })

    it('should ignore keydown events during IME composition', () => {
      const { getCurrentIndex, onKeydown } = createInstance({
        initialIndex: 2,
        max: 5
      })

      const eventRight = new KeyboardEvent('keydown', { key: 'ArrowRight', isComposing: true })
      const preventDefaultSpy = vi.spyOn(eventRight, 'preventDefault')
      onKeydown(eventRight)

      expect(preventDefaultSpy).not.toHaveBeenCalled()
      expect(getCurrentIndex()).toBe(2)
    })

    it('should ignore direct onKeydown calls when isFocusable() returns false', () => {
      const { instance, getCurrentIndex } = createInstance({
        props: { control: false },
        initialIndex: 2,
        max: 5
      })

      const eventRight = new KeyboardEvent('keydown', { key: 'ArrowRight' })
      const preventDefaultSpy = vi.spyOn(eventRight, 'preventDefault')
      instance.callOnKeydown(eventRight)

      expect(preventDefaultSpy).not.toHaveBeenCalled()
      expect(getCurrentIndex()).toBe(2)
    })

    it('should invert ArrowLeft and ArrowRight navigation in RTL direction and respect LTR override', () => {
      const { instance, element, getCurrentIndex, onKeydown } = createInstance({
        initialIndex: 3,
        min: 1,
        max: 5
      })

      const wrapper = document.createElement('div')
      wrapper.setAttribute('dir', 'rtl')
      const container = document.createElement('div')
      wrapper.appendChild(container)
      document.body.appendChild(wrapper)
      element.value = container

      expect(instance.isRtl()).toBe(true)

      onKeydown(new KeyboardEvent('keydown', { key: 'ArrowRight' }))
      expect(getCurrentIndex()).toBe(2)

      onKeydown(new KeyboardEvent('keydown', { key: 'ArrowLeft' }))
      expect(getCurrentIndex()).toBe(3)

      onKeydown(new KeyboardEvent('keydown', { key: 'ArrowDown' }))
      expect(getCurrentIndex()).toBe(4)

      onKeydown(new KeyboardEvent('keydown', { key: 'ArrowUp' }))
      expect(getCurrentIndex()).toBe(3)

      container.setAttribute('dir', 'ltr')
      expect(instance.isRtl()).toBe(false)

      onKeydown(new KeyboardEvent('keydown', { key: 'ArrowRight' }))
      expect(getCurrentIndex()).toBe(4)
    })

    it('should detect RTL from documentElement.dir when container is absent', () => {
      const { instance } = createInstance({ initialIndex: 2, max: 5 })

      document.documentElement.dir = 'rtl'
      expect(instance.isRtl()).toBe(true)
    })
  })

  describe('Boundary values, zero index traps, and empty ranges', () => {
    it('should clamp at min and max boundaries on next and previous', () => {
      const { getCurrentIndex, onKeydown } = createInstance({
        initialIndex: 1,
        min: 1,
        max: 5
      })

      onKeydown(new KeyboardEvent('keydown', { key: 'ArrowLeft' }))
      expect(getCurrentIndex()).toBe(1)

      onKeydown(new KeyboardEvent('keydown', { key: 'End' }))
      expect(getCurrentIndex()).toBe(5)

      onKeydown(new KeyboardEvent('keydown', { key: 'ArrowRight' }))
      expect(getCurrentIndex()).toBe(5)
    })

    it('should support numeric 0 as valid min and target index', () => {
      const { instance, getCurrentIndex } = createInstance({
        initialIndex: 1,
        min: 0,
        max: 3
      })

      instance.previous()
      expect(getCurrentIndex()).toBe(0)

      instance.previous()
      expect(getCurrentIndex()).toBe(0)

      instance.last()
      expect(getCurrentIndex()).toBe(3)

      instance.first()
      expect(getCurrentIndex()).toBe(0)

      instance.set(0)
      expect(getCurrentIndex()).toBe(0)
    })

    it('should ignore navigation and direct set() calls when out of bounds or range is empty (min > max)', () => {
      const { instance: normal, getCurrentIndex: getNormalIndex } = createInstance({
        initialIndex: 2,
        min: 1,
        max: 5
      })
      const normalSetIndexSpy = vi.spyOn(normal, 'setIndex')
      const normalFocusSpy = vi.spyOn(normal, 'focus')

      normal.set(0)
      normal.set(6)
      expect(normalSetIndexSpy).not.toHaveBeenCalled()
      expect(normalFocusSpy).not.toHaveBeenCalled()
      expect(getNormalIndex()).toBe(2)

      const { instance, getCurrentIndex } = createInstance({
        initialIndex: 1,
        min: 1,
        max: 0
      })
      const setIndexSpy = vi.spyOn(instance, 'setIndex')
      const focusSpy = vi.spyOn(instance, 'focus')

      instance.next()
      instance.previous()
      instance.first()
      instance.last()

      expect(setIndexSpy).not.toHaveBeenCalled()
      expect(focusSpy).not.toHaveBeenCalled()
      expect(getCurrentIndex()).toBe(1)
    })
  })

  describe('DOM focus delegation and SSR safety', () => {
    it('should focus target element in DOM matching default or custom selector', () => {
      const { instance, element } = createInstance({
        initialIndex: 1,
        max: 3
      })

      const container = document.createElement('div')
      const button1 = document.createElement('button')
      button1.setAttribute('data-index', '1')
      const button2 = document.createElement('button')
      button2.setAttribute('data-index', '2')
      container.appendChild(button1)
      container.appendChild(button2)
      document.body.appendChild(container)
      element.value = container

      const focusSpy1 = vi.spyOn(button1, 'focus')
      const focusSpy2 = vi.spyOn(button2, 'focus')

      instance.focus()
      expect(focusSpy1).toHaveBeenCalledTimes(1)

      instance.focus(2)
      expect(focusSpy2).toHaveBeenCalledTimes(1)
    })

    it('should focus using custom selector function and support index 0', () => {
      const { instance, element } = createInstance({
        initialIndex: 0,
        min: 0,
        max: 3,
        selector: (index: number) => `[data-item-id="${index}"]`
      })

      const container = document.createElement('div')
      const button0 = document.createElement('button')
      button0.setAttribute('data-item-id', '0')
      const button3 = document.createElement('button')
      button3.setAttribute('data-item-id', '3')
      container.appendChild(button0)
      container.appendChild(button3)
      document.body.appendChild(container)
      element.value = container

      const focusSpy0 = vi.spyOn(button0, 'focus')
      const focusSpy3 = vi.spyOn(button3, 'focus')

      instance.focus()
      expect(focusSpy0).toHaveBeenCalledTimes(1)

      instance.focus(3)
      expect(focusSpy3).toHaveBeenCalledTimes(1)
    })

    it('should handle missing container or missing target element safely without throwing', () => {
      const { instance, element } = createInstance({
        initialIndex: 1,
        max: 3
      })

      expect(() => instance.focus()).not.toThrow()

      const container = document.createElement('div')
      document.body.appendChild(container)
      element.value = container

      expect(() => instance.focus(99)).not.toThrow()
    })

    it('should skip requestAnimationFrame and DOM queries when isDomRuntime returns false', () => {
      vi.spyOn(functional, 'isDomRuntime').mockReturnValue(false)
      const rafSpy = vi.fn()
      vi.stubGlobal('requestAnimationFrame', rafSpy)

      const { instance, element } = createInstance({
        initialIndex: 1,
        max: 3
      })

      const container = document.createElement('div')
      const button = document.createElement('button')
      button.setAttribute('data-index', '2')
      container.appendChild(button)
      element.value = container

      const focusSpy = vi.spyOn(button, 'focus')
      instance.focus(2)

      expect(rafSpy).not.toHaveBeenCalled()
      expect(focusSpy).not.toHaveBeenCalled()
    })

    it('should cancel pending animation frame on rapid focus calls and on unmount', () => {
      const callbacks: FrameRequestCallback[] = []
      const cancelSpy = vi.fn()
      let nextFrameId = 1

      vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
        callbacks.push(callback)
        return nextFrameId++
      })
      vi.stubGlobal('cancelAnimationFrame', cancelSpy)

      const { instance, element } = createInstance({
        initialIndex: 1,
        max: 3
      })

      const container = document.createElement('div')
      const button1 = document.createElement('button')
      button1.setAttribute('data-index', '1')
      const button2 = document.createElement('button')
      button2.setAttribute('data-index', '2')
      container.appendChild(button1)
      container.appendChild(button2)
      document.body.appendChild(container)
      element.value = container

      const focusSpy1 = vi.spyOn(button1, 'focus')
      const focusSpy2 = vi.spyOn(button2, 'focus')

      instance.focus(1)
      instance.focus(2)

      expect(cancelSpy).toHaveBeenCalledTimes(1)
      expect(cancelSpy).toHaveBeenCalledWith(1)

      callbacks[1]?.(0)
      expect(focusSpy1).not.toHaveBeenCalled()
      expect(focusSpy2).toHaveBeenCalledTimes(1)

      instance.focus(1)
      instance.onUnmounted()
      expect(cancelSpy).toHaveBeenCalledTimes(2)
      expect(cancelSpy).toHaveBeenCalledWith(3)
    })
  })

  describe('Instance isolation', () => {
    it('should isolate navigation state across separate instances', () => {
      const first = createInstance({ initialIndex: 1, max: 5 })
      const second = createInstance({ initialIndex: 4, max: 5 })

      first.instance.next()
      second.instance.previous()

      expect(first.getCurrentIndex()).toBe(2)
      expect(second.getCurrentIndex()).toBe(3)
    })
  })
})
