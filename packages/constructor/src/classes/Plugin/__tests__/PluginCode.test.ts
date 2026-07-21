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

  it('should return code values and id', () => {
    const pc = new PluginCode('my-id', 'my-code')
    expect(pc.getId()).toBe('my-id')
    expect(pc.getCode()).toBe('my-code')
    expect(pc.get()).toBe('my-code')
  })

  it('should check presence of patterns', () => {
    const pc = new PluginCode('my-id', 'hello world 123')
    expect(pc.has('world')).toBe(true)
    expect(pc.has('missing')).toBe(false)
    expect(pc.has(/\d+/)).toBe(true)
  })

  it('should insert code after script setup or fallback to prepending it', () => {
    const pcWithScript = new PluginCode('my-id', '<script setup>const a = 1;</script>')
    pcWithScript.addAfterScript('const b = 2;')
    expect(pcWithScript.get()).toBe('<script setup>const b = 2;const a = 1;</script>')

    const pcWithoutScript = new PluginCode('my-id', '<div>template</div>')
    pcWithoutScript.addAfterScript('const b = 2;')
    expect(pcWithoutScript.get()).toBe('<script setup>\r\nconst b = 2;</script><div>template</div>')
  })

  it('should add start and replace text correctly', () => {
    const pc = new PluginCode('my-id', 'world')
    pc.addStart('hello ')
    expect(pc.get()).toBe('hello world')

    pc.replace('world', 'universe')
    expect(pc.get()).toBe('hello universe')
  })

  it('should add start if not present already in original code', () => {
    const pc = new PluginCode('my-id', 'world')
    pc.addStartIfNone('hello ')
    expect(pc.get()).toBe('hello world')

    pc.addStartIfNone('hello ')
    expect(pc.get()).toBe('hello hello world')
  })
})
