import { afterEach, describe, expect, it } from 'vitest'
import { ErrorCenter, ErrorCenterError, ErrorCenterInstance } from '@dxtmisha/functional-basic'
import { CmsErrorInstance } from '../CmsErrorInstance'

describe('CmsErrorInstance', () => {
  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
  })

  it('defaults to global ErrorCenter when no instance is provided', () => {
    ErrorCenter.setIsConsole(false)
    const captured: string[] = []
    ErrorCenter.addCallback((cause) => {
      captured.push(`${cause.group}:${cause.code}`)
    })

    const cmsError = new CmsErrorInstance()
    expect(() => cmsError.report({
      group: 'cms-user',
      code: 'notFound'
    }))
      .toThrow(ErrorCenterError)
    expect(captured).toEqual(['cms-user:notFound'])
  })

  it('registers domain errors in ErrorCenter under cms group and throws ErrorCenterError', () => {
    const errorCenter = new ErrorCenterInstance()
    errorCenter.setIsConsole(false)

    const captured: Array<{ group?: string, code: string, label?: string, message?: string, details?: unknown }> = []
    errorCenter.addCallback((cause) => {
      captured.push({
        group: cause.group,
        code: cause.code,
        label: cause.label,
        message: cause.message,
        details: cause.details
      })
    })

    const cmsError = new CmsErrorInstance(errorCenter)
    let caughtError: unknown

    try {
      cmsError.report({
        group: 'cms-user',
        code: 'notFound',
        details: { id: 1 }
      })
    } catch (error) {
      caughtError = error
    }

    expect(caughtError).toBeInstanceOf(ErrorCenterError)
    if (caughtError instanceof ErrorCenterError) {
      expect(caughtError.message).toBe('Requested CMS user was not found.')
      expect(caughtError.getGroup()).toBe('cms-user')
      expect(caughtError.getCode()).toBe('notFound')
      expect(caughtError.getLabel()).toBe('User Not Found')
      expect(caughtError.getDetails()).toEqual({ id: 1 })
    }

    expect(captured).toEqual([
      {
        group: 'cms-user',
        code: 'notFound',
        label: 'User Not Found',
        message: 'Requested CMS user was not found.',
        details: { id: 1 }
      }
    ])
  })

  it('avoids double-reporting ErrorCenterError and wraps unexpected throws via ErrorCenterThrow in handleTransaction', () => {
    const errorCenter = new ErrorCenterInstance()
    errorCenter.setIsConsole(false)

    const captured: Array<{ group?: string, code: string, message?: string }> = []
    errorCenter.addCallback((cause) => {
      captured.push({
        group: cause.group,
        code: cause.code,
        message: cause.message
      })
    })

    const cmsError = new CmsErrorInstance(errorCenter)
    const domainError = new ErrorCenterError({
      group: 'cms-user',
      code: 'notFound',
      message: 'Already reported.'
    })
    expect(() => cmsError.handleTransaction(
      {
        group: 'cms-db',
        code: 'fallbackCode',
        message: 'Fallback message.'
      },
      domainError
    ))
      .toThrow(domainError)
    expect(captured).toHaveLength(0)

    const dbError = new Error('Connection refused')
    let caughtDbError: unknown
    try {
      cmsError.handleTransaction(
        {
          group: 'cms-db',
          code: 'dbFail',
          message: 'Database failed.'
        },
        dbError
      )
    } catch (error) {
      caughtDbError = error
    }

    expect(caughtDbError).toBeInstanceOf(ErrorCenterError)
    if (caughtDbError instanceof ErrorCenterError) {
      expect(caughtDbError.message).toBe('Database failed.')
      expect(caughtDbError.cause).toBe(dbError)
      expect(caughtDbError.getDetails()).toBe(dbError)
    }

    expect(captured).toEqual([
      {
        group: 'cms-db',
        code: 'dbFail',
        message: 'Database failed.'
      }
    ])

    let caughtUnknownError: unknown
    try {
      cmsError.handleTransaction(
        {
          group: 'cms-db',
          code: 'unknownFail',
          message: 'Unknown error.'
        },
        'raw-failure'
      )
    } catch (error) {
      caughtUnknownError = error
    }

    expect(caughtUnknownError).toBeInstanceOf(ErrorCenterError)
    if (caughtUnknownError instanceof ErrorCenterError) {
      expect(caughtUnknownError.message).toBe('Unknown error.')
      expect(caughtUnknownError.getDetails()).toBe('raw-failure')
    }

    expect(captured).toHaveLength(2)

    const detailsError = new Error('Details fallback')
    let caughtDetailsError: unknown
    try {
      cmsError.handleTransaction({
        group: 'cms-db',
        code: 'detailsFail',
        message: 'Details failed.',
        details: detailsError
      })
    } catch (error) {
      caughtDetailsError = error
    }

    expect(caughtDetailsError).toBeInstanceOf(ErrorCenterError)
    if (caughtDetailsError instanceof ErrorCenterError) {
      expect(caughtDetailsError.message).toBe('Details failed.')
      expect(caughtDetailsError.cause).toBe(detailsError)
      expect(caughtDetailsError.getDetails()).toBe(detailsError)
    }

    expect(captured).toHaveLength(3)
  })
})
