import { describe, expect, it } from 'vitest'
import { getDirname } from '../getDirname'
import { hasNativeDirname } from '../hasNativeDirname'

describe('getDirname and hasNativeDirname', () => {
  it('returns boolean for hasNativeDirname', () => {
    const result = hasNativeDirname()
    expect(typeof result).toBe('boolean')
  })

  it('returns valid directory path string for getDirname', () => {
    const dir = getDirname()
    expect(typeof dir).toBe('string')
    expect(dir.length).toBeGreaterThan(0)
  })
})
