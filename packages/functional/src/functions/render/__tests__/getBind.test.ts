import { describe, it, expect } from 'vitest'
import { getBind } from '../getBind'

describe('getBind', () => {
  describe('Value handling', () => {
    it('should return empty object when value and extra are undefined', () => {
      expect(getBind(undefined)).toEqual({})
      expect(getBind(null)).toEqual({})
    })

    it('should return extra properties when value is undefined', () => {
      const extra = { id: 'test' }
      expect(getBind(undefined, extra)).toEqual(extra)
    })

    it('should wrap primitive values in a default "value" property', () => {
      expect(getBind(123)).toEqual({ value: 123 })
      expect(getBind('hello')).toEqual({ value: 'hello' })
      expect(getBind(true)).toEqual({ value: true })
    })

    it('should wrap primitive values in a custom named property', () => {
      expect(getBind(123, 'custom')).toEqual({ custom: 123 })
      expect(getBind('hello', 'msg')).toEqual({ msg: 'hello' })
    })
  })

  describe('Object handling and merging', () => {
    it('should merge object value with extra properties if it contains the key', () => {
      const value = { value: 'actual-value', other: 1 }
      const extra = { extraProp: 2 }
      expect(getBind(value, extra)).toEqual({ value: 'actual-value', other: 1, extraProp: 2 })
    })

    it('should wrap object value in property if it does not contain the key and except is false', () => {
      const value = { someData: 1 }
      expect(getBind(value)).toEqual({ value: { someData: 1 } })
    })

    it('should merge object value even if key is missing if except is true', () => {
      const value = { someData: 1 }
      expect(getBind(value, {}, 'value', true)).toEqual({ someData: 1 })
    })
  })

  describe('Class and Style merging (via toBind)', () => {
    it('should combine classes into an array when present in both extra and value', () => {
      const value = { class: 'class-v', value: 1 }
      const extra = { class: 'class-e' }
      const result = getBind(value, extra)
      expect(result.class).toEqual(['class-e', 'class-v'])
    })

    it('should combine styles into an array when present in both extra and value', () => {
      const value = { style: { color: 'red' }, value: 1 }
      const extra = { style: { margin: '10px' } }
      const result = getBind(value, extra)
      expect(result.style).toEqual([{ margin: '10px' }, { color: 'red' }])
    })

    it('should prefer value properties over extra properties for normal props', () => {
      const value = { prop1: 'v', value: 1 }
      const extra = { prop1: 'e' }
      expect(getBind(value, extra).prop1).toBe('v')
    })
  })
})
