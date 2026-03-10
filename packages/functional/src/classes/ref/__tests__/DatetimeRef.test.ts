import { describe, it, expect, beforeEach } from 'vitest'
import { DatetimeRef } from '../DatetimeRef'
import { ref, nextTick } from 'vue'

describe('DatetimeRef', () => {
  const dateStr = '2023-10-27T10:20:30'
  let datetimeRef: DatetimeRef

  beforeEach(() => {
    datetimeRef = new DatetimeRef(dateStr, 'datetime', 'en-US')
  })

  describe('initialization and reactivity', () => {
    it('initializes correctly with string', () => {
      expect(datetimeRef.getYear().value).toBe(2023)
      // If the underlying Datetime class returns 1-indexed month, it will be 10 for October
      expect(datetimeRef.getMonth().value).toBe(10)
      expect(datetimeRef.getDay().value).toBe(27)
    })

    it('updates when the input ref changes', async () => {
      const dateRef = ref(dateStr)
      const dr = new DatetimeRef(dateRef)
      expect(dr.getYear().value).toBe(2023)

      dateRef.value = '2024-01-01'
      await nextTick()

      expect(dr.getYear().value).toBe(2024)
      expect(dr.getMonth().value).toBe(1) // Jan is 1 if 1-indexed
      expect(dr.getDay().value).toBe(1)
    })
  })

  describe('Date Information Methods', () => {
    it('getItem returns the input ref/value', () => {
      expect(datetimeRef.getItem().value).toBe(dateStr)
    })

    it('getDate returns a `Ref<Date>`', () => {
      const date = datetimeRef.getDate().value
      expect(date).toBeInstanceOf(Date)
      expect(date.getFullYear()).toBe(2023)
    })

    it('getDatetime returns the underlying Datetime instance', () => {
      expect(datetimeRef.getDatetime()).toBeDefined()
    })

    it('getHoursType returns hours format', () => {
      expect(datetimeRef.getHoursType().value).toBeDefined()
    })

    it('getFirstDayCode returns first day of the week', () => {
      expect(datetimeRef.getFirstDayCode().value).toBeDefined()
    })

    it('getMaxDay returns max days in month', () => {
      expect(datetimeRef.getMaxDay().value).toBe(31) // Oct has 31 days
    })
  })

  describe('Date Components Accessors', () => {
    it('getYear returns the year', () => {
      expect(datetimeRef.getYear().value).toBe(2023)
    })

    it('getMonth returns the month', () => {
      expect(datetimeRef.getMonth().value).toBe(10)
    })

    it('getDay returns the day of month', () => {
      expect(datetimeRef.getDay().value).toBe(27)
    })

    it('getHour returns the hour', () => {
      expect(datetimeRef.getHour().value).toBe(10)
    })

    it('getMinute returns the minutes', () => {
      expect(datetimeRef.getMinute().value).toBe(20)
    })

    it('getSecond returns the seconds', () => {
      expect(datetimeRef.getSecond().value).toBe(30)
    })
  })

  describe('Formatting Methods', () => {
    it('locale returns a formatted string', () => {
      const formatted = datetimeRef.locale('date').value
      expect(typeof formatted).toBe('string')
      expect(formatted).toContain('2023')
    })

    it('standard returns an ISO-like string', () => {
      const standard = datetimeRef.standard().value
      expect(standard).toContain('2023-10-27')
    })
  })
})
