import { describe, it, expect, beforeEach } from 'vitest'
import { MaskType } from '../MaskType'
import type { MaskProps } from '../props'

describe('MaskType', () => {
  let mockProps: MaskProps
  let maskType: MaskType

  beforeEach(() => {
    mockProps = {}
    maskType = new MaskType(mockProps)
  })

  it('should default to text type', () => {
    expect(maskType.item).toBe('text')
    expect(maskType.isNumber()).toBe(false)
    expect(maskType.isCurrencyOrNumber()).toBe(false)
    expect(maskType.isDate()).toBe(false)
    expect(maskType.isTime()).toBe(false)
  })

  it('should detect number types', () => {
    mockProps.type = 'number'
    expect(maskType.isNumber()).toBe(true)
    expect(maskType.isCurrencyOrNumber()).toBe(true)

    mockProps.type = 'number-format'
    expect(maskType.isNumberFormat()).toBe(true)
    expect(maskType.isCurrencyOrNumber()).toBe(true)

    mockProps.type = 'currency'
    expect(maskType.isCurrency()).toBe(true)
    expect(maskType.isCurrencyOrNumber()).toBe(true)
  })

  it('should detect time types', () => {
    const timeTypes: Array<MaskProps['type']> = [
      'full',
      'datetime',
      'time',
      'hour-minute',
      'hour',
      'minute',
      'second'
    ]

    timeTypes.forEach((type) => {
      mockProps.type = type
      expect(maskType.isTime()).toBe(true)
      expect(maskType.isDate()).toBe(true)
    })
  })

  it('should detect date types', () => {
    const dateTypes: Array<MaskProps['type']> = [
      'date',
      'year',
      'year-month',
      'month',
      'day',
      'day-month'
    ]

    dateTypes.forEach((type) => {
      mockProps.type = type
      expect(maskType.isDate()).toBe(true)
      expect(maskType.isTime()).toBe(false)
    })
  })

  it('should return GeoDate type via getByDate()', () => {
    mockProps.type = 'date'
    expect(maskType.getByDate()).toBe('date')

    mockProps.type = 'text'
    expect(maskType.getByDate()).toBe('date')
  })
})
