import { describe, it, expect, vi, beforeEach } from 'vitest'
import { FigmaPostAbstract } from '../FigmaPostAbstract'
import { FigmaPostCode } from '../FigmaPostCode'

class MockFigmaPost extends FigmaPostAbstract {
  public post = vi.fn()
  public prepare = vi.fn()

  // Expose protected methods for testing
  public testNotify(type: string, message: any) {
    this.notify(type, message)
  }

  public testOnMessage(data: any) {
    this.onMessage(data)
  }
}

describe('FigmaPostAbstract', () => {
  let messenger: MockFigmaPost

  beforeEach(() => {
    messenger = new MockFigmaPost()
  })

  it('add() should register a callback', () => {
    const callback = vi.fn()
    messenger.add('test-event', callback)

    messenger.testNotify('test-event', { data: 'hello' })
    expect(callback).toHaveBeenCalledWith({ data: 'hello' })
  })

  it('add() with once: true should remove callback after one call', () => {
    const callback = vi.fn()
    messenger.add('test-event', callback, true)

    messenger.testNotify('test-event', { data: 'first' })
    messenger.testNotify('test-event', { data: 'second' })

    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith({ data: 'first' })
  })

  it('remove() should unregister a callback', () => {
    const callback = vi.fn()
    messenger.add('test-event', callback)
    messenger.remove('test-event', callback)

    messenger.testNotify('test-event', { data: 'hello' })
    expect(callback).not.toHaveBeenCalled()
  })

  it('make() should call prepare() exactly once', () => {
    messenger.make()
    messenger.make()

    expect(messenger.prepare).toHaveBeenCalledTimes(1)
  })

  it('onMessage() should notify if code is valid', () => {
    const callback = vi.fn()
    const code = FigmaPostCode.get()

    messenger.add('test-event', callback)
    messenger.testOnMessage({
      code: code,
      type: 'test-event',
      message: 'hello'
    })

    expect(callback).toHaveBeenCalledWith('hello')
  })

  it('onMessage() should NOT notify if code is invalid', () => {
    const callback = vi.fn()

    messenger.add('test-event', callback)
    messenger.testOnMessage({
      code: 'invalid-code',
      type: 'test-event',
      message: 'hello'
    })

    expect(callback).not.toHaveBeenCalled()
  })
})
