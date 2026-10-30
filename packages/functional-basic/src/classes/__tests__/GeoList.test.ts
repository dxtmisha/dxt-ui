/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach } from 'vitest'
import { geo } from '@dxtmisha/media'
import { GeoList } from '../GeoList'

describe('GeoList', () => {
  beforeEach(() => {
    GeoList.reset()
  })

  describe('get', () => {
    it('returns a non-empty array of geo items', () => {
      const list = GeoList.get()
      expect(Array.isArray(list)).toBe(true)
      expect(list.length).toBeGreaterThan(0)
    })

    it('returns the same cached instance across multiple calls', () => {
      const first = GeoList.get()
      const second = GeoList.get()
      expect(first).toBe(second)
    })

    it('creates an absolute deep copy independent from original media geo', () => {
      const list = GeoList.get()
      const firstItem = list[0]
      const originalItem = geo[0]

      expect(firstItem).not.toBe(originalItem)
      expect(firstItem).toEqual(originalItem)

      if (firstItem.unit) {
        expect(firstItem.unit).not.toBe(originalItem.unit)
        expect(firstItem.unit).toEqual(originalItem.unit)
      }
    })
  })

  describe('getByCodeFull', () => {
    it('finds item by language-country code', () => {
      const item = GeoList.getByCodeFull('en-US')
      expect(item).toBeDefined()
      expect(item?.country).toBe('US')
      expect(item?.language).toBe('en')
    })

    it('finds item by reversed country-language code', () => {
      const item = GeoList.getByCodeFull('RU-ru')
      expect(item).toBeDefined()
      expect(item?.country).toBe('RU')
      expect(item?.language).toBe('ru')
    })

    it('returns undefined for invalid format, length, separator, or undefined/null', () => {
      expect(GeoList.getByCodeFull(undefined)).toBeUndefined()
      expect(GeoList.getByCodeFull('')).toBeUndefined()
      expect(GeoList.getByCodeFull('invalid')).toBeUndefined()
      expect(GeoList.getByCodeFull('en_US')).toBeUndefined()
      expect(GeoList.getByCodeFull('xx-YY')).toBeUndefined()
      expect(GeoList.getByCodeFull('toolong-code')).toBeUndefined()
    })

    it('returns undefined immediately when list is empty', () => {
      const list = GeoList.get()
      list.length = 0
      expect(GeoList.getByCodeFull('en-US')).toBeUndefined()
    })
  })

  describe('getByCountry', () => {
    it('finds item by primary uppercase country code', () => {
      const item = GeoList.getByCountry('US')
      expect(item).toBeDefined()
      expect(item?.country).toBe('US')
    })

    it('finds item by countryAlternative code', () => {
      const item = GeoList.getByCountry('UK')
      expect(item).toBeDefined()
      expect(item?.country).toBe('GB')
    })

    it('returns undefined for undefined, empty string or unknown country', () => {
      expect(GeoList.getByCountry(undefined)).toBeUndefined()
      expect(GeoList.getByCountry('')).toBeUndefined()
      expect(GeoList.getByCountry('UNKNOWN')).toBeUndefined()
    })

    it('returns undefined immediately when list is empty', () => {
      const list = GeoList.get()
      list.length = 0
      expect(GeoList.getByCountry('US')).toBeUndefined()
    })
  })

  describe('getByLanguage', () => {
    it('finds item by primary lowercase language code', () => {
      const item = GeoList.getByLanguage('fr')
      expect(item).toBeDefined()
      expect(item?.language).toBe('fr')
    })

    it('finds item by languageAlternative code', () => {
      const item = GeoList.getByLanguage('us')
      expect(item).toBeDefined()
      expect(item?.country).toBe('US')
    })

    it('returns undefined for undefined, empty string or unknown language', () => {
      expect(GeoList.getByLanguage(undefined)).toBeUndefined()
      expect(GeoList.getByLanguage('')).toBeUndefined()
      expect(GeoList.getByLanguage('unknown')).toBeUndefined()
    })

    it('returns undefined immediately when list is empty', () => {
      const list = GeoList.get()
      list.length = 0
      expect(GeoList.getByLanguage('fr')).toBeUndefined()
    })
  })

  describe('add and addList', () => {
    it('creates a new country entry with default values when item is omitted or minimal', () => {
      const item = GeoList.add('ZZ')
      expect(item.country).toBe('ZZ')
      expect(item.language).toBe('en')
    })

    it('creates a new country entry when country does not exist', () => {
      GeoList.add('ZZ', {
        language: 'zz',
        firstDay: 'Su',
        phoneCode: '999'
      })

      const item = GeoList.getByCountry('ZZ')
      expect(item).toBeDefined()
      expect(item?.country).toBe('ZZ')
      expect(item?.language).toBe('zz')
      expect(item?.firstDay).toBe('Su')
      expect(item?.phoneCode).toBe('999')
    })

    it('merges updates into an existing country entry and preserves country key', () => {
      GeoList.add('US', {
        firstDay: 'Mo',
        phoneWithin: '9',
        // Attempting to override country in partial item must be ignored
        country: 'USA'
      })

      const item = GeoList.getByCountry('US')
      expect(item).toBeDefined()
      expect(item?.firstDay).toBe('Mo')
      expect(item?.phoneWithin).toBe('9')
      expect(item?.country).toBe('US')
    })

    it('deep-merges unit properties without wiping existing units', () => {
      const originalKilometer = GeoList.getByCountry('US')?.unit?.kilometer

      GeoList.add('US', {
        unit: {
          meter: 'm_custom'
        }
      })

      const item = GeoList.getByCountry('US')
      expect(item?.unit?.meter).toBe('m_custom')
      expect(item?.unit?.kilometer).toBe(originalKilometer)
    })

    it('handles addList safely with undefined or empty parameter', () => {
      expect(() => GeoList.addList(undefined)).not.toThrow()
      expect(() => GeoList.addList({})).not.toThrow()
    })

    it('addList merges multiple country configurations', () => {
      GeoList.addList({
        XX: { language: 'xx', phoneCode: '111' },
        YY: { language: 'yy', phoneCode: '222' }
      })

      expect(GeoList.getByCountry('XX')?.phoneCode).toBe('111')
      expect(GeoList.getByCountry('YY')?.phoneCode).toBe('222')
    })

    it('getUnit returns empty object when neither current nor override has units', () => {
      // @ts-expect-error accessing protected method for testing
      expect(GeoList.getUnit(undefined, undefined)).toEqual({})
    })

    it('getUnit correctly merges units into a unit object when one or both are provided', () => {
      // @ts-expect-error accessing protected method for testing
      expect(GeoList.getUnit({ meter: 'm' }, undefined)).toEqual({ unit: { meter: 'm' } })
      // @ts-expect-error accessing protected method for testing
      expect(GeoList.getUnit(undefined, { kilometer: 'km' })).toEqual({ unit: { kilometer: 'km' } })
      // @ts-expect-error accessing protected method for testing
      expect(GeoList.getUnit({ meter: 'm', kilometer: 'mile' }, { kilometer: 'km' })).toEqual({
        unit: {
          meter: 'm',
          kilometer: 'km'
        }
      })
    })

    it('getIndex returns the correct index for existing country and -1 for missing, undefined or empty', () => {
      // @ts-expect-error accessing protected method for testing
      const indexUs = GeoList.getIndex('US')
      expect(indexUs).toBeGreaterThanOrEqual(0)
      expect(GeoList.get()[indexUs].country).toBe('US')

      // @ts-expect-error accessing protected method for testing
      expect(GeoList.getIndex('NONEXISTENT_CODE')).toBe(-1)
      // @ts-expect-error accessing protected method for testing
      expect(GeoList.getIndex('')).toBe(-1)
      // @ts-expect-error accessing protected method for testing
      expect(GeoList.getIndex(undefined)).toBe(-1)
    })

    it('getIndex returns -1 immediately when list is empty', () => {
      const list = GeoList.get()
      list.length = 0
      // @ts-expect-error accessing protected method for testing
      expect(GeoList.getIndex('US')).toBe(-1)
    })

    it('add returns the added or updated GeoItem directly', () => {
      const added = GeoList.add('AA', {
        language: 'aa',
        phoneCode: '123'
      })
      expect(added.country).toBe('AA')
      expect(added.language).toBe('aa')
      expect(added.phoneCode).toBe('123')

      const updated = GeoList.add('AA', {
        phoneCode: '456'
      })
      expect(updated.country).toBe('AA')
      expect(updated.phoneCode).toBe('456')
    })
  })

  describe('reset', () => {
    it('resets modifications and creates fresh copy on next get()', () => {
      GeoList.add('NEW', { language: 'nw' })
      expect(GeoList.getByCountry('NEW')).toBeDefined()

      GeoList.reset()
      expect(GeoList.getByCountry('NEW')).toBeUndefined()
    })
  })
})
