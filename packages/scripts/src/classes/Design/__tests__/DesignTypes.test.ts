import { afterEach, describe, expect, it, vi } from 'vitest'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { DesignTypes } from '../DesignTypes'
import { DesignTypesAi } from '../DesignTypesAi'
import { DesignTypesBuild } from '../DesignTypesBuild'
import { DesignTypesBuildAbstract } from '../DesignTypesBuildAbstract'
import { DesignTypesMake } from '../DesignTypesMake'
import { DesignTypesMakeAbstract } from '../DesignTypesMakeAbstract'
import { DesignTypesMcp } from '../DesignTypesMcp'
import { DesignTypesPrompts } from '../DesignTypesPrompts'
import { DesignTypesPromptsAbstract } from '../DesignTypesPromptsAbstract'

class TestDesignTypesBuild extends DesignTypesBuild {
  public testIsAllowed(file: string) {
    return this.isAllowed(file)
  }

  public testIsAllowedDeclaration(file: string) {
    return this.isAllowedDeclaration(file)
  }

  public testIsExclude(file: string) {
    return this.isExclude(file)
  }

  public testIsFileDts(file: string) {
    return this.isFileDts(file)
  }

  public testIsFileTest(file: string) {
    return this.isFileTest(file)
  }

  public testIsFileTs(file: string) {
    return this.isFileTs(file)
  }

  public testIsMatch(file: string) {
    return this.isMatch(file)
  }

  public testIsPath(file: string) {
    return this.isPath(file)
  }

  public testIsPattern(file: string, pattern?: string | string[]) {
    return this.isPattern(file, pattern)
  }

  public testGetTemporaryDirectory() {
    return this.getTemporaryDirectory()
  }

  public testGetTsConfigName() {
    return this.getTsConfigName()
  }

  public testGetTsSourceFiles() {
    return this.getTsSourceFiles()
  }

  public testGetTsConfiguration() {
    return this.getTsConfiguration()
  }

  public testBuildTs() {
    return this.buildTs()
  }

  public testBuildVue() {
    return this.buildVue()
  }

  public testCleanExcess() {
    return this.cleanExcess()
  }
}

class TestDesignTypesMake extends DesignTypesMake {
  public testIsContent(content?: string) {
    return this.isContent(content)
  }

  public testHasJSDoc(content: string) {
    return this.hasJSDoc(content)
  }

  public testCleanContent(content: string) {
    return this.cleanContent(content)
  }

  public testGetMd5Header(md5?: string, isProcessed?: boolean) {
    return this.getMd5Header(md5, isProcessed)
  }

  public testGetTemporaryDirectory() {
    return this.getTemporaryDirectory()
  }

  public testGetDistDirectory() {
    return this.getDistDirectory()
  }

  public testToOneFile(list: any[]) {
    return this.toOneFile(list)
  }

  public testGetAiTypesConcurrency() {
    return this.AI_TYPES_CONCURRENCY
  }

  public async testSaveListAi(files: any[], fullJsContent: string) {
    return this.saveListAi(files, fullJsContent)
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

    it('generates MD5 hash for content', () => {
      const ai = new DesignTypesAi('dist')
      const md5 = ai.getMd5('hello world')
      expect(md5).toHaveLength(32)
      expect(ai.getMd5('  hello world  ')).toBe(md5)
    })

    it('identifies declaration and JS files with isFile and isFileJs', () => {
      const ai = new DesignTypesAi('dist')
      expect(ai.isFile('index.d.ts')).toBe(true)
      expect(ai.isFile('props.d.ts')).toBe(true)
      expect(ai.isFile('index.ts')).toBe(false)
      expect(ai.isFileJs('index.js')).toBe(true)
      expect(ai.isFileJs('index.ts')).toBe(false)
    })
  })

  describe('DesignTypesBuild', () => {
    const build = new TestDesignTypesBuild('ai-types-temp')

    it('identifies TypeScript source files correctly', () => {
      expect(build.testIsFileTs('src/index.ts')).toBe(true)
      expect(build.testIsFileTs('src/Button.tsx')).toBe(true)
      expect(build.testIsFileTs('src/legacy.js')).toBe(true)
      expect(build.testIsFileTs('src/Button.vue')).toBe(true)
      expect(build.testIsFileTs('src/index.d.ts')).toBe(false)
      expect(build.testIsFileTs('src/__tests__/Button.test.ts')).toBe(false)
      expect(build.testIsFileTs('src/Button.test.ts')).toBe(false)
      expect(build.testIsFileTs('src/Button.spec.ts')).toBe(false)
      expect(build.testIsFileTs('src/Button.stories.ts')).toBe(false)
      expect(build.testIsFileTs('src/Button.stories.tsx')).toBe(false)
      expect(build.testIsFileTs('src/Button.stories.vue')).toBe(false)
    })

    it('identifies declaration and test files correctly with isFileDts and isFileTest', () => {
      expect(build.testIsFileDts('src/index.d.ts')).toBe(true)
      expect(build.testIsFileDts('src/index.ts')).toBe(false)

      expect(build.testIsFileTest('src/__tests__/Button.test.ts')).toBe(true)
      expect(build.testIsFileTest('src/Button.test.ts')).toBe(true)
      expect(build.testIsFileTest('src/Button.spec.ts')).toBe(true)
      expect(build.testIsFileTest('src/Button.stories.ts')).toBe(true)
      expect(build.testIsFileTest('src/Button.stories.d.ts')).toBe(true)
      expect(build.testIsFileTest('src/Button.ts')).toBe(false)
    })

    it('checks if project contains Vue files', () => {
      expect(typeof build.isVue()).toBe('boolean')

      vi.spyOn(PropertiesConfig, 'isTypesWithoutVue').mockReturnValue(true)
      expect(build.isVue()).toBe(false)

      vi.spyOn(PropertiesConfig, 'isTypesWithoutVue').mockReturnValue(false)
      vi.spyOn(PropertiesConfig, 'getTypesPaths').mockReturnValue(['src'])
      vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
      vi.spyOn(PropertiesFile, 'readDirRecursive').mockReturnValue(['Button.vue', 'index.ts'])
      vi.spyOn(PropertiesFile, 'joinPath').mockImplementation((p: any) => Array.isArray(p) ? p.join('/') : String(p))

      expect(build.isVue()).toBe(true)

      vi.spyOn(PropertiesFile, 'readDirRecursive').mockReturnValue(['index.ts', 'Button.d.ts'])
      expect(build.isVue()).toBe(false)
    })

    it('checks if temporary directory exists via is()', () => {
      const isSpy = vi.spyOn(PropertiesFile, 'is')
      isSpy.mockReturnValueOnce(true)
      expect(build.is()).toBe(true)

      isSpy.mockReturnValueOnce(false)
      expect(build.is()).toBe(false)
    })

    it('resolves temporary directory correctly', () => {
      expect(build.testGetTemporaryDirectory()).toBe('ai-types-temp')
      const defaultBuild = new TestDesignTypesBuild()
      expect(defaultBuild.testGetTemporaryDirectory()).toBe('ai-types-temp')
    })

    it('executes clean() and removes temporary directory if it exists', () => {
      const isSpy = vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
      const removeDirSpy = vi.spyOn(PropertiesFile, 'removeDir').mockImplementation(() => {})

      const result = build.clean()
      expect(result).toBe(build)
      expect(isSpy).toHaveBeenCalledWith('ai-types-temp')
      expect(removeDirSpy).toHaveBeenCalledWith('ai-types-temp')

      isSpy.mockReturnValue(false)
      removeDirSpy.mockClear()
      build.clean()
      expect(removeDirSpy).not.toHaveBeenCalled()
    })

    it('executes build() by calling clean() and branching by isVue()', () => {
      const cleanSpy = vi.spyOn(build, 'clean').mockReturnValue(build)
      const isVueSpy = vi.spyOn(build, 'isVue')
      const buildVueSpy = vi.spyOn(build as any, 'buildVue').mockReturnValue(build)
      const buildTsSpy = vi.spyOn(build as any, 'buildTs').mockReturnValue(build)

      // Vue project branch
      isVueSpy.mockReturnValue(true)
      const resultVue = build.build()
      expect(resultVue).toBe(build)
      expect(cleanSpy).toHaveBeenCalledTimes(1)
      expect(buildVueSpy).toHaveBeenCalledTimes(1)
      expect(buildTsSpy).not.toHaveBeenCalled()

      cleanSpy.mockClear()
      buildVueSpy.mockClear()
      buildTsSpy.mockClear()

      // Non-Vue TypeScript project branch
      isVueSpy.mockReturnValue(false)
      const resultTs = build.build()
      expect(resultTs).toBe(build)
      expect(cleanSpy).toHaveBeenCalledTimes(1)
      expect(buildTsSpy).toHaveBeenCalledTimes(1)
      expect(buildVueSpy).not.toHaveBeenCalled()
    })

    it('resolves TypeScript config name with fallback hierarchy', () => {
      const isSpy = vi.spyOn(PropertiesFile, 'is')

      isSpy.mockImplementation((file: any) => file === 'tsconfig.app.json')
      expect(build.testGetTsConfigName()).toBe('tsconfig.app.json')

      isSpy.mockImplementation((file: any) => file === 'tsconfig.json')
      expect(build.testGetTsConfigName()).toBe('tsconfig.json')

      isSpy.mockReturnValue(false)
      expect(build.testGetTsConfigName()).toBeUndefined()
    })

    it('handles match, exclusion, and path filters correctly', () => {
      expect(build.testIsMatch('src/Button.ts')).toBe(true)
      expect(build.testIsExclude('src/Button.ts')).toBe(false)
      expect(build.testIsPath('src/Button.ts')).toBe(true)
      expect(build.testIsAllowed('src/Button.ts')).toBe(true)
      expect(build.testIsAllowed('src/Button.d.ts')).toBe(false)

      vi.spyOn(PropertiesConfig, 'getTypesMatch').mockReturnValue('Button')
      expect(build.testIsMatch('src/Button.ts')).toBe(true)
      expect(build.testIsMatch('src/Input.ts')).toBe(false)

      vi.spyOn(PropertiesConfig, 'getTypesExclude').mockReturnValue(['legacy'])
      expect(build.testIsExclude('src/legacy.ts')).toBe(true)
      expect(build.testIsExclude('src/Button.ts')).toBe(false)

      vi.spyOn(PropertiesConfig, 'getTypesPaths').mockReturnValue(['src/components'])
      expect(build.testIsPath('src/components/Button.ts')).toBe(true)
      expect(build.testIsPath('src/media/icon.ts')).toBe(false)
    })

    it('handles pattern matching and invalid regex fallback', () => {
      expect(build.testIsPattern('src/Button.ts')).toBe(false)
      expect(build.testIsPattern('src/Button.ts', 'Button')).toBe(true)
      expect(build.testIsPattern('src/Button.ts', ['[0-9]+', 'Button'])).toBe(true)
      expect(build.testIsPattern('src/Button.ts', '[0-9]+')).toBe(false)
      // Invalid regex fallback to substring search
      expect(build.testIsPattern('src/[invalid/file.ts', '[invalid')).toBe(true)
    })

    it('handles buildVue falling back to buildTs when tsconfig is absent', () => {
      vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
      const buildTsSpy = vi.spyOn(build as any, 'buildTs').mockReturnValue(build)

      const result = build.testBuildVue()
      expect(result).toBe(build)
      expect(buildTsSpy).toHaveBeenCalled()
    })

    it('identifies allowed declaration files correctly with isAllowedDeclaration', () => {
      expect(build.testIsAllowedDeclaration('components/Ui/Button/props.d.ts')).toBe(true)
      expect(build.testIsAllowedDeclaration('library/D1Button.d.ts')).toBe(true)

      // Unwanted files
      expect(build.testIsAllowedDeclaration('main.d.ts')).toBe(false)
      expect(build.testIsAllowedDeclaration('src/main.d.ts')).toBe(false)
      expect(build.testIsAllowedDeclaration('App.d.ts')).toBe(false)
      expect(build.testIsAllowedDeclaration('src/App.d.ts')).toBe(false)
      expect(build.testIsAllowedDeclaration('components/Ui/Button/__tests__/Button.test.d.ts')).toBe(false)
      expect(build.testIsAllowedDeclaration('components/Ui/Button/Button.stories.d.ts')).toBe(false)
      expect(build.testIsAllowedDeclaration('components/Ui/Button/style.css')).toBe(false)
      expect(build.testIsAllowedDeclaration('components/Ui/Button/index.ts')).toBe(false)

      vi.spyOn(PropertiesConfig, 'getTypesExclude').mockReturnValue(['legacy'])
      expect(build.testIsAllowedDeclaration('components/legacy/props.d.ts')).toBe(false)
    })

    it('cleans excess declaration files in temporary directory with cleanExcess', () => {
      vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
      vi.spyOn(PropertiesFile, 'readDirRecursive').mockReturnValue([
        'components/Ui/Button/props.d.ts',
        'main.d.ts',
        'App.d.ts',
        'components/Ui/Button/Button.stories.d.ts'
      ])

      const removeFileSpy = vi.spyOn(PropertiesFile, 'removeFile').mockImplementation(() => {})

      const result = build.testCleanExcess()
      expect(result).toBe(build)
      expect(removeFileSpy).toHaveBeenCalledTimes(3)
      expect(removeFileSpy).toHaveBeenCalledWith(['ai-types-temp', 'main.d.ts'])
      expect(removeFileSpy).toHaveBeenCalledWith(['ai-types-temp', 'App.d.ts'])
      expect(removeFileSpy).toHaveBeenCalledWith(['ai-types-temp', 'components/Ui/Button/Button.stories.d.ts'])
      expect(removeFileSpy).not.toHaveBeenCalledWith(['ai-types-temp', 'components/Ui/Button/props.d.ts'])
    })
  })

  describe('DesignTypesMake', () => {
    const ai = new DesignTypesAi('dist-temporary')
    const make = new TestDesignTypesMake(ai, 'dist-temporary')

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
      expect(cleaned).not.toContain('import { foo } from \'./foo\'')
      expect(cleaned).not.toContain('export * from \'./bar\'')
      expect(cleaned).toContain('export type A = string;')
    })

    it('cleans content via AST with multiline and structural precision', () => {
      const raw = [
        'import { helper } from \'@dxtmisha/functional-basic\';',
        'declare class Example {',
        '  private configuration: {',
        '    option: boolean;',
        '  };',
        '  protected execute(',
        '    option: string',
        '  ): void;',
        '  public method(): string;',
        '}',
        'export { extra } from \'./extra\';',
        'export type A = string;'
      ].join('\n')

      const cleaned = make.testCleanContent(raw)

      expect(cleaned).not.toContain('private configuration')
      expect(cleaned).not.toContain('protected execute')
      expect(cleaned).not.toContain('\'./extra\'')
      expect(cleaned).toContain('@dxtmisha/functional-basic')
      expect(cleaned).toContain('public method(): string;')
      expect(cleaned).toContain('export type A = string;')
    })

    it('generates MD5 hashes and formatted headers', () => {
      const md5 = ai.getMd5('export type X = 1')
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

    it('resolves temporary directory and dist directory correctly', () => {
      expect(make.testGetTemporaryDirectory()).toBe('dist-temporary')
      expect(make.testGetDistDirectory()).toBe('dist')
      const customMake = new TestDesignTypesMake(new DesignTypesAi(), 'my-temp', 'my-dist')
      expect(customMake.testGetTemporaryDirectory()).toBe('my-temp')
      expect(customMake.testGetDistDirectory()).toBe('my-dist')
    })

    it('processes AI types concurrently with limited parallelism', async () => {
      const saveFileSpy = vi.spyOn(make as any, 'saveFile').mockImplementation(() => {})

      let inFlight = 0
      let maxInFlight = 0

      vi.spyOn(make as any, 'toAiEdit').mockImplementation(async () => {
        inFlight += 1
        maxInFlight = Math.max(maxInFlight, inFlight)
        await new Promise(resolve => setTimeout(resolve, 10))
        inFlight -= 1
        return 'export type Optimized = 1;'
      })

      const concurrencyLimit = make.testGetAiTypesConcurrency()
      const filesCount = concurrencyLimit + 4

      const files = Array.from({ length: filesCount }, (_item, index) => ({
        path: `file-${index}.d.ts`,
        content: `import { example } from './example';\nexport type File${index} = 1;`
      }))

      await make.testSaveListAi(files, '')

      expect(maxInFlight).toBeGreaterThan(1)
      expect(maxInFlight).toBeLessThanOrEqual(concurrencyLimit)
      expect(saveFileSpy).toHaveBeenCalledTimes(filesCount)
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
    it('extends DesignTypesPromptsAbstract', () => {
      const ai = new DesignTypesAi('dist')
      const prompts = new DesignTypesPrompts('ai-resources', ai)
      expect(prompts).toBeInstanceOf(DesignTypesPromptsAbstract)
    })

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

  describe('DesignTypes Orchestrator', () => {
    it('extends DesignTypesBuildAbstract and DesignTypesMakeAbstract', () => {
      const build = new DesignTypesBuild('ai-types-temp')
      const ai = new DesignTypesAi('ai-types-temp')
      const make = new DesignTypesMake(ai, 'ai-types-temp')

      expect(build).toBeInstanceOf(DesignTypesBuildAbstract)
      expect(make).toBeInstanceOf(DesignTypesMakeAbstract)
    })

    it('accepts custom constructors map in DesignTypes', async () => {
      class CustomPrompts extends DesignTypesPrompts {
        getCacheList() {
          return []
        }

        async make() {
          return this
        }

        async toAiPrompts() {
          return 'custom prompts'
        }
      }

      class CustomBuild extends DesignTypesBuild {
        build() {
          return this
        }
      }

      class CustomMake extends DesignTypesMake {
        async make() {
          return this
        }
      }

      const designTypes = new DesignTypes('ai-resources', 'ai-types-temp', 'dist', {
        DesignTypesBuildConstructor: CustomBuild,
        DesignTypesMakeConstructor: CustomMake,
        DesignTypesPromptsConstructor: CustomPrompts
      })
      expect(designTypes).toBeDefined()
    })

    it('initializes with default temporary directory', () => {
      const defaultDesignTypes = new DesignTypes()
      expect(defaultDesignTypes).toBeDefined()
    })
  })
})
