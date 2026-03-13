import { describe, it, expect } from 'vitest'
import { GeoPhone } from '../GeoPhone'

describe('GeoPhone', () => {
  describe('removeZero', () => {
    it('should remove leading zero', () => {
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
    it('should return a non-empty array of GeoPhoneValue items', () => {
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
      const ruData = GeoPhone.get('RU')
      expect(ruData).toBeDefined()
      expect(ruData?.value).toBe('RU')
      expect(ruData?.phone).toBe(7)
    })

    it('should return undefined for invalid country code', () => {
      const invalid = GeoPhone.get('INVALID')
      expect(invalid).toBeUndefined()
    })
  })

  describe('getByPhone', () => {
    it('should recognize country code and the remaining phone string', () => {
      const matchCa = GeoPhone.getByPhone('+14031234567')
      expect(matchCa.item).toBeDefined()
      expect(matchCa.item?.value).toBe('CA') // Or KZ depending on the mask
      expect(matchCa.phone).toBe('1234567')

      const matchUS = GeoPhone.getByPhone('+14041234567')
      expect(matchUS.item).toBeDefined()
      expect(matchUS.item?.value).toBe('US') // Or KZ depending on the mask
      expect(matchUS.phone).toBe('4041234567')

      const match = GeoPhone.getByPhone('79991234567')
      expect(match.item).toBeDefined()
      expect(match.item?.value).toBe('RU') // Or KZ depending on the mask
      expect(match.phone).toBe('9991234567')
    })

    it('should parse an invalid or unknown country code gracefully', () => {
      const match = GeoPhone.getByPhone('00099999999')
      // If 000 is not in the tree, the item will be undefined, and the entire string goes to the phone
      expect(match.item).toBeUndefined()
      expect(match.phone).toBe('00099999999')
    })
  })

  describe('getByCode', () => {
    it('should return the map item for the given country code', () => {
      const mapInfo = GeoPhone.getByCode('RU')
      expect(mapInfo).toBeDefined()
      expect(mapInfo?.value).toBe('RU')
    })

    it('should return undefined for unknown code', () => {
      const mapInfo = GeoPhone.getByCode('INVALID')
      expect(mapInfo).toBeUndefined()
    })
  })

  describe('toMask', () => {
    it('should correctly build a mask when lengths match exactly', () => {
      // 11 digits required by 11 stars
      const res = GeoPhone.toMask('79991234567', ['+* (***) ***-**-**'])
      expect(res).toBe('+7 (999) 123-45-67')
    })

    it('should return undefined when phone length does not match mask length', () => {
      // 10 digits
      const res = GeoPhone.toMask('8999123456', ['+* (***) ***-**-**'])
      expect(res).toBeUndefined()
    })

    it('should return undefined when the masks array is empty or undefined', () => {
      expect(GeoPhone.toMask('79991234567', [])).toBeUndefined()
      expect(GeoPhone.toMask('79991234567', undefined)).toBeUndefined()
    })
  })
})
