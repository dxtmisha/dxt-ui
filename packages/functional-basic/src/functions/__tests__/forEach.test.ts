import { describe, it, expect, vi } from 'vitest'
import { forEach } from '../forEach'

describe('forEach', () => {
  it('should iterate over an array', () => {
    const data = [1, 2, 3]
    const callback = vi.fn(item => item * 2)
    const result = forEach(data, callback)

    expect(result).toEqual([2, 4, 6])
    expect(callback).toHaveBeenCalledTimes(3)
  })

  it('should iterate over an object', () => {
    const data = { a: 1, b: 2 }
    const callback = vi.fn(item => item * 2)
    const result = forEach(data, callback)

    expect(result).toEqual([2, 4])
    expect(callback).toHaveBeenCalledTimes(2)
  })
  it('should iterate over a Map', () => {
    const data = new Map([['a', 1], ['b', 2]])
    const callback = vi.fn(item => item * 2)
    const result = forEach(data, callback)

    expect(result).toEqual([2, 4])
    expect(callback).toHaveBeenCalledTimes(2)
  })

  it('should iterate over a Set', () => {
    const data = new Set([1, 2])
    const callback = vi.fn(item => item * 2)
    const result = forEach(data, callback)

    expect(result).toEqual([2, 4])
    expect(callback).toHaveBeenCalledTimes(2)
  })

  it('should return an empty array if data is not an object', () => {
    const result = forEach(null as any, () => { })
    expect(result).toEqual([])
  })

  it('should filter out undefined results by default', () => {
    const data = [1, 2, 3]
    const result = forEach(data, item => (item % 2 === 0 ? item : undefined))
    expect(result).toEqual([2])
  })

  it('should include undefined results if saveUndefined is true', () => {
    const data = [1, 2, 3]
    const result = forEach(data, item => (item % 2 === 0 ? item : undefined), true)
    expect(result).toEqual([undefined, 2, undefined])
  })
})
