import { afterEach, describe, expect, it, vi } from 'vitest'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { DesignTypes } from '../DesignTypes'
import { DesignTypesAi } from '../DesignTypesAi'
import { DesignTypesBuild } from '../DesignTypesBuild'
import { DesignTypesBuildAbstract } from '../DesignTypesBuildAbstract'
import { DesignTypesMake } from '../DesignTypesMake'
import { DesignTypesMakeAbstract } from '../DesignTypesMakeAbstract'
import { DesignTypesPrompts } from '../DesignTypesPrompts'

describe('DesignTypes', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('extends DesignTypesBuildAbstract and DesignTypesMakeAbstract for subcomponents', () => {
    const ai = new DesignTypesAi('ai-types-temp')
    const build = new DesignTypesBuild('ai-types-temp')
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

  it('adds generated AI resource files to .gitignore on initGitIgnore', () => {
    class TestDesignTypes extends DesignTypes {
      public testInitGitIgnore() {
        this.initGitIgnore()
      }
    }

    vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue('')
    const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

    const designTypes = new TestDesignTypes()
    designTypes.testInitGitIgnore()

    expect(writeSpy).toHaveBeenCalledWith(
      '.gitignore',
      expect.stringContaining('# AI Resources'),
      false
    )
    expect(writeSpy).toHaveBeenCalledWith(
      '.gitignore',
      expect.stringContaining('ai-types.md'),
      false
    )
    expect(writeSpy).toHaveBeenCalledWith(
      '.gitignore',
      expect.stringContaining('ai-description.md'),
      false
    )
    expect(writeSpy).toHaveBeenCalledWith(
      '.gitignore',
      expect.stringContaining('ai-mcp-resources.json'),
      false
    )
  })
})
