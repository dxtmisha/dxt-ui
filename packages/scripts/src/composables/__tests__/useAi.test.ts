import { afterEach, describe, expect, it, vi } from 'vitest'
import { useAi } from '../useAi'
import { PropertiesConfig } from '../../classes/Properties/PropertiesConfig'
import { AiClaude } from '../../classes/Ai/AiClaude'
import { AiClaudeAgent } from '../../classes/Ai/AiClaudeAgent'
import { AiClaudeCli } from '../../classes/Ai/AiClaudeCli'
import { AiGoogle } from '../../classes/Ai/AiGoogle'
import { AiGoogleCli } from '../../classes/Ai/AiGoogleCli'
import { AiOpenAi } from '../../classes/Ai/AiOpenAi'
import { AiZAi } from '../../classes/Ai/AiZAi'

describe('useAi', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('instantiates AiClaude when config type is claude', () => {
    vi.spyOn(PropertiesConfig, 'getAiType').mockReturnValue('claude')
    const ai = useAi()
    expect(ai).toBeInstanceOf(AiClaude)
  })

  it('instantiates AiClaudeAgent when config type is claude-agent', () => {
    vi.spyOn(PropertiesConfig, 'getAiType').mockReturnValue('claude-agent')
    const ai = useAi()
    expect(ai).toBeInstanceOf(AiClaudeAgent)
  })

  it('instantiates AiClaudeCli when config type is claude-cli', () => {
    vi.spyOn(PropertiesConfig, 'getAiType').mockReturnValue('claude-cli')
    const ai = useAi()
    expect(ai).toBeInstanceOf(AiClaudeCli)
  })

  it('instantiates AiGoogle when config type is gemini', () => {
    vi.spyOn(PropertiesConfig, 'getAiType').mockReturnValue('gemini')
    const ai = useAi()
    expect(ai).toBeInstanceOf(AiGoogle)
  })

  it('instantiates AiGoogleCli when config type is gemini-cli', () => {
    vi.spyOn(PropertiesConfig, 'getAiType').mockReturnValue('gemini-cli')
    const ai = useAi()
    expect(ai).toBeInstanceOf(AiGoogleCli)
  })

  it('instantiates AiOpenAi when config type is openai', () => {
    vi.spyOn(PropertiesConfig, 'getAiType').mockReturnValue('openai')
    const ai = useAi()
    expect(ai).toBeInstanceOf(AiOpenAi)
  })

  it('instantiates AiZAi when config type is zai', () => {
    vi.spyOn(PropertiesConfig, 'getAiType').mockReturnValue('zai')
    const ai = useAi()
    expect(ai).toBeInstanceOf(AiZAi)
  })

  it('returns undefined when config type is unrecognized or empty', () => {
    vi.spyOn(PropertiesConfig, 'getAiType').mockReturnValue(undefined as any)
    expect(useAi()).toBeUndefined()

    vi.spyOn(PropertiesConfig, 'getAiType').mockReturnValue('unknown' as any)
    expect(useAi()).toBeUndefined()
  })
})
