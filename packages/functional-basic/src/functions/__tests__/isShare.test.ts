// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import { isShare } from '../isShare'
import * as isDomRuntimeModule from '../isDomRuntime'

describe('isShare', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return true when in DOM runtime and navigator.share is a function', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
      vi.stubGlobal('navigator', {
        share: vi.fn()
      })

      expect(isShare()).toBe(true)
    })

    it('should return false when navigator.share is undefined or missing', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
      vi.stubGlobal('navigator', {
        share: undefined
      })

      expect(isShare()).toBe(false)

      vi.stubGlobal('navigator', {})
      expect(isShare()).toBe(false)
    })

    it('should return false when navigator.share is null or falsy', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
      vi.stubGlobal('navigator', {
        share: null
      })

      expect(isShare()).toBe(false)
    })
  })

  describe('SSR safety and non-DOM environment fallbacks', () => {
    it('should return false when isDomRuntime returns false even if navigator.share exists', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
      vi.stubGlobal('navigator', {
        share: vi.fn()
      })

      expect(isShare()).toBe(false)
    })

    it('should return false when navigator is undefined', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
      vi.stubGlobal('navigator', undefined)

      expect(isShare()).toBe(false)
    })
  })
})
