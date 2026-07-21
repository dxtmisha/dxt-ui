// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { CheckboxIcon } from '../CheckboxIcon'
import { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import type { CheckboxProps } from '../props'

describe('CheckboxIcon', () => {
  it('should return undefined if value.boolean is false', () => {
    const props: CheckboxProps = {
      iconCheckbox: 'check-icon',
      iconIndeterminate: 'indeterminate-icon'
    }
    const mockValue = {
      boolean: false
    } as unknown as FieldValueInclude<boolean>

    const checkboxIcon = new CheckboxIcon(props, mockValue)
    expect(checkboxIcon.item).toEqual({})
  })

  it('should return undefined if loading is true', () => {
    const props: CheckboxProps = {
      loading: true,
      iconCheckbox: 'check-icon',
      iconIndeterminate: 'indeterminate-icon'
    }
    const mockValue = {
      boolean: true
    } as unknown as FieldValueInclude<boolean>

    const checkboxIcon = new CheckboxIcon(props, mockValue)
    expect(checkboxIcon.item).toEqual({})
  })

  it('should return iconCheckbox if value.boolean is true, loading is false, and indeterminate is false', () => {
    const props: CheckboxProps = {
      loading: false,
      indeterminate: false,
      iconCheckbox: 'check-icon',
      iconIndeterminate: 'indeterminate-icon'
    }
    const mockValue = {
      boolean: true
    } as unknown as FieldValueInclude<boolean>

    const checkboxIcon = new CheckboxIcon(props, mockValue)
    expect(checkboxIcon.item).toEqual({ value: 'check-icon' })
  })

  it('should return iconIndeterminate if value.boolean is true, loading is false, and indeterminate is true', () => {
    const props: CheckboxProps = {
      loading: false,
      indeterminate: true,
      iconCheckbox: 'check-icon',
      iconIndeterminate: 'indeterminate-icon'
    }
    const mockValue = {
      boolean: true
    } as unknown as FieldValueInclude<boolean>

    const checkboxIcon = new CheckboxIcon(props, mockValue)
    expect(checkboxIcon.item).toEqual({ value: 'indeterminate-icon' })
  })
})
