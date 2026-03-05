/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { getElementItem } from '../getElementItem'

describe('getElementItem', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
    element.id = 'test-id'
    element.className = 'test-class'
    element.setAttribute('data-custom', '123')
    document.body.appendChild(element)
  })

  afterEach(() => {
    document.body.removeChild(element)
  })

  it('should return the value of a property from the element', () => {
    expect(getElementItem(element, 'id')).toBe('test-id')
    expect(getElementItem(element, 'className')).toBe('test-class')
  })

  it('should return the value when passing a string selector', () => {
    expect(getElementItem('#test-id', 'className')).toBe('test-class')
  })

  it('should return the fallback value if the element is not found', () => {
    expect(getElementItem('.non-existent', 'id', 'fallback-id')).toBe('fallback-id')
  })

  it('should return undefined if property does not exist on element and no default provided', () => {
    expect(getElementItem(element, 'nonExistentProperty' as keyof HTMLElement)).toBeUndefined()
  })

  it('should return default value if property is undefined or missing', () => {
    // If element is not found, fallback kicks in
    expect(getElementItem('.non-existent-div', 'id', 'default')).toBe('default')
  })
})
