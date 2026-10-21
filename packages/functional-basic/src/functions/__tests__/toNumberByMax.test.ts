import { describe, it, expect, beforeEach } from 'vitest'
import { toNumberByMax } from '../toNumberByMax'
import { Geo } from '../../classes/Geo'

describe('toNumberByMax', () => {
  beforeEach(() => {
    // Reset Geo to a known state
    Geo.set('en-US')
  })

  describe('Базовое ограничение максимума (Standard bounds)', () => {
    it('должен возвращать число, если оно меньше или равно максимуму', () => {
      expect(toNumberByMax(50, 100)).toBe(50)
      expect(toNumberByMax(100, 100)).toBe(100)
    })

    it('должен возвращать строку с плюсом, если число превышает максимум', () => {
      expect(toNumberByMax(150, 100)).toBe('100+')
      expect(toNumberByMax(999, 99)).toBe('99+')
    })

    it('должен возвращать число без изменений, если max не передан', () => {
      expect(toNumberByMax(150)).toBe(150)
      expect(toNumberByMax(150, undefined)).toBe(150)
    })
  })

  describe('Граничные значения с нулем и отрицательными числами (Edge cases: 0 & negative)', () => {
    it('должен корректно обрабатывать max = 0 (Регрессионная защита)', () => {
      expect(toNumberByMax(10, 0)).toBe('0+')
      expect(toNumberByMax(0, 0)).toBe(0)
      expect(toNumberByMax(-5, 0)).toBe(-5)
    })

    it('должен корректно обрабатывать строковый max = "0"', () => {
      expect(toNumberByMax(10, '0')).toBe('0+')
      expect(toNumberByMax(0, '0')).toBe(0)
    })

    it('должен корректно обрабатывать отрицательные значения и максимумы', () => {
      expect(toNumberByMax(-5, -10)).toBe('-10+')
      expect(toNumberByMax(-15, -10)).toBe(-15)
    })
  })

  describe('Строковые входные данные (String inputs)', () => {
    it('должен парсить строковые значения и строковый максимум', () => {
      expect(toNumberByMax('50', '100')).toBe(50)
      expect(toNumberByMax('150', '100')).toBe('100+')
    })

    it('должен обрабатывать пустые или нечисловые значения', () => {
      expect(toNumberByMax('', 100)).toBe(0)
      expect(toNumberByMax('abc', 100)).toBe(0)
    })
  })

  describe('Локализация и форматирование (Formatting & GeoIntl)', () => {
    it('должен форматировать числа разделителями тысяч при formatting = true', () => {
      expect(toNumberByMax(1000, 5000, true)).toBe('1,000')
    })

    it('должен форматировать максимум с плюсом при превышении', () => {
      expect(toNumberByMax(1500, 1000, true)).toBe('1,000+')
      expect(toNumberByMax(1000000, 99999, true)).toBe('99,999+')
    })

    it('должен учитывать переданный язык форматирования', () => {
      expect(toNumberByMax(2500, 2000, true, 'en-US')).toBe('2,000+')
    })
  })
})
