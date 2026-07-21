// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { FieldArrowInclude } from '../FieldArrowInclude'

describe('FieldArrowInclude', () => {
  let mockValue: any

  beforeEach(() => {
    mockValue = {
      number: 10,
      set: vi.fn().mockImplementation((val) => {
        mockValue.number = Number(val)
      })
    }
  })

  it('should detect if arrows are enabled', () => {
    const arrowEnabled = new FieldArrowInclude({ arrow: 'stepper' }, mockValue)
    expect(arrowEnabled.is).toBe(true)

    const arrowDisabled = new FieldArrowInclude({ arrow: 'none' }, mockValue)
    expect(arrowDisabled.is).toBe(false)
  })

  it('should decrease value by step on previous()', () => {
    const arrow = new FieldArrowInclude({ step: 2, min: 0 }, mockValue)
    arrow.previous()

    expect(mockValue.set).toHaveBeenCalledWith('8')
    expect(mockValue.number).toBe(8)
  })

  it('should increase value by step on next()', () => {
    const arrow = new FieldArrowInclude({ step: 5, max: 20 }, mockValue)
    arrow.next()

    expect(mockValue.set).toHaveBeenCalledWith('15')
    expect(mockValue.number).toBe(15)
  })

  it('should cap value to min if previous exceeds limit', () => {
    mockValue.number = 1
    const arrow = new FieldArrowInclude({ step: 2, min: 0 }, mockValue)

    arrow.previous()
    expect(mockValue.set).toHaveBeenCalledWith('0')
    expect(mockValue.number).toBe(0)
  })

  it('should cap value to max if next exceeds limit', () => {
    mockValue.number = 19
    const arrow = new FieldArrowInclude({ step: 2, max: 20 }, mockValue)

    arrow.next()
    expect(mockValue.set).toHaveBeenCalledWith('20')
    expect(mockValue.number).toBe(20)
  })

  it('should check if arrow type is carousel or stepper', () => {
    const arrowStepper = new FieldArrowInclude({ arrow: 'stepper' }, mockValue)
    expect(arrowStepper.isStepper()).toBe(true)
    expect(arrowStepper.isCarousel()).toBe(false)

    const arrowCarousel = new FieldArrowInclude({ arrow: 'carousel' }, mockValue)
    expect(arrowCarousel.isStepper()).toBe(false)
    expect(arrowCarousel.isCarousel()).toBe(true)
  })
})
