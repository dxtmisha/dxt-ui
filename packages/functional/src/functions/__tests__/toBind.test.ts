import { describe, it, expect } from 'vitest'
import { toBind } from '../toBind'

describe('toBind', () => {
  it('should merge standard properties with value overwriting extra', () => {
    const extra = { 'id': 'extra-id', 'role': 'button', 'aria-label': 'extra-label' }
    const value = { id: 'value-id', tabindex: 0 }

    const result = toBind(extra, value)

    // Properties from `value` overwrite those in `extra`
    expect(result.id).toBe('value-id')
    expect(result.role).toBe('button')
    expect(result['aria-label']).toBe('extra-label')
    expect(result.tabindex).toBe(0)
  })

  it('should handle class merging when only one object has a class', () => {
    // Only extra has class
    expect(toBind({ class: 'c1' }, { id: 'v' })).toEqual({
      class: 'c1',
      id: 'v'
    })

    // Only value has class
    expect(toBind({ id: 'e' }, { class: 'c2' })).toEqual({
      id: 'e',
      class: 'c2'
    })
  })

  it('should combine classes into an array if both objects have a class', () => {
    const extra = { class: 'class-extra', id: 1 }
    const value = { class: 'class-value', id: 2 }

    const result = toBind(extra, value)

    // Both classes should be preserved in an array
    expect(result.class).toEqual(['class-extra', 'class-value'])
    // Standard property is still overwritten
    expect(result.id).toBe(2)
  })

  it('should combine styles into an array if both objects have a style', () => {
    const extra = { style: { color: 'red' }, name: 'e' }
    const value = { style: { display: 'none' }, name: 'v' }

    const result = toBind(extra, value)

    // Both styles should be preserved in an array
    expect(result.style).toEqual([{ color: 'red' }, { display: 'none' }])
    expect(result.name).toBe('v')
  })

  it('should handle complex merging with classes, styles, and standard properties', () => {
    const extra = {
      class: ['extra-c1', 'extra-c2'],
      style: { margin: 0 },
      disabled: false,
      type: 'button'
    }
    const value = {
      class: { 'value-c': true },
      style: [{ padding: '10px' }],
      disabled: true,
      id: 'btn'
    }

    const result = toBind(extra, value)

    // Arrays for class and style since they exist in both
    expect(result.class).toEqual([
      ['extra-c1', 'extra-c2'],
      { 'value-c': true }
    ])

    expect(result.style).toEqual([
      { margin: 0 },
      [{ padding: '10px' }]
    ])

    // Overwritten props
    expect(result.disabled).toBe(true)
    expect(result.type).toBe('button')
    expect(result.id).toBe('btn')
  })

  it('should handle undefined extra or value gracefully (though types suggest they should be defined, they can be nullish at runtime)', () => {
    // If extra is nullish, standard JS spreading will just use value
    // The implementation relies on optional chaining `extra?.class`
    const value = { id: 'v' }
    const result1 = toBind(undefined as any, value)
    // `...extra` where extra is undefined does nothing, so it just returns value
    expect(result1).toEqual({ id: 'v' })

    const extra = { id: 'e' }
    const result2 = toBind(extra, undefined as any)
    expect(result2).toEqual({ id: 'e' })
  })
})
