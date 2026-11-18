import type { ErrorCenterCauseList } from '@dxtmisha/functional-basic'

/**
 * Error cause definitions for CMS verification checks.
 *
 * Список описаний причин ошибок для проверок валидации CMS.
 */
export const cmsVerificationErrorCauseList: ErrorCenterCauseList = [
  // Invalid record identifier / Некорректный идентификатор записи
  {
    group: 'cms-verification',
    code: 'invalidId',
    label: 'Invalid Record ID',
    message: 'Valid positive integer record ID is required.'
  }
]
