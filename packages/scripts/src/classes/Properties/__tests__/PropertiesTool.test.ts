import { afterEach, describe, expect, it, vi } from 'vitest'
import { PropertiesTool } from '../PropertiesTool'
import { PropertiesPath } from '../PropertiesPath'
import { PropertiesSettings } from '../PropertiesSettings'
import { PropertiesConfig } from '../PropertiesConfig'
import { PropertiesCache } from '../PropertiesCache'

describe('Properties Utilities (Tool, Path, Settings)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    PropertiesCache.clear()
  })

  describe('PropertiesTool', () => {
    it('retrieves configured designs list', () => {
      vi.spyOn(PropertiesConfig, 'getDesignName').mockReturnValue('dxt')

      const designs = PropertiesTool.getDesigns()
      expect(designs).toContain('d')
      expect(designs).toContain('dxt')
    })
  })

  describe('PropertiesPath', () => {
    it('parses and extracts segments from token path string', () => {
      const path = new PropertiesPath(['dxt', 'c2'])
      expect(path.isConstructor()).toBe(false)
    })
  })

  describe('PropertiesSettings', () => {
    it('instantiates and provides settings map', () => {
      const path = new PropertiesPath(['dxt'])
      vi.spyOn(path, 'toAll').mockReturnValue({})
      const settings = new PropertiesSettings(path)
      expect(settings.get()).toBeDefined()
    })
  })
})
