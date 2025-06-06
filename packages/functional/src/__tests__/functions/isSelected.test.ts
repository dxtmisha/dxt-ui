import { describe, expect, it } from 'vitest'

import { isSelected } from '../../functions/isSelected'

describe('isSelected', () => {
  it('возвращает true, если value есть в массиве selected', () => {
    expect(isSelected(2, [1, 2, 3])).toBe(true)
    expect(isSelected('b', ['a', 'b', 'c'])).toBe(true)
  })

  it('возвращает false, если value отсутствует в массиве selected', () => {
    expect(isSelected(4, [1, 2, 3])).toBe(false)
    expect(isSelected('d', ['a', 'b', 'c'])).toBe(false)
  })

  it('возвращает true, если value равен selected (строка)', () => {
    expect(isSelected('test', 'test')).toBe(true)
  })

  it('возвращает false, если value не равен selected (строка)', () => {
    expect(isSelected('test', 'other')).toBe(false)
  })

  it('корректно сравнивает числа', () => {
    expect(isSelected(1, 1)).toBe(true)
    expect(isSelected(1, 2)).toBe(false)
    expect(isSelected('1', 1)).toBe(true)
    expect(isSelected('1', 2)).toBe(false)
  })

  it('возвращает false, если value null', () => {
    expect(isSelected(null, [1, 2, 3])).toBe(false)
    expect(isSelected(null, 'test')).toBe(false)
  })

  it('корректно работает с undefined', () => {
    expect(isSelected(undefined, [undefined, 1])).toBe(false)
    expect(isSelected(undefined, [1, 2, 3])).toBe(false)
    expect(isSelected(undefined, undefined)).toBe(false)
  })
})
