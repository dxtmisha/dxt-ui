import type { ErrorCenterCauseList } from '@dxtmisha/functional-basic'

/**
 * Error cause definitions for CMS permission operations.
 *
 * Список описаний причин ошибок для операций с правами доступа CMS.
 */
export const cmsPermissionErrorCauseList: ErrorCenterCauseList = [
  // Permission create error / Ошибка создания права доступа
  {
    group: 'cms-permission',
    code: 'create',
    label: 'Permission Create Error',
    message: 'Failed to create CMS permission.'
  },
  // Permission delete error / Ошибка удаления права доступа
  {
    group: 'cms-permission',
    code: 'delete',
    label: 'Permission Delete Error',
    message: 'Failed to delete CMS permission.'
  },
  // Permission not found / Право доступа не найдено
  {
    group: 'cms-permission',
    code: 'notFound',
    label: 'Permission Not Found',
    message: 'Requested CMS permissions were not found.'
  },
  // Permission update error / Ошибка обновления права доступа
  {
    group: 'cms-permission',
    code: 'update',
    label: 'Permission Update Error',
    message: 'Failed to update CMS permission.'
  }
]
