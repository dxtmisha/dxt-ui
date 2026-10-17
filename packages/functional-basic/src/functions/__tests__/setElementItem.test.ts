/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from 'vitest'
import { setElementItem } from '../setElementItem'

describe('setElementItem', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
  })

  it('should set property on element', () => {
    setElementItem(element, 'id', 'new-id')
    expect(element.id).toBe('new-id')
  })

  it('should set attribute if property does not exist without requiring as any', () => {
    setElementItem(element, 'data-test', 'value')
    expect(element.getAttribute('data-test')).toBe('value')
  })

  it('should handle object values for nested properties', () => {
    const customContainer = element as unknown as { custom: { a: number, b?: number } }
    customContainer.custom = { a: 1 }
    setElementItem(element, 'custom', { b: 2 })
    expect(customContainer.custom.b).toBe(2)
    expect(customContainer.custom.a).toBe(1)
  })

  it('should handle function values', () => {
    const fn = () => 'test'
    setElementItem(element, 'onclick', () => fn)
    // In JSDOM/browser, setting element.onclick = fn works
    expect(element.onclick).toBe(fn)
  })

  it('should set boolean aria-* attributes as "true" or "false" string in DOM', () => {
    setElementItem(element, 'aria-hidden', true)
    expect(element.getAttribute('aria-hidden')).toBe('true')

    setElementItem(element, 'aria-hidden', false)
    expect(element.getAttribute('aria-hidden')).toBe('false')
  })

  it('should set numeric attributes as strings', () => {
    setElementItem(element, 'data-count', 0)
    expect(element.getAttribute('data-count')).toBe('0')

    setElementItem(element, 'data-count', 42)
    expect(element.getAttribute('data-count')).toBe('42')
  })

  it('should remove attribute when null or undefined is passed', () => {
    element.setAttribute('data-removable', 'initial')
    expect(element.getAttribute('data-removable')).toBe('initial')

    setElementItem(element, 'data-removable', null)
    expect(element.hasAttribute('data-removable')).toBe(false)

    element.setAttribute('data-removable-2', 'initial')
    setElementItem(element, 'data-removable-2', undefined)
    expect(element.hasAttribute('data-removable-2')).toBe(false)
  })

  it('should handle string style values safely via cssText', () => {
    setElementItem(element, 'style', 'color: red; opacity: 0.5;')
    expect(element.style.color).toBe('red')
    expect(element.style.opacity).toBe('0.5')
  })

  it('should handle CSS custom properties in style object', () => {
    setElementItem(element, 'style', {
      '--test-custom-var': '24px'
    })
    expect(element.style.getPropertyValue('--test-custom-var')).toBe('24px')
  })

  it('should handle boolean non-aria attributes by adding or removing attribute', () => {
    setElementItem(element, 'custom-active', true)
    expect(element.hasAttribute('custom-active')).toBe(true)
    expect(element.getAttribute('custom-active')).toBe('')

    setElementItem(element, 'custom-active', false)
    expect(element.hasAttribute('custom-active')).toBe(false)
  })
})
