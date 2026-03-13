import { describe, expect, it, vi, beforeEach } from 'vitest'
import { toPathStandardSep } from '../toPathStandardSep'
import requirePath from 'path'

vi.mock('path', async (importOriginal) => {
  const actual = await importOriginal<typeof import('path')>()
  return {
    ...actual,
    default: {
      ...actual,
      sep: '/'
    }
  }
})

describe('toPathStandardSep', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(requirePath).sep = '/'
  })

  it('should replace all forward slashes with the platform-specific separator', () => {
    vi.mocked(requirePath).sep = '\\'
    expect(toPathStandardSep('src/components/button')).toBe('src\\components\\button')
  })

  it('should not change the path if it already uses the correct separator (unix)', () => {
    vi.mocked(requirePath).sep = '/'
    expect(toPathStandardSep('src/components/button')).toBe('src/components/button')
  })
})
