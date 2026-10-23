// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ErrorCenter } from '../../classes/ErrorCenter'
import * as isDomRuntimeModule from '../isDomRuntime'
import { handleShare } from '../handleShare'

describe('handleShare', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    vi.stubGlobal('navigator', {
      share: vi.fn(),
      canShare: vi.fn()
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should invoke navigator.share and return true when sharing succeeds', async () => {
      const shareData: ShareData = {
        title: 'DXT UI',
        text: 'Component library documentation',
        url: 'https://example.com'
      }
      vi.mocked(navigator.canShare).mockReturnValue(true)
      vi.mocked(navigator.share).mockResolvedValue(undefined)

      const result = await handleShare(shareData)

      expect(result).toBe(true)
      expect(navigator.canShare).toHaveBeenCalledWith(shareData)
      expect(navigator.share).toHaveBeenCalledTimes(1)
      expect(navigator.share).toHaveBeenCalledWith(shareData)
    })

    it('should support partial ShareData payloads (only url, only text, or only title)', async () => {
      vi.mocked(navigator.canShare).mockReturnValue(true)
      vi.mocked(navigator.share).mockResolvedValue(undefined)

      expect(await handleShare({ url: 'https://example.com/page' })).toBe(true)
      expect(await handleShare({ text: 'Quick share note' })).toBe(true)
      expect(await handleShare({ title: 'Title only' })).toBe(true)
      expect(navigator.share).toHaveBeenCalledTimes(3)
    })
  })

  describe('Environment and capability checks (SSR and unsupported browsers)', () => {
    it('should return false immediately in SSR environment (isDomRuntime === false)', async () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
      vi.mocked(navigator.canShare).mockReturnValue(true)

      const result = await handleShare({ title: 'SSR Test' })

      expect(result).toBe(false)
      expect(navigator.canShare).not.toHaveBeenCalled()
      expect(navigator.share).not.toHaveBeenCalled()
    })

    it('should return false if navigator.share is not supported', async () => {
      vi.stubGlobal('navigator', {})

      const result = await handleShare({ title: 'Test' })

      expect(result).toBe(false)
    })

    it('should return false if navigator.share exists but navigator.canShare is undefined', async () => {
      vi.stubGlobal('navigator', {
        share: vi.fn()
      })

      const result = await handleShare({ title: 'Test' })

      expect(result).toBe(false)
      expect(navigator.share).not.toHaveBeenCalled()
    })

    it('should return false if navigator.canShare returns false for the given data', async () => {
      const shareData: ShareData = { title: 'Unsupported payload' }
      vi.mocked(navigator.canShare).mockReturnValue(false)

      const result = await handleShare(shareData)

      expect(result).toBe(false)
      expect(navigator.canShare).toHaveBeenCalledWith(shareData)
      expect(navigator.share).not.toHaveBeenCalled()
    })
  })

  describe('Error handling and ErrorCenter reporting', () => {
    it('should report error to ErrorCenter and return false when navigator.share rejects', async () => {
      const errorSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => {})
      const shareError = new Error('Share failed due to permission')

      vi.mocked(navigator.canShare).mockReturnValue(true)
      vi.mocked(navigator.share).mockRejectedValue(shareError)

      const result = await handleShare({ title: 'Test' })

      expect(result).toBe(false)
      expect(errorSpy).toHaveBeenCalledTimes(1)
      expect(errorSpy).toHaveBeenCalledWith({
        group: 'share',
        code: 'error',
        details: shareError
      })
    })

    it('should report AbortError to ErrorCenter and return false when user cancels share dialog', async () => {
      const errorSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => {})
      const abortError = new Error('The share operation was aborted.')
      abortError.name = 'AbortError'

      vi.mocked(navigator.canShare).mockReturnValue(true)
      vi.mocked(navigator.share).mockRejectedValue(abortError)

      const result = await handleShare({ title: 'Test' })

      expect(result).toBe(false)
      expect(errorSpy).toHaveBeenCalledWith({
        group: 'share',
        code: 'error',
        details: abortError
      })
    })
  })

  describe('Multilingual and Unicode payloads', () => {
    it('should pass Cyrillic, Vietnamese, CJK, and emoji ShareData unmodified', async () => {
      const unicodeData: ShareData = {
        title: 'Привет Мир — Xin chào Thế giới',
        text: 'こんにちは世界 🚀🔥✨',
        url: 'https://example.com/vi/trang-chu'
      }
      vi.mocked(navigator.canShare).mockReturnValue(true)
      vi.mocked(navigator.share).mockResolvedValue(undefined)

      const result = await handleShare(unicodeData)

      expect(result).toBe(true)
      expect(navigator.share).toHaveBeenCalledWith(unicodeData)
    })
  })
})
