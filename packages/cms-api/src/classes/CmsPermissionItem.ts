import {
  asc,
  eq,
  inArray,
  type SQL
} from 'drizzle-orm'
import {
  isString,
  uniqueArray,
  type ErrorCenterInstance
} from '@dxtmisha/functional-basic'

import { permissions } from '../media/schema/permissions'
import { rolePermissions } from '../media/schema/rolePermissions'
import { CmsDbAbstract } from './CmsDbAbstract'
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
 * Represents a single CMS permission entity and provides instance-level methods for reading, editing, reloading, and deletion.
 *
 * Представляет конкретное право доступа CMS и предоставляет методы для чтения полей, редактирования, перезагрузки и удаления.
 */
export class CmsPermissionItem extends CmsDbAbstract<typeof permissions> {
  /**
   * Initializes a permission entity wrapper with permission data, database instance manager, and error center.
   *
   * Инициализирует обёртку конкретного права доступа с его данными, менеджером БД и центром ошибок.
   * @param data Permission record from database / Запись права доступа из базы данных
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   */
  constructor(
    protected data: CmsPermission,
    databaseInstance?: CmsDbInstance,
    errorCenter?: ErrorCenterInstance
  ) {
    super(permissions, databaseInstance, errorCenter)
  }

  /**
   * Returns the permission identifier.
   *
   * Возвращает идентификатор права доступа.
   * @returns Permission identifier / Идентификатор права доступа
   */
  getId(): number {
    return this.data.id
  }

  /**
   * Returns a cloned snapshot of the permission record.
   *
   * Возвращает копию записи права доступа.
   * @returns Permission record / Запись права доступа
   */
  getData(): CmsPermission {
    return { ...this.data }
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
   * Returns the permission creation timestamp.
   *
   * Возвращает дату создания права доступа.
   * @returns Creation date / Дата создания
   */
  getCreatedAt(): Date {
    return this.data.createdAt
  }

  /**
   * Returns the permission last update timestamp.
   *
   * Возвращает дату последнего обновления права доступа.
   * @returns Last update date / Дата последнего обновления
   */
  getUpdatedAt(): Date {
    return this.data.updatedAt
  }

  /**
   * Updates this permission's fields in the database.
   *
   * Обновляет поля этого права доступа в базе данных.
   * @param input Partial permission update payload / Частичные данные для обновления права доступа
   * @returns Updated permission item or undefined if not found / Обновлённый экземпляр права доступа или undefined, если не найден
   */
  async update(input: CmsPermissionUpdateInput): Promise<this | undefined> {
    const permissionId = this.data.id
    if (!CmsPermissionItem.isValidId(permissionId)) {
      return undefined
    }

    const updateValues = CmsPermissionItem.buildUpdateValues(input, this.errorCenter)

    try {
      const updatedRecord = await this.getDatabase().transaction(async (transaction) => {
        if (!(await this.existsRecordById(permissionId, undefined, transaction))) {
          return undefined
        }

        const updatedRows = await transaction
          .update(permissions)
          .set({
            ...updateValues,
            updatedAt: new Date()
          })
          .where(eq(permissions.id, permissionId))
          .returning()

        return updatedRows[0]
      })

      if (!updatedRecord) {
        return undefined
      }

      this.data = updatedRecord
      return this
    } catch (error) {
      return this.handleTransactionError(
        'permissionUpdate',
        'Failed to update CMS permission.',
        error
      )
    }
  }

  /**
   * Permanently deletes this permission from the database (cascading role permission links).
   *
   * Безвозвратно удаляет это право доступа из базы данных (каскадно удаляя связи с ролями).
   * @returns True if deleted / True, если право доступа было удалено
   */
  async delete(): Promise<boolean> {
    const permissionId = this.data.id
    if (!CmsPermissionItem.isValidId(permissionId)) {
      return false
    }

    try {
      return await this.deleteRecordById(permissionId)
    } catch (error) {
      return this.handleTransactionError(
        'permissionDelete',
        'Failed to delete CMS permission.',
        error
      )
    }
  }

  /**
   * Reloads this permission's data from the database.
   *
   * Перезагружает данные этого права доступа из базы данных.
   * @returns Reloaded permission item or undefined if missing / Обновлённый экземпляр права доступа или undefined, если не найден
   */
  async reload(): Promise<this | undefined> {
    const permissionId = this.data.id
    if (!CmsPermissionItem.isValidId(permissionId)) {
      return undefined
    }

    const foundRecord = await CmsPermissionItem.findOne(
      this.getDatabase(),
      eq(permissions.id, permissionId)
    )

    if (!foundRecord) {
      return undefined
    }

    this.data = foundRecord
    return this
  }

  /**
   * Returns a plain JSON-serializable snapshot of the permission record.
   *
   * Возвращает обычный объект данных права доступа для сериализации в JSON.
   * @returns Permission record / Запись права доступа
   */
  toJSON(): CmsPermission {
    return this.getData()
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
    if (!whereCondition) {
      return undefined
    }

    const foundRows = await executor
      .select()
      .from(permissions)
      .where(whereCondition)
      .limit(1)

    return foundRows[0]
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
    if (!CmsPermissionItem.isValidId(roleId)) {
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
    const uniqueRoleIds = uniqueArray(roleIds).filter(roleId => CmsPermissionItem.isValidId(roleId))

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
   * Resolves and validates permission identifiers from permission IDs and/or permission codes.
   *
   * Разрешает и валидирует идентификаторы прав доступа из переданных ID и/или кодов прав.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @param permissionIds Optional list of permission IDs / Необязательный список ID прав доступа
   * @param permissionCodes Optional list of permission codes / Необязательный список кодов прав доступа
   * @returns Deduplicated list of verified permission IDs / Уникальный список проверенных ID прав доступа
   */
  static async resolveIds(
    executor: CmsDbExecutor,
    errorCenter: ErrorCenterInstance,
    permissionIds?: readonly number[],
    permissionCodes?: readonly string[]
  ): Promise<number[]> {
    return CmsDbAbstract.resolveEntityIds(
      errorCenter,
      'permissionNotFound',
      'CMS permission',
      uniqueIds => executor
        .select({ id: permissions.id })
        .from(permissions)
        .where(inArray(permissions.id, uniqueIds)),
      uniqueCodes => executor
        .select({ id: permissions.id, code: permissions.code })
        .from(permissions)
        .where(inArray(permissions.code, uniqueCodes)),
      permissionIds,
      permissionCodes
    )
  }

  /**
   * Builds and validates database insert payload from create input.
   *
   * Формирует и валидирует объект вставки в базу данных из входных данных создания права доступа.
   * @param input Permission creation payload / Входные данные для создания права доступа
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @returns Validated Drizzle insert payload / Валидированные данные для вставки
   */
  static buildCreateValues(
    input: CmsPermissionCreateInput,
    errorCenter: ErrorCenterInstance
  ): CmsNewPermission {
    return {
      code: CmsPermissionItem.normalizeCode(input.code, errorCenter),
      name: CmsPermissionItem.normalizeName(input.name, errorCenter),
      description: CmsPermissionItem.normalizeOptionalText(input.description)
    }
  }

  /**
   * Builds and validates database update payload from partial update input.
   *
   * Формирует и валидирует объект обновления в базе данных из входных данных редактирования права доступа.
   * @param input Partial permission update payload / Частичные данные для обновления права доступа
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @returns Validated partial Drizzle update payload / Валидированные поля для обновления
   */
  static buildUpdateValues(
    input: CmsPermissionUpdateInput,
    errorCenter: ErrorCenterInstance
  ): Partial<CmsNewPermission> {
    const values: Partial<CmsNewPermission> = {}

    if (input.code !== undefined) {
      values.code = CmsPermissionItem.normalizeCode(input.code, errorCenter)
    }

    if (input.name !== undefined) {
      values.name = CmsPermissionItem.normalizeName(input.name, errorCenter)
    }

    if (input.description !== undefined) {
      values.description = CmsPermissionItem.normalizeOptionalText(input.description)
    }

    return values
  }

  /**
   * Normalizes and validates a permission code.
   *
   * Нормализует и проверяет код права доступа.
   * @param code Raw permission code / Исходный код права доступа
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @returns Trimmed non-empty permission code / Очищенный код права доступа
   */
  static normalizeCode(
    code: string,
    errorCenter: ErrorCenterInstance
  ): string {
    const normalized = isString(code) ? code.trim() : ''

    if (normalized.length === 0 || /\s/.test(normalized)) {
      CmsPermissionItem.reportError(
        errorCenter,
        'permissionInvalidCode',
        'Valid permission code is required.',
        { code }
      )
    }

    return normalized
  }

  /**
   * Normalizes and validates a permission display name.
   *
   * Нормализует и проверяет название права доступа.
   * @param name Raw permission name / Исходное название права доступа
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @returns Trimmed non-empty permission name / Очищенное название права доступа
   */
  static normalizeName(
    name: string,
    errorCenter: ErrorCenterInstance
  ): string {
    const normalized = isString(name) ? name.trim() : ''

    if (normalized.length === 0) {
      CmsPermissionItem.reportError(
        errorCenter,
        'permissionInvalidName',
        'Permission name is required.',
        { name }
      )
    }

    return normalized
  }
}
