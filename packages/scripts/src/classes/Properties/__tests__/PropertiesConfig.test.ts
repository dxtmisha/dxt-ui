import { afterEach, describe, expect, it, vi } from 'vitest'
import { PropertiesConfig } from '../PropertiesConfig'

describe('PropertiesConfig', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns valid default configuration values', () => {
    expect(typeof PropertiesConfig.getProjectName()).toBe('string')
    expect(typeof PropertiesConfig.getDesignName()).toBe('string')
    expect(typeof PropertiesConfig.getSeparator()).toBe('string')
    expect(typeof PropertiesConfig.getSeparatorBasicName()).toBe('string')
    expect(typeof PropertiesConfig.getSeparatorLimit()).toBe('number')
    expect(typeof PropertiesConfig.getWikiLanguage()).toBe('string')
    expect(typeof PropertiesConfig.getAiType()).toBe('string')
  })
})
