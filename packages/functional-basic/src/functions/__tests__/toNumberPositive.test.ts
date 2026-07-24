import { describe, it, expect } from 'vitest'
import { toNumberPositive } from '../toNumberPositive'

describe('toNumberPositive', () => {
  it('should return number if value is positive number', () => {
    expect(toNumberPositive(10)).toBe(10)
    expect(toNumberPositive(1)).toBe(1)
  })

  it('should convert valid positive numeric string to number', () => {
    expect(toNumberPositive('15')).toBe(15)
    expect(toNumberPositive('1')).toBe(1)
  })

  it('should return 0 by default for invalid, zero, or negative numbers', () => {
    expect(toNumberPositive(0)).toBe(0)
    expect(toNumberPositive(-5)).toBe(0)
    expect(toNumberPositive('0')).toBe(0)
    expect(toNumberPositive('-10')).toBe(0)
    expect(toNumberPositive(undefined)).toBe(0)
    expect(toNumberPositive(null)).toBe(0)
    expect(toNumberPositive('')).toBe(0)
    expect(toNumberPositive('invalid')).toBe(0)
  })

  it('should return custom default value when specified', () => {
    expect(toNumberPositive(undefined, 1)).toBe(1)
    expect(toNumberPositive('', 5)).toBe(5)
    expect(toNumberPositive(0, 10)).toBe(10)
    expect(toNumberPositive(-5, 2)).toBe(2)
  })
})
