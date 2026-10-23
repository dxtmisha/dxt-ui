/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { writeClipboardData } from '../writeClipboardData'
import * as isDomRuntimeModule from '../isDomRuntime'
import { ErrorCenter } from '../../classes/ErrorCenter'

describe('writeClipboardData', () => {
  const originalClipboard = navigator.clipboard
  const originalExecCommand = document.execCommand

  beforeEach(() => {
    vi.restoreAllMocks()
  })

  afterEach(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: originalClipboard,
      configurable: true
    })
    document.execCommand = originalExecCommand
  })

  describe('Standard functional requirements (Modern Clipboard API)', () => {
    it('should call navigator.clipboard.writeText with the provided text in DOM runtime', async () => {
      const writeTextMock = vi.fn().mockResolvedValue(undefined)
      const execCommandMock = vi.fn()

      Object.defineProperty(navigator, 'clipboard', {
        value: { writeText: writeTextMock },
        configurable: true
      })
      document.execCommand = execCommandMock

      await writeClipboardData('test text')

      expect(writeTextMock).toHaveBeenCalledTimes(1)
      expect(writeTextMock).toHaveBeenCalledWith('test text')
      expect(execCommandMock).not.toHaveBeenCalled()
    })
  })

  describe('Fallback execution (document.execCommand) and ErrorCenter reporting', () => {
    it('should fall back to temporary textarea selection, document.execCommand, and report error to ErrorCenter when clipboard.writeText rejects', async () => {
      const clipboardError = new Error('Clipboard permission denied')
      const writeTextMock = vi.fn().mockRejectedValue(clipboardError)
      const execCommandMock = vi.fn().mockReturnValue(true)
      const errorCenterSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => undefined)

      Object.defineProperty(navigator, 'clipboard', {
        value: { writeText: writeTextMock },
        configurable: true
      })
      document.execCommand = execCommandMock

      await writeClipboardData('fallback text')

      expect(writeTextMock).toHaveBeenCalledTimes(1)
      expect(writeTextMock).toHaveBeenCalledWith('fallback text')
      expect(execCommandMock).toHaveBeenCalledTimes(1)
      expect(execCommandMock).toHaveBeenCalledWith('copy', false, 'fallback text')
      expect(document.querySelectorAll('textarea').length).toBe(0)
      expect(errorCenterSpy).toHaveBeenCalledWith({
        group: 'clipboard',
        code: 'error',
        details: clipboardError
      })
    })

    it('should fall back to document.execCommand and report to ErrorCenter when navigator.clipboard is undefined', async () => {
      const execCommandMock = vi.fn().mockReturnValue(true)
      const errorCenterSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => undefined)

      Object.defineProperty(navigator, 'clipboard', {
        value: undefined,
        configurable: true
      })
      document.execCommand = execCommandMock

      await writeClipboardData('no clipboard api')

      expect(execCommandMock).toHaveBeenCalledTimes(1)
      expect(execCommandMock).toHaveBeenCalledWith('copy', false, 'no clipboard api')
      expect(document.querySelectorAll('textarea').length).toBe(0)
      expect(errorCenterSpy).toHaveBeenCalledTimes(1)
      expect(errorCenterSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          group: 'clipboard',
          code: 'error'
        })
      )
    })

    it('should clean up temporary textarea and not throw even if document.execCommand throws during fallback', async () => {
      const clipboardError = new Error('Clipboard write blocked')
      const writeTextMock = vi.fn().mockRejectedValue(clipboardError)
      const execCommandMock = vi.fn().mockImplementation(() => {
        throw new Error('execCommand is disabled')
      })
      const errorCenterSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => undefined)

      Object.defineProperty(navigator, 'clipboard', {
        value: { writeText: writeTextMock },
        configurable: true
      })
      document.execCommand = execCommandMock

      await expect(writeClipboardData('safe fallback')).resolves.toBeUndefined()

      expect(document.querySelectorAll('textarea').length).toBe(0)
      expect(errorCenterSpy).toHaveBeenCalledWith({
        group: 'clipboard',
        code: 'error',
        details: clipboardError
      })
    })
  })

  describe('SSR safety and non-DOM runtime isolation', () => {
    it('should not invoke navigator.clipboard or document.execCommand when isDomRuntime() returns false', async () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)

      const writeTextMock = vi.fn().mockResolvedValue(undefined)
      const execCommandMock = vi.fn()

      Object.defineProperty(navigator, 'clipboard', {
        value: { writeText: writeTextMock },
        configurable: true
      })
      document.execCommand = execCommandMock

      await writeClipboardData('ssr text')

      expect(writeTextMock).not.toHaveBeenCalled()
      expect(execCommandMock).not.toHaveBeenCalled()
    })
  })

  describe('Empty, whitespace, special characters, and multilingual inputs', () => {
    it('should handle empty strings and whitespace-only strings accurately', async () => {
      const writeTextMock = vi.fn().mockResolvedValue(undefined)
      Object.defineProperty(navigator, 'clipboard', {
        value: { writeText: writeTextMock },
        configurable: true
      })

      await writeClipboardData('')
      expect(writeTextMock).toHaveBeenLastCalledWith('')

      await writeClipboardData('   \t\n  ')
      expect(writeTextMock).toHaveBeenLastCalledWith('   \t\n  ')
    })

    it('should pass HTML/XSS payloads, Cyrillic, Vietnamese, CJK, and Emoji text untouched', async () => {
      const writeTextMock = vi.fn().mockResolvedValue(undefined)
      Object.defineProperty(navigator, 'clipboard', {
        value: { writeText: writeTextMock },
        configurable: true
      })

      const complexPayload = '<script>alert("xss")</script> Привет • Tiếng Việt • 你好 • 🚀'
      await writeClipboardData(complexPayload)

      expect(writeTextMock).toHaveBeenCalledWith(complexPayload)
    })
  })
})
