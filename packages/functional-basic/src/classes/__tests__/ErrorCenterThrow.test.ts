// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
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

  it('should use static ErrorCenter.getItem() by default', () => {
    const errorThrow = new ErrorCenterThrow()

    expect(errorThrow.getErrorCenter()).toBe(ErrorCenter.getItem())
  })

  it('should accept and override a custom ErrorCenterInstance', () => {
    const firstInstance = new ErrorCenterInstance([], new ErrorCenterHandler([], false))
    const secondInstance = new ErrorCenterInstance([], new ErrorCenterHandler([], false))
    const errorThrow = new ErrorCenterThrow(firstInstance)

    expect(errorThrow.getErrorCenter()).toBe(firstInstance)
    expect(errorThrow.setErrorCenter(secondInstance)).toBe(errorThrow)
    expect(errorThrow.getErrorCenter()).toBe(secondInstance)
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

    expect(caughtError).toBeInstanceOf(ErrorCenterError)
    if (caughtError instanceof ErrorCenterError) {
      expect(caughtError.getGroup()).toBe('api')
      expect(caughtError.getCode()).toBe('notFound')
      expect(caughtError.getLabel()).toBe('Resource Not Found')
      expect(caughtError.message).toBe('The requested resource could not be found on the server.')
      expect(caughtError.getDetails()).toEqual({ resourceId: 101 })
    }
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

  it('should forward ErrorOptions to the thrown ErrorCenterError', () => {
    const customInstance = new ErrorCenterInstance([], new ErrorCenterHandler([], false))
    const errorThrow = new ErrorCenterThrow(customInstance)
    const originalError = new Error('Underlying failure')

    let caughtError: unknown
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
      caughtError = error
    }

    expect(caughtError).toBeInstanceOf(ErrorCenterError)
    if (caughtError instanceof ErrorCenterError) {
      expect(caughtError.cause).toBe(originalError)
    }
  })

  it('should resolve active SSR ErrorCenterInstance dynamically', () => {
    vi.stubGlobal('window', undefined)
    let context: Record<string, unknown> = {}
    ServerStorage.init(() => context)

    const errorThrow = new ErrorCenterThrow()
    const firstCallback = vi.fn()
    ErrorCenter.addCallback(firstCallback)

    context = {}
    const secondCallback = vi.fn()
    ErrorCenter.addCallback(secondCallback)

    expect(() => errorThrow.on({ code: 'SSR_ERROR' })).toThrow(ErrorCenterError)
    expect(secondCallback).toHaveBeenCalledTimes(1)
    expect(firstCallback).not.toHaveBeenCalled()
  })
})
