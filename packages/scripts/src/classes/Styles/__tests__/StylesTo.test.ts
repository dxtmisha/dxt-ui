import { describe, expect, it } from 'vitest'
import { StylesToAbstract } from '../to/StylesToAbstract'
import { StylesToAnimate } from '../to/StylesToAnimate'
import { StylesToClass } from '../to/StylesToClass'
import { StylesToClassFull } from '../to/StylesToClassFull'
import { StylesToContainer } from '../to/StylesToContainer'
import { StylesToMedia } from '../to/StylesToMedia'
import { StylesToProperty } from '../to/StylesToProperty'
import { StylesToRoot } from '../to/StylesToRoot'
import { StylesToSelector } from '../to/StylesToSelector'
import { StylesToVar } from '../to/StylesToVar'
import { StylesToVirtual } from '../to/StylesToVirtual'
import { PropertyKey, PropertyType } from '../../../types/propertyTypes'

class ConcreteStylesTo extends StylesToAbstract {
  public testGetName() {
    return this.getName()
  }

  public testGetValue() {
    return this.getValue()
  }

  public testAddSpace(data: string[]) {
    return this.addSpace(data)
  }

  public testAddEmptyString() {
    return this.addEmptyString()
  }

  protected treatment(): string[] {
    return [`${this.getName()}: ${this.getValue() ?? 'none'}`]
  }
}

describe('StylesTo Transformers', () => {
  describe('StylesToAbstract', () => {
    it('normalizes property names and CSS values', () => {
      const mockProperty = {
        name: 'test',
        item: {
          [PropertyKey.name]: 'background-color',
          [PropertyKey.css]: '\\#ff0000'
        }
      } as any

      const transformer = new ConcreteStylesTo(mockProperty, '  ', () => [], false)
      expect(transformer.testGetName()).toBe('background-color')
      expect(transformer.testGetValue()).toBe('#ff0000')
      expect(transformer.testAddEmptyString()).toEqual([])
      expect(transformer.make()).toEqual(['  background-color: #ff0000'])
    })

    it('handles undefined CSS values and default empty string generation when first is true', () => {
      const mockProperty = {
        name: 'test',
        item: {
          [PropertyKey.name]: 'padding'
        }
      } as any

      const transformer = new ConcreteStylesTo(mockProperty, '', () => [], true)
      expect(transformer.testGetName()).toBe('padding')
      expect(transformer.testGetValue()).toBeUndefined()
      expect(transformer.testAddEmptyString()).toEqual([''])
    })
  })

  describe('StylesToAnimate', () => {
    it('generates keyframe animation rule with content', () => {
      const mockProperty = {
        name: 'fade',
        item: {
          [PropertyKey.name]: 'fade-in'
        }
      } as any

      const transformer = new StylesToAnimate(
        mockProperty,
        '  ',
        () => ['  from { opacity: 0; }', '  to { opacity: 1; }'],
        false
      )

      expect(transformer.make()).toEqual([
        '  @keyframes fade-in {',
        '    from { opacity: 0; }',
        '    to { opacity: 1; }',
        '  }'
      ])
    })
  })

  describe('StylesToClass and StylesToClassFull', () => {
    it('generates class rule when content is provided', () => {
      const mockProperty = {
        item: {
          [PropertyKey.name]: '.btn-primary'
        }
      } as any

      const transformer = new StylesToClass(
        mockProperty,
        '',
        () => ['color: #fff;'],
        false
      )

      expect(transformer.make()).toEqual([
        '.btn-primary {',
        'color: #fff;',
        '}'
      ])
    })

    it('returns empty array when class has no content', () => {
      const mockProperty = {
        item: {
          [PropertyKey.name]: '.empty-class'
        }
      } as any

      const transformer = new StylesToClass(
        mockProperty,
        '',
        () => [],
        false
      )

      expect(transformer.make()).toEqual([])
    })

    it('generates class full rule with full selector string', () => {
      const mockProperty = {
        item: {
          [PropertyKey.name]: '50%'
        }
      } as any

      const transformer = new StylesToClassFull(
        mockProperty,
        '  ',
        () => ['opacity: 0.5;'],
        false
      )

      expect(transformer.make()).toEqual([
        '  50% {',
        '  opacity: 0.5;',
        '  }'
      ])
    })
  })

  describe('StylesToContainer and StylesToMedia', () => {
    it('generates container query rule', () => {
      const mockProperty = {
        item: {
          [PropertyKey.name]: '(min-width: 300px)'
        }
      } as any

      const transformer = new StylesToContainer(
        mockProperty,
        '',
        () => ['font-size: 14px;'],
        false
      )

      expect(transformer.make()).toEqual([
        '@container (min-width: 300px) {',
        'font-size: 14px;',
        '}'
      ])
    })

    it('generates media screen query rule', () => {
      const mockProperty = {
        item: {
          [PropertyKey.name]: '(min-width: 768px)'
        }
      } as any

      const transformer = new StylesToMedia(
        mockProperty,
        '',
        () => ['display: block;'],
        false
      )

      expect(transformer.make()).toEqual([
        '@media screen and (min-width: 768px) {',
        'display: block;',
        '}'
      ])
    })
  })

  describe('StylesToProperty', () => {
    it('generates standard CSS property', () => {
      const mockProperty = {
        item: {
          [PropertyKey.name]: 'margin-top',
          [PropertyKey.css]: '10px'
        }
      } as any

      const transformer = new StylesToProperty(mockProperty, '', () => [], false)
      expect(transformer.make()).toEqual(['margin-top: 10px;'])
    })

    it('appends sans-serif fallback for font-family properties', () => {
      const mockProperty = {
        item: {
          [PropertyKey.name]: 'font-family',
          [PropertyKey.css]: 'Roboto'
        }
      } as any

      const transformer = new StylesToProperty(mockProperty, '', () => [], false)
      expect(transformer.make()).toEqual(['font-family: Roboto, sans-serif;'])
    })

    it('generates mixin inclusion for styleTypes like color and background-color', () => {
      const mockProperty = {
        item: {
          [PropertyKey.name]: 'color',
          [PropertyKey.css]: 'var(--color-primary)'
        }
      } as any

      const transformer = new StylesToProperty(mockProperty, '', () => [], false)
      expect(transformer.make()).toEqual(['@include ui.color(#{var(--color-primary)});'])
    })

    it('adds auxiliary mixin calls for color-opacity, background-opacity, gradient-opacity, border-opacity', () => {
      const testCases = [
        { name: 'color-opacity', expected: `@include ui.colorOpacity(#{0.8}); @include ui.color('init');` },
        { name: 'background-opacity', expected: `@include ui.backgroundOpacity(#{0.5}); @include ui.backgroundColor('init');` },
        { name: 'gradient-opacity', expected: `@include ui.gradientOpacity(#{0.7}); @include ui.gradient('init');` },
        { name: 'border-opacity', expected: `@include ui.borderOpacity(#{0.3}); @include ui.borderColor('init');` }
      ]

      for (const { name, expected } of testCases) {
        const mockProperty = {
          item: {
            [PropertyKey.name]: name,
            [PropertyKey.css]: '0.5'
          },
          parent: {
            value: {}
          }
        } as any
        mockProperty.item[PropertyKey.css] = expected.match(/#\{([^}]+)\}/)?.[1]

        const transformer = new StylesToProperty(mockProperty, '', () => [], false)
        expect(transformer.make()).toEqual([expected])
      }
    })

    it('generates component custom variable when varKey is set', () => {
      const mockProperty = {
        design: 'dxt',
        component: 'button',
        item: {
          [PropertyKey.name]: 'font-size',
          [PropertyKey.css]: '14px',
          [PropertyKey.varKey]: true
        }
      } as any

      const transformer = new StylesToProperty(mockProperty, '', () => [], false)
      expect(transformer.make()).toEqual([
        '--dxt-button-font-size: 14px;',
        '@include ui.fontSize(#{14px});'
      ])
    })

    it('adds empty string when sort orders differ from previous item', () => {
      const mockProperty = {
        previous: {
          [PropertyKey.sort]: '1'
        },
        item: {
          [PropertyKey.name]: 'line-height',
          [PropertyKey.css]: '1.5',
          [PropertyKey.sort]: '2'
        }
      } as any

      const transformer = new StylesToProperty(mockProperty, '', () => [], false)
      expect(transformer.make()).toEqual(['', '@include ui.lineHeight(#{1.5});'])
    })
  })

  describe('StylesToRoot', () => {
    it('generates @at-root declaration wrapping content', () => {
      const mockProperty = {
        item: {
          [PropertyKey.name]: '.global-class'
        }
      } as any

      const transformer = new StylesToRoot(
        mockProperty,
        '',
        () => ['display: flex;'],
        false
      )

      expect(transformer.make()).toEqual([
        '@at-root .global-class {',
        'display: flex;',
        '}'
      ])
    })
  })

  describe('StylesToSelector', () => {
    it('generates standard state mixin calls for hover, active, focus, disabled, readonly', () => {
      const states = ['hover', 'active', 'focus', 'disabled', 'readonly']

      for (const state of states) {
        const mockProperty = {
          design: 'dxt',
          component: 'button',
          item: {
            [PropertyKey.name]: state
          },
          parent: {
            [PropertyKey.name]: 'dxt-button'
          }
        } as any

        const transformer = new StylesToSelector(
          mockProperty,
          '',
          () => ['opacity: 0.8;'],
          false
        )

        expect(transformer.make()).toEqual([
          `@include ui.${state} {`,
          'opacity: 0.8;',
          '}'
        ])
      }
    })

    it('generates parameterized state mixin when selector is inside a sub-element', () => {
      const mockProperty = {
        design: 'dxt',
        component: 'button',
        item: {
          [PropertyKey.name]: 'hover'
        },
        parent: {
          [PropertyKey.name]: 'icon'
        }
      } as any

      const transformer = new StylesToSelector(
        mockProperty,
        '',
        () => ['transform: scale(1.1);'],
        false
      )

      expect(transformer.make()).toEqual([
        `@include ui.hover('.dxt-button') {`,
        'transform: scale(1.1);',
        '}'
      ])
    })

    it('generates custom pseudo-class selector for other names', () => {
      const mockProperty = {
        design: 'dxt',
        component: 'button',
        item: {
          [PropertyKey.name]: 'first-child'
        }
      } as any

      const transformer = new StylesToSelector(
        mockProperty,
        '',
        () => ['margin-left: 0;'],
        false
      )

      expect(transformer.make()).toEqual([
        '&:first-child {',
        'margin-left: 0;',
        '}'
      ])
    })
  })

  describe('StylesToVar', () => {
    it('formats color token into ui.toColorRbg and extracts opacity', () => {
      const mockProperty = {
        item: {
          [PropertyKey.name]: '--color-primary',
          [PropertyKey.css]: '#123456',
          [PropertyKey.cssColorOpacity]: '0.9'
        }
      } as any

      const transformer = new StylesToVar(mockProperty, '', () => [], false)
      expect(transformer.make()).toEqual([
        '--color-primary: #{ui.toColorRbg(#123456)};',
        '--color-primary-opacity: 0.9;'
      ])
    })

    it('formats default color opacity helper when opacity is boolean/unset', () => {
      const mockProperty = {
        item: {
          [PropertyKey.name]: '--color-accent',
          [PropertyKey.css]: '#abcdef',
          [PropertyKey.cssColorOpacity]: true
        }
      } as any

      const transformer = new StylesToVar(mockProperty, '', () => [], false)
      expect(transformer.make()).toEqual([
        '--color-accent: #{ui.toColorRbg(#abcdef)};',
        '--color-accent-opacity: #{ui.toColorOpacity(#abcdef)};'
      ])
    })

    it('processes nested variable objects recursively', () => {
      const mockProperty = {
        value: {
          'spacing.sm': {
            [PropertyKey.name]: '--spacing-sm',
            [PropertyKey.variable]: PropertyType.var,
            [PropertyKey.css]: '10px'
          }
        }
      } as any

      const transformer = new StylesToVar(mockProperty, '', () => [], false)
      expect(transformer.make()).toEqual(['--spacing-sm: 10px;'])
    })
  })

  describe('StylesToVirtual', () => {
    it('generates ::before and ::after pseudo-elements with default content property', () => {
      for (const name of ['before', 'after']) {
        const mockProperty = {
          item: {
            [PropertyKey.name]: name
          }
        } as any

        const transformer = new StylesToVirtual(
          mockProperty,
          '',
          () => ['position: absolute;'],
          false
        )

        expect(transformer.make()).toEqual([
          `&::${name} {`,
          `  content: ' ';`,
          'position: absolute;',
          '}'
        ])
      }
    })

    it('generates other pseudo-elements without default content property', () => {
      const mockProperty = {
        item: {
          [PropertyKey.name]: 'backdrop'
        }
      } as any

      const transformer = new StylesToVirtual(
        mockProperty,
        '',
        () => ['background: rgba(0,0,0,0.5);'],
        false
      )

      expect(transformer.make()).toEqual([
        '&::backdrop {',
        'background: rgba(0,0,0,0.5);',
        '}'
      ])
    })
  })
})
