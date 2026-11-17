import {
  and,
  desc,
  eq,
  ilike,
  inArray,
  or,
  sql,
  type SQL
} from 'drizzle-orm'
import {
  isArray,
  isPositiveInteger,
  isString,
  uniqueArray
} from '@dxtmisha/functional-basic'

import { escapeCmsSearchPattern } from '../functions/escapeCmsSearchPattern'
import { normalizeCmsLimit } from '../functions/normalizeCmsLimit'
import { normalizeCmsOffset } from '../functions/normalizeCmsOffset'
import { permissions } from '../media/schema/permissions'
import { rolePermissions } from '../media/schema/rolePermissions'
import { roles } from '../media/schema/roles'
import { userRoles } from '../media/schema/userRoles'
import { users } from '../media/schema/users'
import { CmsDbAbstract } from './CmsDbAbstract'
import { CmsPermissionManager } from './CmsPermissionManager'
import { CmsRoleItem } from './CmsRoleItem'
import { CmsRoleManager } from './CmsRoleManager'
import { CmsUserItem } from './CmsUserItem'
import type { CmsDbInstance } from './CmsDbInstance'
import type { CmsErrorInstance } from './CmsErrorInstance'
import type {
  CmsDbExecutor,
  CmsUserStatus
} from '../types/cmsDbTypes'
import type { CmsRoleWithPermissions } from '../types/cmsRoleTypes'
import type {
  CmsUserCreateInput,
  CmsUserDeleteOptions,
  CmsUserListOptions,
  CmsUserListResult,
  CmsUserPublic,
  CmsUserUpdateInput,
  CmsUserWithRoles
} from '../types/cmsUserTypes'

/**
 * Manages CMS user collections: querying lists, searching, creating, and wrapping user records into CmsUserItem instances with integrated role and permission managers.
 *
 * Класс для управления списком пользователей CMS: поиск и фильтрация списков, создание записей и оборачивание пользователей в экземпляры CmsUserItem с интеграцией менеджеров ролей и прав доступа.
 */
export class CmsUserManager extends CmsDbAbstract<typeof users> {
  /** Cached role manager sharing the same database and error center / Кэшированный менеджер ролей с общими настройками БД и центра ошибок */
  protected roleManager?: CmsRoleManager

  /** Cached permission manager sharing the same database and error center / Кэшированный менеджер прав доступа с общими настройками БД и центра ошибок */
  protected permissionManager?: CmsPermissionManager

  /**
   * Initializes the user manager with a CmsDbInstance and error handler.
   *
   * Инициализирует менеджер пользователей с экземпляром CmsDbInstance и обработчиком ошибок.
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   * @param error CMS error instance handler / Обработчик ошибок CMS
   */
  constructor(
    databaseInstance?: CmsDbInstance,
    error?: CmsErrorInstance
  ) {
    super(users, databaseInstance, error)
  }

  /**
   * Checks whether a user exists by identifier.
   *
   * Проверяет существование пользователя по идентификатору.
   * @param id User identifier / Идентификатор пользователя
   * @param includeDeleted Include soft-deleted users / Учитывать ли мягко удалённых пользователей
   * @returns True if user exists / True, если пользователь существует
   */
  async hasById(
    id: number,
    includeDeleted: boolean = false
  ): Promise<boolean> {
    return this.existsRecordById(
      id,
      includeDeleted ? undefined : CmsUserItem.getNotDeletedCondition()
    )
  }

  /**
   * Checks whether a user exists by email address.
   *
   * Проверяет существование пользователя по адресу электронной почты.
   * @param email User email address / Электронная почта пользователя
   * @param includeDeleted Include soft-deleted users / Учитывать ли мягко удалённых пользователей
   * @returns True if user exists / True, если пользователь существует
   */
  async hasByEmail(
    email: string,
    includeDeleted: boolean = false
  ): Promise<boolean> {
    const trimmedEmail = isString(email) ? email.trim().toLowerCase() : ''
    if (trimmedEmail.length === 0) {
      return false
    }

    const conditions: SQL[] = [eq(users.email, trimmedEmail)]
    if (!includeDeleted) {
      conditions.push(CmsUserItem.getNotDeletedCondition())
    }

    const found = await this.getDatabase()
      .select({ id: users.id })
      .from(users)
      .where(and(...conditions))
      .limit(1)

    return found.length > 0
  }

  /**
   * Returns a CmsRoleManager configured with the same database instance and error center.
   *
   * Возвращает экземпляр CmsRoleManager с теми же настройками базы данных и центра ошибок.
   * @returns CmsRoleManager instance / Экземпляр CmsRoleManager
   */
  getRoleManager(): CmsRoleManager {
    if (!this.roleManager) {
      this.roleManager = new CmsRoleManager(this.databaseInstance, this.error)
    }

    return this.roleManager
  }

  /**
   * Returns a CmsPermissionManager configured with the same database instance and error center.
   *
   * Возвращает экземпляр CmsPermissionManager с теми же настройками базы данных и центра ошибок.
   * @returns CmsPermissionManager instance / Экземпляр CmsPermissionManager
   */
  getPermissionManager(): CmsPermissionManager {
    if (!this.permissionManager) {
      this.permissionManager = new CmsPermissionManager(this.databaseInstance, this.error)
    }

    return this.permissionManager
  }

  /**
   * Finds a user wrapped in CmsUserItem by identifier.
   *
   * Находит пользователя в обёртке CmsUserItem по идентификатору.
   * @param id User identifier / Идентификатор пользователя
   * @param includeDeleted Include soft-deleted users / Учитывать ли мягко удалённых пользователей
   * @returns CmsUserItem instance or undefined / Экземпляр CmsUserItem или undefined
   */
  async getById(
    id: number,
    includeDeleted: boolean = false
  ): Promise<CmsUserItem | undefined> {
    if (!isPositiveInteger(id)) {
      return undefined
    }

    const conditions: SQL[] = [eq(users.id, id)]
    if (!includeDeleted) {
      conditions.push(CmsUserItem.getNotDeletedCondition())
    }

    const foundRecord = await CmsUserItem.findOneWithRoles(
      this.getDatabase(),
      and(...conditions)
    )

    return foundRecord ? this.wrapUserItem(foundRecord) : undefined
  }

  /**
   * Finds a user wrapped in CmsUserItem by email address.
   *
   * Находит пользователя в обёртке CmsUserItem по адресу электронной почты.
   * @param email User email address / Электронная почта пользователя
   * @param includeDeleted Include soft-deleted users / Учитывать ли мягко удалённых пользователей
   * @returns CmsUserItem instance or undefined / Экземпляр CmsUserItem или undefined
   */
  async getByEmail(
    email: string,
    includeDeleted: boolean = false
  ): Promise<CmsUserItem | undefined> {
    const trimmedEmail = isString(email) ? email.trim().toLowerCase() : ''
    if (trimmedEmail.length === 0) {
      return undefined
    }

    const conditions: SQL[] = [eq(users.email, trimmedEmail)]
    if (!includeDeleted) {
      conditions.push(CmsUserItem.getNotDeletedCondition())
    }

    const foundRecord = await CmsUserItem.findOneWithRoles(
      this.getDatabase(),
      and(...conditions)
    )

    return foundRecord ? this.wrapUserItem(foundRecord) : undefined
  }

  /**
   * Finds a user wrapped in CmsUserItem by username.
   *
   * Находит пользователя в обёртке CmsUserItem по логину.
   * @param username Unique username / Уникальный логин пользователя
   * @param includeDeleted Include soft-deleted users / Учитывать ли мягко удалённых пользователей
   * @returns CmsUserItem instance or undefined / Экземпляр CmsUserItem или undefined
   */
  async getByUsername(
    username: string,
    includeDeleted: boolean = false
  ): Promise<CmsUserItem | undefined> {
    const trimmedUsername = isString(username) ? username.trim() : ''
    if (trimmedUsername.length === 0) {
      return undefined
    }

    const conditions: SQL[] = [eq(users.username, trimmedUsername)]
    if (!includeDeleted) {
      conditions.push(CmsUserItem.getNotDeletedCondition())
    }

    const foundRecord = await CmsUserItem.findOneWithRoles(
      this.getDatabase(),
      and(...conditions)
    )

    return foundRecord ? this.wrapUserItem(foundRecord) : undefined
  }

  /**
   * Returns a paginated and filtered list of users wrapped in CmsUserItem instances.
   *
   * Возвращает постраничный отфильтрованный список пользователей в обёртках CmsUserItem.
   * @param options Filtering and pagination options / Параметры фильтрации и пагинации
   * @returns Paginated CmsUserItem list and total count / Список CmsUserItem и общее количество записей
   */
  async getList(options: CmsUserListOptions = {}): Promise<CmsUserListResult> {
    const database = this.getDatabase()
    const limit = normalizeCmsLimit(options.limit)
    const offset = normalizeCmsOffset(options.offset)
    const whereCondition = this.buildListWhere(options)

    const total = await this.countRecords(whereCondition)
    if (total === 0) {
      return {
        items: [],
        total: 0,
        limit,
        offset
      }
    }

    const userRows = await database
      .select(CmsUserItem.getPublicColumns())
      .from(users)
      .where(whereCondition)
      .orderBy(desc(users.createdAt), desc(users.id))
      .limit(limit)
      .offset(offset)

    const items = await this.attachRoles(database, userRows)

    return {
      items,
      total,
      limit,
      offset
    }
  }

  /**
   * Sets or overrides the CmsDbInstance wrapper and propagates it to child role and permission managers.
   *
   * Устанавливает или заменяет экземпляр CmsDbInstance и передаёт его дочерним менеджерам ролей и прав доступа.
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   * @returns Current instance for chaining / Текущий экземпляр для цепочки вызовов
   */
  override setDatabaseInstance(databaseInstance: CmsDbInstance): this {
    super.setDatabaseInstance(databaseInstance)
    this.roleManager?.setDatabaseInstance(databaseInstance)
    this.permissionManager?.setDatabaseInstance(databaseInstance)
    return this
  }

  /**
   * Sets or overrides the CmsErrorInstance handler and propagates it to child role and permission managers.
   *
   * Устанавливает или заменяет обработчик ошибок CmsErrorInstance и передаёт его дочерним менеджерам ролей и прав доступа.
   * @param error CMS error instance handler / Обработчик ошибок CMS
   * @returns Current instance for chaining / Текущий экземпляр для цепочки вызовов
   */
  override setError(error: CmsErrorInstance): this {
    super.setError(error)
    this.roleManager?.setError(error)
    this.permissionManager?.setError(error)
    return this
  }

  /**
   * Updates an existing non-deleted user by ID and returns the updated CmsUserItem.
   *
   * Редактирует существующего не удалённого пользователя по ID и возвращает обновлённый CmsUserItem.
   * @param id User identifier / Идентификатор пользователя
   * @param input User fields and optional role assignments / Данные пользователя и необязательный список ролей
   * @returns Updated CmsUserItem or undefined if not found / Обновлённый экземпляр CmsUserItem или undefined, если не найден
   */
  async update(
    id: number,
    input: CmsUserUpdateInput
  ): Promise<CmsUserItem | undefined> {
    const userItem = await this.getById(id)
    if (!userItem) {
      return undefined
    }

    return userItem.update(input)
  }

  /**
   * Creates a new CMS user, optionally assigns roles in a transaction, and wraps it in CmsUserItem.
   *
   * Создаёт нового пользователя CMS, при необходимости назначает роли в транзакции и возвращает экземпляр CmsUserItem.
   * @param input New user payload / Данные нового пользователя
   * @returns Created CmsUserItem instance / Созданный экземпляр CmsUserItem
   */
  async create(input: CmsUserCreateInput): Promise<CmsUserItem> {
    const createValues = CmsUserItem.buildCreateValues(input, this.error)

    try {
      const createdRecord = await this.getDatabase().transaction(async (transaction) => {
        const insertedRows = await transaction
          .insert(users)
          .values(createValues)
          .returning(CmsUserItem.getPublicColumns())

        const createdUser = insertedRows[0]
        if (!createdUser) {
          this.error.report('cms-user', 'create')
        }

        let assignedRoles: CmsRoleWithPermissions[] = []
        if (input.roleIds !== undefined || input.roleCodes !== undefined) {
          const resolvedRoleIds = await CmsRoleItem.resolveIds(
            transaction,
            input.roleIds,
            input.roleCodes
          )
          await CmsUserItem.syncUserRoles(transaction, createdUser.id, resolvedRoleIds)
          assignedRoles = await CmsRoleItem.fetchByUserId(transaction, createdUser.id)
        }

        return {
          ...createdUser,
          roles: assignedRoles
        }
      })

      return this.wrapUserItem(createdRecord)
    } catch (error) {
      return this.error.handleTransaction('cms-user', 'create', error)
    }
  }

  /**
   * Deletes a user by ID either softly or permanently from the database.
   *
   * Удаляет пользователя по ID: мягко или безвозвратно из базы данных.
   * @param id User identifier / Идентификатор пользователя
   * @param options Deletion options / Параметры удаления
   * @returns True if a user was deleted / True, если пользователь был удалён
   */
  async delete(
    id: number,
    options: CmsUserDeleteOptions = {}
  ): Promise<boolean> {
    const userItem = await this.getById(id, Boolean(options.hard))
    if (!userItem) {
      return false
    }

    return userItem.delete(options)
  }

  /**
   * Restores a soft-deleted user by ID and returns the restored CmsUserItem.
   *
   * Восстанавливает мягко удалённого пользователя по ID и возвращает экземпляр CmsUserItem.
   * @param id User identifier / Идентификатор пользователя
   * @returns Restored CmsUserItem or undefined / Восстановленный экземпляр CmsUserItem или undefined
   */
  async restore(id: number): Promise<CmsUserItem | undefined> {
    const userItem = await this.getById(id, true)
    if (!userItem) {
      return undefined
    }

    return userItem.restore()
  }

  /**
   * Wraps a plain user record with roles into a CmsUserItem instance.
   *
   * Оборачивает запись пользователя с ролями в экземпляр CmsUserItem.
   * @param userRecord User record with assigned roles and permissions / Запись пользователя с назначенными ролями и правами доступа
   * @returns Wrapped CmsUserItem instance / Экземпляр CmsUserItem
   */
  protected wrapUserItem(userRecord: CmsUserWithRoles): CmsUserItem {
    return new CmsUserItem(userRecord, this.databaseInstance, this.error)
  }

  /**
   * Builds WHERE clause for user list queries.
   *
   * Формирует условие WHERE для запросов списка пользователей.
   * @param options Filtering options / Параметры фильтрации
   * @returns Combined SQL predicate or undefined / Объединённый SQL-предикат или undefined
   */
  protected buildListWhere(options: CmsUserListOptions): SQL | undefined {
    const conditions: SQL[] = []

    if (!options.includeDeleted) {
      conditions.push(CmsUserItem.getNotDeletedCondition())
    }

    if (isString(options.search)) {
      const trimmedSearch = options.search.trim()
      if (trimmedSearch.length > 0) {
        const pattern = `%${escapeCmsSearchPattern(trimmedSearch)}%`
        const searchPredicate = or(
          ilike(users.email, pattern),
          ilike(users.username, pattern),
          ilike(users.firstName, pattern),
          ilike(users.lastName, pattern),
          ilike(users.middleName, pattern)
        )
        if (searchPredicate) {
          conditions.push(searchPredicate)
        }
      }
    }

    if (options.status !== undefined) {
      if (isString(options.status)) {
        conditions.push(eq(users.status, options.status))
      } else if (isArray(options.status)) {
        const statusList = uniqueArray<CmsUserStatus>(options.status)
        if (statusList.length > 0) {
          conditions.push(inArray(users.status, statusList))
        }
      }
    }

    if (options.roleId !== undefined) {
      if (!isPositiveInteger(options.roleId)) {
        conditions.push(sql`false`)
      } else {
        const roleSubquery = this.getDatabase()
          .select({ userId: userRoles.userId })
          .from(userRoles)
          .where(eq(userRoles.roleId, options.roleId))
        conditions.push(inArray(users.id, roleSubquery))
      }
    }

    if (isString(options.roleCode)) {
      const trimmedRoleCode = options.roleCode.trim()
      if (trimmedRoleCode.length > 0) {
        const roleCodeSubquery = this.getDatabase()
          .select({ userId: userRoles.userId })
          .from(userRoles)
          .innerJoin(roles, eq(userRoles.roleId, roles.id))
          .where(eq(roles.code, trimmedRoleCode))
        conditions.push(inArray(users.id, roleCodeSubquery))
      }
    }

    if (options.permissionId !== undefined) {
      if (!isPositiveInteger(options.permissionId)) {
        conditions.push(sql`false`)
      } else {
        const permissionSubquery = this.getDatabase()
          .select({ userId: userRoles.userId })
          .from(userRoles)
          .innerJoin(rolePermissions, eq(userRoles.roleId, rolePermissions.roleId))
          .where(eq(rolePermissions.permissionId, options.permissionId))
        conditions.push(inArray(users.id, permissionSubquery))
      }
    }

    if (isString(options.permissionCode)) {
      const trimmedPermissionCode = options.permissionCode.trim()
      if (trimmedPermissionCode.length > 0) {
        const permissionCodeSubquery = this.getDatabase()
          .select({ userId: userRoles.userId })
          .from(userRoles)
          .innerJoin(rolePermissions, eq(userRoles.roleId, rolePermissions.roleId))
          .innerJoin(permissions, eq(rolePermissions.permissionId, permissions.id))
          .where(eq(permissions.code, trimmedPermissionCode))
        conditions.push(inArray(users.id, permissionCodeSubquery))
      }
    }

    return conditions.length > 0 ? and(...conditions) : undefined
  }

  /**
   * Attaches assigned roles and permissions to a list of public user records in batch queries and wraps each in CmsUserItem.
   *
   * Загружает и прикрепляет назначенные роли с правами доступа к списку пользователей пакетными запросами и оборачивает каждую запись в CmsUserItem.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param usersList List of public user records / Список публичных записей пользователей
   * @returns List of CmsUserItem instances / Список экземпляров CmsUserItem
   */
  protected async attachRoles(
    executor: CmsDbExecutor,
    usersList: readonly CmsUserPublic[]
  ): Promise<CmsUserItem[]> {
    if (usersList.length === 0) {
      return []
    }

    const rolesByUserId = await CmsRoleItem.fetchByUserIds(
      executor,
      usersList.map(userRecord => userRecord.id)
    )

    return usersList.map(userRecord => this.wrapUserItem({
      ...userRecord,
      roles: rolesByUserId.get(userRecord.id) ?? []
    }))
  }
}
