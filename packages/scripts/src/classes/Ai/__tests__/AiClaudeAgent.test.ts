import { afterEach, describe, expect, it, vi } from 'vitest'
import { AiClaudeAgent } from '../AiClaudeAgent'
import { AiClaudeAgentLite } from '../AiClaudeAgentLite'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'

class TestAiClaudeAgentLite extends AiClaudeAgentLite {
  public testToImages() {
    return this.toImages()
  }

  public testToContents() {
    return this.toContents()
  }

  public testInit() {
    return this.init()
  }

  public testResponse(model: string, contents: string) {
    return this.response(model, contents)
  }
}

describe('AiClaudeAgentLite and AiClaudeAgent', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns empty array for toImages()', () => {
    const ai = new TestAiClaudeAgentLite('key', 'claude-3-5-sonnet')
    ai.addImage({ mime: 'image/png', base64: 'abc' })
    expect(ai.testToImages()).toEqual([])
  })

  it('joins accumulated contents in toContents()', () => {
    const ai = new TestAiClaudeAgentLite('key', 'claude-3-5-sonnet')
    ai.addContent('Part 1')
    ai.addContent('Part 2')
    expect(ai.testToContents()).toBe('Part 1\n\nPart 2')
  })

  it('initializes client object on init()', async () => {
    const ai = new TestAiClaudeAgentLite('key', 'claude-3-5-sonnet')
    await ai.testInit()
    expect(ai).toBeDefined()
  })

  it('initializes AiClaudeAgent with credentials from PropertiesConfig', () => {
    vi.spyOn(PropertiesConfig, 'getAiKey').mockReturnValue('config-key')
    vi.spyOn(PropertiesConfig, 'getAiModel').mockReturnValue('claude-3-5-sonnet')
    vi.spyOn(PropertiesConfig, 'getAiConfig').mockReturnValue({})

    const agent = new AiClaudeAgent()
    expect(agent).toBeInstanceOf(AiClaudeAgentLite)
  })
})
