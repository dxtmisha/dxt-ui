import { afterEach, describe, expect, it, vi } from 'vitest'
import { PropertiesConfig } from '../PropertiesConfig'
import { PropertiesFile } from '../PropertiesFile'

class TestPropertiesConfig extends PropertiesConfig {
  static testGetLocalPath(path: string): string
  static testGetLocalPath(path: string[]): string[]
  static testGetLocalPath(path: string | string[]): string | string[] {
    return this.getLocalPath(path as any)
  }

  static testGetExtends(file: string, dir: string[] = []) {
    return this.getExtends(file, dir)
  }
}

describe('PropertiesConfig', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns valid default configuration values', () => {
    expect(typeof PropertiesConfig.getProjectName()).toBe('string')
    expect(typeof PropertiesConfig.getDesignName()).toBe('string')
    expect(typeof PropertiesConfig.getSeparator()).toBe('string')
    expect(typeof PropertiesConfig.getSeparatorBasicName()).toBe('string')
    expect(typeof PropertiesConfig.getSeparatorLimit()).toBe('number')
    expect(typeof PropertiesConfig.getWikiLanguage()).toBe('string')
    expect(typeof PropertiesConfig.getAiType()).toBe('string')
    expect(PropertiesConfig.getTypesWithoutVue()).toBeUndefined()
    expect(PropertiesConfig.isTypesWithoutVue()).toBe(false)
    expect(PropertiesConfig.getTypesPaths()).toBeUndefined()
    expect(PropertiesConfig.getTypesMatch()).toBeUndefined()
    expect(PropertiesConfig.getTypesExclude()).toBeUndefined()
    expect(PropertiesConfig.getTypesTemporaryDirectory()).toBe('ai-types-temp')
    expect(PropertiesConfig.getDistDir()).toBe('dist')
    expect(PropertiesConfig.getAiResourcesDir()).toBe('ai-resources')
    expect(PropertiesConfig.getPromptScanDepth()).toBe(6)
    expect(PropertiesConfig.getPromptExclude()).toEqual([])
    expect(typeof PropertiesConfig.getAiTypesConcurrency()).toBe('number')
    expect(PropertiesConfig.getAiTypesConcurrency()).toBe(8)
  })

  describe('getPromptExclude', () => {
    it('returns array from config or wraps single string', () => {
      const configTarget = PropertiesConfig as any

      configTarget.config = { promptExclude: ['pkg1', 'pkg2'] }
      expect(PropertiesConfig.getPromptExclude()).toEqual(['pkg1', 'pkg2'])

      configTarget.config = { promptExclude: 'single-pkg' }
      expect(PropertiesConfig.getPromptExclude()).toEqual(['single-pkg'])

      configTarget.config = undefined
      expect(PropertiesConfig.getPromptExclude()).toEqual([])
    })
  })

  describe('getLocalPath', () => {
    it('appends .local before the file extension for string paths', () => {
      expect(TestPropertiesConfig.testGetLocalPath('design.config.json')).toBe('design.config.local.json')
      expect(TestPropertiesConfig.testGetLocalPath('../../design.config.json')).toBe('../../design.config.local.json')
    })

    it('appends .local to the filename if there is no extension', () => {
      expect(TestPropertiesConfig.testGetLocalPath('config')).toBe('config.local')
    })

    it('correctly transforms array of path segments', () => {
      expect(TestPropertiesConfig.testGetLocalPath([])).toEqual([])
      expect(TestPropertiesConfig.testGetLocalPath(['design.config.json'])).toEqual(['design.config.local.json'])
      expect(TestPropertiesConfig.testGetLocalPath(['..', '..', 'design.config.json'])).toEqual(['..', '..', 'design.config.local.json'])
    })
  })

  describe('getExtends with local override', () => {
    it('merges base and local configs with priority to local', () => {
      vi.spyOn(PropertiesFile, 'readFile').mockImplementation((path: any) => {
        const pathString = Array.isArray(path) ? path.join('/') : path
        if (pathString.includes('design.config.local.json')) {
          return {
            figmaToken: 'local-token',
            aiKey: 'local-key'
          } as any
        }
        if (pathString.includes('design.config.json')) {
          return {
            project: 'Ui',
            name: 'ui',
            figmaToken: 'base-token'
          } as any
        }
        return undefined
      })

      const config = TestPropertiesConfig.testGetExtends('design.config.json')
      expect(config).toEqual({
        project: 'Ui',
        name: 'ui',
        figmaToken: 'local-token',
        aiKey: 'local-key'
      })
    })

    it('recursively merges parent extends and applies local overrides', () => {
      vi.spyOn(PropertiesFile, 'readFile').mockImplementation((path: any) => {
        const pathString = Array.isArray(path) ? path.join('/') : path

        if (pathString.includes('parent.config.local.json')) {
          return {
            separator: '-'
          } as any
        }
        if (pathString.includes('parent.config.json')) {
          return {
            project: 'BaseProject',
            name: 'base-name',
            separator: '/'
          } as any
        }
        if (pathString.includes('child.config.local.json')) {
          return {
            name: 'child-local-name'
          } as any
        }
        if (pathString.includes('child.config.json')) {
          return {
            extends: 'parent.config.json',
            name: 'child-base-name'
          } as any
        }

        return undefined
      })

      const config = TestPropertiesConfig.testGetExtends('child.config.json')
      expect(config).toEqual({
        project: 'BaseProject',
        extends: 'parent.config.json',
        name: 'child-local-name',
        separator: '-'
      })
    })
  })
})
