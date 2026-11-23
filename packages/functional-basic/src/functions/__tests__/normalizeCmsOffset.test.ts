import { describe, expect, it } from 'vitest'
import { normalizeCmsOffset } from '../normalizeCmsOffset'

describe('normalizeCmsOffset', () => {
  it('returns 0 when omitted, non-finite, or negative', () => {
    expect(normalizeCmsOffset()).toBe(0)
    expect(normalizeCmsOffset(undefined)).toBe(0)
    expect(normalizeCmsOffset(Number.NaN)).toBe(0)
    expect(normalizeCmsOffset(Number.POSITIVE_INFINITY)).toBe(0)
    expect(normalizeCmsOffset(Number.NEGATIVE_INFINITY)).toBe(0)
    expect(normalizeCmsOffset(-10)).toBe(0)
  })

  it('truncates positive floats to non-negative integers', () => {
    expect(normalizeCmsOffset(0)).toBe(0)
    expect(normalizeCmsOffset(0.9)).toBe(0)
    expect(normalizeCmsOffset(12.9)).toBe(12)
    expect(normalizeCmsOffset(40)).toBe(40)
  })
})
