import { describe, it, expect, expectTypeOf } from 'vitest'
import { getClassTagAStatic } from '../getClassTagAStatic'

describe('getClassTagAStatic', () => {
  it('returns the static anchor class with the given design prefix', () => {
    expect(getClassTagAStatic('d1')).toBe('d1-a--static')
    expect(getClassTagAStatic('ui')).toBe('ui-a--static')
    expectTypeOf(getClassTagAStatic('d1')).toEqualTypeOf<string>()
  })

  it('handles empty and special string prefixes deterministically', () => {
    expect(getClassTagAStatic('')).toBe('-a--static')
    expect(getClassTagAStatic('custom-design')).toBe('custom-design-a--static')
  })
})
