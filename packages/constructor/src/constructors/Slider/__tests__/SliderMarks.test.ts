// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { SliderFocusType } from '../basicTypes'
import { SliderMarks } from '../SliderMarks'
import { SliderMarksData } from '../SliderMarksData'
import type { SliderPropsBasic } from '../props'

function createSliderMarks(props: Partial<SliderPropsBasic> = {}) {
  const fullProps = { ...props } as SliderPropsBasic
  const naming = new DesignName('dxt.slider')
  const marksData = new SliderMarksData(fullProps, naming)
  const marks = new SliderMarks(fullProps, () => marksData)

  return { marks, marksData }
}

describe('SliderMarks', () => {
  it('should return marks data instance', () => {
    const { marks, marksData } = createSliderMarks()
    expect(marks.getData()).toBe(marksData)
  })

  it('should retrieve item from mark list by mark or value and fallback if not found', () => {
    const { marks } = createSliderMarks({
      marks: [
        { mark: 20, value: 200, label: 'Twenty' },
        { mark: 80, value: 800, label: 'Eighty' }
      ]
    })

    expect(marks.getItem(20).label).toBe('Twenty')
    expect(marks.getItem(800, 'value').label).toBe('Eighty')
    expect(marks.getItem(50)).toEqual({ mark: 50, value: 50, label: '50' })
  })

  it('should navigate next and prev values using step without floating-point drift', () => {
    const { marks } = createSliderMarks({
      min: 0,
      max: 1,
      step: 0.1,
      magnet: false
    })

    expect(marks.getMarkNeighbor(0.2, true)).toBe(0.3)
    expect(marks.getMarkNeighbor(0.3, false)).toBe(0.2)
  })

  it('should navigate next and prev values using mark items when magnet is enabled', () => {
    const { marks } = createSliderMarks({
      marks: [0, 25, 75, 100],
      magnet: true
    })

    expect(marks.getMarkNeighbor(25, true)).toBe(75)
    expect(marks.getMarkNeighbor(75, false)).toBe(25)
    expect(marks.getMarkNeighbor(100, true)).toBe(100)
    expect(marks.getMarkNeighbor(0, false)).toBe(0)
  })

  it('should snap to nearest mark only when magnet is enabled', () => {
    const withMagnet = createSliderMarks({
      marks: [0, 30, 80, 100],
      magnet: true
    })
    expect(withMagnet.marks.getNearest(20)).toBe(30)
    expect(withMagnet.marks.getNearest(70)).toBe(80)

    const withoutMagnet = createSliderMarks({
      marks: [0, 30, 80, 100],
      magnet: false
    })
    expect(withoutMagnet.marks.getNearest(20)).toBe(20)
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

  it('should restrict min/max values respecting minimumDistance without exceeding outer range bounds', () => {
    const { marks } = createSliderMarks({
      min: 0,
      max: 100,
      minimumDistance: 10,
      multiple: true
    })

    expect(marks.checkValue(55, 20, 60, SliderFocusType.min)).toBe(50)
    expect(marks.checkValue(45, 40, 80, SliderFocusType.max)).toBe(50)

    // Extreme boundary: minCurrent + minimumDistance > maxNumber must never exceed maxNumber
    expect(marks.checkValue(98, 95, 100, SliderFocusType.max)).toBe(100)
    // Extreme boundary: maxCurrent - minimumDistance < minNumber must never go below minNumber
    expect(marks.checkValue(2, 0, 5, SliderFocusType.min)).toBe(0)
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
