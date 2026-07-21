import { describe, it, expect } from 'vitest'
import { PluginImport } from '../PluginImport'

describe('PluginImport', () => {
  it('should import style.css if not present already', () => {
    const pImport = new PluginImport('my-package', 'console.log("hello");')
    pImport.importStyle()
    expect(pImport.get()).toBe("import 'my-package/style.css';console.log(\"hello\");")
  })

  it('should not duplicate import if already present', () => {
    const pImport = new PluginImport('my-package', "import 'my-package/style.css';console.log(\"hello\");")
    pImport.importStyle()
    expect(pImport.get()).toBe("import 'my-package/style.css';console.log(\"hello\");")
  })
})
