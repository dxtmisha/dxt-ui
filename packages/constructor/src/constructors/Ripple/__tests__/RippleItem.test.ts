// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { RippleItem } from '../RippleItem'

describe('RippleItem', () => {
  it('should not add ripple elements if disabled', () => {
    const props = { disabled: true }
    const container = document.createElement('span')
    const elementRef = ref<HTMLSpanElement>(container)
    const ripple = new RippleItem(props, elementRef, new DesignName('d1.ripple'))

    ripple.add({ x: 50, y: 100 })

    expect(container.children.length).toBe(0)
  })

  it('should add ripple element with correct classes and styles when active', () => {
    const props = { disabled: false }
    const container = document.createElement('span')
    const elementRef = ref<HTMLSpanElement>(container)
    const ripple = new RippleItem(props, elementRef, new DesignName('d1.ripple'))

    ripple.add({ x: 50, y: 100 })

    expect(container.children.length).toBe(1)

    const child = container.children[0] as HTMLSpanElement
    expect(child.tagName.toLowerCase()).toBe('span')
    expect(child.classList.contains('d1-ripple__item')).toBe(true)
    expect(child.style.getPropertyValue('--d1-ripple-sys-x')).toBe('50px')
    expect(child.style.getPropertyValue('--d1-ripple-sys-y')).toBe('100px')
  })

  it('should add transition and animation event listeners that update state and remove element', () => {
    const props = { disabled: false }
    const container = document.createElement('span')
    const elementRef = ref<HTMLSpanElement>(container)
    const ripple = new RippleItem(props, elementRef, new DesignName('d1.ripple'))

    ripple.add({ x: 10, y: 20 })
    const child = container.children[0] as HTMLSpanElement

    // Verify onanimationend adds the end class
    expect(child.classList.contains('d1-ripple--end')).toBe(false)
    expect(child.onanimationend).toBeTypeOf('function')
    child.dispatchEvent(new Event('animationend'))
    if (!child.classList.contains('d1-ripple--end')) {
      child.onanimationend?.(new Event('animationend') as unknown as AnimationEvent)
    }
    expect(child.classList.contains('d1-ripple--end')).toBe(true)

    // Verify ontransitionend removes the child
    expect(container.children.length).toBe(1)
    expect(child.ontransitionend).toBeTypeOf('function')
    child.dispatchEvent(new Event('transitionend'))
    if (container.children.length === 1) {
      child.ontransitionend?.(new Event('transitionend') as unknown as TransitionEvent)
    }
    expect(container.children.length).toBe(0)
  })

  it('should add ripple element at center when add is called without coordinates', () => {
    const props = { disabled: false }
    const container = document.createElement('span')
    Object.defineProperty(container, 'offsetWidth', { configurable: true, value: 200 })
    Object.defineProperty(container, 'offsetHeight', { configurable: true, value: 100 })
    const elementRef = ref<HTMLSpanElement>(container)
    const ripple = new RippleItem(props, elementRef, new DesignName('d1.ripple'))

    ripple.add()

    expect(container.children.length).toBe(1)
    const child = container.children[0] as HTMLSpanElement
    expect(child.style.getPropertyValue('--d1-ripple-sys-x')).toBe('100px')
    expect(child.style.getPropertyValue('--d1-ripple-sys-y')).toBe('50px')
  })

  it('should add ripple element at center when addCenter is called', () => {
    const props = { disabled: false }
    const container = document.createElement('span')
    Object.defineProperty(container, 'offsetWidth', { configurable: true, value: 200 })
    Object.defineProperty(container, 'offsetHeight', { configurable: true, value: 100 })
    const elementRef = ref<HTMLSpanElement>(container)
    const ripple = new RippleItem(props, elementRef, new DesignName('d1.ripple'))

    ripple.addCenter()

    expect(container.children.length).toBe(1)
    const child = container.children[0] as HTMLSpanElement
    expect(child.style.getPropertyValue('--d1-ripple-sys-x')).toBe('100px')
    expect(child.style.getPropertyValue('--d1-ripple-sys-y')).toBe('50px')
  })
})
