import type { ErrorCenterCauseList } from '@dxtmisha/functional-basic'

/**
 * Error cause definitions for CMS created origin operations.
 *
 * Список описаний причин ошибок для операций с источниками создания записей CMS.
 */
export const cmsCreatedOriginErrorCauseList: ErrorCenterCauseList = [
  // Created origin create error / Ошибка создания источника создания записей
  {
    group: 'cms-created-origin',
    code: 'create',
    label: 'Created Origin Create Error',
    message: 'Failed to create CMS created origin.'
  },
  // Created origin delete error / Ошибка удаления источника создания записей
  {
    group: 'cms-created-origin',
    code: 'delete',
    label: 'Created Origin Delete Error',
    message: 'Failed to delete CMS created origin.'
  },
  // Invalid created origin code / Некорректный код источника создания записей
  {
    group: 'cms-created-origin',
    code: 'invalidCode',
    label: 'Invalid Created Origin Code',
    message: 'Valid created origin code is required.'
  },
  // Invalid created origin name / Некорректное название источника создания записей
  {
    group: 'cms-created-origin',
    code: 'invalidName',
    label: 'Invalid Created Origin Name',
    message: 'Created origin name is required.'
  },
  // Created origin not found / Источник создания записей не найден
  {
    group: 'cms-created-origin',
    code: 'notFound',
    label: 'Created Origin Not Found',
    message: 'Requested CMS created origin was not found.'
  },
  // Created origin update error / Ошибка обновления источника создания записей
  {
    group: 'cms-created-origin',
    code: 'update',
    label: 'Created Origin Update Error',
    message: 'Failed to update CMS created origin.'
  }
]
