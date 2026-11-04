import { describe, it, expect } from 'vitest'
import { PluginStyle } from '../PluginStyle'
import { PluginCode } from '../PluginCode'
import { PluginData } from '../PluginData'
import type { PluginComponentImports } from '../../../types/pluginTypes'

describe('PluginStyle', () => {
  const componentsList: PluginComponentImports = []
  const componentsReg = /my-button/g
  const styleVarsReg = /--(sys-color-[a-z-]+)/g

  it('should transform SCSS properties into mixins and variable names', () => {
    const pluginCode = new PluginCode(
      '/project/src/style.scss',
      '.my-class {\n  background-color: var(--sys-color-primary, #ffffff);\n  color: var(--sys-color-secondary);\n  padding-x: 16px;\n}'
    )
    const pluginData = new PluginData('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)

    const pluginStyle = new PluginStyle(pluginCode, pluginData, 'ui')
    pluginStyle.make()

    const result = pluginCode.get()
    expect(result).toContain('@use \'pkg-a/ui-properties\' as ui;')
    expect(result).toContain('@include ui.backgroundColor(#{var(DesignA-sys-color-primary)});')
    expect(result).toContain('@include ui.color(#{var(DesignA-sys-color-secondary)});')
    expect(result).toContain('@include ui.paddingX(16px);')
  })

  it('should support wildcard (*) namespace without dot prefix', () => {
    const pluginCode = new PluginCode(
      '/project/src/style.scss',
      '.my-class {\n  width: 100px;\n}'
    )
    const pluginData = new PluginData('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)

    new PluginStyle(pluginCode, pluginData, '*').make()

    const result = pluginCode.get()
    expect(result).toContain('@use \'pkg-a/ui-properties\' as *;')
    expect(result).toContain('@include width(100px);')
  })

  it('should respect mode-none line comments and skip transformation on those lines', () => {
    const pluginCode = new PluginCode(
      '/project/src/style.scss',
      '.my-class {\n  color: var(--sys-color-primary, #ffffff); // DesignA-mode-none\n  width: 24px;\n}'
    )
    const pluginData = new PluginData('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)

    new PluginStyle(pluginCode, pluginData, 'ui').make()

    const result = pluginCode.get()
    expect(result).toContain('color: var(DesignA-sys-color-primary, #ffffff); // DesignA-mode-none')
    expect(result).toContain('@include ui.width(24px);')
  })

  it('should respect css-ignore comments and skip file transformation completely', () => {
    const pluginCode = new PluginCode(
      '/project/src/style.scss',
      '// DesignA-css-ignore\n.my-class {\n  background-color: var(--sys-color-primary);\n}'
    )
    const pluginData = new PluginData('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)

    new PluginStyle(pluginCode, pluginData, 'ui').make()

    expect(pluginCode.isModified()).toBe(false)
    expect(pluginCode.get()).not.toContain('@use \'pkg-a/ui-properties\'')
  })

  it('should skip empty SCSS files and non-SCSS files', () => {
    const emptyScss = new PluginCode('/project/src/empty.scss', '')
    const tsFile = new PluginCode('/project/src/main.ts', 'const width = 10;')
    const pluginData = new PluginData('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)

    new PluginStyle(emptyScss, pluginData).make()
    new PluginStyle(tsFile, pluginData).make()

    expect(emptyScss.isModified()).toBe(false)
    expect(tsFile.isModified()).toBe(false)
  })
})
