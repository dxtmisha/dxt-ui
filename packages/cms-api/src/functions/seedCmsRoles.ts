import { inArray } from 'drizzle-orm'
import { CMS_DEFAULT_ROLES } from '../media/defaults/cmsDefaultRoles'
import { permissions } from '../media/schema/permissions'
import { rolePermissions } from '../media/schema/rolePermissions'
import { roles } from '../media/schema/roles'
import type {
  CmsDb,
  CmsNewRole,
  CmsNewRolePermission,
  CmsRole,
  CmsRoleSeed
} from '../types/cmsDbTypes'

/**
 * Links seeded roles with existing database permissions idempotently.
 *
 * Идемпотентно связывает инициализированные роли с существующими правами доступа в базе данных.
 * @param database Typed Drizzle database instance / Типизированный экземпляр базы данных Drizzle
 * @param items List of role seed definitions / Список описаний ролей для инициализации
 * @param persistedRoles Saved role records / Сохранённые записи ролей
 */
async function syncRolePermissions(
  database: CmsDb,
  items: readonly CmsRoleSeed[],
  persistedRoles: readonly CmsRole[]
): Promise<void> {
  const permissionCodes = Array.from(
    new Set(items.flatMap(item => item.permissions))
  )

  if (permissionCodes.length === 0) {
    return
  }

  const persistedPermissions = await database
    .select()
    .from(permissions)
    .where(inArray(permissions.code, permissionCodes))

  const roleIdByCode = new Map(persistedRoles.map(role => [role.code, role.id]))
  const permissionIdByCode = new Map(
    persistedPermissions.map(permission => [permission.code, permission.id])
  )

  const links: CmsNewRolePermission[] = []

  for (const item of items) {
    const roleId = roleIdByCode.get(item.code)
    if (roleId === undefined) {
      continue
    }

    for (const permissionCode of item.permissions) {
      const permissionId = permissionIdByCode.get(permissionCode)
      if (permissionId !== undefined) {
        links.push({ roleId, permissionId })
      }
    }
  }

  if (links.length === 0) {
    return
  }

  await database
    .insert(rolePermissions)
    .values(links)
    .onConflictDoNothing({
      target: [rolePermissions.roleId, rolePermissions.permissionId]
    })
}

/**
 * Seeds default or custom roles and their permission links idempotently into the database.
 *
 * Идемпотентно добавляет стандартные или пользовательские роли и их связи с правами доступа в базу данных.
 * @param database Typed Drizzle database instance / Типизированный экземпляр базы данных Drizzle
 * @param items List of roles with permission codes to seed / Список ролей с кодами прав доступа для инициализации
 * @returns List of persisted role records / Список сохранённых записей ролей
 */
export async function seedCmsRoles(
  database: CmsDb,
  items: readonly CmsRoleSeed[] = CMS_DEFAULT_ROLES
): Promise<CmsRole[]> {
  if (items.length === 0) {
    return []
  }

  const rolePayloads: CmsNewRole[] = items.map(item => ({
    code: item.code,
    name: item.name,
    description: item.description,
    createdOrigin: item.createdOrigin
  }))

  await database
    .insert(roles)
    .values(rolePayloads)
    .onConflictDoNothing({ target: roles.code })

  const roleCodes = items.map(item => item.code)
  const persistedRoles = await database
    .select()
    .from(roles)
    .where(inArray(roles.code, roleCodes))

  await syncRolePermissions(database, items, persistedRoles)

  return persistedRoles
}
