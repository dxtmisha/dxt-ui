import { describe, it, expect } from 'vitest'
import { ErrorCenterError } from '../ErrorCenterError'

describe('ErrorCenterError', () => {
  it('should create an Error instance with structured cause fields', () => {
    const causeItem = {
      group: 'api',
      code: 'notFound',
      label: 'Resource Not Found',
      message: 'User does not exist',
      details: { userId: 42 }
    }

    const error = new ErrorCenterError<{ userId: number }>(causeItem)

    expect(error).toBeInstanceOf(Error)
    expect(error).toBeInstanceOf(ErrorCenterError)
    expect(error.name).toBe('ErrorCenterError')
    expect(error.message).toBe('User does not exist')
    expect(error.getCauseItem()).toEqual(causeItem)
    expect(error.getGroup()).toBe('api')
    expect(error.getCode()).toBe('notFound')
    expect(error.getLabel()).toBe('Resource Not Found')
    expect(error.getMessage()).toBe('User does not exist')
    expect(error.getDetails()).toEqual({ userId: 42 })
    expect(error.cause).toEqual(causeItem)
  })

  it('should fallback message to code when message is not provided', () => {
    const error = new ErrorCenterError({
      group: 'auth',
      code: 'unauthorized'
    })

    expect(error.message).toBe('unauthorized')
    expect(error.getGroup()).toBe('auth')
    expect(error.getCode()).toBe('unauthorized')
    expect(error.getLabel()).toBeUndefined()
    expect(error.getMessage()).toBeUndefined()
    expect(error.getDetails()).toBeUndefined()
  })

  it('should respect custom ErrorOptions when provided', () => {
    const originalError = new TypeError('Original cause')
    const error = new ErrorCenterError(
      {
        group: 'db',
        code: 'connection',
        message: 'Database connection failed'
      },
      { cause: originalError }
    )

    expect(error.message).toBe('Database connection failed')
    expect(error.cause).toBe(originalError)
  })
})
