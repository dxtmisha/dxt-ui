import { describe, it, expect } from 'vitest'
import { PluginCode } from '../PluginCode'

describe('PluginCode', () => {
  it('should identify Vue and Scss files', () => {
    const vueCode = new PluginCode('/project/src/App.vue', 'vue content')
    expect(vueCode.isVue()).toBe(true)
    expect(vueCode.isScss()).toBe(false)

    const scssCode = new PluginCode('/project/src/style.scss', 'scss content')
    expect(scssCode.isVue()).toBe(false)
    expect(scssCode.isScss()).toBe(true)
  })

  it('should return code values, id, and modification status', () => {
    const pluginCode = new PluginCode('my-id', 'my-code')
    expect(pluginCode.getId()).toBe('my-id')
    expect(pluginCode.getCode()).toBe('my-code')
    expect(pluginCode.get()).toBe('my-code')
    expect(pluginCode.isModified()).toBe(false)
  })

  it('should check presence of patterns', () => {
    const pluginCode = new PluginCode('my-id', 'hello world 123')
    expect(pluginCode.has('world')).toBe(true)
    expect(pluginCode.has('missing')).toBe(false)
    expect(pluginCode.has(/\d+/)).toBe(true)
  })

  it('should insert code after script setup or fallback to prepending it', () => {
    const codeWithScript = new PluginCode('App.vue', '<script setup>const a = 1;</script>')
    codeWithScript.addAfterScript('const b = 2;')
    expect(codeWithScript.get()).toBe('<script setup>const b = 2;const a = 1;</script>')
    expect(codeWithScript.isModified()).toBe(true)

    const codeWithoutScript = new PluginCode('App.vue', '<div>template</div>')
    codeWithoutScript.addAfterScript('const b = 2;')
    expect(codeWithoutScript.get()).toBe('<script setup>\r\nconst b = 2;</script><div>template</div>')
    expect(codeWithoutScript.isModified()).toBe(true)
  })

  it('should add start, set, and replace text correctly', () => {
    const pluginCode = new PluginCode('my-id', 'world')
    pluginCode.addStart('hello ')
    expect(pluginCode.get()).toBe('hello world')
    expect(pluginCode.isModified()).toBe(true)

    pluginCode.replace('world', 'universe')
    expect(pluginCode.get()).toBe('hello universe')
    expect(pluginCode.isModified()).toBe(true)

    pluginCode.set('world')
    expect(pluginCode.isModified()).toBe(false)
  })

  it('should add start if not present already in original code', () => {
    const pluginCode = new PluginCode('my-id', 'world')
    pluginCode.addStartIfNone('hello ')
    expect(pluginCode.get()).toBe('hello world')

    pluginCode.addStartIfNone('hello ')
    expect(pluginCode.get()).toBe('hello hello world')
  })
})
