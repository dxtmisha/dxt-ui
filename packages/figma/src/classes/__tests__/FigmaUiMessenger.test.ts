import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { FigmaUiMessenger } from '../FigmaUiMessenger'
import { FigmaPostCode } from '../FigmaPostCode'

describe('FigmaUiMessenger', () => {
  let messageHandler: ((event: MessageEvent) => void) | undefined

  beforeEach(() => {
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
    vi.unstubAllGlobals()
  })

  describe('Singleton initialization (getInstance)', () => {
    it('getInstance() should return a singleton and initialize it on first call', () => {
      const instance1 = FigmaUiMessenger.getInstance()
      const instance2 = FigmaUiMessenger.getInstance()

      expect(instance1).toBe(instance2)
      expect(instance1).toBeInstanceOf(FigmaUiMessenger)
      expect(window.addEventListener).toHaveBeenCalledTimes(1)
      expect(window.addEventListener).toHaveBeenCalledWith('message', expect.any(Function))
    })
  })

  describe('Sending messages (post)', () => {
    it('post() should send message to parent with code, type, and payload', () => {
      const messenger = FigmaUiMessenger.getInstance()
      const type = 'test-type'
      const message = { foo: 'bar' }

      messenger.post(type, message)

      expect(parent.postMessage).toHaveBeenCalledWith({
        pluginMessage: {
          code: FigmaPostCode.get(),
          type,
          message
        }
      }, '*')
    })

    it('post() should support sending messages without payload (message = undefined)', () => {
      const messenger = FigmaUiMessenger.getInstance()

      messenger.post('ping')

      expect(parent.postMessage).toHaveBeenCalledWith({
        pluginMessage: {
          code: FigmaPostCode.get(),
          type: 'ping',
          message: undefined
        }
      }, '*')
    })
  })

  describe('Receiving messages (prepare & window message listener)', () => {
    it('should dispatch valid pluginMessage events from window message listener to registered callbacks', () => {
      const messenger = new FigmaUiMessenger().make()
      const callback = vi.fn()

      messenger.add('incoming-event', callback)
      expect(messageHandler).toBeTypeOf('function')

      messageHandler?.({
        data: {
          pluginMessage: {
            code: FigmaPostCode.get(),
            type: 'incoming-event',
            message: { status: 'ok' }
          }
        }
      } as MessageEvent)

      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith({ status: 'ok' })
    })

    it('should safely ignore window message events without pluginMessage or with invalid code', () => {
      const messenger = new FigmaUiMessenger().make()
      const callback = vi.fn()

      messenger.add('incoming-event', callback)

      messageHandler?.({ data: null } as MessageEvent)
      messageHandler?.({ data: {} } as MessageEvent)
      messageHandler?.({
        data: {
          pluginMessage: {
            code: 'invalid-code',
            type: 'incoming-event',
            message: 'ignored'
          }
        }
      } as MessageEvent)

      expect(callback).not.toHaveBeenCalled()
    })
  })
})
