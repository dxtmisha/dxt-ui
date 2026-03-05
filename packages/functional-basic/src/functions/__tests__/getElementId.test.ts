/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { getElementId } from '../getElementId'

describe('getElementId', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
    document.body.appendChild(element)
  })

  afterEach(() => {
    document.body.removeChild(element)
  })

  it('should return existing ID if the element already has one', () => {
    element.id = 'existing-test-id'
    expect(getElementId(element)).toBe('existing-test-id')
  })

  it('should generate a new ID if the element has no ID and assign it to the element', () => {
    const id = getElementId(element)
    expect(id).toMatch(/^id-\d+$/)
    expect(element.id).toBe(id)
  })

  it('should append the selector to the returned ID string if provided', () => {
    element.id = 'my-id'
    expect(getElementId(element, ' .child-class')).toBe('#my-id .child-class')
  })

  it('should return a generated string ID even if the element is undefined/not found', () => {
    const id = getElementId('.non-existent-element')
    expect(id).toMatch(/^id-\d+$/)
  })
})
