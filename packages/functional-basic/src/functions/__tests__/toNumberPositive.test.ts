import { describe, it, expect } from 'vitest'
import { toNumberPositive } from '../toNumberPositive'

describe('toNumberPositive', () => {
  describe('Числовые примитивы (Primitives)', () => {
    it('должен возвращать исходное число для положительных чисел', () => {
      expect(toNumberPositive(10)).toBe(10)
      expect(toNumberPositive(1)).toBe(1)
      expect(toNumberPositive(0.001)).toBe(0.001)
      expect(toNumberPositive(999999)).toBe(999999)
    })

    it('должен возвращать 0 по умолчанию для нуля и отрицательных чисел', () => {
      expect(toNumberPositive(0)).toBe(0)
      expect(toNumberPositive(-0)).toBe(0)
      expect(toNumberPositive(-5)).toBe(0)
      expect(toNumberPositive(-123.45)).toBe(0)
    })

    it('должен возвращать 0 по умолчанию для невалидных чисел (Infinity, NaN)', () => {
      expect(toNumberPositive(Infinity)).toBe(0)
      expect(toNumberPositive(-Infinity)).toBe(0)
      expect(toNumberPositive(NaN)).toBe(0)
    })
  })

  describe('Строковые значения (Strings)', () => {
    it('должен конвертировать валидные положительные строки в числа', () => {
      expect(toNumberPositive('15')).toBe(15)
      expect(toNumberPositive('1')).toBe(1)
      expect(toNumberPositive('0.5')).toBe(0.5)
      expect(toNumberPositive('+42')).toBe(42)
    })

    it('должен возвращать 0 по умолчанию для строкового нуля и отрицательных строк', () => {
      expect(toNumberPositive('0')).toBe(0)
      expect(toNumberPositive('-10')).toBe(0)
      expect(toNumberPositive('-0')).toBe(0)
    })

    it('должен поддерживать строки с разделителями и суффиксами через системный парсер', () => {
      expect(toNumberPositive('1 000')).toBe(1000)
      expect(toNumberPositive('100px')).toBe(100)
    })
  })

  describe('Пустые и некорректные значения (Nullish & Invalid)', () => {
    it('должен возвращать 0 по умолчанию для nullish и пустых строк', () => {
      expect(toNumberPositive(undefined)).toBe(0)
      expect(toNumberPositive(null)).toBe(0)
      expect(toNumberPositive('')).toBe(0)
      expect(toNumberPositive('   ')).toBe(0)
      expect(toNumberPositive('invalid')).toBe(0)
    })

    it('должен безопасно возвращать 0 для булевых типов', () => {
      expect(toNumberPositive(true as unknown as number)).toBe(0)
      expect(toNumberPositive(false as unknown as number)).toBe(0)
    })
  })

  describe('Пользовательское значение по умолчанию (Custom defaultValue)', () => {
    it('должен возвращать custom defaultValue при некорректных или отрицательных значениях', () => {
      expect(toNumberPositive(undefined, 1)).toBe(1)
      expect(toNumberPositive('', 5)).toBe(5)
      expect(toNumberPositive(0, 10)).toBe(10)
      expect(toNumberPositive(-5, 2)).toBe(2)
      expect(toNumberPositive('invalid', 42)).toBe(42)
    })

    it('НЕ должен использовать defaultValue, если переданное число положительное', () => {
      expect(toNumberPositive(10, 50)).toBe(10)
      expect(toNumberPositive('20', 50)).toBe(20)
    })
  })
})
