// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { CheckboxIcon } from '../CheckboxIcon'
import type { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import type { CheckboxProps } from '../props'

describe('CheckboxIcon', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return empty object when value.boolean is false', () => {
    const props: Readonly<CheckboxProps> = {
      iconCheckbox: 'check-icon',
      iconIndeterminate: 'indeterminate-icon'
    }
    const mockValue = {
      boolean: false
    } as unknown as FieldValueInclude<boolean>

    const checkboxIcon = new CheckboxIcon(props, () => mockValue)
    expect(checkboxIcon.item).toEqual({})
  })

  it('should return empty object when loading is true even if value.boolean is true', () => {
    const props: Readonly<CheckboxProps> = {
      loading: true,
      iconCheckbox: 'check-icon',
      iconIndeterminate: 'indeterminate-icon'
    }
    const mockValue = {
      boolean: true
    } as unknown as FieldValueInclude<boolean>

    const checkboxIcon = new CheckboxIcon(props, () => mockValue)
    expect(checkboxIcon.item).toEqual({})
  })

  it('should return iconCheckbox when checked and not loading or indeterminate', () => {
    const props: Readonly<CheckboxProps> = {
      loading: false,
      indeterminate: false,
      iconCheckbox: 'check-icon',
      iconIndeterminate: 'indeterminate-icon'
    }
    const mockValue = {
      boolean: true
    } as unknown as FieldValueInclude<boolean>

    const checkboxIcon = new CheckboxIcon(props, () => mockValue)
    expect(checkboxIcon.item).toEqual({ value: 'check-icon' })
  })

  it('should return iconIndeterminate when checked, not loading, and indeterminate is true', () => {
    const props: Readonly<CheckboxProps> = {
      loading: false,
      indeterminate: true,
      iconCheckbox: 'check-icon',
      iconIndeterminate: 'indeterminate-icon'
    }
    const mockValue = {
      boolean: true
    } as unknown as FieldValueInclude<boolean>

    const checkboxIcon = new CheckboxIcon(props, () => mockValue)
    expect(checkboxIcon.item).toEqual({ value: 'indeterminate-icon' })
  })

  it('should react to lazy value getter updates and object icon definitions', () => {
    const props: Readonly<CheckboxProps> = {
      iconCheckbox: { value: 'custom-check', active: true }
    }
    const state = { boolean: false }
    const mockValue = state as unknown as FieldValueInclude<boolean>

    const checkboxIcon = new CheckboxIcon(props, () => mockValue)
    expect(checkboxIcon.item).toEqual({})

    state.boolean = true
    expect(checkboxIcon.item).toEqual({ value: 'custom-check', active: true })
  })

  it('should return empty object when iconCheckbox is null or undefined', () => {
    const props: Readonly<CheckboxProps> = {
      iconCheckbox: null
    }
    const mockValue = {
      boolean: true
    } as unknown as FieldValueInclude<boolean>

    const checkboxIcon = new CheckboxIcon(props, () => mockValue)
    expect(checkboxIcon.item).toEqual({})
  })
})
