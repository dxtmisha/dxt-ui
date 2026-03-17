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

  describe('Initialization and Basic Methods', () => {
    it('should initialize with options and list', () => {
      const formatters = new Formatters(options, list)
      expect(formatters.getOptions()).toBe(options)
      expect(formatters.getList()).toEqual(list)
    })

    it('should check if list is set using is()', () => {
      const formatters = new Formatters(options)
      expect(formatters.is()).toBe(false)
      formatters.setList(list)
      expect(formatters.is()).toBe(true)
    })

    it('should check if a list is an array using isArray()', () => {
      const formattersArray = new Formatters(options, list)
      expect(formattersArray.isArray()).toBe(true)

      const formattersSingle = new Formatters(options, list[0])
      expect(formattersSingle.isArray()).toBe(false)
    })

    it('should return the correct count of records using length()', () => {
      const formattersEmpty = new Formatters(options)
      expect(formattersEmpty.length()).toBe(0)

      const formattersArray = new Formatters(options, list)
      expect(formattersArray.length()).toBe(list.length)

      const formattersSingle = new Formatters(options, list[0])
      expect(formattersSingle.length()).toBe(1)
    })

    it('should allow setting and getting the list', () => {
      const formatters = new Formatters(options)
      expect(formatters.getList()).toEqual([])
      formatters.setList(list)
      expect(formatters.getList()).toEqual(list)
    })
  })

  describe('Formatting with to()', () => {
    it('should format an array of data correctly', () => {
      const formatters = new Formatters(options, list)
      const result = formatters.to()
      const item = result[0]!

      expect(item.priceFormat).toContain('$100.00')
      expect(typeof item.birthdayFormat).toBe('string')
      expect(item.nameFormat).toBe('John Doe')
      expect(item.countFormat).toBe('1,234.56')
      expect(item.applesFormat).toBe('5 apples')
      expect(item.weightFormat).toBe('10 kg')
      expect(item.customFormat).toBe('custom-value')
    })

    it('should format a single item correctly', () => {
      const formatters = new Formatters(options, list[0])
      const item = formatters.to()

      expect(item?.priceFormat).toContain('$100.00')
      expect(item?.nameFormat).toBe('John Doe')
    })

    it('should return undefined if a list is missing', () => {
      const formatters = new Formatters(options)
      expect(formatters.to()).toBeUndefined()
    })

    it('should handle missing values by returning empty strings or defaults', () => {
      const incompleteList = [{}]
      const formatters = new Formatters(options, incompleteList as any)
      const result = formatters.to()
      const item = result![0]!

      expect(item.priceFormat).toBe('')
      expect(item.birthdayFormat).toBe('')
      expect(item.nameFormat).toBe('')
      expect(item.countFormat).toBe('')
      expect(item.applesFormat).toBe('')
      expect(item.weightFormat).toBe('')
      expect(item.customFormat).toBe('')
    })
  })

  describe('Specific Formatter Options', () => {
    it('should use custom currency property name', () => {
      const customOptions = {
        price: {
          type: FormattersType.currency,
          options: { currencyPropName: 'myCurrency' }
        }
      }
      const customList = [{ price: 50, myCurrency: 'EUR' }]
      const formatters = new Formatters(customOptions, customList)
      expect(formatters.to()![0]!.priceFormat).toContain('€50.00')
    })

    it('should handle a currency numberOnly option', () => {
      const customOptions = {
        price: {
          type: FormattersType.currency,
          options: { numberOnly: true }
        }
      }
      const customList = [{ price: 100, currency: 'USD' }]
      const formatters = new Formatters(customOptions, customList)
      expect(formatters.to()![0]!.priceFormat).toBe('100.00')
    })

    it('should handle name formatting with custom property names', () => {
      const nameOptions = {
        user: {
          type: FormattersType.name,
          options: {
            firstPropName: 'fName',
            lastPropName: 'lName',
            surname: 'sName'
          }
        }
      }
      const nameList = [{ fName: 'Ivan', lName: 'Ivanov', sName: 'Ivanovich' }]
      const formatters = new Formatters(nameOptions, nameList)
      const result = formatters.to()![0]!.userFormat
      expect(result).toContain('Ivan')
      expect(result).toContain('Ivanov')
    })

    it('should handle plural with options and optionsNumber', () => {
      const pluralOptions = {
        items: {
          type: FormattersType.plural,
          options: {
            words: 'item|items',
            optionsNumber: { minimumFractionDigits: 1 }
          }
        }
      }
      const pluralList = [{ items: 1 }]
      const formatters = new Formatters(pluralOptions, pluralList)
      expect(formatters.to()![0]!.itemsFormat).toBe('1.0 item')
    })

    it('should handle unit formatting', () => {
      const unitOptions = {
        m: {
          type: FormattersType.unit,
          options: { unit: 'meter' }
        }
      }
      const unitList = [{ m: 5 }]
      const formatters = new Formatters(unitOptions, unitList)
      expect(formatters.to()![0]!.mFormat).toBe('5 m')
    })
  })
})
