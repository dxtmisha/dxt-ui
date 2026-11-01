import { describe, it, expect, beforeEach } from 'vitest'
import { GeoList } from '../../classes/GeoList'
import { toGeoItem } from '../toGeoItem'

describe('toGeoItem', () => {
  beforeEach(() => {
    GeoList.reset()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('returns GeoItem for full language-country codes (e.g. en-US, RU-ru)', () => {
      const itemUs = toGeoItem('en-US')
      expect(itemUs).toBeDefined()
      expect(itemUs?.country).toBe('US')
      expect(itemUs?.language).toBe('en')

      const itemRuReversed = toGeoItem('RU-ru')
      expect(itemRuReversed).toBeDefined()
      expect(itemRuReversed?.country).toBe('RU')
      expect(itemRuReversed?.language).toBe('ru')
    })

    it('returns GeoItem by 2-letter country code', () => {
      const itemVn = toGeoItem('VN')
      expect(itemVn).toBeDefined()
      expect(itemVn?.country).toBe('VN')
      expect(itemVn?.language).toBe('vi')

      const itemDe = toGeoItem('DE')
      expect(itemDe).toBeDefined()
      expect(itemDe?.country).toBe('DE')
      expect(itemDe?.language).toBe('de')
    })

    it('returns GeoItem by language code', () => {
      const itemRu = toGeoItem('ru')
      expect(itemRu).toBeDefined()
      expect(itemRu?.country).toBe('RU')
      expect(itemRu?.language).toBe('ru')

      const itemVi = toGeoItem('vi')
      expect(itemVi).toBeDefined()
      expect(itemVi?.country).toBe('VN')
      expect(itemVi?.language).toBe('vi')
    })
  })

  describe('Alternative and extended locale codes', () => {
    it('returns GeoItem for alternative country codes (e.g. UK -> GB)', () => {
      const itemUk = toGeoItem('UK')
      expect(itemUk).toBeDefined()
      expect(itemUk?.country).toBe('GB')
    })

    it('returns GeoItem for underscore-separated and case-insensitive full codes', () => {
      const itemUsUnderscore = toGeoItem('en_US')
      expect(itemUsUnderscore).toBeDefined()
      expect(itemUsUnderscore?.country).toBe('US')

      const itemGbCase = toGeoItem('en-gb')
      expect(itemGbCase).toBeDefined()
      expect(itemGbCase?.country).toBe('GB')
    })

    it('returns GeoItem for BCP-47 locale tags', () => {
      const itemCjk = toGeoItem('zh-Hans-CN')
      expect(itemCjk).toBeDefined()
      expect(itemCjk?.country).toBe('CN')
    })
  })

  describe('Nullish, empty, and invalid inputs', () => {
    it('returns undefined for non-string values', () => {
      expect(toGeoItem(undefined)).toBeUndefined()
      expect(toGeoItem(null)).toBeUndefined()
      expect(toGeoItem(123)).toBeUndefined()
      expect(toGeoItem({})).toBeUndefined()
      expect(toGeoItem([])).toBeUndefined()
      expect(toGeoItem(true)).toBeUndefined()
    })

    it('returns undefined for empty and whitespace-only strings', () => {
      expect(toGeoItem('')).toBeUndefined()
      expect(toGeoItem('   ')).toBeUndefined()
    })

    it('returns undefined for unknown country or language tokens', () => {
      expect(toGeoItem('XYZ')).toBeUndefined()
      expect(toGeoItem('999')).toBeUndefined()
      expect(toGeoItem('unknown-token')).toBeUndefined()
    })
  })
})
