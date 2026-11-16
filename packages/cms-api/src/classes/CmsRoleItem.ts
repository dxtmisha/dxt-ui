import {
  and,
  asc,
  eq,
  inArray,
  type SQL
} from 'drizzle-orm'
import {
  isPositiveInteger,
  isString,
  uniqueArray
} from '@dxtmisha/functional-basic'

import { normalizeCmsOptionalText } from '../functions/normalizeCmsOptionalText'
import { permissions } from '../media/schema/permissions'
import { rolePermissions } from '../media/schema/rolePermissions'
import { roles } from '../media/schema/roles'
import { userRoles } from '../media/schema/userRoles'
import { CmsDbAbstract } from './CmsDbAbstract'
import { CmsPermissionItem } from './CmsPermissionItem'
import type { CmsDbInstance } from './CmsDbInstance'
import type { CmsErrorInstance } from './CmsErrorInstance'
import type {
  CmsDbExecutor,
  CmsNewRole,
  CmsPermission
} from '../types/cmsDbTypes'
import type {
  CmsRoleCreateInput,
  CmsRoleUpdateInput,
  CmsRoleWithPermissions
} from '../types/cmsRoleTypes'

/**
 * Represents a single CMS role entity and provides instance-level methods for reading, editing, permission management, reloading, and deletion.
 *
 * Представляет конкретную роль CMS и предоставляет методы для чтения полей, редактирования, управления правами доступа, перезагрузки и удаления.
 */
export class CmsRoleItem extends CmsDbAbstract<typeof roles> {
  /**
   * Initializes a role entity wrapper with role data, database instance manager, and error handler.
   *
   * Инициализирует обёртку конкретной роли с её данными, менеджером БД и обработчиком ошибок.
   * @param data Role record with assigned permissions / Запись роли с назначенными правами доступа
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   * @param error CMS error instance handler / Обработчик ошибок CMS
   */
  constructor(
    protected data: CmsRoleWithPermissions,
    databaseInstance?: CmsDbInstance,
    error?: CmsErrorInstance
  ) {
    super(roles, databaseInstance, error)
  }

  /**
   * Checks whether the role includes a permission with the specified code.
   *
   * Проверяет, назначено ли роли право доступа с указанным кодом.
   * @param permissionCode Permission code / Код права доступа
   * @returns True if permission is assigned / True, если право доступа назначено
   */
  hasPermission(permissionCode: string): boolean {
    return this.data.permissions.some(permissionRecord => permissionRecord.code === permissionCode)
  }

  /**
   * Checks whether the role includes a permission with the specified identifier.
   *
   * Проверяет, назначено ли роли право доступа с указанным идентификатором.
   * @param permissionId Permission identifier / Идентификатор права доступа
   * @returns True if permission is assigned / True, если право доступа назначено
   */
  hasPermissionId(permissionId: number): boolean {
    return this.data.permissions.some(permissionRecord => permissionRecord.id === permissionId)
  }

  /**
   * Checks whether the role includes at least one of the specified permission codes.
   *
   * Проверяет, назначено ли роли хотя бы одно из указанных прав доступа.
   * @param permissionCodes List of permission codes / Список кодов прав доступа
   * @returns True if any permission matches / True, если хотя бы одно право назначено
   */
  hasAnyPermission(permissionCodes: readonly string[]): boolean {
    return permissionCodes.some(permissionCode => this.hasPermission(permissionCode))
  }

  /**
   * Checks whether the role includes all of the specified permission codes.
   *
   * Проверяет, назначены ли роли все указанные права доступа.
   * @param permissionCodes List of permission codes / Список кодов прав доступа
   * @returns True if all permissions match / True, если назначены все права
   */
  hasAllPermissions(permissionCodes: readonly string[]): boolean {
    return permissionCodes.every(permissionCode => this.hasPermission(permissionCode))
  }

  /**
   * Returns the role identifier.
   *
   * Возвращает идентификатор роли.
   * @returns Role identifier / Идентификатор роли
   */
  getId(): number {
    return this.data.id
  }

  /**
   * Returns a cloned snapshot of the role record with permissions.
   *
   * Возвращает копию данных роли вместе с правами доступа.
   * @returns Role data with permissions / Данные роли с правами доступа
   */
  getData(): CmsRoleWithPermissions {
    return {
      ...this.data,
      permissions: [...this.data.permissions]
    }
  }

  /**
   * Returns the unique role code.
   *
   * Возвращает уникальный код роли.
   * @returns Role code / Код роли
   */
  getCode(): string {
    return this.data.code
  }

  /**
   * Returns the display name or translation key of the role.
   *
   * Возвращает отображаемое название или ключ перевода роли.
   * @returns Role name / Название роли
   */
  getName(): string {
    return this.data.name
  }

  /**
   * Returns the role description or null.
   *
   * Возвращает описание роли или null.
   * @returns Role description or null / Описание роли или null
   */
  getDescription(): string | null {
    return this.data.description
  }

  /**
   * Returns the role creation timestamp.
   *
   * Возвращает дату создания роли.
   * @returns Creation date / Дата создания
   */
  getCreatedAt(): Date {
    return this.data.createdAt
  }

  /**
   * Returns the role last update timestamp.
   *
   * Возвращает дату последнего обновления роли.
   * @returns Last update date / Дата последнего обновления
   */
  getUpdatedAt(): Date {
    return this.data.updatedAt
  }

  /**
   * Returns a copy of the role's currently assigned permissions.
   *
   * Возвращает копию текущих назначенных прав доступа роли.
   * @returns List of assigned permissions / Список назначенных прав доступа
   */
  getPermissions(): CmsPermission[] {
    return [...this.data.permissions]
  }

  /**
   * Returns assigned permissions wrapped in CmsPermissionItem instances.
   *
   * Возвращает назначенные права доступа в виде экземпляров CmsPermissionItem.
   * @returns List of CmsPermissionItem instances / Список экземпляров CmsPermissionItem
   */
  getPermissionItems(): CmsPermissionItem[] {
    return this.data.permissions.map(
      permissionRecord => new CmsPermissionItem(permissionRecord, this.databaseInstance, this.error)
    )
  }

  /**
   * Replaces all permissions assigned to this role using permission identifiers.
   *
   * Полностью заменяет права доступа этой роли по списку идентификаторов прав.
   * @param permissionIds Permission identifiers to assign / Идентификаторы прав доступа для назначения
   * @returns Updated list of assigned permissions / Обновлённый список назначенных прав доступа
   */
  async setPermissions(permissionIds: readonly number[]): Promise<CmsPermission[]> {
    return this.replacePermissions(
      'roleSetPermissions',
      'Failed to set CMS role permissions.',
      permissionIds
    )
  }

  /**
   * Replaces all permissions assigned to this role using permission codes.
   *
   * Полностью заменяет права доступа этой роли по списку кодов прав.
   * @param permissionCodes Permission codes to assign / Коды прав доступа для назначения
   * @returns Updated list of assigned permissions / Обновлённый список назначенных прав доступа
   */
  async setPermissionsByCode(permissionCodes: readonly string[]): Promise<CmsPermission[]> {
    return this.replacePermissions(
      'roleSetPermissions',
      'Failed to set CMS role permissions by code.',
      undefined,
      permissionCodes
    )
  }

  /**
   * Assigns additional permissions to this role by ID without removing existing ones.
   *
   * Добавляет этой роли дополнительные права доступа по ID без удаления уже назначенных.
   * @param permissionIds Permission identifiers to add / Идентификаторы добавляемых прав доступа
   * @returns Updated list of assigned permissions / Обновлённый список назначенных прав доступа
   */
  async addPermissions(permissionIds: readonly number[]): Promise<CmsPermission[]> {
    return this.assignPermissions(
      'roleAddPermissions',
      'Failed to add CMS role permissions.',
      permissionIds
    )
  }

  /**
   * Assigns additional permissions to this role by code without removing existing ones.
   *
   * Добавляет этой роли дополнительные права доступа по кодам без удаления уже назначенных.
   * @param permissionCodes Permission codes to add / Коды добавляемых прав доступа
   * @returns Updated list of assigned permissions / Обновлённый список назначенных прав доступа
   */
  async addPermissionsByCode(permissionCodes: readonly string[]): Promise<CmsPermission[]> {
    return this.assignPermissions(
      'roleAddPermissions',
      'Failed to add CMS role permissions by code.',
      undefined,
      permissionCodes
    )
  }

  /**
   * Removes specific permissions from this role by identifier.
   *
   * Удаляет указанные права доступа у этой роли по идентификаторам.
   * @param permissionIds Permission identifiers to remove / Идентификаторы удаляемых прав доступа
   * @returns Updated list of remaining assigned permissions / Обновлённый список оставшихся прав доступа
   */
  async removePermissions(permissionIds: readonly number[]): Promise<CmsPermission[]> {
    return this.unassignPermissions(
      'roleRemovePermissions',
      'Failed to remove CMS role permissions.',
      permissionIds
    )
  }

  /**
   * Removes specific permissions from this role by code.
   *
   * Удаляет указанные права доступа у этой роли по кодам.
   * @param permissionCodes Permission codes to remove / Коды удаляемых прав доступа
   * @returns Updated list of remaining assigned permissions / Обновлённый список оставшихся прав доступа
   */
  async removePermissionsByCode(permissionCodes: readonly string[]): Promise<CmsPermission[]> {
    return this.unassignPermissions(
      'roleRemovePermissions',
      'Failed to remove CMS role permissions by code.',
      undefined,
      permissionCodes
    )
  }

  /**
   * Updates this role's fields and optionally replaces assigned permissions.
   *
   * Редактирует поля этой роли и при необходимости обновляет её права доступа.
   * @param input Role fields and optional permission assignments / Данные роли и необязательный список прав доступа
   * @returns Updated role item or undefined if not found / Обновлённый экземпляр роли или undefined, если не найдена
   */
  async update(input: CmsRoleUpdateInput): Promise<this | undefined> {
    const roleId = this.data.id
    if (!isPositiveInteger(roleId)) {
      return undefined
    }

    const updateValues = CmsRoleItem.buildUpdateValues(input, this.error)

    try {
      const updatedRecord = await this.getDatabase().transaction(async (transaction) => {
        const existingRows = await transaction
          .select()
          .from(roles)
          .where(eq(roles.id, roleId))
          .limit(1)

        const existingRole = existingRows[0]
        if (!existingRole) {
          return undefined
        }

        const updatedRows = await transaction
          .update(roles)
          .set({
            ...updateValues,
            updatedAt: new Date()
          })
          .where(eq(roles.id, roleId))
          .returning()

        const updatedRole = updatedRows[0] ?? existingRole

        if (input.permissionIds !== undefined || input.permissionCodes !== undefined) {
          const resolvedPermissionIds = await CmsPermissionItem.resolveIds(
            transaction,
            this.error,
            input.permissionIds,
            input.permissionCodes
          )
          await CmsRoleItem.syncRolePermissions(transaction, roleId, resolvedPermissionIds)
        }

        const permissionsList = await CmsPermissionItem.fetchByRoleId(transaction, roleId)

        return {
          ...updatedRole,
          permissions: permissionsList
        }
      })

      if (!updatedRecord) {
        return undefined
      }

      this.data = updatedRecord
      return this
    } catch (error) {
      return this.error.handleTransaction(
        'roleUpdate',
        'Failed to update CMS role.',
        error
      )
    }
  }

  /**
   * Permanently deletes this role from the database (cascading user and permission links).
   *
   * Безвозвратно удаляет эту роль из базы данных (каскадно удаляя связи с пользователями и правами).
   * @returns True if deleted / True, если роль была удалена
   */
  async delete(): Promise<boolean> {
    const roleId = this.data.id
    if (!isPositiveInteger(roleId)) {
      return false
    }

    try {
      return await this.deleteRecordById(roleId)
    } catch (error) {
      return this.error.handleTransaction(
        'roleDelete',
        'Failed to delete CMS role.',
        error
      )
    }
  }

  /**
   * Reloads this role's data and assigned permissions from the database.
   *
   * Перезагружает данные и назначенные права доступа этой роли из базы данных.
   * @returns Reloaded role item or undefined if missing / Обновлённый экземпляр роли или undefined, если не найдена
   */
  async reload(): Promise<this | undefined> {
    const roleId = this.data.id
    if (!isPositiveInteger(roleId)) {
      return undefined
    }

    const foundRecord = await CmsRoleItem.findOneWithPermissions(
      this.getDatabase(),
      eq(roles.id, roleId)
    )

    if (!foundRecord) {
      return undefined
    }

    this.data = foundRecord
    return this
  }

  /**
   * Returns a plain JSON-serializable snapshot of the role record.
   *
   * Возвращает обычный объект данных роли для сериализации в JSON.
   * @returns Role record with permissions / Запись роли с правами доступа
   */
  toJSON(): CmsRoleWithPermissions {
    return this.getData()
  }

  /**
   * Replaces all permissions on this role in a transaction and synchronizes local snapshot.
   *
   * Полностью заменяет права доступа роли в транзакции и синхронизирует локальное состояние.
   * @param errorCode Error code on failure / Код ошибки при сбое
   * @param errorMessage Fallback error message / Сообщение об ошибке по умолчанию
   * @param permissionIds Optional list of permission IDs / Необязательный список ID прав доступа
   * @param permissionCodes Optional list of permission codes / Необязательный список кодов прав доступа
   * @returns Updated list of assigned permissions / Обновлённый список назначенных прав доступа
   */
  protected async replacePermissions(
    errorCode: string,
    errorMessage: string,
    permissionIds?: readonly number[],
    permissionCodes?: readonly string[]
  ): Promise<CmsPermission[]> {
    const roleId = this.data.id

    try {
      const permissionsList = await this.getDatabase().transaction(async (transaction) => {
        await CmsRoleItem.ensureRoleExists(transaction, this.error, roleId)
        const resolvedIds = await CmsPermissionItem.resolveIds(
          transaction,
          this.error,
          permissionIds,
          permissionCodes
        )
        await CmsRoleItem.syncRolePermissions(transaction, roleId, resolvedIds)

        return CmsPermissionItem.fetchByRoleId(transaction, roleId)
      })

      this.data = {
        ...this.data,
        permissions: permissionsList
      }

      return [...permissionsList]
    } catch (error) {
      return this.error.handleTransaction(errorCode, errorMessage, error)
    }
  }

  /**
   * Adds permissions to this role in a transaction without removing existing ones.
   *
   * Добавляет права доступа роли в транзакции без удаления существующих.
   * @param errorCode Error code on failure / Код ошибки при сбое
   * @param errorMessage Fallback error message / Сообщение об ошибке по умолчанию
   * @param permissionIds Optional list of permission IDs / Необязательный список ID прав доступа
   * @param permissionCodes Optional list of permission codes / Необязательный список кодов прав доступа
   * @returns Updated list of assigned permissions / Обновлённый список назначенных прав доступа
   */
  protected async assignPermissions(
    errorCode: string,
    errorMessage: string,
    permissionIds?: readonly number[],
    permissionCodes?: readonly string[]
  ): Promise<CmsPermission[]> {
    const roleId = this.data.id

    try {
      const permissionsList = await this.getDatabase().transaction(async (transaction) => {
        await CmsRoleItem.ensureRoleExists(transaction, this.error, roleId)
        const resolvedIds = await CmsPermissionItem.resolveIds(
          transaction,
          this.error,
          permissionIds,
          permissionCodes
        )

        if (resolvedIds.length > 0) {
          await transaction
            .insert(rolePermissions)
            .values(resolvedIds.map(permissionId => ({ roleId, permissionId })))
            .onConflictDoNothing({
              target: [rolePermissions.roleId, rolePermissions.permissionId]
            })
        }

        return CmsPermissionItem.fetchByRoleId(transaction, roleId)
      })

      this.data = {
        ...this.data,
        permissions: permissionsList
      }

      return [...permissionsList]
    } catch (error) {
      return this.error.handleTransaction(errorCode, errorMessage, error)
    }
  }

  /**
   * Removes specified permissions from this role in a transaction.
   *
   * Удаляет указанные права доступа у роли в транзакции.
   * @param errorCode Error code on failure / Код ошибки при сбое
   * @param errorMessage Fallback error message / Сообщение об ошибке по умолчанию
   * @param permissionIds Optional list of permission IDs / Необязательный список ID прав доступа
   * @param permissionCodes Optional list of permission codes / Необязательный список кодов прав доступа
   * @returns Updated list of remaining assigned permissions / Обновлённый список оставшихся прав доступа
   */
  protected async unassignPermissions(
    errorCode: string,
    errorMessage: string,
    permissionIds?: readonly number[],
    permissionCodes?: readonly string[]
  ): Promise<CmsPermission[]> {
    const roleId = this.data.id

    try {
      const permissionsList = await this.getDatabase().transaction(async (transaction) => {
        await CmsRoleItem.ensureRoleExists(transaction, this.error, roleId)

        const targetIds: number[] = []

        if (permissionIds !== undefined) {
          targetIds.push(
            ...uniqueArray(permissionIds).filter(permissionId => isPositiveInteger(permissionId))
          )
        }

        if (permissionCodes !== undefined) {
          const uniqueCodes = uniqueArray(
            permissionCodes
              .filter(isString)
              .map(code => code.trim())
              .filter(code => code.length > 0)
          )

          if (uniqueCodes.length > 0) {
            const matchedPermissions = await transaction
              .select({ id: permissions.id })
              .from(permissions)
              .where(inArray(permissions.code, uniqueCodes))

            targetIds.push(...matchedPermissions.map(permissionRecord => permissionRecord.id))
          }
        }

        const uniqueTargetIds = uniqueArray(targetIds)
        if (uniqueTargetIds.length > 0) {
          await transaction
            .delete(rolePermissions)
            .where(and(
              eq(rolePermissions.roleId, roleId),
              inArray(rolePermissions.permissionId, uniqueTargetIds)
            ))
        }

        return CmsPermissionItem.fetchByRoleId(transaction, roleId)
      })

      this.data = {
        ...this.data,
        permissions: permissionsList
      }

      return [...permissionsList]
    } catch (error) {
      return this.error.handleTransaction(errorCode, errorMessage, error)
    }
  }

  /**
   * Finds a single role record matching a SQL predicate and attaches its permissions.
   *
   * Находит одну запись роли по SQL-предикату и прикрепляет её права доступа.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param whereCondition SQL predicate / SQL-условие поиска
   * @returns Role record with permissions or undefined / Запись роли с правами доступа или undefined
   */
  static async findOneWithPermissions(
    executor: CmsDbExecutor,
    whereCondition: SQL | undefined
  ): Promise<CmsRoleWithPermissions | undefined> {
    if (!whereCondition) {
      return undefined
    }

    const foundRows = await executor
      .select()
      .from(roles)
      .where(whereCondition)
      .limit(1)

    const roleRecord = foundRows[0]
    if (!roleRecord) {
      return undefined
    }

    const permissionsList = await CmsPermissionItem.fetchByRoleId(executor, roleRecord.id)

    return {
      ...roleRecord,
      permissions: permissionsList
    }
  }

  /**
   * Queries all roles with their permissions assigned to a specific user ordered by role ID.
   *
   * Запрашивает все роли с их правами доступа, назначенные конкретному пользователю, с сортировкой по ID роли.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param userId User identifier / Идентификатор пользователя
   * @returns List of assigned roles with permissions / Список назначенных ролей с правами доступа
   */
  static async fetchByUserId(
    executor: CmsDbExecutor,
    userId: number
  ): Promise<CmsRoleWithPermissions[]> {
    if (!isPositiveInteger(userId)) {
      return []
    }

    const rows = await executor
      .select({ role: roles })
      .from(userRoles)
      .innerJoin(roles, eq(userRoles.roleId, roles.id))
      .where(eq(userRoles.userId, userId))
      .orderBy(asc(roles.id))

    if (rows.length === 0) {
      return []
    }

    const roleIds = rows.map(row => row.role.id)
    const permissionsByRoleId = await CmsPermissionItem.fetchByRoleIds(executor, roleIds)

    return rows.map(row => ({
      ...row.role,
      permissions: [...(permissionsByRoleId.get(row.role.id) ?? [])]
    }))
  }

  /**
   * Queries assigned roles with permissions for multiple user identifiers in batch queries.
   *
   * Загружает назначенные роли с правами доступа для списка пользователей пакетными запросами.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param userIds List of user identifiers / Список идентификаторов пользователей
   * @returns Map of user ID to assigned roles with permissions / Карта соответствия ID пользователя и списка его ролей с правами
   */
  static async fetchByUserIds(
    executor: CmsDbExecutor,
    userIds: readonly number[]
  ): Promise<Map<number, CmsRoleWithPermissions[]>> {
    const rolesByUserId = new Map<number, CmsRoleWithPermissions[]>()
    const uniqueUserIds = uniqueArray(userIds).filter(userId => isPositiveInteger(userId))

    if (uniqueUserIds.length === 0) {
      return rolesByUserId
    }

    const relationRows = await executor
      .select({
        userId: userRoles.userId,
        role: roles
      })
      .from(userRoles)
      .innerJoin(roles, eq(userRoles.roleId, roles.id))
      .where(inArray(userRoles.userId, uniqueUserIds))
      .orderBy(asc(roles.id))

    if (relationRows.length === 0) {
      return rolesByUserId
    }

    const uniqueRoleIds = uniqueArray(relationRows.map(relationRow => relationRow.role.id))
    const permissionsByRoleId = await CmsPermissionItem.fetchByRoleIds(executor, uniqueRoleIds)

    for (const relationRow of relationRows) {
      const roleWithPermissions: CmsRoleWithPermissions = {
        ...relationRow.role,
        permissions: [...(permissionsByRoleId.get(relationRow.role.id) ?? [])]
      }
      const existingList = rolesByUserId.get(relationRow.userId)
      if (existingList) {
        existingList.push(roleWithPermissions)
      } else {
        rolesByUserId.set(relationRow.userId, [roleWithPermissions])
      }
    }

    return rolesByUserId
  }

  /**
   * Ensures a role with the given identifier exists or reports an error.
   *
   * Проверяет наличие роли с указанным идентификатором или регистрирует ошибку.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param error CmsErrorInstance handler / Обработчик ошибок CmsErrorInstance
   * @param roleId Role identifier / Идентификатор роли
   */
  static async ensureRoleExists(
    executor: CmsDbExecutor,
    error: CmsErrorInstance,
    roleId: number
  ): Promise<void> {
    if (!isPositiveInteger(roleId)) {
      error.report(
        'roleNotFound',
        `CMS role with ID ${String(roleId)} was not found.`,
        { roleId }
      )
    }

    const foundRows = await executor
      .select({ id: roles.id })
      .from(roles)
      .where(eq(roles.id, roleId))
      .limit(1)

    if (foundRows.length === 0) {
      error.report(
        'roleNotFound',
        `CMS role with ID ${roleId} was not found.`,
        { roleId }
      )
    }
  }

  /**
   * Validates and verifies role identifiers by their IDs.
   *
   * Проверяет и подтверждает идентификаторы ролей по их ID.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param error CmsErrorInstance handler / Обработчик ошибок CmsErrorInstance
   * @param roleIds Optional list of role IDs / Необязательный список ID ролей
   * @returns Deduplicated list of verified role IDs / Уникальный список проверенных ID ролей
   */
  static async resolveIdsByIds(
    executor: CmsDbExecutor,
    error: CmsErrorInstance,
    roleIds?: readonly number[]
  ): Promise<number[]> {
    return CmsDbAbstract.resolveEntityIdsByIds(
      error,
      'roleNotFound',
      'CMS role',
      uniqueIds => executor
        .select({ id: roles.id })
        .from(roles)
        .where(inArray(roles.id, uniqueIds)),
      roleIds
    )
  }

  /**
   * Resolves and verifies role identifiers by their unique codes.
   *
   * Разрешает и проверяет идентификаторы ролей по их уникальным кодам.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param error CmsErrorInstance handler / Обработчик ошибок CmsErrorInstance
   * @param roleCodes Optional list of role codes / Необязательный список кодов ролей
   * @returns Deduplicated list of resolved role IDs / Уникальный список найденных ID ролей
   */
  static async resolveIdsByCodes(
    executor: CmsDbExecutor,
    error: CmsErrorInstance,
    roleCodes?: readonly string[]
  ): Promise<number[]> {
    return CmsDbAbstract.resolveEntityIdsByCodes(
      error,
      'roleNotFound',
      'CMS role',
      uniqueCodes => executor
        .select({ id: roles.id, code: roles.code })
        .from(roles)
        .where(inArray(roles.code, uniqueCodes)),
      roleCodes
    )
  }

  /**
   * Resolves and validates role identifiers from role IDs and/or role codes.
   *
   * Разрешает и валидирует идентификаторы ролей из переданных ID и/или кодов ролей.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param error CmsErrorInstance handler / Обработчик ошибок CmsErrorInstance
   * @param roleIds Optional list of role IDs / Необязательный список ID ролей
   * @param roleCodes Optional list of role codes / Необязательный список кодов ролей
   * @returns Deduplicated list of verified role IDs / Уникальный список проверенных ID ролей
   */
  static async resolveIds(
    executor: CmsDbExecutor,
    error: CmsErrorInstance,
    roleIds?: readonly number[],
    roleCodes?: readonly string[]
  ): Promise<number[]> {
    const resolvedIds: number[] = []

    if (roleIds !== undefined) {
      resolvedIds.push(
        ...await CmsRoleItem.resolveIdsByIds(executor, error, roleIds)
      )
    }

    if (roleCodes !== undefined) {
      resolvedIds.push(
        ...await CmsRoleItem.resolveIdsByCodes(executor, error, roleCodes)
      )
    }

    return uniqueArray(resolvedIds)
  }

  /**
   * Synchronizes role permission assignments by replacing existing links with the provided permission IDs.
   *
   * Синхронизирует связи прав роли, заменяя текущие назначения на переданный список ID прав доступа.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param roleId Role identifier / Идентификатор роли
   * @param permissionIds Verified permission identifiers / Проверенные идентификаторы прав доступа
   */
  static async syncRolePermissions(
    executor: CmsDbExecutor,
    roleId: number,
    permissionIds: readonly number[]
  ): Promise<void> {
    await executor
      .delete(rolePermissions)
      .where(eq(rolePermissions.roleId, roleId))

    if (permissionIds.length === 0) {
      return
    }

    await executor
      .insert(rolePermissions)
      .values(permissionIds.map(permissionId => ({ roleId, permissionId })))
      .onConflictDoNothing({
        target: [rolePermissions.roleId, rolePermissions.permissionId]
      })
  }

  /**
   * Builds and validates database insert payload from create input.
   *
   * Формирует и валидирует объект вставки в базу данных из входных данных создания роли.
   * @param input Role creation payload / Входные данные для создания роли
   * @param error CmsErrorInstance handler / Обработчик ошибок CmsErrorInstance
   * @returns Validated Drizzle insert payload / Валидированные данные для вставки
   */
  static buildCreateValues(
    input: CmsRoleCreateInput,
    error: CmsErrorInstance
  ): CmsNewRole {
    return {
      code: CmsRoleItem.normalizeCode(input.code, error),
      name: CmsRoleItem.normalizeName(input.name, error),
      description: normalizeCmsOptionalText(input.description)
    }
  }

  /**
   * Builds and validates database update payload from partial update input.
   *
   * Формирует и валидирует объект обновления в базе данных из входных данных редактирования роли.
   * @param input Partial role update payload / Частичные данные для обновления роли
   * @param error CmsErrorInstance handler / Обработчик ошибок CmsErrorInstance
   * @returns Validated partial Drizzle update payload / Валидированные поля для обновления
   */
  static buildUpdateValues(
    input: CmsRoleUpdateInput,
    error: CmsErrorInstance
  ): Partial<CmsNewRole> {
    const values: Partial<CmsNewRole> = {}

    if (input.code !== undefined) {
      values.code = CmsRoleItem.normalizeCode(input.code, error)
    }

    if (input.name !== undefined) {
      values.name = CmsRoleItem.normalizeName(input.name, error)
    }

    if (input.description !== undefined) {
      values.description = normalizeCmsOptionalText(input.description)
    }

    return values
  }

  /**
   * Normalizes and validates a role code.
   *
   * Нормализует и проверяет код роли.
   * @param code Raw role code / Исходный код роли
   * @param error CmsErrorInstance handler / Обработчик ошибок CmsErrorInstance
   * @returns Trimmed non-empty role code / Очищенный код роли
   */
  static normalizeCode(
    code: string,
    error: CmsErrorInstance
  ): string {
    const normalized = isString(code) ? code.trim() : ''

    if (normalized.length === 0 || /\s/.test(normalized)) {
      error.report(
        'roleInvalidCode',
        'Valid role code is required.',
        { code }
      )
    }

    return normalized
  }

  /**
   * Normalizes and validates a role display name.
   *
   * Нормализует и проверяет название роли.
   * @param name Raw role name / Исходное название роли
   * @param error CmsErrorInstance handler / Обработчик ошибок CmsErrorInstance
   * @returns Trimmed non-empty role name / Очищенное название роли
   */
  static normalizeName(
    name: string,
    error: CmsErrorInstance
  ): string {
    const normalized = isString(name) ? name.trim() : ''

    if (normalized.length === 0) {
      error.report(
        'roleInvalidName',
        'Role name is required.',
        { name }
      )
    }

    return normalized
  }
}
