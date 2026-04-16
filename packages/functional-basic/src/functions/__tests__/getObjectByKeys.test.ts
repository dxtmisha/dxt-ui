import { describe, it, expect } from 'vitest'
import { getObjectByKeys } from '../getObjectByKeys'

describe('getObjectByKeys', () => {
  it('should return a new object with only the specified keys', () => {
    const data = { a: 1, b: 2, c: 3 }
    expect(getObjectByKeys(data, ['a', 'c'])).toEqual({ a: 1, c: 3 })
  })

  it('should ignore keys that do not exist in the source object', () => {
    const data = { x: 10, y: 20 }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(getObjectByKeys(data, ['x', 'z'])).toEqual({ x: 10 })
  })

  it('should ignore keys whose values are explicitly undefined in the source object', () => {
    const data = { name: 'Alice', age: undefined, role: 'Admin' }
    expect(getObjectByKeys(data, ['name', 'age', 'role'])).toEqual({ name: 'Alice', role: 'Admin' })
  })

  it('should include keys whose values are null or falsy (except undefined)', () => {
    const data = { a: null, b: 0, c: false, d: '' }
    expect(getObjectByKeys(data, ['a', 'b', 'c', 'd'])).toEqual({ a: null, b: 0, c: false, d: '' })
  })

  it('should return an empty object if no matching keys are found', () => {
    const data = { a: 1, b: 2 }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(getObjectByKeys(data, ['c', 'd'])).toEqual({})
  })

  it('should return an empty object if an empty array of keys is provided', () => {
    const data = { a: 1, b: 2 }
    expect(getObjectByKeys(data, [])).toEqual({})
  })
})
