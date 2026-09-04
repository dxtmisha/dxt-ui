import { afterEach, describe, expect, it, vi } from 'vitest'
import { LibraryAiPrompt } from '../LibraryAiPrompt'
import { LibraryAiPromptItem } from '../LibraryAiPromptItem'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'
import { PropertiesFile } from '../../Properties/PropertiesFile'

class TestLibraryAiPromptItem extends LibraryAiPromptItem {
  public testGetDescription() {
    return this.getDescription()
  }

  public testGetInfo() {
    return this.getInfo()
  }

  public testGetDeveloper() {
    return this.getDeveloper()
  }

  public testGetTypes() {
    return this.getTypes()
  }

  public testGetScreenshot() {
    return this.getScreenshot()
  }
}

describe('LibraryAiPrompt and LibraryAiPromptItem', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('LibraryAiPromptItem', () => {
    it('returns dir array and checks existence of prompt files', () => {
      const item = new TestLibraryAiPromptItem(['packages', 'scripts'])
      expect(item.getDir()).toEqual(['packages', 'scripts'])

      vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
      expect(item.isPrompt()).toBe(false)
    })

    it('formats description and info sections when files exist', () => {
      const item = new TestLibraryAiPromptItem(['packages', 'scripts'])

      vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
      vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue('Custom package description')

      const desc = item.testGetDescription()
      expect(desc).toContain('## Package Description & Module Overview')
      expect(desc).toContain('Custom package description')

      const info = item.testGetInfo()
      expect(info).toContain('## Package Core Information')
    })

    it('formats developer rules and types sections', () => {
      const item = new TestLibraryAiPromptItem(['packages', 'scripts'])

      vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
      vi.spyOn(PropertiesFile, 'isDir').mockReturnValue(true)
      vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({ name: '@dxtmisha/scripts' } as any)
      const copySpy = vi.spyOn(PropertiesFile, 'copy').mockImplementation(() => {})

      const dev = item.testGetDeveloper()
      expect(dev).toContain('## Developer Rules')
      expect(dev).toContain('packages/scripts/ai-developer.md')

      const types = item.testGetTypes()
      expect(types).toContain('## Package Type Definitions')
      expect(types).toContain('ai-packages-types/dxtmisha-scripts.md')
      expect(copySpy).toHaveBeenCalledWith(['ai-packages-types', 'dxtmisha-scripts.md'], ['packages', 'scripts', 'ai-types.md'])
    })

    it('formats visual screenshot references when screenshot directory exists', () => {
      const item = new TestLibraryAiPromptItem(['packages', 'scripts'])

      vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
      vi.spyOn(PropertiesFile, 'readDir').mockReturnValue(['screen1.png', 'screen2.webp'])

      const shots = item.testGetScreenshot()
      expect(shots).toContain('## Component Visual References (Screenshots)')
      expect(shots).toContain('screen1.png')
      expect(shots).toContain('screen2.webp')
    })

    it('combines all sections into unified prompt string in make()', () => {
      const item = new LibraryAiPromptItem(['packages', 'scripts'])

      vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
      vi.spyOn(PropertiesFile, 'isDir').mockReturnValue(true)
      vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({ name: '@dxtmisha/scripts' } as any)
      vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue('Section content')
      vi.spyOn(PropertiesFile, 'readDir').mockReturnValue(['screen.png'])
      vi.spyOn(PropertiesFile, 'copy').mockImplementation(() => {})

      const result = item.make()
      expect(result).toBeDefined()
      expect(result).toContain('@dxtmisha/scripts')
      expect(result).toContain('Section content')
    })
  })

  describe('LibraryAiPrompt', () => {
    it('initializes and provides prompt templates', () => {
      const prompt = new LibraryAiPrompt()
      expect(prompt).toBeDefined()
    })

    it('includes repository root in getList when root prompt exists', () => {
      class TestLibraryAiPrompt extends LibraryAiPrompt {
        public testGetList() {
          return this.getList()
        }
      }

      vi.spyOn(PropertiesFile, 'readDir').mockReturnValue([])
      vi.spyOn(PropertiesFile, 'is').mockImplementation((path: any) => {
        const pathString = Array.isArray(path) ? path.join('/') : path
        return pathString === 'ai-types.md' || pathString === 'package.json'
      })
      vi.spyOn(PropertiesFile, 'isDir').mockReturnValue(true)
      vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({ name: '@dxtmisha/root-pkg' } as any)

      const prompt = new TestLibraryAiPrompt()
      const list = prompt.testGetList()

      expect(list.length).toBeGreaterThanOrEqual(1)
      expect(list[0].getDir()).toEqual([])
      expect(list[0].getProjectName()).toBe('@dxtmisha/root-pkg')
    })

    it('excludes libraries configured in PropertiesConfig.promptExclude from getList', () => {
      class TestLibraryAiPrompt extends LibraryAiPrompt {
        public testGetList() {
          return this.getList()
        }
      }

      vi.spyOn(PropertiesConfig, 'getPromptExclude').mockReturnValue(['@dxtmisha/excluded-pkg'])
      vi.spyOn(PropertiesFile, 'readDir').mockReturnValue([])
      vi.spyOn(PropertiesFile, 'is').mockImplementation((path: any) => {
        const pathString = Array.isArray(path) ? path.join('/') : path
        return pathString === 'ai-types.md' || pathString === 'package.json'
      })
      vi.spyOn(PropertiesFile, 'isDir').mockReturnValue(true)
      vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({ name: '@dxtmisha/excluded-pkg' } as any)

      const prompt = new TestLibraryAiPrompt()
      const list = prompt.testGetList()

      expect(list.length).toBe(0)
    })

    it('correctly matches excluded libraries by exact library name in isExclude', () => {
      class TestLibraryAiPrompt extends LibraryAiPrompt {
        public testIsExclude(item: LibraryAiPromptItem) {
          return this.isExclude(item)
        }
      }

      const prompt = new TestLibraryAiPrompt()
      const itemStyles = new LibraryAiPromptItem(['packages', 'styles'])
      const itemFunctional = new LibraryAiPromptItem(['packages', 'functional'])

      vi.spyOn(PropertiesFile, 'readFile').mockImplementation((path: any) => {
        const pathString = Array.isArray(path) ? path.join('/') : path
        if (pathString.includes('styles')) {
          return { name: '@dxtmisha/styles' } as any
        }
        if (pathString.includes('functional')) {
          return { name: '@dxtmisha/functional' } as any
        }
        return undefined
      })

      vi.spyOn(PropertiesConfig, 'getPromptExclude').mockReturnValue(['@dxtmisha/styles'])
      expect(prompt.testIsExclude(itemStyles)).toBe(true)
      expect(prompt.testIsExclude(itemFunctional)).toBe(false)
    })

    it('adds created files to .gitignore on initGitIgnore', () => {
      class TestLibraryAiPrompt extends LibraryAiPrompt {
        public testInitGitIgnore() {
          this.initGitIgnore()
        }
      }

      vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue('')
      const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

      const promptMcp = new TestLibraryAiPrompt([], true)
      promptMcp.testInitGitIgnore()

      expect(writeSpy).toHaveBeenCalledWith(
        '.gitignore',
        expect.stringContaining('# AI Resources'),
        false
      )
      expect(writeSpy).toHaveBeenCalledWith(
        '.gitignore',
        expect.stringContaining('ai-prompt.md'),
        false
      )
      expect(writeSpy).toHaveBeenCalledWith(
        '.gitignore',
        expect.stringContaining('ai-packages-types'),
        false
      )
      expect(writeSpy).toHaveBeenCalledWith(
        '.gitignore',
        expect.stringContaining('ai-mcp-all-resources.json'),
        false
      )
      expect(writeSpy).toHaveBeenCalledWith(
        '.gitignore',
        expect.stringContaining('ai-mcp-all-resources.ts'),
        false
      )
      expect(writeSpy).not.toHaveBeenCalledWith(
        '.gitignore',
        expect.stringContaining('ai-mcp-resources.json'),
        false
      )

      writeSpy.mockClear()

      const promptNoMcp = new TestLibraryAiPrompt([], false)
      promptNoMcp.testInitGitIgnore()

      expect(writeSpy).toHaveBeenCalledWith(
        '.gitignore',
        expect.stringContaining('ai-prompt.md'),
        false
      )
      expect(writeSpy).toHaveBeenCalledWith(
        '.gitignore',
        expect.stringContaining('ai-packages-types'),
        false
      )
      expect(writeSpy).not.toHaveBeenCalledWith(
        '.gitignore',
        expect.stringContaining('ai-mcp-all-resources.json'),
        false
      )
      expect(writeSpy).not.toHaveBeenCalledWith(
        '.gitignore',
        expect.stringContaining('ai-mcp-all-resources.ts'),
        false
      )
    })
  })

  describe('LibraryAiPromptItem for repository root', () => {
    it('formats paths correctly without leading slash when dir is empty', () => {
      const rootItem = new TestLibraryAiPromptItem([])
      expect(rootItem.getDir()).toEqual([])

      vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
      vi.spyOn(PropertiesFile, 'isDir').mockReturnValue(true)
      vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({ name: '@dxtmisha/root-pkg' } as any)
      vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue('Root description with ./ai-resources/test')
      vi.spyOn(PropertiesFile, 'readDir').mockReturnValue(['root-screenshot.webp'])
      vi.spyOn(PropertiesFile, 'copy').mockImplementation(() => {})

      expect(rootItem.testGetDeveloper()).toContain('\'ai-developer.md\'')
      expect(rootItem.testGetTypes()).toContain('dxtmisha-root-pkg.md')
      expect(rootItem.testGetScreenshot()).toContain('\'ai-screenshot/root-screenshot.webp\'')

      const result = rootItem.make()
      expect(result).toBeDefined()
      expect(result).toContain('# @dxtmisha/root-pkg')
      expect(result).toContain('The project is located at: \'.\'.')
    })
  })
})
