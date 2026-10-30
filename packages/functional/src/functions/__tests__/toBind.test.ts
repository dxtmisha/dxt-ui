import { describe, expect, it } from 'vitest'
import { toBind } from '../toBind'

describe('toBind', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should merge standard properties with value overwriting extra', () => {
      const extra = { 'id': 'extra-id', 'role': 'button', 'aria-label': 'extra-label' }
      const value = { id: 'value-id', tabindex: 0 }

      const result = toBind(extra, value)

      expect(result.id).toBe('value-id')
      expect(result.role).toBe('button')
      expect(result['aria-label']).toBe('extra-label')
      expect(result.tabindex).toBe(0)
    })

    it('should preserve properties present only in extra or only in value', () => {
      const extra = { title: 'Tooltip', disabled: false }
      const value = { autofocus: true }

      const result = toBind(extra, value)

      expect(result.title).toBe('Tooltip')
      expect(result.disabled).toBe(false)
      expect(result.autofocus).toBe(true)
    })
  })

  describe('Class handling', () => {
    it('should preserve class when only extra has a class', () => {
      expect(toBind({ class: 'c1' }, { id: 'v' })).toEqual({
        class: 'c1',
        id: 'v'
      })
    })

    it('should preserve class when only value has a class', () => {
      expect(toBind({ id: 'e' }, { class: 'c2' })).toEqual({
        id: 'e',
        class: 'c2'
      })
    })

    it('should combine classes into an array if both objects have a class', () => {
      const extra = { class: 'class-extra', id: 1 }
      const value = { class: 'class-value', id: 2 }

      const result = toBind(extra, value)

      expect(result.class).toEqual(['class-extra', 'class-value'])
      expect(result.id).toBe(2)
    })

    it('should handle complex class types (arrays, objects)', () => {
      const extra = { class: ['c1', 'c2'] }
      const value = { class: { 'is-active': true } }

      const result = toBind(extra, value)

      expect(result.class).toEqual([
        ['c1', 'c2'],
        { 'is-active': true }
      ])
    })
  })

  describe('Style handling', () => {
    it('should preserve style when only extra has a style', () => {
      expect(toBind({ style: { color: 'red' } }, { id: 'v' })).toEqual({
        style: { color: 'red' },
        id: 'v'
      })
    })

    it('should preserve style when only value has a style', () => {
      expect(toBind({ id: 'e' }, { style: { display: 'none' } })).toEqual({
        id: 'e',
        style: { display: 'none' }
      })
    })

    it('should combine styles into an array if both objects have a style', () => {
      const extra = { style: { color: 'red' }, name: 'e' }
      const value = { style: { display: 'none' }, name: 'v' }

      const result = toBind(extra, value)

      expect(result.style).toEqual([{ color: 'red' }, { display: 'none' }])
      expect(result.name).toBe('v')
    })
  })

  describe('Falsy, nullish and boundary inputs', () => {
    it('should return shallow copy of value when extra is undefined', () => {
      const value = { id: 'v', class: 'btn' }
      const result = toBind(undefined, value)

      expect(result).toEqual({ id: 'v', class: 'btn' })
      expect(result).not.toBe(value)
    })

    it('should return shallow copy of extra when value is undefined', () => {
      const extra = { id: 'e', style: { margin: 0 } }
      const result = toBind(extra, undefined)

      expect(result).toEqual({ id: 'e', style: { margin: 0 } })
      expect(result).not.toBe(extra)
    })

    it('should handle both extra and value being undefined', () => {
      const result = toBind(undefined, undefined)
      expect(result).toEqual({})
    })

    it('should preserve boolean false and number 0 without treating them as empty', () => {
      const extra = { count: 0, active: false }
      const value = { limit: 0, hidden: false }

      const result = toBind(extra, value)

      expect(result.count).toBe(0)
      expect(result.active).toBe(false)
      expect(result.limit).toBe(0)
      expect(result.hidden).toBe(false)
    })
  })

  describe('Immutability and side-effect freedom', () => {
    it('should never mutate the incoming extra or value objects', () => {
      const extra = { class: 'c1', style: { color: 'blue' } }
      const value = { class: 'c2', style: { color: 'green' } }

      toBind(extra, value)

      expect(extra).toEqual({ class: 'c1', style: { color: 'blue' } })
      expect(value).toEqual({ class: 'c2', style: { color: 'green' } })
    })

    it('should produce identical results on repeated calls (idempotency)', () => {
      const extra = { id: 1, class: 'a' }
      const value = { id: 2, class: 'b' }

      const result1 = toBind(extra, value)
      const result2 = toBind(extra, value)

      expect(result1).toEqual(result2)
    })
  })
})
