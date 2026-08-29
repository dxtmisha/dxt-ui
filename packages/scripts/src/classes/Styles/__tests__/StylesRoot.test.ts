import { describe, expect, it } from 'vitest'
import { StylesRoot } from '../StylesRoot'
import { PropertiesItems } from '../../Properties/PropertiesItems'
import { PropertyCategory, PropertyKey, PropertyType } from '../../../types/propertyTypes'

describe('StylesRoot', () => {
  it('generates :root block with variables from root design tokens', () => {
    const mockProperties = {
      'root.spacing': {
        [PropertyKey.name]: '--spacing',
        [PropertyKey.category]: PropertyCategory.root,
        [PropertyKey.variable]: PropertyType.var,
        [PropertyKey.css]: '16px'
      },
      'component.button': {
        [PropertyKey.name]: '--btn-color',
        [PropertyKey.category]: PropertyCategory.component,
        [PropertyKey.variable]: PropertyType.var,
        [PropertyKey.css]: '#ffffff'
      }
    } as any

    const items = new PropertiesItems(mockProperties)
    const stylesRoot = new StylesRoot(items)
    const result = stylesRoot.init()

    expect(result[0]).toBe('@use "@dxtmisha/styles" as ui;')
    expect(result[1]).toBe('')
    expect(result[2]).toContain(':root {')
    expect(result[2]).toContain('--spacing: 16px;')
    expect(result[2]).not.toContain('--btn-color')
    expect(result[2]).toContain('}')
  })

  it('evaluates and resolves static calc expressions using sass compiler', () => {
    const mockProperties = {
      'root.base': {
        [PropertyKey.name]: '--base-size',
        [PropertyKey.category]: PropertyCategory.root,
        [PropertyKey.variable]: PropertyType.var,
        [PropertyKey.css]: '10px'
      },
      'root.computed': {
        [PropertyKey.name]: '--computed-size',
        [PropertyKey.category]: PropertyCategory.root,
        [PropertyKey.variable]: PropertyType.var,
        [PropertyKey.css]: 'calc(10px + 20px)'
      }
    } as any

    const items = new PropertiesItems(mockProperties)
    const stylesRoot = new StylesRoot(items)
    const result = stylesRoot.init()

    expect(result[2]).toContain('--computed-size: 30px;')
  })

  it('resolves nested variables in calc expressions', () => {
    const mockProperties = {
      'root.base': {
        [PropertyKey.name]: '--base-padding',
        [PropertyKey.category]: PropertyCategory.root,
        [PropertyKey.variable]: PropertyType.var,
        [PropertyKey.css]: '8px'
      },
      'root.total': {
        [PropertyKey.name]: '--total-padding',
        [PropertyKey.category]: PropertyCategory.root,
        [PropertyKey.variable]: PropertyType.var,
        [PropertyKey.css]: 'calc(var(--base-padding) * 2)'
      }
    } as any

    const items = new PropertiesItems(mockProperties)
    const stylesRoot = new StylesRoot(items)
    const result = stylesRoot.init()

    expect(result[2]).toContain('--total-padding: 16px;')
  })
})
