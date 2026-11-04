// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { FieldArrowInclude } from '../FieldArrowInclude'
import { FieldTypeInclude } from '../FieldTypeInclude'
import type { FieldValueInclude } from '../FieldValueInclude'

describe('FieldArrowInclude', () => {
  let mockValue: {
    number: number
    set: ReturnType<typeof vi.fn>
  }

  beforeEach(() => {
    mockValue = {
      number: 10,
      set: vi.fn().mockImplementation((value: string) => {
        mockValue.number = Number(value)
      })
    }
  })

  describe('Arrow state and type detection', () => {
    it('should detect if arrows are enabled via is getter', () => {
      const arrowEnabled = new FieldArrowInclude(
        { arrow: 'stepper' },
        () => mockValue as unknown as FieldValueInclude
      )
      expect(arrowEnabled.is).toBe(true)

      const arrowDisabled = new FieldArrowInclude(
        { arrow: 'none' },
        () => mockValue as unknown as FieldValueInclude
      )
      expect(arrowDisabled.is).toBe(false)

      const arrowUndefined = new FieldArrowInclude(
        {},
        () => mockValue as unknown as FieldValueInclude
      )
      expect(arrowUndefined.is).toBe(false)
    })

    it('should check if arrow type is carousel or stepper', () => {
      const arrowStepper = new FieldArrowInclude(
        { arrow: 'stepper' },
        () => mockValue as unknown as FieldValueInclude
      )
      expect(arrowStepper.isStepper()).toBe(true)
      expect(arrowStepper.isCarousel()).toBe(false)

      const arrowCarousel = new FieldArrowInclude(
        { arrow: 'carousel' },
        () => mockValue as unknown as FieldValueInclude
      )
      expect(arrowCarousel.isStepper()).toBe(false)
      expect(arrowCarousel.isCarousel()).toBe(true)
    })

    it('should resolve auto arrow to stepper for number and number-format types', () => {
      const numberType = new FieldTypeInclude({ type: 'number' })
      const formatType = new FieldTypeInclude({ type: 'number-format' })
      const textType = new FieldTypeInclude({ type: 'text' })

      const arrowNumber = new FieldArrowInclude(
        { arrow: 'auto' },
        () => mockValue as unknown as FieldValueInclude,
        () => numberType
      )
      expect(arrowNumber.get()).toBe('stepper')
      expect(arrowNumber.isStepper()).toBe(true)

      const arrowFormat = new FieldArrowInclude(
        { arrow: 'auto' },
        () => mockValue as unknown as FieldValueInclude,
        () => formatType
      )
      expect(arrowFormat.get()).toBe('stepper')

      const arrowText = new FieldArrowInclude(
        { arrow: 'auto' },
        () => mockValue as unknown as FieldValueInclude,
        () => textType
      )
      expect(arrowText.get()).toBe('auto')
    })

    it('should return arrowAlign via align()', () => {
      const arrow = new FieldArrowInclude(
        { arrowAlign: 'right' },
        () => mockValue as unknown as FieldValueInclude
      )
      expect(arrow.align()).toBe('right')
    })
  })

  describe('Stepping and boundary constraints', () => {
    it('should decrease value by step on previous()', () => {
      const arrow = new FieldArrowInclude(
        { step: 2, min: 0 },
        () => mockValue as unknown as FieldValueInclude
      )
      expect(arrow.previous()).toBe(arrow)

      expect(mockValue.set).toHaveBeenCalledWith('8')
      expect(mockValue.number).toBe(8)
    })

    it('should prioritize arrowStep over step', () => {
      const arrow = new FieldArrowInclude(
        { arrowStep: 3, step: 2, min: 0 },
        () => mockValue as unknown as FieldValueInclude
      )
      arrow.previous()
      expect(mockValue.set).toHaveBeenCalledWith('7')
    })

    it('should increase value by step on next()', () => {
      const arrow = new FieldArrowInclude(
        { step: 5, max: 20 },
        () => mockValue as unknown as FieldValueInclude
      )
      expect(arrow.next()).toBe(arrow)

      expect(mockValue.set).toHaveBeenCalledWith('15')
      expect(mockValue.number).toBe(15)
    })

    it('should cap value to min if previous exceeds limit and update disabledPrevious', () => {
      mockValue.number = 1
      const arrow = new FieldArrowInclude(
        { step: 2, min: 0 },
        () => mockValue as unknown as FieldValueInclude
      )

      expect(arrow.disabledPrevious).toBe(false)
      arrow.previous()
      expect(mockValue.set).toHaveBeenCalledWith('0')
      expect(mockValue.number).toBe(0)
      expect(arrow.disabledPrevious).toBe(true)
    })

    it('should cap value to max if next exceeds limit and update disabledNext', () => {
      mockValue.number = 19
      const arrow = new FieldArrowInclude(
        { step: 2, max: 20 },
        () => mockValue as unknown as FieldValueInclude
      )

      expect(arrow.disabledNext).toBe(false)
      arrow.next()
      expect(mockValue.set).toHaveBeenCalledWith('20')
      expect(mockValue.number).toBe(20)
      expect(arrow.disabledNext).toBe(true)
    })

    it('should jump directly to min and max via toMin() and toMax()', () => {
      const arrow = new FieldArrowInclude(
        { min: 2, max: 25 },
        () => mockValue as unknown as FieldValueInclude
      )

      expect(arrow.toMin()).toBe(arrow)
      expect(mockValue.number).toBe(2)

      expect(arrow.toMax()).toBe(arrow)
      expect(mockValue.number).toBe(25)
    })
  })
})
