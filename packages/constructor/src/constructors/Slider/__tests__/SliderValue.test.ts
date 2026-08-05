// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import { SliderFocusType, type SliderValueType } from '../basicTypes'
import { SliderFocus } from '../SliderFocus'
import { SliderMarks } from '../SliderMarks'
import { SliderMarksData } from '../SliderMarksData'
import { SliderValue } from '../SliderValue'
import type { SliderProps } from '../props'

function createSliderValue(
  initialValue: SliderValueType | undefined,
  props: Partial<SliderProps> = {}
) {
  const fullProps = {
    min: 0,
    max: 100,
    step: 1,
    ...props
  } as SliderProps

  const className = 'dxt-slider'
  const focus = new SliderFocus()
  const marksData = new SliderMarksData(fullProps, className)
  const marks = new SliderMarks(fullProps, className, marksData)
  const model = new ModelValueInclude<SliderValueType>('modelValue', undefined, undefined, ref(initialValue))
  const sliderValue = new SliderValue(focus, marks, model, fullProps)

  return { sliderValue, focus, model, marks }
}

describe('SliderValue', () => {
  it('should return correct min and max for single value mode', () => {
    const { sliderValue } = createSliderValue(40, { multiple: false })

    expect(sliderValue.get()).toBe(40)
    expect(sliderValue.min).toBe(0)
    expect(sliderValue.max).toBe(40)
  })

  it('should return default min and max when initial value is undefined in single mode', () => {
    const { sliderValue } = createSliderValue(undefined, { multiple: false })

    expect(sliderValue.min).toBe(0)
    expect(sliderValue.max).toBe(0)
  })

  it('should return correct min and max for multiple range mode', () => {
    const { sliderValue } = createSliderValue([20, 80], { multiple: true })

    expect(sliderValue.get()).toEqual([20, 80])
    expect(sliderValue.min).toBe(20)
    expect(sliderValue.max).toBe(80)
  })

  it('should set single number value and update focus', () => {
    const { sliderValue, focus, model } = createSliderValue(10, { multiple: false })

    sliderValue.set(60)

    expect(focus.get()).toBe(SliderFocusType.max)
    expect(model.getValue()).toBe(60)
  })

  it('should set range array value in multiple mode', () => {
    const { sliderValue, focus, model } = createSliderValue([10, 90], { multiple: true })

    sliderValue.set([30, 70], SliderFocusType.min)

    expect(focus.get()).toBe(SliderFocusType.min)
    expect(model.getValue()).toEqual([30, 70])
  })

  it('should update min thumb value in multiple mode when setting single number with min focus', () => {
    const { sliderValue, model } = createSliderValue([20, 80], { multiple: true })

    sliderValue.set(30, SliderFocusType.min)

    expect(model.getValue()).toEqual([30, 80])
  })

  it('should update max thumb value in multiple mode when setting single number with max focus', () => {
    const { sliderValue, model } = createSliderValue([20, 80], { multiple: true })

    sliderValue.set(90, SliderFocusType.max)

    expect(model.getValue()).toEqual([20, 90])
  })
})
