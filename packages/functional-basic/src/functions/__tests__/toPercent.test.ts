import { describe, it, expect } from 'vitest'
import { toPercent } from '../toPercent'

describe('toPercent', () => {
  it('should convert values to percentages (0-1 range)', () => {
    expect(toPercent(100, 50)).toBe(0.5)
    expect(toPercent(200, 20)).toBe(0.1)
    expect(toPercent(10, 10)).toBe(1)
  })
})
