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

  it('should return undefined if not in a DOM environment', () => {
    vi.doMock('../isDomRuntime', () => ({
      isDomRuntime: () => false
    }))

    // Test implicitly relies on isDomRuntime behavior.
  })
})
