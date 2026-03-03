// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { isInDom } from '../isInDom'

describe('isInDom', () => {
  it('should return true if an element is in the DOM', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    expect(isInDom(div)).toBe(true)
    document.body.removeChild(div)
  })

  it('should return false if an element is not in the DOM', () => {
    const div = document.createElement('div')
    expect(isInDom(div)).toBe(false)
  })

  it('should return true if the selector finds an element', () => {
    const div = document.createElement('div')
    div.id = 'test-div'
    document.body.appendChild(div)
    expect(isInDom('#test-div')).toBe(true)
    document.body.removeChild(div)
  })

  it('should return false if the selector does not find an element', () => {
    expect(isInDom('#non-existent-div')).toBe(false)
  })
})
