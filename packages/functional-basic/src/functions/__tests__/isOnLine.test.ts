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

  it('should return true if not in DOM runtime', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
    expect(isOnLine()).toBe(true)
  })

  it('should return true if navigator is undefined (SSR)', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
    vi.stubGlobal('navigator', undefined)
    expect(isOnLine()).toBe(true)
  })

  it('should return true if navigator.onLine is true', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
    vi.stubGlobal('navigator', { onLine: true })
    expect(isOnLine()).toBe(true)
  })

  it('should return false if navigator.onLine is false', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
    vi.stubGlobal('navigator', { onLine: false })
    expect(isOnLine()).toBe(false)
  })
})
