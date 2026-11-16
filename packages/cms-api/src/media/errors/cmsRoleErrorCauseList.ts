import type { ErrorCenterCauseList } from '@dxtmisha/functional-basic'

/**
 * Error cause definitions for CMS role operations.
 *
 * Список описаний причин ошибок для операций с ролями CMS.
 */
export const cmsRoleErrorCauseList: ErrorCenterCauseList = [
  // Add role permissions error / Ошибка добавления прав доступа роли
  {
    group: 'cms-role',
    code: 'addPermissions',
    label: 'Add Role Permissions Error',
    message: 'Failed to add CMS role permissions.'
  },
  // Role create error / Ошибка создания роли
  {
    group: 'cms-role',
    code: 'create',
    label: 'Role Create Error',
    message: 'Failed to create CMS role.'
  },
  // Role delete error / Ошибка удаления роли
  {
    group: 'cms-role',
    code: 'delete',
    label: 'Role Delete Error',
    message: 'Failed to delete CMS role.'
  },
  // Invalid role code / Некорректный код роли
  {
    group: 'cms-role',
    code: 'invalidCode',
    label: 'Invalid Role Code',
    message: 'Valid role code is required.'
  },
  // Invalid role name / Некорректное название роли
  {
    group: 'cms-role',
    code: 'invalidName',
    label: 'Invalid Role Name',
    message: 'Role name is required.'
  },
  // Role not found / Роль не найдена
  {
    group: 'cms-role',
    code: 'notFound',
    label: 'Role Not Found',
    message: 'Requested CMS role was not found.'
  },
  // Remove role permissions error / Ошибка удаления прав доступа роли
  {
    group: 'cms-role',
    code: 'removePermissions',
    label: 'Remove Role Permissions Error',
    message: 'Failed to remove CMS role permissions.'
  },
  // Set role permissions error / Ошибка назначения прав доступа роли
  {
    group: 'cms-role',
    code: 'setPermissions',
    label: 'Set Role Permissions Error',
    message: 'Failed to set CMS role permissions.'
  },
  // Role update error / Ошибка обновления роли
  {
    group: 'cms-role',
    code: 'update',
    label: 'Role Update Error',
    message: 'Failed to update CMS role.'
  }
]
