import { afterEach, describe, expect, it } from 'vitest'
import { ErrorCenter, ErrorCenterError } from '@dxtmisha/functional-basic'
import { CmsError } from '../CmsError'
import { CmsErrorInstance } from '../CmsErrorInstance'

describe('CmsError', () => {
  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
  })

  it('returns a singleton CmsErrorInstance from getItem', () => {
    const firstItem = CmsError.getItem()
    expect(firstItem).toBeInstanceOf(CmsErrorInstance)
    expect(CmsError.getItem()).toBe(firstItem)
  })

  it('delegates static report and handleTransaction to the active CmsErrorInstance', () => {
    ErrorCenter.setIsConsole(false)

    const captured: Array<{ group?: string, code: string, label?: string, message?: string }> = []
    ErrorCenter.addCallback((cause) => {
      captured.push({
        group: cause.group,
        code: cause.code,
        label: cause.label,
        message: cause.message
      })
    })

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
