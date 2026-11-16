import type { ErrorCenterCauseList } from '@dxtmisha/functional-basic'

/**
 * Error cause definitions for CMS user operations.
 *
 * Список описаний причин ошибок для операций с пользователями CMS.
 */
export const cmsUserErrorCauseList: ErrorCenterCauseList = [
  // Add user roles error / Ошибка добавления ролей пользователю
  {
    group: 'cms-user',
    code: 'addRoles',
    label: 'Add User Roles Error',
    message: 'Failed to add CMS user roles.'
  },
  // User create error / Ошибка создания пользователя
  {
    group: 'cms-user',
    code: 'create',
    label: 'User Create Error',
    message: 'Failed to create CMS user.'
  },
  // User delete error / Ошибка удаления пользователя
  {
    group: 'cms-user',
    code: 'delete',
    label: 'User Delete Error',
    message: 'Failed to delete CMS user.'
  },
  // Invalid user email / Некорректный email пользователя
  {
    group: 'cms-user',
    code: 'invalidEmail',
    label: 'Invalid User Email',
    message: 'Valid user email is required.'
  },
  // Invalid user first name / Некорректное имя пользователя
  {
    group: 'cms-user',
    code: 'invalidFirstName',
    label: 'Invalid User First Name',
    message: 'User firstName is required.'
  },
  // Invalid user phone / Некорректный телефон пользователя
  {
    group: 'cms-user',
    code: 'invalidPhone',
    label: 'Invalid User Phone',
    message: 'Phone must be a positive integer in E.164 digits format.'
  },
  // User not found / Пользователь не найден
  {
    group: 'cms-user',
    code: 'notFound',
    label: 'User Not Found',
    message: 'Requested CMS user was not found.'
  },
  // Remove user roles error / Ошибка удаления ролей пользователя
  {
    group: 'cms-user',
    code: 'removeRoles',
    label: 'Remove User Roles Error',
    message: 'Failed to remove CMS user roles.'
  },
  // User restore error / Ошибка восстановления пользователя
  {
    group: 'cms-user',
    code: 'restore',
    label: 'User Restore Error',
    message: 'Failed to restore CMS user.'
  },
  // Set user roles error / Ошибка назначения ролей пользователю
  {
    group: 'cms-user',
    code: 'setRoles',
    label: 'Set User Roles Error',
    message: 'Failed to set CMS user roles.'
  },
  // User update error / Ошибка обновления пользователя
  {
    group: 'cms-user',
    code: 'update',
    label: 'User Update Error',
    message: 'Failed to update CMS user.'
  }
]
