import { describe, expect, it, vi } from 'vitest'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { DesignTypesAi } from '../DesignTypesAi'
import { DesignTypesDescription } from '../DesignTypesDescription'
import { DesignTypesMakeAbstract } from '../DesignTypesMakeAbstract'
import { DesignTypesPromptsAbstract } from '../DesignTypesPromptsAbstract'

class MockMake extends DesignTypesMakeAbstract {
  getFullContent() {
    return 'export type X = 1;'
  }

  getFullJsContent() {
    return 'export const x = 1;'
  }

  async make() {
    return this
  }

  makeSave() {
    return this
  }
}

class MockPrompts extends DesignTypesPromptsAbstract {
  getCacheList() {
    return []
  }

  async toAiPrompts() {
    return 'Prompt rules'
  }

  async make() {
    return this
  }
}

describe('DesignTypesDescription', () => {
  const ai = new DesignTypesAi('dist')
  const makeTypes = new MockMake(ai)
  const prompts = new MockPrompts('ai-resources', ai)
  const description = new DesignTypesDescription(ai, makeTypes, prompts)

  it('checks if description file exists with is()', () => {
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
    expect(description.is()).toBe(true)

    vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
    expect(description.is()).toBe(false)
  })

  it('returns empty string initially for getFullDescription()', () => {
    expect(description.getFullDescription()).toBe('')
  })
})
