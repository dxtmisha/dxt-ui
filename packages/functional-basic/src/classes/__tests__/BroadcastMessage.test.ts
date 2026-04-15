// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { BroadcastMessage } from '../BroadcastMessage'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

describe('BroadcastMessage', () => {
  const channelName = 'test-channel'
  let postMessageMock: any
  let addEventListenerMock: any
  let removeEventListenerMock: any
  let closeMock: any

  beforeEach(() => {
    vi.restoreAllMocks()

    postMessageMock = vi.fn()
    addEventListenerMock = vi.fn()
    removeEventListenerMock = vi.fn()
    closeMock = vi.fn()

    // Mock BroadcastChannel
    globalThis.BroadcastChannel = vi.fn().mockImplementation(function (this: any) {
      this.postMessage = postMessageMock
      this.addEventListener = addEventListenerMock
      this.removeEventListener = removeEventListenerMock
      this.close = closeMock
      this.onmessage = null
      this.onmessageerror = null
    })

    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize BroadcastChannel with a prefixed name in DOM runtime', () => {
    new BroadcastMessage(channelName)
    expect(globalThis.BroadcastChannel).toHaveBeenCalledWith(expect.stringContaining(`__${channelName}`))
  })

  it('should not initialize BroadcastChannel if not in DOM runtime', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
    const bm = new BroadcastMessage(channelName)
    expect(globalThis.BroadcastChannel).not.toHaveBeenCalled()
    expect(bm.getChannel()).toBeUndefined()
  })

  it('should return the channel via getChannel()', () => {
    const bm = new BroadcastMessage(channelName)
    expect(bm.getChannel()).toBeDefined()
  })

  it('should send messages via post()', () => {
    const bm = new BroadcastMessage<string>(channelName)
    const message = 'hello world'
    bm.post(message)
    expect(postMessageMock).toHaveBeenCalledWith(message)
  })

  it('should close the channel and clear it upon destroy()', () => {
    const bm = new BroadcastMessage(channelName)
    bm.destroy()
    expect(closeMock).toHaveBeenCalled()
    expect(bm.getChannel()).toBeUndefined()
  })

  it('should call callback when a message is received', () => {
    const callback = vi.fn()
    const bm = new BroadcastMessage<string>(channelName, callback)
    const channel = bm.getChannel() as any

    const event = new MessageEvent('message', { data: 'test data' })
    channel.onmessage(event)

    expect(callback).toHaveBeenCalledWith(event)
  })

  it('should call callbackError when a message error occurs', () => {
    const callbackError = vi.fn()
    const bm = new BroadcastMessage<string>(channelName, undefined, callbackError)
    const channel = bm.getChannel() as any

    const event = new MessageEvent('messageerror', { data: 'error data' })
    channel.onmessageerror(event)

    expect(callbackError).toHaveBeenCalledWith(event)
  })

  it('should allow updating callback via setCallback()', () => {
    const initialCallback = vi.fn()
    const newCallback = vi.fn()
    const bm = new BroadcastMessage<string>(channelName, initialCallback)

    bm.setCallback(newCallback)

    const event = new MessageEvent('message', { data: 'new data' })
    const channel = bm.getChannel() as any
    channel.onmessage(event)

    expect(initialCallback).not.toHaveBeenCalled()
    expect(newCallback).toHaveBeenCalledWith(event)
  })

  it('should allow updating callbackError via setCallbackError()', () => {
    const initialCallbackError = vi.fn()
    const newCallbackError = vi.fn()
    const bm = new BroadcastMessage<string>(channelName, undefined, initialCallbackError)

    bm.setCallbackError(newCallbackError)

    const event = new MessageEvent('messageerror', { data: 'new error data' })
    const channel = bm.getChannel() as any
    channel.onmessageerror(event)

    expect(initialCallbackError).not.toHaveBeenCalled()
    expect(newCallbackError).toHaveBeenCalledWith(event)
  })

  it('should return this from post(), setCallback() and setCallbackError() for chaining', () => {
    const bm = new BroadcastMessage<string>(channelName)
    expect(bm.post('msg')).toBe(bm)
    expect(bm.setCallback(vi.fn())).toBe(bm)
    expect(bm.setCallbackError(vi.fn())).toBe(bm)
  })
})
