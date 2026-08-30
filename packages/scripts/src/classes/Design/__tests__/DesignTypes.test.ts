import { afterEach, describe, expect, it, vi } from 'vitest'
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
})
