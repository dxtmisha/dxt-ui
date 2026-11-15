import { afterEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { getClassTagAStatic } from '../getClassTagAStatic'

describe('getClassTagAStatic', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should match the parameter and return type contract', () => {
      expectTypeOf(getClassTagAStatic).parameter(0).toEqualTypeOf<string>()
      expectTypeOf(getClassTagAStatic('d1')).toEqualTypeOf<string>()
    })

    it('should generate static anchor class names for standard design prefixes', () => {
      expect(getClassTagAStatic('d1')).toBe('d1-a--static')
      expect(getClassTagAStatic('ui')).toBe('ui-a--static')
      expect(getClassTagAStatic('m3')).toBe('m3-a--static')
      expect(getClassTagAStatic('custom-design')).toBe('custom-design-a--static')
    })

    it('should be deterministic across repeated invocations', () => {
      const first = getClassTagAStatic('d1')
      const second = getClassTagAStatic('d1')

      expect(first).toBe('d1-a--static')
      expect(second).toBe(first)
    })
  })

  describe('Boundary values, empty/whitespace inputs, and special characters', () => {
    it('should handle empty string, whitespace, and hyphenated prefixes verbatim', () => {
      expect(getClassTagAStatic('')).toBe('-a--static')
      expect(getClassTagAStatic('   ')).toBe('   -a--static')
      expect(getClassTagAStatic('\t\n')).toBe('\t\n-a--static')
      expect(getClassTagAStatic('d1-')).toBe('d1--a--static')
      expect(getClassTagAStatic('-d1')).toBe('-d1-a--static')
      expect(getClassTagAStatic('0')).toBe('0-a--static')
    })

    it('should preserve regex metacharacters and special symbols without mangling', () => {
      expect(getClassTagAStatic('d1.v2')).toBe('d1.v2-a--static')
      expect(getClassTagAStatic('$100')).toBe('$100-a--static')
      expect(getClassTagAStatic('c++')).toBe('c++-a--static')
      expect(getClassTagAStatic('[ns]')).toBe('[ns]-a--static')
    })
  })

  describe('Multilingual and Unicode graphemes', () => {
    it.each([
      ['дизайн', 'дизайн-a--static'],
      ['thiết-kế', 'thiết-kế-a--static'],
      ['设计', '设计-a--static'],
      ['🎨', '🎨-a--static']
    ])('should format prefix %s into %s', (prefix, expected) => {
      expect(getClassTagAStatic(prefix)).toBe(expected)
    })
  })
})
