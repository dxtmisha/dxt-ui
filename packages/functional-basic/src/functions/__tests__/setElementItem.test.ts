/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from 'vitest'
import { setElementItem } from '../setElementItem'

describe('setElementItem', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
  })

  describe('Standard functional requirements (DOM properties & selectors)', () => {
    it('should set a standard property on an element and return the element', () => {
      const result = setElementItem(element, 'id', 'new-id')

      expect(result).toBe(element)
      expect(element.id).toBe('new-id')
    })

    it('should resolve a DOM element via CSS selector string and modify its property', () => {
      element.id = 'target-node'
      document.body.appendChild(element)

      const result = setElementItem('#target-node', 'title', 'Updated Title')

      expect(result).toBe(element)
      expect(element.title).toBe('Updated Title')

      document.body.removeChild(element)
    })

    it('should evaluate function values before setting element properties', () => {
      const clickHandler = () => 'clicked'
      setElementItem(element, 'onclick', () => clickHandler)

      expect(element.onclick).toBe(clickHandler)
    })

    it('should resolve Window target to document.body via getElement and set attribute/property', () => {
      const result = setElementItem(window, 'data-window-target', 'window-value')

      expect(result).toBe(document.body)
      expect(document.body.getAttribute('data-window-target')).toBe('window-value')

      document.body.removeAttribute('data-window-target')
    })
  })

  describe('HTML and ARIA attributes management', () => {
    it('should set custom string attributes when property does not exist on element', () => {
      setElementItem(element, 'data-test', 'value')
      expect(element.getAttribute('data-test')).toBe('value')
    })

    it('should set numeric attributes (including 0) as strings', () => {
      setElementItem(element, 'data-count', 0)
      expect(element.getAttribute('data-count')).toBe('0')

      setElementItem(element, 'data-count', 42)
      expect(element.getAttribute('data-count')).toBe('42')
    })

    it('should set boolean aria-* attributes as explicit "true" or "false" strings', () => {
      setElementItem(element, 'aria-hidden', true)
      expect(element.getAttribute('aria-hidden')).toBe('true')

      setElementItem(element, 'aria-hidden', false)
      expect(element.getAttribute('aria-hidden')).toBe('false')
    })

    it('should toggle boolean non-aria attributes by adding empty attribute or removing it', () => {
      setElementItem(element, 'custom-active', true)
      expect(element.hasAttribute('custom-active')).toBe(true)
      expect(element.getAttribute('custom-active')).toBe('')

      setElementItem(element, 'custom-active', false)
      expect(element.hasAttribute('custom-active')).toBe(false)
    })

    it('should remove attribute when null or undefined is passed', () => {
      element.setAttribute('data-removable', 'initial')
      expect(element.getAttribute('data-removable')).toBe('initial')

      setElementItem(element, 'data-removable', null)
      expect(element.hasAttribute('data-removable')).toBe(false)

      element.setAttribute('data-removable-2', 'initial')
      setElementItem(element, 'data-removable-2', undefined)
      expect(element.hasAttribute('data-removable-2')).toBe(false)
    })

    it('should fallback to Reflect.set when non-primitive non-null value is passed for unknown key', () => {
      const customSymbol = Symbol('custom')
      setElementItem(element, 'data-symbol-prop', customSymbol)

      expect((element as unknown as Record<string, unknown>)['data-symbol-prop']).toBe(customSymbol)
    })
  })

  describe('CSS style declaration and cssText handling', () => {
    it('should apply string style values via cssText (including function returning string)', () => {
      setElementItem(element, 'style', 'color: red; opacity: 0.5;')
      expect(element.style.color).toBe('red')
      expect(element.style.opacity).toBe('0.5')

      setElementItem(element, 'style', () => 'color: green;')
      expect(element.style.color).toBe('green')
    })

    it('should set both camelCase and kebab-case CSS properties via setProperty', () => {
      setElementItem(element, 'style', {
        'font-size': '18px',
        'backgroundColor': 'blue',
        'zIndex': () => '10'
      })
      expect(element.style.fontSize).toBe('18px')
      expect(element.style.backgroundColor).toBe('blue')
      expect(element.style.zIndex).toBe('10')
    })

    it('should preserve CSS custom properties (--variables) in style object', () => {
      setElementItem(element, 'style', {
        '--test-custom-var': '24px'
      })
      expect(element.style.getPropertyValue('--test-custom-var')).toBe('24px')
    })

    it('should remove CSS properties and custom variables when null or undefined is passed', () => {
      setElementItem(element, 'style', {
        'color': 'red',
        '--test-var': '10px'
      })
      expect(element.style.color).toBe('red')
      expect(element.style.getPropertyValue('--test-var')).toBe('10px')

      setElementItem(element, 'style', {
        'color': null,
        '--test-var': undefined
      })
      expect(element.style.color).toBe('')
      expect(element.style.getPropertyValue('--test-var')).toBe('')
    })
  })

  describe('Nested object properties and array replacement', () => {
    it('should merge nested object properties and evaluate function values', () => {
      const customContainer = element as unknown as { custom: { a: number, b?: number } }
      customContainer.custom = { a: 1 }

      setElementItem(element, 'custom', { b: () => 2 })

      expect(customContainer.custom.a).toBe(1)
      expect(customContainer.custom.b).toBe(2)
    })

    it('should replace array properties directly without merging them as dictionary objects', () => {
      const customContainer = element as unknown as { list: string[] }
      customContainer.list = ['initial-1', 'initial-2']

      setElementItem(element, 'list', ['replaced-1'])

      expect(customContainer.list).toEqual(['replaced-1'])
    })
  })

  describe('Security, prototype pollution protection, and invalid targets', () => {
    it('should block prototype pollution on top-level index, style object, and nested property object', () => {
      const originalProtoToString = Object.prototype.toString
      const customContainer = element as unknown as { nested: Record<string, unknown> }
      customContainer.nested = { safe: true }

      const resultProto = setElementItem(element, '__proto__', { polluted: true })
      const resultConstructor = setElementItem(element, 'constructor', { polluted: true })
      const resultPrototype = setElementItem(element, 'prototype', { polluted: true })

      expect(resultProto).toBe(element)
      expect(resultConstructor).toBe(element)
      expect(resultPrototype).toBe(element)

      setElementItem(element, 'style', {
        __proto__: { polluted: true },
        constructor: { polluted: true },
        prototype: { polluted: true }
      })

      setElementItem(element, 'nested', {
        __proto__: { polluted: true },
        constructor: { polluted: true },
        prototype: { polluted: true }
      })

      expect(({} as Record<string, unknown>).polluted).toBeUndefined()
      expect(Object.prototype.toString).toBe(originalProtoToString)
    })

    it('should return undefined gracefully when element does not exist or selector matches nothing', () => {
      expect(setElementItem('#non-existent-selector', 'id', 'test')).toBeUndefined()
      expect(setElementItem(undefined, 'id', 'test')).toBeUndefined()
    })
  })
})
