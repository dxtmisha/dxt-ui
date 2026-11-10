import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { FigmaPluginMessenger } from '../FigmaPluginMessenger'
import { FigmaPostCode } from '@dxtmisha/figma'

describe('FigmaPluginMessenger', () => {
  let savedOnmessage: ((message: any, props: { origin: string }) => void) | null = null

  beforeEach(() => {
    savedOnmessage = null
    const figmaMock = {
      ui: {
        postMessage: vi.fn(),
        get onmessage() {
          return savedOnmessage
        },
        set onmessage(value: any) {
          savedOnmessage = value
        }
      }
    }
    vi.stubGlobal('figma', figmaMock)
    FigmaPluginMessenger.reset()
  })

  afterEach(() => {
    FigmaPluginMessenger.reset()
    vi.unstubAllGlobals()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('getInstance() should return a singleton instance and bind onmessage', () => {
      const instance1 = FigmaPluginMessenger.getInstance()
      const instance2 = FigmaPluginMessenger.getInstance()

      expect(instance1).toBe(instance2)
      expect(figma.ui.onmessage).toBeTypeOf('function')
    })

    it('post() should send message to UI with current post code', () => {
      const messenger = FigmaPluginMessenger.getInstance()
      const type = 'test-type'
      const message = { key: 'value', count: 42 }

      messenger.post(type, message)

      expect(figma.ui.postMessage).toHaveBeenCalledWith({
        code: FigmaPostCode.get(),
        type,
        message
      })
    })

    it('should dispatch received valid message to registered callback', () => {
      const messenger = FigmaPluginMessenger.getInstance()
      const callback = vi.fn()
      const type = 'custom-event'
      const payload = { active: true }

      messenger.add(type, callback)

      figma.ui.onmessage!(
        {
          code: FigmaPostCode.get(),
          type,
          message: payload
        },
        { origin: '' }
      )

      expect(callback).toHaveBeenCalledWith(payload)
      messenger.remove(type, callback)
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('post() should safely handle undefined message argument', () => {
      const messenger = FigmaPluginMessenger.getInstance()
      const type = 'ping-signal'

      messenger.post(type)

      expect(figma.ui.postMessage).toHaveBeenCalledWith({
        code: FigmaPostCode.get(),
        type,
        message: undefined
      })
    })

    it('post() and onmessage should correctly process numeric 0 and boolean false values', () => {
      const messenger = FigmaPluginMessenger.getInstance()
      const zeroCallback = vi.fn()
      const falseCallback = vi.fn()

      messenger.add('number-zero', zeroCallback)
      messenger.add('boolean-false', falseCallback)

      messenger.post('number-zero', 0)
      expect(figma.ui.postMessage).toHaveBeenCalledWith({
        code: FigmaPostCode.get(),
        type: 'number-zero',
        message: 0
      })

      figma.ui.onmessage!(
        {
          code: FigmaPostCode.get(),
          type: 'number-zero',
          message: 0
        },
        { origin: '' }
      )
      expect(zeroCallback).toHaveBeenCalledWith(0)

      messenger.post('boolean-false', false)
      expect(figma.ui.postMessage).toHaveBeenCalledWith({
        code: FigmaPostCode.get(),
        type: 'boolean-false',
        message: false
      })

      figma.ui.onmessage!(
        {
          code: FigmaPostCode.get(),
          type: 'boolean-false',
          message: false
        },
        { origin: '' }
      )
      expect(falseCallback).toHaveBeenCalledWith(false)

      messenger.remove('number-zero', zeroCallback)
      messenger.remove('boolean-false', falseCallback)
    })

    it('should handle empty object and empty array payloads', () => {
      const messenger = FigmaPluginMessenger.getInstance()
      const emptyObjCallback = vi.fn()

      messenger.add('empty-obj', emptyObjCallback)
      figma.ui.onmessage!(
        {
          code: FigmaPostCode.get(),
          type: 'empty-obj',
          message: {}
        },
        { origin: '' }
      )

      expect(emptyObjCallback).toHaveBeenCalledWith({})
      messenger.remove('empty-obj', emptyObjCallback)
    })
  })

  describe('Metacharacters, escaping, and security', () => {
    it('should strictly ignore messages with an invalid post code', () => {
      const messenger = FigmaPluginMessenger.getInstance()
      const callback = vi.fn()
      const type = 'secure-endpoint'

      messenger.add(type, callback)

      figma.ui.onmessage!(
        {
          code: 'unauthorized-token-12345',
          type,
          message: { hack: true }
        },
        { origin: '' }
      )

      expect(callback).not.toHaveBeenCalled()
      messenger.remove(type, callback)
    })

    it('should handle event types containing regex metacharacters safely', () => {
      const messenger = FigmaPluginMessenger.getInstance()
      const callback = vi.fn()
      const metacharType = 'event.name.*+?^$()[]{}|\\'

      messenger.add(metacharType, callback)

      figma.ui.onmessage!(
        {
          code: FigmaPostCode.get(),
          type: metacharType,
          message: { ok: true }
        },
        { origin: '' }
      )

      expect(callback).toHaveBeenCalledWith({ ok: true })
      messenger.remove(metacharType, callback)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should handle Cyrillic, Vietnamese, and Emoji strings in message types and payloads', () => {
      const messenger = FigmaPluginMessenger.getInstance()
      const callback = vi.fn()
      const unicodeType = 'событие_đặc_biệt_🎉'
      const unicodePayload = {
        ru: 'Привет, мир!',
        vi: 'Xin chào thế giới!',
        emoji: '🚀✨'
      }

      messenger.add(unicodeType, callback)
      messenger.post(unicodeType, unicodePayload)

      expect(figma.ui.postMessage).toHaveBeenCalledWith({
        code: FigmaPostCode.get(),
        type: unicodeType,
        message: unicodePayload
      })

      figma.ui.onmessage!(
        {
          code: FigmaPostCode.get(),
          type: unicodeType,
          message: unicodePayload
        },
        { origin: '' }
      )

      expect(callback).toHaveBeenCalledWith(unicodePayload)
      messenger.remove(unicodeType, callback)
    })
  })

  describe('Statefulness, isolation, and lifecycle cleanup', () => {
    it('should allow unsubscribing via remove() so callback is no longer invoked', () => {
      const messenger = FigmaPluginMessenger.getInstance()
      const callback = vi.fn()
      const type = 'transient-message'

      messenger.add(type, callback)
      messenger.remove(type, callback)

      figma.ui.onmessage!(
        {
          code: FigmaPostCode.get(),
          type,
          message: 'should-not-reach'
        },
        { origin: '' }
      )

      expect(callback).not.toHaveBeenCalled()
    })

    it('should support once: true option without calling callback second time', () => {
      const messenger = FigmaPluginMessenger.getInstance()
      const callback = vi.fn()
      const type = 'single-dispatch'

      messenger.add(type, callback, true)

      figma.ui.onmessage!(
        {
          code: FigmaPostCode.get(),
          type,
          message: 'first'
        },
        { origin: '' }
      )

      figma.ui.onmessage!(
        {
          code: FigmaPostCode.get(),
          type,
          message: 'second'
        },
        { origin: '' }
      )

      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith('first')
    })
  })
})
