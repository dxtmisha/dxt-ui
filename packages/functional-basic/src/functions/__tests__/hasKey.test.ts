import { describe, it, expect } from 'vitest'
import { hasKey } from '../hasKey'

describe('hasKey', () => {
  it('should return true for existing own properties in plain objects', () => {
    expect(hasKey({ name: 'Alice' }, 'name')).toBe(true)
    expect(hasKey({ count: 42 }, 'count')).toBe(true)
  })

  it('should return true for own properties with falsy values', () => {
    expect(hasKey({ a: 0 }, 'a')).toBe(true)
    expect(hasKey({ a: false }, 'a')).toBe(true)
    expect(hasKey({ a: '' }, 'a')).toBe(true)
    expect(hasKey({ a: null }, 'a')).toBe(true)
    expect(hasKey({ a: undefined }, 'a')).toBe(true)
    expect(hasKey({ a: NaN }, 'a')).toBe(true)
  })

  it('should return false for missing keys in objects', () => {
    expect(hasKey({ name: 'Alice' }, 'age')).toBe(false)
    expect(hasKey({}, 'missing')).toBe(false)
  })

  it('should return false for inherited Object.prototype properties', () => {
    expect(hasKey({}, 'toString')).toBe(false)
    expect(hasKey({}, 'valueOf')).toBe(false)
    expect(hasKey({}, 'constructor')).toBe(false)
    expect(hasKey({}, '__proto__')).toBe(false)
    expect(hasKey({}, 'hasOwnProperty')).toBe(false)
    expect(hasKey({}, 'isPrototypeOf')).toBe(false)
  })

  it('should return true if prototype property is explicitly overridden as an own property', () => {
    expect(hasKey({ toString: 'custom' }, 'toString')).toBe(true)
    expect(hasKey({ valueOf: 1 }, 'valueOf')).toBe(true)
    expect(hasKey({ constructor: 'overridden' }, 'constructor')).toBe(true)
  })

  it('should work correctly with Object.create(null) objects', () => {
    const dict = Object.create(null)
    dict.foo = 'bar'
    expect(hasKey(dict, 'foo')).toBe(true)
    expect(hasKey(dict, 'missing')).toBe(false)
    expect(hasKey(dict, 'toString')).toBe(false)
  })

  it('should support symbol keys', () => {
    const sym = Symbol('test')
    expect(hasKey({ [sym]: 'value' }, sym)).toBe(true)
    expect(hasKey({}, sym)).toBe(false)
  })

  it('should support numeric keys and array indices', () => {
    expect(hasKey({ 0: 'first', 1: 'second' }, 0)).toBe(true)
    expect(hasKey({ 0: 'first', 1: 'second' }, 2)).toBe(false)
    expect(hasKey(['a', 'b', 'c'], 0)).toBe(true)
    expect(hasKey(['a', 'b', 'c'], 1)).toBe(true)
    expect(hasKey(['a', 'b', 'c'], 10)).toBe(false)
  })

  it('should safely return false for null and undefined without throwing', () => {
    expect(hasKey(null, 'foo')).toBe(false)
    expect(hasKey(undefined, 'foo')).toBe(false)
  })

  it('should safely return false for primitive non-objects without throwing', () => {
    expect(hasKey(123, 'foo')).toBe(false)
    expect(hasKey(true, 'foo')).toBe(false)
    expect(hasKey(false, 'foo')).toBe(false)
    expect(hasKey(Symbol('sym'), 'foo')).toBe(false)
    expect(hasKey(BigInt(100), 'foo')).toBe(false)
  })

  it('should support functions with own properties', () => {
    const fn = () => {}
    fn.customProp = 'test'

    expect(hasKey(fn, 'customProp')).toBe(true)
    expect(hasKey(fn, 'missing')).toBe(false)
  })

  it('should narrow object type in TypeScript', () => {
    const data: unknown = { id: 123, title: 'Item' }

    if (hasKey(data, 'title')) {
      expect(typeof data.title).toBe('string')
      expect(data.title).toBe('Item')
    } else {
      expect.unreachable('Should have narrowed data to Record<"title", unknown>')
    }
  })
})
