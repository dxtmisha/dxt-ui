import { describe, it, expect, vi, afterEach } from 'vitest'
import { copyObject } from '../copyObject'

describe('copyObject', () => {
  const originalStructuredClone = (globalThis as any).structuredClone

  afterEach(() => {
    vi.stubGlobal('structuredClone', originalStructuredClone)
  })

  describe('Simplified Mode (simplified: true)', () => {
    it('should deeply copy simple objects and arrays', () => {
      const original = { a: 1, b: { c: [2, 3] } }
      const copy = copyObject(original)

      expect(copy).toEqual(original)
      expect(copy).not.toBe(original)
      expect(copy.b).not.toBe(original.b)
      expect(copy.b.c).not.toBe(original.b.c)
    })

    it('should strip functions and undefined values', () => {
      const original = { a: 1, b: undefined, c: () => {} }
      const copy = copyObject(original)

      expect(copy).toEqual({ a: 1 })
      expect('b' in copy).toBe(false)
      expect('c' in copy).toBe(false)
    })

    it('should convert Date to string', () => {
      const date = new Date('2024-01-01')
      const original = { date }
      const copy = copyObject(original)

      expect(typeof copy.date).toBe('string')
      expect(copy.date).toBe(date.toJSON())
    })
  })

  describe('Full Mode (simplified: false)', () => {
    it('should use structuredClone if available and pass options', () => {
      const mockResult = { mocked: true }
      const spy = vi.fn().mockReturnValue(mockResult)
      vi.stubGlobal('structuredClone', spy)

      const original = { a: 1 }
      const options = { transfer: [] }
      const result = copyObject(original, false, options)

      expect(spy).toHaveBeenCalledWith(original, options)
      expect(result).toBe(mockResult)
    })

    it('should fallback to JSON if structuredClone is undefined', () => {
      vi.stubGlobal('structuredClone', undefined)

      const original = { a: 1, b: undefined }
      const copy = copyObject(original, false)

      expect(copy).toEqual({ a: 1 }) // JSON result
    })

    it('should preserve complex types (using real structuredClone if in jsdom/node)', () => {
      // Note: If the environment supports structuredClone, this test will verify actual behavior
      if (typeof (globalThis as any).structuredClone === 'function') {
        const date = new Date()
        const set = new Set([1, 2])
        const original = { date, set }

        const copy = copyObject(original, false)

        expect(copy.date).toBeInstanceOf(Date)
        expect(copy.date.getTime()).toBe(date.getTime())
        expect(copy.set).toBeInstanceOf(Set)
        expect(copy.set.has(1)).toBe(true)
      }
    })

    it('should handle circular references (using real structuredClone)', () => {
      if (typeof (globalThis as any).structuredClone === 'function') {
        const original: any = { a: 1 }
        original.self = original

        const copy = copyObject(original, false)

        expect(copy.a).toBe(1)
        expect(copy.self).toBe(copy)
        expect(copy.self).not.toBe(original)
      }
    })
  })
})
