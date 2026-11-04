// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { computed } from 'vue'
import { FieldChangeInclude } from '../FieldChangeInclude'

describe('FieldChangeInclude', () => {
  it('should initialize item.value as true if value or modelValue is provided', () => {
    const changeWithValue = new FieldChangeInclude({ value: 'hello' })
    expect(changeWithValue.is()).toBe(true)

    const changeWithModel = new FieldChangeInclude({ modelValue: 'world' })
    expect(changeWithModel.is()).toBe(true)

    const changeEmpty = new FieldChangeInclude({})
    expect(changeEmpty.is()).toBe(false)
  })

  it('should allow setting value manually via set()', () => {
    const change = new FieldChangeInclude({})
    expect(change.is()).toBe(false)

    change.set(true)
    expect(change.is()).toBe(true)

    change.set(false)
    expect(change.is()).toBe(false)
  })

  it('should force mark as changed via to() and remain idempotent when already true', () => {
    const change = new FieldChangeInclude({})
    const isChanged = computed(() => change.is())

    expect(isChanged.value).toBe(false)

    change.to()
    expect(isChanged.value).toBe(true)

    change.to()
    expect(isChanged.value).toBe(true)
  })
})
