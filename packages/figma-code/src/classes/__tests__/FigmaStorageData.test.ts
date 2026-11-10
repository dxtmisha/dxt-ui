import { describe, it, expect, vi } from 'vitest'
import { FigmaStorageData } from '../FigmaStorageData'
import { FigmaPostCode } from '@dxtmisha/figma'

describe('FigmaStorageData', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('getName() should prefix key with FigmaPostCode', () => {
      const storageData = new FigmaStorageData('settings')
      const name = storageData.getName()

      expect(name).toBe(`${FigmaPostCode.get()}-settings`)
    })

    it('set() and get() should store and return value and age', () => {
      const storageData = new FigmaStorageData<string>('user-theme')

      storageData.set('dark', 1600000000)

      expect(storageData.get()).toBe('dark')
      expect(storageData.getAge()).toBe(1600000000)
    })

    it('setByObject() should import value and age from FigmaStorageDataValue object', () => {
      const storageData = new FigmaStorageData<{ mode: string }>('config')

      storageData.setByObject({ value: { mode: 'expert' }, age: 123456 })

      expect(storageData.get()).toEqual({ mode: 'expert' })
      expect(storageData.getAge()).toBe(123456)
    })

    it('toValue() should return structured data object', () => {
      const storageData = new FigmaStorageData<number>('counter')

      storageData.set(42, 99999)

      expect(storageData.toValue()).toEqual({ value: 42, age: 99999 })
    })

    it('update() should update value and record current timestamp', () => {
      const storageData = new FigmaStorageData<string>('profile')
      const before = Date.now()

      storageData.update('active-profile')
      const after = Date.now()

      expect(storageData.get()).toBe('active-profile')
      expect(storageData.getAge()).toBeGreaterThanOrEqual(before)
      expect(storageData.getAge()).toBeLessThanOrEqual(after)
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('isCache() should return true when cache duration is undefined (unlimited storage)', () => {
      const storageData = new FigmaStorageData<string>('unlimited')

      storageData.set('permanent', 1000)

      expect(storageData.getCache()).toBeUndefined()
      expect(storageData.isCache()).toBe(true)
      expect(storageData.isValue()).toBe(true)
    })

    it('isCache() and isValue() should evaluate cache boundary precisely', () => {
      const cacheSeconds = 60
      const storageData = new FigmaStorageData<string>('bounded', cacheSeconds)
      const now = 1000000000000

      vi.spyOn(Date, 'now').mockReturnValue(now)

      // Exactly at expiration threshold: age + cache * 1000 === now -> valid
      storageData.set('boundary-exact', now - (cacheSeconds * 1000))
      expect(storageData.isCache()).toBe(true)
      expect(storageData.isValue()).toBe(true)

      // 1 ms before expiration -> valid
      storageData.set('boundary-valid', now - (cacheSeconds * 1000) + 1)
      expect(storageData.isCache()).toBe(true)
      expect(storageData.isValue()).toBe(true)

      // 1 ms expired -> invalid
      storageData.set('boundary-expired', now - (cacheSeconds * 1000) - 1)
      expect(storageData.isCache()).toBe(false)
      expect(storageData.isValue()).toBe(false)

      vi.restoreAllMocks()
    })

    it('isCache() should return falsy when age is undefined and cache is set', () => {
      const storageData = new FigmaStorageData<string>('no-age', 60)

      storageData.setValue('data')
      // age is undefined
      expect(storageData.getAge()).toBeUndefined()
      expect(storageData.isCache()).toBe(false)
      expect(storageData.isValue()).toBe(false)
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('isNull() should strictly check for null and undefined', () => {
      const storageData = new FigmaStorageData<string | null>('nullable')

      expect(storageData.isNull()).toBe(true)

      storageData.set(null)
      expect(storageData.isNull()).toBe(true)

      storageData.set('')
      expect(storageData.isNull()).toBe(false)

      storageData.set('   ')
      expect(storageData.isNull()).toBe(false)
    })

    it('isValue() should treat numeric 0, boolean false, and empty string as valid values', () => {
      const numData = new FigmaStorageData<number>('zero')
      numData.set(0)
      expect(numData.isValue()).toBe(true)
      expect(numData.isNull()).toBe(false)

      const boolData = new FigmaStorageData<boolean>('falsy')
      boolData.set(false)
      expect(boolData.isValue()).toBe(true)
      expect(boolData.isNull()).toBe(false)

      const strData = new FigmaStorageData<string>('empty')
      strData.set('')
      expect(strData.isValue()).toBe(true)
      expect(strData.isNull()).toBe(false)
    })

    it('setByObject(undefined) should be a safe no-op', () => {
      const storageData = new FigmaStorageData<string>('stable')
      storageData.set('initial', 100)

      storageData.setByObject(undefined)

      expect(storageData.get()).toBe('initial')
      expect(storageData.getAge()).toBe(100)
    })

    it('update(undefined) should remove data', () => {
      const storageData = new FigmaStorageData<string>('transient')
      storageData.set('temp', 100)

      storageData.update(undefined)

      expect(storageData.get()).toBeUndefined()
      expect(storageData.getAge()).toBeUndefined()
      expect(storageData.isValue()).toBe(false)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should correctly store and retrieve Cyrillic, Vietnamese, and Emoji strings', () => {
      const ruData = new FigmaStorageData<string>('русский_ключ')
      ruData.set('Привет, мир!')
      expect(ruData.get()).toBe('Привет, мир!')
      expect(ruData.getName()).toBe(`${FigmaPostCode.get()}-русский_ключ`)

      const viData = new FigmaStorageData<{ text: string }>('tiếng_việt')
      viData.set({ text: 'Chào buổi sáng 🇻🇳' })
      expect(viData.get()).toEqual({ text: 'Chào buổi sáng 🇻🇳' })
    })
  })

  describe('Statefulness, isolation, and lifecycle cleanup', () => {
    it('remove() should reset both value and age to undefined', () => {
      const storageData = new FigmaStorageData<string>('disposable')
      storageData.set('to-delete', 555)

      storageData.remove()

      expect(storageData.get()).toBeUndefined()
      expect(storageData.getAge()).toBeUndefined()
      expect(storageData.isValue()).toBe(false)
    })

    it('separate instances should have independent encapsulated state', () => {
      const instance1 = new FigmaStorageData<string>('item-1')
      const instance2 = new FigmaStorageData<string>('item-2')

      instance1.set('val1', 111)
      instance2.set('val2', 222)

      expect(instance1.get()).toBe('val1')
      expect(instance2.get()).toBe('val2')
      expect(instance1.getAge()).toBe(111)
      expect(instance2.getAge()).toBe(222)
    })
  })
})
