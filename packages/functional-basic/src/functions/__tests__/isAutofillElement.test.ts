// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { isAutofillElement } from '../isAutofillElement'

describe('isAutofillElement', () => {
  afterEach(() => {
    document.body.innerHTML = ''
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
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
        if (selector === ':autofill' || selector === ':-webkit-autofill') {
          throw new SyntaxError('Unsupported')
        }

        return selector === ':-moz-ui-autofill'
      })
      expect(isAutofillElement(input)).toBe(true)
    })

    it('should resolve CSS selector strings to DOM elements', () => {
      const input = document.createElement('input')
      input.id = 'autofill-input'
      document.body.appendChild(input)

      vi.spyOn(input, 'matches').mockImplementation(selector => selector === ':autofill')
      expect(isAutofillElement('#autofill-input')).toBe(true)
    })
  })

  describe('Boundary values, error resilience, and SSR safety', () => {
    it('should return false when all selectors throw SyntaxError', () => {
      const input = document.createElement('input')
      vi.spyOn(input, 'matches').mockImplementation(() => {
        throw new SyntaxError('Unsupported selector')
      })

      expect(isAutofillElement(input)).toBe(false)
    })

    it('should return false for missing, nullish, or non-Element targets without matches()', () => {
      expect(isAutofillElement()).toBe(false)
      expect(isAutofillElement(undefined)).toBe(false)
      expect(isAutofillElement(null)).toBe(false)
      expect(isAutofillElement('#missing')).toBe(false)
      expect(isAutofillElement({} as unknown as Element)).toBe(false)
      expect(isAutofillElement({ matches: 'not-a-function' } as unknown as Element)).toBe(false)
    })

    it('should return false safely in SSR when window is undefined', () => {
      vi.stubGlobal('window', undefined)
      expect(isAutofillElement('#autofill-input')).toBe(false)
      expect(isAutofillElement(undefined)).toBe(false)
    })
  })
})
