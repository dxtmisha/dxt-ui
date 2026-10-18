import { fileURLToPath } from 'node:url'
import { compileString } from 'sass'
import { describe, expect, it } from 'vitest'

import { StylesToProperty } from '../to/StylesToProperty'
import { type PropertyItemsItem, PropertyKey } from '../../../types/propertyTypes'

describe('StylesToProperty color types', () => {
  const stylesDirectory = fileURLToPath(new URL('../../../../../styles/', import.meta.url))

  it.each([
    ['color', 'color', '--sys-color'],
    ['stroke', 'stroke', '--sys-color'],
    ['background-color', 'backgroundColor', '--sys-background'],
    ['fill', 'fill', '--sys-background'],
    ['gradient', 'gradient', '--sys-gradient'],
    ['border-color', 'borderColor', '--sys-border'],
    ['outline-color', 'outlineColor', '--sys-outline'],
    ['palette-color', 'paletteColor', '--sys-palette-color'],
    ['palette-stroke', 'paletteStroke', '--sys-palette-color'],
    ['palette-background', 'paletteBackground', '--sys-palette-background'],
    ['palette-fill', 'paletteFill', '--sys-palette-background'],
    ['palette-gradient', 'paletteGradient', '--sys-palette-gradient'],
    ['palette-border', 'paletteBorder', '--sys-palette-border']
  ])('preserves Color for %s in generated and mapped styles', (name, mixinName, variableName) => {
    const value = '#12345680'
    const property: PropertyItemsItem = {
      design: 'design',
      name,
      index: name,
      value,
      item: {
        value,
        [PropertyKey.name]: name,
        [PropertyKey.css]: value
      },
      parents: []
    }
    const generated = new StylesToProperty(property, '', () => [], false).make()

    expect(generated).toEqual([`@include ui.${mixinName}(${value});`])

    const result = compileString(`
      @use "properties" as ui;

      .generated { ${generated.join('\n')} }
      .mapped { @include ui.initPropertyValue('${name}', ${value}); }
    `, { loadPaths: [stylesDirectory] })
    const declarations = result.css.split('\n').map(line => line.trim())
    const channels = name.startsWith('palette-')
      ? 'var(--sys-palette, 18, 52, 86)'
      : '18, 52, 86'
    const opacity = name.startsWith('palette-')
      ? 'var(--sys-palette-opacity, 0.5019607843)'
      : '0.5019607843'

    expect(declarations.filter(line => line === `${variableName}: ${channels};`)).toHaveLength(2)
    expect(declarations.filter(line => line === `${variableName}-opacity: ${opacity};`)).toHaveLength(2)
    expect(result.css).not.toContain(`${variableName}: rgba(`)
  })

  it.each([
    ['#1234', '17, 34, 51', '0.2666666667'],
    ['#1230', '17, 34, 51', '0'],
    ['#12345600', '18, 52, 86', '0'],
    ['#ABCDEF80', '171, 205, 239', '0.5019607843']
  ])('extracts channels and native alpha from %s', (value, channels, opacity) => {
    const property: PropertyItemsItem = {
      design: 'design',
      name: 'color',
      index: 'color',
      value,
      item: {
        value,
        [PropertyKey.name]: 'color',
        [PropertyKey.css]: value
      },
      parents: []
    }
    const generated = new StylesToProperty(property, '', () => [], false).make()
    const result = compileString(`
      @use "properties" as ui;
      .generated { ${generated.join('\n')} }
      .mapped { @include ui.initPropertyValue('color', ${value}); }
    `, { loadPaths: [stylesDirectory] })

    expect(result.css.split(`--sys-color: ${channels};`)).toHaveLength(3)
    expect(result.css.split(`--sys-color-opacity: ${opacity};`)).toHaveLength(3)
  })

  it('keeps CSS color tokens in both generation paths', () => {
    const value = 'var(--theme-color)'
    const property: PropertyItemsItem = {
      design: 'design',
      name: 'color',
      index: 'color',
      value,
      item: {
        value,
        [PropertyKey.name]: 'color',
        [PropertyKey.css]: value
      },
      parents: []
    }
    const generated = new StylesToProperty(property, '', () => [], false).make()

    expect(generated).toEqual(['@include ui.color(#{var(--theme-color)});'])

    const result = compileString(`
      @use "properties" as ui;
      .generated { ${generated.join('\n')} }
      .mapped { @include ui.initPropertyValue('color', ${value}); }
    `, { loadPaths: [stylesDirectory] })

    expect(result.css.split('--sys-color: var(--theme-color);')).toHaveLength(3)
    expect(result.css.split('--sys-color-opacity-custom: var(--theme-color-opacity);')).toHaveLength(3)
  })
})
