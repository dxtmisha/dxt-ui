// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import type { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import type { SliderValueType } from '../../Slider'
import { SliderFieldValue } from '../SliderFieldValue'
import type { SliderFieldProps } from '../props'

describe('SliderFieldValue', () => {
  const createValueInclude = (
    initialValue: SliderValueType | undefined,
    setSpy = vi.fn()
  ): FieldValueInclude<SliderValueType> => ({
    item: ref(initialValue),
    set: setSpy
  }) as unknown as FieldValueInclude<SliderValueType>

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should calculate min and max for single value mode correctly', () => {
      const props: Readonly<SliderFieldProps> = { min: 10, max: 200, multiple: false }
      const valueInclude = createValueInclude(50)
      const sliderFieldValue = new SliderFieldValue(props, () => valueInclude)

      expect(sliderFieldValue.min).toBe(10)
      expect(sliderFieldValue.max).toBe(50)
    })

    it('should calculate min and max for multiple array value mode correctly', () => {
      const props: Readonly<SliderFieldProps> = { min: 0, max: 100, multiple: true }
      const valueInclude = createValueInclude([20, 80])
      const sliderFieldValue = new SliderFieldValue(props, () => valueInclude)

      expect(sliderFieldValue.min).toBe(20)
      expect(sliderFieldValue.max).toBe(80)
    })

    it('should delegate set() calls lazily to the underlying FieldValueInclude', () => {
      const props: Readonly<SliderFieldProps> = { min: 0, max: 100 }
      const setSpy = vi.fn()
      const valueInclude = createValueInclude(10, setSpy)
      const getterSpy = vi.fn(() => valueInclude)

      const sliderFieldValue = new SliderFieldValue(props, getterSpy)
      expect(getterSpy).not.toHaveBeenCalled()

      sliderFieldValue.set(75)
      expect(getterSpy).toHaveBeenCalledTimes(1)
      expect(setSpy).toHaveBeenCalledWith(75)

      sliderFieldValue.set([15, 85])
      expect(setSpy).toHaveBeenCalledWith([15, 85])
    })
  })

  describe('Boundary values, zero/falsy traps, and limit thresholds', () => {
    it('should preserve numeric 0 in single mode even when props.min is negative or positive', () => {
      const negativeProps: Readonly<SliderFieldProps> = { min: -50, max: 50, multiple: false }
      const positiveProps: Readonly<SliderFieldProps> = { min: 10, max: 100, multiple: false }
      const zeroValue = createValueInclude(0)

      const negativeSliderValue = new SliderFieldValue(negativeProps, () => zeroValue)
      const positiveSliderValue = new SliderFieldValue(positiveProps, () => zeroValue)

      expect(negativeSliderValue.min).toBe(-50)
      expect(negativeSliderValue.max).toBe(0)
      expect(positiveSliderValue.min).toBe(10)
      expect(positiveSliderValue.max).toBe(0)
    })

    it('should preserve numeric 0 in multiple range mode [0, 0] and [-10, 0]', () => {
      const props: Readonly<SliderFieldProps> = { min: -50, max: 50, multiple: true }
      const bothZero = createValueInclude([0, 0])
      const negToZero = createValueInclude([-10, 0])

      expect(new SliderFieldValue(props, () => bothZero).min).toBe(0)
      expect(new SliderFieldValue(props, () => bothZero).max).toBe(0)
      expect(new SliderFieldValue(props, () => negToZero).min).toBe(-10)
      expect(new SliderFieldValue(props, () => negToZero).max).toBe(0)
    })

    it('should parse string min/max props and negative numbers accurately', () => {
      const props: Readonly<SliderFieldProps> = { min: '-25', max: '75', multiple: false }
      const valueInclude = createValueInclude(-12.5)
      const sliderFieldValue = new SliderFieldValue(props, () => valueInclude)

      expect(sliderFieldValue.min).toBe(-25)
      expect(sliderFieldValue.max).toBe(-12.5)
    })
  })

  describe('Empty, nullish, and partial array inputs', () => {
    it('should fallback to props.min for both min and max when item value is undefined in single mode', () => {
      const props: Readonly<SliderFieldProps> = { min: 5, max: 95, multiple: false }
      const valueInclude = createValueInclude(undefined)
      const sliderFieldValue = new SliderFieldValue(props, () => valueInclude)

      expect(sliderFieldValue.min).toBe(5)
      expect(sliderFieldValue.max).toBe(5)
    })

    it('should fallback to props.min and props.max when item value is undefined in multiple mode', () => {
      const props: Readonly<SliderFieldProps> = { min: 5, max: 95, multiple: true }
      const valueInclude = createValueInclude(undefined)
      const sliderFieldValue = new SliderFieldValue(props, () => valueInclude)

      expect(sliderFieldValue.min).toBe(5)
      expect(sliderFieldValue.max).toBe(95)
    })

    it('should fallback to 0 and 100 defaults when props.min, props.max, and value are omitted', () => {
      const singleProps: Readonly<SliderFieldProps> = {}
      const multipleProps: Readonly<SliderFieldProps> = { multiple: true }
      const valueInclude = createValueInclude(undefined)

      expect(new SliderFieldValue(singleProps, () => valueInclude).min).toBe(0)
      expect(new SliderFieldValue(singleProps, () => valueInclude).max).toBe(0)
      expect(new SliderFieldValue(multipleProps, () => valueInclude).min).toBe(0)
      expect(new SliderFieldValue(multipleProps, () => valueInclude).max).toBe(100)
    })

    it('should fallback safely for empty string or partial/empty arrays', () => {
      const props: Readonly<SliderFieldProps> = { min: 10, max: 90, multiple: true }
      const emptyArray = createValueInclude([] as unknown as SliderValueType)
      const singleElementArray = createValueInclude([35] as unknown as SliderValueType)
      const emptyString = createValueInclude('' as unknown as SliderValueType)

      expect(new SliderFieldValue(props, () => emptyArray).min).toBe(10)
      expect(new SliderFieldValue(props, () => emptyArray).max).toBe(90)

      expect(new SliderFieldValue(props, () => singleElementArray).min).toBe(35)
      expect(new SliderFieldValue(props, () => singleElementArray).max).toBe(35)

      expect(new SliderFieldValue(props, () => emptyString).max).toBe(90)
    })
  })
})
