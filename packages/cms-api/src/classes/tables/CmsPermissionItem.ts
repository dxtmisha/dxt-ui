import {
  asc,
  eq,
  inArray
} from 'drizzle-orm'

import { toCmsIds } from '../../functions/toCmsIds'
import { CMS_PERMISSION_ERROR_GROUP } from '../../media/errors/cmsPermissionErrorCauseList'
import { permissions } from '../../media/schema/permissions'
import { rolePermissions } from '../../media/schema/rolePermissions'
import { CmsDbCodeCreatedOriginItemAbstract } from '../abstract/CmsDbCodeCreatedOriginItemAbstract'
import { CmsVerification } from '../CmsVerification'
import type { CmsDbInstance } from '../CmsDbInstance'
import type { CmsDbExecutor, CmsPermission } from '../../types/cmsDbTypes'
import type { CmsPermissionUpdateInput } from '../../types/cmsPermissionTypes'

/**
 * Represents a single CMS permission entity and provides instance-level methods for reading and editing.
 *
 * Представляет конкретное право доступа CMS и предоставляет методы для чтения и редактирования полей.
 */
export class CmsPermissionItem extends CmsDbCodeCreatedOriginItemAbstract<
  typeof permissions,
  CmsPermission,
  CmsPermissionUpdateInput
> {
  /** Table schema bound to permission records / Схема таблицы прав доступа */
  static readonly table = permissions

  /** ErrorCenter group name for permission errors / Имя группы ошибок ErrorCenter для прав доступа */
  static readonly errorGroup = CMS_PERMISSION_ERROR_GROUP

  /** ErrorCenter group name for permission errors / Имя группы ошибок ErrorCenter для прав доступа */
  protected readonly errorGroup = CmsPermissionItem.errorGroup

  /**
   * Initializes a permission entity wrapper with permission data and database instance manager.
   *
   * Инициализирует обёртку конкретного права доступа с его данными и менеджером БД.
   * @param data Permission record from database / Запись права доступа из базы данных
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  constructor(
    data: CmsPermission,
    databaseInstance?: CmsDbInstance
  ) {
    super(CmsPermissionItem.table, data, databaseInstance)
  }

  /**
   * Queries all permissions assigned to a specific role ordered by permission ID.
   *
   * Запрашивает все права доступа, назначенные конкретной роли, с сортировкой по ID права.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param roleId Role identifier / Идентификатор роли
   * @returns List of assigned permissions / Список назначенных прав доступа
   */
  static async fetchByRoleId(
    executor: CmsDbExecutor,
    roleId: number
  ): Promise<CmsPermission[]> {
    if (!CmsVerification.isPositiveInteger(roleId, false)) {
      return []
    }

    const rows = await executor
      .select({ permission: permissions })
      .from(rolePermissions)
      .innerJoin(permissions, eq(rolePermissions.permissionId, permissions.id))
      .where(eq(rolePermissions.roleId, roleId))
      .orderBy(asc(permissions.id))

    return rows.map(row => row.permission)
  }

  /**
   * Queries assigned permissions for multiple role identifiers in a single batch query.
   *
   * Загружает назначенные права доступа для списка идентификаторов ролей одним пакетным запросом.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param roleIds List of role identifiers / Список идентификаторов ролей
   * @returns Map of role ID to assigned permissions / Карта соответствия ID роли и списка её прав доступа
   */
  static async fetchByRoleIds(
    executor: CmsDbExecutor,
    roleIds: readonly number[]
  ): Promise<Map<number, CmsPermission[]>> {
    const permissionsByRoleId = new Map<number, CmsPermission[]>()
    const uniqueRoleIds = toCmsIds(roleIds)

    if (uniqueRoleIds.length === 0) {
      return permissionsByRoleId
    }

    const relationRows = await executor
      .select({
        roleId: rolePermissions.roleId,
        permission: permissions
      })
      .from(rolePermissions)
      .innerJoin(permissions, eq(rolePermissions.permissionId, permissions.id))
      .where(inArray(rolePermissions.roleId, uniqueRoleIds))
      .orderBy(asc(permissions.id))

    for (const relationRow of relationRows) {
      const existingList = permissionsByRoleId.get(relationRow.roleId)
      if (existingList) {
        existingList.push(relationRow.permission)
      } else {
        permissionsByRoleId.set(relationRow.roleId, [relationRow.permission])
      }
    }

    return permissionsByRoleId
  }
}
