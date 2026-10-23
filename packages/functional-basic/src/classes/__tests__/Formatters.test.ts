// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { Formatters } from '../Formatters'
import { FormattersType, type FormattersOptionsList } from '../../types/formattersTypes'
import { Geo } from '../Geo'

interface TestRecord extends Record<string, unknown> {
  price?: number
  currency?: string
  birthday?: string
  firstName?: string
  lastName?: string
  surname?: string
  count?: number
  apples?: number
  weight?: number
  custom?: string | number | boolean
}

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
      transformation: (value: unknown) => `custom-${String(value)}`
    }
  } satisfies FormattersOptionsList

  const sampleList: TestRecord[] = [
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
      const formatters = new Formatters(options, sampleList)
      expect(formatters.getOptions()).toBe(options)
      expect(formatters.getList()).toEqual(sampleList)
    })

    it('should check if list is set using is()', () => {
      const formatters = new Formatters<typeof options, TestRecord[]>(options)
      expect(formatters.is()).toBe(false)
      formatters.setList(sampleList)
      expect(formatters.is()).toBe(true)
    })

    it('should check if a list is an array using isArray()', () => {
      const formattersArray = new Formatters(options, sampleList)
      expect(formattersArray.isArray()).toBe(true)

      const formattersSingle = new Formatters(options, sampleList[0])
      expect(formattersSingle.isArray()).toBe(false)
    })

    it('should return the correct count of records using length()', () => {
      const formattersEmpty = new Formatters<typeof options, TestRecord[]>(options)
      expect(formattersEmpty.length()).toBe(0)

      const formattersArray = new Formatters(options, sampleList)
      expect(formattersArray.length()).toBe(sampleList.length)

      const formattersSingle = new Formatters(options, sampleList[0])
      expect(formattersSingle.length()).toBe(1)

      formattersArray.setList([])
      expect(formattersArray.length()).toBe(0)

      formattersArray.setList(undefined)
      expect(formattersArray.length()).toBe(0)
    })

    it('should allow setting and getting the list with chaining', () => {
      const formatters = new Formatters<typeof options, TestRecord[]>(options)
      expect(formatters.getList()).toEqual([])
      const chainedResult = formatters.setList(sampleList)
      expect(formatters.getList()).toEqual(sampleList)
      expect(chainedResult).toBe(formatters)
    })
  })

  describe('Formatting with to()', () => {
    it('should format an array of data correctly', () => {
      const formatters = new Formatters(options, sampleList)
      const result = formatters.to()
      const firstItem = result[0]!

      expect(firstItem.priceFormat).toContain('$100.00')
      expect(typeof firstItem.birthdayFormat).toBe('string')
      expect(firstItem.nameFormat).toBe('John Doe')
      expect(firstItem.countFormat).toBe('1,234.56')
      expect(firstItem.applesFormat).toBe('5 apples')
      expect(firstItem.weightFormat).toBe('10 kg')
      expect(firstItem.customFormat).toBe('custom-value')
    })

    it('should update formatted output when list is changed via setList', () => {
      const formatters = new Formatters(options, sampleList)
      expect(formatters.to()[0]?.priceFormat).toContain('$100.00')

      formatters.setList([{ ...sampleList[0], price: 200 }])
      expect(formatters.to()[0]?.priceFormat).toContain('$200.00')
    })

    it('should format a single item correctly', () => {
      const formatters = new Formatters(options, sampleList[0])
      const formattedItem = formatters.to()

      expect(formattedItem?.priceFormat).toContain('$100.00')
      expect(formattedItem?.nameFormat).toBe('John Doe')
    })

    it('should return undefined if a list is missing', () => {
      const formatters = new Formatters<typeof options, TestRecord>(options)
      expect(formatters.to()).toBeUndefined()
    })

    it('should handle missing values by returning empty strings', () => {
      const incompleteList: TestRecord[] = [{}]
      const formatters = new Formatters(options, incompleteList)
      const result = formatters.to()
      const firstItem = result[0]!

      expect(firstItem.priceFormat).toBe('')
      expect(firstItem.birthdayFormat).toBe('')
      expect(firstItem.nameFormat).toBe('')
      expect(firstItem.countFormat).toBe('')
      expect(firstItem.applesFormat).toBe('')
      expect(firstItem.weightFormat).toBe('')
      expect(firstItem.customFormat).toBe('')
    })

    it('should handle 0, "0", false, and truthy values according to isFilled semantics', () => {
      const edgeOptions = {
        zeroNumber: { type: FormattersType.number },
        zeroString: { type: FormattersType.number },
        positiveNumber: { type: FormattersType.number },
        zeroCustom: {
          transformation: (value: unknown) => `val:${String(value)}`
        },
        falseCustom: {
          transformation: (value: unknown) => `bool:${String(value)}`
        }
      } satisfies FormattersOptionsList

      const edgeItem = {
        zeroNumber: 0,
        zeroString: '0',
        positiveNumber: 7,
        zeroCustom: 0,
        falseCustom: false
      }

      const formatters = new Formatters(edgeOptions, edgeItem)
      const formatted = formatters.to()

      // isFilled(0), isFilled('0'), and isFilled(false) are false by default
      expect(formatted?.zeroNumberFormat).toBe('')
      expect(formatted?.zeroStringFormat).toBe('')
      expect(formatted?.positiveNumberFormat).toBe('7')
      expect(formatted?.zeroCustomFormat).toBe('')
      expect(formatted?.falseCustomFormat).toBe('')
    })
  })

  describe('Specific Formatter Options', () => {
    it('should use custom currency property name', () => {
      const customOptions = {
        price: {
          type: FormattersType.currency,
          options: { currencyPropName: 'myCurrency' }
        }
      } satisfies FormattersOptionsList
      const customList = [{ price: 50, myCurrency: 'EUR' }]
      const formatters = new Formatters(customOptions, customList)
      expect(formatters.to()[0]?.priceFormat).toContain('€50.00')
    })

    it('should handle a currency numberOnly option', () => {
      const customOptions = {
        price: {
          type: FormattersType.currency,
          options: { numberOnly: true }
        }
      } satisfies FormattersOptionsList
      const customList = [{ price: 100, currency: 'USD' }]
      const formatters = new Formatters(customOptions, customList)
      expect(formatters.to()[0]?.priceFormat).toBe('100.00')
    })

    it('should handle date formatting with custom type, options, and hour24', () => {
      const dateOptions = {
        eventAt: {
          type: FormattersType.date,
          options: {
            type: 'datetime',
            options: 'long',
            hour24: true
          }
        }
      } satisfies FormattersOptionsList
      const dateList = [{ eventAt: '2025-03-15T15:30:00' }]
      const formatters = new Formatters(dateOptions, dateList)
      const formattedDate = formatters.to()[0]?.eventAtFormat
      expect(formattedDate).toContain('March')
      expect(formattedDate).toContain('15:30')
    })

    it('should handle name formatting with custom property names and short flag', () => {
      const nameOptions = {
        user: {
          type: FormattersType.name,
          options: {
            firstPropName: 'givenName',
            lastPropName: 'familyName',
            surname: 'middleName',
            short: true
          }
        }
      } satisfies FormattersOptionsList
      const nameList = [{ givenName: 'Ivan', familyName: 'Ivanov', middleName: 'Ivanovich' }]
      const formatters = new Formatters(nameOptions, nameList)
      const result = formatters.to()[0]?.userFormat
      expect(result).toBe('I. Ivanov')
    })

    it('should handle plural with options and optionsNumber, and fallback when words are missing', () => {
      const pluralOptions = {
        items: {
          type: FormattersType.plural,
          options: {
            words: 'item|items',
            optionsNumber: { minimumFractionDigits: 1 }
          }
        },
        noWords: {
          type: FormattersType.plural
        }
      } satisfies FormattersOptionsList
      const pluralList = [{ items: 1, noWords: 42 }]
      const formatters = new Formatters(pluralOptions, pluralList)
      expect(formatters.to()[0]?.itemsFormat).toBe('1.0 item')
      expect(formatters.to()[0]?.noWordsFormat).toBe('42')
    })

    it('should handle unit formatting and fallback when unit option is missing', () => {
      const unitOptions = {
        distance: {
          type: FormattersType.unit,
          options: { unit: 'meter' }
        },
        rawUnit: {
          type: FormattersType.unit
        }
      } satisfies FormattersOptionsList
      const unitList = [{ distance: 5, rawUnit: 12 }]
      const formatters = new Formatters(unitOptions, unitList)
      expect(formatters.to()[0]?.distanceFormat).toBe('5 m')
      expect(formatters.to()[0]?.rawUnitFormat).toBe('12')
    })

    it('should stringify value when type is omitted in options', () => {
      const untypedOptions = {
        label: {}
      } satisfies FormattersOptionsList
      const untypedList = [{ label: 999 }]
      const formatters = new Formatters(untypedOptions, untypedList)
      expect(formatters.to()[0]?.labelFormat).toBe('999')
    })

    it('should handle dot notation in keys and convert format key to camelCase', () => {
      const dotOptions = {
        'user.name': { type: FormattersType.name },
        'order.total.amount': { type: FormattersType.number }
      } satisfies FormattersOptionsList

      const dotList: Record<string, unknown>[] = [
        {
          firstName: 'John',
          lastName: 'Doe',
          order: {
            total: {
              amount: 2500
            }
          }
        }
      ]

      const formatters = new Formatters(dotOptions, dotList)
      const firstResult = formatters.to()[0]!

      expect(firstResult.userNameFormat).toBe('John Doe')
      expect(firstResult.orderTotalAmountFormat).toBe('2,500')
    })
  })
})
