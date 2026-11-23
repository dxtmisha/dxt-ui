import { describe, expect, it } from 'vitest'
import { normalizeCmsLimit } from '../normalizeCmsLimit'

describe('normalizeCmsLimit', () => {
  it('returns default limit when omitted or non-finite', () => {
    expect(normalizeCmsLimit()).toBe(20)
    expect(normalizeCmsLimit(undefined)).toBe(20)
    expect(normalizeCmsLimit(Number.NaN)).toBe(20)
    expect(normalizeCmsLimit(Number.POSITIVE_INFINITY)).toBe(20)
    expect(normalizeCmsLimit(Number.NEGATIVE_INFINITY)).toBe(20)
    expect(normalizeCmsLimit(undefined, 15)).toBe(15)
    expect(normalizeCmsLimit(Number.NaN, 15)).toBe(15)
  })

  it('clamps values to [1, maxLimit] and truncates floats', () => {
    expect(normalizeCmsLimit(0)).toBe(1)
    expect(normalizeCmsLimit(0.9)).toBe(1)
    expect(normalizeCmsLimit(-10)).toBe(1)
    expect(normalizeCmsLimit(1)).toBe(1)
    expect(normalizeCmsLimit(15.9)).toBe(15)
    expect(normalizeCmsLimit(200)).toBe(200)
    expect(normalizeCmsLimit(500)).toBe(200)
    expect(normalizeCmsLimit(500, 10, 50)).toBe(50)
  })
})
