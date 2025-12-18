import { describe, it, expect, beforeEach } from 'vitest'
import { Calculator } from '../Calculator'

describe('Calculator', () => {
  let calculator: Calculator

  beforeEach(() => {
    calculator = new Calculator()
  })

  describe('setValue and getResult', () => {
    it('should set initial value', () => {
      calculator.setValue(10)

      expect(calculator.getResult()).toBe(10)
    })

    it('should return default value of 0', () => {
      expect(calculator.getResult()).toBe(0)
    })
  })

  describe('add', () => {
    it('should add positive numbers', () => {
      calculator.setValue(5).add(3)

      expect(calculator.getResult()).toBe(8)
    })

    it('should add negative numbers', () => {
      calculator.setValue(10).add(-3)

      expect(calculator.getResult()).toBe(7)
    })

    it('should support method chaining', () => {
      const result = calculator.setValue(5).add(3).add(2).getResult()

      expect(result).toBe(10)
    })
  })

  describe('subtract', () => {
    it('should subtract numbers', () => {
      calculator.setValue(10).subtract(3)

      expect(calculator.getResult()).toBe(7)
    })

    it('should handle negative results', () => {
      calculator.setValue(5).subtract(10)

      expect(calculator.getResult()).toBe(-5)
    })
  })

  describe('multiply', () => {
    it('should multiply numbers', () => {
      calculator.setValue(5).multiply(3)

      expect(calculator.getResult()).toBe(15)
    })

    it('should multiply by zero', () => {
      calculator.setValue(10).multiply(0)

      expect(calculator.getResult()).toBe(0)
    })

    it('should multiply by negative numbers', () => {
      calculator.setValue(5).multiply(-2)

      expect(calculator.getResult()).toBe(-10)
    })
  })

  describe('divide', () => {
    it('should divide numbers', () => {
      calculator.setValue(10).divide(2)

      expect(calculator.getResult()).toBe(5)
    })

    it('should throw error when dividing by zero', () => {
      calculator.setValue(10)

      expect(() => calculator.divide(0)).toThrow('Division by zero is not allowed')
    })

    it('should handle division with decimals', () => {
      calculator.setValue(10).divide(3)

      expect(calculator.getResult()).toBeCloseTo(3.333, 2)
    })
  })

  describe('power', () => {
    it('should calculate power', () => {
      calculator.setValue(2).power(3)

      expect(calculator.getResult()).toBe(8)
    })

    it('should handle power of zero', () => {
      calculator.setValue(5).power(0)

      expect(calculator.getResult()).toBe(1)
    })

    it('should handle negative exponent', () => {
      calculator.setValue(2).power(-2)

      expect(calculator.getResult()).toBe(0.25)
    })
  })

  describe('sqrt', () => {
    it('should calculate square root', () => {
      calculator.setValue(16).sqrt()

      expect(calculator.getResult()).toBe(4)
    })

    it('should handle square root of zero', () => {
      calculator.setValue(0).sqrt()

      expect(calculator.getResult()).toBe(0)
    })

    it('should throw error for negative numbers', () => {
      calculator.setValue(-4)

      expect(() => calculator.sqrt()).toThrow('Cannot calculate square root of negative number')
    })
  })

  describe('reset', () => {
    it('should reset calculator to zero', () => {
      calculator.setValue(100).add(50).reset()

      expect(calculator.getResult()).toBe(0)
    })
  })

  describe('isEven', () => {
    it('should return true for even numbers', () => {
      calculator.setValue(10)

      expect(calculator.isEven()).toBe(true)
    })

    it('should return false for odd numbers', () => {
      calculator.setValue(11)

      expect(calculator.isEven()).toBe(false)
    })

    it('should return true for zero', () => {
      calculator.setValue(0)

      expect(calculator.isEven()).toBe(true)
    })
  })

  describe('isOdd', () => {
    it('should return true for odd numbers', () => {
      calculator.setValue(11)

      expect(calculator.isOdd()).toBe(true)
    })

    it('should return false for even numbers', () => {
      calculator.setValue(10)

      expect(calculator.isOdd()).toBe(false)
    })
  })

  describe('isPositive', () => {
    it('should return true for positive numbers', () => {
      calculator.setValue(5)

      expect(calculator.isPositive()).toBe(true)
    })

    it('should return false for negative numbers', () => {
      calculator.setValue(-5)

      expect(calculator.isPositive()).toBe(false)
    })

    it('should return false for zero', () => {
      calculator.setValue(0)

      expect(calculator.isPositive()).toBe(false)
    })
  })

  describe('isNegative', () => {
    it('should return true for negative numbers', () => {
      calculator.setValue(-5)

      expect(calculator.isNegative()).toBe(true)
    })

    it('should return false for positive numbers', () => {
      calculator.setValue(5)

      expect(calculator.isNegative()).toBe(false)
    })
  })

  describe('isZero', () => {
    it('should return true for zero', () => {
      calculator.setValue(0)

      expect(calculator.isZero()).toBe(true)
    })

    it('should return false for non-zero numbers', () => {
      calculator.setValue(5)

      expect(calculator.isZero()).toBe(false)
    })
  })

  describe('complex operations', () => {
    it('should handle complex chain of operations', () => {
      const result = calculator
        .setValue(10)
        .add(5) // 15
        .multiply(2) // 30
        .subtract(10) // 20
        .divide(4) // 5
        .power(2) // 25
        .sqrt() // 5
        .getResult()

      expect(result).toBe(5)
    })

    it('should calculate percentage', () => {
      const result = calculator
        .setValue(200)
        .multiply(0.15) // 15% of 200
        .getResult()

      expect(result).toBe(30)
    })
  })
})
