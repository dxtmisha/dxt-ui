import './testWarnings'
import { describe, expect, it } from 'vitest'
import { computed } from 'vue'
import { ImageCalculation, MAX_IMAGE_OFFSET } from '../ImageCalculation'

describe('ImageCalculation', () => {
  it.each(['gallery', ''])('initializes an isolated group %j', (name) => {
    const calculation = new ImageCalculation(name)
    expect(calculation.is(name)).toBe(true)
    expect(calculation.is(name + '-other')).toBe(false)
    expect(calculation.isSize()).toBe(false)
    expect([calculation.width, calculation.height, calculation.factorMax]).toEqual([0, 0, 1])
    expect([calculation.offsetWidth, calculation.offsetHeight]).toEqual([MAX_IMAGE_OFFSET, MAX_IMAGE_OFFSET])
  })

  it('keeps independent maxima and minima without allowing later values to undo them', () => {
    const calculation = new ImageCalculation('gallery')
    expect(calculation.makeWidth(100).makeHeight(200).makeOffsetWidth(80).makeOffsetHeight(60)).toBe(calculation)
    calculation.makeWidth(50).makeHeight(150).makeOffsetWidth(90).makeOffsetHeight(70)
    expect([calculation.width, calculation.height, calculation.offsetWidth, calculation.offsetHeight])
      .toEqual([100, 200, 80, 60])
    calculation.makeWidth(300).makeHeight(400).makeOffsetWidth(40).makeOffsetHeight(30)
    expect([calculation.width, calculation.height, calculation.offsetWidth, calculation.offsetHeight])
      .toEqual([300, 400, 40, 30])
  })

  it.each([0, -1, NaN])('ignores an unavailable physical maximum %s', (value) => {
    const calculation = new ImageCalculation('gallery')
    calculation.makeWidth(value).makeHeight(value)
    expect(calculation.isSize()).toBe(false)
    expect([calculation.width, calculation.height]).toEqual([0, 0])
  })

  it('tracks physical size when only one axis is available', () => {
    const calculation = new ImageCalculation('gallery')
    calculation.makeHeight(120)
    expect(calculation.isSize()).toBe(true)
    expect(calculation.width).toBe(0)
  })

  it('invalidates reactive consumers when the limiting factor changes or resets', () => {
    const calculation = new ImageCalculation('gallery')
    const scale = computed(() => calculation.factorMax * 100)
    expect(scale.value).toBe(100)
    expect(calculation.makeFactorMax(0.5)).toBe(calculation)
    calculation.makeFactorMax(0.8)
    expect(scale.value).toBe(50)
    calculation.factorMax = 0.25
    expect(scale.value).toBe(25)
    calculation.makeWidth(300).makeHeight(100).makeOffsetWidth(50).makeOffsetHeight(20)
    expect(calculation.reset()).toBe(calculation)
    expect(scale.value).toBe(100)
    expect(calculation.isSize()).toBe(false)
    expect([calculation.width, calculation.height, calculation.offsetWidth, calculation.offsetHeight])
      .toEqual([0, 0, MAX_IMAGE_OFFSET, MAX_IMAGE_OFFSET])
  })
})
