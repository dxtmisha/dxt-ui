import { describe, it, expect } from 'vitest'
import { PluginTool } from '../PluginTool'

describe('PluginTool', () => {
  describe('isSrc', () => {
    it('should identify user source files outside node_modules', () => {
      expect(PluginTool.isSrc('/project/src/main.ts')).toBe(true)
      expect(PluginTool.isSrc('/project/SRC/components/Button.vue')).toBe(true)
      expect(PluginTool.isSrc('/project/node_modules/pkg/src/main.ts')).toBe(false)
      expect(PluginTool.isSrc('/project/src/node_modules/main.ts')).toBe(false)
      expect(PluginTool.isSrc('/project/dist/main.ts')).toBe(false)
      expect(PluginTool.isSrc('')).toBe(false)
    })
  })

  describe('isJs', () => {
    it('should identify user JS/TS/TSX files', () => {
      expect(PluginTool.isJs('/project/src/main.ts')).toBe(true)
      expect(PluginTool.isJs('/project/src/main.js')).toBe(true)
      expect(PluginTool.isJs('/project/src/main.tsx')).toBe(true)
      expect(PluginTool.isJs('/project/src/main.css')).toBe(false)
      expect(PluginTool.isJs('/project/node_modules/pkg/src/main.ts')).toBe(false)
    })
  })

  describe('isVue', () => {
    it('should identify user Vue SFC files', () => {
      expect(PluginTool.isVue('/project/src/App.vue')).toBe(true)
      expect(PluginTool.isVue('/project/src/App.vue?vue&type=style&lang.scss')).toBe(false)
      expect(PluginTool.isVue('/project/src/App.ts')).toBe(false)
      expect(PluginTool.isVue('/project/node_modules/pkg/src/App.vue')).toBe(false)
    })
  })

  describe('isCss', () => {
    it('should identify user CSS/SASS/SCSS files and virtual style blocks', () => {
      expect(PluginTool.isCss('/project/src/style.css')).toBe(true)
      expect(PluginTool.isCss('/project/src/style.scss')).toBe(true)
      expect(PluginTool.isCss('/project/src/style.sass')).toBe(true)
      expect(PluginTool.isCss('/project/src/App.vue?vue&type=style&index=0&lang.scss')).toBe(true)
      expect(PluginTool.isCss('/project/src/style.ts')).toBe(false)
      expect(PluginTool.isCss('/project/node_modules/pkg/src/style.scss')).toBe(false)
    })
  })

  describe('isDev', () => {
    it('should identify development mode accurately', () => {
      expect(PluginTool.isDev('development')).toBe(true)
      expect(PluginTool.isDev('production')).toBe(false)
      expect(PluginTool.isDev('test')).toBe(false)
      expect(PluginTool.isDev('')).toBe(false)
    })
  })
})
