import { describe, it, expect, vi, afterEach } from 'vitest'
import { isOnLine } from '../isOnLine'

describe('isOnLine', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('should return true if navigator is undefined (SSR)', () => {
    vi.stubGlobal('navigator', undefined)
    expect(isOnLine()).toBe(true)
  })

  it('should return true if navigator.onLine is true', () => {
    vi.stubGlobal('navigator', { onLine: true })
    expect(isOnLine()).toBe(true)
  })

  it('should return false if navigator.onLine is false', () => {
    vi.stubGlobal('navigator', { onLine: false })
    expect(isOnLine()).toBe(false)
  })
})
