// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { SliderMarksData } from '../SliderMarksData'
import type { SliderPropsBasic } from '../props'

function createSliderMarksData(props: Partial<SliderPropsBasic> = {}, className: string = 'dxt-slider') {
  const fullProps = {
    ...props
  } as SliderPropsBasic

  return new SliderMarksData(fullProps, className)
}

describe('SliderMarksData', () => {
  it('should return correct numeric range properties with default values', () => {
    const marksData = createSliderMarksData()

    expect(marksData.minNumber).toBe(0)
    expect(marksData.maxNumber).toBe(100)
    expect(marksData.minimumDistanceNumber).toBe(1)
    expect(marksData.stepNumber).toBe(1)
  })

  it('should return correct numeric range properties with custom props', () => {
    const marksData = createSliderMarksData({
      min: 10,
      max: 200,
      minimumDistance: 5,
      step: 10
    })

    expect(marksData.minNumber).toBe(10)
    expect(marksData.maxNumber).toBe(200)
    expect(marksData.minimumDistanceNumber).toBe(5)
    expect(marksData.stepNumber).toBe(10)
  })

  it('should fallback stepNumber to 1 when step prop is less than or equal to 0', () => {
    const marksDataZero = createSliderMarksData({ step: 0 })
    expect(marksDataZero.stepNumber).toBe(1)

    const marksDataNegative = createSliderMarksData({ step: -5 })
    expect(marksDataNegative.stepNumber).toBe(1)
  })

  it('should calculate percentage correctly from numeric value', () => {
    const marksData = createSliderMarksData({ min: 0, max: 100 })

    expect(marksData.toPercent(0)).toBe(0)
    expect(marksData.toPercent(50)).toBe(50)
    expect(marksData.toPercent(100)).toBe(100)
    expect(marksData.toPercent(-10)).toBe(0)
    expect(marksData.toPercent(150)).toBe(100)
  })

  it('should return 0 percent if max is less than or equal to min', () => {
    const invalidMarksData = createSliderMarksData({ min: 50, max: 50 })
    expect(invalidMarksData.toPercent(25)).toBe(0)
  })

  it('should convert percentage back to numeric value with step rounding', () => {
    const marksData = createSliderMarksData({ min: 0, max: 100, step: 10 })

    expect(marksData.toValue(0)).toBe(0)
    expect(marksData.toValue(24)).toBe(20)
    expect(marksData.toValue(26)).toBe(30)
    expect(marksData.toValue(100)).toBe(100)
  })

  it('should compute normalized marks list from array props', () => {
    const marksData = createSliderMarksData({
      marks: [0, 50, 100]
    })

    expect(marksData.is()).toBe(true)

    const resultList = marksData.get()
    expect(resultList).toBeDefined()
    expect(resultList?.length).toBe(3)
    expect(resultList?.[0]).toEqual({
      mark: 0,
      value: 0,
      text: '0',
      style: { '--dxt-slider-sys-mark': '0%' }
    })
    expect(resultList?.[1]).toEqual({
      mark: 50,
      value: 50,
      text: '50',
      style: { '--dxt-slider-sys-mark': '50%' }
    })
  })

  it('should compute normalized marks list from object props with custom keys', () => {
    const marksData = createSliderMarksData({
      marks: {
        low: { mark: 10, customValue: 'V1', customLabel: 'Low' },
        high: { mark: 90, customValue: 'V2', customLabel: 'High' }
      },
      keyValue: 'customValue',
      keyLabel: 'customLabel'
    })

    expect(marksData.is()).toBe(true)

    const resultList = marksData.get()
    expect(resultList?.length).toBe(2)
    expect(resultList?.[0]).toEqual({
      mark: 10,
      value: 'V1',
      text: 'Low',
      style: { '--dxt-slider-sys-mark': '10%' }
    })
  })

  it('should return undefined when marks prop is absent', () => {
    const marksData = createSliderMarksData()

    expect(marksData.is()).toBe(false)
    expect(marksData.get()).toBeUndefined()
  })
})
