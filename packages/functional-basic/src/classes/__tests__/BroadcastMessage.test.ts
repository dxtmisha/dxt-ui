// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach, type MockInstance } from 'vitest'
import { BroadcastMessage } from '../BroadcastMessage'
import { DataStorage } from '../DataStorage'
import { ErrorCenter } from '../ErrorCenter'
import { ErrorCenterInstance } from '../ErrorCenterInstance'
import { ServerStorage } from '../ServerStorage'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

class MockBroadcastChannel {
  name: string
  onmessage: ((event: MessageEvent) => unknown) | null = null
  onmessageerror: ((event: MessageEvent) => unknown) | null = null

  constructor(name: string) {
    this.name = name
  }

  postMessage = vi.fn()
  close = vi.fn()
}

describe('BroadcastMessage', () => {
  let isDomRuntimeSpy: MockInstance<() => boolean>
  let errorCenterSpy: MockInstance

  beforeEach(() => {
    localStorage.clear()
    sessionStorage.clear()
    ServerStorage.reset()
    DataStorage.setPrefix('ui-storage')

    vi.stubGlobal('BroadcastChannel', MockBroadcastChannel)
    isDomRuntimeSpy = vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
    errorCenterSpy = vi.spyOn(ErrorCenter.getItem(), 'on').mockImplementation(() => undefined)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  describe('initialization and deterministic channel naming', () => {
    it('should initialize BroadcastChannel with deterministic browser prefix when in DOM runtime', () => {
      const messageCallback = vi.fn()
      const errorCallback = vi.fn()

      const broadcast = new BroadcastMessage('test_channel', messageCallback, errorCallback)

      expect(errorCenterSpy).not.toHaveBeenCalled()

      const channel = broadcast.getChannel() as unknown as MockBroadcastChannel
      expect(channel).toBeDefined()
      expect(channel.name).toMatch(/^name_\d+__test_channel$/)
      expect(channel.onmessage).toBeTypeOf('function')
      expect(channel.onmessageerror).toBeTypeOf('function')
    })

    it('should generate consistent deterministic channel name for the same browser and persist it in DataStorage', () => {
      const broadcastFirst = new BroadcastMessage('shared_channel')
      const broadcastSecond = new BroadcastMessage('shared_channel')

      const channelFirst = broadcastFirst.getChannel() as unknown as MockBroadcastChannel
      const channelSecond = broadcastSecond.getChannel() as unknown as MockBroadcastChannel

      expect(channelFirst.name).toBe(channelSecond.name)
      expect(channelFirst.name).toMatch(/^name_\d+__shared_channel$/)

      const storedBroadcastName = new DataStorage<string>('__ui:broadcast-name__').get()
      expect(storedBroadcastName).toMatch(/^name_\d+$/)
      expect(channelFirst.name).toBe(`${storedBroadcastName}__shared_channel`)
    })

    it('should compute different browser numbers for different userAgent strings when storage is fresh', () => {
      const userAgentSpy = vi.spyOn(navigator, 'userAgent', 'get')

      userAgentSpy.mockReturnValue('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)')
      const broadcastMac = new BroadcastMessage('env_channel')
      const channelMac = broadcastMac.getChannel() as unknown as MockBroadcastChannel

      localStorage.clear()
      ServerStorage.reset()

      userAgentSpy.mockReturnValue('Mozilla/5.0 (Windows NT 10.0; Win64; x64)')
      const broadcastWindows = new BroadcastMessage('env_channel')
      const channelWindows = broadcastWindows.getChannel() as unknown as MockBroadcastChannel

      expect(channelMac.name).not.toBe(channelWindows.name)
    })

    it('should handle empty navigator.userAgent gracefully with hash 0', () => {
      vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue('')

      const broadcast = new BroadcastMessage('empty_ua')
      const channel = broadcast.getChannel() as unknown as MockBroadcastChannel

      expect(channel.name).toBe('name_0__empty_ua')
    })

    it('should fallback to 1000000 when navigator is undefined', () => {
      vi.stubGlobal('navigator', undefined)

      const broadcast = new BroadcastMessage('no_navigator')
      const channel = broadcast.getChannel() as unknown as MockBroadcastChannel

      expect(channel.name).toBe('name_1000000__no_navigator')
    })

    it('should NOT initialize BroadcastChannel when NOT in DOM runtime (SSR safety)', () => {
      isDomRuntimeSpy.mockReturnValue(false)
      const broadcast = new BroadcastMessage('ssr_channel')

      expect(broadcast.getChannel()).toBeUndefined()
    })

    it('should report to default ErrorCenter if BroadcastChannel initialization throws', () => {
      const ThrowingChannel = class {
        constructor() {
          throw new Error('Channel initialization failure')
        }
      }
      vi.stubGlobal('BroadcastChannel', ThrowingChannel)

      const broadcast = new BroadcastMessage('fail_channel')

      expect(broadcast.getChannel()).toBeUndefined()
      expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({
        group: 'broadcast',
        code: 'error',
        details: expect.any(Error)
      }))
    })

    it('should report to custom ErrorCenterInstance if provided when initialization throws', () => {
      const customErrorCenter = new ErrorCenterInstance()
      const customErrorSpy = vi.spyOn(customErrorCenter, 'on').mockImplementation(() => undefined)
      const initializationError = new Error('Custom channel failure')

      const ThrowingChannel = class {
        constructor() {
          throw initializationError
        }
      }
      vi.stubGlobal('BroadcastChannel', ThrowingChannel)

      const broadcast = new BroadcastMessage('custom_fail', undefined, undefined, customErrorCenter)

      expect(broadcast.getChannel()).toBeUndefined()
      expect(customErrorSpy).toHaveBeenCalledWith({
        group: 'broadcast',
        code: 'error',
        details: initializationError
      })
    })
  })

  describe('messaging and callbacks', () => {
    it('should post message to channel and return this for chaining', () => {
      const broadcast = new BroadcastMessage<{ key: string }>('post_test')
      const channel = broadcast.getChannel() as unknown as MockBroadcastChannel

      const returnValue = broadcast.post({ key: 'value' })

      expect(returnValue).toBe(broadcast)
      expect(channel.postMessage).toHaveBeenCalledWith({ key: 'value' })
    })

    it('should not throw on post if channel is undefined and still return this', () => {
      isDomRuntimeSpy.mockReturnValue(false)
      const broadcast = new BroadcastMessage<{ key: string }>('undefined_post_test')

      expect(() => {
        const returnValue = broadcast.post({ key: 'value' })
        expect(returnValue).toBe(broadcast)
      }).not.toThrow()
    })

    it('should invoke initial callback when onmessage triggers', () => {
      const messageCallback = vi.fn()
      const broadcast = new BroadcastMessage<string>('message_test', messageCallback)
      const channel = broadcast.getChannel() as unknown as MockBroadcastChannel

      const messageEvent = new MessageEvent('message', { data: 'hello' })
      channel.onmessage?.(messageEvent)

      expect(messageCallback).toHaveBeenCalledTimes(1)
      expect(messageCallback).toHaveBeenCalledWith(messageEvent)
    })

    it('should not throw when onmessage triggers without a registered callback', () => {
      const broadcast = new BroadcastMessage<string>('no_callback_test')
      const channel = broadcast.getChannel() as unknown as MockBroadcastChannel

      const messageEvent = new MessageEvent('message', { data: 'ignored' })
      expect(() => channel.onmessage?.(messageEvent)).not.toThrow()
    })

    it('should update the message handler via setCallback and return this', () => {
      const broadcast = new BroadcastMessage<string>('set_callback_test')
      const updatedCallback = vi.fn()

      const returnValue = broadcast.setCallback(updatedCallback)
      expect(returnValue).toBe(broadcast)

      const channel = broadcast.getChannel() as unknown as MockBroadcastChannel
      const messageEvent = new MessageEvent('message', { data: 'updated payload' })
      channel.onmessage?.(messageEvent)

      expect(updatedCallback).toHaveBeenCalledWith(messageEvent)
    })

    it('should invoke initial callbackError when onmessageerror triggers', () => {
      const errorCallback = vi.fn()
      const broadcast = new BroadcastMessage<string>('error_message_test', undefined, errorCallback)
      const channel = broadcast.getChannel() as unknown as MockBroadcastChannel

      const errorEvent = new MessageEvent('messageerror', { data: 'error data' })
      channel.onmessageerror?.(errorEvent)

      expect(errorCallback).toHaveBeenCalledTimes(1)
      expect(errorCallback).toHaveBeenCalledWith(errorEvent)
    })

    it('should not throw when onmessageerror triggers without a registered error callback', () => {
      const broadcast = new BroadcastMessage<string>('no_error_callback_test')
      const channel = broadcast.getChannel() as unknown as MockBroadcastChannel

      const errorEvent = new MessageEvent('messageerror', { data: 'ignored error' })
      expect(() => channel.onmessageerror?.(errorEvent)).not.toThrow()
    })

    it('should update the error handler via setCallbackError and return this', () => {
      const broadcast = new BroadcastMessage<string>('set_callback_error_test')
      const updatedErrorCallback = vi.fn()

      const returnValue = broadcast.setCallbackError(updatedErrorCallback)
      expect(returnValue).toBe(broadcast)

      const channel = broadcast.getChannel() as unknown as MockBroadcastChannel
      const errorEvent = new MessageEvent('messageerror', { data: 'updated error' })
      channel.onmessageerror?.(errorEvent)

      expect(updatedErrorCallback).toHaveBeenCalledWith(errorEvent)
    })
  })

  describe('destroy', () => {
    it('should close channel, clear channel reference, and return this on destroy', () => {
      const broadcast = new BroadcastMessage('destroy_test')
      const channel = broadcast.getChannel() as unknown as MockBroadcastChannel

      const returnValue = broadcast.destroy()

      expect(returnValue).toBe(broadcast)
      expect(channel.close).toHaveBeenCalledTimes(1)
      expect(broadcast.getChannel()).toBeUndefined()
    })

    it('should not throw on destroy if channel is already undefined', () => {
      isDomRuntimeSpy.mockReturnValue(false)
      const broadcast = new BroadcastMessage('destroy_undefined_test')

      expect(() => {
        const returnValue = broadcast.destroy()
        expect(returnValue).toBe(broadcast)
      }).not.toThrow()
      expect(broadcast.getChannel()).toBeUndefined()
    })
  })
})
