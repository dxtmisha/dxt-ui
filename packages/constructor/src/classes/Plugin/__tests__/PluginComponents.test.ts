import { describe, it, expect } from 'vitest'
import { PluginComponents } from '../PluginComponents'
import { PluginCode } from '../PluginCode'
import { PluginData } from '../PluginData'

describe('PluginComponents', () => {
  const componentsList = [
    { name: 'MyButton', reg: /my-button/ }
  ]
  const componentsReg = /my-button/g
  const styleVarsReg = /--my-sys-[a-z-]+/g

  it('should inject imports for components found in Vue code', () => {
    const pc = new PluginCode('/project/src/App.vue', '<script setup>\nconst a = 1;\n</script>\n<div><my-button></my-button></div>')
    const pd = new PluginData('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)

    const pluginComponents = new PluginComponents(pc, pd)
    pluginComponents.make()

    expect(pc.get()).toContain('import { MyButton } from\'pkg-a/MyButton\';')
    expect(pc.get()).toContain('<script setup>import { MyButton } from\'pkg-a/MyButton\';\nconst a = 1;\n</script>')
  })

  it('should not inject anything if code is not a Vue component', () => {
    const pc = new PluginCode('/project/src/main.ts', 'const a = 1;')
    const pd = new PluginData('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)

    const pluginComponents = new PluginComponents(pc, pd)
    pluginComponents.make()

    expect(pc.get()).toBe('const a = 1;')
  })
})
