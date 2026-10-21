/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest'
import { transformation } from '../transformation'

describe('transformation', () => {
  describe('Базовые литералы (Basic literals)', () => {
    it('должен преобразовывать строковые литералы в примитивы', () => {
      expect(transformation('true')).toBe(true)
      expect(transformation('false')).toBe(false)
      expect(transformation('null')).toBe(null)
      expect(transformation('undefined')).toBe(undefined)
    })

    it('должен учитывать пробелы по краям литералов', () => {
      expect(transformation('  true  ')).toBe(true)
      expect(transformation('  false ')).toBe(false)
      expect(transformation('\nnull\t')).toBe(null)
    })
  })

  describe('Числовые строки (Numeric strings)', () => {
    it('должен преобразовывать целые и вещественные числа', () => {
      expect(transformation('123')).toBe(123)
      expect(transformation('123.45')).toBe(123.45)
      expect(transformation('0')).toBe(0)
      expect(transformation('-42')).toBe(-42)
      expect(transformation('-42.5')).toBe(-42.5)
    })
  })

  describe('JSON структуры (JSON Objects & Arrays)', () => {
    it('должен парсить валидные JSON-объекты и массивы', () => {
      expect(transformation('{"a":1}')).toEqual({ a: 1 })
      expect(transformation('[1,2,3]')).toEqual([1, 2, 3])
      expect(transformation('{"nested":{"val":true}}')).toEqual({ nested: { val: true } })
    })

    it('должен возвращать исходную строку при невалидном JSON без падения', () => {
      expect(transformation('{invalid:json}')).toBe('{invalid:json}')
      expect(transformation('[1, 2,')).toBe('[1, 2,')
    })
  })

  describe('Функции глобального объекта window (Window functions)', () => {
    it('должен возвращать функцию из window при isFunction = true', () => {
      const mockFn = () => 'test'
      ;(window as unknown as Record<string, unknown>).testFn = mockFn
      expect(transformation('testFn', true)).toBe(mockFn)
      delete (window as unknown as Record<string, unknown>).testFn
    })

    it('НЕ должен возвращать функцию из window, если isFunction = false', () => {
      const mockFn = () => 'test'
      ;(window as unknown as Record<string, unknown>).testFn = mockFn
      expect(transformation('testFn')).toBe('testFn')
      delete (window as unknown as Record<string, unknown>).testFn
    })

    it('должен защищать от прототипных свойств window', () => {
      expect(transformation('toString', true)).toBe('toString')
      expect(transformation('__proto__', true)).toBe('__proto__')
    })
  })

  describe('Неизменяемые значения (Passthrough values)', () => {
    it('должен возвращать исходные значения без изменений', () => {
      expect(transformation('normal string')).toBe('normal string')
      expect(transformation(123)).toBe(123)
      expect(transformation(true)).toBe(true)
      expect(transformation(null)).toBe(null)
      expect(transformation(undefined)).toBe(undefined)
      expect(transformation({ key: 'val' })).toEqual({ key: 'val' })
    })
  })
})
