import { describe, expect, it } from 'vitest'
import { PropertiesStandard } from '../PropertiesStandard'
import { PropertyKey } from '../../../types/propertyTypes'

describe('PropertiesStandard DTCG Tokens ($value, $type, $description)', () => {
  it('standardizes flat tokens with $value and $type', () => {
    const raw = {
      '0': {
        $value: '#fffaf9',
        $type: 'color'
      },
      '20': {
        $value: '#fff6f5',
        $type: 'color'
      }
    }

    const result = PropertiesStandard.to(raw as any)

    expect(result['0']).toBeDefined()
    expect(result['0'].value).toBe('#fffaf9')
    expect(result['0'].type).toBe('color')
    expect(result['0'].$value).toBeUndefined()
    expect(result['0'].$type).toBeUndefined()
    expect(result['0'][PropertyKey.index]).toBe('0')

    expect(result['20']).toBeDefined()
    expect(result['20'].value).toBe('#fff6f5')
    expect(result['20'].type).toBe('color')
    expect(result['20'].$value).toBeUndefined()
    expect(result['20'].$type).toBeUndefined()
  })

  it('standardizes nested tokens with $value and $type', () => {
    const raw = {
      palette: {
        red: {
          '500': {
            $value: '#ef4444',
            $type: 'color',
            $description: 'Main red shade'
          }
        }
      }
    }

    const result = PropertiesStandard.to(raw as any)

    expect(result.palette).toBeDefined()
    const red = (result.palette.value as any)?.red
    expect(red).toBeDefined()
    const shade500 = (red.value as any)?.['500']
    expect(shade500).toBeDefined()
    expect(shade500.value).toBe('#ef4444')
    expect(shade500.type).toBe('color')
    expect(shade500.description).toBe('Main red shade')
    expect(shade500.$value).toBeUndefined()
    expect(shade500.$type).toBeUndefined()
    expect(shade500.$description).toBeUndefined()
  })

  it('preserves backward compatibility with value and type keys', () => {
    const raw = {
      button: {
        value: '#123456',
        type: 'color'
      }
    }

    const result = PropertiesStandard.to(raw as any)

    expect(result.button).toBeDefined()
    expect(result.button.value).toBe('#123456')
    expect(result.button.type).toBe('color')
  })

  it('standardizes tokens with $type at group level and child $value', () => {
    const raw = {
      spacing: {
        $type: 'dimension',
        xs: {
          $value: '4px'
        },
        sm: {
          $value: '8px'
        }
      }
    }

    const result = PropertiesStandard.to(raw as any)

    expect(result.spacing).toBeDefined()
    expect(result.spacing.type).toBe('dimension')
    expect(result.spacing.$type).toBeUndefined()

    const xs = (result.spacing.value as any)?.xs
    expect(xs).toBeDefined()
    expect(xs.value).toBe('4px')
    expect(xs.$value).toBeUndefined()
  })
})
