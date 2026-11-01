import { describe, it, expect } from 'vitest'
import { toBinds } from '../toBinds'

describe('toBinds', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return an empty object when called with no arguments', () => {
      expect(toBinds()).toEqual({})
    })

    it('should return the equivalent object when called with a single argument', () => {
      const item = { id: 'test', class: 'btn' }
      expect(toBinds(item)).toEqual(item)
    })

    it('should sequentially merge multiple objects, overwriting standard properties with later ones', () => {
      const first = { alpha: 1, beta: 2 }
      const second = { beta: 3, gamma: 4 }
      const third = { gamma: 5, delta: 6 }

      const result = toBinds(first, second, third)
      expect(result).toEqual({ alpha: 1, beta: 3, gamma: 5, delta: 6 })
    })

    it('should merge multiple objects while preserving unique properties from each', () => {
      const first = { propA: 'a' }
      const second = { propB: 'b' }
      const third = { propC: 'c' }

      expect(toBinds(first, second, third)).toEqual({
        propA: 'a',
        propB: 'b',
        propC: 'c'
      })
    })
  })

  describe('Class & Style accumulation', () => {
    it('should appropriately merge classes from multiple objects into nested arrays', () => {
      const first = { class: 'c1' }
      const second = { class: 'c2' }
      const third = { class: 'c3' }

      const result = toBinds(first, second, third)
      expect(result.class).toEqual([['c1', 'c2'], 'c3'])
    })

    it('should appropriately merge styles from multiple objects into nested arrays', () => {
      const first = { style: { color: 'red' } }
      const second = { style: { margin: 0 } }
      const third = { style: { padding: '10px' } }

      const result = toBinds(first, second, third)
      expect(result.style).toEqual([[{ color: 'red' }, { margin: 0 }], { padding: '10px' }])
    })

    it('should handle complex merging with mixed classes, styles, and other properties', () => {
      const first = { class: 'c1', disabled: false }
      const second = { style: { color: 'red' }, disabled: true }
      const third = { class: 'c3', id: 'my-id' }

      const result = toBinds(first, second, third)

      expect(result).toEqual({
        class: ['c1', 'c3'],
        style: { color: 'red' },
        disabled: true,
        id: 'my-id'
      })
    })

    it('should handle array classes and object classes correctly', () => {
      const first = { class: ['btn', 'btn--large'] }
      const second = { class: { 'is-active': true } }

      const result = toBinds(first, second)
      expect(result.class).toEqual([['btn', 'btn--large'], { 'is-active': true }])
    })
  })

  describe('Falsy, nullish and boundary inputs', () => {
    it('should ignore undefined and null values in the arguments list without casting', () => {
      const first = { id: 1 }
      const second = { id: 2, class: 'c' }

      const result = toBinds(first, undefined, null, second)

      expect(result).toEqual({
        id: 2,
        class: 'c'
      })
    })

    it('should return empty object when called only with null or undefined arguments', () => {
      expect(toBinds(undefined, null, undefined)).toEqual({})
    })

    it('should correctly handle and preserve boolean false, empty string and numeric 0 properties', () => {
      const first = { count: 0, active: false, label: '' }
      const second = { visible: false }

      const result = toBinds(first, second)

      expect(result).toEqual({
        count: 0,
        active: false,
        label: '',
        visible: false
      })
    })

    it('should handle merging empty objects', () => {
      expect(toBinds({}, {}, {})).toEqual({})
    })
  })

  describe('Immutability and side-effect freedom', () => {
    it('should never mutate any of the incoming input objects', () => {
      const sourceA = { id: 'a', class: 'btn' }
      const sourceB = { id: 'b', class: 'btn--primary' }

      toBinds(sourceA, sourceB)

      expect(sourceA).toEqual({ id: 'a', class: 'btn' })
      expect(sourceB).toEqual({ id: 'b', class: 'btn--primary' })
    })

    it('should produce identical results on repeated calls (idempotency)', () => {
      const sourceA = { a: 1, class: 'c1' }
      const sourceB = { b: 2, class: 'c2' }

      const firstCall = toBinds(sourceA, sourceB)
      const secondCall = toBinds(sourceA, sourceB)

      expect(firstCall).toEqual(secondCall)
    })
  })
})
