import { afterEach, describe, expect, it, vi } from 'vitest'
import { LibraryAiPrompt } from '../LibraryAiPrompt'
import { LibraryAiPromptItem } from '../LibraryAiPromptItem'
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

      const dev = item.testGetDeveloper()
      expect(dev).toContain('## Developer Rules')
      expect(dev).toContain('packages/scripts/ai-developer.md')

      const types = item.testGetTypes()
      expect(types).toContain('## Package Type Definitions')
      expect(types).toContain('packages/scripts/ai-types.md')
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
  })
})
