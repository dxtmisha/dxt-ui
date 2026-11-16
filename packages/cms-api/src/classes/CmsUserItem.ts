import {
  and,
  asc,
  eq,
  getTableColumns,
  inArray,
  sql,
  type SQL
} from 'drizzle-orm'
import {
  isNull,
  isObjectNotArray,
  isString,
  uniqueArray,
  type ErrorCenterInstance
} from '@dxtmisha/functional-basic'

import { roles } from '../media/schema/roles'
import { userRoles } from '../media/schema/userRoles'
import { users } from '../media/schema/users'
import { CmsDbAbstract } from './CmsDbAbstract'
import type { CmsDbInstance } from './CmsDbInstance'
import type {
  CmsNewUser,
  CmsRole,
  CmsUserMetadata,
  CmsUserStatus
} from '../types/cmsDbTypes'
import type {
  CmsDbExecutor,
  CmsUserCreateInput,
  CmsUserDeleteOptions,
  CmsUserUpdateInput,
  CmsUserWithRoles
} from '../types/cmsUserTypes'

/** Keys ignored during metadata sanitization / Ключи, игнорируемые при очистке метаданных */
const FORBIDDEN_METADATA_KEYS = new Set(['__proto__', 'constructor', 'prototype'])

/** Public user table columns excluding password hash / Публичные колонки таблицы пользователей без хэша пароля */
const { passwordHash: _passwordHash, ...USER_PUBLIC_COLUMNS } = /* #__PURE__ */ getTableColumns(users)

/**
 * Represents a single CMS user entity and provides instance-level methods for reading, editing, role management, deletion, and restoration.
 *
 * Представляет конкретного пользователя CMS и предоставляет методы для чтения полей, редактирования, управления ролями, удаления и восстановления.
 */
export class CmsUserItem extends CmsDbAbstract {
  /**
   * Initializes a user entity wrapper with user data, database instance manager, and error center.
   *
   * Инициализирует обёртку конкретного пользователя с его данными, менеджером БД и центром ошибок.
   * @param data User record with assigned roles / Запись пользователя с назначенными ролями
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   */
  constructor(
    protected data: CmsUserWithRoles,
    databaseInstance?: CmsDbInstance,
    errorCenter?: ErrorCenterInstance
  ) {
    super(databaseInstance, errorCenter)
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
   * Returns the user identifier.
   *
   * Возвращает идентификатор пользователя.
   * @returns User identifier / Идентификатор пользователя
   */
  getId(): number {
    return this.data.id
  }

  /**
   * Returns a cloned snapshot of the user record with roles.
   *
   * Возвращает копию данных пользователя вместе с ролями.
   * @returns User data with roles / Данные пользователя с ролями
   */
  getData(): CmsUserWithRoles {
    return {
      ...this.data,
      metadata: { ...this.data.metadata },
      roles: [...this.data.roles]
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
   * Returns a copy of the user's currently assigned roles.
   *
   * Возвращает копию текущих назначенных ролей пользователя.
   * @returns List of assigned roles / Список назначенных ролей
   */
  getRoles(): CmsRole[] {
    return [...this.data.roles]
  }

  /**
   * Replaces all roles assigned to this user using role identifiers.
   *
   * Полностью заменяет роли этого пользователя по списку идентификаторов ролей.
   * @param roleIds Role identifiers to assign / Идентификаторы ролей для назначения
   * @returns Updated list of assigned roles / Обновлённый список назначенных ролей
   */
  async setRoles(roleIds: readonly number[]): Promise<CmsRole[]> {
    const userId = this.data.id

    try {
      const rolesList = await this.getDatabase().transaction(async (transaction) => {
        await CmsUserItem.ensureUserExists(transaction, this.errorCenter, userId)
        const resolvedIds = await CmsUserItem.resolveRoleIds(transaction, this.errorCenter, roleIds)
        await CmsUserItem.syncUserRoles(transaction, userId, resolvedIds)

        return CmsUserItem.fetchRolesByUserId(transaction, userId)
      })

      this.data = {
        ...this.data,
        roles: rolesList
      }

      return [...rolesList]
    } catch (error) {
      return this.handleTransactionError(
        'userSetRoles',
        'Failed to set CMS user roles.',
        error
      )
    }
  }

  /**
   * Replaces all roles assigned to this user using role codes.
   *
   * Полностью заменяет роли этого пользователя по списку кодов ролей.
   * @param roleCodes Role codes to assign / Коды ролей для назначения
   * @returns Updated list of assigned roles / Обновлённый список назначенных ролей
   */
  async setRolesByCode(roleCodes: readonly string[]): Promise<CmsRole[]> {
    const userId = this.data.id

    try {
      const rolesList = await this.getDatabase().transaction(async (transaction) => {
        await CmsUserItem.ensureUserExists(transaction, this.errorCenter, userId)
        const resolvedIds = await CmsUserItem.resolveRoleIds(
          transaction,
          this.errorCenter,
          undefined,
          roleCodes
        )
        await CmsUserItem.syncUserRoles(transaction, userId, resolvedIds)

        return CmsUserItem.fetchRolesByUserId(transaction, userId)
      })

      this.data = {
        ...this.data,
        roles: rolesList
      }

      return [...rolesList]
    } catch (error) {
      return this.handleTransactionError(
        'userSetRoles',
        'Failed to set CMS user roles by code.',
        error
      )
    }
  }

  /**
   * Updates only the account status of this user.
   *
   * Обновляет статус учётной записи этого пользователя.
   * @param status New account status / Новый статус учётной записи
   * @returns Updated user item or undefined if not found / Обновлённый экземпляр пользователя или undefined, если не найден
   */
  async setStatus(status: CmsUserStatus): Promise<this | undefined> {
    return this.update({ status })
  }

  /**
   * Assigns additional roles to this user without removing existing ones.
   *
   * Добавляет этому пользователю дополнительные роли без удаления уже назначенных.
   * @param roleIds Role identifiers to add / Идентификаторы добавляемых ролей
   * @returns Updated list of assigned roles / Обновлённый список назначенных ролей
   */
  async addRoles(roleIds: readonly number[]): Promise<CmsRole[]> {
    const userId = this.data.id

    try {
      const rolesList = await this.getDatabase().transaction(async (transaction) => {
        await CmsUserItem.ensureUserExists(transaction, this.errorCenter, userId)
        const resolvedIds = await CmsUserItem.resolveRoleIds(transaction, this.errorCenter, roleIds)

        if (resolvedIds.length > 0) {
          await transaction
            .insert(userRoles)
            .values(resolvedIds.map(roleId => ({ userId, roleId })))
            .onConflictDoNothing({
              target: [userRoles.userId, userRoles.roleId]
            })
        }

        return CmsUserItem.fetchRolesByUserId(transaction, userId)
      })

      this.data = {
        ...this.data,
        roles: rolesList
      }

      return [...rolesList]
    } catch (error) {
      return this.handleTransactionError(
        'userAddRoles',
        'Failed to add CMS user roles.',
        error
      )
    }
  }

  /**
   * Removes specific roles from this user.
   *
   * Удаляет указанные роли у этого пользователя.
   * @param roleIds Role identifiers to remove / Идентификаторы удаляемых ролей
   * @returns Updated list of remaining assigned roles / Обновлённый список оставшихся ролей
   */
  async removeRoles(roleIds: readonly number[]): Promise<CmsRole[]> {
    const userId = this.data.id

    try {
      const rolesList = await this.getDatabase().transaction(async (transaction) => {
        await CmsUserItem.ensureUserExists(transaction, this.errorCenter, userId)
        const uniqueIds = uniqueArray(roleIds).filter(roleId => CmsUserItem.isValidId(roleId))

        if (uniqueIds.length > 0) {
          await transaction
            .delete(userRoles)
            .where(and(
              eq(userRoles.userId, userId),
              inArray(userRoles.roleId, uniqueIds)
            ))
        }

        return CmsUserItem.fetchRolesByUserId(transaction, userId)
      })

      this.data = {
        ...this.data,
        roles: rolesList
      }

      return [...rolesList]
    } catch (error) {
      return this.handleTransactionError(
        'userRemoveRoles',
        'Failed to remove CMS user roles.',
        error
      )
    }
  }

  /**
   * Updates this user's fields and optionally replaces assigned roles.
   *
   * Редактирует поля этого пользователя и при необходимости обновляет его роли.
   * @param input User fields and optional role assignments / Данные пользователя и необязательный список ролей
   * @returns Updated user item or undefined if not found or soft-deleted / Обновлённый экземпляр пользователя или undefined, если не найден или удалён
   */
  async update(input: CmsUserUpdateInput): Promise<this | undefined> {
    const userId = this.data.id
    if (!CmsUserItem.isValidId(userId)) {
      return undefined
    }

    try {
      const updatedRecord = await this.getDatabase().transaction(async (transaction) => {
        const existingRows = await transaction
          .select(USER_PUBLIC_COLUMNS)
          .from(users)
          .where(and(eq(users.id, userId), CmsUserItem.getNotDeletedCondition()))
          .limit(1)

        const existingUser = existingRows[0]
        if (!existingUser) {
          return undefined
        }

        const updateValues = CmsUserItem.buildUpdateValues(
          input,
          existingUser.metadata,
          this.errorCenter
        )
        const updatedRows = await transaction
          .update(users)
          .set({
            ...updateValues,
            updatedAt: new Date()
          })
          .where(eq(users.id, userId))
          .returning(USER_PUBLIC_COLUMNS)

        const updatedUser = updatedRows[0] ?? existingUser

        if (input.roleIds !== undefined || input.roleCodes !== undefined) {
          const resolvedRoleIds = await CmsUserItem.resolveRoleIds(
            transaction,
            this.errorCenter,
            input.roleIds,
            input.roleCodes
          )
          await CmsUserItem.syncUserRoles(transaction, userId, resolvedRoleIds)
        }

        const rolesList = await CmsUserItem.fetchRolesByUserId(transaction, userId)

        return {
          ...updatedUser,
          roles: rolesList
        }
      })

      if (!updatedRecord) {
        return undefined
      }

      this.data = updatedRecord
      return this
    } catch (error) {
      return this.handleTransactionError(
        'userUpdate',
        'Failed to update CMS user.',
        error
      )
    }
  }

  /**
   * Deletes this user either softly (setting metadata.deletedAt) or permanently from the database.
   *
   * Удаляет этого пользователя: мягко (устанавливая metadata.deletedAt) или безвозвратно из базы данных.
   * @param options Deletion options / Параметры удаления
   * @returns True if deleted / True, если пользователь был удалён
   */
  async delete(options: CmsUserDeleteOptions = {}): Promise<boolean> {
    const userId = this.data.id
    if (!CmsUserItem.isValidId(userId)) {
      return false
    }

    const database = this.getDatabase()

    try {
      if (options.hard) {
        const deletedRows = await database
          .delete(users)
          .where(eq(users.id, userId))
          .returning({ id: users.id })

        return deletedRows.length > 0
      }

      return await database.transaction(async (transaction) => {
        const existingRows = await transaction
          .select({
            id: users.id,
            metadata: users.metadata
          })
          .from(users)
          .where(and(eq(users.id, userId), CmsUserItem.getNotDeletedCondition()))
          .limit(1)

        const existingUser = existingRows[0]
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
      return this.handleTransactionError(
        'userDelete',
        'Failed to delete CMS user.',
        error
      )
    }
  }

  /**
   * Reloads this user's data and assigned roles from the database.
   *
   * Перезагружает данные и назначенные роли этого пользователя из базы данных.
   * @param includeDeleted Include soft-deleted state / Учитывать ли мягко удалённую запись
   * @returns Reloaded user item or undefined if missing / Обновлённый экземпляр пользователя или undefined, если не найден
   */
  async reload(includeDeleted: boolean = false): Promise<this | undefined> {
    const userId = this.data.id
    if (!CmsUserItem.isValidId(userId)) {
      return undefined
    }

    const conditions: SQL[] = [eq(users.id, userId)]
    if (!includeDeleted) {
      conditions.push(CmsUserItem.getNotDeletedCondition())
    }

    const foundRecord = await CmsUserItem.findOneWithRoles(
      this.getDatabase(),
      and(...conditions)
    )

    if (!foundRecord) {
      return undefined
    }

    this.data = foundRecord
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
    if (!CmsUserItem.isValidId(userId)) {
      return undefined
    }

    try {
      const restoredRecord = await this.getDatabase().transaction(async (transaction) => {
        const existingRows = await transaction
          .select(USER_PUBLIC_COLUMNS)
          .from(users)
          .where(eq(users.id, userId))
          .limit(1)

        const existingUser = existingRows[0]
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

        const rolesList = await CmsUserItem.fetchRolesByUserId(transaction, userId)

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
      return this.handleTransactionError(
        'userRestore',
        'Failed to restore CMS user.',
        error
      )
    }
  }

  /**
   * Returns a plain JSON-serializable snapshot of the user record.
   *
   * Возвращает обычный объект данных пользователя для сериализации в JSON.
   * @returns User record with roles / Запись пользователя с ролями
   */
  toJSON(): CmsUserWithRoles {
    return this.getData()
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
   * Builds and validates database insert payload from create input.
   *
   * Формирует и валидирует объект вставки в базу данных из входных данных создания.
   * @param input User creation payload / Входные данные для создания пользователя
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @returns Validated Drizzle insert payload / Валидированные данные для вставки
   */
  static buildCreateValues(
    input: CmsUserCreateInput,
    errorCenter: ErrorCenterInstance
  ): CmsNewUser {
    const email = CmsUserItem.normalizeEmail(input.email, errorCenter)
    const firstName = CmsUserItem.normalizeFirstName(input.firstName, errorCenter)
    const username = CmsUserItem.normalizeOptionalText(input.username)
    const phone = CmsUserItem.normalizePhone(input.phone, errorCenter)
    const metadata = CmsUserItem.normalizeMetadata(input.metadata)

    return {
      email,
      firstName,
      username,
      phone,
      lastName: CmsUserItem.normalizeOptionalText(input.lastName),
      middleName: CmsUserItem.normalizeOptionalText(input.middleName),
      avatar: CmsUserItem.normalizeOptionalText(input.avatar),
      bio: CmsUserItem.normalizeOptionalText(input.bio),
      passwordHash: input.passwordHash,
      status: input.status ?? 'active',
      emailVerifiedAt: input.emailVerifiedAt,
      phoneVerifiedAt: input.phoneVerifiedAt,
      twoFactorEnabled: input.twoFactorEnabled ?? false,
      lastLoginAt: input.lastLoginAt,
      metadata
    }
  }

  /**
   * Builds and validates database update payload from partial update input.
   *
   * Формирует и валидирует объект обновления в базе данных из входных данных редактирования.
   * @param input Partial user update payload / Частичные данные для обновления пользователя
   * @param currentMetadata Current stored metadata / Текущие сохранённые метаданные пользователя
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @returns Validated partial Drizzle update payload / Валидированные поля для обновления
   */
  static buildUpdateValues(
    input: CmsUserUpdateInput,
    currentMetadata: CmsUserMetadata,
    errorCenter: ErrorCenterInstance
  ): Partial<CmsNewUser> {
    const values: Partial<CmsNewUser> = {}

    if (input.email !== undefined) {
      values.email = CmsUserItem.normalizeEmail(input.email, errorCenter)
    }

    if (input.firstName !== undefined) {
      values.firstName = CmsUserItem.normalizeFirstName(input.firstName, errorCenter)
    }

    if (input.username !== undefined) {
      values.username = CmsUserItem.normalizeOptionalText(input.username)
    }

    if (input.phone !== undefined) {
      values.phone = CmsUserItem.normalizePhone(input.phone, errorCenter)
    }

    if (input.lastName !== undefined) {
      values.lastName = CmsUserItem.normalizeOptionalText(input.lastName)
    }

    if (input.middleName !== undefined) {
      values.middleName = CmsUserItem.normalizeOptionalText(input.middleName)
    }

    if (input.avatar !== undefined) {
      values.avatar = CmsUserItem.normalizeOptionalText(input.avatar)
    }

    if (input.bio !== undefined) {
      values.bio = CmsUserItem.normalizeOptionalText(input.bio)
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

    return values
  }

  /**
   * Finds a single public user record matching a SQL predicate and attaches its roles.
   *
   * Находит одну публичную запись пользователя по SQL-предикату и прикрепляет её роли.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param whereCondition SQL predicate / SQL-условие поиска
   * @returns User record with roles or undefined / Запись пользователя с ролями или undefined
   */
  static async findOneWithRoles(
    executor: CmsDbExecutor,
    whereCondition: SQL | undefined
  ): Promise<CmsUserWithRoles | undefined> {
    if (!whereCondition) {
      return undefined
    }

    const foundRows = await executor
      .select(USER_PUBLIC_COLUMNS)
      .from(users)
      .where(whereCondition)
      .limit(1)

    const userRecord = foundRows[0]
    if (!userRecord) {
      return undefined
    }

    const rolesList = await CmsUserItem.fetchRolesByUserId(executor, userRecord.id)

    return {
      ...userRecord,
      roles: rolesList
    }
  }

  /**
   * Queries all roles assigned to a specific user ordered by role ID.
   *
   * Запрашивает все роли, назначенные конкретному пользователю, с сортировкой по ID роли.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param userId User identifier / Идентификатор пользователя
   * @returns List of assigned roles / Список назначенных ролей
   */
  static async fetchRolesByUserId(
    executor: CmsDbExecutor,
    userId: number
  ): Promise<CmsRole[]> {
    const rows = await executor
      .select({ role: roles })
      .from(userRoles)
      .innerJoin(roles, eq(userRoles.roleId, roles.id))
      .where(eq(userRoles.userId, userId))
      .orderBy(asc(roles.id))

    return rows.map(row => row.role)
  }

  /**
   * Ensures a non-deleted user with the given identifier exists or reports an error.
   *
   * Проверяет наличие не удалённого пользователя с указанным идентификатором или регистрирует ошибку.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @param userId User identifier / Идентификатор пользователя
   */
  static async ensureUserExists(
    executor: CmsDbExecutor,
    errorCenter: ErrorCenterInstance,
    userId: number
  ): Promise<void> {
    if (!CmsUserItem.isValidId(userId)) {
      CmsUserItem.reportError(
        errorCenter,
        'userNotFound',
        `CMS user with ID ${String(userId)} was not found.`,
        { userId }
      )
    }

    const foundRows = await executor
      .select({ id: users.id })
      .from(users)
      .where(and(eq(users.id, userId), CmsUserItem.getNotDeletedCondition()))
      .limit(1)

    if (foundRows.length === 0) {
      CmsUserItem.reportError(
        errorCenter,
        'userNotFound',
        `CMS user with ID ${userId} was not found.`,
        { userId }
      )
    }
  }

  /**
   * Resolves and validates role identifiers from role IDs and/or role codes.
   *
   * Разрешает и валидирует идентификаторы ролей из переданных ID и/или кодов ролей.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @param roleIds Optional list of role IDs / Необязательный список ID ролей
   * @param roleCodes Optional list of role codes / Необязательный список кодов ролей
   * @returns Deduplicated list of verified role IDs / Уникальный список проверенных ID ролей
   */
  static async resolveRoleIds(
    executor: CmsDbExecutor,
    errorCenter: ErrorCenterInstance,
    roleIds?: readonly number[],
    roleCodes?: readonly string[]
  ): Promise<number[]> {
    const resolvedIds: number[] = []

    if (roleIds !== undefined) {
      const uniqueIds = uniqueArray(roleIds)
      for (const roleId of uniqueIds) {
        if (!CmsUserItem.isValidId(roleId)) {
          CmsUserItem.reportError(
            errorCenter,
            'roleNotFound',
            `Invalid CMS role ID: ${String(roleId)}.`,
            { roleId }
          )
        }
      }

      if (uniqueIds.length > 0) {
        const persistedByIds = await executor
          .select({ id: roles.id })
          .from(roles)
          .where(inArray(roles.id, uniqueIds))

        const foundIdSet = new Set(persistedByIds.map(roleRecord => roleRecord.id))
        const missingIds = uniqueIds.filter(roleId => !foundIdSet.has(roleId))

        if (missingIds.length > 0) {
          CmsUserItem.reportError(
            errorCenter,
            'roleNotFound',
            `CMS roles not found for IDs: ${missingIds.join(', ')}.`,
            { missingIds }
          )
        }

        resolvedIds.push(...uniqueIds)
      }
    }

    if (roleCodes !== undefined) {
      const uniqueCodes = uniqueArray(
        roleCodes
          .map(code => code.trim())
          .filter(code => code.length > 0)
      )

      if (uniqueCodes.length > 0) {
        const persistedByCodes = await executor
          .select({ id: roles.id, code: roles.code })
          .from(roles)
          .where(inArray(roles.code, uniqueCodes))

        const idByCode = new Map(persistedByCodes.map(roleRecord => [roleRecord.code, roleRecord.id]))
        const missingCodes = uniqueCodes.filter(code => !idByCode.has(code))

        if (missingCodes.length > 0) {
          CmsUserItem.reportError(
            errorCenter,
            'roleNotFound',
            `CMS roles not found for codes: ${missingCodes.join(', ')}.`,
            { missingCodes }
          )
        }

        for (const code of uniqueCodes) {
          const roleId = idByCode.get(code)
          if (roleId !== undefined) {
            resolvedIds.push(roleId)
          }
        }
      }
    }

    return uniqueArray(resolvedIds)
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
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @returns Normalized lowercase email / Нормализованный email в нижнем регистре
   */
  static normalizeEmail(
    email: string,
    errorCenter: ErrorCenterInstance
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
      CmsUserItem.reportError(errorCenter, 'userInvalidEmail', 'Valid user email is required.', { email })
    }

    return normalized
  }

  /**
   * Normalizes and validates a user's first name.
   *
   * Нормализует и проверяет имя пользователя.
   * @param firstName Raw first name input / Исходное имя пользователя
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @returns Trimmed first name / Очищенное имя пользователя
   */
  static normalizeFirstName(
    firstName: string,
    errorCenter: ErrorCenterInstance
  ): string {
    const normalized = isString(firstName) ? firstName.trim() : ''

    if (normalized.length === 0) {
      CmsUserItem.reportError(errorCenter, 'userInvalidFirstName', 'User firstName is required.', { firstName })
    }

    return normalized
  }

  /**
   * Normalizes optional string fields, converting blank strings to null.
   *
   * Нормализует необязательные строковые поля, преобразуя пустые строки в null.
   * @param value Raw optional string or null / Исходная строка, null или undefined
   * @returns Trimmed string, null, or undefined / Очищенная строка, null или undefined
   */
  static normalizeOptionalText(value?: string | null): string | null | undefined {
    if (value === undefined) {
      return undefined
    }

    if (isNull(value)) {
      return null
    }

    const trimmed = value.trim()
    return trimmed.length > 0 ? trimmed : null
  }

  /**
   * Normalizes and validates an international phone number (digits only, E.164 without +).
   *
   * Нормализует и проверяет международный номер телефона (только цифры, E.164 без +).
   * @param phone Raw phone number or null / Исходный номер телефона, null или undefined
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @returns Validated phone number, null, or undefined / Проверенный номер телефона, null или undefined
   */
  static normalizePhone(
    phone: number | null | undefined,
    errorCenter: ErrorCenterInstance
  ): number | null | undefined {
    if (phone === undefined) {
      return undefined
    }

    if (isNull(phone)) {
      return null
    }

    if (!Number.isSafeInteger(phone) || phone <= 0) {
      CmsUserItem.reportError(
        errorCenter,
        'userInvalidPhone',
        'Phone must be a positive integer in E.164 digits format.',
        { phone }
      )
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
