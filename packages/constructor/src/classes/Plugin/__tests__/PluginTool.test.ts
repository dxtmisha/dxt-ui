import { describe, it, expect } from 'vitest'
import { PluginTool } from '../PluginTool'

describe('PluginTool', () => {
  it('should identify user source files', () => {
    expect(PluginTool.isSrc('/project/src/main.ts')).toBe(true)
    expect(PluginTool.isSrc('/project/node_modules/pkg/src/main.ts')).toBe(false)
    expect(PluginTool.isSrc('/project/src/node_modules/main.ts')).toBe(false)
    expect(PluginTool.isSrc('/project/dist/main.ts')).toBe(false)
  })

  it('should identify user JS/TS files', () => {
    expect(PluginTool.isJs('/project/src/main.ts')).toBe(true)
    expect(PluginTool.isJs('/project/src/main.js')).toBe(true)
    expect(PluginTool.isJs('/project/src/main.tsx')).toBe(true)
    expect(PluginTool.isJs('/project/src/main.css')).toBe(false)
  })

  it('should identify user Vue files', () => {
    expect(PluginTool.isVue('/project/src/App.vue')).toBe(true)
    expect(PluginTool.isVue('/project/src/App.ts')).toBe(false)
  })

  it('should identify user Style files', () => {
    expect(PluginTool.isCss('/project/src/style.css')).toBe(true)
    expect(PluginTool.isCss('/project/src/style.scss')).toBe(true)
    expect(PluginTool.isCss('/project/src/style.sass')).toBe(true)
    expect(PluginTool.isCss('/project/src/style.ts')).toBe(false)
  })

  it('should identify development mode', () => {
    expect(PluginTool.isDev('development')).toBe(true)
    expect(PluginTool.isDev('production')).toBe(false)
  })
})
