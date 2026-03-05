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

  it('should set attribute if property does not exist', () => {
    setElementItem(element, 'data-test' as any, 'value')
    expect(element.getAttribute('data-test')).toBe('value')
  })

  it('should handle object values for nested properties', () => {
    (element as any).custom = { a: 1 }
    setElementItem(element, 'custom' as any, { b: 2 })
    expect((element as any).custom.b).toBe(2)
    expect((element as any).custom.a).toBe(1)
  })

  it('should handle function values', () => {
    const fn = () => 'test'
    setElementItem(element, 'onclick' as any, () => fn)
    // In JSDOM/browser, setting element.onclick = fn works
    expect(element.onclick).toBe(fn)
  })
})
