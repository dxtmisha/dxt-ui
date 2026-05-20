import { describe, expect, it, vi, beforeEach } from 'vitest'
import { useAi } from '../useAi'
import { PropertiesConfig } from '../../classes/Properties/PropertiesConfig'
import { AiGoogle } from '../../classes/Ai/AiGoogle'
import { AiClaude } from '../../classes/Ai/AiClaude'
import { AiOpenAi } from '../../classes/Ai/AiOpenAi'
import { AiZAi } from '../../classes/Ai/AiZAi'

vi.mock('../../classes/Properties/PropertiesConfig', () => ({
  PropertiesConfig: {
    getAiType: vi.fn()
  }
}))

vi.mock('../../classes/Ai/AiGoogle', () => {
  return {
    AiGoogle: vi.fn().mockImplementation(function () {
      return { name: 'AiGoogleInstance' }
    })
  }
})

vi.mock('../../classes/Ai/AiClaude', () => {
  return {
    AiClaude: vi.fn().mockImplementation(function () {
      return { name: 'AiClaudeInstance' }
    })
  }
})

vi.mock('../../classes/Ai/AiOpenAi', () => {
  return {
    AiOpenAi: vi.fn().mockImplementation(function () {
      return { name: 'AiOpenAiInstance' }
    })
  }
})

vi.mock('../../classes/Ai/AiZAi', () => {
  return {
    AiZAi: vi.fn().mockImplementation(function () {
      return { name: 'AiZAiInstance' }
    })
  }
})

describe('useAi', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return an instance of AiGoogle when the type is gemini', () => {
    vi.mocked(PropertiesConfig.getAiType).mockReturnValue('gemini')
    const mockInstance = { name: 'AiGoogleInstance' }
    vi.mocked(AiGoogle).mockImplementation(function () {
      return mockInstance as any
    })

    const result = useAi()

    expect(result).toEqual(mockInstance)
    expect(AiGoogle).toHaveBeenCalled()
  })

  it('should return an instance of AiClaude when the type is claude', () => {
    vi.mocked(PropertiesConfig.getAiType).mockReturnValue('claude')
    const mockInstance = { name: 'AiClaudeInstance' }
    vi.mocked(AiClaude).mockImplementation(function () {
      return mockInstance as any
    })

    const result = useAi()

    expect(result).toEqual(mockInstance)
    expect(AiClaude).toHaveBeenCalled()
  })

  it('should return an instance of AiOpenAi when the type is openai', () => {
    vi.mocked(PropertiesConfig.getAiType).mockReturnValue('openai')
    const mockInstance = { name: 'AiOpenAiInstance' }
    vi.mocked(AiOpenAi).mockImplementation(function () {
      return mockInstance as any
    })

    const result = useAi()

    expect(result).toEqual(mockInstance)
    expect(AiOpenAi).toHaveBeenCalled()
  })

  it('should return an instance of AiZAi when the type is zai', () => {
    vi.mocked(PropertiesConfig.getAiType).mockReturnValue('zai')
    const mockInstance = { name: 'AiZAiInstance' }
    vi.mocked(AiZAi).mockImplementation(function () {
      return mockInstance as any
    })

    const result = useAi()

    expect(result).toEqual(mockInstance)
    expect(AiZAi).toHaveBeenCalled()
  })

  it('should return undefined for an unknown type', () => {
    vi.mocked(PropertiesConfig.getAiType).mockReturnValue('unknown' as any)

    const result = useAi()

    expect(result).toBeUndefined()
  })

  it('should return undefined if no type is configured', () => {
    vi.mocked(PropertiesConfig.getAiType).mockReturnValue(undefined as any)

    const result = useAi()

    expect(result).toBeUndefined()
  })
})
