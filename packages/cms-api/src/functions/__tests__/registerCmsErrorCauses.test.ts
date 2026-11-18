import { afterEach, describe, expect, it } from 'vitest'
import { ErrorCenter, ErrorCenterInstance } from '@dxtmisha/functional-basic'
import { registerCmsErrorCauses } from '../registerCmsErrorCauses'

describe('registerCmsErrorCauses', () => {
  afterEach(() => {
    ErrorCenter.reset()
  })

  it('registers default CMS causes into the provided ErrorCenterInstance without overwriting existing entries', () => {
    const errorCenter = new ErrorCenterInstance()
    errorCenter.add({
      group: 'cms-user',
      code: 'notFound',
      label: 'Custom Label',
      message: 'Custom Message'
    })

    registerCmsErrorCauses(errorCenter)

    expect(errorCenter.get('notFound', 'cms-user')).toEqual({
      group: 'cms-user',
      code: 'notFound',
      label: 'Custom Label',
      message: 'Custom Message'
    })
    expect(errorCenter.has('notFound', 'cms-role')).toBe(true)
  })

  it('defaults to global ErrorCenter and supports custom causes list', () => {
    registerCmsErrorCauses(undefined, [
      {
        group: 'cms-custom',
        code: 'customCode',
        message: 'Custom error.'
      }
    ])

    expect(ErrorCenter.get('customCode', 'cms-custom')).toEqual({
      group: 'cms-custom',
      code: 'customCode',
      message: 'Custom error.'
    })
  })
})
