import {
  and,
  eq,
  getTableColumns,
  inArray,
  sql,
  type SQL
} from 'drizzle-orm'
import {
  ErrorCenterThrow,
  isNull,
  isObjectNotArray,
  isPositiveInteger,
  isString,
  toOptionalText,
  uniqueArray
} from '@dxtmisha/functional-basic'

import { findOneCmsRecord } from '../../functions/db/findOneCmsRecord'
import { hasCmsRecord } from '../../functions/db/hasCmsRecord'
import { CMS_USER_ERROR_GROUP } from '../../media/errors/cmsUserErrorCauseList'
import { roles } from '../../media/schema/roles'
import { userRoles } from '../../media/schema/userRoles'
import { users } from '../../media/schema/users'
import { CmsDbItemAbstract } from '../abstract/CmsDbItemAbstract'
import { CmsPermissionItem } from './CmsPermissionItem'
import { CmsRoleItem } from './CmsRoleItem'
import { CmsVerification } from '../CmsVerification'
import type { CmsDbInstance } from '../CmsDbInstance'
import type {
  CmsDbExecutor,
  CmsNewUser,
  CmsPermission,
  CmsUserMetadata,
  CmsUserStatus
} from '../../types/cmsDbTypes'
import type { CmsRoleWithPermissions } from '../../types/cmsRoleTypes'
import type {
  CmsUserCreateInput,
  CmsUserDeleteOptions,
  CmsUserPublic,
  CmsUserUpdateInput,
  CmsUserWithRoles
} from '../../types/cmsUserTypes'

/** Keys ignored during metadata sanitization / Ключи, игнорируемые при очистке метаданных */
const FORBIDDEN_METADATA_KEYS = new Set(['__proto__', 'constructor', 'prototype'])

/** Public user table columns excluding password hash / Публичные колонки таблицы пользователей без хэша пароля */
const { passwordHash: _passwordHash, ...USER_PUBLIC_COLUMNS } = /* #__PURE__ */ getTableColumns(users)

/**
 * Represents a single CMS user entity and provides instance-level methods for reading, editing, role and permission management, deletion, and restoration.
 *
 * Представляет конкретного пользователя CMS и предоставляет методы для чтения полей, редактирования, управления ролями и правами доступа, удаления и восстановления.
 */
export class CmsUserItem extends CmsDbItemAbstract<typeof users, CmsUserWithRoles, CmsUserUpdateInput> {
  /** ErrorCenter group name for user errors / Имя группы ошибок ErrorCenter для пользователей */
  protected readonly errorGroup = CMS_USER_ERROR_GROUP

  /**
   * Initializes a user entity wrapper with user data and database instance manager.
   *
   * Инициализирует обёртку конкретного пользователя с его данными и менеджером БД.
   * @param data User record with assigned roles and permissions / Запись пользователя с назначенными ролями и правами доступа
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  constructor(
    data: CmsUserWithRoles,
    databaseInstance?: CmsDbInstance
  ) {
    super(users, data, databaseInstance)
  }

  /**
   * Checks whether the user is active and not soft-deleted.
   *
   * Проверяет, активен ли пользователь и не помечен ли он как удалённый.
   * @returns True if active and not deleted / True, если пользователь активен и не удалён
   */
  isActive(): boolean {
    return this.data.status === 'active' && !this.isDeleted()
  }

  /**
   * Checks whether this user record is marked as soft-deleted.
   *
   * Проверяет, помечена ли запись этого пользователя как мягко удалённая.
   * @returns True if soft-deleted / True, если пользователь мягко удалён
   */
  isDeleted(): boolean {
    return isString(this.data.metadata?.deletedAt) && this.data.metadata.deletedAt.trim().length > 0
  }

  /**
   * Checks whether the user has a role with the specified code.
   *
   * Проверяет, назначена ли пользователю роль с указанным кодом.
   * @param roleCode Role code / Код роли
   * @returns True if role is assigned / True, если роль назначена
   */
  hasRole(roleCode: string): boolean {
    return this.data.roles.some(roleRecord => roleRecord.code === roleCode)
  }

  /**
   * Checks whether the user has a role with the specified identifier.
   *
   * Проверяет, назначена ли пользователю роль с указанным идентификатором.
   * @param roleId Role identifier / Идентификатор роли
   * @returns True if role is assigned / True, если роль назначена
   */
  hasRoleId(roleId: number): boolean {
    return this.data.roles.some(roleRecord => roleRecord.id === roleId)
  }

  /**
   * Checks whether the user has a permission with the specified code through any assigned role.
   *
   * Проверяет, есть ли у пользователя право доступа с указанным кодом через любую из назначенных ролей.
   * @param permissionCode Permission code / Код права доступа
   * @returns True if permission is granted / True, если право доступа назначено
   */
  hasPermission(permissionCode: string): boolean {
    return this.getRoleItems().some(roleItem => roleItem.hasPermission(permissionCode))
  }

  /**
   * Checks whether the user has a permission with the specified identifier through any assigned role.
   *
   * Проверяет, есть ли у пользователя право доступа с указанным идентификатором через любую из назначенных ролей.
   * @param permissionId Permission identifier / Идентификатор права доступа
   * @returns True if permission is granted / True, если право доступа назначено
   */
  hasPermissionId(permissionId: number): boolean {
    return this.getRoleItems().some(roleItem => roleItem.hasPermissionId(permissionId))
  }

  /**
   * Checks whether the user has at least one of the specified permission codes.
   *
   * Проверяет, есть ли у пользователя хотя бы одно из указанных прав доступа.
   * @param permissionCodes List of permission codes / Список кодов прав доступа
   * @returns True if any permission is granted / True, если хотя бы одно право назначено
   */
  hasAnyPermission(permissionCodes: readonly string[]): boolean {
    return permissionCodes.some(permissionCode => this.hasPermission(permissionCode))
  }

  /**
   * Checks whether the user has all of the specified permission codes.
   *
   * Проверяет, есть ли у пользователя все указанные права доступа.
   * @param permissionCodes List of permission codes / Список кодов прав доступа
   * @returns True if all permissions are granted / True, если назначены все права
   */
  hasAllPermissions(permissionCodes: readonly string[]): boolean {
    return permissionCodes.every(permissionCode => this.hasPermission(permissionCode))
  }

  /**
   * Checks whether this user record exists in the database.
   *
   * Проверяет наличие записи этого пользователя в базе данных.
   * @param includeDeleted Include soft-deleted users / Учитывать ли мягко удалённых пользователей
   * @returns True if user record exists in the database / True, если запись пользователя существует в базе данных
   */
  override async exists(includeDeleted: boolean = false): Promise<boolean> {
    return hasCmsRecord(
      this.databaseInstance.get(),
      users,
      CmsUserItem.getByIdCondition(this.data.id, includeDeleted)
    )
  }

  /**
   * Returns a cloned snapshot of the user record with roles and their permissions.
   *
   * Возвращает копию данных пользователя вместе с ролями и их правами доступа.
   * @returns User data with roles and permissions / Данные пользователя с ролями и правами доступа
   */
  override getData(): CmsUserWithRoles {
    return {
      ...super.getData(),
      metadata: { ...this.data.metadata },
      roles: this.cloneRoles(this.data.roles)
    }
  }

  /**
   * Returns the user's email address.
   *
   * Возвращает адрес электронной почты пользователя.
   * @returns User email / Электронная почта пользователя
   */
  getEmail(): string {
    return this.data.email
  }

  /**
   * Returns the user's unique username.
   *
   * Возвращает уникальный логин пользователя.
   * @returns Username or null / Логин пользователя или null
   */
  getUsername(): string | null {
    return this.data.username
  }

  /**
   * Returns the user's first name.
   *
   * Возвращает имя пользователя.
   * @returns First name / Имя пользователя
   */
  getFirstName(): string {
    return this.data.firstName
  }

  /**
   * Returns the user's last name.
   *
   * Возвращает фамилию пользователя.
   * @returns Last name or null / Фамилия пользователя или null
   */
  getLastName(): string | null {
    return this.data.lastName
  }

  /**
   * Returns the user's middle name or patronymic.
   *
   * Возвращает отчество или второе имя пользователя.
   * @returns Middle name or null / Отчество пользователя или null
   */
  getMiddleName(): string | null {
    return this.data.middleName
  }

  /**
   * Returns the user's international phone number (E.164 digits without +).
   *
   * Возвращает международный номер телефона пользователя (цифры E.164 без +).
   * @returns Phone number or null / Номер телефона или null
   */
  getPhone(): number | null {
    return this.data.phone
  }

  /**
   * Returns the user's avatar URL or identifier.
   *
   * Возвращает ссылку или идентификатор аватара пользователя.
   * @returns Avatar string or null / Аватар или null
   */
  getAvatar(): string | null {
    return this.data.avatar
  }

  /**
   * Returns the user's biography or position description.
   *
   * Возвращает описание профиля или должность пользователя.
   * @returns Biography string or null / Описание или null
   */
  getBio(): string | null {
    return this.data.bio
  }

  /**
   * Returns the user's account status.
   *
   * Возвращает статус учётной записи пользователя.
   * @returns Account status / Статус учётной записи
   */
  getStatus(): CmsUserStatus {
    return this.data.status
  }

  /**
   * Returns a shallow copy of the user's metadata.
   *
   * Возвращает копию метаданных пользователя.
   * @returns User metadata / Метаданные пользователя
   */
  getMetadata(): CmsUserMetadata {
    return { ...this.data.metadata }
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
   * Returns a copy of the user's currently assigned roles with their permissions.
   *
   * Возвращает копию текущих назначенных ролей пользователя с их правами доступа.
   * @returns List of assigned roles with permissions / Список назначенных ролей с правами доступа
   */
  getRoles(): CmsRoleWithPermissions[] {
    return this.cloneRoles(this.data.roles)
  }

  /**
   * Returns assigned roles wrapped in CmsRoleItem instances.
   *
   * Возвращает назначенные роли пользователя в виде экземпляров CmsRoleItem.
   * @returns List of CmsRoleItem instances / Список экземпляров CmsRoleItem
   */
  getRoleItems(): CmsRoleItem[] {
    return this.data.roles.map(
      roleRecord => new CmsRoleItem(
        {
          ...roleRecord,
          permissions: [...roleRecord.permissions]
        },
        this.databaseInstance
      )
    )
  }

  /**
   * Returns a deduplicated list of all permissions granted to this user across assigned roles.
   *
   * Возвращает уникальный список всех прав доступа пользователя, объединённых по его ролям.
   * @returns Deduplicated list of permissions ordered by ID / Уникальный список прав доступа, отсортированный по ID
   */
  getPermissions(): CmsPermission[] {
    const permissionsById = new Map<number, CmsPermission>()

    for (const roleRecord of this.data.roles) {
      for (const permissionRecord of roleRecord.permissions) {
        if (!permissionsById.has(permissionRecord.id)) {
          permissionsById.set(permissionRecord.id, { ...permissionRecord })
        }
      }
    }

    return Array.from(permissionsById.values()).sort(
      (firstPermission, secondPermission) => firstPermission.id - secondPermission.id
    )
  }

  /**
   * Returns deduplicated user permissions wrapped in CmsPermissionItem instances.
   *
   * Возвращает уникальные права доступа пользователя в виде экземпляров CmsPermissionItem.
   * @returns List of CmsPermissionItem instances / Список экземпляров CmsPermissionItem
   */
  getPermissionItems(): CmsPermissionItem[] {
    return this.getPermissions().map(
      permissionRecord => new CmsPermissionItem(permissionRecord, this.databaseInstance)
    )
  }

  /**
   * Replaces all roles assigned to this user using role identifiers.
   *
   * Полностью заменяет роли этого пользователя по списку идентификаторов ролей.
   * @param roleIds Role identifiers to assign / Идентификаторы ролей для назначения
   * @returns Updated list of assigned roles with permissions / Обновлённый список назначенных ролей с правами доступа
   */
  async setRoles(roleIds: readonly number[]): Promise<CmsRoleWithPermissions[]> {
    return this.replaceRoles('setRoles', roleIds)
  }

  /**
   * Replaces all roles assigned to this user using role codes.
   *
   * Полностью заменяет роли этого пользователя по списку кодов ролей.
   * @param roleCodes Role codes to assign / Коды ролей для назначения
   * @returns Updated list of assigned roles with permissions / Обновлённый список назначенных ролей с правами доступа
   */
  async setRolesByCode(roleCodes: readonly string[]): Promise<CmsRoleWithPermissions[]> {
    return this.replaceRoles('setRoles', undefined, roleCodes)
  }

  /**
   * Updates only the account status of this user.
   *
   * Обновляет статус учётной записи этого пользователя.
   * @param status New account status / Новый статус учётной записи
   * @returns Current user item / Текущий экземпляр пользователя
   */
  async setStatus(status: CmsUserStatus): Promise<this> {
    return this.update({ status })
  }

  /**
   * Assigns additional roles to this user by ID without removing existing ones.
   *
   * Добавляет этому пользователю дополнительные роли по ID без удаления уже назначенных.
   * @param roleIds Role identifiers to add / Идентификаторы добавляемых ролей
   * @returns Updated list of assigned roles with permissions / Обновлённый список назначенных ролей с правами доступа
   */
  async addRoles(roleIds: readonly number[]): Promise<CmsRoleWithPermissions[]> {
    return this.assignRoles('addRoles', roleIds)
  }

  /**
   * Assigns additional roles to this user by code without removing existing ones.
   *
   * Добавляет этому пользователю дополнительные роли по кодам без удаления уже назначенных.
   * @param roleCodes Role codes to add / Коды добавляемых ролей
   * @returns Updated list of assigned roles with permissions / Обновлённый список назначенных ролей с правами доступа
   */
  async addRolesByCode(roleCodes: readonly string[]): Promise<CmsRoleWithPermissions[]> {
    return this.assignRoles('addRoles', undefined, roleCodes)
  }

  /**
   * Removes specific roles from this user by identifier.
   *
   * Удаляет указанные роли у этого пользователя по идентификаторам.
   * @param roleIds Role identifiers to remove / Идентификаторы удаляемых ролей
   * @returns Updated list of remaining assigned roles with permissions / Обновлённый список оставшихся ролей с правами доступа
   */
  async removeRoles(roleIds: readonly number[]): Promise<CmsRoleWithPermissions[]> {
    return this.unassignRoles('removeRoles', roleIds)
  }

  /**
   * Removes specific roles from this user by code.
   *
   * Удаляет указанные роли у этого пользователя по кодам.
   * @param roleCodes Role codes to remove / Коды удаляемых ролей
   * @returns Updated list of remaining assigned roles with permissions / Обновлённый список оставшихся ролей с правами доступа
   */
  async removeRolesByCode(roleCodes: readonly string[]): Promise<CmsRoleWithPermissions[]> {
    return this.unassignRoles('removeRoles', undefined, roleCodes)
  }

  /**
   * Updates this user's fields and optionally replaces assigned roles.
   *
   * Редактирует поля этого пользователя и при необходимости обновляет его роли.
   * @param input User fields and optional role assignments / Данные пользователя и необязательный список ролей
   * @returns Current user item / Текущий экземпляр пользователя
   */
  override async update(input: CmsUserUpdateInput): Promise<this> {
    const userId = this.data.id
    CmsVerification.isPositiveInteger(userId)

    try {
      const updatedRecord = await this.databaseInstance.get().transaction(async (transaction) => {
        const existingUser = await findOneCmsRecord<CmsUserPublic>(
          transaction,
          users,
          and(eq(users.id, userId), CmsUserItem.getNotDeletedCondition()),
          USER_PUBLIC_COLUMNS
        )
        if (!existingUser) {
          return undefined
        }

        const updateValues = CmsUserItem.buildUpdateValues(
          input,
          existingUser.metadata
        )
        const updatedRows = await transaction
          .update(users)
          .set(this.timestamp.buildUpdateValues(updateValues))
          .where(eq(users.id, userId))
          .returning(USER_PUBLIC_COLUMNS)

        const updatedUser = updatedRows[0] ?? existingUser

        if (input.roleIds !== undefined || input.roleCodes !== undefined) {
          const resolvedRoleIds = await CmsRoleItem.resolveIds(
            transaction,
            input.roleIds,
            input.roleCodes
          )
          await CmsUserItem.syncUserRoles(transaction, userId, resolvedRoleIds)
        }

        const rolesList = await CmsRoleItem.fetchByUserId(transaction, userId)

        return {
          ...updatedUser,
          roles: rolesList
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
   * Deletes this user either softly (setting metadata.deletedAt) or permanently from the database.
   *
   * Удаляет этого пользователя: мягко (устанавливая metadata.deletedAt) или безвозвратно из базы данных.
   * @param options Deletion options / Параметры удаления
   * @returns True if deleted / True, если пользователь был удалён
   */
  override async delete(options: CmsUserDeleteOptions = {}): Promise<boolean> {
    const userId = this.data.id
    CmsVerification.isPositiveInteger(userId)

    const database = this.databaseInstance.get()

    try {
      if (options.hard) {
        return await super.delete()
      }

      return await database.transaction(async (transaction) => {
        const existingUser = await findOneCmsRecord<{
          id: number
          metadata: CmsUserMetadata
        }>(
          transaction,
          users,
          and(eq(users.id, userId), CmsUserItem.getNotDeletedCondition()),
          {
            id: users.id,
            metadata: users.metadata
          }
        )
        if (!existingUser) {
          return false
        }

        const updatedAt = new Date()
        const nextMetadata: CmsUserMetadata = {
          ...existingUser.metadata,
          deletedAt: updatedAt.toISOString()
        }

        await transaction
          .update(users)
          .set({
            metadata: nextMetadata,
            updatedAt
          })
          .where(eq(users.id, userId))

        this.data = {
          ...this.data,
          metadata: nextMetadata,
          updatedAt
        }

        return true
      })
    } catch (error) {
      return this.handleError('delete', error)
    }
  }

  /**
   * Reloads this user's data, assigned roles, and role permissions from the database.
   *
   * Перезагружает данные, назначенные роли и права доступа этого пользователя из базы данных.
   * @param includeDeleted Include soft-deleted state / Учитывать ли мягко удалённую запись
   * @returns Current user item instance / Текущий экземпляр пользователя
   */
  override async reload(includeDeleted: boolean = false): Promise<this> {
    const userId = this.data.id
    CmsVerification.isPositiveInteger(userId)

    const foundRecord = await this.fetchById(userId, includeDeleted)
    if (foundRecord) {
      this.data = foundRecord
    }

    return this
  }

  /**
   * Restores this user if soft-deleted by clearing metadata.deletedAt.
   *
   * Восстанавливает этого пользователя после мягкого удаления, очищая metadata.deletedAt.
   * @returns Restored user item or undefined if not found / Восстановленный экземпляр пользователя или undefined, если не найден
   */
  async restore(): Promise<this | undefined> {
    const userId = this.data.id
    CmsVerification.isPositiveInteger(userId)

    try {
      const restoredRecord = await this.databaseInstance.get().transaction(async (transaction) => {
        const existingUser = await findOneCmsRecord<CmsUserPublic>(
          transaction,
          users,
          eq(users.id, userId),
          USER_PUBLIC_COLUMNS
        )
        if (!existingUser) {
          return undefined
        }

        let currentUser = existingUser
        if (isString(existingUser.metadata?.deletedAt) && existingUser.metadata.deletedAt.trim().length > 0) {
          const nextMetadata: CmsUserMetadata = { ...existingUser.metadata }
          delete nextMetadata.deletedAt

          const restoredRows = await transaction
            .update(users)
            .set({
              metadata: nextMetadata,
              updatedAt: new Date()
            })
            .where(eq(users.id, userId))
            .returning(USER_PUBLIC_COLUMNS)

          currentUser = restoredRows[0] ?? existingUser
        }

        const rolesList = await CmsRoleItem.fetchByUserId(transaction, userId)

        return {
          ...currentUser,
          roles: rolesList
        }
      })

      if (!restoredRecord) {
        return undefined
      }

      this.data = restoredRecord
      return this
    } catch (error) {
      return this.handleError('restore', error)
    }
  }

  /**
   * Loads the latest user snapshot together with assigned roles and permissions by ID.
   *
   * Загружает актуальное состояние пользователя вместе с назначенными ролями и правами доступа по ID.
   * @param id User identifier / Идентификатор пользователя
   * @param includeDeleted Include soft-deleted state / Учитывать ли мягко удалённую запись
   * @returns User record with roles or undefined / Запись пользователя с ролями или undefined
   */
  protected override async fetchById(
    id: number,
    includeDeleted: boolean = false
  ): Promise<CmsUserWithRoles | undefined> {
    const conditions: SQL[] = [eq(users.id, id)]
    if (!includeDeleted) {
      conditions.push(CmsUserItem.getNotDeletedCondition())
    }

    return CmsUserItem.findOneWithRoles(
      this.databaseInstance.get(),
      and(...conditions)
    )
  }

  /**
   * Replaces all roles on this user in a transaction and synchronizes local snapshot.
   *
   * Полностью заменяет роли пользователя в транзакции и синхронизирует локальное состояние.
   * @param errorCode Error code on failure / Код ошибки при сбое
   * @param roleIds Optional list of role IDs / Необязательный список ID ролей
   * @param roleCodes Optional list of role codes / Необязательный список кодов ролей
   * @returns Updated list of assigned roles with permissions / Обновлённый список назначенных ролей с правами доступа
   */
  protected async replaceRoles(
    errorCode: string,
    roleIds?: readonly number[],
    roleCodes?: readonly string[]
  ): Promise<CmsRoleWithPermissions[]> {
    const userId = this.data.id

    try {
      const rolesList = await this.databaseInstance.get().transaction(async (transaction) => {
        await CmsUserItem.ensureUserExists(transaction, userId)
        const resolvedIds = await CmsRoleItem.resolveIds(
          transaction,
          roleIds,
          roleCodes
        )
        await CmsUserItem.syncUserRoles(transaction, userId, resolvedIds)

        return CmsRoleItem.fetchByUserId(transaction, userId)
      })

      this.data = {
        ...this.data,
        roles: rolesList
      }

      return this.cloneRoles(rolesList)
    } catch (error) {
      return this.handleError(errorCode, error)
    }
  }

  /**
   * Adds roles to this user in a transaction without removing existing ones.
   *
   * Добавляет роли пользователю в транзакции без удаления существующих.
   * @param errorCode Error code on failure / Код ошибки при сбое
   * @param roleIds Optional list of role IDs / Необязательный список ID ролей
   * @param roleCodes Optional list of role codes / Необязательный список кодов ролей
   * @returns Updated list of assigned roles with permissions / Обновлённый список назначенных ролей с правами доступа
   */
  protected async assignRoles(
    errorCode: string,
    roleIds?: readonly number[],
    roleCodes?: readonly string[]
  ): Promise<CmsRoleWithPermissions[]> {
    const userId = this.data.id

    try {
      const rolesList = await this.databaseInstance.get().transaction(async (transaction) => {
        await CmsUserItem.ensureUserExists(transaction, userId)
        const resolvedIds = await CmsRoleItem.resolveIds(
          transaction,
          roleIds,
          roleCodes
        )

        if (resolvedIds.length > 0) {
          await transaction
            .insert(userRoles)
            .values(resolvedIds.map(roleId => ({ userId, roleId })))
            .onConflictDoNothing({
              target: [userRoles.userId, userRoles.roleId]
            })
        }

        return CmsRoleItem.fetchByUserId(transaction, userId)
      })

      this.data = {
        ...this.data,
        roles: rolesList
      }

      return this.cloneRoles(rolesList)
    } catch (error) {
      return this.handleError(errorCode, error)
    }
  }

  /**
   * Removes specified roles from this user in a transaction.
   *
   * Удаляет указанные роли у пользователя в транзакции.
   * @param errorCode Error code on failure / Код ошибки при сбое
   * @param roleIds Optional list of role IDs / Необязательный список ID ролей
   * @param roleCodes Optional list of role codes / Необязательный список кодов ролей
   * @returns Updated list of remaining assigned roles with permissions / Обновлённый список оставшихся ролей с правами доступа
   */
  protected async unassignRoles(
    errorCode: string,
    roleIds?: readonly number[],
    roleCodes?: readonly string[]
  ): Promise<CmsRoleWithPermissions[]> {
    const userId = this.data.id

    try {
      const rolesList = await this.databaseInstance.get().transaction(async (transaction) => {
        await CmsUserItem.ensureUserExists(transaction, userId)

        const targetIds: number[] = []

        if (roleIds !== undefined) {
          targetIds.push(
            ...uniqueArray(roleIds).filter(roleId => isPositiveInteger(roleId))
          )
        }

        if (roleCodes !== undefined) {
          const uniqueCodes = uniqueArray(
            roleCodes
              .filter(isString)
              .map(code => code.trim())
              .filter(code => code.length > 0)
          )

          if (uniqueCodes.length > 0) {
            const matchedRoles = await transaction
              .select({ id: roles.id })
              .from(roles)
              .where(inArray(roles.code, uniqueCodes))

            targetIds.push(...matchedRoles.map(roleRecord => roleRecord.id))
          }
        }

        const uniqueTargetIds = uniqueArray(targetIds)
        if (uniqueTargetIds.length > 0) {
          await transaction
            .delete(userRoles)
            .where(and(
              eq(userRoles.userId, userId),
              inArray(userRoles.roleId, uniqueTargetIds)
            ))
        }

        return CmsRoleItem.fetchByUserId(transaction, userId)
      })

      this.data = {
        ...this.data,
        roles: rolesList
      }

      return this.cloneRoles(rolesList)
    } catch (error) {
      return this.handleError(errorCode, error)
    }
  }

  /**
   * Returns a shallow clone of a roles list with cloned permissions arrays.
   *
   * Возвращает копию списка ролей с копиями массивов их прав доступа.
   * @param rolesList Source list of roles with permissions / Исходный список ролей с правами доступа
   * @returns Cloned list of roles with permissions / Клонированный список ролей с правами доступа
   */
  protected cloneRoles(rolesList: readonly CmsRoleWithPermissions[]): CmsRoleWithPermissions[] {
    return rolesList.map(roleRecord => ({
      ...roleRecord,
      permissions: [...roleRecord.permissions]
    }))
  }

  /**
   * Returns public user table column projection excluding passwordHash.
   *
   * Возвращает проекцию публичных колонок таблицы пользователей без passwordHash.
   * @returns Public column mapping / Объект публичных колонок
   */
  static getPublicColumns(): typeof USER_PUBLIC_COLUMNS {
    return USER_PUBLIC_COLUMNS
  }

  /**
   * Returns SQL condition matching users that have not been soft-deleted.
   *
   * Возвращает SQL-условие для выборки пользователей, не помеченных как мягко удалённые.
   * @returns Drizzle SQL predicate / Предикат Drizzle SQL
   */
  static getNotDeletedCondition(): SQL {
    return sql`(${users.metadata}->>'deletedAt' IS NULL OR ${users.metadata}->>'deletedAt' = '')`
  }

  /**
   * Builds a SQL condition matching a user by identifier with optional soft-delete exclusion.
   *
   * Формирует SQL-условие поиска пользователя по идентификатору с учётом исключения мягко удалённых записей.
   * @param id User identifier / Идентификатор пользователя
   * @param includeDeleted Include soft-deleted users / Учитывать ли мягко удалённых пользователей
   * @returns SQL condition or undefined when identifier is invalid / SQL-условие или undefined при невалидном идентификаторе
   */
  static getByIdCondition(
    id: number,
    includeDeleted: boolean = false
  ): SQL | undefined {
    if (!isPositiveInteger(id)) {
      return undefined
    }

    return includeDeleted
      ? eq(users.id, id)
      : and(eq(users.id, id), CmsUserItem.getNotDeletedCondition())
  }

  /**
   * Builds and validates database insert payload from create input.
   *
   * Формирует и валидирует объект вставки в базу данных из входных данных создания.
   * @param input User creation payload / Входные данные для создания пользователя
   * @returns Validated Drizzle insert payload / Валидированные данные для вставки
   */
  static buildCreateValues(
    input: CmsUserCreateInput
  ): CmsNewUser {
    const email = CmsUserItem.normalizeEmail(input.email)
    const firstName = CmsUserItem.normalizeFirstName(input.firstName)
    const username = toOptionalText(input.username)
    const phone = CmsUserItem.normalizePhone(input.phone)
    const metadata = CmsUserItem.normalizeMetadata(input.metadata)

    return {
      email,
      firstName,
      username,
      phone,
      lastName: toOptionalText(input.lastName),
      middleName: toOptionalText(input.middleName),
      avatar: toOptionalText(input.avatar),
      bio: toOptionalText(input.bio),
      passwordHash: input.passwordHash,
      status: input.status ?? 'active',
      emailVerifiedAt: input.emailVerifiedAt,
      phoneVerifiedAt: input.phoneVerifiedAt,
      twoFactorEnabled: input.twoFactorEnabled ?? false,
      lastLoginAt: input.lastLoginAt,
      metadata,
      createdOrigin: toOptionalText(input.createdOrigin)
    }
  }

  /**
   * Builds and validates database update payload from partial update input.
   *
   * Формирует и валидирует объект обновления в базе данных из входных данных редактирования.
   * @param input Partial user update payload / Частичные данные для обновления пользователя
   * @param currentMetadata Current stored metadata / Текущие сохранённые метаданные пользователя
   * @returns Validated partial Drizzle update payload / Валидированные поля для обновления
   */
  static buildUpdateValues(
    input: CmsUserUpdateInput,
    currentMetadata: CmsUserMetadata
  ): Partial<CmsNewUser> {
    const values: Partial<CmsNewUser> = {}

    if (input.email !== undefined) {
      values.email = CmsUserItem.normalizeEmail(input.email)
    }

    if (input.firstName !== undefined) {
      values.firstName = CmsUserItem.normalizeFirstName(input.firstName)
    }

    if (input.username !== undefined) {
      values.username = toOptionalText(input.username)
    }

    if (input.phone !== undefined) {
      values.phone = CmsUserItem.normalizePhone(input.phone)
    }

    if (input.lastName !== undefined) {
      values.lastName = toOptionalText(input.lastName)
    }

    if (input.middleName !== undefined) {
      values.middleName = toOptionalText(input.middleName)
    }

    if (input.avatar !== undefined) {
      values.avatar = toOptionalText(input.avatar)
    }

    if (input.bio !== undefined) {
      values.bio = toOptionalText(input.bio)
    }

    if (input.passwordHash !== undefined) {
      values.passwordHash = input.passwordHash
    }

    if (input.status !== undefined) {
      values.status = input.status
    }

    if (input.emailVerifiedAt !== undefined) {
      values.emailVerifiedAt = input.emailVerifiedAt
    }

    if (input.phoneVerifiedAt !== undefined) {
      values.phoneVerifiedAt = input.phoneVerifiedAt
    }

    if (input.twoFactorEnabled !== undefined) {
      values.twoFactorEnabled = input.twoFactorEnabled
    }

    if (input.lastLoginAt !== undefined) {
      values.lastLoginAt = input.lastLoginAt
    }

    if (input.metadata !== undefined) {
      values.metadata = CmsUserItem.normalizeMetadata(input.metadata, currentMetadata)
    }

    if (input.createdOrigin !== undefined) {
      values.createdOrigin = toOptionalText(input.createdOrigin)
    }

    return values
  }

  /**
   * Finds a single public user record matching a SQL predicate and attaches its roles with permissions.
   *
   * Находит одну публичную запись пользователя по SQL-предикату и прикрепляет её роли с правами доступа.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param whereCondition SQL predicate / SQL-условие поиска
   * @returns User record with roles and permissions or undefined / Запись пользователя с ролями и правами доступа или undefined
   */
  static async findOneWithRoles(
    executor: CmsDbExecutor,
    whereCondition: SQL | undefined
  ): Promise<CmsUserWithRoles | undefined> {
    const userRecord = await findOneCmsRecord<CmsUserPublic>(
      executor,
      users,
      whereCondition,
      USER_PUBLIC_COLUMNS
    )
    if (!userRecord) {
      return undefined
    }

    const rolesList = await CmsRoleItem.fetchByUserId(executor, userRecord.id)

    return {
      ...userRecord,
      roles: rolesList
    }
  }

  /**
   * Ensures a non-deleted user with the given identifier exists or reports an error.
   *
   * Проверяет наличие не удалённого пользователя с указанным идентификатором или регистрирует ошибку.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param userId User identifier / Идентификатор пользователя
   */
  static async ensureUserExists(
    executor: CmsDbExecutor,
    userId: number
  ): Promise<void> {
    if (!isPositiveInteger(userId)) {
      ErrorCenterThrow.on({
        group: CMS_USER_ERROR_GROUP,
        code: 'notFound',
        details: { userId }
      })
    }

    const foundUser = await findOneCmsRecord<{ id: number }>(
      executor,
      users,
      and(eq(users.id, userId), CmsUserItem.getNotDeletedCondition()),
      { id: users.id }
    )

    if (!foundUser) {
      ErrorCenterThrow.on({
        group: CMS_USER_ERROR_GROUP,
        code: 'notFound',
        details: { userId }
      })
    }
  }

  /**
   * Synchronizes user role assignments by replacing existing links with the provided role IDs.
   *
   * Синхронизирует связи ролей пользователя, заменяя текущие назначения на переданный список ID ролей.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param userId User identifier / Идентификатор пользователя
   * @param roleIds Verified role identifiers / Проверенные идентификаторы ролей
   */
  static async syncUserRoles(
    executor: CmsDbExecutor,
    userId: number,
    roleIds: readonly number[]
  ): Promise<void> {
    await executor
      .delete(userRoles)
      .where(eq(userRoles.userId, userId))

    if (roleIds.length === 0) {
      return
    }

    await executor
      .insert(userRoles)
      .values(roleIds.map(roleId => ({ userId, roleId })))
      .onConflictDoNothing({
        target: [userRoles.userId, userRoles.roleId]
      })
  }

  /**
   * Normalizes and validates an email address.
   *
   * Нормализует и проверяет адрес электронной почты.
   * @param email Raw email input / Исходный адрес электронной почты
   * @returns Normalized lowercase email / Нормализованный email в нижнем регистре
   */
  static normalizeEmail(
    email: string
  ): string {
    const normalized = isString(email) ? email.trim().toLowerCase() : ''
    const emailParts = normalized.split('@')

    if (
      normalized.length === 0
      || emailParts.length !== 2
      || emailParts[0].length === 0
      || emailParts[1].length === 0
      || /\s/.test(normalized)
    ) {
      ErrorCenterThrow.on({
        group: CMS_USER_ERROR_GROUP,
        code: 'invalidEmail',
        details: { email }
      })
    }

    return normalized
  }

  /**
   * Normalizes and validates a user's first name.
   *
   * Нормализует и проверяет имя пользователя.
   * @param firstName Raw first name input / Исходное имя пользователя
   * @returns Trimmed first name / Очищенное имя пользователя
   */
  static normalizeFirstName(
    firstName: string
  ): string {
    const normalized = isString(firstName) ? firstName.trim() : ''

    if (normalized.length === 0) {
      ErrorCenterThrow.on({
        group: CMS_USER_ERROR_GROUP,
        code: 'invalidFirstName',
        details: { firstName }
      })
    }

    return normalized
  }

  /**
   * Normalizes and validates an international phone number (digits only, E.164 without +).
   *
   * Нормализует и проверяет международный номер телефона (только цифры, E.164 без +).
   * @param phone Raw phone number or null / Исходный номер телефона, null или undefined
   * @returns Validated phone number, null, or undefined / Проверенный номер телефона, null или undefined
   */
  static normalizePhone(
    phone: number | null | undefined
  ): number | null | undefined {
    if (phone === undefined) {
      return undefined
    }

    if (isNull(phone)) {
      return null
    }

    if (!Number.isSafeInteger(phone) || phone <= 0) {
      ErrorCenterThrow.on({
        group: CMS_USER_ERROR_GROUP,
        code: 'invalidPhone',
        details: { phone }
      })
    }

    return phone
  }

  /**
   * Sanitizes and optionally merges user metadata while ignoring prototype pollution keys and undefined overrides.
   *
   * Очищает и при необходимости объединяет метаданные пользователя, игнорируя опасные ключи прототипа и значения undefined.
   * @param metadata Incoming metadata object / Входящий объект метаданных
   * @param baseMetadata Optional existing metadata to merge with / Необязательные текущие метаданные для слияния
   * @returns Safe metadata object / Безопасный объект метаданных
   */
  static normalizeMetadata(
    metadata?: CmsUserMetadata,
    baseMetadata?: CmsUserMetadata
  ): CmsUserMetadata {
    const result: CmsUserMetadata = {}

    if (isObjectNotArray(baseMetadata)) {
      for (const [key, value] of Object.entries(baseMetadata)) {
        if (!FORBIDDEN_METADATA_KEYS.has(key) && value !== undefined) {
          result[key] = value
        }
      }
    }

    if (isObjectNotArray(metadata)) {
      for (const [key, value] of Object.entries(metadata)) {
        if (!FORBIDDEN_METADATA_KEYS.has(key) && value !== undefined) {
          result[key] = value
        }
      }
    }

    return result
  }
}
