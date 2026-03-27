// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { isElementVisible } from '../isElementVisible'

describe('isElementVisible', () => {
  it('should return true if an element is visible', () => {
    const div = document.createElement('div')
    Object.defineProperty(div, 'offsetWidth', { value: 100 })
    Object.defineProperty(div, 'offsetHeight', { value: 100 })
    document.body.appendChild(div)
    expect(isElementVisible(div)).toBe(true)
    document.body.removeChild(div)
  })

  it('should return false if an element is NOT in the DOM', () => {
    const div = document.createElement('div')
    expect(isElementVisible(div)).toBe(false)
  })

  it('should return false if an element has dimensions of 0', () => {
    const div = document.createElement('div')
    Object.defineProperty(div, 'offsetWidth', { value: 0 })
    Object.defineProperty(div, 'offsetHeight', { value: 0 })
    document.body.appendChild(div)
    expect(isElementVisible(div)).toBe(false)
    document.body.removeChild(div)
  })

  it('should return false if an element has display: none', () => {
    const div = document.createElement('div')
    Object.defineProperty(div, 'offsetWidth', { value: 100 })
    Object.defineProperty(div, 'offsetHeight', { value: 100 })
    div.style.display = 'none'
    document.body.appendChild(div)
    expect(isElementVisible(div)).toBe(false)
    document.body.removeChild(div)
  })

  it('should return false if an element has visibility: hidden', () => {
    const div = document.createElement('div')
    Object.defineProperty(div, 'offsetWidth', { value: 100 })
    Object.defineProperty(div, 'offsetHeight', { value: 100 })
    div.style.visibility = 'hidden'
    document.body.appendChild(div)
    expect(isElementVisible(div)).toBe(false)
    document.body.removeChild(div)
  })

  it('should return false if an element has opacity: 0', () => {
    const div = document.createElement('div')
    Object.defineProperty(div, 'offsetWidth', { value: 100 })
    Object.defineProperty(div, 'offsetHeight', { value: 100 })
    div.style.opacity = '0'
    document.body.appendChild(div)
    expect(isElementVisible(div)).toBe(false)
    document.body.removeChild(div)
  })

  it('should return true if an element is off-screen', () => {
    const div = document.createElement('div')
    Object.defineProperty(div, 'offsetWidth', { value: 100 })
    Object.defineProperty(div, 'offsetHeight', { value: 100 })
    div.style.position = 'absolute'
    div.style.left = '-1000px'
    document.body.appendChild(div)
    expect(isElementVisible(div)).toBe(true)
    document.body.removeChild(div)
  })

  it('should return true if the selector finds a visible element', () => {
    const div = document.createElement('div')
    Object.defineProperty(div, 'offsetWidth', { value: 100 })
    Object.defineProperty(div, 'offsetHeight', { value: 100 })
    div.id = 'test-visible'
    document.body.appendChild(div)
    expect(isElementVisible('#test-visible')).toBe(true)
    document.body.removeChild(div)
  })

  it('should return false if the selector does not find an element', () => {
    expect(isElementVisible('#non-existent')).toBe(false)
  })
})
