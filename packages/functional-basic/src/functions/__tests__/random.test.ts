import { describe, it, expect, vi, afterEach } from 'vitest'
import { random } from '../random'

describe('random', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should generate integers within a positive range across multiple iterations', () => {
      for (let iteration = 0; iteration < 100; iteration++) {
        const result = random(1, 10)

        expect(result).toBeGreaterThanOrEqual(1)
        expect(result).toBeLessThanOrEqual(10)
        expect(Number.isInteger(result)).toBe(true)
      }
    })

    it('should generate integers within a negative range', () => {
      for (let iteration = 0; iteration < 50; iteration++) {
        const result = random(-10, -5)

        expect(result).toBeGreaterThanOrEqual(-10)
        expect(result).toBeLessThanOrEqual(-5)
        expect(Number.isInteger(result)).toBe(true)
      }
    })

    it('should generate integers within a range spanning across zero', () => {
      for (let iteration = 0; iteration < 50; iteration++) {
        const result = random(-5, 5)

        expect(result).toBeGreaterThanOrEqual(-5)
        expect(result).toBeLessThanOrEqual(5)
        expect(Number.isInteger(result)).toBe(true)
      }
    })
  })

  describe('Boundary values and deterministic distribution', () => {
    it('should return the exact number when min equals max (including 0 and negative values)', () => {
      expect(random(5, 5)).toBe(5)
      expect(random(0, 0)).toBe(0)
      expect(random(-7, -7)).toBe(-7)
    })

    it('should return min when Math.random returns 0 (lower bound)', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0)

      expect(random(1, 10)).toBe(1)
      expect(random(0, 100)).toBe(0)
      expect(random(-20, -10)).toBe(-20)
    })

    it('should return max when Math.random returns 0.9999999999999999 (upper bound)', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.9999999999999999)

      expect(random(1, 10)).toBe(10)
      expect(random(0, 100)).toBe(100)
      expect(random(-20, -10)).toBe(-10)
    })

    it('should map midpoint Math.random values to the expected integer bucket', () => {
      const randomSpy = vi.spyOn(Math, 'random')

      randomSpy.mockReturnValue(0.5)
      expect(random(1, 10)).toBe(6)
      expect(random(0, 1)).toBe(1)

      randomSpy.mockReturnValue(0.49)
      expect(random(0, 1)).toBe(0)
    })
  })
})
