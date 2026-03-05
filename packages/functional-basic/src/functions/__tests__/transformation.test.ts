/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest'
import { transformation } from '../transformation'

describe('transformation', () => {
  it('should transform basic types', () => {
    expect(transformation('true')).toBe(true)
    expect(transformation('false')).toBe(false)
    expect(transformation('null')).toBe(null)
    expect(transformation('undefined')).toBe(undefined)
  })

  it('it should transform numbers', () => {
    expect(transformation('123')).toBe(123)
    expect(transformation('123.45')).toBe(123.45)
  })

  it('should transform JSON objects and arrays', () => {
    expect(transformation('{"a":1}')).toEqual({ a: 1 })
    expect(transformation('[1,2,3]')).toEqual([1, 2, 3])
  })

  it('it should transform to a window function if isFunction is true', () => {
    const mockFn = () => 'test'
    ;(window as any).testFn = mockFn as any
    expect(transformation('testFn', true)).toBe(mockFn)
    delete (window as any).testFn
  })

  it('should return the original value if no transformation matches', () => {
    expect(transformation('normal string')).toBe('normal string')
    expect(transformation(123)).toBe(123)
  })
})
