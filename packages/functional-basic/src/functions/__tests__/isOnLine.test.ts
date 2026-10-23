import { describe, it, expect, vi, afterEach } from 'vitest'
import { isOnLine } from '../isOnLine'
import * as isDomRuntimeModule from '../isDomRuntime'

vi.mock('../isDomRuntime', () => ({
  isDomRuntime: vi.fn()
}))

describe('isOnLine', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return true when in DOM runtime and navigator.onLine is true', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
      vi.stubGlobal('navigator', { onLine: true })

      expect(isOnLine()).toBe(true)
    })

    it('should return false when in DOM runtime and navigator.onLine is false', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
      vi.stubGlobal('navigator', { onLine: false })

      expect(isOnLine()).toBe(false)
    })

    it('should reflect dynamic changes in navigator.onLine across consecutive calls', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
      const navigatorState = { onLine: true }
      vi.stubGlobal('navigator', navigatorState)

      expect(isOnLine()).toBe(true)

      navigatorState.onLine = false
      expect(isOnLine()).toBe(false)

      navigatorState.onLine = true
      expect(isOnLine()).toBe(true)
    })
  })

  describe('SSR safety and non-DOM environment fallbacks', () => {
    it('should return true when isDomRuntime returns false', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
      vi.stubGlobal('navigator', { onLine: false })

      expect(isOnLine()).toBe(true)
    })

    it('should return true when navigator is undefined in DOM runtime', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
      vi.stubGlobal('navigator', undefined)

      expect(isOnLine()).toBe(true)
    })
  })
})
