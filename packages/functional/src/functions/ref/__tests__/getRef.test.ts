import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { getRef } from '../getRef'

describe('getRef', () => {
  it('should return the static value if it is not a Ref', () => {
    expect(getRef('hello')).toBe('hello')
    expect(getRef(123)).toBe(123)
    const obj = { a: 1 }
    expect(getRef(obj)).toBe(obj)
  })

  it('should return the value of a Vue Ref', () => {
    const source = ref('reactive-val')
    expect(getRef(source)).toBe('reactive-val')
  })

  it('should return the function itself if passed a function (it does not unwrap getters)', () => {
    const getter = () => 'result'
    expect(getRef(getter)).toBe(getter)
  })

  it('should handle undefined and null', () => {
    expect(getRef(undefined)).toBeUndefined()
    expect(getRef(null)).toBeNull()
  })
})
