// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { RippleItem } from '../RippleItem'

describe('RippleItem', () => {
  it('should not add ripple elements if disabled', () => {
    const props = { disabled: true }
    const container = document.createElement('span')
    const elementRef = ref<HTMLSpanElement>(container)
    const ripple = new RippleItem(props, elementRef, 'd1-ripple')

    ripple.add(50, 100)

    expect(container.children.length).toBe(0)
  })

  it('should add ripple element with correct classes and styles when active', () => {
    const props = { disabled: false }
    const container = document.createElement('span')
    const elementRef = ref<HTMLSpanElement>(container)
    const ripple = new RippleItem(props, elementRef, 'd1-ripple')

    ripple.add(50, 100)

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
    const ripple = new RippleItem(props, elementRef, 'd1-ripple')

    ripple.add(10, 20)
    const child = container.children[0] as HTMLSpanElement

    // Verify onanimationend adds the end class
    expect(child.classList.contains('d1-ripple--end')).toBe(false)
    expect(child.onanimationend).toBeTypeOf('function')
    child.onanimationend!(null as any)
    expect(child.classList.contains('d1-ripple--end')).toBe(true)

    // Verify ontransitionend removes the child
    expect(container.children.length).toBe(1)
    expect(child.ontransitionend).toBeTypeOf('function')
    child.ontransitionend!(null as any)
    expect(container.children.length).toBe(0)
  })
})
