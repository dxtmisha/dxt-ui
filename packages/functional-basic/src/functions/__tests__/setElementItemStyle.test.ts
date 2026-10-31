/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setElementItemStyle } from '../setElementItemStyle'
import * as isDomRuntimeModule from '../isDomRuntime'

describe('setElementItemStyle', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
  })

  describe('String styles (cssText)', () => {
    it('should apply inline styles via cssText when styles is a string and return true', () => {
      const result = setElementItemStyle(element, 'color: red; font-size: 16px;')

      expect(result).toBe(true)
      expect(element.style.color).toBe('red')
      expect(element.style.fontSize).toBe('16px')
    })

    it('should clear existing inline styles when an empty string is passed', () => {
      element.style.cssText = 'color: red; opacity: 0.5;'
      const result = setElementItemStyle(element, '')

      expect(result).toBe(true)
      expect(element.style.color).toBe('')
      expect(element.style.opacity).toBe('')
    })

    it('should evaluate a factory function returning a style string', () => {
      const result = setElementItemStyle(element, () => 'background-color: green;')

      expect(result).toBe(true)
      expect(element.style.backgroundColor).toBe('green')
    })
  })

  describe('Object styles (CSS properties & custom variables)', () => {
    it('should apply both camelCase and kebab-case style properties and return true', () => {
      const result = setElementItemStyle(element, {
        'backgroundColor': 'blue',
        'font-size': '20px',
        'borderTopLeftRadius': '4px'
      })

      expect(result).toBe(true)
      expect(element.style.backgroundColor).toBe('blue')
      expect(element.style.fontSize).toBe('20px')
      expect(element.style.borderTopLeftRadius).toBe('4px')
    })

    it('should preserve exact casing for CSS custom properties (--variables)', () => {
      const result = setElementItemStyle(element, {
        '--main-color': '#ff0000',
        '--camelCaseVar': '12px'
      })

      expect(result).toBe(true)
      expect(element.style.getPropertyValue('--main-color')).toBe('#ff0000')
      expect(element.style.getPropertyValue('--camelCaseVar')).toBe('12px')
    })

    it('should convert numeric values (including 0) to strings', () => {
      const result = setElementItemStyle(element, {
        'opacity': 0,
        'zIndex': 100,
        '--scale': 1.5
      })

      expect(result).toBe(true)
      expect(element.style.opacity).toBe('0')
      expect(element.style.zIndex).toBe('100')
      expect(element.style.getPropertyValue('--scale')).toBe('1.5')
    })

    it('should evaluate factory functions for both the styles object and individual property values', () => {
      const result = setElementItemStyle(element, () => ({
        'color': () => 'purple',
        '--dynamic-gap': () => '8px'
      }))

      expect(result).toBe(true)
      expect(element.style.color).toBe('purple')
      expect(element.style.getPropertyValue('--dynamic-gap')).toBe('8px')
    })

    it('should extract !important priority and pass it as the third argument to setProperty', () => {
      const result = setElementItemStyle(element, {
        'color': 'red !important',
        '--important-var': '16px !IMPORTANT '
      })

      expect(result).toBe(true)
      expect(element.style.color).toBe('red')
      expect(element.style.getPropertyPriority('color')).toBe('important')
      expect(element.style.getPropertyValue('--important-var')).toBe('16px')
      expect(element.style.getPropertyPriority('--important-var')).toBe('important')
    })

    it('should remove CSS properties and custom variables when value or factory result is null or undefined', () => {
      setElementItemStyle(element, {
        'color': 'red',
        'fontSize': '14px',
        '--custom-var': '1rem'
      })

      expect(element.style.color).toBe('red')
      expect(element.style.fontSize).toBe('14px')
      expect(element.style.getPropertyValue('--custom-var')).toBe('1rem')

      const result = setElementItemStyle(element, {
        'color': null,
        'fontSize': () => undefined,
        '--custom-var': null
      })

      expect(result).toBe(true)
      expect(element.style.color).toBe('')
      expect(element.style.fontSize).toBe('')
      expect(element.style.getPropertyValue('--custom-var')).toBe('')
    })
  })

  describe('Target element resolution (Selectors & Window)', () => {
    it('should resolve target element via CSS selector string', () => {
      element.id = 'styled-node'
      document.body.appendChild(element)

      const result = setElementItemStyle('#styled-node', { color: 'teal' })

      expect(result).toBe(true)
      expect(element.style.color).toBe('teal')

      document.body.removeChild(element)
    })

    it('should resolve Window target to document.body', () => {
      const result = setElementItemStyle(window, { '--window-body-var': 'active' })

      expect(result).toBe(true)
      expect(document.body.style.getPropertyValue('--window-body-var')).toBe('active')

      document.body.style.removeProperty('--window-body-var')
    })
  })

  describe('Edge cases, invalid inputs, security, and SSR safety', () => {
    it('should return false and not invoke styles factory when element is undefined or selector is not found', () => {
      const stylesFactory = vi.fn(() => ({ color: 'red' }))

      expect(setElementItemStyle(undefined, stylesFactory)).toBe(false)
      expect(setElementItemStyle('#non-existent-element', stylesFactory)).toBe(false)
      expect(stylesFactory).not.toHaveBeenCalled()
    })

    it('should return false when styles is null, undefined, number, boolean, or array', () => {
      expect(setElementItemStyle(element, undefined)).toBe(false)
      expect(setElementItemStyle(element, null)).toBe(false)
      expect(setElementItemStyle(element, 123)).toBe(false)
      expect(setElementItemStyle(element, true)).toBe(false)
      expect(setElementItemStyle(element, ['color: red'])).toBe(false)
      expect(setElementItemStyle(element, () => null)).toBe(false)
    })

    it('should ignore inherited properties and prototype pollution keys', () => {
      const proto = { inheritedColor: 'red' }
      const styleObject = Object.create(proto) as Record<string, unknown>
      styleObject.color = 'green'

      Object.defineProperty(styleObject, '__proto__', {
        value: { polluted: 'yes' },
        enumerable: true
      })
      styleObject.constructor = 'bad'
      styleObject.prototype = 'bad'

      const result = setElementItemStyle(element, styleObject)

      expect(result).toBe(true)
      expect(element.style.color).toBe('green')
      expect(element.style.getPropertyValue('inherited-color')).toBe('')
      expect(({} as Record<string, unknown>).polluted).toBeUndefined()
    })

    it('should return false safely in SSR environment when selector string is passed', () => {
      const spy = vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)

      expect(setElementItemStyle('#ssr-selector', { color: 'red' })).toBe(false)
      expect(setElementItemStyle(undefined, { color: 'red' })).toBe(false)

      spy.mockRestore()
    })
  })
})

