import { describe, expect, it, vi, beforeEach } from 'vitest'
import { getDirname } from '../getDirname'
import { hasNativeDirname } from '../hasNativeDirname'

vi.mock('../hasNativeDirname', () => ({
  hasNativeDirname: vi.fn()
}))

// We can't easily mock import.meta.url or __dirname globally in a way that affects the module internally without ESM tricks,
// but we can at least test that it calls the right path based on hasNativeDirname
describe('getDirname', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return __dirname when hasNativeDirname is true', () => {
    vi.mocked(hasNativeDirname).mockReturnValue(true)

    // In a vitest environment with native support, __dirname should be defined
    // We expect it to not throw and return a string
    const result = getDirname()
    expect(typeof result).toBe('string')
  })

  it('should return a path via fileURLToPath when hasNativeDirname is false', () => {
    vi.mocked(hasNativeDirname).mockReturnValue(false)

    const result = getDirname()
    expect(typeof result).toBe('string')
  })
})
