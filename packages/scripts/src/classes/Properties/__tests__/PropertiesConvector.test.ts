import { describe, expect, it } from 'vitest'
import { convectorColor } from '../convector/convectorColor'
import { convectorFontFamilies } from '../convector/convectorFontFamilies'
import { convectorShadow } from '../convector/convectorShadow'
import { convectorTypography } from '../convector/convectorTypography'
import { PropertyKey } from '../../../types/propertyTypes'

describe('Properties Convectors', () => {
  describe('convectorColor', () => {
    it('sets cssColorOpacity when alpha modify extension is present', () => {
      const item: any = {
        type: 'color',
        value: '#ff0000',
        $extensions: {
          'studio.tokens': {
            modify: {
              type: 'alpha',
              value: '0.8'
            }
          }
        }
      }

      convectorColor(item)
      expect(item[PropertyKey.cssColorOpacity]).toBe('0.8')
    })
  })

  describe('convectorFontFamilies', () => {
    it('formats font family value', () => {
      const item: any = {
        type: 'fontFamilies',
        value: 'Roboto'
      }

      convectorFontFamilies(item)
      expect(item.value).toBe("'Roboto', sans-serif")
    })
  })

  describe('convectorShadow', () => {
    it('converts shadow item object to CSS box-shadow value', () => {
      const item: any = {
        type: 'boxShadow',
        value: {
          x: '0',
          y: '4',
          blur: '8',
          spread: '0',
          color: '#000000',
          type: 'dropShadow'
        }
      }

      convectorShadow(item)
      expect(item.value).toContain('0 4px 8px 0 #000000')
    })
  })

  describe('convectorTypography', () => {
    it('processes typography object value', () => {
      const item: any = {
        type: 'typography',
        value: {
          fontFamily: 'Inter',
          fontSize: '16px',
          fontWeight: '500'
        }
      }

      convectorTypography(item)
      expect(item.value).toBeDefined()
    })
  })
})
