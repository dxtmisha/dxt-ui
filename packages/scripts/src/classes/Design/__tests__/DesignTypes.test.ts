import { afterEach, describe, expect, it, vi } from 'vitest'
import { DesignTypesAi } from '../DesignTypesAi'
import { DesignTypesMake } from '../DesignTypesMake'
import { DesignTypesMcp } from '../DesignTypesMcp'
import { DesignTypesPrompts } from '../DesignTypesPrompts'
import { PropertiesFile } from '../../Properties/PropertiesFile'

class TestDesignTypesMake extends DesignTypesMake {
  public testIsContent(content?: string) {
    return this.isContent(content)
  }

  public testIsFile(file: string) {
    return this.isFile(file)
  }

  public testIsFileJs(file: string) {
    return this.isFileJs(file)
  }

  public testHasJSDoc(content: string) {
    return this.hasJSDoc(content)
  }

  public testCleanContent(content: string) {
    return this.cleanContent(content)
  }

  public testGetMd5(content: string) {
    return this.getMd5(content)
  }

  public testGetMd5Header(md5?: string, isProcessed?: boolean) {
    return this.getMd5Header(md5, isProcessed)
  }

  public testToOneFile(list: any[]) {
    return this.toOneFile(list)
  }
}

class TestDesignTypesMcp extends DesignTypesMcp {
  public testGetMimeType(file: string) {
    return this.getMimeType(file)
  }
}

class TestDesignTypesPrompts extends DesignTypesPrompts {
  public testGetCachePath(path: string) {
    return this.getCachePath(path)
  }

  public testGetPromptLine(path: string, desc: string) {
    return this.getPromptLine(path, desc)
  }
}

describe('DesignTypes Subsystem', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('DesignTypesAi', () => {
    it('initializes dirArray and project name', () => {
      const ai = new DesignTypesAi('dist/types')
      expect(ai.getDirArray()).toEqual(['dist', 'types'])
      expect(typeof ai.getProjectName()).toBe('string')
    })
  })

  describe('DesignTypesMake', () => {
    const ai = new DesignTypesAi('dist')
    const make = new TestDesignTypesMake(ai)

    it('identifies valid declaration and JS files correctly', () => {
      expect(make.testIsFile('index.d.ts')).toBe(true)
      expect(make.testIsFile('Component.vue.d.ts')).toBe(false)
      expect(make.testIsFile('wiki.d.ts')).toBe(false)
      expect(make.testIsFileJs('index.js')).toBe(true)
      expect(make.testIsFileJs('index.ts')).toBe(false)
    })

    it('checks content for exports and JSDoc', () => {
      expect(make.testIsContent('export const x = 1')).toBe(true)
      expect(make.testIsContent('const x = 1')).toBe(false)
      expect(make.testHasJSDoc('/** JSDoc comment */')).toBe(true)
      expect(make.testHasJSDoc('// regular comment')).toBe(false)
    })

    it('cleans content by removing imports and internal declarations', () => {
      const raw = [
        'import { foo } from \'./foo\';',
        'import \'./style\';',
        'export * from \'./bar\';',
        '// comment line',
        'export type A = string;'
      ].join('\n')

      const cleaned = make.testCleanContent(raw)
      expect(cleaned).not.toContain("import { foo } from './foo'")
      expect(cleaned).not.toContain("export * from './bar'")
      expect(cleaned).toContain('export type A = string;')
    })

    it('generates MD5 hashes and formatted headers', () => {
      const md5 = make.testGetMd5('export type X = 1')
      expect(md5).toHaveLength(32)

      expect(make.testGetMd5Header(md5, false)).toBe(`// md5:${md5}`)
      expect(make.testGetMd5Header(md5, true)).toBe(`// md5:${md5} true`)
    })

    it('combines file items into one string', () => {
      const list = [
        { path: 'a.d.ts', content: 'export type A = 1;' },
        { path: 'b.d.ts', content: 'export type B = 2;' }
      ] as any
      expect(make.testToOneFile(list)).toBe('export type A = 1;\n\nexport type B = 2;')
    })
  })

  describe('DesignTypesMcp', () => {
    it('determines correct MIME types by file extension', () => {
      const ai = new DesignTypesAi('dist')
      const prompts = new DesignTypesPrompts('ai-resources', ai)
      const mcp = new TestDesignTypesMcp(ai, prompts)

      expect(mcp.testGetMimeType('image.webp')).toBe('image/webp')
      expect(mcp.testGetMimeType('image.png')).toBe('image/png')
      expect(mcp.testGetMimeType('image.jpg')).toBe('image/jpeg')
      expect(mcp.testGetMimeType('vector.svg')).toBe('image/svg+xml')
      expect(mcp.testGetMimeType('page.html')).toBe('text/html')
      expect(mcp.testGetMimeType('styles.css')).toBe('text/css')
      expect(mcp.testGetMimeType('data.json')).toBe('application/json')
      expect(mcp.testGetMimeType('doc.md')).toBe('text/markdown')
      expect(mcp.testGetMimeType('plain.txt')).toBe('text/plain')
    })
  })

  describe('DesignTypesPrompts', () => {
    it('formats prompt rule lines and cache paths', () => {
      const ai = new DesignTypesAi('dist')
      const prompts = new TestDesignTypesPrompts('ai-resources', ai)

      const line = prompts.testGetPromptLine('ai-resources/rule.md', 'Architecture rules')
      expect(line).toContain('ai-resources/rule.md')
      expect(line).toContain('Architecture rules')

      const cachePath = prompts.testGetCachePath('ai-resources/sub/rule.md')
      expect(cachePath).toContain('sub/rule.json')
    })
  })
})
