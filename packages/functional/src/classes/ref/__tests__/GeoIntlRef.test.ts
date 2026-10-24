// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { ServerStorage } from '@dxtmisha/functional-basic'
import { GeoRef } from '../GeoRef'
import { GeoIntlRef } from '../GeoIntlRef'
import { computed, ref, nextTick } from 'vue'

beforeEach(() => {
  const context: Record<string, unknown> = {}
  ServerStorage.reset()
  ServerStorage.init(() => context)
})

afterEach(() => {
  vi.useRealTimers()
  ServerStorage.reset()
})

describe('GeoIntlRef', () => {
  let geoIntlRef: GeoIntlRef
  const locale = 'en-US'

  beforeEach(() => {
    geoIntlRef = new GeoIntlRef(locale)
  })

  describe('initialization and reactivity', () => {
    it('initializes correctly with a string locale', () => {
      expect(geoIntlRef.number(1000).value).toBe('1,000')
    })

    it('updates when the locale ref changes', async () => {
      const codeRef = ref('en-US')
      const formatter = new GeoIntlRef(codeRef)
      expect(formatter.number(1000).value).toBe('1,000')

      codeRef.value = 'ru-RU'
      await nextTick()

      // Should update a format to Russian (space-like separator)
      expect(formatter.number(1000).value).toBe(new Intl.NumberFormat('ru-RU').format(1000))
    })
  })

  describe('Display Names', () => {
    it('display returns translated names', () => {
      expect(geoIntlRef.display('en-US', 'language').value).toBe('American English')
    })

    it('languageName returns language display name', () => {
      expect(geoIntlRef.languageName('ru').value).toBe('Russian')
    })

    it('countryName returns region display name', () => {
      expect(geoIntlRef.countryName('US').value).toBe('United States')
    })
  })

  describe('Number Formatting', () => {
    it('number formats numbers correctly', () => {
      expect(geoIntlRef.number(1234.56).value).toBe('1,234.56')
    })

    it('decimal returns decimal separator', () => {
      expect(geoIntlRef.decimal().value).toBe('.')
    })

    it('percent formats percentage', () => {
      expect(geoIntlRef.percent(0.25).value).toBe('25%')
    })

    it('percentBy100 formats percentage (value / 100 as per GeoIntl logic)', () => {
      expect(geoIntlRef.percentBy100(25).value).toBe('25%')
    })

    it('plural returns correct word form', () => {
      const words = 'apple|apples'
      expect(geoIntlRef.plural(1, words).value).toBe('1 apple')
      expect(geoIntlRef.plural(5, words).value).toBe('5 apples')
    })
  })

  describe('Currency & Units', () => {
    it('currency formats money', () => {
      expect(geoIntlRef.currency(10, 'USD').value).toContain('$10.00')
    })

    it('currencySymbol returns symbol', () => {
      expect(geoIntlRef.currencySymbol('USD').value).toBe('$')
    })

    it('unit formats with units', () => {
      expect(geoIntlRef.unit(50, 'celsius').value).toContain('50°C')
    })

    it('sizeFile formats file sizes with > 1024 transition', () => {
      expect(geoIntlRef.sizeFile(1024, 'byte').value).toContain('1,024 byte')
      expect(geoIntlRef.sizeFile(1025, 'byte').value).toContain('1 kB')
    })
  })

  describe('Date & Time', () => {
    const date = new Date(2025, 2, 7, 15, 30, 0) // Mar 7, 2025

    it('date formats dates', () => {
      expect(geoIntlRef.date(date).value).toBe('Mar 07, 2025')
    })

    it('time formats time', () => {
      expect(geoIntlRef.time(date).value).toContain('3:30')
    })

    it('month returns month name', () => {
      expect(geoIntlRef.month(date).value).toBe('March')
    })

    it('months returns list of month names', () => {
      const list = geoIntlRef.months().value
      expect(list).toHaveLength(13)
      expect(list[3]?.label).toBe('March')
    })

    it('weekday returns weekday name', () => {
      expect(geoIntlRef.weekday(date).value).toBe('Friday')
    })

    it('weekdays returns list of weekday names', () => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date(2025, 2, 7)) // Friday
      const list = geoIntlRef.weekdays().value
      expect(list.some(item => item.label === 'Friday')).toBe(true)
      vi.useRealTimers()
    })
  })

  describe('Relative Time', () => {
    it('relative formats relative time', () => {
      const now = new Date(2025, 0, 1)
      const future = new Date(2025, 0, 3)
      expect(geoIntlRef.relative(future, undefined, now).value).toBe('in 2 days')
    })

    it('relativeByValue formats by unit', () => {
      expect(geoIntlRef.relativeByValue(-5, 'minute').value).toBe('5 minutes ago')
    })
  })

  describe('Others', () => {
    it('sort sorts strings by locale', () => {
      const data = ['b', 'a', 'c']
      const sorted = geoIntlRef.sort(data).value
      expect(sorted).toEqual(['a', 'b', 'c'])
    })
  })
})

describe('GeoIntlRef boundaries and saved computed values', () => {
  it.each([0, -12.5, '1234.5', NaN, Infinity, -Infinity])('formats the numeric input %j', (value) => {
    const formatter = new GeoIntlRef('en-US')
    expect(formatter.number(value).value).toBe(new Intl.NumberFormat('en-US').format(Number.isFinite(Number(value)) ? Number(value) : 0))
  })

  it('updates a saved number for both computed input and locale changes', () => {
    const source = ref(10)
    const code = ref('en-US')
    const formatted = new GeoIntlRef(code).number(computed(() => source.value * 2))
    expect(formatted.value).toBe('20')
    source.value = 1234.5
    expect(formatted.value).toBe('2,469')
    code.value = 'vi-VN'
    expect(formatted.value).toBe(new Intl.NumberFormat('vi-VN').format(2469))
  })

  it('tracks currency options and symbols independently from numeric input', () => {
    const options = ref<string | Intl.NumberFormatOptions>('USD')
    const currency = ref('USD')
    const formatter = new GeoIntlRef('en-US')
    const amount = formatter.currency(0, options)
    const symbol = formatter.currencySymbol(currency)
    expect(amount.value).toBe('$0.00')
    expect(symbol.value).toBe('$')
    options.value = { currency: 'EUR', minimumFractionDigits: 1 }
    currency.value = 'EUR'
    expect(amount.value).toBe('€0.0')
    expect(symbol.value).toBe('€')
    expect(formatter.currency(0, 'USD', true).value).toBe('0.00')
  })

  it('reacts to display-name inputs with Unicode translations', () => {
    const language = ref('ru')
    const formatter = new GeoIntlRef('vi-VN')
    const name = formatter.languageName(language)
    expect(name.value).toBe(new Intl.DisplayNames('vi-VN', { type: 'language' }).of('ru'))
    language.value = 'vi'
    expect(name.value).toBe(new Intl.DisplayNames('vi-VN', { type: 'language' }).of('vi'))
  })

  it.each([-3, -2, 0, 2, 3])('switches relative formatting at the inclusive day limit for offset %i', (offset) => {
    const today = new Date(2025, 0, 10, 12)
    const date = new Date(2025, 0, 10 + offset, 12)
    const formatter = new GeoIntlRef('en-US')
    const expected = Math.abs(offset) <= 2
      ? formatter.relative(date, { numeric: 'always' }, today).value
      : formatter.date(date, 'date', 'long').value
    expect(formatter.relativeLimit(date, 2, today, { numeric: 'always' }, 'long', 'date').value).toBe(expected)
  })

  it('updates saved relative and calendar values after a date ref changes', () => {
    const date = ref(new Date(2025, 0, 10, 12))
    const today = new Date(2025, 0, 10, 12)
    const formatter = new GeoIntlRef('en-US')
    const relative = formatter.relativeLimit(date, 2, today)
    const month = formatter.month(date)
    const weekday = formatter.weekday(date)
    const time = formatter.time(date)
    expect(relative.value).toBe('now')
    date.value = new Date(2025, 1, 3, 15, 30)
    expect(relative.value).toBe(formatter.date(date.value).value)
    expect(month.value).toBe('February')
    expect(weekday.value).toBe('Monday')
    expect(time.value).toContain('3:30')
  })

  it('provides placeholder entries and complete month and weekday values', () => {
    const formatter = new GeoIntlRef('en-GB')
    const months = formatter.months('short').value
    const weekdays = formatter.weekdays('short').value
    expect(months[0]).toEqual({ label: '', value: undefined })
    expect(months.slice(1).map(item => item.value)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    expect(weekdays[0]).toEqual({ label: '', value: undefined })
    expect(weekdays.slice(1).map(item => item.value)).toEqual([1, 2, 3, 4, 5, 6, 0])
  })

  it('sorts object arrays without mutating input and reacts to replacement arrays', () => {
    const source = ref([{ label: 'Привет' }, { label: 'café' }, { label: 'tiếng Việt' }, { label: '🚀' }])
    const original = [...source.value]
    const formatter = new GeoIntlRef('en-US')
    const sorted = formatter.sort(source, (first, second) => [first.label, second.label])
    expect(sorted.value).toEqual([...original].sort((first, second) => new Intl.Collator('en-US').compare(first.label, second.label)))
    expect(source.value).toEqual(original)
    source.value = []
    expect(sorted.value).toEqual([])
  })

  it('uses reactive GeoRef fallback while preserving explicitly configured locales', () => {
    GeoRef.set('en-US')
    const fallback = new GeoIntlRef().number(1234.5)
    const explicit = new GeoIntlRef('en-US').number(1234.5)
    expect(fallback.value).toBe('1,234.5')
    GeoRef.set('vi-VN')
    expect(fallback.value).toBe(new Intl.NumberFormat('vi-VN').format(1234.5))
    expect(explicit.value).toBe('1,234.5')
  })
})
