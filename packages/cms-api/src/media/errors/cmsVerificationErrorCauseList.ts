import type { ErrorCenterCauseList } from '@dxtmisha/functional-basic'

/** Error group name for CMS verification checks / Имя группы ошибок для проверок валидации CMS */
export const CMS_VERIFICATION_ERROR_GROUP = 'cms-verification'

/**
 * Error cause definitions for CMS verification checks.
 *
 * Список описаний причин ошибок для проверок валидации CMS.
 */
export const cmsVerificationErrorCauseList: ErrorCenterCauseList = [
  // General verification failure / Общая ошибка проверки валидации
  {
    group: CMS_VERIFICATION_ERROR_GROUP,
    code: 'invalid',
    label: 'Verification Error',
    message: 'Verification check failed.'
  },
  // Invalid entity code / Некорректный код сущности
  {
    group: CMS_VERIFICATION_ERROR_GROUP,
    code: 'invalidCode',
    label: 'Invalid Code',
    message: 'Valid code is required.'
  },
  // Invalid record identifier / Некорректный идентификатор записи
  {
    group: CMS_VERIFICATION_ERROR_GROUP,
    code: 'invalidId',
    label: 'Invalid Record ID',
    message: 'Valid positive integer record ID is required.'
  },
  // Invalid entity name / Некорректное название сущности
  {
    group: CMS_VERIFICATION_ERROR_GROUP,
    code: 'invalidName',
    label: 'Invalid Name',
    message: 'Valid name is required.'
  }
]
