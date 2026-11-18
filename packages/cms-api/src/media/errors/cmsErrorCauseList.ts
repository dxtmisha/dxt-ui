import type { ErrorCenterCauseList } from '@dxtmisha/functional-basic'
import { cmsDbErrorCauseList } from './cmsDbErrorCauseList'
import { cmsPermissionErrorCauseList } from './cmsPermissionErrorCauseList'
import { cmsRoleErrorCauseList } from './cmsRoleErrorCauseList'
import { cmsUserErrorCauseList } from './cmsUserErrorCauseList'
import { cmsVerificationErrorCauseList } from './cmsVerificationErrorCauseList'

/**
 * Master list of default error cause definitions for CMS API operations.
 *
 * Главный список стандартных описаний причин ошибок для операций CMS API.
 */
export const cmsErrorCauseList: ErrorCenterCauseList = [
  ...cmsDbErrorCauseList,
  ...cmsPermissionErrorCauseList,
  ...cmsRoleErrorCauseList,
  ...cmsUserErrorCauseList,
  ...cmsVerificationErrorCauseList
]
