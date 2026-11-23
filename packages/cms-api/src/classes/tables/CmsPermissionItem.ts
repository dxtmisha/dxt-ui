import {
  asc,
  eq,
  inArray
} from 'drizzle-orm'
import {
  isPositiveInteger,
  normalizeCmsOptionalText,
  uniqueArray
} from '@dxtmisha/functional-basic'

import { CMS_PERMISSION_ERROR_GROUP } from '../../media/errors/cmsPermissionErrorCauseList'
import { permissions } from '../../media/schema/permissions'
import { rolePermissions } from '../../media/schema/rolePermissions'
import { CmsDbCodeItemAbstract } from '../abstract/CmsDbCodeItemAbstract'
import { CmsVerification } from '../CmsVerification'
import type { CmsDbInstance } from '../CmsDbInstance'
import type {
  CmsDbExecutor,
  CmsNewPermission,
  CmsPermission
} from '../../types/cmsDbTypes'
import type {
  CmsPermissionCreateInput,
  CmsPermissionUpdateInput
} from '../../types/cmsPermissionTypes'

/**
 * Represents a single CMS permission entity and provides instance-level methods for reading and editing.
 *
 * Представляет конкретное право доступа CMS и предоставляет методы для чтения и редактирования полей.
 */
export class CmsPermissionItem extends CmsDbCodeItemAbstract<typeof permissions, CmsPermission> {
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
   * Returns the creation origin code or null.
   *
   * Возвращает код источника создания записи или null.
   * @returns Creation origin code or null / Код источника создания или null
   */
  getCreatedOrigin(): string | null {
    return this.data.createdOrigin
  }

  /**
   * Updates this permission's fields in the database.
   *
   * Обновляет поля этого права доступа в базе данных.
   * @param input Partial permission update payload / Частичные данные для обновления права доступа
   * @returns Current permission item / Текущий экземпляр права доступа
   */
  async update(input: CmsPermissionUpdateInput): Promise<this> {
    CmsVerification.isPositiveInteger(this.data.id)

    return this.updateRecord(CmsPermissionItem.buildUpdateValues(input))
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
    const uniqueRoleIds = uniqueArray(roleIds).filter(roleId => isPositiveInteger(roleId))

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

  /**
   * Builds and validates database insert payload from create input.
   *
   * Формирует и валидирует объект вставки в базу данных из входных данных создания права доступа.
   * @param input Permission creation payload / Входные данные для создания права доступа
   * @returns Validated Drizzle insert payload / Валидированные данные для вставки
   */
  static override buildCreateValues(
    input: CmsPermissionCreateInput
  ): CmsNewPermission {
    return {
      ...super.buildCreateValues(input),
      createdOrigin: normalizeCmsOptionalText(input.createdOrigin)
    }
  }

  /**
   * Builds and validates database update payload from partial update input.
   *
   * Формирует и валидирует объект обновления в базе данных из входных данных редактирования права доступа.
   * @param input Partial permission update payload / Частичные данные для обновления права доступа
   * @returns Validated partial Drizzle update payload / Валидированные поля для обновления
   */
  static override buildUpdateValues(
    input: CmsPermissionUpdateInput
  ): Partial<CmsNewPermission> {
    const values: Partial<CmsNewPermission> = super.buildUpdateValues(input)

    if (input.createdOrigin !== undefined) {
      values.createdOrigin = normalizeCmsOptionalText(input.createdOrigin)
    }

    return values
  }
}
