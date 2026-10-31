/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from 'vitest'
import { setElementItemAttribute } from '../setElementItemAttribute'

describe('setElementItemAttribute', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
  })

  describe('Standard string and identifier attributes', () => {
    it('should set a standard attribute and return true', () => {
      const result = setElementItemAttribute(element, 'data-test', 'my-value')

      expect(result).toBe(true)
      expect(element.getAttribute('data-test')).toBe('my-value')
    })

    it('should set an attribute using a selector string target', () => {
      element.id = 'target-attr-element'
      document.body.appendChild(element)

      const result = setElementItemAttribute('#target-attr-element', 'title', 'Tooltip Content')

      expect(result).toBe(true)
      expect(element.getAttribute('title')).toBe('Tooltip Content')

      document.body.removeChild(element)
    })

    it('should resolve window target to document.body and set attribute', () => {
      const result = setElementItemAttribute(window, 'data-window-attr', 'global-value')

      expect(result).toBe(true)
      expect(document.body.getAttribute('data-window-attr')).toBe('global-value')

      document.body.removeAttribute('data-window-attr')
    })
  })

  describe('Attribute name normalization (kebab-case conversion)', () => {
    it('should convert camelCase attribute names to kebab-case', () => {
      setElementItemAttribute(element, 'dataTestId', '100')
      expect(element.getAttribute('data-test-id')).toBe('100')

      setElementItemAttribute(element, 'ariaLabel', 'Close Button')
      expect(element.getAttribute('aria-label')).toBe('Close Button')
    })

    it('should preserve already normalized kebab-case attribute names', () => {
      setElementItemAttribute(element, 'data-component-name', 'modal')
      expect(element.getAttribute('data-component-name')).toBe('modal')
    })
  })

  describe('Numeric values handling', () => {
    it('should set integer numbers as string attribute values', () => {
      const result = setElementItemAttribute(element, 'data-count', 42)

      expect(result).toBe(true)
      expect(element.getAttribute('data-count')).toBe('42')
    })

    it('should correctly set zero (0) as an attribute value', () => {
      const result = setElementItemAttribute(element, 'data-index', 0)

      expect(result).toBe(true)
      expect(element.getAttribute('data-index')).toBe('0')
    })

    it('should set negative and floating point numbers', () => {
      setElementItemAttribute(element, 'data-offset', -15)
      expect(element.getAttribute('data-offset')).toBe('-15')

      setElementItemAttribute(element, 'data-ratio', 3.14)
      expect(element.getAttribute('data-ratio')).toBe('3.14')
    })

    it('should set BigInt values as strings', () => {
      const result = setElementItemAttribute(element, 'data-big-id', 9007199254740993n)

      expect(result).toBe(true)
      expect(element.getAttribute('data-big-id')).toBe('9007199254740993')
    })

    it('should reject NaN and not set an attribute', () => {
      const result = setElementItemAttribute(element, 'data-invalid', NaN)

      expect(result).toBe(false)
      expect(element.hasAttribute('data-invalid')).toBe(false)
    })

    it('should reject Infinity and -Infinity', () => {
      expect(setElementItemAttribute(element, 'data-inf', Infinity)).toBe(false)
      expect(setElementItemAttribute(element, 'data-neg-inf', -Infinity)).toBe(false)
      expect(element.hasAttribute('data-inf')).toBe(false)
      expect(element.hasAttribute('data-neg-inf')).toBe(false)
    })
  })

  describe('ARIA attributes and boolean handling', () => {
    it('should set boolean aria-* attributes as explicit "true" or "false" strings', () => {
      setElementItemAttribute(element, 'aria-hidden', true)
      expect(element.getAttribute('aria-hidden')).toBe('true')

      setElementItemAttribute(element, 'aria-hidden', false)
      expect(element.getAttribute('aria-hidden')).toBe('false')

      setElementItemAttribute(element, 'ariaExpanded', true)
      expect(element.getAttribute('aria-expanded')).toBe('true')

      setElementItemAttribute(element, 'ariaExpanded', false)
      expect(element.getAttribute('aria-expanded')).toBe('false')
    })

    it('should toggle non-aria boolean attributes with empty string or removal', () => {
      setElementItemAttribute(element, 'disabled', true)
      expect(element.hasAttribute('disabled')).toBe(true)
      expect(element.getAttribute('disabled')).toBe('')

      setElementItemAttribute(element, 'disabled', false)
      expect(element.hasAttribute('disabled')).toBe(false)

      setElementItemAttribute(element, 'hidden', true)
      expect(element.hasAttribute('hidden')).toBe(true)
      expect(element.getAttribute('hidden')).toBe('')

      setElementItemAttribute(element, 'hidden', false)
      expect(element.hasAttribute('hidden')).toBe(false)
    })
  })

  describe('Attribute removal on null and undefined values', () => {
    it('should remove existing attribute when null is passed', () => {
      element.setAttribute('data-target', 'initial')

      const result = setElementItemAttribute(element, 'data-target', null)

      expect(result).toBe(true)
      expect(element.hasAttribute('data-target')).toBe(false)
    })

    it('should remove existing attribute when undefined is passed', () => {
      element.setAttribute('data-target', 'initial')

      const result = setElementItemAttribute(element, 'data-target', undefined)

      expect(result).toBe(true)
      expect(element.hasAttribute('data-target')).toBe(false)
    })

    it('should remove attribute when value argument is omitted', () => {
      element.setAttribute('data-target', 'initial')

      const result = setElementItemAttribute(element, 'data-target')

      expect(result).toBe(true)
      expect(element.hasAttribute('data-target')).toBe(false)
    })
  })

  describe('Dynamic factory functions execution', () => {
    it('should evaluate factory function returning string, number, or BigInt', () => {
      setElementItemAttribute(element, 'data-dynamic', () => 'computed-string')
      expect(element.getAttribute('data-dynamic')).toBe('computed-string')

      setElementItemAttribute(element, 'data-dynamic-num', () => 99)
      expect(element.getAttribute('data-dynamic-num')).toBe('99')

      setElementItemAttribute(element, 'data-dynamic-big', () => 100n)
      expect(element.getAttribute('data-dynamic-big')).toBe('100')
    })

    it('should evaluate factory function returning boolean for ARIA and standard attributes', () => {
      setElementItemAttribute(element, 'aria-busy', () => true)
      expect(element.getAttribute('aria-busy')).toBe('true')

      setElementItemAttribute(element, 'readonly', () => true)
      expect(element.hasAttribute('readonly')).toBe(true)
      expect(element.getAttribute('readonly')).toBe('')

      setElementItemAttribute(element, 'readonly', () => false)
      expect(element.hasAttribute('readonly')).toBe(false)
    })

    it('should remove attribute when factory function returns null', () => {
      element.setAttribute('data-dynamic-removable', 'val')
      setElementItemAttribute(element, 'data-dynamic-removable', () => null)
      expect(element.hasAttribute('data-dynamic-removable')).toBe(false)
    })
  })

  describe('Unsupported value types and fallback signalling', () => {
    it('should return false and not modify attributes when complex objects or arrays are passed', () => {
      expect(setElementItemAttribute(element, 'data-obj', { a: 1 })).toBe(false)
      expect(setElementItemAttribute(element, 'data-arr', [1, 2, 3])).toBe(false)
      expect(element.hasAttribute('data-obj')).toBe(false)
      expect(element.hasAttribute('data-arr')).toBe(false)
    })

    it('should return false when a Symbol value is passed', () => {
      const customSymbol = Symbol('test')
      expect(setElementItemAttribute(element, 'data-sym', customSymbol)).toBe(false)
      expect(element.hasAttribute('data-sym')).toBe(false)
    })
  })

  describe('Invalid targets and prototype pollution protection', () => {
    it('should return false when element is undefined, null, or selector matches nothing', () => {
      expect(setElementItemAttribute(undefined, 'data-test', 'val')).toBe(false)
      expect(setElementItemAttribute(null, 'data-test', 'val')).toBe(false)
      expect(setElementItemAttribute('#unmatched-selector', 'data-test', 'val')).toBe(false)
    })

    it('should return false when target object does not have setAttribute method', () => {
      const plainObject = { someKey: 'val' }
      // @ts-expect-error testing invalid element target
      expect(setElementItemAttribute(plainObject, 'data-test', 'val')).toBe(false)
    })

    it('should return false when attribute name is empty or only special characters', () => {
      expect(setElementItemAttribute(element, '', 'val')).toBe(false)
      expect(setElementItemAttribute(element, '   ', 'val')).toBe(false)
      expect(setElementItemAttribute(element, undefined, 'val')).toBe(false)
      expect(setElementItemAttribute(element, '@#$%^&*()+=!', 'val')).toBe(false)
    })

    it('should prevent prototype pollution and not modify Object.prototype', () => {
      const originalProto = Object.prototype.toString

      setElementItemAttribute(element, '__proto__', 'polluted')
      setElementItemAttribute(element, 'constructor', 'polluted')
      setElementItemAttribute(element, 'prototype', 'polluted')

      expect(({} as Record<string, unknown>).polluted).toBeUndefined()
      expect(Object.prototype.toString).toBe(originalProto)
    })
  })
})

