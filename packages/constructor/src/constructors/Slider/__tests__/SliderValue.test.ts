// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import { SliderFocusType, type SliderValueType } from '../basicTypes'
import { SliderFocus } from '../SliderFocus'
import { SliderMarks } from '../SliderMarks'
import { SliderMarksData } from '../SliderMarksData'
import { SliderValue } from '../SliderValue'
import type { SliderProps } from '../props'

function createSliderValue(
  initialValue: SliderValueType | string | [string, string] | undefined,
  props: Partial<SliderProps> = {}
) {
  const fullProps = {
    min: 0,
    max: 100,
    step: 1,
    ...props
  } as SliderProps

  const naming = new DesignName('dxt.slider')
  const focus = new SliderFocus()
  const marksData = new SliderMarksData(fullProps, naming)
  const marks = new SliderMarks(fullProps, () => marksData)
  const model = new ModelValueInclude<SliderValueType>(
    'modelValue',
    undefined,
    undefined,
    ref(initialValue as SliderValueType | undefined)
  )
  const sliderValue = new SliderValue(fullProps, () => focus, () => marks, () => marksData, () => model)

  return { sliderValue, focus, model, marks }
}

describe('SliderValue', () => {
  it('should return correct min and max for single value mode', () => {
    const { sliderValue } = createSliderValue(40, { multiple: false })

    expect(sliderValue.get()).toBe(40)
    expect(sliderValue.min).toBe(0)
    expect(sliderValue.max).toBe(40)
  })

  it('should preserve numeric 0 as a valid value even when min is negative', () => {
    const { sliderValue } = createSliderValue(0, { min: -100, max: 100, multiple: false })

    expect(sliderValue.min).toBe(-100)
    expect(sliderValue.max).toBe(0)

    const stringZero = createSliderValue('0', { min: -50, max: 50, multiple: false }).sliderValue
    expect(stringZero.max).toBe(0)
  })

  it('should coerce string numeric values in single and multiple modes', () => {
    const single = createSliderValue('42', { multiple: false }).sliderValue
    expect(single.max).toBe(42)

    const range = createSliderValue(['15', '85'], { multiple: true }).sliderValue
    expect(range.min).toBe(15)
    expect(range.max).toBe(85)
  })

  it('should return default min and max when initial value is undefined', () => {
    const single = createSliderValue(undefined, { min: 10, max: 90, multiple: false }).sliderValue
    expect(single.min).toBe(10)
    expect(single.max).toBe(10)

    const multiple = createSliderValue(undefined, { min: 10, max: 90, multiple: true }).sliderValue
    expect(multiple.min).toBe(10)
    expect(multiple.max).toBe(90)
  })

  it('should set single number value and ignore non-finite values', () => {
    const { sliderValue, focus, model } = createSliderValue(10, { multiple: false })

    sliderValue.set(60)
    expect(focus.get()).toBe(SliderFocusType.max)
    expect(model.get()).toBe(60)

    sliderValue.set(Number.NaN)
    expect(model.get()).toBe(60)
  })

  it('should set full range array in multiple mode even when new min exceeds previous max', () => {
    const { sliderValue, focus, model } = createSliderValue([10, 20], {
      multiple: true,
      minimumDistance: 5
    })

    sliderValue.set([50, 80], SliderFocusType.min)

    expect(focus.get()).toBe(SliderFocusType.min)
    expect(model.get()).toEqual([50, 80])

    // Inverted range pair must be clamped cleanly respecting minimumDistance
    sliderValue.set([80, 50], SliderFocusType.max)
    expect(model.get()).toEqual([45, 50])
  })

  it('should update individual min or max thumb in multiple mode when setting a single number', () => {
    const { sliderValue, model } = createSliderValue([20, 80], { multiple: true })

    sliderValue.set(30, SliderFocusType.min)
    expect(model.get()).toEqual([30, 80])

    sliderValue.set(90, SliderFocusType.max)
    expect(model.get()).toEqual([30, 90])
  })
})
