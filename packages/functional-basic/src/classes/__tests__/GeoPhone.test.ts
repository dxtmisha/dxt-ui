import { describe, it, expect } from 'vitest'
import { GeoPhone } from '../GeoPhone'

describe('GeoPhone', () => {
  describe('removeZero', () => {
    it('should remove the leading zero', () => {
      expect(GeoPhone.removeZero('0123456789')).toBe('123456789')
    })

    it('should remove leading 8 if the phone starts with 89', () => {
      expect(GeoPhone.removeZero('8901234567')).toBe('901234567')
    })

    it('should not remove leading 8 if the phone does not start with 89', () => {
      expect(GeoPhone.removeZero('8123456789')).toBe('8123456789')
    })

    it('should not modify normal phone numbers', () => {
      expect(GeoPhone.removeZero('79991234567')).toBe('79991234567')
    })
  })

  describe('getList', () => {
    it('should return a non-empty array of GeoPhoneValue items sorted by phone code', () => {
      const list = GeoPhone.getList()
      expect(Array.isArray(list)).toBe(true)
      expect(list.length).toBeGreaterThan(0)
      expect(list[0]).toHaveProperty('phone')
      expect(list[0]).toHaveProperty('mask')
      expect(list[0]).toHaveProperty('value')
    })
  })

  describe('getMap', () => {
    it('should return a valid map tree for prefix matching', () => {
      const map = GeoPhone.getMap()
      expect(typeof map).toBe('object')
      expect(Object.keys(map).length).toBeGreaterThan(0)
    })
  })

  describe('get', () => {
    it('should find phone data by country code', () => {
      const russiaData = GeoPhone.get('RU')
      expect(russiaData).toBeDefined()
      expect(russiaData?.value).toBe('RU')
      expect(russiaData?.phone).toBe(7)
    })

    it('should return undefined for invalid country code', () => {
      const invalid = GeoPhone.get('INVALID')
      expect(invalid).toBeUndefined()
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

    it('should parse an invalid or unknown country code gracefully', () => {
      const match = GeoPhone.getByPhone('00099999999')
      expect(match.item).toBeUndefined()
      expect(match.phone).toBe('00099999999')
    })
  })

  describe('getByCode & within logic', () => {
    it('should return the map item for the given country code', () => {
      const mapInfo = GeoPhone.getByCode('RU')
      expect(mapInfo).toBeDefined()
      expect(mapInfo?.value).toBe('RU')
    })

    it('should apply "within" symbol "~" for RU (within=8)', () => {
      const mapInfo = GeoPhone.getByCode('RU')
      expect(mapInfo?.mask[0]?.includes('~')).toBe(true)
    })

    it('should apply "within" symbol "=" for US (within=0)', () => {
      const mapInfo = GeoPhone.getByCode('US')
      expect(mapInfo?.mask[0]?.includes('=')).toBe(true)
    })

    it('should return undefined for unknown code', () => {
      const mapInfo = GeoPhone.getByCode('INVALID')
      expect(mapInfo).toBeUndefined()
    })
  })

  describe('toMask', () => {
    it('should correctly build a mask when lengths match exactly', () => {
      const result = GeoPhone.toMask('79991234567', ['+* (***) ***-**-**'])
      expect(result).toBe('+7 (999) 123-45-67')
    })

    it('should strip leading zero before matching mask length', () => {
      const result = GeoPhone.toMask('09991234567', ['(***) ***-**-**'])
      expect(result).toBe('(999) 123-45-67')
    })

    it('should handle multiple masks and pick the one with matching length', () => {
      const masks = ['+* (***) ***-**-**', '+* (***) ***-***']
      expect(GeoPhone.toMask('79991234567', masks)).toBe('+7 (999) 123-45-67')
      expect(GeoPhone.toMask('7999123456', masks)).toBe('+7 (999) 123-456')
    })

    it('should return undefined when phone length does not match mask length', () => {
      const result = GeoPhone.toMask('8999123456', ['+* (***) ***-**-**'])
      expect(result).toBeUndefined()
    })

    it('should return undefined when the masks array is empty or undefined or phone is empty', () => {
      expect(GeoPhone.toMask('79991234567', [])).toBeUndefined()
      expect(GeoPhone.toMask('79991234567', undefined)).toBeUndefined()
      expect(GeoPhone.toMask('', ['+* (***) ***-**-**'])).toBeUndefined()
    })
  })

  describe('Prefix Matching Priority', () => {
    it('should find the most specific match (US vs Canada codes)', () => {
      const canadaMatch = GeoPhone.getByPhone('14031234567')
      const unitedStatesMatch = GeoPhone.getByPhone('15551234567')

      expect(canadaMatch.item?.value).toBeDefined()
      expect(unitedStatesMatch.item?.value).toBeDefined()
      expect(canadaMatch.item?.value).not.toBe(unitedStatesMatch.item?.value || 'US')
    })
  })
})
