import { describe, expect, it } from 'vitest'
import { StylesClasses } from '../StylesClasses'
import { PropertiesItems } from '../../Properties/PropertiesItems'
import { PropertyCategory, PropertyKey, PropertyType } from '../../../types/propertyTypes'

describe('StylesClasses', () => {
  it('generates use statements and class rule blocks for class and theme categories', () => {
    const mockProperties = {
      'class.btn': {
        value: {
          color: {
            [PropertyKey.name]: 'color',
            [PropertyKey.variable]: PropertyType.property,
            [PropertyKey.css]: '#fff'
          }
        },
        [PropertyKey.name]: 'btnPrimary',
        [PropertyKey.category]: PropertyCategory.class
      },
      'theme.dark': {
        value: {
          bg: {
            [PropertyKey.name]: 'background-color',
            [PropertyKey.variable]: PropertyType.property,
            [PropertyKey.css]: '#000'
          }
        },
        [PropertyKey.name]: 'themeDark',
        [PropertyKey.category]: PropertyCategory.theme
      },
      'root.var': {
        value: '10px',
        [PropertyKey.name]: '--spacing',
        [PropertyKey.category]: PropertyCategory.root
      }
    } as any

    const items = new PropertiesItems(mockProperties)
    const stylesClasses = new StylesClasses(items)
    const result = stylesClasses.init()

    expect(result.data).toContain('@use "./classes/btn-primary";')
    expect(result.data).toContain('@use "./classes/theme-dark";')
    expect(result.data).toHaveLength(2)

    expect(result.classes.btnPrimary).toBeDefined()
    expect(result.classes.btnPrimary).toContain('.btnPrimary {')
    expect(result.classes.btnPrimary).toContain('  @include ui.color(#{#fff});')
    expect(result.classes.btnPrimary).toContain('}')

    expect(result.classes.themeDark).toBeDefined()
    expect(result.classes.themeDark).toContain('.themeDark {')
    expect(result.classes.themeDark).toContain('  @include ui.backgroundColor(#{#000});')
    expect(result.classes.themeDark).toContain('}')
  })

  it('ignores properties without filled object values', () => {
    const mockProperties = {
      'class.empty': {
        value: '',
        [PropertyKey.name]: 'emptyClass',
        [PropertyKey.category]: PropertyCategory.class
      }
    } as any

    const items = new PropertiesItems(mockProperties)
    const stylesClasses = new StylesClasses(items)
    const result = stylesClasses.init()

    expect(result.data).toEqual([])
    expect(result.classes).toEqual({})
  })
})
