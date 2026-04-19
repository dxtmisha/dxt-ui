// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { BroadcastMessage } from '../BroadcastMessage'
import { ErrorCenter } from '../ErrorCenter'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'
import { DataStorage } from '../DataStorage'

// Mock BroadcastChannel since jsdom might not have it or we need strict control
class MockBroadcastChannel {
  name: string
  onmessage: ((ev: MessageEvent) => any) | null = null
  onmessageerror: ((ev: MessageEvent) => any) | null = null

  constructor(name: string) {
    this.name = name
  }

  postMessage = vi.fn()
  close = vi.fn()
}

describe('BroadcastMessage', () => {
  let isDomRuntimeSpy: any
  let errorCenterSpy: any

  beforeEach(() => {
    vi.stubGlobal('BroadcastChannel', MockBroadcastChannel)
    isDomRuntimeSpy = vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
    errorCenterSpy = vi.spyOn(ErrorCenter.getItem(), 'on').mockImplementation(() => undefined as any)

    // Mock DataStorage.prototype.get and set to prevent localStorage errors in JSDOM
    // We mock the constructor to bypass the localStorage item creation that might be happening
    vi.spyOn(DataStorage.prototype, 'get').mockImplementation(function(this: any, callback: any) {
      if (typeof callback === 'function') {
        return callback()
      }
      return 'name_1234567'
    })
    vi.spyOn(DataStorage.prototype, 'set').mockReturnValue({} as any)

    // Also mock the helper function getBroadcastName if it's imported or used
    // Actually, getBroadcastName is private to the file, so we have to ensure DataStorage is mocked correctly.
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('should initialize BroadcastChannel with prefixed name when in DOM runtime', () => {
    const callback = vi.fn()
    const errorCallback = vi.fn()

    // Clear mock calls just in case
    errorCenterSpy.mockClear()

    const broadcast = new BroadcastMessage('test_channel', callback, errorCallback)

    // Check if error was reported
    const calls = errorCenterSpy.mock.calls
    if (calls.length > 0) {
      console.error('Error reported to ErrorCenter:', JSON.stringify(calls[0][0], null, 2))
    }

    // If it's undefined, it likely caught an error
    expect(errorCenterSpy).not.toHaveBeenCalled()

    const channel = broadcast.getChannel() as unknown as MockBroadcastChannel
    expect(channel).toBeDefined()
    // The name might be random if mocking is incomplete, let's check pattern if exact match fails
    expect(channel.name).toMatch(/name_\d+__test_channel/)
    expect(channel.onmessage).toBeDefined()
    expect(channel.onmessageerror).toBeDefined()
  })

  it('should NOT initialize BroadcastChannel when NOT in DOM runtime', () => {
    isDomRuntimeSpy.mockReturnValue(false)
    const broadcast = new BroadcastMessage('test_none')

    expect(broadcast.getChannel()).toBeUndefined()
  })

  it('should report to ErrorCenter if BroadcastChannel initialization fails', () => {
    // Stub it specifically for this test to throw
    const ThrowingChannel = class {
      constructor() {
        throw new Error('Init failure')
      }
    }
    vi.stubGlobal('BroadcastChannel', ThrowingChannel)

    const broadcast = new BroadcastMessage('fail_test')

    expect(broadcast.getChannel()).toBeUndefined()
    expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({
      group: 'broadcast',
      code: 'error',
      details: expect.any(Error)
    }))
  })

  it('should post message to channel', () => {
    const broadcast = new BroadcastMessage('post_test')
    const channel = broadcast.getChannel() as unknown as MockBroadcastChannel

    broadcast.post({ key: 'value' })
    expect(channel.postMessage).toHaveBeenCalledWith({ key: 'value' })
  })

  it('should not throw on post if channel is undefined', () => {
    isDomRuntimeSpy.mockReturnValue(false)
    const broadcast = new BroadcastMessage('undefined_test')

    expect(() => broadcast.post({ key: 'value' })).not.toThrow()
  })

  it('should handle onmessage callback correctly', () => {
    const callback = vi.fn()
    const broadcast = new BroadcastMessage('msg_test', callback)
    const channel = broadcast.getChannel() as unknown as MockBroadcastChannel

    const mockEvent = new MessageEvent('message', { data: 'hello' })

    // Simulate incoming message
    if (channel.onmessage) {
      channel.onmessage(mockEvent)
    }

    expect(callback).toHaveBeenCalledWith(mockEvent)
  })

  it('should handle setCallback updating the message handler', () => {
    const broadcast = new BroadcastMessage('set_cb_test')
    const newCallback = vi.fn()

    broadcast.setCallback(newCallback)

    const channel = broadcast.getChannel() as unknown as MockBroadcastChannel
    const mockEvent = new MessageEvent('message', { data: 'updated' })

    if (channel.onmessage) {
      channel.onmessage(mockEvent)
    }

    expect(newCallback).toHaveBeenCalledWith(mockEvent)
  })

  it('should handle onmessageerror callback correctly', () => {
    const errorCallback = vi.fn()
    const broadcast = new BroadcastMessage('err_msg_test', undefined, errorCallback)
    const channel = broadcast.getChannel() as unknown as MockBroadcastChannel

    const mockEvent = new MessageEvent('messageerror', { data: 'error' })

    // Simulate incoming error
    if (channel.onmessageerror) {
      channel.onmessageerror(mockEvent)
    }

    expect(errorCallback).toHaveBeenCalledWith(mockEvent)
  })

  it('should handle setCallbackError updating the error handler', () => {
    const broadcast = new BroadcastMessage('set_cberr_test')
    const newErrorCallback = vi.fn()

    broadcast.setCallbackError(newErrorCallback)

    const channel = broadcast.getChannel() as unknown as MockBroadcastChannel
    const mockEvent = new MessageEvent('messageerror', { data: 'updated error' })

    if (channel.onmessageerror) {
      channel.onmessageerror(mockEvent)
    }

    expect(newErrorCallback).toHaveBeenCalledWith(mockEvent)
  })

  it('should close channel on destroy', () => {
    const broadcast = new BroadcastMessage('destroy_test')
    const channel = broadcast.getChannel() as unknown as MockBroadcastChannel

    broadcast.destroy()

    expect(channel.close).toHaveBeenCalled()
    expect(broadcast.getChannel()).toBeUndefined()
  })

  it('should not throw on destroy if channel is undefined', () => {
    isDomRuntimeSpy.mockReturnValue(false)
    const broadcast = new BroadcastMessage('destroy_undef_test')

    expect(() => broadcast.destroy()).not.toThrow()
    expect(broadcast.getChannel()).toBeUndefined()
  })
})
