// @vitest-environment jsdom
import { describe, it, expect, expectTypeOf, vi, beforeEach, afterEach } from 'vitest'
import { ErrorCenter } from '../ErrorCenter'
import { ErrorCenterError } from '../ErrorCenterError'
import { ErrorCenterThrow } from '../ErrorCenterThrow'
import { ErrorCenterThrowInstance } from '../ErrorCenterThrowInstance'
import { ServerStorage } from '../ServerStorage'

describe('ErrorCenterThrow', () => {
  beforeEach(() => {
    ServerStorage.reset()
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    ServerStorage.reset()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should reuse the ErrorCenterThrowInstance in browser storage', () => {
      const firstInstance = ErrorCenterThrow.getItem()
      const secondInstance = ErrorCenterThrow.getItem()

      expect(firstInstance).toBeInstanceOf(ErrorCenterThrowInstance)
      expect(firstInstance).toBe(secondInstance)
    })

    it('should dispatch to ErrorCenter and throw ErrorCenterError via static on()', () => {
      const handlerCallback = vi.fn()
      ErrorCenter.addHandler('api', handlerCallback)

      const originalError = new Error('Underlying failure')
      let caughtError: unknown

      try {
        ErrorCenterThrow.on(
          {
            group: 'api',
            code: 'notFound',
            details: { resourceId: 42 }
          },
          { cause: originalError }
        )
      } catch (error) {
        caughtError = error
      }

      expect(handlerCallback).toHaveBeenCalledExactlyOnceWith({
        group: 'api',
        code: 'notFound',
        label: 'Resource Not Found',
        message: 'The requested resource could not be found on the server.',
        details: { resourceId: 42 }
      })

      expect(caughtError).toBeInstanceOf(ErrorCenterError)
      if (caughtError instanceof ErrorCenterError) {
        expect(caughtError.getGroup()).toBe('api')
        expect(caughtError.getCode()).toBe('notFound')
        expect(caughtError.getDetails()).toEqual({ resourceId: 42 })
        expect(caughtError.cause).toBe(originalError)
      }
    })

    it('should enforce never return type on static on() and handle() methods', () => {
      expectTypeOf(ErrorCenterThrow.on<{ id: number }>).returns.toEqualTypeOf<never>()
      expectTypeOf(ErrorCenterThrow.handle<{ id: number }>).returns.toEqualTypeOf<never>()
    })
  })

  describe('Static handle() delegation and SSR isolation', () => {
    it('should rethrow ErrorCenterError without double-reporting and throw new ErrorCenterError for other errors', () => {
      const callback = vi.fn()
      ErrorCenter.addCallback(callback)

      const domainError = new ErrorCenterError({
        group: 'api',
        code: 'notFound',
        message: 'Already reported.'
      })

      expect(() => ErrorCenterThrow.handle(
        {
          group: 'storage',
          code: 'fallback',
          message: 'Fallback message.'
        },
        domainError
      )).toThrow(domainError)
      expect(callback).not.toHaveBeenCalled()

      const explicitCause = new Error('Explicit cause')
      let caughtError: unknown

      try {
        ErrorCenterThrow.handle(
          {
            group: 'api',
            code: 'server',
            message: 'Request failed.',
            details: { step: 2 }
          },
          new Error('Raw failure'),
          { cause: explicitCause }
        )
      } catch (error) {
        caughtError = error
      }

      expect(caughtError).toBeInstanceOf(ErrorCenterError)
      if (caughtError instanceof ErrorCenterError) {
        expect(caughtError.message).toBe('Request failed.')
        expect(caughtError.getDetails()).toEqual({ step: 2 })
        expect(caughtError.cause).toBe(explicitCause)
      }
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should isolate ErrorCenterThrow instances across SSR requests without triggering context errors', () => {
      vi.stubGlobal('window', undefined)
      let context: Record<string, unknown> = {}
      ServerStorage.init(() => context)

      const firstInstance = ErrorCenterThrow.getItem()
      const firstCallback = vi.fn()
      ErrorCenter.addCallback(firstCallback)

      context = {}
      const secondInstance = ErrorCenterThrow.getItem()
      const secondCallback = vi.fn()
      ErrorCenter.addCallback(secondCallback)

      expect(firstInstance).not.toBe(secondInstance)

      expect(() => ErrorCenterThrow.on({ group: 'api', code: 'server' })).toThrow(ErrorCenterError)
      expect(secondCallback).toHaveBeenCalledTimes(1)
      expect(firstCallback).not.toHaveBeenCalled()
    })
  })
})
