import { describe, it, expect } from 'vitest'
import { forEach } from '../../functions/forEach'

describe('forEach', () => {
  it('перебирает массив', () => {
    const arr = [1, 2, 3]
    const res = forEach(arr, v => v * 2)
    expect(res).toEqual([2, 4, 6])
  })

  it('перебирает объект', () => {
    const obj = { a: 1, b: 2 }
    const res = forEach(obj, (v, k) => `${k}:${v}`)
    expect(res).toEqual(['a:1', 'b:2'])
  })

  it('перебирает Map', () => {
    const map = new Map([['x', 1], ['y', 2]])
    const res = forEach(map, (v, k) => `${k}-${v}`)
    expect(res).toEqual(['x-1', 'y-2'])
  })

  it('возвращает [] для не-объекта', () => {
    expect(forEach(null as any, () => 1)).toEqual([])
    expect(forEach(undefined as any, () => 1)).toEqual([])
  })
})
