import { describe, expect, it } from 'vitest'
import { DesignTypesAi } from '../DesignTypesAi'
import { DesignTypesPrompts } from '../DesignTypesPrompts'
import { DesignTypesPromptsAbstract } from '../DesignTypesPromptsAbstract'

class TestDesignTypesPrompts extends DesignTypesPrompts {
  public testGetCachePath(path: string) {
    return this.getCachePath(path)
  }

  public testGetPromptLine(path: string, desc: string) {
    return this.getPromptLine(path, desc)
  }
}

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
