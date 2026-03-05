import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { getAttributes } from '../getAttributes'

describe('getAttributes', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
    element.setAttribute('id', 'test-id')
    element.setAttribute('data-value', 'custom-value')
    element.setAttribute('class', 'test-class')
    element.setAttribute('disabled', '') // Empty attribute
    document.body.appendChild(element)
  })

  afterEach(() => {
    document.body.removeChild(element)
  })

  it('should return all attributes of an element', () => {
    const attributes = getAttributes(element)

    expect(attributes).toEqual({
      'id': 'test-id',
      'data-value': 'custom-value',
      'class': 'test-class',
      'disabled': ''
    })
  })

  it('should return all attributes using a CSS selector string', () => {
    const attributes = getAttributes('#test-id')

    expect(attributes).toEqual({
      'id': 'test-id',
      'data-value': 'custom-value',
      'class': 'test-class',
      'disabled': ''
    })
  })

  it('should return an empty object if element is not found', () => {
    const attributes = getAttributes('.non-existent-element')
    expect(attributes).toEqual({})
  })

  it('should return an empty object if undefined is passed', () => {
    const attributes = getAttributes(undefined)
    expect(attributes).toEqual({})
  })
})
