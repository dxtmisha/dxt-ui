import { describe, it, expect } from 'vitest'
import { copyObject } from '../../functions/copyObject'

describe('copyObject', () => {
  it('создаёт глубокую копию объекта', () => {
    const obj = { a: 1, b: { c: 2 } }
    const copy = copyObject(obj)
    expect(copy).toEqual(obj)
    expect(copy).not.toBe(obj)
    expect(copy.b).not.toBe(obj.b)
  })

  it('копирует массив', () => {
    const arr = [1, 2, 3]
    const copy = copyObject(arr)
    expect(copy).toEqual(arr)
    expect(copy).not.toBe(arr)
  })
})
