import type { ErrorCenterCauseList } from '@dxtmisha/functional-basic'

/** Error group name for CMS database connection operations / Имя группы ошибок для операций подключения к БД CMS */
export const CMS_DB_ERROR_GROUP = 'cms-db'

/**
 * Error cause definitions for CMS database connection operations.
 *
 * Список описаний причин ошибок для операций подключения к БД CMS.
 */
export const cmsDbErrorCauseList: ErrorCenterCauseList = [
  // Database connection string missing / Отсутствует строка подключения к базе данных
  {
    group: CMS_DB_ERROR_GROUP,
    code: 'connection',
    label: 'Database Connection Error',
    message: 'Database connection string is required.'
  }
]
