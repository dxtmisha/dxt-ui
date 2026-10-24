import { afterEach, assert, describe, it, expect, beforeEach } from 'vitest'
import { ServerStorage, type GeoDate } from '@dxtmisha/functional-basic'
import { DatetimeRef } from '../DatetimeRef'
import { effectScope, ref, nextTick, type EffectScope } from 'vue'

describe('DatetimeRef', () => {
  const dateStr = '2023-10-27T10:20:30'
  let datetimeRef: DatetimeRef
  let scope: EffectScope

  beforeEach(() => {
    const context: Record<string, unknown> = {}
    ServerStorage.reset()
    ServerStorage.init(() => context)
    scope = effectScope()
    scope.run(() => {
      datetimeRef = new DatetimeRef(dateStr, 'datetime', 'en-US')
    })
  })

  afterEach(() => {
    scope.stop()
    ServerStorage.reset()
  })

  describe('initialization and reactivity', () => {
    it('initializes correctly with string', () => {
      expect(datetimeRef.getYear().value).toBe(2023)
      expect(datetimeRef.getMonth().value).toBe(10)
      expect(datetimeRef.getDay().value).toBe(27)
    })

    it('updates when the input ref changes', async () => {
      const dateRef = ref(dateStr)
      const reactiveDatetime = scope.run(() => new DatetimeRef(dateRef))
      assert(reactiveDatetime)
      expect(reactiveDatetime.getYear().value).toBe(2023)

      dateRef.value = '2024-01-01'
      await nextTick()

      expect(reactiveDatetime.getYear().value).toBe(2024)
      expect(reactiveDatetime.getMonth().value).toBe(1)
      expect(reactiveDatetime.getDay().value).toBe(1)
    })
  })

  describe('Underlying Datetime mutations', () => {
    it.each([
      { method: 'setYear', value: 2024, expected: [2024, 10, 27, 10, 20, 30] },
      { method: 'setMonth', value: 2, expected: [2023, 2, 27, 10, 20, 30] },
      { method: 'setDay', value: 0, expected: [2023, 9, 30, 10, 20, 30] },
      { method: 'setHour', value: 0, expected: [2023, 10, 27, 0, 20, 30] },
      { method: 'setMinute', value: 0, expected: [2023, 10, 27, 10, 0, 30] },
      { method: 'setSecond', value: 0, expected: [2023, 10, 27, 10, 20, 0] }
    ] as const)('updates saved computed fields after $method', async ({ method, value, expected }) => {
      const parts = [
        datetimeRef.getYear(), datetimeRef.getMonth(), datetimeRef.getDay(),
        datetimeRef.getHour(), datetimeRef.getMinute(), datetimeRef.getSecond()
      ]
      const formatted = datetimeRef.standard(false)
      const initialFormat = formatted.value
      expect(parts.map(part => part.value)).toEqual([2023, 10, 27, 10, 20, 30])

      datetimeRef.getDatetime()[method](value)

      expect(parts.map(part => part.value)).toEqual(expected)
      expect(datetimeRef.getDate().value).toBe(datetimeRef.getDatetime().getDate())
      expect(formatted.value).not.toBe(initialFormat)
      await nextTick()
      expect(parts.map(part => part.value)).toEqual(expected)
    })

    it('synchronizes a complete Date replacement and subsequent mutations', async () => {
      const date = datetimeRef.getDate()
      const year = datetimeRef.getYear()
      const month = datetimeRef.getMonth()
      const day = datetimeRef.getDay()
      const maxDay = datetimeRef.getMaxDay()
      const formatted = datetimeRef.standard(false)
      expect([year.value, month.value, day.value, maxDay.value]).toEqual([2023, 10, 27, 31])
      const initialFormat = formatted.value
      const replacement = new Date(2024, 1, 29, 0, 0, 0)

      datetimeRef.getDatetime().setDate(replacement)

      expect(date.value).toBe(replacement)
      expect([year.value, month.value, day.value, maxDay.value]).toEqual([2024, 2, 29, 29])
      expect([datetimeRef.getHour().value, datetimeRef.getMinute().value, datetimeRef.getSecond().value])
        .toEqual([0, 0, 0])
      expect(formatted.value).not.toBe(initialFormat)
      await nextTick()
      expect(date.value).toBe(replacement)
      expect([year.value, month.value, day.value]).toEqual([2024, 2, 29])

      datetimeRef.getDatetime().setDay(1)
      expect(day.value).toBe(1)
      await nextTick()
      expect(day.value).toBe(1)
    })

    it('synchronizes a zero timestamp without treating it as absent', async () => {
      const year = datetimeRef.getYear()
      expect(year.value).toBe(2023)

      datetimeRef.getDatetime().setDate(0)

      const expected = new Date(0)
      expect(datetimeRef.getDate().value.getTime()).toBe(0)
      expect([
        year.value, datetimeRef.getMonth().value, datetimeRef.getDay().value,
        datetimeRef.getHour().value, datetimeRef.getMinute().value, datetimeRef.getSecond().value
      ]).toEqual([
        expected.getFullYear(), expected.getMonth() + 1, expected.getDate(),
        expected.getHours(), expected.getMinutes(), expected.getSeconds()
      ])
      await nextTick()
      expect(datetimeRef.getDate().value.getTime()).toBe(0)
    })

    it('continues to accept Date replacements through the exposed ref', async () => {
      const replacement = new Date(2025, 0, 15, 0, 0, 0)
      const year = datetimeRef.getYear()
      expect(year.value).toBe(2023)

      datetimeRef.getDate().value = replacement
      await nextTick()

      expect(datetimeRef.getDatetime().getDate()).toBe(replacement)
      expect(year.value).toBe(2025)
      expect(datetimeRef.getMonth().value).toBe(1)
      expect(datetimeRef.getDay().value).toBe(15)
      expect(datetimeRef.getHour().value).toBe(0)
    })
  })

  describe('Locale and format reactivity', () => {
    it('updates saved localized values when the code ref changes without replacing the date', async () => {
      const code = ref('en-US')
      const datetime = scope.run(() => new DatetimeRef(dateStr, 'date', code))
      assert(datetime)
      const date = datetime.getDate().value
      const formatted = datetime.locale()
      const hours = datetime.getHoursType()
      const firstDay = datetime.getFirstDayCode()
      const initialFormat = formatted.value
      expect([hours.value, firstDay.value]).toEqual(['12', 0])

      code.value = 'en-GB'
      await nextTick()

      expect(formatted.value).toBe(datetime.getDatetime().locale())
      expect(formatted.value).not.toBe(initialFormat)
      expect([hours.value, firstDay.value]).toEqual(['24', 1])
      expect(datetime.getDate().value).toBe(date)

      code.value = 'en-US'
      await nextTick()

      expect(formatted.value).toBe(initialFormat)
      expect([hours.value, firstDay.value]).toEqual(['12', 0])
      expect(datetime.getDate().value).toBe(date)
    })

    it('uses the current type ref for saved default formatting and preserves an explicit type', async () => {
      const type = ref<GeoDate>('date')
      const datetime = scope.run(() => new DatetimeRef(dateStr, type, 'en-US'))
      assert(datetime)
      const formatted = datetime.locale()
      const explicitDate = datetime.locale('date')
      const standard = datetime.standard(false)
      const initialFormat = formatted.value
      const initialStandard = standard.value
      expect(explicitDate.value).toBe(initialFormat)

      type.value = 'time'
      await nextTick()

      expect(formatted.value).toBe(datetime.getDatetime().locale())
      expect(formatted.value).not.toBe(initialFormat)
      expect(explicitDate.value).toBe(initialFormat)
      expect(standard.value).toBe(datetime.getDatetime().standard(false))
      expect(standard.value).not.toBe(initialStandard)
    })

    it('uses the current base type when it changes through getDatetime', () => {
      const formatted = datetimeRef.locale()
      const explicitDate = datetimeRef.locale('date')
      const initialFormat = formatted.value
      const initialDate = explicitDate.value

      datetimeRef.getDatetime().setType('time')

      expect(formatted.value).toBe(datetimeRef.getDatetime().locale())
      expect(formatted.value).not.toBe(initialFormat)
      expect(explicitDate.value).toBe(initialDate)
    })

    it('updates saved localized values when the base code changes through getDatetime', () => {
      const formatted = datetimeRef.locale('date')
      const hours = datetimeRef.getHoursType()
      const firstDay = datetimeRef.getFirstDayCode()
      const initialFormat = formatted.value
      expect([hours.value, firstDay.value]).toEqual(['12', 0])

      datetimeRef.getDatetime().setCode('en-GB')

      expect(formatted.value).toBe(datetimeRef.getDatetime().locale('date'))
      expect(formatted.value).not.toBe(initialFormat)
      expect([hours.value, firstDay.value]).toEqual(['24', 1])
    })

    it.each(['code-first', 'type-first'] as const)(
      'uses the latest code and type when both refs change (%s)',
      async (order) => {
        const code = ref('en-US')
        const type = ref<GeoDate>('date')
        const datetime = scope.run(() => new DatetimeRef(dateStr, type, code))
        assert(datetime)
        const formatted = datetime.locale()
        const explicitDate = datetime.locale('date')
        const hours = datetime.getHoursType()
        const firstDay = datetime.getFirstDayCode()
        const initialFormat = formatted.value
        expect(explicitDate.value).toBe(initialFormat)
        expect([hours.value, firstDay.value]).toEqual(['12', 0])

        if (order === 'code-first') {
          code.value = 'en-GB'
          type.value = 'time'
        } else {
          type.value = 'time'
          code.value = 'en-GB'
        }
        await nextTick()

        expect(formatted.value).toBe(datetime.getDatetime().locale())
        expect(formatted.value).not.toBe(initialFormat)
        expect(explicitDate.value).toBe(datetime.getDatetime().locale('date'))
        expect([hours.value, firstDay.value]).toEqual(['24', 1])
      }
    )
  })

  describe('Calendar boundaries and scope disposal', () => {
    it.each([
      [2023, 2, 28], [2024, 2, 29], [2024, 1, 31], [2024, 4, 30]
    ])('reports %i-%i with %i days', (year, month, days) => {
      datetimeRef.getDatetime().setDate(new Date(year, month - 1, 1))
      expect(datetimeRef.getMonth().value).toBe(month)
      expect(datetimeRef.getMaxDay().value).toBe(days)
    })

    it('stops input watchers when the owning effect scope stops', async () => {
      const source = ref('2024-01-01')
      const datetime = scope.run(() => new DatetimeRef(source, 'date', 'en-US'))
      assert(datetime)
      expect(datetime.getItem()).toBe(source)
      const date = datetime.getDate().value
      scope.stop()
      source.value = '2025-02-01'
      await nextTick()
      expect(datetime.getDate().value).toBe(date)
      expect(datetime.getYear().value).toBe(2024)
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
      expect(datetimeRef.getHoursType().value).toBe('12')
    })

    it('getFirstDayCode returns first day of the week', () => {
      expect(datetimeRef.getFirstDayCode().value).toBe(0)
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
