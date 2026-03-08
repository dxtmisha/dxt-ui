/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi } from 'vitest'
import { useGeoIntlRef } from '../useGeoIntlRef'
import { GeoIntlRef } from '../../../classes/ref/GeoIntlRef'

// Mock GeoRef and functional-basic to prevent environment issues
vi.mock('../../../classes/ref/GeoRef', () => ({
  GeoRef: {
    getLanguage: () => ({ value: 'en-US' })
  }
}))

vi.mock('@dxtmisha/functional-basic', () => ({
  Geo: {
    get: () => ({ country: 'US', language: 'en', standard: 'en-US', firstDay: '1' })
  },
  GeoIntl: class {
    constructor(public locale: string) {}
    number(value: any) { return `formatted-${value}` }
  }
}))

describe('useGeoIntlRef', () => {
  it('should return a new instance of GeoIntlRef', () => {
    const geoIntl = useGeoIntlRef()
    expect(geoIntl).toBeInstanceOf(GeoIntlRef)
  })

  it('should be able to format a number (via mocked GeoIntl)', () => {
    const geoIntl = useGeoIntlRef()
    const formatted = geoIntl.number(123)
    expect(formatted.value).toBe('formatted-123')
  })
})
