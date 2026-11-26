// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { SliderMarksData } from '../SliderMarksData'
import type { SliderPropsBasic } from '../props'

function createSliderMarksData(
  props: Partial<SliderPropsBasic> = {},
  naming: DesignName = new DesignName('dxt.slider')
) {
  return new SliderMarksData({ ...props } as SliderPropsBasic, naming)
}

describe('SliderMarksData', () => {
  it('should return correct numeric range properties with default and custom values', () => {
    const defaultData = createSliderMarksData()
    expect(defaultData.minNumber).toBe(0)
    expect(defaultData.maxNumber).toBe(100)
    expect(defaultData.minimumDistanceNumber).toBe(1)
    expect(defaultData.stepNumber).toBe(1)

    const customData = createSliderMarksData({
      min: 10,
      max: 200,
      minimumDistance: 5,
      step: 10
    })
    expect(customData.minNumber).toBe(10)
    expect(customData.maxNumber).toBe(200)
    expect(customData.minimumDistanceNumber).toBe(5)
    expect(customData.stepNumber).toBe(10)
  })

  it('should handle invalid step and negative minimumDistance boundaries safely', () => {
    expect(createSliderMarksData({ step: 0 }).stepNumber).toBe(1)
    expect(createSliderMarksData({ step: -5 }).stepNumber).toBe(1)
    expect(createSliderMarksData({ minimumDistance: 0 }).minimumDistanceNumber).toBe(0)
    expect(createSliderMarksData({ minimumDistance: -10 }).minimumDistanceNumber).toBe(0)
  })

  it('should calculate percentage correctly and guard max <= min', () => {
    const marksData = createSliderMarksData({ min: 0, max: 100 })
    expect(marksData.toPercent(0)).toBe(0)
    expect(marksData.toPercent(50)).toBe(50)
    expect(marksData.toPercent(100)).toBe(100)
    expect(marksData.toPercent(-10)).toBe(0)
    expect(marksData.toPercent(150)).toBe(100)

    const equalBounds = createSliderMarksData({ min: 50, max: 50 })
    expect(equalBounds.toPercent(25)).toBe(0)
  })

  it('should convert percentage back to numeric value with step and decimal precision rounding', () => {
    const integerData = createSliderMarksData({ min: 0, max: 100, step: 10 })
    expect(integerData.toValue(0)).toBe(0)
    expect(integerData.toValue(24)).toBe(20)
    expect(integerData.toValue(26)).toBe(30)
    expect(integerData.toValue(100)).toBe(100)

    const decimalData = createSliderMarksData({ min: 0, max: 1, step: 0.1 })
    expect(decimalData.toValue(30)).toBe(0.3)
    expect(decimalData.roundValue(-0)).toBe(0)
  })

  it('should compute sorted normalized marks list without mutating caller input array', () => {
    const rawMarks = [100, 0, 50]
    const copy = [...rawMarks]
    const marksData = createSliderMarksData({ marks: rawMarks })

    expect(marksData.is()).toBe(true)
    const resultList = marksData.get()
    expect(resultList?.map(item => item.mark)).toEqual([0, 50, 100])
    expect(rawMarks).toEqual(copy)
    expect(resultList?.[1]).toEqual({
      mark: 50,
      value: 50,
      label: '50',
      style: { '--dxt-slider-sys-mark': '50%' }
    })
  })

  it('should compute normalized marks list from object props with custom keys', () => {
    const marksData = createSliderMarksData({
      marks: {
        high: { mark: 90, customValue: 'V2', customLabel: 'High' },
        low: { mark: 10, customValue: 'V1', customLabel: 'Low' }
      } as unknown as SliderPropsBasic['marks'],
      keyValue: 'customValue',
      keyLabel: 'customLabel'
    })

    expect(marksData.is()).toBe(true)

    const resultList = marksData.get()
    expect(resultList?.length).toBe(2)
    expect(resultList?.[0]).toEqual({
      mark: 10,
      value: 'V1',
      label: 'Low',
      style: { '--dxt-slider-sys-mark': '10%' }
    })
  })

  it('should return undefined when marks prop is absent or empty', () => {
    const absentData = createSliderMarksData()
    expect(absentData.is()).toBe(false)
    expect(absentData.get()).toBeUndefined()

    const emptyData = createSliderMarksData({ marks: [] })
    expect(emptyData.is()).toBe(false)
    expect(emptyData.get()).toBeUndefined()
  })
})
