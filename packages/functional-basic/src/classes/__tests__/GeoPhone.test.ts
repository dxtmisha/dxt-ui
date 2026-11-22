/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { GeoPhone } from '../GeoPhone'
import { Geo } from '../Geo'
import { GeoList } from '../GeoList'
import { ServerStorage } from '../ServerStorage'

type GeoPhoneInternal = typeof GeoPhone & {
  extractPrefixes: (masks: readonly string[]) => string[]
  getUnnecessaryLength: (mask: string) => number
  getWithinSymbol: (within?: string) => string
  removeZero: (phone: string) => string
  toMask: (phone: string, masks?: readonly string[], isRemoveZero?: boolean, isPartial?: boolean) => string | undefined
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
    GeoPhone.reset()
  })

  afterEach(() => {
    ServerStorage.reset()
    GeoList.reset()
    GeoPhone.reset()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
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

      const kosovoData = GeoPhone.get('XK')
      expect(kosovoData).toBeDefined()
      expect(kosovoData?.value).toBe('XK')
      expect(kosovoData?.phone).toBe(383)
      expect(kosovoData?.within).toBe('0')
      expect(kosovoData?.mask).toEqual(['+383-**-***-***', '+383-**-***-****'])
    })

    it('should resolve alternative country aliases (e.g. UK -> GB)', () => {
      const gbData = GeoPhone.get('UK')
      expect(gbData).toBeDefined()
      expect(gbData?.value).toBe('GB')
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

    it('should collect all masks including alternative subcodes for DO, VA, PR and KZ', () => {
      const doInfo = GeoPhone.getByCode('DO')
      expect(doInfo?.value).toBe('DO')
      expect(doInfo?.mask).toEqual([
        '+1-809-***-****',
        '+1-829-***-****',
        '+1-849-***-****'
      ])

      const vaInfo = GeoPhone.getByCode('VA')
      expect(vaInfo?.value).toBe('VA')
      expect(vaInfo?.mask).toEqual(['+379-*****', '+39-06-698-*****'])

      const kzInfo = GeoPhone.getByCode('KZ')
      expect(kzInfo?.value).toBe('KZ')
      expect(kzInfo?.mask).toEqual(['+7-6-**-***-**-**', '+7-7-**-***-**-**'])

      const ggInfo = GeoPhone.getByCode('GG')
      expect(ggInfo?.value).toBe('GG')
      expect(ggInfo?.mask).toEqual([
        '+44-1481-******',
        '+44-7781-******',
        '+44-7839-******',
        '+44-7911-******'
      ])
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

    it('should skip within symbol replacement when phoneWithinSkip is true while preserving within metadata', () => {
      Geo.add('ZZ', {
        language: 'zz',
        phoneCode: '7',
        phoneWithin: '8',
        phoneWithinSkip: true,
        phoneMask: ['+7-6-**-***-**-**', '+7-7-**-***-**-**']
      })

      const customMeta = GeoPhone.get('ZZ')
      expect(customMeta?.within).toBe('8')
      expect(customMeta?.withinSkip).toBe(true)

      const customByCode = GeoPhone.getByCode('ZZ')
      expect(customByCode?.mask).toEqual(['+7-6-**-***-**-**', '+7-7-**-***-**-**'])
      expect(customByCode?.maskFull).toEqual(['+*-*-**-***-**-**'])

      const customByPhone = GeoPhone.getByPhone('77011234567')
      expect(customByPhone.item?.mask.some(mask => mask.includes('~'))).toBe(
        !GeoPhone.get('KZ')?.withinSkip
      )
    })

    it('should return undefined for unknown or empty code', () => {
      expect(GeoPhone.getByCode('INVALID')).toBeUndefined()
      expect(GeoPhone.getByCode('')).toBeUndefined()
    })
  })

  describe('getCodes', () => {
    it('should return a single code when all masks share the primary phoneCode', () => {
      expect(GeoPhone.getCodes('RU')).toEqual(['7'])
      expect(GeoPhone.getCodes('DE')).toEqual(['49'])
      expect(GeoPhone.getCodes('CA')).toEqual(['1'])
      expect(GeoPhone.getCodes('KZ')).toEqual(['7'])
    })

    it('should return primary and alternative codes when a country has distinct subcodes', () => {
      expect(GeoPhone.getCodes('DO')).toEqual(['1-809', '1-829', '1-849'])
      expect(GeoPhone.getCodes('PR')).toEqual(['1-787', '1-939'])
      expect(GeoPhone.getCodes('VA')).toEqual(['379', '39-06-698'])
      expect(GeoPhone.getCodes('BQ')).toEqual(['599-7', '599-3', '599-4'])
    })

    it('should return an empty array for unknown or empty code', () => {
      expect(GeoPhone.getCodes('INVALID')).toEqual([])
      expect(GeoPhone.getCodes('')).toEqual([])
    })

    it('should fall back to extracted mask prefixes when a custom country has no phoneCode', () => {
      Geo.add('ZZ', {
        language: 'zz',
        phoneMask: ['+999-**-***', '+998-**-***']
      })

      expect(GeoPhone.getCodes('ZZ')).toEqual(['999', '998'])
    })

    it('should isolate items and next when baseNode belongs to a different country sharing the dial code (CA vs US)', () => {
      const canadaInfo = GeoPhone.getByCode('CA')
      expect(canadaInfo).toBeDefined()
      expect(canadaInfo?.value).toBe('CA')
      expect(canadaInfo?.items).toHaveLength(1)
      expect(canadaInfo?.items[0]?.value).toBe('CA')
      expect(canadaInfo?.next).toEqual({})
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
      expect(matchRussia.mask).toBe('+7-999-123-45-67')
      expect(matchRussia.e164).toBe('+79991234567')
      expect(matchRussia.digits).toBe('79991234567')

      const matchEmpty = GeoPhone.getByPhoneFull('')
      expect(matchEmpty.full).toBe('')
      expect(matchEmpty.format).toBe('')
      expect(matchEmpty.mask).toBe('')
      expect(matchEmpty.e164).toBe('')
      expect(matchEmpty.digits).toBe('')

      const matchCanada = GeoPhone.getByPhoneFull('+14031234567')
      expect(matchCanada.item?.value).toBe('CA')
      expect(matchCanada.phone).toBe('1234567')
      expect(matchCanada.full).toBe('14031234567')
      expect(matchCanada.format).toBe('+1-403-123-4567')
      expect(matchCanada.mask).toBe('+1-403-123-4567')
      expect(matchCanada.e164).toBe('+14031234567')
      expect(matchCanada.digits).toBe('14031234567')

      const matchHungary = GeoPhone.getByPhoneFull('+3620123456')
      expect(matchHungary.item?.value).toBe('HU')
      expect(matchHungary.phone).toBe('20123456')
      expect(matchHungary.full).toBe('3620123456')
      expect(matchHungary.format).toBe('+36-2-012-3456')
      expect(matchHungary.mask).toBe('+36-2-012-3456')
      expect(matchHungary.e164).toBe('+3620123456')
      expect(matchHungary.digits).toBe('3620123456')
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

      const matchPartial = GeoPhone.getByPhoneFull('+7 (999) 123', true)
      expect(matchPartial.item?.value).toBe('RU')
      expect(matchPartial.phone).toBe('999123')
      expect(matchPartial.full).toBe('7999123')
      expect(matchPartial.format).toBe('+7-999-123')
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

    it('should invalidate cached list and map on reset() so dynamically added countries are picked up', () => {
      const initialList = GeoPhone.getList()
      const initialMap = GeoPhone.getMap()
      expect(GeoPhone.get('ZZ')).toBeUndefined()

      Geo.add('ZZ', {
        language: 'zz',
        phoneCode: '999',
        phoneMask: '+999-**-***'
      })

      expect(GeoPhone.get('ZZ')).toBeUndefined()

      GeoPhone.reset()

      const rebuiltList = GeoPhone.getList()
      const rebuiltMap = GeoPhone.getMap()
      expect(rebuiltList).not.toBe(initialList)
      expect(rebuiltMap).not.toBe(initialMap)
      expect(GeoPhone.get('ZZ')?.phone).toBe(999)
      expect(GeoPhone.getByPhone('+99912345').item?.value).toBe('ZZ')
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
        expect(GeoPhoneProtected.toMask('0', ['+* (***)'], true, true)).toBeUndefined()
      })

      it('should pick the closest longer mask in partial mode and accept readonly mask arrays without mutating them', () => {
        const masks = ['+*-***-***-****', '+*-***-***-***'] as const
        expect(GeoPhoneProtected.toMask('799912', masks, false, true)).toBe('+7-999-12')
        expect(GeoPhoneProtected.toMask('7999123456', masks, false, true)).toBe('+7-999-123-456')
        expect(GeoPhoneProtected.toMask('799912345678', masks, false, true)).toBeUndefined()
      })
    })

    describe('extractPrefixes', () => {
      it('should extract unique dial prefixes from readonly masks without leading plus or trailing hyphens', () => {
        const masks = ['+1-809-***-****', '+1-809-***-***', '+39-06-698-*****', '+***-***'] as const
        expect(GeoPhoneProtected.extractPrefixes(masks)).toEqual(['1-809', '39-06-698'])
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
        expect(GeoPhoneProtected.toStandard('7900123', '+*-***-***-**-**')).toBe('+7-900-123')
        expect(GeoPhoneProtected.toStandard('', '+*-***')).toBe('')
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

    describe('SSR compatibility', () => {
      it('should parse and format phones identically when window is undefined', () => {
        vi.stubGlobal('window', undefined)
        const result = GeoPhone.getByPhoneFull('+84 90 123 45 67')
        expect(result.item?.value).toBe('VN')
        expect(result.e164).toBe('+84901234567')
        expect(result.digits).toBe('84901234567')
      })
    })
  })
})
