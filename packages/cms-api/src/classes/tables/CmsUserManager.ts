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
  ErrorCenterThrow,
  isArray,
  isString,
  uniqueArray
} from '@dxtmisha/functional-basic'

import { escapeCmsSearchPattern } from '../../functions/escapeCmsSearchPattern'
import { findRecords } from '../../functions/db/findRecords'
import { hasRecord } from '../../functions/db/hasRecord'
import { CMS_USER_ERROR_GROUP } from '../../media/errors/cmsUserErrorCauseList'
import { permissions } from '../../media/schema/permissions'
import { rolePermissions } from '../../media/schema/rolePermissions'
import { roles } from '../../media/schema/roles'
import { userRoles } from '../../media/schema/userRoles'
import { users } from '../../media/schema/users'
import { CmsDbManagerAbstract } from '../abstract/CmsDbManagerAbstract'
import { CmsPermissionManager } from './CmsPermissionManager'
import { CmsRoleItem } from './CmsRoleItem'
import { CmsRoleManager } from './CmsRoleManager'
import { CmsUserItem } from './CmsUserItem'
import { CmsVerification } from '../CmsVerification'
import type { CmsDbInstance } from '../CmsDbInstance'
import type {
  CmsNewUser,
  CmsUserStatus
} from '../../types/cmsDbTypes'
import type { CmsRoleWithPermissions } from '../../types/cmsRoleTypes'
import type {
  CmsUserCreateInput,
  CmsUserDeleteOptions,
  CmsUserListOptions,
  CmsUserPublic,
  CmsUserUpdateInput,
  CmsUserWithRoles
} from '../../types/cmsUserTypes'

/**
 * Manages CMS user collections: querying lists, searching, creating, and wrapping user records into CmsUserItem instances with integrated role and permission managers.
 *
 * Класс для управления списком пользователей CMS: поиск и фильтрация списков, создание записей и оборачивание пользователей в экземпляры CmsUserItem с интеграцией менеджеров ролей и прав доступа.
 */
export class CmsUserManager extends CmsDbManagerAbstract<
  typeof users,
  CmsUserWithRoles,
  CmsUserCreateInput,
  CmsUserUpdateInput,
  CmsUserItem,
  CmsUserListOptions,
  CmsUserPublic
> {
  /** ErrorCenter group name for user errors / Имя группы ошибок ErrorCenter для пользователей */
  protected readonly errorGroup = CMS_USER_ERROR_GROUP

  /** Cached role manager sharing the same database instance / Кэшированный менеджер ролей с общими настройками БД */
  protected roleManager?: CmsRoleManager

  /** Cached permission manager sharing the same database instance / Кэшированный менеджер прав доступа с общими настройками БД */
  protected permissionManager?: CmsPermissionManager

  /**
   * Initializes the user manager with a CmsDbInstance.
   *
   * Инициализирует менеджер пользователей с экземпляром CmsDbInstance.
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  constructor(
    databaseInstance?: CmsDbInstance
  ) {
    super(users, databaseInstance)
  }

  /**
   * Checks whether a user exists by identifier.
   *
   * Проверяет существование пользователя по идентификатору.
   * @param id User identifier / Идентификатор пользователя
   * @param includeDeleted Include soft-deleted users / Учитывать ли мягко удалённых пользователей
   * @returns True if user exists / True, если пользователь существует
   */
  override async hasById(
    id: number,
    includeDeleted: boolean = false
  ): Promise<boolean> {
    return hasRecord(
      this.databaseInstance.get(),
      users,
      CmsUserItem.getByIdCondition(id, includeDeleted)
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

    return hasRecord(
      this.databaseInstance.get(),
      users,
      and(...conditions)
    )
  }

  /**
   * Returns a CmsRoleManager configured with the same database instance.
   *
   * Возвращает экземпляр CmsRoleManager с теми же настройками базы данных.
   * @returns CmsRoleManager instance / Экземпляр CmsRoleManager
   */
  getRoleManager(): CmsRoleManager {
    if (!this.roleManager) {
      this.roleManager = new CmsRoleManager(this.databaseInstance)
    }

    return this.roleManager
  }

  /**
   * Returns a CmsPermissionManager configured with the same database instance.
   *
   * Возвращает экземпляр CmsPermissionManager с теми же настройками базы данных.
   * @returns CmsPermissionManager instance / Экземпляр CmsPermissionManager
   */
  getPermissionManager(): CmsPermissionManager {
    if (!this.permissionManager) {
      this.permissionManager = new CmsPermissionManager(this.databaseInstance)
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
  override async getById(
    id: number,
    includeDeleted: boolean = false
  ): Promise<CmsUserItem | undefined> {
    const idCondition = CmsUserItem.getByIdCondition(id, includeDeleted)
    if (!idCondition) {
      return undefined
    }

    const foundRecord = await this.fetchOneRecord(idCondition)
    if (foundRecord) {
      return this.wrapItem(foundRecord)
    }

    return undefined
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

    const foundRecord = await this.fetchOneRecord(and(...conditions)!)
    if (foundRecord) {
      return this.wrapItem(foundRecord)
    }

    return undefined
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

    const foundRecord = await this.fetchOneRecord(and(...conditions)!)
    if (foundRecord) {
      return this.wrapItem(foundRecord)
    }

    return undefined
  }

  /**
   * Deletes a user by ID either softly or permanently from the database.
   *
   * Удаляет пользователя по ID: мягко или безвозвратно из базы данных.
   * @param id User identifier / Идентификатор пользователя
   * @param options Deletion options / Параметры удаления
   * @returns True if a user was deleted / True, если пользователь был удалён
   */
  override async delete(
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
  protected wrapItem(userRecord: CmsUserWithRoles): CmsUserItem {
    return new CmsUserItem(userRecord, this.databaseInstance)
  }

  /**
   * Builds and validates insert values from user create input.
   *
   * Формирует и валидирует данные для вставки пользователя.
   * @param input New user payload / Данные нового пользователя
   * @returns Validated Drizzle insert payload / Валидированные данные для вставки
   */
  protected prepareCreateValues(input: CmsUserCreateInput): CmsNewUser {
    return CmsUserItem.buildCreateValues(input)
  }

  /**
   * Fetches a single public user record with assigned roles matching a SQL predicate.
   *
   * Загружает одну публичную запись пользователя с назначенными ролями по SQL-условию.
   * @param whereCondition SQL predicate / SQL-условие поиска
   * @returns User record with roles or undefined / Запись пользователя с ролями или undefined
   */
  protected override async fetchOneRecord(whereCondition: SQL): Promise<CmsUserWithRoles | undefined> {
    return CmsUserItem.findOneWithRoles(
      this.databaseInstance.get(),
      whereCondition
    )
  }

  /**
   * Queries non-deleted public user rows by a pre-validated list of user identifiers.
   *
   * Запрашивает публичные строки активных пользователей по проверенному списку идентификаторов.
   * @param validIds Validated positive integer IDs / Проверенные идентификаторы пользователей
   * @returns Public user rows without password hashes / Публичные записи пользователей без хэша пароля
   */
  protected override async selectByIdsRows(validIds: readonly number[]): Promise<CmsUserPublic[]> {
    return findRecords<CmsUserPublic>(
      this.databaseInstance.get(),
      users,
      and(inArray(users.id, validIds), CmsUserItem.getNotDeletedCondition()),
      { select: CmsUserItem.getPublicColumns() }
    )
  }

  /**
   * Queries a paginated slice of public user rows sorted by newest creation time.
   *
   * Запрашивает страницу публичных записей пользователей с сортировкой от новых к старым.
   * @param whereCondition Combined SQL predicate or undefined / Объединённый SQL-предикат или undefined
   * @param limit Applied page limit / Применённый лимит выборки
   * @param offset Applied page offset / Применённое смещение выборки
   * @returns Public user rows without password hashes / Публичные записи пользователей без хэша пароля
   */
  protected override async selectListRows(
    whereCondition: SQL | undefined,
    limit: number,
    offset: number
  ): Promise<CmsUserPublic[]> {
    return findRecords<CmsUserPublic>(
      this.databaseInstance.get(),
      users,
      whereCondition,
      {
        select: CmsUserItem.getPublicColumns(),
        orderBy: [desc(users.createdAt), desc(users.id)],
        limit,
        offset
      }
    )
  }

  /**
   * Attaches roles and permissions to selected public user rows and wraps them into CmsUserItem instances.
   *
   * Прикрепляет роли и права доступа к выбранным строкам пользователей и оборачивает их в экземпляры CmsUserItem.
   * @param rows Selected public user rows / Выбранные публичные строки пользователей
   * @returns List of wrapped CmsUserItem instances / Список экземпляров CmsUserItem
   */
  protected override async resolveListItems(
    rows: readonly CmsUserPublic[]
  ): Promise<CmsUserItem[]> {
    return this.attachRoles(rows)
  }

  /**
   * Creates a user record in a transaction and optionally assigns roles.
   *
   * Создаёт запись пользователя в транзакции и при необходимости назначает роли.
   * @param createValues Validated user insert values / Валидированные поля для вставки пользователя
   * @param input Original user creation payload / Исходные данные создания пользователя
   * @returns Created user record with roles / Созданная запись пользователя с ролями
   */
  protected override async createRecord(
    createValues: Partial<CmsNewUser>,
    input: CmsUserCreateInput
  ): Promise<CmsUserWithRoles> {
    return this.databaseInstance.get().transaction(async (transaction) => {
      const insertedRows = await transaction
        .insert(users)
        .values(createValues as CmsNewUser)
        .returning(CmsUserItem.getPublicColumns())

      const createdUser = insertedRows[0]
      if (!createdUser) {
        ErrorCenterThrow.on({
          group: this.errorGroup,
          code: 'create'
        })
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
  }

  /**
   * Builds SQL filter predicates for user list queries.
   *
   * Формирует массив SQL-условий фильтрации для запросов списка пользователей.
   * @param options Filtering options / Параметры фильтрации
   * @returns Array of SQL predicates / Массив SQL-условий
   */
  protected override buildListConditions(options: CmsUserListOptions): SQL[] {
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

    if (isString(options.createdOrigin)) {
      const trimmedCreatedOrigin = options.createdOrigin.trim()
      if (trimmedCreatedOrigin.length > 0) {
        conditions.push(eq(users.createdOrigin, trimmedCreatedOrigin))
      }
    }

    if (options.roleId !== undefined) {
      if (!CmsVerification.isPositiveInteger(options.roleId, false)) {
        conditions.push(sql`false`)
      } else {
        const roleSubquery = this.databaseInstance.get()
          .select({ userId: userRoles.userId })
          .from(userRoles)
          .where(eq(userRoles.roleId, options.roleId))
        conditions.push(inArray(users.id, roleSubquery))
      }
    }

    if (isString(options.roleCode)) {
      const trimmedRoleCode = options.roleCode.trim()
      if (trimmedRoleCode.length > 0) {
        const roleCodeSubquery = this.databaseInstance.get()
          .select({ userId: userRoles.userId })
          .from(userRoles)
          .innerJoin(roles, eq(userRoles.roleId, roles.id))
          .where(eq(roles.code, trimmedRoleCode))
        conditions.push(inArray(users.id, roleCodeSubquery))
      }
    }

    if (options.permissionId !== undefined) {
      if (!CmsVerification.isPositiveInteger(options.permissionId, false)) {
        conditions.push(sql`false`)
      } else {
        const permissionSubquery = this.databaseInstance.get()
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
        const permissionCodeSubquery = this.databaseInstance.get()
          .select({ userId: userRoles.userId })
          .from(userRoles)
          .innerJoin(rolePermissions, eq(userRoles.roleId, rolePermissions.roleId))
          .innerJoin(permissions, eq(rolePermissions.permissionId, permissions.id))
          .where(eq(permissions.code, trimmedPermissionCode))
        conditions.push(inArray(users.id, permissionCodeSubquery))
      }
    }

    return conditions
  }

  /**
   * Attaches assigned roles and permissions to a list of public user records in batch queries and wraps each in CmsUserItem.
   *
   * Загружает и прикрепляет назначенные роли с правами доступа к списку пользователей пакетными запросами и оборачивает каждую запись в CmsUserItem.
   * @param usersList List of public user records / Список публичных записей пользователей
   * @returns List of CmsUserItem instances / Список экземпляров CmsUserItem
   */
  protected async attachRoles(
    usersList: readonly CmsUserPublic[]
  ): Promise<CmsUserItem[]> {
    if (usersList.length === 0) {
      return []
    }

    const rolesByUserId = await CmsRoleItem.fetchByUserIds(
      this.databaseInstance.get(),
      usersList.map(userRecord => userRecord.id)
    )

    return usersList.map(userRecord => this.wrapItem({
      ...userRecord,
      roles: rolesByUserId.get(userRecord.id) ?? []
    }))
  }
}
