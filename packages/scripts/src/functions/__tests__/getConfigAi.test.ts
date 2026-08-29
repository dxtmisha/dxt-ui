import { afterEach, describe, expect, it, vi } from 'vitest'
import { getConfigAi } from '../getConfigAi'
import { PropertiesConfig } from '../../classes/Properties/PropertiesConfig'

describe('getConfigAi', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('retrieves AI key, model, and config object from PropertiesConfig', () => {
    vi.spyOn(PropertiesConfig, 'getAiKey').mockReturnValue('test-api-key')
    vi.spyOn(PropertiesConfig, 'getAiModel').mockReturnValue('gemini-2.5-flash')
    vi.spyOn(PropertiesConfig, 'getAiConfig').mockReturnValue({ temperature: 0.7 })

    const [key, model, config] = getConfigAi()

    expect(key).toBe('test-api-key')
    expect(model).toBe('gemini-2.5-flash')
    expect(config).toEqual({ temperature: 0.7 })
  })
})
