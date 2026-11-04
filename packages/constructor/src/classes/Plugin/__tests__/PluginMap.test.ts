import { describe, it, expect } from 'vitest'
import { PluginCode } from '../PluginCode'
import { PluginMap } from '../PluginMap'

describe('PluginMap', () => {
  it('should return null when code was not modified', () => {
    const pluginCode = new PluginCode('/project/src/main.ts', 'const a = 1;')
    const pluginMap = new PluginMap(pluginCode)

    expect(pluginMap.get()).toBeNull()
  })

  it('should generate sourcemap when code is prepended at start', () => {
    const pluginCode = new PluginCode('/project/src/main.ts', 'const a = 1;\nconsole.log(a);')
    pluginCode.addStart('import \'pkg/style.css\';\n')

    const map = new PluginMap(pluginCode).get()

    expect(map).not.toBeNull()
    expect(map?.version).toBe(3)
    expect(map?.sources).toEqual(['/project/src/main.ts'])
    expect(map?.sourcesContent).toEqual(['const a = 1;\nconsole.log(a);'])
    expect(map?.mappings).toBeTruthy()
  })

  it('should generate sourcemap when code is inserted in the middle (after script setup)', () => {
    const original = '<template><MyButton /></template>\n<script setup>\nconst a = 1;\n</script>'
    const pluginCode = new PluginCode('/project/src/App.vue', original)
    pluginCode.addAfterScript('import { MyButton } from \'pkg/MyButton\';\n')

    const map = new PluginMap(pluginCode).get()

    expect(map).not.toBeNull()
    expect(map?.version).toBe(3)
    expect(map?.sources).toEqual(['/project/src/App.vue'])
    expect(map?.sourcesContent).toEqual([original])
    expect(map?.mappings).toBeTruthy()
  })

  it('should generate sourcemap when code is overwritten by replacements', () => {
    const original = '.btn {\n  color: var(--sys-color-primary);\n}'
    const pluginCode = new PluginCode('/project/src/style.scss', original)
    pluginCode.replace('--sys-color-primary', 'd1-sys-color-primary')

    const map = new PluginMap(pluginCode).get()

    expect(map).not.toBeNull()
    expect(map?.version).toBe(3)
    expect(map?.sources).toEqual(['/project/src/style.scss'])
    expect(map?.sourcesContent).toEqual([original])
    expect(map?.mappings).toBeTruthy()
  })

  it('should generate sourcemap when code is appended at the very end', () => {
    const original = 'const a = 1;'
    const pluginCode = new PluginCode('/project/src/main.ts', original)
    pluginCode.set('const a = 1;\nconst b = 2;')

    const map = new PluginMap(pluginCode).get()

    expect(map).not.toBeNull()
    expect(map?.sources).toEqual(['/project/src/main.ts'])
    expect(map?.sourcesContent).toEqual([original])
  })
})
