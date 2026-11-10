import { describe, it, expect, vi, beforeEach } from 'vitest'
import { FigmaPostAbstract } from '../FigmaPostAbstract'
import { FigmaPostCode } from '../FigmaPostCode'
import type { UiFigmaMessengerData } from '../../types/figmaMessengerTypes'

class MockFigmaPost extends FigmaPostAbstract {
  public post = vi.fn()
  public prepare = vi.fn()

  public testNotify<Message>(type: string, message: Message): void {
    this.notify(type, message)
  }

  public testOnMessage(data?: UiFigmaMessengerData): void {
    this.onMessage(data)
  }
}

describe('FigmaPostAbstract', () => {
  let messenger: MockFigmaPost

  beforeEach(() => {
    messenger = new MockFigmaPost()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('add() should register a callback and return this for chaining', () => {
      const callback = vi.fn()
      const result = messenger.add('test-event', callback)

      expect(result).toBe(messenger)
      messenger.testNotify('test-event', { data: 'hello' })
      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith({ data: 'hello' })
    })

    it('should support multiple callbacks for the same message type in registration order', () => {
      const order: number[] = []
      const callbackFirst = vi.fn(() => order.push(1))
      const callbackSecond = vi.fn(() => order.push(2))

      messenger
        .add('multi-event', callbackFirst)
        .add('multi-event', callbackSecond)

      messenger.testNotify('multi-event', 'payload')

      expect(callbackFirst).toHaveBeenCalledWith('payload')
      expect(callbackSecond).toHaveBeenCalledWith('payload')
      expect(order).toEqual([1, 2])
    })

    it('should isolate callbacks across different message types', () => {
      const callbackAlpha = vi.fn()
      const callbackBeta = vi.fn()

      messenger.add('alpha', callbackAlpha)
      messenger.add('beta', callbackBeta)

      messenger.testNotify('alpha', 42)

      expect(callbackAlpha).toHaveBeenCalledWith(42)
      expect(callbackBeta).not.toHaveBeenCalled()
    })

    it('make() should call prepare() exactly once and return this', () => {
      const firstResult = messenger.make()
      const secondResult = messenger.make()

      expect(firstResult).toBe(messenger)
      expect(secondResult).toBe(messenger)
      expect(messenger.prepare).toHaveBeenCalledTimes(1)
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should safely handle falsy payload values (0, false, empty string, null, undefined)', () => {
      const callback = vi.fn()
      messenger.add('falsy-event', callback)

      messenger.testNotify('falsy-event', 0)
      messenger.testNotify('falsy-event', false)
      messenger.testNotify('falsy-event', '')
      messenger.testNotify('falsy-event', null)
      messenger.testNotify('falsy-event', undefined)

      expect(callback).toHaveBeenCalledTimes(5)
      expect(callback).toHaveBeenNthCalledWith(1, 0)
      expect(callback).toHaveBeenNthCalledWith(2, false)
      expect(callback).toHaveBeenNthCalledWith(3, '')
      expect(callback).toHaveBeenNthCalledWith(4, null)
      expect(callback).toHaveBeenNthCalledWith(5, undefined)
    })

    it('should safely ignore notify() for unregistered message types and Object.prototype keys', () => {
      expect(() => messenger.testNotify('unregistered', { test: true })).not.toThrow()
      expect(() => messenger.testNotify('toString', { test: true })).not.toThrow()
      expect(() => messenger.testNotify('constructor', { test: true })).not.toThrow()
      expect(() => messenger.testNotify('hasOwnProperty', { test: true })).not.toThrow()
    })

    it('remove() on non-existent message type should safely return this without throwing', () => {
      const callback = vi.fn()
      const result = messenger.remove('non-existent', callback)

      expect(result).toBe(messenger)
    })
  })

  describe('One-time execution and unregistration', () => {
    it('add() with once: true should remove callback after one invocation', () => {
      const callback = vi.fn()
      messenger.add('test-event', callback, true)

      messenger.testNotify('test-event', { data: 'first' })
      messenger.testNotify('test-event', { data: 'second' })

      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith({ data: 'first' })
    })

    it('should keep persistent callbacks while removing once callbacks on the same event', () => {
      const onceCallback = vi.fn()
      const persistentCallback = vi.fn()

      messenger
        .add('mixed-event', onceCallback, true)
        .add('mixed-event', persistentCallback, false)

      messenger.testNotify('mixed-event', 'run-1')
      messenger.testNotify('mixed-event', 'run-2')

      expect(onceCallback).toHaveBeenCalledTimes(1)
      expect(persistentCallback).toHaveBeenCalledTimes(2)
    })

    it('remove() should unregister a specific callback and leave others untouched', () => {
      const callbackKeep = vi.fn()
      const callbackRemove = vi.fn()

      messenger
        .add('test-event', callbackKeep)
        .add('test-event', callbackRemove)

      const result = messenger.remove('test-event', callbackRemove)
      expect(result).toBe(messenger)

      messenger.testNotify('test-event', { data: 'hello' })
      expect(callbackRemove).not.toHaveBeenCalled()
      expect(callbackKeep).toHaveBeenCalledWith({ data: 'hello' })
    })
  })

  describe('Metacharacters, escaping, and security in onMessage', () => {
    it('onMessage() should notify listeners when code matches FigmaPostCode', () => {
      const callback = vi.fn()
      const code = FigmaPostCode.get()

      messenger.add('test-event', callback)
      messenger.testOnMessage({
        code,
        type: 'test-event',
        message: 'hello'
      })

      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith('hello')
    })

    it('onMessage() should NOT notify when code is invalid', () => {
      const callback = vi.fn()

      messenger.add('test-event', callback)
      messenger.testOnMessage({
        code: 'invalid-code',
        type: 'test-event',
        message: 'hello'
      })

      expect(callback).not.toHaveBeenCalled()
    })

    it('onMessage() should safely ignore undefined or empty data without throwing', () => {
      const callback = vi.fn()
      messenger.add('test-event', callback)

      expect(() => messenger.testOnMessage(undefined)).not.toThrow()
      expect(callback).not.toHaveBeenCalled()
    })

    it('should support event types containing regex metacharacters safely', () => {
      const callback = vi.fn()
      const regexType = 'event.*+?^$()[]{}|\\'

      messenger.add(regexType, callback)
      messenger.testOnMessage({
        code: FigmaPostCode.get(),
        type: regexType,
        message: { safe: true }
      })

      expect(callback).toHaveBeenCalledWith({ safe: true })
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should handle Cyrillic, Vietnamese, and Emoji event types and message contents', () => {
      const callback = vi.fn()
      const unicodeType = 'событие_đặc_biệt_🎉'
      const payload = { ru: 'Тест', vi: 'Thử nghiệm', icon: '🚀' }

      messenger.add(unicodeType, callback)
      messenger.testOnMessage({
        code: FigmaPostCode.get(),
        type: unicodeType,
        message: payload
      })

      expect(callback).toHaveBeenCalledWith(payload)
    })
  })
})
