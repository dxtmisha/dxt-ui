// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { isWindow } from '../isWindow'
import * as isDomRuntimeModule from '../isDomRuntime'

describe('isWindow', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return true if the element is the global window object', () => {
      expect(isWindow(window)).toBe(true)
      expect(isWindow(globalThis.window)).toBe(true)
    })
  })

  describe('DOM nodes and window-like objects', () => {
    it('should return false for document and standard DOM elements', () => {
      const containerElement = document.createElement('div')
      const textNode = document.createTextNode('text')
      const fragment = document.createDocumentFragment()

      expect(isWindow(document)).toBe(false)
      expect(isWindow(document.documentElement)).toBe(false)
      expect(isWindow(document.body)).toBe(false)
      expect(isWindow(containerElement)).toBe(false)
      expect(isWindow(textNode)).toBe(false)
      expect(isWindow(fragment)).toBe(false)
    })

    it('should return false for plain objects and window-like mocks', () => {
      expect(isWindow({})).toBe(false)
      expect(isWindow({ window, document })).toBe(false)
      expect(isWindow([])).toBe(false)
    })
  })

  describe('Nullish and primitive values', () => {
    it('should return false for null and undefined', () => {
      expect(isWindow(null)).toBe(false)
      expect(isWindow(undefined)).toBe(false)
    })

    it('should return false for strings, numbers, booleans, and symbols', () => {
      expect(isWindow('window')).toBe(false)
      expect(isWindow('')).toBe(false)
      expect(isWindow(0)).toBe(false)
      expect(isWindow(1)).toBe(false)
      expect(isWindow(NaN)).toBe(false)
      expect(isWindow(false)).toBe(false)
      expect(isWindow(true)).toBe(false)
      expect(isWindow(Symbol('window'))).toBe(false)
    })
  })

  describe('SSR safety and non-DOM environment fallbacks', () => {
    it('should return false when isDomRuntime returns false even if window is passed', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)

      expect(isWindow(window)).toBe(false)
    })
  })
})
