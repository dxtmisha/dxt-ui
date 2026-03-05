import { describe, it, expect } from 'vitest'
import { random } from '../random'

describe('random', () => {
  it('should generate a number within the specified range', () => {
    for (let i = 0; i < 100; i++) {
      const result = random(1, 10)
      expect(result).toBeGreaterThanOrEqual(1)
      expect(result).toBeLessThanOrEqual(10)
      expect(Number.isInteger(result)).toBe(true)
    }
  })

  it('should return the number itself if min equals max', () => {
    expect(random(5, 5)).toBe(5)
  })

  it('should handle negative ranges', () => {
    const result = random(-10, -5)
    expect(result).toBeGreaterThanOrEqual(-10)
    expect(result).toBeLessThanOrEqual(-5)
  })
})
