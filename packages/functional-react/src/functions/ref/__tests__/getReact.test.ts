import { describe, it, expect } from 'vitest'
import type { RefObject } from 'react'
import { getReact } from '../getReact'

describe('getReact', () => {
  it('should return the static value if it is not a Ref', () => {
    expect(getReact('hello')).toBe('hello')
    expect(getReact(123)).toBe(123)
    const obj = { a: 1 }
    expect(getReact(obj)).toBe(obj)
  })

  it('should return the value of a React RefObject', () => {
    const source: RefObject<string> = { current: 'reactive-val' }
    expect(getReact(source)).toBe('reactive-val')
  })

  it('should return the function itself if passed a function', () => {
    const getter = () => 'result'
    expect(getReact(getter)).toBe(getter)
  })

  it('should handle undefined and null', () => {
    expect(getReact(undefined)).toBeUndefined()
    expect(getReact(null)).toBeNull()
  })
})
