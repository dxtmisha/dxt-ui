// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { Formatters } from '../Formatters'
import { FormattersType } from '../../types/formattersTypes'
import { Geo } from '../Geo'

describe('Formatters', () => {
  beforeEach(() => {
    Geo.set('en-US')
  })

  const options = {
    price: { type: FormattersType.currency },
    birthday: { type: FormattersType.date },
    name: { type: FormattersType.name },
    count: { type: FormattersType.number },
    apples: {
      type: FormattersType.plural,
      options: { words: 'apple|apples' }
    },
    weight: {
      type: FormattersType.unit,
      options: { unit: 'kilogram' }
    },
    custom: {
      transformation: (val: any) => `custom-${val}`
    }
  }

  const list = [
    {
      price: 100,
      currency: 'USD',
      birthday: '2025-01-01',
      firstName: 'John',
      lastName: 'Doe',
      count: 1234.56,
      apples: 5,
      weight: 10,
      custom: 'value'
    }
  ]

  it('should initialize with options and list', () => {
    const formatters = new Formatters(options, list)
    expect(formatters.getOptions()).toBe(options)
    expect(formatters.getList()).toBe(list)
  })

  it('should allow setting the list', () => {
    const formatters = new Formatters(options)
    expect(formatters.getList()).toBeUndefined()
    formatters.setList(list)
    expect(formatters.getList()).toBe(list)
  })

  it('should format data correctly via to()', () => {
    const formatters = new Formatters(options, list)
    const result = formatters.to()
    const item = result[0]!

    // Currency
    expect(item.priceFormat).toContain('$100.00')

    // Date
    expect(item.birthdayFormat).toBeTruthy()
    expect(typeof item.birthdayFormat).toBe('string')

    // Name
    expect(item.nameFormat).toBe('John Doe')

    // Number
    expect(item.countFormat).toBe('1,234.56')

    // Plural
    expect(item.applesFormat).toBe('5 apples')

    // Unit
    expect(item.weightFormat).toBe('10 kg')

    // Custom
    expect(item.customFormat).toBe('custom-value')
  })

  it('should return an empty array if a list is missing', () => {
    const formatters = new Formatters(options)
    expect(formatters.to()).toEqual([])
  })

  it('should handle missing values by returning empty strings', () => {
    const incompleteList = [{}]
    const formatters = new Formatters(options, incompleteList as any)
    const result = formatters.to()
    const item = result[0]!

    expect(item.priceFormat).toBe('')
    expect(item.birthdayFormat).toBe('')
    expect(item.nameFormat).toBe('')
    expect(item.countFormat).toBe('')
    expect(item.applesFormat).toBe('')
    expect(item.weightFormat).toBe('')
    expect(item.customFormat).toBe('')
  })

  it('should use custom currency property name if provided', () => {
    const customOptions = {
      price: {
        type: FormattersType.currency,
        options: { currencyPropName: 'myCurrency' }
      }
    }
    const customList = [{ price: 50, myCurrency: 'EUR' }]
    const formatters = new Formatters(customOptions, customList)
    const result = formatters.to()
    expect(result[0]!.priceFormat).toContain('€50.00')
  })
})
