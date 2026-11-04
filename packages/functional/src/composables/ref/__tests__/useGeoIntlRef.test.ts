/**
 * @vitest-environment jsdom
 */

import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { useGeoIntlRef } from '../useGeoIntlRef'
import { GeoIntlRef } from '../../../classes/ref/GeoIntlRef'

const globalLocation = ref('en-US')

vi.mock('../../../classes/ref/GeoRef', () => ({
  GeoRef: {
    getLanguage: () => globalLocation,
    getLocation: () => globalLocation
  }
}))

vi.mock('@dxtmisha/functional-basic', () => ({
  Geo: {
    get: () => ({ country: 'US', language: 'en', standard: 'en-US', firstDay: '1' })
  },
  GeoIntl: class {
    constructor(public locale: string) {}
    number(value: unknown, options?: Intl.NumberFormatOptions) {
      return `${this.locale}:number:${String(value)}:${options?.minimumFractionDigits ?? ''}`
    }

    currency(value: unknown, currencyCode?: string | Intl.NumberFormatOptions, numberOnly?: boolean) {
      const code = typeof currencyCode === 'string' ? currencyCode : currencyCode?.currency ?? 'USD'
      return `${this.locale}:currency:${String(value)}:${code}:${Boolean(numberOnly)}`
    }

    percent(value: unknown) {
      return `${this.locale}:percent:${String(value)}`
    }

    date(value: unknown, type?: string) {
      return `${this.locale}:date:${String(value)}:${type ?? 'date'}`
    }
  }
}))

describe('useGeoIntlRef', () => {
  beforeEach(() => {
    globalLocation.value = 'en-US'
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return a new isolated instance of GeoIntlRef on each call', () => {
      const first = useGeoIntlRef()
      const second = useGeoIntlRef()

      expect(first).toBeInstanceOf(GeoIntlRef)
      expect(second).toBeInstanceOf(GeoIntlRef)
      expect(first).not.toBe(second)
    })

    it('should format numbers using the default global GeoRef locale', () => {
      const geoIntl = useGeoIntlRef()
      const formatted = geoIntl.number(123, { minimumFractionDigits: 2 })

      expect(formatted.value).toBe('en-US:number:123:2')
    })

    it('should accept an explicit static locale code', () => {
      const geoIntl = useGeoIntlRef('ru-RU')
      const formatted = geoIntl.currency(1000, 'RUB')

      expect(formatted.value).toBe('ru-RU:currency:1000:RUB:false')
    })
  })

  describe('Reactivity and dynamic locale updates', () => {
    it('should reactively update formatted outputs when a reactive locale ref changes', () => {
      const locale = ref('en-US')
      const geoIntl = useGeoIntlRef(locale)
      const formatted = geoIntl.number(500)

      expect(formatted.value).toBe('en-US:number:500:')

      locale.value = 'vi-VN'
      expect(formatted.value).toBe('vi-VN:number:500:')
    })

    it('should reactively update when the input value ref changes', () => {
      const amount = ref<number | string>(42)
      const geoIntl = useGeoIntlRef('de-DE')
      const formatted = geoIntl.percent(amount)

      expect(formatted.value).toBe('de-DE:percent:42')

      amount.value = 85
      expect(formatted.value).toBe('de-DE:percent:85')
    })

    it('should fall back to global GeoRef location when explicit locale ref becomes undefined', () => {
      const locale = ref<string | undefined>('fr-FR')
      const geoIntl = useGeoIntlRef(locale)
      const formatted = geoIntl.date('2026-11-04', 'datetime')

      expect(formatted.value).toBe('fr-FR:date:2026-11-04:datetime')

      locale.value = undefined
      expect(formatted.value).toBe('en-US:date:2026-11-04:datetime')

      globalLocation.value = 'ru-RU'
      expect(formatted.value).toBe('ru-RU:date:2026-11-04:datetime')
    })
  })

  describe('Boundary values and special numeric inputs', () => {
    it.each([0, -1, -42.5, '0', ''] as const)('should handle boundary value %s without errors', (value) => {
      const geoIntl = useGeoIntlRef('en-US')
      const formatted = geoIntl.number(value)

      expect(formatted.value).toBe(`en-US:number:${String(value)}:`)
    })
  })
})
