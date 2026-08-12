// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import type { SliderValueType } from '../../Slider'
import { SliderFieldLabel } from '../SliderFieldLabel'
import { SliderFieldValue } from '../SliderFieldValue'
import type { SliderFieldProps } from '../props'

describe('SliderFieldLabel', () => {
  it('should format min, max, and text labels for single value mode', () => {
    const props = { min: 10, max: 200, multiple: false } as SliderFieldProps
    const valueInclude = {
      item: ref<SliderValueType>(50)
    } as FieldValueInclude<SliderValueType>

    const valueItem = new SliderFieldValue(props, valueInclude)
    const labelItem = new SliderFieldLabel(props, valueItem)

    expect(labelItem.min).toBe('10')
    expect(labelItem.max).toBe('50')
    expect(labelItem.label).toBe('50')
  })

  it('should format min, max, and text labels for multiple range mode', () => {
    const props = { min: 0, max: 100, multiple: true } as SliderFieldProps
    const valueInclude = {
      item: ref<SliderValueType>([20, 80])
    } as FieldValueInclude<SliderValueType>

    const valueItem = new SliderFieldValue(props, valueInclude)
    const labelItem = new SliderFieldLabel(props, valueItem)

    expect(labelItem.min).toBe('20')
    expect(labelItem.max).toBe('80')
    expect(labelItem.label).toBe('20 - 80')
  })
})
