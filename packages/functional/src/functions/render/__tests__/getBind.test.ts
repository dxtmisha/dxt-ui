import { describe, expect, it } from 'vitest'
import { getBind } from '../getBind'

describe('getBind', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return empty object when value and extra are undefined', () => {
      expect(getBind(undefined)).toEqual({})
      expect(getBind(null)).toEqual({})
    })

    it('should return extra properties when value is undefined', () => {
      const extra = { id: 'test', role: 'button' }
      expect(getBind(undefined, extra)).toEqual(extra)
    })

    it('should wrap primitive string in default "value" property', () => {
      expect(getBind('hello')).toEqual({ value: 'hello' })
    })

    it('should wrap primitive number in default "value" property', () => {
      expect(getBind(123)).toEqual({ value: 123 })
    })

    it('should wrap primitive boolean in default "value" property', () => {
      expect(getBind(true)).toEqual({ value: true })
    })

    it('should wrap primitive values in a custom named property when nameExtra is string', () => {
      expect(getBind(123, 'custom')).toEqual({ custom: 123 })
      expect(getBind('search', 'icon')).toEqual({ icon: 'search' })
    })

    it('should use explicit name parameter when nameExtra is an object', () => {
      expect(getBind('save', { class: 'btn' }, 'label')).toEqual({
        class: 'btn',
        label: 'save'
      })
    })
  })

  describe('Object value handling and key detection', () => {
    it('should merge object value with extra properties if it contains the primary key', () => {
      const value = { value: 'actual-value', other: 1 }
      const extra = { extraProp: 2 }
      expect(getBind(value, extra)).toEqual({ value: 'actual-value', other: 1, extraProp: 2 })
    })

    it('should wrap object value in property if it does not contain the key and except is false', () => {
      const value = { someData: 1 }
      expect(getBind(value)).toEqual({ value: { someData: 1 } })
    })

    it('should merge object value even if key is missing when except is true', () => {
      const value = { someData: 1, action: 'submit' }
      expect(getBind(value, {}, 'value', true)).toEqual({ someData: 1, action: 'submit' })
    })

    it('should merge object value with extra when except is true and custom nameExtra is provided', () => {
      const value = { theme: 'dark' }
      const extra = { class: 'card' }
      expect(getBind(value, extra, 'config', true)).toEqual({ class: 'card', theme: 'dark' })
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

  describe('Boundary values and falsy handling', () => {
    it('should wrap empty object value in default property when except is false', () => {
      expect(getBind({})).toEqual({ value: {} })
    })

    it('should return empty object when value is empty object and except is true', () => {
      expect(getBind({}, {}, 'value', true)).toEqual({})
    })

    it('should return shallow copy of extra when value is null', () => {
      const extra = { id: 'btn' }
      const result = getBind(null, extra)
      expect(result).toEqual({ id: 'btn' })
      expect(result).not.toBe(extra)
    })

    it('should return empty object when both arguments are undefined or empty', () => {
      expect(getBind(undefined, undefined)).toEqual({})
      expect(getBind(undefined, {})).toEqual({})
    })

    it('should correctly handle numeric 0 without discarding it', () => {
      expect(getBind(0)).toEqual({ value: 0 })
      expect(getBind(0, 'count')).toEqual({ count: 0 })
    })

    it('should correctly handle boolean false when explicitly provided', () => {
      expect(getBind(false)).toEqual({ value: false })
      expect(getBind(false, 'checked')).toEqual({ checked: false })
    })

    it('should correctly handle empty string when explicitly provided', () => {
      expect(getBind('')).toEqual({ value: '' })
      expect(getBind('', 'text')).toEqual({ text: '' })
    })

    it('should not treat prototype methods as own keys on objects', () => {
      const objectWithoutKey = { custom: 42 }
      expect(getBind(objectWithoutKey, {}, 'toString', false)).toEqual({
        toString: { custom: 42 }
      })
    })

    it('should handle nameExtra passed explicitly as undefined', () => {
      expect(getBind('test', undefined, 'custom')).toEqual({ custom: 'test' })
    })
  })

  describe('Immutability and idempotency', () => {
    it('should never mutate the incoming extra object', () => {
      const extra = { class: 'base', disabled: false }
      const value = { class: 'override', value: 10 }

      getBind(value, extra)

      expect(extra).toEqual({ class: 'base', disabled: false })
    })

    it('should produce identical results on repeated invocations', () => {
      const extra = { class: 'btn' }
      const value = 'click me'

      const result1 = getBind(value, extra, 'label')
      const result2 = getBind(value, extra, 'label')

      expect(result1).toEqual(result2)
    })
  })
})
