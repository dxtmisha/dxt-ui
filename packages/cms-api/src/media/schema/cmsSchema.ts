import { permissions } from './permissions'
import { rolePermissions } from './rolePermissions'
import { roles } from './roles'
import { userRoles } from './userRoles'
import { users } from './users'

export {
  permissions,
  rolePermissions,
  roles,
  userRoles,
  users
}

/**
 * Combined CMS database schema /
 * Объединённая схема базы данных CMS
 */
export const cmsSchema = {
  permissions,
  roles,
  rolePermissions,
  users,
  userRoles
}
