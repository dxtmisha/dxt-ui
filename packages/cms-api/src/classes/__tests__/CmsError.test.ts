import { afterEach, describe, expect, it } from 'vitest'
import { ErrorCenter, ErrorCenterError, ErrorCenterInstance } from '@dxtmisha/functional-basic'
import { CmsError } from '../CmsError'
import { CmsErrorInstance } from '../CmsErrorInstance'

describe('CmsError', () => {
  afterEach(() => {
    CmsError.reset()
  })

  it('manages CmsErrorInstance via getItem, getErrorCenter, setErrorCenter, and reset', () => {
    const firstItem = CmsError.getItem()
    expect(firstItem).toBeInstanceOf(CmsErrorInstance)
    expect(CmsError.getItem()).toBe(firstItem)

    const customCenter = new ErrorCenterInstance()
    CmsError.setErrorCenter(customCenter)
    expect(CmsError.getErrorCenter()).toBe(customCenter)

    CmsError.reset()
    expect(CmsError.getErrorCenter()).toBe(ErrorCenter.getItem())
  })

  it('delegates static report and handleTransaction to the active CmsErrorInstance', () => {
    const errorCenter = new ErrorCenterInstance()
    errorCenter.setIsConsole(false)

    const captured: Array<{ group?: string, code: string, label?: string, message?: string }> = []
    errorCenter.addCallback((cause) => {
      captured.push({
        group: cause.group,
        code: cause.code,
        label: cause.label,
        message: cause.message
      })
    })

    CmsError.setErrorCenter(errorCenter)

    expect(() => CmsError.report('cms-role', 'notFound', { roleId: 42 }))
      .toThrow('Requested CMS role was not found.')

    const unexpected = new Error('Timeout')
    let caughtTransactionError: unknown
    try {
      CmsError.handleTransaction('cms-db', 'txError', unexpected, 'Transaction failed.')
    } catch (error) {
      caughtTransactionError = error
    }

    expect(caughtTransactionError).toBeInstanceOf(ErrorCenterError)
    if (caughtTransactionError instanceof ErrorCenterError) {
      expect(caughtTransactionError.message).toBe('Transaction failed.')
      expect(caughtTransactionError.cause).toBe(unexpected)
    }

    expect(captured).toEqual([
      {
        group: 'cms-role',
        code: 'notFound',
        label: 'Role Not Found',
        message: 'Requested CMS role was not found.'
      },
      {
        group: 'cms-db',
        code: 'txError',
        label: undefined,
        message: 'Transaction failed.'
      }
    ])
  })
})
