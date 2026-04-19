/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { domQuerySelectorAll } from '../domQuerySelectorAll'

describe('domQuerySelectorAll', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.createElement('div')
    container.innerHTML = `
      <div class="test-class" id="first">First</div>
      <div class="test-class" id="second">Second</div>
      <span class="other-class">Other</span>
    `
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    vi.restoreAllMocks()
  })

  it('should return all matching elements', () => {
    const els = domQuerySelectorAll('.test-class')
    expect(els?.length).toBe(2)
    expect(els?.[0]?.id).toBe('first')
    expect(els?.[1]?.id).toBe('second')
  })

  it('should return an empty NodeList if no elements match', () => {
    const els = domQuerySelectorAll('.non-existent-class')
    expect(els?.length).toBe(0)
  })

  it('should handle multiple element types', () => {
    const els = domQuerySelectorAll('.test-class')
    expect(els?.length).toBe(2)
    expect(els?.[0]?.id).toBe('first')
    expect(els?.[1]?.id).toBe('second')
  })

  it('should handle complex selectors', () => {
    const els = domQuerySelectorAll('.test-class')
    expect(els?.length).toBe(2)
    expect(els?.[0]?.id).toBe('first')
    expect(els?.[1]?.id).toBe('second')
  })

  it('should work with different element types when specified', () => {
    const button1 = document.createElement('button')
    const button2 = document.createElement('button')
    button1.className = 'btn-test'
    button2.className = 'btn-test'
    container.appendChild(button1)
    container.appendChild(button2)

    const els = domQuerySelectorAll<HTMLButtonElement>('.btn-test')
    expect(els?.length).toBe(2)
    expect(els?.[0]).toBeInstanceOf(HTMLButtonElement)
    expect(els?.[1]).toBeInstanceOf(HTMLButtonElement)
  })

  it('should return empty NodeList for non-matching selectors', () => {
    const els = domQuerySelectorAll('non-existent-tag')
    expect(els?.length).toBe(0)
  })
})
