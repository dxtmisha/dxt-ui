import { afterEach, describe, expect, it } from 'vitest'
import { ErrorCenter, ErrorCenterInstance } from '@dxtmisha/functional-basic'
import { CMS_ROLE_ERROR_GROUP } from '../../media/errors/cmsRoleErrorCauseList'
import { CMS_USER_ERROR_GROUP } from '../../media/errors/cmsUserErrorCauseList'
import { registerCmsErrorCauses } from '../registerCmsErrorCauses'

describe('registerCmsErrorCauses', () => {
  afterEach(() => {
    ErrorCenter.reset()
  })

  it('registers default CMS causes into the provided ErrorCenterInstance without overwriting existing entries', () => {
    const errorCenter = new ErrorCenterInstance()
    errorCenter.add({
      group: CMS_USER_ERROR_GROUP,
      code: 'notFound',
      label: 'Custom Label',
      message: 'Custom Message'
    })

    registerCmsErrorCauses(errorCenter)

    expect(errorCenter.get('notFound', CMS_USER_ERROR_GROUP)).toEqual({
      group: CMS_USER_ERROR_GROUP,
      code: 'notFound',
      label: 'Custom Label',
      message: 'Custom Message'
    })
    expect(errorCenter.has('notFound', CMS_ROLE_ERROR_GROUP)).toBe(true)
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
