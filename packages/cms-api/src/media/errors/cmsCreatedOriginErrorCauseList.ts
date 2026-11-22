import type { ErrorCenterCauseList } from '@dxtmisha/functional-basic'

/** Error group name for CMS created origin operations / Имя группы ошибок для операций с источниками создания записей CMS */
export const CMS_CREATED_ORIGIN_ERROR_GROUP = 'cms-created-origin'

/**
 * Error cause definitions for CMS created origin operations.
 *
 * Список описаний причин ошибок для операций с источниками создания записей CMS.
 */
export const cmsCreatedOriginErrorCauseList: ErrorCenterCauseList = [
  // Created origin create error / Ошибка создания источника создания записей
  {
    group: CMS_CREATED_ORIGIN_ERROR_GROUP,
    code: 'create',
    label: 'Created Origin Create Error',
    message: 'Failed to create CMS created origin.'
  },
  // Created origin delete error / Ошибка удаления источника создания записей
  {
    group: CMS_CREATED_ORIGIN_ERROR_GROUP,
    code: 'delete',
    label: 'Created Origin Delete Error',
    message: 'Failed to delete CMS created origin.'
  },
  // Created origin not found / Источник создания записей не найден
  {
    group: CMS_CREATED_ORIGIN_ERROR_GROUP,
    code: 'notFound',
    label: 'Created Origin Not Found',
    message: 'Requested CMS created origin was not found.'
  },
  // Created origin update error / Ошибка обновления источника создания записей
  {
    group: CMS_CREATED_ORIGIN_ERROR_GROUP,
    code: 'update',
    label: 'Created Origin Update Error',
    message: 'Failed to update CMS created origin.'
  }
]
