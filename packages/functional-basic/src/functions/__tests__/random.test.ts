import { afterEach, describe, expect, it, vi } from 'vitest'
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

    it('should generate integers within a negative range across multiple iterations', () => {
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

    it('should generate integers for a binary / coin-flip range (0 to 1)', () => {
      for (let iteration = 0; iteration < 30; iteration++) {
        const result = random(0, 1)

        expect([0, 1]).toContain(result)
        expect(Number.isInteger(result)).toBe(true)
      }
    })

    it('should generate integers for a large positive range (e.g. 32-bit integer scale)', () => {
      for (let iteration = 0; iteration < 20; iteration++) {
        const result = random(0, 0xFFFFFFFF)

        expect(result).toBeGreaterThanOrEqual(0)
        expect(result).toBeLessThanOrEqual(0xFFFFFFFF)
        expect(Number.isInteger(result)).toBe(true)
      }
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should return the exact number when min equals max with positive numbers', () => {
      expect(random(5, 5)).toBe(5)
      expect(random(42, 42)).toBe(42)
      expect(random(1_000_000, 1_000_000)).toBe(1_000_000)
    })

    it('should return 0 when min and max are both 0', () => {
      expect(random(0, 0)).toBe(0)
    })

    it('should return the exact negative number when min equals max with negative numbers', () => {
      expect(random(-1, -1)).toBe(-1)
      expect(random(-7, -7)).toBe(-7)
      expect(random(-999, -999)).toBe(-999)
    })

    it('should return the exact number regardless of Math.random output when min equals max', () => {
      const randomSpy = vi.spyOn(Math, 'random')

      randomSpy.mockReturnValue(0)
      expect(random(15, 15)).toBe(15)

      randomSpy.mockReturnValue(0.5)
      expect(random(15, 15)).toBe(15)

      randomSpy.mockReturnValue(0.99999)
      expect(random(15, 15)).toBe(15)
    })

    it('should correctly handle 0 as the minimum boundary', () => {
      const randomSpy = vi.spyOn(Math, 'random')

      randomSpy.mockReturnValue(0)
      expect(random(0, 10)).toBe(0)

      randomSpy.mockReturnValue(0.9999999999999999)
      expect(random(0, 10)).toBe(10)
    })

    it('should correctly handle 0 as the maximum boundary', () => {
      const randomSpy = vi.spyOn(Math, 'random')

      randomSpy.mockReturnValue(0)
      expect(random(-10, 0)).toBe(-10)

      randomSpy.mockReturnValue(0.9999999999999999)
      expect(random(-10, 0)).toBe(0)
    })

    it('should correctly handle contiguous integer ranges with a difference of 1', () => {
      const randomSpy = vi.spyOn(Math, 'random')

      randomSpy.mockReturnValue(0)
      expect(random(10, 11)).toBe(10)

      randomSpy.mockReturnValue(0.99999)
      expect(random(10, 11)).toBe(11)

      randomSpy.mockReturnValue(0)
      expect(random(-1, 0)).toBe(-1)

      randomSpy.mockReturnValue(0.99999)
      expect(random(-1, 0)).toBe(0)
    })
  })

  describe('Deterministic Math.random boundary mapping', () => {
    it('should return exact min when Math.random returns 0 (lower bound)', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0)

      expect(random(1, 10)).toBe(1)
      expect(random(0, 100)).toBe(0)
      expect(random(-20, -10)).toBe(-20)
      expect(random(-5, 5)).toBe(-5)
    })

    it('should return exact max when Math.random returns 0.9999999999999999 (upper bound)', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.9999999999999999)

      expect(random(1, 10)).toBe(10)
      expect(random(0, 100)).toBe(100)
      expect(random(-20, -10)).toBe(-10)
      expect(random(-5, 5)).toBe(5)
    })

    it('should accurately partition ranges into discrete uniform buckets', () => {
      const randomSpy = vi.spyOn(Math, 'random')

      // Range [0, 2] has length 3: [0, 1/3), [1/3, 2/3), [2/3, 1)
      randomSpy.mockReturnValue(0)
      expect(random(0, 2)).toBe(0)

      randomSpy.mockReturnValue(0.33)
      expect(random(0, 2)).toBe(0)

      randomSpy.mockReturnValue(1 / 3)
      expect(random(0, 2)).toBe(1)

      randomSpy.mockReturnValue(0.5)
      expect(random(0, 2)).toBe(1)

      randomSpy.mockReturnValue(0.66)
      expect(random(0, 2)).toBe(1)

      randomSpy.mockReturnValue(2 / 3)
      expect(random(0, 2)).toBe(2)

      randomSpy.mockReturnValue(0.99)
      expect(random(0, 2)).toBe(2)
    })

    it('should accurately partition binary range [0, 1] at 0.5 threshold', () => {
      const randomSpy = vi.spyOn(Math, 'random')

      randomSpy.mockReturnValue(0)
      expect(random(0, 1)).toBe(0)

      randomSpy.mockReturnValue(0.4999999999999999)
      expect(random(0, 1)).toBe(0)

      randomSpy.mockReturnValue(0.5)
      expect(random(0, 1)).toBe(1)

      randomSpy.mockReturnValue(0.9999999999999999)
      expect(random(0, 1)).toBe(1)
    })
  })

  describe('Statistical distribution and completeness', () => {
    it('should generate all possible numbers in a small range at least once', () => {
      const uniqueNumbers = new Set<number>()
      const minimum = 1
      const maximum = 6

      for (let iteration = 0; iteration < 200; iteration++) {
        const generatedNumber = random(minimum, maximum)
        uniqueNumbers.add(generatedNumber)
        expect(generatedNumber).toBeGreaterThanOrEqual(minimum)
        expect(generatedNumber).toBeLessThanOrEqual(maximum)
      }

      for (let expectedNumber = minimum; expectedNumber <= maximum; expectedNumber++) {
        expect(uniqueNumbers.has(expectedNumber)).toBe(true)
      }
    })

    it('should generate all possible numbers in a range crossing zero at least once', () => {
      const uniqueNumbers = new Set<number>()
      const minimum = -2
      const maximum = 2

      for (let iteration = 0; iteration < 200; iteration++) {
        const generatedNumber = random(minimum, maximum)
        uniqueNumbers.add(generatedNumber)
        expect(generatedNumber).toBeGreaterThanOrEqual(minimum)
        expect(generatedNumber).toBeLessThanOrEqual(maximum)
      }

      for (let expectedNumber = minimum; expectedNumber <= maximum; expectedNumber++) {
        expect(uniqueNumbers.has(expectedNumber)).toBe(true)
      }
    })
  })

  describe('Floating-point and non-integer inputs', () => {
    it('should always return an integer even when min and max are floating-point numbers', () => {
      for (let iteration = 0; iteration < 20; iteration++) {
        const result = random(1.5, 5.5)

        expect(Number.isInteger(result)).toBe(true)
      }
    })

    it('should deterministically calculate integer boundaries for float inputs', () => {
      const randomSpy = vi.spyOn(Math, 'random')

      // min = 1.2, max = 4.2 -> span = 4.2 - 1.2 + 1 = 4
      // Math.floor(0 * 4 + 1.2) = Math.floor(1.2) = 1
      randomSpy.mockReturnValue(0)
      expect(random(1.2, 4.2)).toBe(1)

      // Math.floor(0.999999 * 4 + 1.2) = Math.floor(3.999996 + 1.2) = Math.floor(5.199996) = 5
      randomSpy.mockReturnValue(0.999999)
      expect(random(1.2, 4.2)).toBe(5)
    })
  })

  describe('Inverted bounds and formula specification', () => {
    it('should adhere to the mathematical formula when min is greater than max', () => {
      const randomSpy = vi.spyOn(Math, 'random')

      // min = 10, max = 5 -> span = 5 - 10 + 1 = -4
      // At Math.random = 0: Math.floor(0 * -4 + 10) = 10
      randomSpy.mockReturnValue(0)
      expect(random(10, 5)).toBe(10)

      // At Math.random = 0.5: Math.floor(0.5 * -4 + 10) = Math.floor(-2 + 10) = 8
      randomSpy.mockReturnValue(0.5)
      expect(random(10, 5)).toBe(8)

      // At Math.random = 0.999999: Math.floor(0.999999 * -4 + 10) = Math.floor(-3.999996 + 10) = 6
      randomSpy.mockReturnValue(0.999999)
      expect(random(10, 5)).toBe(6)
    })
  })

  describe('Statefulness, isolation, and purity', () => {
    it('should produce identical results given the same deterministic Math.random sequence', () => {
      const randomSpy = vi.spyOn(Math, 'random')

      randomSpy.mockReturnValue(0.42)
      const firstResult = random(1, 100)

      randomSpy.mockReturnValue(0.42)
      const secondResult = random(1, 100)

      expect(firstResult).toBe(secondResult)
    })

    it('should clean up mocks properly and not leak between tests', () => {
      expect(vi.isMockFunction(Math.random)).toBe(false)
    })
  })
})
