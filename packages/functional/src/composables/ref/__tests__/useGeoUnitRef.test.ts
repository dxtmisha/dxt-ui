/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi } from 'vitest'
import { useGeoUnitRef } from '../useGeoUnitRef'
import { GeoUnitRef } from '../../../classes/ref/GeoUnitRef'

// Mock GeoRef and functional-basic to prevent environment issues
vi.mock('../../../classes/ref/GeoRef', () => ({
  GeoRef: {
    getLanguage: () => ({ value: 'en-US' }),
    getLocation: () => ({ value: 'en-US' })
  }
}))

vi.mock('@dxtmisha/functional-basic', () => ({
  Geo: {
    get: () => ({ country: 'US', language: 'en', standard: 'en-US', firstDay: '1' }),
    find: (code: string) => ({ country: code.includes('RU') ? 'RU' : 'US', language: 'en', standard: code, firstDay: '1' }),
    getLocation: () => 'en-US'
  },
  GeoUnit: class {
    constructor(public locale: string) {}
    gram(value: any) { return `formatted-gram-${value}` }
  }
}))

describe('useGeoUnitRef', () => {
  it('should return a new instance of GeoUnitRef', () => {
    const geoUnit = useGeoUnitRef()
    expect(geoUnit).toBeInstanceOf(GeoUnitRef)
  })

  it('should be able to format a unit (via mocked GeoUnit)', () => {
    const geoUnit = useGeoUnitRef()
    const formatted = geoUnit.gram(123)
    expect(formatted.value).toBe('formatted-gram-123')
  })
})
