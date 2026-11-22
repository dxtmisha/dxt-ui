import type { ErrorCenterCauseList } from '@dxtmisha/functional-basic'

/** Error group name for CMS permission operations / Имя группы ошибок для операций с правами доступа CMS */
export const CMS_PERMISSION_ERROR_GROUP = 'cms-permission'

/**
 * Error cause definitions for CMS permission operations.
 *
 * Список описаний причин ошибок для операций с правами доступа CMS.
 */
export const cmsPermissionErrorCauseList: ErrorCenterCauseList = [
  // Permission create error / Ошибка создания права доступа
  {
    group: CMS_PERMISSION_ERROR_GROUP,
    code: 'create',
    label: 'Permission Create Error',
    message: 'Failed to create CMS permission.'
  },
  // Permission delete error / Ошибка удаления права доступа
  {
    group: CMS_PERMISSION_ERROR_GROUP,
    code: 'delete',
    label: 'Permission Delete Error',
    message: 'Failed to delete CMS permission.'
  },
  // Permission not found / Право доступа не найдено
  {
    group: CMS_PERMISSION_ERROR_GROUP,
    code: 'notFound',
    label: 'Permission Not Found',
    message: 'Requested CMS permissions were not found.'
  },
  // Permission update error / Ошибка обновления права доступа
  {
    group: CMS_PERMISSION_ERROR_GROUP,
    code: 'update',
    label: 'Permission Update Error',
    message: 'Failed to update CMS permission.'
  }
]
