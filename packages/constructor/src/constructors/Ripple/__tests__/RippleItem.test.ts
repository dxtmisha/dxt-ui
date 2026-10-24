// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { RippleItem } from '../RippleItem'
import type { RippleProps } from '../props'

describe('RippleItem', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should add ripple element with correct classes and CSS coordinate variables when active', () => {
      const props = reactive<RippleProps>({ disabled: false })
      const container = document.createElement('span')
      const elementRef = ref<HTMLSpanElement | undefined>(container)
      const ripple = new RippleItem(props, elementRef, new DesignName('d1.ripple'))

      ripple.add({ x: 50, y: 100 })

      expect(container.children).toHaveLength(1)

      const child = container.children[0] as HTMLSpanElement
      expect(child.tagName.toLowerCase()).toBe('span')
      expect(child.classList.contains('d1-ripple__item')).toBe(true)
      expect(child.style.getPropertyValue('--d1-ripple-sys-x')).toBe('50px')
      expect(child.style.getPropertyValue('--d1-ripple-sys-y')).toBe('100px')
    })

    it('should add ripple element at center when add is called without coordinates', () => {
      const props = reactive<RippleProps>({ disabled: false })
      const container = document.createElement('span')
      Object.defineProperty(container, 'offsetWidth', { configurable: true, value: 200 })
      Object.defineProperty(container, 'offsetHeight', { configurable: true, value: 100 })
      const elementRef = ref<HTMLSpanElement | undefined>(container)
      const ripple = new RippleItem(props, elementRef, new DesignName('d1.ripple'))

      ripple.add()

      expect(container.children).toHaveLength(1)
      const child = container.children[0] as HTMLSpanElement
      expect(child.style.getPropertyValue('--d1-ripple-sys-x')).toBe('100px')
      expect(child.style.getPropertyValue('--d1-ripple-sys-y')).toBe('50px')
    })

    it('should add ripple element at center when addCenter is called', () => {
      const props = reactive<RippleProps>({ disabled: false })
      const container = document.createElement('span')
      Object.defineProperty(container, 'offsetWidth', { configurable: true, value: 200 })
      Object.defineProperty(container, 'offsetHeight', { configurable: true, value: 100 })
      const elementRef = ref<HTMLSpanElement | undefined>(container)
      const ripple = new RippleItem(props, elementRef, new DesignName('d1.ripple'))

      ripple.addCenter()

      expect(container.children).toHaveLength(1)
      const child = container.children[0] as HTMLSpanElement
      expect(child.style.getPropertyValue('--d1-ripple-sys-x')).toBe('100px')
      expect(child.style.getPropertyValue('--d1-ripple-sys-y')).toBe('50px')
    })
  })

  describe('Boundary values and coordinate fallbacks', () => {
    it('should preserve zero (0) coordinates instead of falling back to element center', () => {
      const props = reactive<RippleProps>({ disabled: false })
      const container = document.createElement('span')
      Object.defineProperty(container, 'offsetWidth', { configurable: true, value: 200 })
      Object.defineProperty(container, 'offsetHeight', { configurable: true, value: 100 })
      const elementRef = ref<HTMLSpanElement | undefined>(container)
      const ripple = new RippleItem(props, elementRef, new DesignName('d1.ripple'))

      ripple.add({ x: 0, y: 0 })

      const child = container.children[0] as HTMLSpanElement
      expect(child.style.getPropertyValue('--d1-ripple-sys-x')).toBe('0px')
      expect(child.style.getPropertyValue('--d1-ripple-sys-y')).toBe('0px')
    })

    it('should handle negative and fractional coordinates accurately', () => {
      const props = reactive<RippleProps>({ disabled: false })
      const container = document.createElement('span')
      const elementRef = ref<HTMLSpanElement | undefined>(container)
      const ripple = new RippleItem(props, elementRef, new DesignName('d1.ripple'))

      ripple.add({ x: -8.5, y: 42.25 })

      const child = container.children[0] as HTMLSpanElement
      expect(child.style.getPropertyValue('--d1-ripple-sys-x')).toBe('-8.5px')
      expect(child.style.getPropertyValue('--d1-ripple-sys-y')).toBe('42.25px')
    })
  })

  describe('Disabled state and unmounted element handling', () => {
    it('should not add ripple elements if disabled and should resume when enabled', () => {
      const props = reactive<RippleProps>({ disabled: true })
      const container = document.createElement('span')
      const elementRef = ref<HTMLSpanElement | undefined>(container)
      const ripple = new RippleItem(props, elementRef, new DesignName('d1.ripple'))

      ripple.add({ x: 50, y: 100 })
      ripple.addCenter()
      expect(container.children).toHaveLength(0)

      props.disabled = false
      ripple.add({ x: 50, y: 100 })
      expect(container.children).toHaveLength(1)
    })

    it('should safely no-op when element ref is undefined (SSR / before mount)', () => {
      const props = reactive<RippleProps>({ disabled: false })
      const elementRef = ref<HTMLSpanElement | undefined>(undefined)
      const ripple = new RippleItem(props, elementRef, new DesignName('d1.ripple'))

      expect(() => {
        ripple.add({ x: 10, y: 20 })
        ripple.addCenter()
      }).not.toThrow()
    })
  })

  describe('Statefulness and animation lifecycle', () => {
    it('should add end status class on animationend and remove child on transitionend', () => {
      const props = reactive<RippleProps>({ disabled: false })
      const container = document.createElement('span')
      const elementRef = ref<HTMLSpanElement | undefined>(container)
      const ripple = new RippleItem(props, elementRef, new DesignName('d1.ripple'))

      ripple.add({ x: 10, y: 20 })
      const child = container.children[0] as HTMLSpanElement

      expect(child.classList.contains('d1-ripple--end')).toBe(false)
      expect(child.onanimationend).toBeTypeOf('function')
      child.onanimationend?.(new Event('animationend') as unknown as AnimationEvent)
      expect(child.classList.contains('d1-ripple--end')).toBe(true)

      expect(container.children).toHaveLength(1)
      expect(child.ontransitionend).toBeTypeOf('function')
      child.ontransitionend?.(new Event('transitionend') as unknown as TransitionEvent)
      expect(container.children).toHaveLength(0)
    })
  })
})
