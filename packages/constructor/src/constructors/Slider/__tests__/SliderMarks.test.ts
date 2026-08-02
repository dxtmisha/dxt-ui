// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { SliderFocusType } from '../basicTypes'
import { SliderMarks } from '../SliderMarks'
import { SliderMarksData } from '../SliderMarksData'
import type { SliderPropsBasic } from '../props'

function createSliderMarks(props: Partial<SliderPropsBasic> = {}) {
  const fullProps = { ...props } as SliderPropsBasic
  const className = 'dxt-slider'
  const marksData = new SliderMarksData(fullProps, className)
  const marks = new SliderMarks(fullProps, className, marksData)

  return { marks, marksData }
}

describe('SliderMarks', () => {
  it('should return marks data instance', () => {
    const { marks, marksData } = createSliderMarks()
    expect(marks.getData()).toBe(marksData)
  })

  it('should retrieve item from mark list or return fallback item if not found', () => {
    const { marks } = createSliderMarks({
      marks: [
        { mark: 20, value: 20, text: 'Twenty' },
        { mark: 80, value: 80, text: 'Eighty' }
      ]
    })

    const itemTwenty = marks.getItem(20)
    expect(itemTwenty.text).toBe('Twenty')

    const itemMissing = marks.getItem(50)
    expect(itemMissing).toEqual({ mark: 50, value: 50, text: '50' })
  })

  it('should navigate next and prev values using step when magnet is disabled', () => {
    const { marks } = createSliderMarks({
      min: 0,
      max: 100,
      step: 10,
      magnet: false
    })

    expect(marks.getMarkNeighbor(50, true)).toBe(60)
    expect(marks.getMarkNeighbor(50, false)).toBe(40)
  })

  it('should navigate next and prev values using mark items when magnet is enabled', () => {
    const { marks } = createSliderMarks({
      marks: [0, 25, 75, 100],
      magnet: true
    })

    expect(marks.getMarkNeighbor(25, true)).toBe(75)
    expect(marks.getMarkNeighbor(75, false)).toBe(25)
  })

  it('should snap to nearest mark when magnet is enabled', () => {
    const { marks } = createSliderMarks({
      marks: [0, 30, 80, 100],
      magnet: true
    })

    expect(marks.getNearest(20)).toBe(30)
    expect(marks.getNearest(70)).toBe(80)
  })

  it('should return raw target value when magnet is disabled', () => {
    const { marks } = createSliderMarks({
      marks: [0, 30, 80, 100],
      magnet: false
    })

    expect(marks.getNearest(20)).toBe(20)
  })

  it('should restrict target value within min/max bounds in single mode', () => {
    const { marks } = createSliderMarks({
      min: 0,
      max: 100,
      multiple: false
    })

    expect(marks.checkValue(50, 0, 100, SliderFocusType.max)).toBe(50)
    expect(marks.checkValue(-20, 0, 100, SliderFocusType.max)).toBe(0)
    expect(marks.checkValue(150, 0, 100, SliderFocusType.max)).toBe(100)
  })

  it('should restrict min/max values respecting minimumDistance in multiple mode', () => {
    const { marks } = createSliderMarks({
      min: 0,
      max: 100,
      minimumDistance: 10,
      multiple: true
    })

    // Adjusting min handle towards max (maxCurrent = 60), minLimit becomes 0, maxLimit becomes (60 - 10) = 50
    expect(marks.checkValue(55, 20, 60, SliderFocusType.min)).toBe(50)

    // Adjusting max handle towards min (minCurrent = 40), minLimit becomes (40 + 10) = 50, maxLimit becomes 100
    expect(marks.checkValue(45, 40, 80, SliderFocusType.max)).toBe(50)
  })

  it('should calculate value from percentage via toMark', () => {
    const { marks } = createSliderMarks({
      min: 0,
      max: 100,
      step: 5
    })

    expect(marks.toMark(50)).toBe(50)
    expect(marks.toMark(23)).toBe(25)
  })
})
