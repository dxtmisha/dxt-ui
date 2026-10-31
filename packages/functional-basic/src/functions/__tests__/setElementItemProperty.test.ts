/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from 'vitest'
import { setElementItemProperty } from '../setElementItemProperty'

describe('setElementItemProperty', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
  })

  describe('Standard property assignment', () => {
    it('should set primitive properties on an element and return true', () => {
      expect(setElementItemProperty(element, 'id', 'my-id')).toBe(true)
      expect(element.id).toBe('my-id')

      expect(setElementItemProperty(element, 'title', 'Hello')).toBe(true)
      expect(element.title).toBe('Hello')
    })

    it('should resolve CSS selectors and set property on matching element', () => {
      element.id = 'query-target'
      document.body.appendChild(element)

      expect(setElementItemProperty('#query-target', 'title', 'Found')).toBe(true)
      expect(element.title).toBe('Found')

      document.body.removeChild(element)
    })

    it('should evaluate factory functions before setting property', () => {
      const handler = () => 'handled'
      expect(setElementItemProperty(element, 'onclick', () => handler)).toBe(true)
      expect(element.onclick).toBe(handler)
    })

    it('should support Symbol property keys', () => {
      const customSymbol = Symbol('custom')
      expect(setElementItemProperty(element, customSymbol, 'symbol-value')).toBe(true)
      expect((element as unknown as Record<symbol, unknown>)[customSymbol]).toBe('symbol-value')
    })
  })

  describe('Nested object merging', () => {
    it('should merge properties when both target property and value are objects (not arrays)', () => {
      const targetObj = element as unknown as { customConfig: Record<string, unknown> }
      targetObj.customConfig = { a: 1, b: 2 }

      expect(setElementItemProperty(element, 'customConfig', { b: 20, c: 30 })).toBe(true)
      expect(targetObj.customConfig).toEqual({ a: 1, b: 20, c: 30 })
    })

    it('should evaluate factory functions inside merged object properties', () => {
      const targetObj = element as unknown as { customConfig: Record<string, unknown> }
      targetObj.customConfig = { counter: 0 }

      expect(setElementItemProperty(element, 'customConfig', { counter: () => 42 })).toBe(true)
      expect(targetObj.customConfig.counter).toBe(42)
    })

    it('should replace array properties directly without treating them as mergeable objects', () => {
      const targetObj = element as unknown as { list: string[] }
      targetObj.list = ['a', 'b']

      expect(setElementItemProperty(element, 'list', ['x', 'y'])).toBe(true)
      expect(targetObj.list).toEqual(['x', 'y'])
    })
  })

  describe('Security and Prototype Pollution defense', () => {
    it('should reject __proto__, constructor, and prototype as top-level index and return false', () => {
      expect(setElementItemProperty(element, '__proto__', { polluted: true })).toBe(false)
      expect(setElementItemProperty(element, 'constructor', { polluted: true })).toBe(false)
      expect(setElementItemProperty(element, 'prototype', { polluted: true })).toBe(false)
      expect(({} as Record<string, unknown>).polluted).toBeUndefined()
    })

    it('should ignore prototype pollution keys when merging nested objects', () => {
      const targetObj = element as unknown as { nested: Record<string, unknown> }
      targetObj.nested = { safe: true }

      expect(setElementItemProperty(element, 'nested', {
        __proto__: { polluted: true },
        constructor: { polluted: true },
        prototype: { polluted: true },
        newKey: 'safeValue'
      })).toBe(true)

      expect(({} as Record<string, unknown>).polluted).toBeUndefined()
      expect(targetObj.nested.newKey).toBe('safeValue')
    })
  })

  describe('Edge cases, nullish inputs, and non-writable targets', () => {
    it('should return false when index is null or undefined', () => {
      expect(setElementItemProperty(element, null as unknown as PropertyKey, 'value')).toBe(false)
      expect(setElementItemProperty(element, undefined as unknown as PropertyKey, 'value')).toBe(false)
    })

    it('should return false when element does not exist or selector matches nothing', () => {
      expect(setElementItemProperty('#non-existent-selector', 'title', 'value')).toBe(false)
      expect(setElementItemProperty(null, 'title', 'value')).toBe(false)
      expect(setElementItemProperty(undefined, 'title', 'value')).toBe(false)
    })

    it('should return false when Reflect.set fails on a non-writable property', () => {
      const readOnlyContainer = {}
      Object.defineProperty(readOnlyContainer, 'nonWritable', {
        value: 10,
        writable: false,
        configurable: false
      })
      expect(setElementItemProperty(readOnlyContainer as unknown as HTMLElement, 'nonWritable', 99)).toBe(false)
    })
  })
})
