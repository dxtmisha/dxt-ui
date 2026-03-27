// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { handleShare } from '../handleShare'

describe('handleShare', () => {
  beforeEach(() => {
    vi.stubGlobal('navigator', {
      share: vi.fn(),
      canShare: vi.fn()
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('should return true if sharing is successful', async () => {
    const data = { title: 'Test', text: 'Test text', url: 'https://test.com' }
    vi.mocked(navigator.canShare).mockReturnValue(true)
    vi.mocked(navigator.share).mockResolvedValue(undefined)

    const result = await handleShare(data)
    expect(result).toBe(true)
    expect(navigator.share).toHaveBeenCalledWith(data)
  })

  it('should return false if navigator.share is not supported', async () => {
    vi.stubGlobal('navigator', {})
    const result = await handleShare({ title: 'Test' })
    expect(result).toBe(false)
  })

  it('should return false if navigator.canShare returns false', async () => {
    vi.mocked(navigator.canShare).mockReturnValue(false)
    const result = await handleShare({ title: 'Test' })
    expect(result).toBe(false)
  })

  it('should return false if sharing fails (throws error)', async () => {
    vi.mocked(navigator.canShare).mockReturnValue(true)
    vi.mocked(navigator.share).mockRejectedValue(new Error('Some other error'))

    const result = await handleShare({ title: 'Test' })
    expect(result).toBe(false)
  })

  it('should return false if sharing is cancelled by user (AbortError)', async () => {
    const abortError = new Error('The share operation was aborted.')
    abortError.name = 'AbortError'
    vi.mocked(navigator.canShare).mockReturnValue(true)
    vi.mocked(navigator.share).mockRejectedValue(abortError)

    const result = await handleShare({ title: 'Test' })
    expect(result).toBe(false)
  })
})
