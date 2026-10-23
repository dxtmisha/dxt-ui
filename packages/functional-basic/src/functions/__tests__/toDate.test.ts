/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest'
import { toDate } from '../toDate'

describe('toDate', () => {
  describe('Date instance inputs', () => {
    it('should return the exact same Date instance when passed a valid Date', () => {
      const dateInstance = new Date('2024-06-15T10:20:30.000Z')
      expect(toDate(dateInstance)).toBe(dateInstance)
    })

    it('should return the exact same Date instance even if it is an Invalid Date', () => {
      const invalidDate = new Date('invalid-date-string')
      expect(toDate(invalidDate)).toBe(invalidDate)
      expect(Number.isNaN(toDate(invalidDate).getTime())).toBe(true)
    })
  })

  describe('Nullish and omitted inputs', () => {
    it('should return the current Date when called without arguments', () => {
      const beforeTimestamp = Date.now()
      const result = toDate()
      const afterTimestamp = Date.now()

      expect(result).toBeInstanceOf(Date)
      expect(result.getTime()).toBeGreaterThanOrEqual(beforeTimestamp)
      expect(result.getTime()).toBeLessThanOrEqual(afterTimestamp)
    })

    it('should return the current Date when passed undefined or null', () => {
      const beforeTimestamp = Date.now()
      const undefinedResult = toDate(undefined)
      // @ts-expect-error testing null runtime safety
      const nullResult = toDate(null)
      const afterTimestamp = Date.now()

      expect(undefinedResult).toBeInstanceOf(Date)
      expect(undefinedResult.getTime()).toBeGreaterThanOrEqual(beforeTimestamp)
      expect(undefinedResult.getTime()).toBeLessThanOrEqual(afterTimestamp)

      expect(nullResult).toBeInstanceOf(Date)
      expect(nullResult.getTime()).toBeGreaterThanOrEqual(beforeTimestamp)
      expect(nullResult.getTime()).toBeLessThanOrEqual(afterTimestamp)
    })
  })

  describe('Numeric timestamp inputs', () => {
    it('should convert a positive timestamp to the corresponding Date', () => {
      const timestamp = 1609459200000 // 2021-01-01T00:00:00.000Z
      const result = toDate(timestamp)

      expect(result.getTime()).toBe(timestamp)
      expect(result.toISOString()).toBe('2021-01-01T00:00:00.000Z')
    })

    it('should convert timestamp 0 to Unix epoch (1970-01-01T00:00:00.000Z) without treating 0 as nullish', () => {
      const result = toDate(0)

      expect(result.getTime()).toBe(0)
      expect(result.toISOString()).toBe('1970-01-01T00:00:00.000Z')
    })

    it('should convert negative timestamps (dates before 1970)', () => {
      const negativeTimestamp = -86400000 // 1969-12-31T00:00:00.000Z
      const result = toDate(negativeTimestamp)

      expect(result.getTime()).toBe(negativeTimestamp)
      expect(result.toISOString()).toBe('1969-12-31T00:00:00.000Z')
    })

    it('should return an Invalid Date for NaN and Infinity', () => {
      expect(Number.isNaN(toDate(NaN).getTime())).toBe(true)
      expect(Number.isNaN(toDate(Infinity).getTime())).toBe(true)
      expect(Number.isNaN(toDate(-Infinity).getTime())).toBe(true)
    })
  })

  describe('Compact string formats', () => {
    it('should parse compact full date format YYYYMMDD', () => {
      const result = toDate('20210105')

      expect(result.getFullYear()).toBe(2021)
      expect(result.getMonth()).toBe(0)
      expect(result.getDate()).toBe(5)
      expect(result.getHours()).toBe(0)
      expect(result.getMinutes()).toBe(0)
      expect(result.getSeconds()).toBe(0)
    })

    it('should parse compact year-month format YYYYMM and default to day 01', () => {
      const result = toDate('202105')

      expect(result.getFullYear()).toBe(2021)
      expect(result.getMonth()).toBe(4)
      expect(result.getDate()).toBe(1)
      expect(result.getHours()).toBe(0)
      expect(result.getMinutes()).toBe(0)
      expect(result.getSeconds()).toBe(0)
    })

    it('should parse compact datetime format YYYYMMDD HH:mm:ss', () => {
      const result = toDate('20210105 14:20:30')

      expect(result.getFullYear()).toBe(2021)
      expect(result.getMonth()).toBe(0)
      expect(result.getDate()).toBe(5)
      expect(result.getHours()).toBe(14)
      expect(result.getMinutes()).toBe(20)
      expect(result.getSeconds()).toBe(30)
    })
  })

  describe('Hyphenated and year-only string formats', () => {
    it('should parse hyphenated full date format YYYY-MM-DD', () => {
      const result = toDate('2021-01-05')

      expect(result.getFullYear()).toBe(2021)
      expect(result.getMonth()).toBe(0)
      expect(result.getDate()).toBe(5)
      expect(result.getHours()).toBe(0)
      expect(result.getMinutes()).toBe(0)
      expect(result.getSeconds()).toBe(0)
    })

    it('should parse hyphenated year-month format YYYY-MM and default to day 01', () => {
      const result = toDate('2021-08')

      expect(result.getFullYear()).toBe(2021)
      expect(result.getMonth()).toBe(7)
      expect(result.getDate()).toBe(1)
      expect(result.getHours()).toBe(0)
      expect(result.getMinutes()).toBe(0)
      expect(result.getSeconds()).toBe(0)
    })

    it('should parse 4-digit year format YYYY and default to January 1st', () => {
      const result = toDate('2021')

      expect(result.getFullYear()).toBe(2021)
      expect(result.getMonth()).toBe(0)
      expect(result.getDate()).toBe(1)
      expect(result.getHours()).toBe(0)
      expect(result.getMinutes()).toBe(0)
      expect(result.getSeconds()).toBe(0)
    })
  })

  describe('Time-only string formats', () => {
    it('should parse HH:mm format anchored to 2000-01-01 with 00 seconds', () => {
      const result = toDate('12:30')

      expect(result.getFullYear()).toBe(2000)
      expect(result.getMonth()).toBe(0)
      expect(result.getDate()).toBe(1)
      expect(result.getHours()).toBe(12)
      expect(result.getMinutes()).toBe(30)
      expect(result.getSeconds()).toBe(0)
    })

    it('should parse HH:mm:ss format anchored to 2000-01-01', () => {
      const result = toDate('12:30:45')

      expect(result.getFullYear()).toBe(2000)
      expect(result.getMonth()).toBe(0)
      expect(result.getDate()).toBe(1)
      expect(result.getHours()).toBe(12)
      expect(result.getMinutes()).toBe(30)
      expect(result.getSeconds()).toBe(45)
    })
  })

  describe('Standard datetime and timezone suffixes', () => {
    it('should parse space-separated datetime strings YYYY-MM-DD HH:mm:ss', () => {
      const result = toDate('2024-03-10 09:15:25')

      expect(result.getFullYear()).toBe(2024)
      expect(result.getMonth()).toBe(2)
      expect(result.getDate()).toBe(10)
      expect(result.getHours()).toBe(9)
      expect(result.getMinutes()).toBe(15)
      expect(result.getSeconds()).toBe(25)
    })

    it('should handle ISO 8601 strings with uppercase or lowercase Z suffix', () => {
      const utcDate = toDate('2024-01-15T12:30:00Z')
      expect(Number.isNaN(utcDate.getTime())).toBe(false)
      expect(utcDate.toISOString()).toBe('2024-01-15T12:30:00.000Z')

      const lowercaseZDate = toDate('2024-01-15T12:30:00.500z')
      expect(lowercaseZDate.getUTCMilliseconds()).toBe(500)
      expect(lowercaseZDate.toISOString()).toBe('2024-01-15T12:30:00.500Z')
    })

    it('should handle explicit positive and negative timezone offsets', () => {
      const positiveOffsetDate = toDate('2024-01-15T15:30:00+03:00')
      expect(positiveOffsetDate.toISOString()).toBe('2024-01-15T12:30:00.000Z')

      const negativeOffsetDate = toDate('2024-01-15T07:30:00-05:00')
      expect(negativeOffsetDate.toISOString()).toBe('2024-01-15T12:30:00.000Z')

      const compactOffsetDate = toDate('2024-01-15T15:30:00+0300')
      expect(compactOffsetDate.toISOString()).toBe('2024-01-15T12:30:00.000Z')
    })

    it('should combine shorthand date/time formats with an explicit timezone suffix', () => {
      const compactWithUtc = toDate('20240115Z')
      expect(compactWithUtc.toISOString()).toBe('2024-01-15T00:00:00.000Z')

      const timeWithUtc = toDate('14:45Z')
      expect(timeWithUtc.toISOString()).toBe('2000-01-01T14:45:00.000Z')
    })
  })

  describe('Invalid and empty string inputs', () => {
    it('should return an Invalid Date for empty or malformed strings', () => {
      expect(Number.isNaN(toDate('').getTime())).toBe(true)
      expect(Number.isNaN(toDate('   ').getTime())).toBe(true)
      expect(Number.isNaN(toDate('not-a-valid-date').getTime())).toBe(true)
    })
  })
})
