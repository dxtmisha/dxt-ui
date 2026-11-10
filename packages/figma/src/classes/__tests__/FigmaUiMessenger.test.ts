import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { FigmaUiMessenger } from '../FigmaUiMessenger'
import { FigmaPostCode } from '../FigmaPostCode'

describe('FigmaUiMessenger', () => {
  let messageHandler: ((event: MessageEvent) => void) | undefined

  beforeEach(() => {
    FigmaUiMessenger.reset()
    messageHandler = undefined

    vi.stubGlobal('window', {
      addEventListener: vi.fn((event: string, handler: (event: MessageEvent) => void) => {
        if (event === 'message') {
          messageHandler = handler
        }
      })
    })
    vi.stubGlobal('parent', {
      postMessage: vi.fn()
    })
  })

  afterEach(() => {
    FigmaUiMessenger.reset()
    vi.unstubAllGlobals()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('getInstance() should return a singleton instance and bind window message listener', () => {
      const instance1 = FigmaUiMessenger.getInstance()
      const instance2 = FigmaUiMessenger.getInstance()

      expect(instance1).toBe(instance2)
      expect(instance1).toBeInstanceOf(FigmaUiMessenger)
      expect(window.addEventListener).toHaveBeenCalledTimes(1)
      expect(window.addEventListener).toHaveBeenCalledWith('message', expect.any(Function))
    })

    it('post() should send message to parent with verification code, type, and payload', () => {
      const messenger = FigmaUiMessenger.getInstance()
      const type = 'custom-action'
      const message = { id: 'btn-1', active: true }

      messenger.post(type, message)

      expect(parent.postMessage).toHaveBeenCalledWith({
        pluginMessage: {
          code: FigmaPostCode.get(),
          type,
          message
        }
      }, '*')
    })

    it('should dispatch valid incoming pluginMessage to registered listeners', () => {
      const messenger = FigmaUiMessenger.getInstance()
      const callback = vi.fn()

      messenger.add('selection-changed', callback)

      messageHandler?.({
        data: {
          pluginMessage: {
            code: FigmaPostCode.get(),
            type: 'selection-changed',
            message: { frameId: '1:100' }
          }
        }
      } as MessageEvent)

      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith({ frameId: '1:100' })
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('post() should safely handle undefined message argument', () => {
      const messenger = FigmaUiMessenger.getInstance()

      messenger.post('ping-event')

      expect(parent.postMessage).toHaveBeenCalledWith({
        pluginMessage: {
          code: FigmaPostCode.get(),
          type: 'ping-event',
          message: undefined
        }
      }, '*')
    })

    it('post() and listener dispatch should correctly preserve numeric 0, false, and empty string', () => {
      const messenger = FigmaUiMessenger.getInstance()
      const zeroCb = vi.fn()
      const falseCb = vi.fn()

      messenger.add('zero-event', zeroCb)
      messenger.add('false-event', falseCb)

      messenger.post('zero-event', 0)
      expect(parent.postMessage).toHaveBeenCalledWith({
        pluginMessage: {
          code: FigmaPostCode.get(),
          type: 'zero-event',
          message: 0
        }
      }, '*')

      messageHandler?.({
        data: {
          pluginMessage: {
            code: FigmaPostCode.get(),
            type: 'zero-event',
            message: 0
          }
        }
      } as MessageEvent)
      expect(zeroCb).toHaveBeenCalledWith(0)

      messenger.post('false-event', false)
      expect(parent.postMessage).toHaveBeenCalledWith({
        pluginMessage: {
          code: FigmaPostCode.get(),
          type: 'false-event',
          message: false
        }
      }, '*')

      messageHandler?.({
        data: {
          pluginMessage: {
            code: FigmaPostCode.get(),
            type: 'false-event',
            message: false
          }
        }
      } as MessageEvent)
      expect(falseCb).toHaveBeenCalledWith(false)
    })

    it('should ignore window message events with null data, empty objects, or missing pluginMessage', () => {
      const messenger = FigmaUiMessenger.getInstance()
      const callback = vi.fn()

      messenger.add('test', callback)

      messageHandler?.({ data: null } as MessageEvent)
      messageHandler?.({ data: {} } as MessageEvent)
      messageHandler?.({ data: { otherData: true } } as MessageEvent)

      expect(callback).not.toHaveBeenCalled()
    })
  })

  describe('Metacharacters, escaping, and security', () => {
    it('should strictly ignore messages with invalid or missing post codes', () => {
      const messenger = FigmaUiMessenger.getInstance()
      const callback = vi.fn()

      messenger.add('secure-action', callback)

      messageHandler?.({
        data: {
          pluginMessage: {
            code: 'invalid-auth-code',
            type: 'secure-action',
            message: 'malicious payload'
          }
        }
      } as MessageEvent)

      expect(callback).not.toHaveBeenCalled()
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should correctly post and receive multilingual messages (Cyrillic, Vietnamese, Emoji)', () => {
      const messenger = FigmaUiMessenger.getInstance()
      const callback = vi.fn()
      const unicodeType = 'событие_giao_diện_🌐'
      const payload = { ru: 'Тестовое сообщение', vi: 'Tin nhắn kiểm tra 🚀' }

      messenger.add(unicodeType, callback)
      messenger.post(unicodeType, payload)

      expect(parent.postMessage).toHaveBeenCalledWith({
        pluginMessage: {
          code: FigmaPostCode.get(),
          type: unicodeType,
          message: payload
        }
      }, '*')

      messageHandler?.({
        data: {
          pluginMessage: {
            code: FigmaPostCode.get(),
            type: unicodeType,
            message: payload
          }
        }
      } as MessageEvent)

      expect(callback).toHaveBeenCalledWith(payload)
    })
  })

  describe('Statefulness, isolation, and lifecycle cleanup', () => {
    it('reset() should invalidate singleton instance allowing fresh listener binding', () => {
      const instance1 = FigmaUiMessenger.getInstance()
      FigmaUiMessenger.reset()
      const instance2 = FigmaUiMessenger.getInstance()

      expect(instance1).not.toBe(instance2)
      expect(window.addEventListener).toHaveBeenCalledTimes(2)
    })
  })
})
