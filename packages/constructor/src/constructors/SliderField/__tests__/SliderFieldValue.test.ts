// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import type { SliderValueType } from '../../Slider'
import { SliderFieldValue } from '../SliderFieldValue'
import type { SliderFieldProps } from '../props'

describe('SliderFieldValue', () => {
  it('should calculate min and max for single value mode correctly', () => {
    const props = { min: 10, max: 200, multiple: false } as SliderFieldProps
    const valueRef = ref<SliderValueType>(50)
    const valueInclude = {
      item: valueRef
    } as FieldValueInclude<SliderValueType>

    const sliderFieldValue = new SliderFieldValue(props, valueInclude)

    expect(sliderFieldValue.min).toBe(10)
    expect(sliderFieldValue.max).toBe(50)
  })

  it('should calculate min and max for multiple array value mode correctly', () => {
    const props = { min: 0, max: 100, multiple: true } as SliderFieldProps
    const valueRef = ref<SliderValueType>([20, 80])
    const valueInclude = {
      item: valueRef
    } as FieldValueInclude<SliderValueType>

    const sliderFieldValue = new SliderFieldValue(props, valueInclude)

    expect(sliderFieldValue.min).toBe(20)
    expect(sliderFieldValue.max).toBe(80)
  })

  it('should fallback to props min and max if item value is undefined', () => {
    const props = { min: 5, max: 95, multiple: false } as SliderFieldProps
    const valueRef = ref<SliderValueType | undefined>(undefined)
    const valueInclude = {
      item: valueRef
    } as unknown as FieldValueInclude<SliderValueType>

    const sliderFieldValue = new SliderFieldValue(props, valueInclude)

    expect(sliderFieldValue.min).toBe(5)
    expect(sliderFieldValue.max).toBe(95)
  })
})
