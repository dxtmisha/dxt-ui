import type { ErrorCenterCauseList } from '@dxtmisha/functional-basic'

/**
 * Error cause definitions for CMS database connection operations.
 *
 * Список описаний причин ошибок для операций подключения к БД CMS.
 */
export const cmsDbErrorCauseList: ErrorCenterCauseList = [
  // Database connection string missing / Отсутствует строка подключения к базе данных
  {
    group: 'cms-db',
    code: 'connection',
    label: 'Database Connection Error',
    message: 'Database connection string is required.'
  }
]
