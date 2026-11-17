// @vitest-environment jsdom
import { describe, it, expect, expectTypeOf, vi, beforeEach, afterEach } from 'vitest'
import { ErrorCenter } from '../ErrorCenter'
import { ErrorCenterError } from '../ErrorCenterError'
import { ErrorCenterHandler } from '../ErrorCenterHandler'
import { ErrorCenterInstance } from '../ErrorCenterInstance'
import { ErrorCenterThrow } from '../ErrorCenterThrow'
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
    it('should use custom ErrorCenterInstance without triggering static ErrorCenter', () => {
      const staticCallback = vi.fn()
      const customCallback = vi.fn()
      ErrorCenter.addCallback(staticCallback)

      const customInstance = new ErrorCenterInstance([], new ErrorCenterHandler([], false))
      customInstance.addCallback(customCallback)

      const errorThrow = new ErrorCenterThrow(customInstance)

      expect(() => errorThrow.on({ group: 'custom', code: 'CUSTOM_ERR' })).toThrow(ErrorCenterError)
      expect(customCallback).toHaveBeenCalledExactlyOnceWith({ group: 'custom', code: 'CUSTOM_ERR' })
      expect(staticCallback).not.toHaveBeenCalled()
    })

    it('should trigger ErrorCenter.on() and throw ErrorCenterError with resolved cause', () => {
      const handlerCallback = vi.fn()
      ErrorCenter.addHandler('api', handlerCallback)

      const errorThrow = new ErrorCenterThrow()
      let caughtError: unknown

      try {
        errorThrow.on({
          group: 'api',
          code: 'notFound',
          details: { resourceId: 101 }
        })
      } catch (error) {
        caughtError = error
      }

      expect(handlerCallback).toHaveBeenCalledExactlyOnceWith({
        group: 'api',
        code: 'notFound',
        label: 'Resource Not Found',
        message: 'The requested resource could not be found on the server.',
        details: { resourceId: 101 }
      })

      expect(caughtError).toBeInstanceOf(Error)
      expect(caughtError).toBeInstanceOf(ErrorCenterError)
      if (caughtError instanceof ErrorCenterError) {
        expect(caughtError.name).toBe('ErrorCenterError')
        expect(caughtError.stack).toBeTruthy()
        expect(caughtError.getGroup()).toBe('api')
        expect(caughtError.getCode()).toBe('notFound')
        expect(caughtError.getLabel()).toBe('Resource Not Found')
        expect(caughtError.message).toBe('The requested resource could not be found on the server.')
        expect(caughtError.getDetails()).toEqual({ resourceId: 101 })
      }
    })

    it('should enforce never return type on on() method', () => {
      const errorThrow = new ErrorCenterThrow(new ErrorCenterInstance([], new ErrorCenterHandler([], false)))
      expectTypeOf(errorThrow.on<{ id: number }>).returns.toEqualTypeOf<never>()
    })

    it('should respect cause priority when resolving stored cause metadata', () => {
      const customInstance = new ErrorCenterInstance(
        [
          {
            group: 'custom',
            code: 'HIGH',
            priority: 900,
            label: 'Stored Label',
            message: 'Stored Message'
          },
          {
            group: 'custom',
            code: 'LOW',
            priority: 100,
            label: 'Low Label',
            message: 'Low Message'
          }
        ],
        new ErrorCenterHandler([], false)
      )
      const errorThrow = new ErrorCenterThrow(customInstance)

      let highError: unknown
      try {
        errorThrow.on({
          group: 'custom',
          code: 'HIGH',
          priority: 500,
          message: 'Override Attempt',
          details: { step: 1 }
        })
      } catch (error) {
        highError = error
      }

      expect(highError).toBeInstanceOf(ErrorCenterError)
      if (highError instanceof ErrorCenterError) {
        expect(highError.message).toBe('Stored Message')
        expect(highError.getLabel()).toBe('Stored Label')
        expect(highError.getDetails()).toEqual({ step: 1 })
      }

      let lowError: unknown
      try {
        errorThrow.on({
          group: 'custom',
          code: 'LOW',
          message: 'New Message',
          details: { step: 2 }
        })
      } catch (error) {
        lowError = error
      }

      expect(lowError).toBeInstanceOf(ErrorCenterError)
      if (lowError instanceof ErrorCenterError) {
        expect(lowError.message).toBe('New Message')
        expect(lowError.getLabel()).toBe('Low Label')
        expect(lowError.getDetails()).toEqual({ step: 2 })
      }
    })

    it('should forward ErrorOptions to the thrown ErrorCenterError and keep causeItem on empty options', () => {
      const customInstance = new ErrorCenterInstance([], new ErrorCenterHandler([], false))
      const errorThrow = new ErrorCenterThrow(customInstance)
      const originalError = new Error('Underlying failure')

      let caughtWithCause: unknown
      try {
        errorThrow.on(
          {
            group: 'storage',
            code: 'readFailed',
            message: 'Failed to read'
          },
          { cause: originalError }
        )
      } catch (error) {
        caughtWithCause = error
      }

      expect(caughtWithCause).toBeInstanceOf(ErrorCenterError)
      if (caughtWithCause instanceof ErrorCenterError) {
        expect(caughtWithCause.cause).toBe(originalError)
      }

      let caughtWithEmptyOptions: unknown
      try {
        errorThrow.on({ group: 'storage', code: 'emptyOpt' }, {})
      } catch (error) {
        caughtWithEmptyOptions = error
      }

      expect(caughtWithEmptyOptions).toBeInstanceOf(ErrorCenterError)
      if (caughtWithEmptyOptions instanceof ErrorCenterError) {
        expect(caughtWithEmptyOptions.cause).toEqual({ group: 'storage', code: 'emptyOpt' })
      }
    })
  })

  describe('Boundary values, zero/falsy traps, and subscriber resilience', () => {
    it('should respect priority 0, preserve falsy details (0, false, empty string, null), and ignore explicit undefined message', () => {
      const customInstance = new ErrorCenterInstance(
        [
          {
            group: 'boundary',
            code: 'DEFAULT',
            label: 'Stored Label',
            message: 'Stored Message'
          }
        ],
        new ErrorCenterHandler([], false)
      )
      const errorThrow = new ErrorCenterThrow(customInstance)

      let zeroPriorityError: unknown
      try {
        errorThrow.on({
          group: 'boundary',
          code: 'DEFAULT',
          priority: 0,
          message: 'Should Not Override',
          details: 0
        })
      } catch (error) {
        zeroPriorityError = error
      }

      expect(zeroPriorityError).toBeInstanceOf(ErrorCenterError)
      if (zeroPriorityError instanceof ErrorCenterError) {
        expect(zeroPriorityError.message).toBe('Stored Message')
        expect(zeroPriorityError.getDetails()).toBe(0)
      }

      let undefinedMessageError: unknown
      try {
        errorThrow.on<boolean>({
          group: 'boundary',
          code: 'DEFAULT',
          message: undefined,
          details: false
        })
      } catch (error) {
        undefinedMessageError = error
      }

      expect(undefinedMessageError).toBeInstanceOf(ErrorCenterError)
      if (undefinedMessageError instanceof ErrorCenterError) {
        expect(undefinedMessageError.message).toBe('Stored Message')
        expect(undefinedMessageError.getDetails()).toBe(false)
      }

      let emptyMessageError: unknown
      try {
        errorThrow.on<string | null>({
          group: 'boundary',
          code: 'DEFAULT',
          message: '',
          details: null
        })
      } catch (error) {
        emptyMessageError = error
      }

      expect(emptyMessageError).toBeInstanceOf(ErrorCenterError)
      if (emptyMessageError instanceof ErrorCenterError) {
        expect(emptyMessageError.message).toBe('')
        expect(emptyMessageError.getMessage()).toBe('')
        expect(emptyMessageError.getDetails()).toBeNull()
      }
    })

    it('should still throw ErrorCenterError even if a subscriber throws synchronously or rejects asynchronously', () => {
      const customInstance = new ErrorCenterInstance([], new ErrorCenterHandler([], false))
      customInstance.addHandler('resilience', () => {
        throw new Error('Sync subscriber boom')
      })
      customInstance.addCallback(async () => {
        throw new Error('Async subscriber boom')
      })

      const errorThrow = new ErrorCenterThrow(customInstance)
      let caughtError: unknown

      try {
        errorThrow.on({
          group: 'resilience',
          code: 'CRITICAL',
          message: 'Critical failure'
        })
      } catch (error) {
        caughtError = error
      }

      expect(caughtError).toBeInstanceOf(ErrorCenterError)
      if (caughtError instanceof ErrorCenterError) {
        expect(caughtError.getCode()).toBe('CRITICAL')
        expect(caughtError.message).toBe('Critical failure')
      }
    })
  })

  describe('Multilingual, Unicode, and SSR isolation', () => {
    it('should preserve Cyrillic, Vietnamese diacritics, CJK, and Emoji in thrown ErrorCenterError', () => {
      const customInstance = new ErrorCenterInstance([], new ErrorCenterHandler([], false))
      const errorThrow = new ErrorCenterThrow(customInstance)

      let caughtError: unknown
      try {
        errorThrow.on({
          group: 'intl',
          code: 'UNICODE_ERR',
          label: 'Ошибка / Lỗi tiếng Việt / 错误',
          message: 'Привет Мир — Học tiếng Việt 🚀',
          details: { author: 'Nguyễn 日本語 👨‍👩‍👧‍👦' }
        })
      } catch (error) {
        caughtError = error
      }

      expect(caughtError).toBeInstanceOf(ErrorCenterError)
      if (caughtError instanceof ErrorCenterError) {
        expect(caughtError.getLabel()).toBe('Ошибка / Lỗi tiếng Việt / 错误')
        expect(caughtError.message).toBe('Привет Мир — Học tiếng Việt 🚀')
        expect(caughtError.getDetails()).toEqual({ author: 'Nguyễn 日本語 👨‍👩‍👧‍👦' })
      }
    })

    it('should bind to the active SSR ErrorCenterInstance upon instantiation and isolate requests', () => {
      vi.stubGlobal('window', undefined)
      let context: Record<string, unknown> = {}
      ServerStorage.init(() => context)

      const firstErrorThrow = new ErrorCenterThrow()
      const firstCallback = vi.fn()
      ErrorCenter.addCallback(firstCallback)

      context = {}
      const secondErrorThrow = new ErrorCenterThrow()
      const secondCallback = vi.fn()
      ErrorCenter.addCallback(secondCallback)

      expect(() => secondErrorThrow.on({ code: 'SSR_ERROR' })).toThrow(ErrorCenterError)
      expect(secondCallback).toHaveBeenCalledTimes(1)
      expect(firstCallback).not.toHaveBeenCalled()

      expect(() => firstErrorThrow.on({ code: 'FIRST_ERROR' })).toThrow(ErrorCenterError)
      expect(firstCallback).toHaveBeenCalledTimes(1)
    })
  })
})
