import { describe, it, expect } from 'vitest'
import { PluginComponents } from '../PluginComponents'
import { PluginCode } from '../PluginCode'
import { PluginData } from '../PluginData'

describe('PluginComponents', () => {
  const componentsList = [
    { name: 'MyButton', reg: /my-button/ },
    { name: 'MyInput', reg: /my-input/ }
  ]
  const componentsReg = /my-button|my-input/g
  const styleVarsReg = /--my-sys-[a-z-]+/g

  it('should inject imports for multiple components found in Vue code', () => {
    const pluginCode = new PluginCode(
      '/project/src/App.vue',
      '<script setup>\nconst a = 1;\n</script>\n<div><my-button></my-button><my-input /></div>'
    )
    const pluginData = new PluginData('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)

    const pluginComponents = new PluginComponents(pluginCode, pluginData)
    pluginComponents.make()

    expect(pluginCode.get()).toContain(
      '<script setup>import { MyButton } from\'pkg-a/MyButton\';\r\nimport { MyInput } from\'pkg-a/MyInput\';\nconst a = 1;\n</script>'
    )
  })

  it('should not inject anything if all matched components are already imported', () => {
    const original = '<script setup>\nimport { MyButton } from \'pkg-a/MyButton\'\n</script>\n<div><my-button /></div>'
    const pluginCode = new PluginCode('/project/src/App.vue', original)
    const pluginData = new PluginData('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)

    new PluginComponents(pluginCode, pluginData).make()

    expect(pluginCode.isModified()).toBe(false)
    expect(pluginCode.get()).toBe(original)
  })

  it('should not inject anything if code is not a Vue component', () => {
    const pluginCode = new PluginCode('/project/src/main.ts', 'const a = 1;')
    const pluginData = new PluginData('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)

    new PluginComponents(pluginCode, pluginData).make()

    expect(pluginCode.isModified()).toBe(false)
    expect(pluginCode.get()).toBe('const a = 1;')
  })
})
