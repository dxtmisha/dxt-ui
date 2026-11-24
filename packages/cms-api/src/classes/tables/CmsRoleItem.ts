import {
  and,
  asc,
  eq,
  inArray,
  type SQL
} from 'drizzle-orm'
import {
  ErrorCenterThrow,
  isPositiveInteger,
  isString,
  uniqueArray
} from '@dxtmisha/functional-basic'

import { findOneCmsRecord } from '../../functions/db/findOneCmsRecord'
import { CMS_ROLE_ERROR_GROUP } from '../../media/errors/cmsRoleErrorCauseList'
import { permissions } from '../../media/schema/permissions'
import { rolePermissions } from '../../media/schema/rolePermissions'
import { roles } from '../../media/schema/roles'
import { userRoles } from '../../media/schema/userRoles'
import { CmsDbCodeCreatedOriginItemAbstract } from '../abstract/CmsDbCodeCreatedOriginItemAbstract'
import { CmsPermissionItem } from './CmsPermissionItem'
import { CmsVerification } from '../CmsVerification'
import type { CmsDbInstance } from '../CmsDbInstance'
import type {
  CmsDbExecutor,
  CmsPermission,
  CmsRole
} from '../../types/cmsDbTypes'
import type {
  CmsRoleUpdateInput,
  CmsRoleWithPermissions
} from '../../types/cmsRoleTypes'

/**
 * Represents a single CMS role entity and provides instance-level methods for reading, editing, permission management, reloading, and deletion.
 *
 * Представляет конкретную роль CMS и предоставляет методы для чтения полей, редактирования, управления правами доступа, перезагрузки и удаления.
 */
export class CmsRoleItem extends CmsDbCodeCreatedOriginItemAbstract<
  typeof roles,
  CmsRoleWithPermissions,
  CmsRoleUpdateInput
> {
  /** Table schema bound to role records / Схема таблицы ролей */
  static readonly table = roles

  /** ErrorCenter group name for role errors / Имя группы ошибок ErrorCenter для ролей */
  static readonly errorGroup = CMS_ROLE_ERROR_GROUP

  /** ErrorCenter group name for role errors / Имя группы ошибок ErrorCenter для ролей */
  protected readonly errorGroup = CmsRoleItem.errorGroup

  /**
   * Initializes a role entity wrapper with role data and database instance manager.
   *
   * Инициализирует обёртку конкретной роли с её данными и менеджером БД.
   * @param data Role record with assigned permissions / Запись роли с назначенными правами доступа
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  constructor(
    data: CmsRoleWithPermissions,
    databaseInstance?: CmsDbInstance
  ) {
    super(CmsRoleItem.table, data, databaseInstance)
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
   * Returns a cloned snapshot of the role record with permissions.
   *
   * Возвращает копию данных роли вместе с правами доступа.
   * @returns Role data with permissions / Данные роли с правами доступа
   */
  override getData(): CmsRoleWithPermissions {
    return {
      ...super.getData(),
      permissions: [...this.data.permissions]
    }
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
   * Возвращает назначенные права доступа роли в виде экземпляров CmsPermissionItem.
   * @returns List of CmsPermissionItem instances / Список экземпляров CmsPermissionItem
   */
  getPermissionItems(): CmsPermissionItem[] {
    return this.data.permissions.map(
      permissionRecord => new CmsPermissionItem(permissionRecord, this.databaseInstance)
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
    return this.replacePermissions('setPermissions', permissionIds)
  }

  /**
   * Replaces all permissions assigned to this role using permission codes.
   *
   * Полностью заменяет права доступа этой роли по списку кодов прав.
   * @param permissionCodes Permission codes to assign / Коды прав доступа для назначения
   * @returns Updated list of assigned permissions / Обновлённый список назначенных прав доступа
   */
  async setPermissionsByCode(permissionCodes: readonly string[]): Promise<CmsPermission[]> {
    return this.replacePermissions('setPermissions', undefined, permissionCodes)
  }

  /**
   * Assigns additional permissions to this role by ID without removing existing ones.
   *
   * Добавляет этой роли дополнительные права доступа по ID без удаления уже назначенных.
   * @param permissionIds Permission identifiers to add / Идентификаторы добавляемых прав доступа
   * @returns Updated list of assigned permissions / Обновлённый список назначенных прав доступа
   */
  async addPermissions(permissionIds: readonly number[]): Promise<CmsPermission[]> {
    return this.assignPermissions('addPermissions', permissionIds)
  }

  /**
   * Assigns additional permissions to this role by code without removing existing ones.
   *
   * Добавляет этой роли дополнительные права доступа по кодам без удаления уже назначенных.
   * @param permissionCodes Permission codes to add / Коды добавляемых прав доступа
   * @returns Updated list of assigned permissions / Обновлённый список назначенных прав доступа
   */
  async addPermissionsByCode(permissionCodes: readonly string[]): Promise<CmsPermission[]> {
    return this.assignPermissions('addPermissions', undefined, permissionCodes)
  }

  /**
   * Removes specific permissions from this role by identifier.
   *
   * Удаляет указанные права доступа у этой роли по идентификаторам.
   * @param permissionIds Permission identifiers to remove / Идентификаторы удаляемых прав доступа
   * @returns Updated list of remaining assigned permissions / Обновлённый список оставшихся прав доступа
   */
  async removePermissions(permissionIds: readonly number[]): Promise<CmsPermission[]> {
    return this.unassignPermissions('removePermissions', permissionIds)
  }

  /**
   * Removes specific permissions from this role by code.
   *
   * Удаляет указанные права доступа у этой роли по кодам.
   * @param permissionCodes Permission codes to remove / Коды удаляемых прав доступа
   * @returns Updated list of remaining assigned permissions / Обновлённый список оставшихся прав доступа
   */
  async removePermissionsByCode(permissionCodes: readonly string[]): Promise<CmsPermission[]> {
    return this.unassignPermissions('removePermissions', undefined, permissionCodes)
  }

  /**
   * Updates this role's fields and optionally replaces assigned permissions.
   *
   * Редактирует поля этой роли и при необходимости обновляет её права доступа.
   * @param input Role fields and optional permission assignments / Данные роли и необязательный список прав доступа
   * @returns Current role item / Текущий экземпляр роли
   */
  override async update(input: CmsRoleUpdateInput): Promise<this> {
    const roleId = this.data.id
    CmsVerification.isPositiveInteger(roleId)

    const updateValues = this.buildUpdateValues(input)

    try {
      const updatedRecord = await this.databaseInstance.get().transaction(async (transaction) => {
        const existingRole = await findOneCmsRecord<CmsRole>(
          transaction,
          roles,
          eq(roles.id, roleId)
        )
        if (!existingRole) {
          return undefined
        }

        const updatedRows = await transaction
          .update(roles)
          .set(updateValues)
          .where(eq(roles.id, roleId))
          .returning()

        const updatedRole = updatedRows[0] ?? existingRole

        if (input.permissionIds !== undefined || input.permissionCodes !== undefined) {
          const resolvedPermissionIds = await CmsPermissionItem.resolveIds(
            transaction,
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
        return this
      }

      this.data = updatedRecord
      return this
    } catch (error) {
      return this.handleError('update', error)
    }
  }

  /**
   * Loads the latest role snapshot together with its assigned permissions by ID.
   *
   * Загружает актуальное состояние роли вместе с назначенными правами доступа по ID.
   * @param id Role identifier / Идентификатор роли
   * @returns Role record with permissions or undefined / Запись роли с правами доступа или undefined
   */
  protected override async fetchById(id: number): Promise<CmsRoleWithPermissions | undefined> {
    return CmsRoleItem.findOneWithPermissions(
      this.databaseInstance.get(),
      eq(roles.id, id)
    )
  }

  /**
   * Replaces all permissions on this role in a transaction and synchronizes local snapshot.
   *
   * Полностью заменяет права доступа роли в транзакции и синхронизирует локальное состояние.
   * @param errorCode Error code on failure / Код ошибки при сбое
   * @param permissionIds Optional list of permission IDs / Необязательный список ID прав доступа
   * @param permissionCodes Optional list of permission codes / Необязательный список кодов прав доступа
   * @returns Updated list of assigned permissions / Обновлённый список назначенных прав доступа
   */
  protected async replacePermissions(
    errorCode: string,
    permissionIds?: readonly number[],
    permissionCodes?: readonly string[]
  ): Promise<CmsPermission[]> {
    const roleId = this.data.id

    try {
      const permissionsList = await this.databaseInstance.get().transaction(async (transaction) => {
        await CmsRoleItem.ensureRoleExists(transaction, roleId)
        const resolvedIds = await CmsPermissionItem.resolveIds(
          transaction,
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
      return this.handleError(errorCode, error)
    }
  }

  /**
   * Adds permissions to this role in a transaction without removing existing ones.
   *
   * Добавляет права доступа роли в транзакции без удаления существующих.
   * @param errorCode Error code on failure / Код ошибки при сбое
   * @param permissionIds Optional list of permission IDs / Необязательный список ID прав доступа
   * @param permissionCodes Optional list of permission codes / Необязательный список кодов прав доступа
   * @returns Updated list of assigned permissions / Обновлённый список назначенных прав доступа
   */
  protected async assignPermissions(
    errorCode: string,
    permissionIds?: readonly number[],
    permissionCodes?: readonly string[]
  ): Promise<CmsPermission[]> {
    const roleId = this.data.id

    try {
      const permissionsList = await this.databaseInstance.get().transaction(async (transaction) => {
        await CmsRoleItem.ensureRoleExists(transaction, roleId)
        const resolvedIds = await CmsPermissionItem.resolveIds(
          transaction,
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
      return this.handleError(errorCode, error)
    }
  }

  /**
   * Removes specified permissions from this role in a transaction.
   *
   * Удаляет указанные права доступа у роли в транзакции.
   * @param errorCode Error code on failure / Код ошибки при сбое
   * @param permissionIds Optional list of permission IDs / Необязательный список ID прав доступа
   * @param permissionCodes Optional list of permission codes / Необязательный список кодов прав доступа
   * @returns Updated list of remaining assigned permissions / Обновлённый список оставшихся прав доступа
   */
  protected async unassignPermissions(
    errorCode: string,
    permissionIds?: readonly number[],
    permissionCodes?: readonly string[]
  ): Promise<CmsPermission[]> {
    const roleId = this.data.id

    try {
      const permissionsList = await this.databaseInstance.get().transaction(async (transaction) => {
        await CmsRoleItem.ensureRoleExists(transaction, roleId)

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
      return this.handleError(errorCode, error)
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
    const roleRecord = await findOneCmsRecord<CmsRole>(
      executor,
      roles,
      whereCondition
    )
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
    if (!CmsVerification.isPositiveInteger(userId, false)) {
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
   * @param roleId Role identifier / Идентификатор роли
   */
  static async ensureRoleExists(
    executor: CmsDbExecutor,
    roleId: number
  ): Promise<void> {
    if (!isPositiveInteger(roleId)) {
      ErrorCenterThrow.on({
        group: CMS_ROLE_ERROR_GROUP,
        code: 'notFound',
        details: { roleId }
      })
    }

    const foundRole = await findOneCmsRecord<{ id: number }>(
      executor,
      roles,
      eq(roles.id, roleId),
      { id: roles.id }
    )

    if (!foundRole) {
      ErrorCenterThrow.on({
        group: CMS_ROLE_ERROR_GROUP,
        code: 'notFound',
        details: { roleId }
      })
    }
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
}
