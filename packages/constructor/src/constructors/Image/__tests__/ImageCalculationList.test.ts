import { describe, it, expect } from 'vitest'
import { ImageCalculationList } from '../ImageCalculationList'

describe('ImageCalculationList', () => {
  it('should manage calculations list', () => {
    const calc1 = ImageCalculationList.get('group1')
    const calc2 = ImageCalculationList.get('group2')

    expect(calc1).toBeDefined()
    expect(calc2).toBeDefined()
    expect(calc1).not.toBe(calc2)

    expect(ImageCalculationList.get('group1')).toBe(calc1)

    expect(ImageCalculationList.isSize()).toBe(false)
    calc1.makeWidth(10)
    expect(ImageCalculationList.isSize()).toBe(true)

    ImageCalculationList.reset()
    expect(ImageCalculationList.isSize()).toBe(false)
  })
})
