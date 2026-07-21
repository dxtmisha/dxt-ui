import { describe, it, expect } from 'vitest'
import { ImageCalculation } from '../ImageCalculation'

describe('ImageCalculation', () => {
  it('should initialize properties correctly', () => {
    const calc = new ImageCalculation('group-name')
    expect(calc.width).toBe(0)
    expect(calc.height).toBe(0)
    expect(calc.offsetWidth).toBe(7680)
    expect(calc.offsetHeight).toBe(7680)
    expect(calc.factorMax).toBe(1)
    expect(calc.is('group-name')).toBe(true)
    expect(calc.is('other')).toBe(false)
    expect(calc.isSize()).toBe(false)
  })

  it('should update properties correctly', () => {
    const calc = new ImageCalculation('group')
    calc.makeWidth(100)
    calc.makeHeight(200)
    calc.makeOffsetWidth(50)
    calc.makeOffsetHeight(60)
    calc.makeFactorMax(0.5)

    expect(calc.width).toBe(100)
    expect(calc.height).toBe(200)
    expect(calc.offsetWidth).toBe(50)
    expect(calc.offsetHeight).toBe(60)
    expect(calc.factorMax).toBe(0.5)
    expect(calc.isSize()).toBe(true)

    calc.reset()
    expect(calc.width).toBe(0)
    expect(calc.height).toBe(0)
    expect(calc.offsetWidth).toBe(7680)
    expect(calc.offsetHeight).toBe(7680)
    expect(calc.factorMax).toBe(1)
    expect(calc.isSize()).toBe(false)
  })
})
