import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { NitroApp } from 'nitro/types'

vi.mock('../initPluginApiCache', () => ({
  initPluginApiCache: vi.fn()
}))

import { initPluginApiCache } from '../initPluginApiCache'
import { initPluginBasic } from '../initPluginBasic'

describe('initPluginBasic', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should call initPluginApiCache with undefined options when config is omitted', () => {
      const mockNitroApp = {} as NitroApp

      initPluginBasic(mockNitroApp)

      expect(initPluginApiCache).toHaveBeenCalledTimes(1)
      expect(initPluginApiCache).toHaveBeenCalledWith(undefined, undefined)
    })

    it('should forward cacheStorageKey and cacheStepAgeClearOld from config.api', () => {
      const mockNitroApp = {} as NitroApp

      initPluginBasic(mockNitroApp, {
        api: {
          cacheStorageKey: 'MyCustomCache',
          cacheStepAgeClearOld: 3600
        }
      })

      expect(initPluginApiCache).toHaveBeenCalledTimes(1)
      expect(initPluginApiCache).toHaveBeenCalledWith('MyCustomCache', 3600)
    })
  })

  describe('Boundary and optional parameter configurations', () => {
    it('should handle empty config object {} and empty api object { api: {} }', () => {
      const mockNitroApp = {} as NitroApp

      initPluginBasic(mockNitroApp, {})
      expect(initPluginApiCache).toHaveBeenLastCalledWith(undefined, undefined)

      initPluginBasic(mockNitroApp, { api: {} })
      expect(initPluginApiCache).toHaveBeenLastCalledWith(undefined, undefined)
    })

    it('should allow calling without arguments', () => {
      initPluginBasic()
      expect(initPluginApiCache).toHaveBeenCalledWith(undefined, undefined)
    })

    it('should preserve 0 for cacheStepAgeClearOld and empty string for cacheStorageKey', () => {
      initPluginBasic(undefined, {
        api: {
          cacheStorageKey: '',
          cacheStepAgeClearOld: 0
        }
      })

      expect(initPluginApiCache).toHaveBeenCalledWith('', 0)
    })
  })
})

