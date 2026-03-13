import { describe, expect, it, vi } from 'vitest'
import { getConfigAi } from '../getConfigAi'
import { PropertiesConfig } from '../../classes/Properties/PropertiesConfig'

vi.mock('../../classes/Properties/PropertiesConfig', () => ({
  PropertiesConfig: {
    getAiKey: vi.fn(),
    getAiModel: vi.fn()
  }
}))

describe('getConfigAi', () => {
  it('should return AI key and model from PropertiesConfig', () => {
    const mockKey = 'test-key'
    const mockModel = 'test-model'

    vi.mocked(PropertiesConfig.getAiKey).mockReturnValue(mockKey)
    vi.mocked(PropertiesConfig.getAiModel).mockReturnValue(mockModel)

    const result = getConfigAi()

    expect(result).toEqual([mockKey, mockModel])
    expect(PropertiesConfig.getAiKey).toHaveBeenCalled()
    expect(PropertiesConfig.getAiModel).toHaveBeenCalled()
  })
})
