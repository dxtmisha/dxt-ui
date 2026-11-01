import { describe, it, expect } from 'vitest'
import { toGeoItemFull } from '../toGeoItemFull'
import { type GeoItem } from '../../types/geoTypes'

describe('toGeoItemFull', () => {
  const mockItemVn: GeoItem = {
    country: 'VN',
    language: 'vi',
    firstDay: 'Mo'
  }

  const mockItemWithoutFirstDay: GeoItem = {
    country: 'US',
    language: 'en'
  }

  it('transforms basic GeoItem into GeoItemFull with standard format and defaults', () => {
    const full = toGeoItemFull(mockItemVn)

    expect(full.country).toBe('VN')
    expect(full.language).toBe('vi')
    expect(full.firstDay).toBe('Mo')
    expect(full.standard).toBe('vi-VN')
    expect(full.location).toBe('vi-VN')
    expect(full.locationCountry).toBe('VN')
    expect(full.locationLanguage).toBe('vi')
  })

  it('falls back to default first day (Mo) if item.firstDay is missing', () => {
    const full = toGeoItemFull(mockItemWithoutFirstDay)

    expect(full.firstDay).toBe('Mo')
  })

  it('populates location, locationCountry, and locationLanguage from provided code', () => {
    const full = toGeoItemFull(mockItemVn, 'en-VN')

    expect(full.standard).toBe('en-VN')
    expect(full.location).toBe('en-VN')
    expect(full.locationCountry).toBe('VN')
    expect(full.locationLanguage).toBe('en')
  })

  it('preserves valid underscore location code while computing canonical standard', () => {
    const full = toGeoItemFull(mockItemVn, 'vi_VN')

    expect(full.location).toBe('vi_VN')
    expect(full.standard).toBe('vi-VN')
  })

  it('falls back to item properties when code components cannot be extracted', () => {
    const full = toGeoItemFull(mockItemVn, 'invalid')

    expect(full.location).toBe('vi-VN')
    expect(full.locationCountry).toBe('VN')
    expect(full.locationLanguage).toBe('vi')
    expect(full.standard).toBe('vi-VN')
  })
})
