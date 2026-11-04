import { describe, it, expect } from 'vitest'
import type { ConfigEnv, Rolldown, UserConfig } from 'vite'
import { Plugin } from '../Plugin'

type TransformFn = (code: string, id: string) => Rolldown.TransformResult

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
      const userConfig: UserConfig = {}
      const env: ConfigEnv = { mode: 'development', command: 'serve' }
      const applyResult = config.apply(userConfig, env)
      expect(applyResult).toBe(true)
    }
  })

  it('should transform main file with sourcemap on first JS/TS transform and return null for unmodified files', () => {
    const plugin = new Plugin('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)
    const config = plugin.init()

    if (typeof config.transform === 'function') {
      const transform = config.transform as TransformFn
      const code = 'const x = 1;'
      const result = transform(code, '/project/src/main.ts')

      expect(result).toBeDefined()
      if (result && typeof result === 'object' && 'code' in result) {
        expect(result.code).toBe('import \'pkg-a/style.css\';const x = 1;')
        expect(result.map).toBeDefined()
        if (result.map && typeof result.map === 'object' && 'version' in result.map) {
          expect(result.map.version).toBe(3)
          expect(result.map.sources).toEqual(['/project/src/main.ts'])
        }
      }

      const secondResult = transform(code, '/project/src/other.ts')
      expect(secondResult).toBeNull()
    }
  })

  it('should transform Vue component with auto-imports and generate valid sourcemap', () => {
    const plugin = new Plugin('DesignA', 'pkg-a', componentsReg, styleVarsReg, componentsList)
    const config = plugin.init()

    if (typeof config.transform === 'function') {
      const transform = config.transform as TransformFn
      const vueCode = '<template><my-button /></template>\n<script setup>\nconst a = 1;\n</script>'
      const result = transform(vueCode, '/project/src/App.vue')

      expect(result).not.toBeNull()
      if (result && typeof result === 'object' && 'code' in result) {
        expect(result.code).toContain('import { MyButton } from\'pkg-a/MyButton\';')
        expect(result.map).toBeDefined()
        if (result.map && typeof result.map === 'object' && 'version' in result.map) {
          expect(result.map.version).toBe(3)
          expect(result.map.sources).toEqual(['/project/src/App.vue'])
        }
      }
    }
  })

  it('should respect plugin options disabling map, styleMain, component, and style', () => {
    const plugin = new Plugin(
      'DesignA',
      'pkg-a',
      componentsReg,
      styleVarsReg,
      componentsList,
      'custom-plugin',
      {
        styleMain: false,
        component: false,
        style: false,
        map: false
      }
    )
    const config = plugin.init()

    if (typeof config.transform === 'function') {
      const transform = config.transform as TransformFn
      expect(transform('const x = 1;', '/project/src/main.ts')).toBeNull()
      expect(transform('<template><my-button /></template>', '/project/src/App.vue')).toBeNull()
      expect(transform('.btn { color: var(--sys-color-primary); }', '/project/src/style.scss')).toBeNull()
    }
  })

  it('should return null map when map option is false', () => {
    const plugin = new Plugin(
      'DesignA',
      'pkg-a',
      componentsReg,
      styleVarsReg,
      componentsList,
      'custom-plugin',
      { map: false }
    )
    const config = plugin.init()

    if (typeof config.transform === 'function') {
      const transform = config.transform as TransformFn
      const result = transform('const x = 1;', '/project/src/main.ts')

      expect(result).not.toBeNull()
      if (result && typeof result === 'object' && 'map' in result) {
        expect(result.map).toBeNull()
      }
    }
  })
})
