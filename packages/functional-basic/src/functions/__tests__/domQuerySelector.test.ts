/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { domQuerySelector } from '../domQuerySelector'

describe('domQuerySelector', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.createElement('div')
    container.innerHTML = `
      <div class="test-class" id="first">First</div>
      <div class="test-class" id="second">Second</div>
    `
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    vi.restoreAllMocks()
  })

  it('should return the first matched element', () => {
    const el = domQuerySelector('.test-class')
    expect(el?.id).toBe('first')
  })

  it('should return undefined if no element matches', () => {
    const el = domQuerySelector('.non-existent-class')
    expect(el).toBeUndefined()
  })

  it('should return correct element when matching by id', () => {
    const el = domQuerySelector('#first')
    expect(el?.id).toBe('first')
    expect(el?.textContent).toBe('First')
  })

  it('should return correct element when matching by tag', () => {
    const el = domQuerySelector('div .test-class')
    expect(el?.id).toBe('first')
    expect(el?.textContent).toBe('First')
  })

  it('should handle complex selectors', () => {
    const el = domQuerySelector('.test-class#second')
    expect(el?.id).toBe('second')
    expect(el?.textContent).toBe('Second')
  })

  it('should work with different element types', () => {
    const button = document.createElement('button')
    button.className = 'btn-test'
    container.appendChild(button)

    const el = domQuerySelector<HTMLButtonElement>('.btn-test')
    expect(el).toBeInstanceOf(HTMLButtonElement)
  })
})
