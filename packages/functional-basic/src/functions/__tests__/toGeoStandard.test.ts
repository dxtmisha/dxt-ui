import { describe, it, expect } from 'vitest'
import { toGeoStandard } from '../toGeoStandard'
import { type GeoItem } from '../../types/geoTypes'

describe('toGeoStandard', () => {
  const mockItem: GeoItem = {
    country: 'VN',
    language: 'vi'
  }

  const mockItemUs: GeoItem = {
    country: 'US',
    language: 'en'
  }

  it('converts a geo item to standard language-country format', () => {
    expect(toGeoStandard(mockItem)).toBe('vi-VN')
    expect(toGeoStandard(mockItemUs)).toBe('en-US')
  })

  it('allows overriding language with a valid language code', () => {
    expect(toGeoStandard(mockItem, 'en')).toBe('en-VN')
    expect(toGeoStandard(mockItem, 'ru')).toBe('ru-VN')
  })

  it('falls back to item language when override language is invalid', () => {
    expect(toGeoStandard(mockItem, 'zz')).toBe('vi-VN')
    expect(toGeoStandard(mockItem, '')).toBe('vi-VN')
    expect(toGeoStandard(mockItem, undefined)).toBe('vi-VN')
  })

  it('resolves alternative language codes in override (e.g. ua -> uk)', () => {
    expect(toGeoStandard(mockItemUs, 'ua')).toBe('uk-US')
  })

  describe('raw parameter', () => {
    it('uses raw language directly without normalization when raw is true', () => {
      expect(toGeoStandard(mockItem, 'custom-lang', true)).toBe('custom-lang-VN')
      expect(toGeoStandard(mockItemUs, 'cmn', true)).toBe('cmn-US')
      expect(toGeoStandard(mockItemUs, 'ua', true)).toBe('ua-US')
    })

    it('falls back to item language when language is empty even if raw is true', () => {
      expect(toGeoStandard(mockItem, '', true)).toBe('vi-VN')
      expect(toGeoStandard(mockItem, undefined, true)).toBe('vi-VN')
    })
  })

  describe('Nullish and boundary inputs', () => {
    it('returns empty string when item is undefined or null', () => {
      expect(toGeoStandard(undefined)).toBe('')
      expect(toGeoStandard(null as unknown as GeoItem)).toBe('')
    })
  })
})
