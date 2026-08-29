import { describe, expect, it } from 'vitest'
import { StylesProperties } from '../StylesProperties'
import { PropertyKey, PropertyType } from '../../../types/propertyTypes'

describe('StylesProperties', () => {
  it('converts property type variables and properties into SCSS lines', () => {
    const mockProperty = {
      value: {
        'prop.color': {
          [PropertyKey.name]: 'color',
          [PropertyKey.variable]: PropertyType.property,
          [PropertyKey.css]: '#123456'
        },
        'prop.var': {
          [PropertyKey.name]: '--custom-var',
          [PropertyKey.variable]: PropertyType.var,
          [PropertyKey.css]: '24px'
        }
      },
      item: {
        [PropertyKey.name]: 'testBlock',
        value: {
          'prop.color': {
            [PropertyKey.name]: 'color',
            [PropertyKey.variable]: PropertyType.property,
            [PropertyKey.css]: '#123456'
          },
          'prop.var': {
            [PropertyKey.name]: '--custom-var',
            [PropertyKey.variable]: PropertyType.var,
            [PropertyKey.css]: '24px'
          }
        }
      }
    } as any

    const stylesProperties = new StylesProperties('  ', mockProperty)
    const result = stylesProperties.make()

    expect(result).toContain('  @include ui.color(#{#123456});')
    expect(result).toContain('  --custom-var: 24px;')
  })

  it('dispatches to media, container, animate, and class types', () => {
    const mockProperty = {
      value: {
        'prop.media': {
          [PropertyKey.name]: '(min-width: 600px)',
          [PropertyKey.variable]: PropertyType.media,
          value: {
            item: {
              [PropertyKey.name]: 'padding',
              [PropertyKey.variable]: PropertyType.property,
              [PropertyKey.css]: '12px'
            }
          }
        },
        'prop.container': {
          [PropertyKey.name]: '(max-width: 400px)',
          [PropertyKey.variable]: PropertyType.container,
          value: {
            item: {
              [PropertyKey.name]: 'margin',
              [PropertyKey.variable]: PropertyType.property,
              [PropertyKey.css]: '4px'
            }
          }
        },
        'prop.animate': {
          [PropertyKey.name]: 'spin',
          [PropertyKey.variable]: PropertyType.animate,
          value: {
            item: {
              [PropertyKey.name]: '100%',
              [PropertyKey.variable]: PropertyType.animateFrame,
              value: {
                sub: {
                  [PropertyKey.name]: 'transform',
                  [PropertyKey.variable]: PropertyType.property,
                  [PropertyKey.css]: 'rotate(360deg)'
                }
              }
            }
          }
        },
        'prop.state': {
          [PropertyKey.name]: '.is-active',
          [PropertyKey.variable]: PropertyType.state,
          value: {
            item: {
              [PropertyKey.name]: 'opacity',
              [PropertyKey.variable]: PropertyType.property,
              [PropertyKey.css]: '1'
            }
          }
        }
      },
      item: {
        [PropertyKey.name]: 'root',
        value: {
          'prop.media': {
            [PropertyKey.name]: '(min-width: 600px)',
            [PropertyKey.variable]: PropertyType.media,
            value: {
              item: {
                [PropertyKey.name]: 'padding',
                [PropertyKey.variable]: PropertyType.property,
                [PropertyKey.css]: '12px'
              }
            }
          },
          'prop.container': {
            [PropertyKey.name]: '(max-width: 400px)',
            [PropertyKey.variable]: PropertyType.container,
            value: {
              item: {
                [PropertyKey.name]: 'margin',
                [PropertyKey.variable]: PropertyType.property,
                [PropertyKey.css]: '4px'
              }
            }
          },
          'prop.animate': {
            [PropertyKey.name]: 'spin',
            [PropertyKey.variable]: PropertyType.animate,
            value: {
              item: {
                [PropertyKey.name]: '100%',
                [PropertyKey.variable]: PropertyType.animateFrame,
                value: {
                  sub: {
                    [PropertyKey.name]: 'transform',
                    [PropertyKey.variable]: PropertyType.property,
                    [PropertyKey.css]: 'rotate(360deg)'
                  }
                }
              }
            }
          },
          'prop.state': {
            [PropertyKey.name]: '.is-active',
            [PropertyKey.variable]: PropertyType.state,
            value: {
              item: {
                [PropertyKey.name]: 'opacity',
                [PropertyKey.variable]: PropertyType.property,
                [PropertyKey.css]: '1'
              }
            }
          }
        }
      }
    } as any

    const stylesProperties = new StylesProperties('  ', mockProperty)
    const result = stylesProperties.make()

    expect(result.some(line => line.includes('@media screen and (min-width: 600px)'))).toBe(true)
    expect(result.some(line => line.includes('@container (max-width: 400px)'))).toBe(true)
    expect(result.some(line => line.includes('@keyframes spin'))).toBe(true)
    expect(result.some(line => line.includes('.is-active {'))).toBe(true)
  })

  it('handles nested auxiliary selector within auxiliary parent with & { ... } wrapper', () => {
    const mockProperty = {
      value: {
        'sub.virtual': {
          [PropertyKey.name]: 'before',
          [PropertyKey.variable]: PropertyType.virtual,
          value: {
            prop: {
              [PropertyKey.name]: 'color',
              [PropertyKey.variable]: PropertyType.property,
              [PropertyKey.css]: '#f00'
            }
          }
        }
      },
      item: {
        [PropertyKey.name]: 'hover',
        [PropertyKey.variable]: PropertyType.selector,
        value: {
          'sub.virtual': {
            [PropertyKey.name]: 'before',
            [PropertyKey.variable]: PropertyType.virtual,
            value: {
              prop: {
                [PropertyKey.name]: 'color',
                [PropertyKey.variable]: PropertyType.property,
                [PropertyKey.css]: '#f00'
              }
            }
          }
        }
      }
    } as any

    const parentItem = {
      [PropertyKey.name]: 'hover',
      [PropertyKey.variable]: PropertyType.selector
    } as any

    const stylesProperties = new StylesProperties('  ', mockProperty, parentItem)
    const result = stylesProperties.make()

    expect(result.some(line => line.includes('& {'))).toBe(true)
    expect(result.some(line => line.includes('@include ui.color(#{#f00})'))).toBe(true)
  })
})
