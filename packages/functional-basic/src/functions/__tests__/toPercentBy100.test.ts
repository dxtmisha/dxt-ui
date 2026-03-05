import { describe, it, expect } from 'vitest'
import { toPercentBy100 } from '../toPercentBy100'

describe('toPercentBy100', () => {
  it('should convert values to percentages (0-100 range)', () => {
    expect(toPercentBy100(100, 50)).toBe(50)
    expect(toPercentBy100(200, 20)).toBe(10)
    expect(toPercentBy100(10, 10)).toBe(100)
  })
})
