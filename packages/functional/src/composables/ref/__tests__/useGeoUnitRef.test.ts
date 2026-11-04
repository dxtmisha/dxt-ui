/**
 * @vitest-environment jsdom
 */

import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { useGeoUnitRef } from '../useGeoUnitRef'
import { GeoUnitRef } from '../../../classes/ref/GeoUnitRef'

const globalLocation = ref('en-US')

vi.mock('../../../classes/ref/GeoRef', () => ({
  GeoRef: {
    getLanguage: () => globalLocation,
    getLocation: () => globalLocation
  }
}))

vi.mock('@dxtmisha/functional-basic', () => ({
  Geo: {
    get: () => ({ country: 'US', language: 'en', standard: 'en-US', firstDay: '1' }),
    find: (code: string) => ({ country: code.includes('RU') ? 'RU' : 'US', language: 'en', standard: code, firstDay: '1' }),
    getLocation: () => globalLocation.value
  },
  GeoUnit: class {
    constructor(public locale: string) {}
    getLocation() {
      return this.locale
    }

    gram(value: unknown, options?: Intl.NumberFormatOptions) {
      return `${this.locale}:gram:${String(value)}:${options?.maximumFractionDigits ?? ''}`
    }

    meter(value: unknown) {
      return `${this.locale}:meter:${String(value)}`
    }

    celsius(value: unknown) {
      return `${this.locale}:celsius:${String(value)}`
    }

    format(value: unknown, unit: string) {
      return `${this.locale}:format:${String(value)}:${unit}`
    }
  }
}))

describe('useGeoUnitRef', () => {
  beforeEach(() => {
    globalLocation.value = 'en-US'
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return a new isolated instance of GeoUnitRef on each call', () => {
      const first = useGeoUnitRef()
      const second = useGeoUnitRef()

      expect(first).toBeInstanceOf(GeoUnitRef)
      expect(second).toBeInstanceOf(GeoUnitRef)
      expect(first).not.toBe(second)
    })

    it('should format a unit using the default global GeoRef locale', () => {
      const geoUnit = useGeoUnitRef()
      const formatted = geoUnit.gram(123, { maximumFractionDigits: 1 })

      expect(formatted.value).toBe('en-US:gram:123:1')
    })

    it('should accept an explicit static locale code', () => {
      const geoUnit = useGeoUnitRef('ru-RU')
      const formatted = geoUnit.meter(50)

      expect(formatted.value).toBe('ru-RU:meter:50')
      expect(geoUnit.getLocation().value).toBe('ru-RU')
    })
  })

  describe('Reactivity and dynamic locale updates', () => {
    it('should reactively update formatted units when a reactive locale ref changes', () => {
      const locale = ref('en-US')
      const geoUnit = useGeoUnitRef(locale)
      const formatted = geoUnit.celsius(25)

      expect(formatted.value).toBe('en-US:celsius:25')

      locale.value = 'vi-VN'
      expect(formatted.value).toBe('vi-VN:celsius:25')
    })

    it('should reactively update when value or unit refs change', () => {
      const value = ref<number | string>(10)
      const unit = ref('kilometer')
      const geoUnit = useGeoUnitRef('ru-RU')
      const formatted = geoUnit.format(value, unit)

      expect(formatted.value).toBe('ru-RU:format:10:kilometer')

      value.value = 25
      unit.value = 'liter'
      expect(formatted.value).toBe('ru-RU:format:25:liter')
    })

    it('should fall back to global GeoRef location when explicit locale ref becomes undefined', () => {
      const locale = ref<string | undefined>('de-DE')
      const geoUnit = useGeoUnitRef(locale)

      expect(geoUnit.getLocation().value).toBe('de-DE')

      locale.value = undefined
      expect(geoUnit.getLocation().value).toBe('en-US')

      globalLocation.value = 'ru-RU'
      expect(geoUnit.getLocation().value).toBe('ru-RU')
    })
  })

  describe('Boundary values and special numeric inputs', () => {
    it.each([0, -1, -273.15, '0', ''] as const)('should handle boundary value %s without errors', (value) => {
      const geoUnit = useGeoUnitRef('en-US')
      const formatted = geoUnit.celsius(value)

      expect(formatted.value).toBe(`en-US:celsius:${String(value)}`)
    })
  })
})
