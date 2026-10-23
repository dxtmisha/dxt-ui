/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { getClipboardData } from '../getClipboardData'
import * as domRuntime from '../isDomRuntime'
import { ErrorCenter } from '../../classes/ErrorCenter'

describe('getClipboardData', () => {
  let originalClipboard: Clipboard | undefined
  let readTextMock: ReturnType<typeof vi.fn<() => Promise<string>>>

  beforeEach(() => {
    originalClipboard = navigator.clipboard
    readTextMock = vi.fn<() => Promise<string>>()

    Object.defineProperty(navigator, 'clipboard', {
      value: {
        readText: readTextMock
      },
      writable: true,
      configurable: true
    })
  })

  afterEach(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: originalClipboard,
      writable: true,
      configurable: true
    })
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (ClipboardEvent source)', () => {
    it('should extract text data from ClipboardEvent when provided', async () => {
      const getDataMock = vi.fn<(format: string) => string>().mockReturnValue('event content')
      const mockEvent = {
        clipboardData: {
          getData: getDataMock
        }
      } as unknown as ClipboardEvent

      const data = await getClipboardData(mockEvent)

      expect(data).toBe('event content')
      expect(getDataMock).toHaveBeenCalledOnce()
      expect(getDataMock).toHaveBeenCalledWith('text')
      expect(readTextMock).not.toHaveBeenCalled()
    })

    it('should return empty string directly from ClipboardEvent without calling navigator.clipboard when getData("text") returns ""', async () => {
      const getDataMock = vi.fn<(format: string) => string>().mockReturnValue('')
      const mockEvent = {
        clipboardData: {
          getData: getDataMock
        }
      } as unknown as ClipboardEvent

      const data = await getClipboardData(mockEvent)

      expect(data).toBe('')
      expect(getDataMock).toHaveBeenCalledWith('text')
      expect(readTextMock).not.toHaveBeenCalled()
    })

    it('should preserve falsy-looking strings ("0", "false") and whitespace from ClipboardEvent', async () => {
      const zeroEvent = {
        clipboardData: { getData: vi.fn().mockReturnValue('0') }
      } as unknown as ClipboardEvent
      const falseEvent = {
        clipboardData: { getData: vi.fn().mockReturnValue('false') }
      } as unknown as ClipboardEvent
      const whitespaceEvent = {
        clipboardData: { getData: vi.fn().mockReturnValue('  \t\n ') }
      } as unknown as ClipboardEvent

      expect(await getClipboardData(zeroEvent)).toBe('0')
      expect(await getClipboardData(falseEvent)).toBe('false')
      expect(await getClipboardData(whitespaceEvent)).toBe('  \t\n ')
    })
  })

  describe('Fallback to Async Clipboard API (navigator.clipboard.readText)', () => {
    it('should fall back to navigator.clipboard.readText() when event is omitted', async () => {
      readTextMock.mockResolvedValue('clipboard api content')

      const data = await getClipboardData()

      expect(data).toBe('clipboard api content')
      expect(readTextMock).toHaveBeenCalledOnce()
    })

    it('should fall back to navigator.clipboard.readText() when event.clipboardData is null or undefined', async () => {
      readTextMock.mockResolvedValue('fallback clipboard text')

      const eventWithoutClipboardData = { clipboardData: null } as unknown as ClipboardEvent
      const data = await getClipboardData(eventWithoutClipboardData)

      expect(data).toBe('fallback clipboard text')
      expect(readTextMock).toHaveBeenCalledOnce()
    })

    it('should fall back to navigator.clipboard.readText() when event.clipboardData.getData returns undefined', async () => {
      readTextMock.mockResolvedValue('recovered from clipboard api')

      const mockEvent = {
        clipboardData: {
          getData: vi.fn().mockReturnValue(undefined)
        }
      } as unknown as ClipboardEvent

      const data = await getClipboardData(mockEvent)

      expect(data).toBe('recovered from clipboard api')
      expect(readTextMock).toHaveBeenCalledOnce()
    })

    it('should return an empty string when navigator.clipboard.readText() resolves to an empty string or undefined', async () => {
      readTextMock.mockResolvedValue('')
      expect(await getClipboardData()).toBe('')

      readTextMock.mockResolvedValue(undefined as unknown as string)
      expect(await getClipboardData()).toBe('')
    })
  })

  describe('Multilingual, Unicode, and special payloads', () => {
    it('should preserve Cyrillic, Vietnamese, CJK, Emoji, and HTML strings without alteration', async () => {
      const complexPayload = 'Привет Мир | Tiếng Việt | 你好世界 | 🚀🔥 | <script>alert(1)</script>\nLine 2'
      readTextMock.mockResolvedValue(complexPayload)

      const data = await getClipboardData()
      expect(data).toBe(complexPayload)
    })
  })

  describe('Error handling and ErrorCenter reporting', () => {
    it('should catch errors from navigator.clipboard.readText(), report to ErrorCenter, and return ""', async () => {
      const errorSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => undefined)
      const permissionError = new Error('Clipboard read permission denied')
      readTextMock.mockRejectedValue(permissionError)

      const data = await getClipboardData()

      expect(data).toBe('')
      expect(errorSpy).toHaveBeenCalledOnce()
      expect(errorSpy).toHaveBeenCalledWith({
        group: 'clipboard',
        code: 'error',
        details: permissionError
      })
    })

    it('should catch synchronous errors thrown by event.clipboardData.getData, report to ErrorCenter, and return ""', async () => {
      const errorSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => undefined)
      const securityError = new Error('SecurityError: DataTransfer access denied')
      const throwingEvent = {
        clipboardData: {
          getData: vi.fn(() => {
            throw securityError
          })
        }
      } as unknown as ClipboardEvent

      const data = await getClipboardData(throwingEvent)

      expect(data).toBe('')
      expect(errorSpy).toHaveBeenCalledOnce()
      expect(errorSpy).toHaveBeenCalledWith({
        group: 'clipboard',
        code: 'error',
        details: securityError
      })
    })
  })

  describe('SSR and non-DOM environment safety', () => {
    it('should return an empty string without accessing clipboard APIs when isDomRuntime() is false', async () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)
      const errorSpy = vi.spyOn(ErrorCenter, 'on')
      const getDataMock = vi.fn().mockReturnValue('should not be read')
      const mockEvent = {
        clipboardData: {
          getData: getDataMock
        }
      } as unknown as ClipboardEvent

      const data = await getClipboardData(mockEvent)

      expect(data).toBe('')
      expect(getDataMock).not.toHaveBeenCalled()
      expect(readTextMock).not.toHaveBeenCalled()
      expect(errorSpy).not.toHaveBeenCalled()
    })
  })
})
