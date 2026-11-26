// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { MotionAxisSelected } from '../MotionAxisSelected'

describe('MotionAxisSelected', () => {
  it('should initialize with selected prop and evaluate is() accurately', () => {
    const selected = new MotionAxisSelected({ selected: 'slide-1' })

    expect(selected.item.value).toBe('slide-1')
    expect(selected.is('slide-1')).toBe(true)
    expect(selected.is('slide-2')).toBe(false)
    expect(selected.is(undefined)).toBe(false)
  })

  it('should handle undefined and empty string selected values', () => {
    const emptySelected = new MotionAxisSelected({})
    expect(emptySelected.item.value).toBeUndefined()
    expect(emptySelected.is(undefined)).toBe(true)
    expect(emptySelected.is('slide-1')).toBe(false)

    const zeroStringSelected = new MotionAxisSelected({ selected: '' })
    expect(zeroStringSelected.is('')).toBe(true)
    expect(zeroStringSelected.is(undefined)).toBe(false)
  })

  it('should update item value and return this for method chaining on set()', () => {
    const selected = new MotionAxisSelected({ selected: 'slide-1' })
    const result = selected.set('slide-2')

    expect(result).toBe(selected)
    expect(selected.item.value).toBe('slide-2')
    expect(selected.is('slide-2')).toBe(true)

    selected.set(undefined)
    expect(selected.item.value).toBeUndefined()
    expect(selected.is(undefined)).toBe(true)
  })
})
