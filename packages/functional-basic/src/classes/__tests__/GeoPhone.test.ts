/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach } from 'vitest'
import { GeoPhone } from '../GeoPhone'
import { Geo } from '../Geo'
import { GeoList } from '../GeoList'
import { ServerStorage } from '../ServerStorage'

type GeoPhoneInternal = typeof GeoPhone & {
  list?: unknown[]
  map?: Record<string, unknown>
  getUnnecessaryLength: (mask: string) => number
  getWithinSymbol: (within?: string) => string
  removeZero: (phone: string) => string
  toMask: (phone: string, masks?: string[], isRemoveZero?: boolean) => string | undefined
  toNumber: (value: string) => string[]
  toStandard: (phone: string, mask: string) => string
  toWithin: (mask: string, within?: string) => string
}

const GeoPhoneProtected = GeoPhone as unknown as GeoPhoneInternal

describe('GeoPhone', () => {
  beforeEach(() => {
    ServerStorage.reset()
    ServerStorage.init(() => ({}))
    GeoList.reset()
    GeoPhoneProtected.list = undefined
    GeoPhoneProtected.map = undefined
  })

  describe('get', () => {
    it('should find phone data by country code', () => {
      const russiaData = GeoPhone.get('RU')
      expect(russiaData).toBeDefined()
      expect(russiaData?.value).toBe('RU')
      expect(russiaData?.phone).toBe(7)
      expect(russiaData?.within).toBe('8')
      expect(Array.isArray(russiaData?.mask)).toBe(true)

      const vietnamData = GeoPhone.get('VN')
      expect(vietnamData).toBeDefined()
      expect(vietnamData?.value).toBe('VN')
      expect(vietnamData?.phone).toBe(84)
    })

    it('should return undefined for invalid or empty country code', () => {
      expect(GeoPhone.get('INVALID')).toBeUndefined()
      expect(GeoPhone.get('')).toBeUndefined()
    })
  })

  describe('getByCode', () => {
    it('should return the map item for the given country code', () => {
      const mapInfo = GeoPhone.getByCode('RU')
      expect(mapInfo).toBeDefined()
      expect(mapInfo?.value).toBe('RU')
      expect(mapInfo?.info?.phone).toBe(7)
    })

    it('should apply "within" symbol "~" for RU (within=8)', () => {
      const mapInfo = GeoPhone.getByCode('RU')
      expect(mapInfo?.mask[0]?.includes('~')).toBe(true)
    })

    it('should apply "within" symbol "=" for DE (within=0)', () => {
      const mapInfo = GeoPhone.getByCode('DE')
      expect(mapInfo?.mask[0]?.includes('=')).toBe(true)
      expect(mapInfo?.items.filter(item => item.value === 'DE')).toHaveLength(1)
    })

    it('should apply "within" symbol "?" for HU (within=06)', () => {
      const mapInfo = GeoPhone.getByCode('HU')
      expect(mapInfo?.mask[0]?.includes('?')).toBe(true)
    })

    it('should retain default symbol "*" when country has no within (US)', () => {
      const mapInfo = GeoPhone.getByCode('US')
      expect(mapInfo?.mask[0]?.includes('*')).toBe(true)
    })

    it('should return undefined for unknown or empty code', () => {
      expect(GeoPhone.getByCode('INVALID')).toBeUndefined()
      expect(GeoPhone.getByCode('')).toBeUndefined()
    })
  })

  describe('getByPhone', () => {
    it('should recognize country code and the remaining phone string', () => {
      const matchCanada = GeoPhone.getByPhone('+14031234567')
      expect(matchCanada.item).toBeDefined()
      expect(matchCanada.item?.value).toBe('CA')
      expect(matchCanada.phone).toBe('1234567')

      const matchUnitedStates = GeoPhone.getByPhone('+14041234567')
      expect(matchUnitedStates.item).toBeDefined()
      expect(matchUnitedStates.item?.value).toBe('US')
      expect(matchUnitedStates.phone).toBe('4041234567')

      const matchRussia = GeoPhone.getByPhone('79991234567')
      expect(matchRussia.item).toBeDefined()
      expect(matchRussia.item?.value).toBe('RU')
      expect(matchRussia.phone).toBe('9991234567')
    })

    it('should find the most specific match (US vs Canada area codes)', () => {
      const canadaMatch = GeoPhone.getByPhone('14031234567')
      const unitedStatesMatch = GeoPhone.getByPhone('15551234567')

      expect(canadaMatch.item?.value).toBe('CA')
      expect(unitedStatesMatch.item?.value).toBe('US')
    })

    it('should parse an invalid, unknown, or empty phone gracefully', () => {
      const matchUnknown = GeoPhone.getByPhone('00099999999')
      expect(matchUnknown.item).toBeUndefined()
      expect(matchUnknown.phone).toBe('00099999999')

      const matchEmpty = GeoPhone.getByPhone('')
      expect(matchEmpty.item).toBeUndefined()
      expect(matchEmpty.phone).toBe('')

      const matchLetters = GeoPhone.getByPhone('abc-def')
      expect(matchLetters.item).toBeUndefined()
      expect(matchLetters.phone).toBe('')
    })
  })

  describe('getByPhoneFull', () => {
    it('should return full digits and formatted string alongside item and phone', () => {
      const matchRussia = GeoPhone.getByPhoneFull('+7 (999) 123-45-67')
      expect(matchRussia.item?.value).toBe('RU')
      expect(matchRussia.phone).toBe('9991234567')
      expect(matchRussia.full).toBe('79991234567')
      expect(matchRussia.format).toBe('+7-999-123-45-67')

      const matchCanada = GeoPhone.getByPhoneFull('+14031234567')
      expect(matchCanada.item?.value).toBe('CA')
      expect(matchCanada.phone).toBe('1234567')
      expect(matchCanada.full).toBe('14031234567')
      expect(matchCanada.format).toBe('+1-403-123-4567')

      const matchHungary = GeoPhone.getByPhoneFull('+3620123456')
      expect(matchHungary.item?.value).toBe('HU')
      expect(matchHungary.phone).toBe('20123456')
      expect(matchHungary.full).toBe('3620123456')
      expect(matchHungary.format).toBe('+36-2-012-3456')
    })

    it('should return original phone string in format when country or mask length does not match', () => {
      const matchUnknown = GeoPhone.getByPhoneFull('00099999999')
      expect(matchUnknown.item).toBeUndefined()
      expect(matchUnknown.phone).toBe('00099999999')
      expect(matchUnknown.full).toBe('00099999999')
      expect(matchUnknown.format).toBe('00099999999')

      const matchShort = GeoPhone.getByPhoneFull('+7 (999) 123')
      expect(matchShort.item?.value).toBe('RU')
      expect(matchShort.phone).toBe('999123')
      expect(matchShort.full).toBe('7999123')
      expect(matchShort.format).toBe('+7 (999) 123')
    })
  })

  describe('getList & makeList', () => {
    it('should return a non-empty array of GeoPhoneValue items sorted by phone code in ascending order', () => {
      const list = GeoPhone.getList()
      expect(Array.isArray(list)).toBe(true)
      expect(list.length).toBeGreaterThan(0)
      expect(list[0]).toHaveProperty('phone')
      expect(list[0]).toHaveProperty('mask')
      expect(list[0]).toHaveProperty('value')

      for (let index = 1; index < list.length; index++) {
        expect(list[index].phone).toBeGreaterThanOrEqual(list[index - 1].phone)
      }
    })

    it('should cache the list across multiple calls and handle entries without phoneCode or phoneMask', () => {
      Geo.add('ZZ', {
        language: 'zz',
        phoneMask: '+***-***'
      })
      Geo.add('YY', {
        language: 'yy'
      })

      const firstCall = GeoPhone.getList()
      const secondCall = GeoPhone.getList()
      expect(firstCall).toBe(secondCall)

      const customCountry = firstCall.find(item => item.value === 'ZZ')
      expect(customCountry).toBeDefined()
      expect(customCountry?.phone).toBe(0)
      expect(customCountry?.within).toBeUndefined()
      expect(customCountry?.mask).toEqual(['+***-***'])

      const noMaskCountry = firstCall.find(item => item.value === 'YY')
      expect(noMaskCountry).toBeUndefined()
    })
  })

  describe('getMap & makeMap', () => {
    it('should return a valid cached map tree for prefix matching', () => {
      const firstMap = GeoPhone.getMap()
      const secondMap = GeoPhone.getMap()

      expect(typeof firstMap).toBe('object')
      expect(Object.keys(firstMap).length).toBeGreaterThan(0)
      expect(firstMap).toBe(secondMap)
    })
  })

  describe('cleanPhone', () => {
    it('should remove all non-digit characters', () => {
      expect(GeoPhone.cleanPhone('+7 (999) 123-45-67')).toBe('79991234567')
      expect(GeoPhone.cleanPhone('abc123def456')).toBe('123456')
      expect(GeoPhone.cleanPhone('---')).toBe('')
      expect(GeoPhone.cleanPhone('')).toBe('')
    })
  })

  describe('Protected helpers', () => {
    describe('getUnnecessaryLength', () => {
      it('should count all mask placeholder characters (*, =, ~, $, ?)', () => {
        expect(GeoPhoneProtected.getUnnecessaryLength('+* (***) ***-**-**')).toBe(11)
        expect(GeoPhoneProtected.getUnnecessaryLength('+~ ($=?) ***')).toBe(7)
        expect(GeoPhoneProtected.getUnnecessaryLength('+7-999-123')).toBe(0)
        expect(GeoPhoneProtected.getUnnecessaryLength('')).toBe(0)
      })
    })

    describe('getWithinSymbol', () => {
      it('should map internal country codes to their corresponding mask symbols', () => {
        expect(GeoPhoneProtected.getWithinSymbol('0')).toBe('=')
        expect(GeoPhoneProtected.getWithinSymbol('06')).toBe('?')
        expect(GeoPhoneProtected.getWithinSymbol('4')).toBe('$')
        expect(GeoPhoneProtected.getWithinSymbol('8')).toBe('~')
        expect(GeoPhoneProtected.getWithinSymbol(undefined)).toBe('*')
        expect(GeoPhoneProtected.getWithinSymbol('unknown')).toBe('*')
      })
    })

    describe('removeZero', () => {
      it('should remove leading 0 or leading 8 when starting with 89', () => {
        expect(GeoPhoneProtected.removeZero('0123456789')).toBe('123456789')
        expect(GeoPhoneProtected.removeZero('8901234567')).toBe('901234567')
        expect(GeoPhoneProtected.removeZero('8123456789')).toBe('8123456789')
        expect(GeoPhoneProtected.removeZero('79991234567')).toBe('79991234567')
        expect(GeoPhoneProtected.removeZero('')).toBe('')
      })
    })

    describe('toMask', () => {
      it('should correctly build a mask when lengths match exactly', () => {
        expect(GeoPhoneProtected.toMask('79991234567', ['+* (***) ***-**-**'])).toBe('+7 (999) 123-45-67')
      })

      it('should not strip leading zero by default, and strip it when isRemoveZero is true', () => {
        expect(GeoPhoneProtected.toMask('09991234567', ['(***) ***-**-**'])).toBeUndefined()
        expect(GeoPhoneProtected.toMask('09991234567', ['(***) ***-**-**'], true)).toBe('(999) 123-45-67')
        expect(GeoPhoneProtected.toMask('89991234567', ['(***) ***-**-**'], true)).toBe('(999) 123-45-67')
      })

      it('should handle multiple masks and pick the one with matching length', () => {
        const masks = ['+* (***) ***-**-**', '+* (***) ***-***']
        expect(GeoPhoneProtected.toMask('79991234567', masks)).toBe('+7 (999) 123-45-67')
        expect(GeoPhoneProtected.toMask('7999123456', masks)).toBe('+7 (999) 123-456')
      })

      it('should return undefined when phone length does not match mask length or arguments are empty', () => {
        expect(GeoPhoneProtected.toMask('8999123456', ['+* (***) ***-**-**'])).toBeUndefined()
        expect(GeoPhoneProtected.toMask('79991234567', [])).toBeUndefined()
        expect(GeoPhoneProtected.toMask('79991234567', undefined)).toBeUndefined()
        expect(GeoPhoneProtected.toMask('', ['+* (***) ***-**-**'])).toBeUndefined()
      })
    })

    describe('toNumber & toStandard & toWithin', () => {
      it('should split cleaned digits into array via toNumber', () => {
        expect(GeoPhoneProtected.toNumber('+7 (900)')).toEqual(['7', '9', '0', '0'])
        expect(GeoPhoneProtected.toNumber('')).toEqual([])
      })

      it('should substitute placeholders sequentially via toStandard', () => {
        expect(GeoPhoneProtected.toStandard('7900', '+* (***)')).toBe('+7 (900)')
        expect(GeoPhoneProtected.toStandard('9001', '+~ ($=?)')).toBe('+9 (001)')
      })

      it('should apply within symbols for corresponding within variations', () => {
        expect(GeoPhoneProtected.toWithin('+* (***)', '4')).toBe('+$ (***)')
        expect(GeoPhoneProtected.toWithin('+* (***)', '8')).toBe('+~ (***)')
        expect(GeoPhoneProtected.toWithin('+* (***)', '0')).toBe('+= (***)')
        expect(GeoPhoneProtected.toWithin('+* (***)', '06')).toBe('+? (?**)')
        expect(GeoPhoneProtected.toWithin('+* (***)', undefined)).toBe('+* (***)')
        expect(GeoPhoneProtected.toWithin('+* (***)', 'unknown')).toBe('+* (***)')
      })
    })
  })
})
