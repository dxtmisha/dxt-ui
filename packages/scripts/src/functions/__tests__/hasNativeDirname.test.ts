import { describe, expect, it } from 'vitest'
import { hasNativeDirname } from '../hasNativeDirname'

describe('hasNativeDirname', () => {
  it('should return a boolean', () => {
    const result = hasNativeDirname()
    expect(typeof result).toBe('boolean')
  })

  it('it should return true if __dirname is defined', () => {
    // In vitest/node environment, __dirname is usually defined
    // We can't easily "un-define" it for a negative test without complex environment manipulation,
    // but we can verify it returns true if it's there
    if (typeof __dirname !== 'undefined') {
      expect(hasNativeDirname()).toBe(true)
    }
  })
})
