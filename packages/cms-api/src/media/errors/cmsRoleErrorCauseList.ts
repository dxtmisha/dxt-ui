import type { ErrorCenterCauseList } from '@dxtmisha/functional-basic'

/** Error group name for CMS role operations / Имя группы ошибок для операций с ролями CMS */
export const CMS_ROLE_ERROR_GROUP = 'cms-role'

/**
 * Error cause definitions for CMS role operations.
 *
 * Список описаний причин ошибок для операций с ролями CMS.
 */
export const cmsRoleErrorCauseList: ErrorCenterCauseList = [
  // Add role permissions error / Ошибка добавления прав доступа роли
  {
    group: CMS_ROLE_ERROR_GROUP,
    code: 'addPermissions',
    label: 'Add Role Permissions Error',
    message: 'Failed to add CMS role permissions.'
  },
  // Role create error / Ошибка создания роли
  {
    group: CMS_ROLE_ERROR_GROUP,
    code: 'create',
    label: 'Role Create Error',
    message: 'Failed to create CMS role.'
  },
  // Role delete error / Ошибка удаления роли
  {
    group: CMS_ROLE_ERROR_GROUP,
    code: 'delete',
    label: 'Role Delete Error',
    message: 'Failed to delete CMS role.'
  },
  // Role not found / Роль не найдена
  {
    group: CMS_ROLE_ERROR_GROUP,
    code: 'notFound',
    label: 'Role Not Found',
    message: 'Requested CMS role was not found.'
  },
  // Remove role permissions error / Ошибка удаления прав доступа роли
  {
    group: CMS_ROLE_ERROR_GROUP,
    code: 'removePermissions',
    label: 'Remove Role Permissions Error',
    message: 'Failed to remove CMS role permissions.'
  },
  // Set role permissions error / Ошибка назначения прав доступа роли
  {
    group: CMS_ROLE_ERROR_GROUP,
    code: 'setPermissions',
    label: 'Set Role Permissions Error',
    message: 'Failed to set CMS role permissions.'
  },
  // Role update error / Ошибка обновления роли
  {
    group: CMS_ROLE_ERROR_GROUP,
    code: 'update',
    label: 'Role Update Error',
    message: 'Failed to update CMS role.'
  }
]
