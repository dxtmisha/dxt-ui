// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { isInput } from '../isInput'

describe('isInput', () => {
  it('should return true for an input element', () => {
    const element = document.createElement('input')
    expect(isInput(element)).toBe(true)
  })

  it('should return true for a textarea element', () => {
    const element = document.createElement('textarea')
    expect(isInput(element)).toBe(true)
  })

  it('should return true for a select element', () => {
    const element = document.createElement('select')
    expect(isInput(element)).toBe(true)
  })

  it('should return true for a contenteditable element', () => {
    const element = document.createElement('div')
    element.setAttribute('contenteditable', 'true')
    expect(isInput(element)).toBe(true)
  })

  it('should return false for a div element', () => {
    const element = document.createElement('div')
    expect(isInput(element)).toBe(false)
  })

  it('should return false for null', () => {
    expect(isInput(null)).toBe(false)
  })

  it('should return false for non-HTMLElement', () => {
    const eventTarget = new EventTarget()
    expect(isInput(eventTarget)).toBe(false)
  })
})
