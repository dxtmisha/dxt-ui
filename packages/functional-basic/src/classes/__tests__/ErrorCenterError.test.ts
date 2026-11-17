import { describe, it, expect, expectTypeOf, afterEach, vi } from 'vitest'
import { ErrorCenterError } from '../ErrorCenterError'
import type { ErrorCenterCauseItem, ErrorCenterGroup } from '../../types/errorCenterTypes'

describe('ErrorCenterError', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should create an Error instance with structured cause fields and expose all getters', () => {
      const causeItem: ErrorCenterCauseItem<{ userId: number }> = {
        group: 'api',
        code: 'notFound',
        label: 'Resource Not Found',
        message: 'User does not exist',
        details: { userId: 42 }
      }

      const error = new ErrorCenterError(causeItem)

      expect(error).toBeInstanceOf(Error)
      expect(error).toBeInstanceOf(ErrorCenterError)
      expect(error.name).toBe('ErrorCenterError')
      expect(error.message).toBe('User does not exist')
      expect(error.stack).toBeTruthy()
      expect(error.cause).toBe(causeItem)
      expect(error.getCauseItem()).toBe(causeItem)
      expect(error.getGroup()).toBe('api')
      expect(error.getCode()).toBe('notFound')
      expect(error.getLabel()).toBe('Resource Not Found')
      expect(error.getMessage()).toBe('User does not exist')
      expect(error.getDetails()).toEqual({ userId: 42 })
    })

    it('should work cleanly when thrown and caught with instanceof narrowing', () => {
      const throwError = (): never => {
        throw new ErrorCenterError({
          group: 'auth',
          code: 'forbidden',
          message: 'Access denied',
          details: { role: 'guest' }
        })
      }

      let caught: unknown
      try {
        throwError()
      } catch (error) {
        caught = error
      }

      expect(caught).toBeInstanceOf(ErrorCenterError)
      if (caught instanceof ErrorCenterError) {
        expect(caught.getGroup()).toBe('auth')
        expect(caught.getCode()).toBe('forbidden')
        expect(caught.getDetails()).toEqual({ role: 'guest' })
      }
    })

    it('should preserve exact generic and getter return types', () => {
      const typedError = new ErrorCenterError<{ attempt: number }>({
        code: 'RETRY_LIMIT',
        details: { attempt: 3 }
      })
      const untypedError = new ErrorCenterError({ code: 'GENERIC' })

      expectTypeOf(typedError.getDetails()).toEqualTypeOf<{ attempt: number } | undefined>()
      expectTypeOf(typedError.getCauseItem()).toEqualTypeOf<ErrorCenterCauseItem<{ attempt: number }>>()
      expectTypeOf(typedError.getGroup()).toEqualTypeOf<ErrorCenterGroup>()
      expectTypeOf(typedError.getCode()).toEqualTypeOf<string>()
      expectTypeOf(typedError.getLabel()).toEqualTypeOf<string | undefined>()
      expectTypeOf(typedError.getMessage()).toEqualTypeOf<string | undefined>()
      expectTypeOf(untypedError.getDetails()).toEqualTypeOf<unknown>()
    })
  })

  describe('Boundary values, zero/falsy traps, and empty inputs', () => {
    it('should fallback Error.message to code when message is omitted while getMessage() remains undefined', () => {
      const error = new ErrorCenterError({
        code: 'unauthorized'
      })

      expect(error.message).toBe('unauthorized')
      expect(error.getGroup()).toBeUndefined()
      expect(error.getCode()).toBe('unauthorized')
      expect(error.getLabel()).toBeUndefined()
      expect(error.getMessage()).toBeUndefined()
      expect(error.getDetails()).toBeUndefined()
    })

    it('should preserve empty string message instead of falling back to code', () => {
      const error = new ErrorCenterError({
        code: 'EMPTY_MSG',
        message: ''
      })

      expect(error.message).toBe('')
      expect(error.getMessage()).toBe('')
      expect(error.getCode()).toBe('EMPTY_MSG')
    })

    it('should preserve falsy details payloads (0, false, empty string, null)', () => {
      const zeroError = new ErrorCenterError({ code: 'ZERO', details: 0 })
      const falseError = new ErrorCenterError({ code: 'FALSE', details: false })
      const emptyError = new ErrorCenterError({ code: 'EMPTY', details: '' })
      const nullError = new ErrorCenterError({ code: 'NULL', details: null })

      expect(zeroError.getDetails()).toBe(0)
      expect(falseError.getDetails()).toBe(false)
      expect(emptyError.getDetails()).toBe('')
      expect(nullError.getDetails()).toBeNull()
    })
  })

  describe('ErrorOptions and subclass prototype integrity', () => {
    it('should override cause when ErrorOptions.cause is provided without altering getCauseItem()', () => {
      const originalError = new TypeError('Network failure')
      const causeItem: ErrorCenterCauseItem = {
        group: 'db',
        code: 'connection',
        message: 'Database connection failed'
      }
      const error = new ErrorCenterError(causeItem, { cause: originalError })

      expect(error.message).toBe('Database connection failed')
      expect(error.cause).toBe(originalError)
      expect(error.getCauseItem()).toBe(causeItem)
    })

    it('should default cause to causeItem when empty ErrorOptions object is passed', () => {
      const causeItem: ErrorCenterCauseItem = {
        group: 'api',
        code: 'timeout'
      }
      const error = new ErrorCenterError(causeItem, {})

      expect(error.cause).toBe(causeItem)
    })

    it('should preserve prototype chain when subclassed further', () => {
      class DomainError extends ErrorCenterError<{ field: string }> {}

      const error = new DomainError({
        group: 'validation',
        code: 'invalidField',
        details: { field: 'email' }
      })

      expect(error).toBeInstanceOf(Error)
      expect(error).toBeInstanceOf(ErrorCenterError)
      expect(error).toBeInstanceOf(DomainError)
      expect(error.getDetails()).toEqual({ field: 'email' })
    })
  })

  describe('Multilingual, Unicode, and SSR isolation', () => {
    it('should preserve Cyrillic, Vietnamese diacritics, CJK, and Emoji in error fields', () => {
      const error = new ErrorCenterError({
        group: 'intl',
        code: 'INVALID_TEXT',
        label: 'Ошибка / Lỗi tiếng Việt / 错误',
        message: 'Привет Мир — Học tiếng Việt 🚀',
        details: { sample: 'Nguyễn 日本語 👨‍👩‍👧‍👦' }
      })

      expect(error.message).toBe('Привет Мир — Học tiếng Việt 🚀')
      expect(error.getLabel()).toBe('Ошибка / Lỗi tiếng Việt / 错误')
      expect(error.getMessage()).toBe('Привет Мир — Học tiếng Việt 🚀')
      expect(error.getDetails()).toEqual({ sample: 'Nguyễn 日本語 👨‍👩‍👧‍👦' })
    })

    it('should construct safely in non-DOM SSR runtime', () => {
      vi.stubGlobal('window', undefined)
      vi.stubGlobal('document', undefined)

      const error = new ErrorCenterError({
        group: 'ssr',
        code: 'hydration',
        message: 'Hydration mismatch'
      })

      expect(error).toBeInstanceOf(ErrorCenterError)
      expect(error.getCode()).toBe('hydration')
      expect(error.message).toBe('Hydration mismatch')
    })
  })
})
