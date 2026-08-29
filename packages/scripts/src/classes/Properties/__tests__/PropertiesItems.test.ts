import { afterEach, describe, expect, it, vi } from 'vitest'
import { PropertiesItems } from '../PropertiesItems'
import { PropertiesKeys } from '../PropertiesKeys'
import { PropertiesFile } from '../PropertiesFile'

describe('PropertiesItems and PropertiesKeys', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('PropertiesKeys', () => {
    it('identifies special system keys and separators', () => {
      expect(PropertiesKeys.isSpecialKey('value')).toBe(true)
      expect(PropertiesKeys.isSpecialKey('type')).toBe(true)
      expect(PropertiesKeys.isSpecialKey('_custom')).toBe(true)
      expect(PropertiesKeys.isSpecialKey('customProp')).toBe(false)

      expect(PropertiesKeys.isFull('=fullValue')).toBe(true)
      expect(PropertiesKeys.isFull('normalValue')).toBe(false)
    })
  })

  describe('PropertiesItems', () => {
    it('initializes and manages property list items', () => {
      const mockItems = {
        'button.color': { value: '#123456', name: 'button.color' }
      } as any

      const items = new PropertiesItems(mockItems)
      expect(items.get()).toEqual(mockItems)
      expect(items.isFocusDesign('dxt')).toBe(true)
    })

    it('writes step cache via write()', () => {
      const writeSpy = vi.spyOn(PropertiesFile, 'write').mockImplementation(() => {})

      const items = new PropertiesItems({})
      items.write('step-1')

      expect(writeSpy).toHaveBeenCalled()
    })
  })
})
