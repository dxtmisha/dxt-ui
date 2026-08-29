import { afterEach, describe, expect, it, vi } from 'vitest'
import { PropertiesSeparator } from '../PropertiesSeparator'
import { PropertiesWrap } from '../PropertiesWrap'
import { PropertiesValues } from '../PropertiesValues'
import { PropertiesTypes } from '../PropertiesTypes'
import { PropertyType } from '../../../types/propertyTypes'

describe('Properties Main Structures (Separator, Wrap, Values, Types)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('PropertiesSeparator', () => {
    it('detects and converts properties with separators', () => {
      const properties = {
        'button/color': { value: '#123456' }
      } as any

      expect(PropertiesSeparator.is(properties)).toBe(true)

      const converted = PropertiesSeparator.to(properties)
      expect(converted.button).toBeDefined()
    })
  })

  describe('PropertiesWrap', () => {
    it('optimizes nested properties with PropertiesWrap.to', () => {
      const properties = {
        button: {
          value: {
            color: { value: '#ffffff' }
          }
        }
      } as any

      PropertiesWrap.to(properties)
      expect(properties.button).toBeDefined()
    })
  })

  describe('PropertiesValues', () => {
    it('checks full values and colors', () => {
      expect(PropertiesValues.isFull('=fixedValue')).toBe(true)
      expect(PropertiesValues.isFull('normal')).toBe(false)
      expect(PropertiesValues.isColor('#ffffff')).toBe(true)
      expect(PropertiesValues.isColor('red')).toBe(false)
      expect(PropertiesValues.reValue('=custom')).toBe('custom')
    })
  })

  describe('PropertiesTypes', () => {
    it('checks property types and names', () => {
      expect(PropertiesTypes.isInType(PropertyType.var, [PropertyType.var])).toBe(true)
      expect(PropertiesTypes.isInType(PropertyType.var, [PropertyType.color])).toBe(false)
      expect(PropertiesTypes.isTypeInName(':active')).toBe(true)
      expect(PropertiesTypes.isTypeInName('~hover')).toBe(true)
      expect(PropertiesTypes.isTypeInName('normalColor')).toBe(false)
    })
  })
})
