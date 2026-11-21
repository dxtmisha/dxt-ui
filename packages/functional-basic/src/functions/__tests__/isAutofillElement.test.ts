// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { isAutofillElement } from '../isAutofillElement'

describe('isAutofillElement', () => {
  afterEach(() => {
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  it('should match standard and vendor autofill pseudo-classes safely', () => {
    const input = document.createElement('input')

    expect(isAutofillElement(input)).toBe(false)

    vi.spyOn(input, 'matches').mockImplementation((selector) => {
      if (selector === ':autofill') {
        throw new SyntaxError('Unsupported')
      }

      return selector === ':-webkit-autofill'
    })
    expect(isAutofillElement(input)).toBe(true)

    vi.spyOn(input, 'matches').mockImplementation((selector) => {
      if (selector === ':-webkit-autofill') {
        throw new SyntaxError('Unsupported')
      }

      return selector === ':-moz-ui-autofill'
    })
    expect(isAutofillElement(input)).toBe(true)
  })

  it('should resolve CSS selector strings and return false for missing or non-DOM targets', () => {
    const input = document.createElement('input')
    input.id = 'autofill-input'
    document.body.appendChild(input)

    vi.spyOn(input, 'matches').mockImplementation(selector => selector === ':autofill')
    expect(isAutofillElement('#autofill-input')).toBe(true)

    expect(isAutofillElement(undefined)).toBe(false)
    expect(isAutofillElement(null)).toBe(false)
    expect(isAutofillElement('#missing')).toBe(false)
    expect(isAutofillElement({} as unknown as Element)).toBe(false)
  })
})
