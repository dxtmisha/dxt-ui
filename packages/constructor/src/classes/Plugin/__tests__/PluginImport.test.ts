import { describe, it, expect } from 'vitest'
import { PluginImport } from '../PluginImport'

describe('PluginImport', () => {
  it('should import style.css if not present already and return instance for chaining', () => {
    const pluginImport = new PluginImport('my-package', 'console.log("hello");')
    const result = pluginImport.importStyle()

    expect(result).toBe(pluginImport)
    expect(pluginImport.get()).toBe('import \'my-package/style.css\';console.log("hello");')
  })

  it('should not duplicate import if already present', () => {
    const pluginImport = new PluginImport('my-package', 'import \'my-package/style.css\';console.log("hello");')
    pluginImport.importStyle()
    expect(pluginImport.get()).toBe('import \'my-package/style.css\';console.log("hello");')
  })

  it('should handle empty initial code', () => {
    const pluginImport = new PluginImport('@dxtmisha/d1', '')
    pluginImport.importStyle()
    expect(pluginImport.get()).toBe('import \'@dxtmisha/d1/style.css\';')
  })
})
