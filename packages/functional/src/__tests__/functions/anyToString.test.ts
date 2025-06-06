import { describe, it, expect } from 'vitest'
import { anyToString } from '../../functions/anyToString'

describe('anyToString', () => {
  it('корректно преобразует строку', () => {
    expect(anyToString('  test  ')).toBe('test')
  })

  it('корректно преобразует массив строк', () => {
    expect(anyToString(['a', 'b', 'c'])).toBe('a, b, c')
  })

  it('корректно преобразует массив чисел', () => {
    expect(anyToString([1, 2, 3])).toBe('1, 2, 3')
  })

  it('корректно преобразует объект', () => {
    expect(anyToString({ a: 1, b: 2 })).toBe(JSON.stringify({ a: 1, b: 2 }))
  })

  it('корректно преобразует true', () => {
    expect(anyToString(true)).toBe('1')
  })

  it('корректно преобразует false', () => {
    expect(anyToString(false)).toBe('false')
  })

  it('корректно преобразует null', () => {
    expect(anyToString(null)).toBe('')
  })

  it('корректно преобразует undefined', () => {
    expect(anyToString(undefined)).toBe('')
  })

  it('корректно преобразует число', () => {
    expect(anyToString(123)).toBe('123')
  })

  it('корректно преобразует массив с объектом', () => {
    expect(anyToString([{ a: 1 }, 2])).toBe(JSON.stringify([{ a: 1 }, 2]))
  })
})
