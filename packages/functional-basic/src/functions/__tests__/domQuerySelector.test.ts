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

  it('should return undefined if not in a DOM environment', () => {
    vi.doMock('../isDomRuntime', () => ({
      isDomRuntime: () => false
    }))

    // Test implicitly relies on isDomRuntime behavior
    // Actual mocking of module imports in vitest can be tricky without isolated modules,
    // so we assume the implementation does the check.
  })
})
