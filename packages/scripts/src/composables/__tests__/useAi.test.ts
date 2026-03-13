import { describe, expect, it, vi, beforeEach } from 'vitest'
import { useAi } from '../useAi'
import { PropertiesConfig } from '../../classes/Properties/PropertiesConfig'
import { AiGoogle } from '../../classes/Ai/AiGoogle'
import { AiGoogleCli } from '../../classes/Ai/AiGoogleCli'

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

vi.mock('../../classes/Ai/AiGoogleCli', () => {
  return {
    AiGoogleCli: vi.fn().mockImplementation(function () {
      return { name: 'AiGoogleCliInstance' }
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

  it('should return an instance of AiGoogleCli when the type is gemini-cli', () => {
    vi.mocked(PropertiesConfig.getAiType).mockReturnValue('gemini-cli')
    const mockInstance = { name: 'AiGoogleCliInstance' }
    vi.mocked(AiGoogleCli).mockImplementation(function () {
      return mockInstance as any
    })

    const result = useAi()

    expect(result).toEqual(mockInstance)
    expect(AiGoogleCli).toHaveBeenCalled()
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
