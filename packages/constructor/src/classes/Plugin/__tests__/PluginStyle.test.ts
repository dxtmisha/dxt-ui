import { describe, it, expect } from 'vitest'
import { PluginStyle } from '../PluginStyle'
import { PluginCode } from '../PluginCode'
import { PluginData } from '../PluginData'

describe('PluginStyle', () => {
  const componentsList = [] as any
  const componentsReg = /my-button/g
  const styleVarsReg = /--(sys-color-[a-z-]+)/g

  it('should transform SCSS properties into mixins and variable names', () => {
    const pc = new PluginCode('/project/src/style.scss', '.my-class {\n  background-color: var(--sys-color-primary, #ffffff);\n  color: var(--sys-color-secondary);\n}')
    const pd = new PluginData('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)

    const pluginStyle = new PluginStyle(pc, pd, 'ui')
    pluginStyle.make()

    const result = pc.get()
    expect(result).toContain('@use \'pkg-a/ui-properties\' as ui;')
    expect(result).toContain('@include ui.backgroundColor(#{var(DesignA-sys-color-primary)});')
    expect(result).toContain('@include ui.color(#{var(DesignA-sys-color-secondary)});')
  })

  it('should respect css-ignore comments and skip transformation', () => {
    const pc = new PluginCode('/project/src/style.scss', '// DesignA-css-ignore\n.my-class {\n  background-color: var(--sys-color-primary);\n}')
    const pd = new PluginData('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)

    const pluginStyle = new PluginStyle(pc, pd, 'ui')
    pluginStyle.make()

    expect(pc.get()).not.toContain('@use \'pkg-a/ui-properties\'')
  })
})
