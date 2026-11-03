import { describe, it, expect } from 'vitest'
import { Plugin } from '../Plugin'

describe('Plugin', () => {
  const componentsList = [
    { name: 'MyButton', reg: /my-button/ }
  ]
  const componentsReg = /my-button/g
  const styleVarsReg = /--(sys-color-[a-z-]+)/g

  it('should initialize and return Vite plugin configurations', () => {
    const plugin = new Plugin('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList, 'my-vite-plugin')
    const config = plugin.init()

    expect(config.name).toBe('my-vite-plugin')
    expect(config.enforce).toBe('pre')
    expect(config.apply).toBeDefined()
    expect(config.transform).toBeDefined()

    if (typeof config.apply === 'function') {
      const applyResult = config.apply({} as any, { mode: 'development', command: 'serve' })
      expect(applyResult).toBe(true)
    }
  })

  it('should transform main file with sourcemap on first JS/TS transform and return null for unmodified files', () => {
    const plugin = new Plugin('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)
    const config = plugin.init()

    if (config.transform && typeof config.transform === 'function') {
      const code = 'const x = 1;'
      const result = config.transform.call({} as any, code, '/project/src/main.ts') as any

      expect(result).toBeDefined()
      expect(result.code).toBe('import \'pkg-a/style.css\';const x = 1;')
      expect(result.map).toBeDefined()
      expect(result.map.version).toBe(3)
      expect(result.map.sources).toEqual(['/project/src/main.ts'])

      const secondResult = config.transform.call({} as any, code, '/project/src/other.ts') as any
      expect(secondResult).toBeNull()
    }
  })

  it('should transform Vue component with auto-imports and generate valid sourcemap', () => {
    const plugin = new Plugin('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)
    const config = plugin.init()

    if (config.transform && typeof config.transform === 'function') {
      const vueCode = '<template><my-button /></template>\n<script setup>\nconst a = 1;\n</script>'
      const result = config.transform.call({} as any, vueCode, '/project/src/App.vue') as any

      expect(result).not.toBeNull()
      expect(result.code).toContain('import { MyButton } from\'pkg-a/MyButton\';')
      expect(result.map).toBeDefined()
      expect(result.map.version).toBe(3)
      expect(result.map.sources).toEqual(['/project/src/App.vue'])
    }
  })
})
