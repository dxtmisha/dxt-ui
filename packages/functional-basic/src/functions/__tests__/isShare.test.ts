// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import { isShare } from '../isShare'

describe('isShare', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('should return true if navigator.share is supported', () => {
    vi.stubGlobal('navigator', {
      share: vi.fn()
    })
    expect(isShare()).toBe(true)
  })

  it('should return false if navigator.share is not supported', () => {
    vi.stubGlobal('navigator', {
      share: undefined
    })
    expect(isShare()).toBe(false)
  })

  it('should return false if navigator is not defined', () => {
    vi.stubGlobal('navigator', undefined)
    expect(isShare()).toBe(false)
  })
})
