import {
  asc,
  eq,
  inArray,
  type SQL
} from 'drizzle-orm'
import {
  isPositiveInteger,
  uniqueArray
} from '@dxtmisha/functional-basic'

import { findOneCmsRecord } from '../functions/findOneCmsRecord'
import { normalizeCmsOptionalText } from '../functions/normalizeCmsOptionalText'
import { permissions } from '../media/schema/permissions'
import { rolePermissions } from '../media/schema/rolePermissions'
import { CmsDbItemAbstract } from './CmsDbItemAbstract'
import { CmsDbResolver } from './CmsDbResolver'
import { CmsVerification } from './CmsVerification'
import type { CmsDbInstance } from './CmsDbInstance'
import type {
  CmsDbExecutor,
  CmsNewPermission,
  CmsPermission
} from '../types/cmsDbTypes'
import type {
  CmsPermissionCreateInput,
  CmsPermissionUpdateInput
} from '../types/cmsPermissionTypes'

/**
 * Represents a single CMS permission entity and provides instance-level methods for reading and editing.
 *
 * Представляет конкретное право доступа CMS и предоставляет методы для чтения и редактирования полей.
 */
export class CmsPermissionItem extends CmsDbItemAbstract<typeof permissions, CmsPermission> {
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
    super(permissions, data, 'cms-permission', databaseInstance)
  }

  /**
   * Returns the unique permission code.
   *
   * Возвращает уникальный код права доступа.
   * @returns Permission code / Код права доступа
   */
  getCode(): string {
    return this.data.code
  }

  /**
   * Returns the display name or translation key of the permission.
   *
   * Возвращает отображаемое название или ключ перевода права доступа.
   * @returns Permission name / Название права доступа
   */
  getName(): string {
    return this.data.name
  }

  /**
   * Returns the permission description or null.
   *
   * Возвращает описание права доступа или null.
   * @returns Permission description or null / Описание права доступа или null
   */
  getDescription(): string | null {
    return this.data.description
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
   * @returns Updated permission item or undefined if not found / Обновлённый экземпляр права доступа или undefined, если не найден
   */
  async update(input: CmsPermissionUpdateInput): Promise<this | undefined> {
    if (!isPositiveInteger(this.data.id)) {
      return undefined
    }

    return this.updateRecord(CmsPermissionItem.buildUpdateValues(input))
  }

  /**
   * Finds a single permission record matching a SQL predicate.
   *
   * Находит одну запись права доступа по SQL-предикату.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param whereCondition SQL predicate / SQL-условие поиска
   * @returns Permission record or undefined / Запись права доступа или undefined
   */
  static async findOne(
    executor: CmsDbExecutor,
    whereCondition: SQL | undefined
  ): Promise<CmsPermission | undefined> {
    return findOneCmsRecord<CmsPermission>(
      executor,
      permissions,
      whereCondition
    )
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
    if (!isPositiveInteger(roleId)) {
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
   * Validates and verifies permission identifiers by their IDs.
   *
   * Проверяет и подтверждает идентификаторы прав доступа по их ID.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param permissionIds Optional list of permission IDs / Необязательный список ID прав доступа
   * @returns Deduplicated list of verified permission IDs / Уникальный список проверенных ID прав доступа
   */
  static async resolveIdsByIds(
    executor: CmsDbExecutor,
    permissionIds?: readonly number[]
  ): Promise<number[]> {
    return CmsDbResolver.resolveByIds(
      'cms-permission',
      'notFound',
      uniqueIds => executor
        .select({ id: permissions.id })
        .from(permissions)
        .where(inArray(permissions.id, uniqueIds)),
      permissionIds
    )
  }

  /**
   * Resolves and verifies permission identifiers by their unique codes.
   *
   * Разрешает и проверяет идентификаторы прав доступа по их уникальным кодам.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param permissionCodes Optional list of permission codes / Необязательный список кодов прав доступа
   * @returns Deduplicated list of resolved permission IDs / Уникальный список найденных ID прав доступа
   */
  static async resolveIdsByCodes(
    executor: CmsDbExecutor,
    permissionCodes?: readonly string[]
  ): Promise<number[]> {
    return CmsDbResolver.resolveByCodes(
      'cms-permission',
      'notFound',
      uniqueCodes => executor
        .select({ id: permissions.id, code: permissions.code })
        .from(permissions)
        .where(inArray(permissions.code, uniqueCodes)),
      permissionCodes
    )
  }

  /**
   * Resolves and validates permission identifiers from permission IDs and/or permission codes.
   *
   * Разрешает и валидирует идентификаторы прав доступа из переданных ID и/или кодов прав.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param permissionIds Optional list of permission IDs / Необязательный список ID прав доступа
   * @param permissionCodes Optional list of permission codes / Необязательный список кодов прав доступа
   * @returns Deduplicated list of verified permission IDs / Уникальный список проверенных ID прав доступа
   */
  static async resolveIds(
    executor: CmsDbExecutor,
    permissionIds?: readonly number[],
    permissionCodes?: readonly string[]
  ): Promise<number[]> {
    const resolvedIds: number[] = []

    if (permissionIds !== undefined) {
      resolvedIds.push(
        ...await CmsPermissionItem.resolveIdsByIds(executor, permissionIds)
      )
    }

    if (permissionCodes !== undefined) {
      resolvedIds.push(
        ...await CmsPermissionItem.resolveIdsByCodes(executor, permissionCodes)
      )
    }

    return uniqueArray(resolvedIds)
  }

  /**
   * Builds and validates database insert payload from create input.
   *
   * Формирует и валидирует объект вставки в базу данных из входных данных создания права доступа.
   * @param input Permission creation payload / Входные данные для создания права доступа
   * @returns Validated Drizzle insert payload / Валидированные данные для вставки
   */
  static buildCreateValues(
    input: CmsPermissionCreateInput
  ): CmsNewPermission {
    return {
      code: CmsPermissionItem.normalizeCode(input.code),
      name: CmsPermissionItem.normalizeName(input.name),
      description: normalizeCmsOptionalText(input.description),
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
  static buildUpdateValues(
    input: CmsPermissionUpdateInput
  ): Partial<CmsNewPermission> {
    const values: Partial<CmsNewPermission> = {}

    if (input.code !== undefined) {
      values.code = CmsPermissionItem.normalizeCode(input.code)
    }

    if (input.name !== undefined) {
      values.name = CmsPermissionItem.normalizeName(input.name)
    }

    if (input.description !== undefined) {
      values.description = normalizeCmsOptionalText(input.description)
    }

    if (input.createdOrigin !== undefined) {
      values.createdOrigin = normalizeCmsOptionalText(input.createdOrigin)
    }

    return values
  }

  /**
   * Normalizes and validates a permission code.
   *
   * Нормализует и проверяет код права доступа.
   * @param code Raw permission code / Исходный код права доступа
   * @returns Trimmed non-empty permission code / Очищенный код права доступа
   */
  static normalizeCode(
    code: string
  ): string {
    return CmsVerification.normalizeCode(code, 'cms-permission')
  }

  /**
   * Normalizes and validates a permission display name.
   *
   * Нормализует и проверяет название права доступа.
   * @param name Raw permission name / Исходное название права доступа
   * @returns Trimmed non-empty permission name / Очищенное название права доступа
   */
  static normalizeName(
    name: string
  ): string {
    return CmsVerification.normalizeName(name, 'cms-permission')
  }
}
