import { describe, expect, it } from 'vitest'
import { ErrorCenter, ErrorCenterInstance } from '@dxtmisha/functional-basic'
import { CmsErrorInstance } from '../CmsErrorInstance'

describe('CmsErrorInstance', () => {
  it('defaults to global ErrorCenter and supports getErrorCenter/setErrorCenter', () => {
    const cmsError = new CmsErrorInstance()
    expect(cmsError.getErrorCenter()).toBe(ErrorCenter.getItem())

    const customCenter = new ErrorCenterInstance()
    expect(cmsError.setErrorCenter(customCenter)).toBe(cmsError)
    expect(cmsError.getErrorCenter()).toBe(customCenter)
  })

  it('registers domain errors in ErrorCenter under cms group and throws prefixed Error', () => {
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
    expect(() => cmsError.report('cms-user', 'notFound', { id: 1 }))
      .toThrow('[@dxtmisha/cms-api] Requested CMS user was not found.')

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

  it('avoids double-reporting domain errors and wraps unknown non-Error throws in handleTransaction', () => {
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
    const domainError = new Error('[@dxtmisha/cms-api] Already reported.')
    expect(() => cmsError.handleTransaction('cms-db', 'fallbackCode', domainError, 'Fallback message.'))
      .toThrow(domainError)
    expect(captured).toHaveLength(0)

    const dbError = new Error('Connection refused')
    expect(() => cmsError.handleTransaction('cms-db', 'dbFail', dbError, 'Database failed.'))
      .toThrow(dbError)
    expect(captured).toEqual([
      {
        group: 'cms-db',
        code: 'dbFail',
        message: 'Database failed.'
      }
    ])

    expect(() => cmsError.handleTransaction('cms-db', 'unknownFail', 'raw-failure', 'Unknown error.'))
      .toThrow('[@dxtmisha/cms-api] Unknown error.')
    expect(captured).toHaveLength(2)
  })
})
