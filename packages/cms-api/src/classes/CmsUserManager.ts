import {
  and,
  asc,
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
  isString,
  uniqueArray,
  type ErrorCenterInstance
} from '@dxtmisha/functional-basic'

import { roles } from '../media/schema/roles'
import { userRoles } from '../media/schema/userRoles'
import { users } from '../media/schema/users'
import { CmsDbAbstract } from './CmsDbAbstract'
import { CmsUserItem } from './CmsUserItem'
import type { CmsDbInstance } from './CmsDbInstance'
import type {
  CmsRole,
  CmsUserStatus
} from '../types/cmsDbTypes'
import type {
  CmsDbExecutor,
  CmsUserCreateInput,
  CmsUserDeleteOptions,
  CmsUserListOptions,
  CmsUserListResult,
  CmsUserPublic,
  CmsUserUpdateInput,
  CmsUserWithRoles
} from '../types/cmsUserTypes'

/** Default number of user records per page / Количество записей пользователей на странице по умолчанию */
const DEFAULT_LIST_LIMIT = 20

/** Maximum allowed number of user records per page / Максимально допустимое количество записей пользователей на странице */
const MAX_LIST_LIMIT = 100

/**
 * Manages CMS user collections: querying lists, searching, creating, and wrapping user records into CmsUserItem instances.
 *
 * Класс для управления списком пользователей CMS: поиск и фильтрация списков, создание записей и оборачивание пользователей в экземпляры CmsUserItem.
 */
export class CmsUserManager extends CmsDbAbstract {
  /**
   * Initializes the user manager with a CmsDbInstance and error center.
   *
   * Инициализирует менеджер пользователей с экземпляром CmsDbInstance и центром ошибок.
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   * @param errorCenter ErrorCenter instance / Экземляр ErrorCenter
   */
  constructor(
    databaseInstance?: CmsDbInstance,
    errorCenter?: ErrorCenterInstance
  ) {
    super(databaseInstance, errorCenter)
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
    if (!CmsUserItem.isValidId(id)) {
      return false
    }

    const conditions: SQL[] = [eq(users.id, id)]
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
    if (!CmsUserItem.isValidId(id)) {
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
    const limit = this.normalizeLimit(options.limit)
    const offset = this.normalizeOffset(options.offset)
    const whereCondition = this.buildListWhere(options)

    const countRows = await database
      .select({ count: sql<number>`count(*)::int` })
      .from(users)
      .where(whereCondition)

    const total = countRows[0]?.count ?? 0
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
    const createValues = CmsUserItem.buildCreateValues(input, this.errorCenter)

    try {
      const createdRecord = await this.getDatabase().transaction(async (transaction) => {
        const insertedRows = await transaction
          .insert(users)
          .values(createValues)
          .returning(CmsUserItem.getPublicColumns())

        const createdUser = insertedRows[0]
        if (!createdUser) {
          this.reportError(
            'userCreate',
            'Failed to create CMS user record.'
          )
        }

        let assignedRoles: CmsRole[] = []
        if (input.roleIds !== undefined || input.roleCodes !== undefined) {
          const resolvedRoleIds = await CmsUserItem.resolveRoleIds(
            transaction,
            this.errorCenter,
            input.roleIds,
            input.roleCodes
          )
          await CmsUserItem.syncUserRoles(transaction, createdUser.id, resolvedRoleIds)
          assignedRoles = await CmsUserItem.fetchRolesByUserId(transaction, createdUser.id)
        }

        return {
          ...createdUser,
          roles: assignedRoles
        }
      })

      return this.wrapUserItem(createdRecord)
    } catch (error) {
      return this.handleTransactionError(
        'userCreate',
        'Failed to create CMS user.',
        error
      )
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
   * @param userRecord User record with assigned roles / Запись пользователя с назначенными ролями
   * @returns Wrapped CmsUserItem instance / Экземпляр CmsUserItem
   */
  protected wrapUserItem(userRecord: CmsUserWithRoles): CmsUserItem {
    return new CmsUserItem(userRecord, this.databaseInstance, this.errorCenter)
  }

  /**
   * Escapes SQL LIKE wildcards in a user search term.
   *
   * Экранирует спецсимволы SQL LIKE в поисковой строке.
   * @param value Raw search text / Исходная поисковая строка
   * @returns Escaped LIKE pattern value / Экранированная строка для шаблона LIKE
   */
  protected escapeSearchPattern(value: string): string {
    return value.replaceAll('\\', '\\\\').replaceAll('%', '\\%').replaceAll('_', '\\_')
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
        const pattern = `%${this.escapeSearchPattern(trimmedSearch)}%`
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
      if (!CmsUserItem.isValidId(options.roleId)) {
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

    return conditions.length > 0 ? and(...conditions) : undefined
  }

  /**
   * Attaches assigned roles to a list of public user records in a single batch query and wraps each in CmsUserItem.
   *
   * Загружает и прикрепляет назначенные роли к списку пользователей одним пакетным запросом и оборачивает каждую запись в CmsUserItem.
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

    const userIds = usersList.map(userRecord => userRecord.id)
    const relationRows = await executor
      .select({
        userId: userRoles.userId,
        role: roles
      })
      .from(userRoles)
      .innerJoin(roles, eq(userRoles.roleId, roles.id))
      .where(inArray(userRoles.userId, userIds))
      .orderBy(asc(roles.id))

    const rolesByUserId = new Map<number, CmsRole[]>()
    for (const relationRow of relationRows) {
      const existingList = rolesByUserId.get(relationRow.userId)
      if (existingList) {
        existingList.push(relationRow.role)
      } else {
        rolesByUserId.set(relationRow.userId, [relationRow.role])
      }
    }

    return usersList.map(userRecord => this.wrapUserItem({
      ...userRecord,
      roles: rolesByUserId.get(userRecord.id) ?? []
    }))
  }

  /**
   * Clamps and normalizes list limit parameter.
   *
   * Ограничивает и нормализует параметр количества записей на странице.
   * @param limit Requested limit / Запрошенное количество записей
   * @returns Normalized limit / Нормализованный лимит
   */
  protected normalizeLimit(limit?: number): number {
    if (limit === undefined || !Number.isFinite(limit)) {
      return DEFAULT_LIST_LIMIT
    }

    const integerLimit = Math.trunc(limit)
    if (integerLimit < 1) {
      return 1
    }

    return Math.min(integerLimit, MAX_LIST_LIMIT)
  }

  /**
   * Normalizes list offset parameter.
   *
   * Нормализует параметр смещения выборки.
   * @param offset Requested offset / Запрошенное смещение
   * @returns Non-negative integer offset / Неотрицательное целочисленное смещение
   */
  protected normalizeOffset(offset?: number): number {
    if (offset === undefined || !Number.isFinite(offset)) {
      return 0
    }

    return Math.max(0, Math.trunc(offset))
  }
}
