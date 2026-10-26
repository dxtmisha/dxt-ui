import { describe, it, expect } from 'vitest'
import { isRegExp } from '../isRegExp'

describe('isRegExp', () => {
  describe('Standard RegExp instances (Happy path)', () => {
    it('should return true for RegExp literals', () => {
      expect(isRegExp(/test/)).toBe(true)
      expect(isRegExp(/test/gi)).toBe(true)
      expect(isRegExp(/(?:)/)).toBe(true)
      expect(isRegExp(/(?!)/)).toBe(true)
    })

    it('should return true for constructed RegExp instances', () => {
      expect(isRegExp(new RegExp('test'))).toBe(true)
      expect(isRegExp(new RegExp('test', 'i'))).toBe(true)
      expect(isRegExp(new RegExp(''))).toBe(true)
    })
  })

  describe('Cross-realm RegExp instances (vm/iframe)', () => {
    it('should return true for cross-realm RegExp instances with [Symbol.toStringTag]', () => {
      const foreignRegExp = {
        [Symbol.toStringTag]: 'RegExp',
        source: 'foreign',
        flags: 'm'
      }

      expect(foreignRegExp instanceof RegExp).toBe(false)
      expect(isRegExp(foreignRegExp)).toBe(true)
    })
  })

  describe('Non-RegExp string inputs', () => {
    it('should return false for regular strings and regex-like strings', () => {
      expect(isRegExp('/test/')).toBe(false)
      expect(isRegExp('/test/gi')).toBe(false)
      expect(isRegExp('')).toBe(false)
      expect(isRegExp('   ')).toBe(false)
      expect(isRegExp('RegExp')).toBe(false)
    })
  })

  describe('Nullish, primitive, and object non-RegExp inputs', () => {
    it('should return false for null and undefined', () => {
      expect(isRegExp(null)).toBe(false)
      expect(isRegExp(undefined)).toBe(false)
    })

    it('should return false for numbers, booleans, and symbols', () => {
      expect(isRegExp(0)).toBe(false)
      expect(isRegExp(123)).toBe(false)
      expect(isRegExp(NaN)).toBe(false)
      expect(isRegExp(true)).toBe(false)
      expect(isRegExp(false)).toBe(false)
      expect(isRegExp(Symbol('regexp'))).toBe(false)
    })

    it('should return false for plain objects, arrays, functions, and Date instances', () => {
      expect(isRegExp({})).toBe(false)
      expect(isRegExp([])).toBe(false)
      expect(isRegExp(() => {})).toBe(false)
      expect(isRegExp(new Date())).toBe(false)
      expect(isRegExp(new Map())).toBe(false)
      expect(isRegExp(new Set())).toBe(false)
    })

    it('should return false for fake objects mimicking RegExp properties', () => {
      expect(isRegExp({ source: 'fake', flags: 'i' })).toBe(false)
      expect(isRegExp({ test: () => true, exec: () => null })).toBe(false)
    })
  })
})
