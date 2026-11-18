import {
  and,
  asc,
  eq,
  ilike,
  inArray,
  or,
  sql,
  type SQL
} from 'drizzle-orm'
import {
  isPositiveInteger,
  isString,
  uniqueArray,
  type ErrorCenterThrowInstance
} from '@dxtmisha/functional-basic'

import { escapeCmsSearchPattern } from '../functions/escapeCmsSearchPattern'
import { normalizeCmsLimit } from '../functions/normalizeCmsLimit'
import { normalizeCmsOffset } from '../functions/normalizeCmsOffset'
import { permissions } from '../media/schema/permissions'
import { rolePermissions } from '../media/schema/rolePermissions'
import { roles } from '../media/schema/roles'
import { CmsDbAbstract } from './CmsDbAbstract'
import { CmsPermissionItem } from './CmsPermissionItem'
import type { CmsDbInstance } from './CmsDbInstance'
import type { CmsPermission } from '../types/cmsDbTypes'
import type {
  CmsPermissionCreateInput,
  CmsPermissionListOptions,
  CmsPermissionListResult,
  CmsPermissionUpdateInput
} from '../types/cmsPermissionTypes'

/**
 * Manages CMS permission collections: querying lists, searching, creating, and wrapping permission records into CmsPermissionItem instances.
 *
 * Класс для управления списком прав доступа CMS: поиск и фильтрация списков, создание записей и оборачивание прав в экземпляры CmsPermissionItem.
 */
export class CmsPermissionManager extends CmsDbAbstract<typeof permissions> {
  /**
   * Initializes the permission manager with a CmsDbInstance and error handler.
   *
   * Инициализирует менеджер прав доступа с экземпляром CmsDbInstance и обработчиком ошибок.
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   * @param error ErrorCenterThrow instance handler / Обработчик ошибок ErrorCenterThrowInstance
   */
  constructor(
    databaseInstance?: CmsDbInstance,
    error?: ErrorCenterThrowInstance
  ) {
    super(permissions, databaseInstance, error)
  }

  /**
   * Checks whether a permission exists by identifier.
   *
   * Проверяет существование права доступа по идентификатору.
   * @param id Permission identifier / Идентификатор права доступа
   * @returns True if permission exists / True, если право доступа существует
   */
  async hasById(id: number): Promise<boolean> {
    return this.existsRecordById(id)
  }

  /**
   * Checks whether a permission exists by unique code.
   *
   * Проверяет существование права доступа по уникальному коду.
   * @param code Permission code / Код права доступа
   * @returns True if permission exists / True, если право доступа существует
   */
  async hasByCode(code: string): Promise<boolean> {
    const trimmedCode = isString(code) ? code.trim() : ''
    if (trimmedCode.length === 0) {
      return false
    }

    const found = await this.getDatabase()
      .select({ id: permissions.id })
      .from(permissions)
      .where(eq(permissions.code, trimmedCode))
      .limit(1)

    return found.length > 0
  }

  /**
   * Finds a permission wrapped in CmsPermissionItem by identifier.
   *
   * Находит право доступа в обёртке CmsPermissionItem по идентификатору.
   * @param id Permission identifier / Идентификатор права доступа
   * @returns CmsPermissionItem instance or undefined / Экземпляр CmsPermissionItem или undefined
   */
  async getById(id: number): Promise<CmsPermissionItem | undefined> {
    if (!isPositiveInteger(id)) {
      return undefined
    }

    const foundRecord = await CmsPermissionItem.findOne(
      this.getDatabase(),
      eq(permissions.id, id)
    )

    return foundRecord ? this.wrapPermissionItem(foundRecord) : undefined
  }

  /**
   * Finds a permission wrapped in CmsPermissionItem by unique code.
   *
   * Находит право доступа в обёртке CmsPermissionItem по уникальному коду.
   * @param code Unique permission code / Уникальный код права доступа
   * @returns CmsPermissionItem instance or undefined / Экземпляр CmsPermissionItem или undefined
   */
  async getByCode(code: string): Promise<CmsPermissionItem | undefined> {
    const trimmedCode = isString(code) ? code.trim() : ''
    if (trimmedCode.length === 0) {
      return undefined
    }

    const foundRecord = await CmsPermissionItem.findOne(
      this.getDatabase(),
      eq(permissions.code, trimmedCode)
    )

    return foundRecord ? this.wrapPermissionItem(foundRecord) : undefined
  }

  /**
   * Finds multiple permissions wrapped in CmsPermissionItem by their identifiers.
   *
   * Находит список прав доступа в обёртке CmsPermissionItem по массиву идентификаторов.
   * @param ids Permission identifiers / Идентификаторы прав доступа
   * @returns List of matching CmsPermissionItem instances / Список найденных экземпляров CmsPermissionItem
   */
  async getByIds(ids: readonly number[]): Promise<CmsPermissionItem[]> {
    const validIds = uniqueArray(ids).filter(id => isPositiveInteger(id))
    if (validIds.length === 0) {
      return []
    }

    const rows = await this.getDatabase()
      .select()
      .from(permissions)
      .where(inArray(permissions.id, validIds))
      .orderBy(asc(permissions.id))

    return rows.map(permissionRecord => this.wrapPermissionItem(permissionRecord))
  }

  /**
   * Finds multiple permissions wrapped in CmsPermissionItem by their unique codes.
   *
   * Находит список прав доступа в обёртке CmsPermissionItem по массиву кодов.
   * @param codes Permission codes / Коды прав доступа
   * @returns List of matching CmsPermissionItem instances / Список найденных экземпляров CmsPermissionItem
   */
  async getByCodes(codes: readonly string[]): Promise<CmsPermissionItem[]> {
    const validCodes = uniqueArray(
      codes
        .filter(isString)
        .map(code => code.trim())
        .filter(code => code.length > 0)
    )
    if (validCodes.length === 0) {
      return []
    }

    const rows = await this.getDatabase()
      .select()
      .from(permissions)
      .where(inArray(permissions.code, validCodes))
      .orderBy(asc(permissions.id))

    return rows.map(permissionRecord => this.wrapPermissionItem(permissionRecord))
  }

  /**
   * Returns a paginated and filtered list of permissions wrapped in CmsPermissionItem instances.
   *
   * Возвращает постраничный отфильтрованный список прав доступа в обёртках CmsPermissionItem.
   * @param options Filtering and pagination options / Параметры фильтрации и пагинации
   * @returns Paginated CmsPermissionItem list and total count / Список CmsPermissionItem и общее количество записей
   */
  async getList(options: CmsPermissionListOptions = {}): Promise<CmsPermissionListResult> {
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

    const permissionRows = await database
      .select()
      .from(permissions)
      .where(whereCondition)
      .orderBy(asc(permissions.id))
      .limit(limit)
      .offset(offset)

    return {
      items: permissionRows.map(permissionRecord => this.wrapPermissionItem(permissionRecord)),
      total,
      limit,
      offset
    }
  }

  /**
   * Updates an existing permission by ID and returns the updated CmsPermissionItem.
   *
   * Редактирует существующее право доступа по ID и возвращает обновлённый CmsPermissionItem.
   * @param id Permission identifier / Идентификатор права доступа
   * @param input Permission fields to update / Данные права доступа для обновления
   * @returns Updated CmsPermissionItem or undefined if not found / Обновлённый экземпляр CmsPermissionItem или undefined, если не найден
   */
  async update(
    id: number,
    input: CmsPermissionUpdateInput
  ): Promise<CmsPermissionItem | undefined> {
    const permissionItem = await this.getById(id)
    if (!permissionItem) {
      return undefined
    }

    return permissionItem.update(input)
  }

  /**
   * Creates a new CMS permission and wraps it in CmsPermissionItem.
   *
   * Создаёт новое право доступа CMS и возвращает экземпляр CmsPermissionItem.
   * @param input New permission payload / Данные нового права доступа
   * @returns Created CmsPermissionItem instance / Созданный экземпляр CmsPermissionItem
   */
  async create(input: CmsPermissionCreateInput): Promise<CmsPermissionItem> {
    const createValues = CmsPermissionItem.buildCreateValues(input, this.error)

    try {
      const insertedRows = await this.getDatabase()
        .insert(permissions)
        .values(createValues)
        .returning()

      const createdPermission = insertedRows[0]
      if (!createdPermission) {
        this.error.on({
          group: 'cms-permission',
          code: 'create'
        })
      }

      return this.wrapPermissionItem(createdPermission)
    } catch (error) {
      return this.error.handle(
        {
          group: 'cms-permission',
          code: 'create'
        },
        error
      )
    }
  }

  /**
   * Permanently deletes a permission by ID from the database.
   *
   * Безвозвратно удаляет право доступа по ID из базы данных.
   * @param id Permission identifier / Идентификатор права доступа
   * @returns True if permission was deleted / True, если право доступа было удалено
   */
  async delete(id: number): Promise<boolean> {
    const permissionItem = await this.getById(id)
    if (!permissionItem) {
      return false
    }

    return permissionItem.delete()
  }

  /**
   * Wraps a plain permission record into a CmsPermissionItem instance.
   *
   * Оборачивает запись права доступа в экземпляр CmsPermissionItem.
   * @param permissionRecord Permission database record / Запись права доступа из базы данных
   * @returns Wrapped CmsPermissionItem instance / Экземпляр CmsPermissionItem
   */
  protected wrapPermissionItem(permissionRecord: CmsPermission): CmsPermissionItem {
    return new CmsPermissionItem(permissionRecord, this.databaseInstance, this.error)
  }

  /**
   * Builds WHERE clause for permission list queries.
   *
   * Формирует условие WHERE для запросов списка прав доступа.
   * @param options Filtering options / Параметры фильтрации
   * @returns Combined SQL predicate or undefined / Объединённый SQL-предикат или undefined
   */
  protected buildListWhere(options: CmsPermissionListOptions): SQL | undefined {
    const conditions: SQL[] = []

    if (isString(options.search)) {
      const trimmedSearch = options.search.trim()
      if (trimmedSearch.length > 0) {
        const pattern = `%${escapeCmsSearchPattern(trimmedSearch)}%`
        const searchPredicate = or(
          ilike(permissions.code, pattern),
          ilike(permissions.name, pattern),
          ilike(permissions.description, pattern)
        )
        if (searchPredicate) {
          conditions.push(searchPredicate)
        }
      }
    }

    if (isString(options.createdOrigin)) {
      const trimmedCreatedOrigin = options.createdOrigin.trim()
      if (trimmedCreatedOrigin.length > 0) {
        conditions.push(eq(permissions.createdOrigin, trimmedCreatedOrigin))
      }
    }

    if (options.roleId !== undefined) {
      if (!isPositiveInteger(options.roleId)) {
        conditions.push(sql`false`)
      } else {
        const roleSubquery = this.getDatabase()
          .select({ permissionId: rolePermissions.permissionId })
          .from(rolePermissions)
          .where(eq(rolePermissions.roleId, options.roleId))
        conditions.push(inArray(permissions.id, roleSubquery))
      }
    }

    if (isString(options.roleCode)) {
      const trimmedRoleCode = options.roleCode.trim()
      if (trimmedRoleCode.length > 0) {
        const roleCodeSubquery = this.getDatabase()
          .select({ permissionId: rolePermissions.permissionId })
          .from(rolePermissions)
          .innerJoin(roles, eq(rolePermissions.roleId, roles.id))
          .where(eq(roles.code, trimmedRoleCode))
        conditions.push(inArray(permissions.id, roleCodeSubquery))
      }
    }

    return conditions.length > 0 ? and(...conditions) : undefined
  }
}
