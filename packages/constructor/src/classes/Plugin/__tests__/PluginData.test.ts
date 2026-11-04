import { describe, it, expect } from 'vitest'
import { PluginData } from '../PluginData'

describe('PluginData', () => {
  const componentsList = [
    { name: 'MyButton', reg: /my-button/ },
    { name: 'MyInput', reg: /my-input/ }
  ]
  const componentsReg = /my-button|my-input|MyButton/g
  const styleVarsReg = /--my-sys-[a-z-]+/g

  it('should initialize properties and styleModification map correctly', () => {
    const data = new PluginData('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)

    expect(data.getDesign()).toBe('DesignA')
    expect(data.getPackageName()).toBe('pkg-a')
    expect(data.getStyleVarsReg()).toBe(styleVarsReg)

    const styleMod = data.getStyleModification()
    expect(styleMod['background-color']).toBe('backgroundColor')
    expect(styleMod['padding-x']).toBe('paddingX')
  })

  it('should detect component and style variables presence in code', () => {
    const data = new PluginData('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)

    expect(data.hasComponent('some code with my-button inside')).toBe(true)
    expect(data.hasComponent('pure code')).toBe(false)

    expect(data.hasVars('style: var(--my-sys-color-primary)')).toBe(true)
    expect(data.hasVars('pure style')).toBe(false)
  })

  it('should extract unique matching components from code by tag or exact name', () => {
    const data = new PluginData('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)

    const code = '<div><my-button></my-button><MyButton /><my-input></my-input></div>'
    const components = data.getComponents(code)

    expect(components.length).toBe(2)
    expect(components[0]?.name).toBe('MyButton')
    expect(components[1]?.name).toBe('MyInput')
  })

  it('should return empty array when no components match', () => {
    const data = new PluginData('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)

    expect(data.getComponents('<div>plain html</div>')).toEqual([])
  })

  it('should not extract components that are already explicitly imported from the package', () => {
    const data = new PluginData('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)

    const code = `
      import { MyButton } from 'pkg-a/MyButton';
      <div><my-button></my-button><my-input></my-input></div>
    `
    const components = data.getComponents(code)

    expect(components.length).toBe(1)
    expect(components[0]?.name).toBe('MyInput')
  })
})
