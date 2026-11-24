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
  ErrorCenterThrow,
  isString,
  toLimit,
  toOffset,
  uniqueArray
} from '@dxtmisha/functional-basic'

import { escapeCmsSearchPattern } from '../../functions/escapeCmsSearchPattern'
import { hasCmsRecord } from '../../functions/db/hasCmsRecord'
import { CMS_ROLE_ERROR_GROUP } from '../../media/errors/cmsRoleErrorCauseList'
import { permissions } from '../../media/schema/permissions'
import { rolePermissions } from '../../media/schema/rolePermissions'
import { roles } from '../../media/schema/roles'
import { userRoles } from '../../media/schema/userRoles'
import { CmsDbAbstract } from '../abstract/CmsDbAbstract'
import { CmsPermissionItem } from './CmsPermissionItem'
import { CmsPermissionManager } from './CmsPermissionManager'
import { CmsRoleItem } from './CmsRoleItem'
import { CmsVerification } from '../CmsVerification'
import type { CmsDbInstance } from '../CmsDbInstance'
import type {
  CmsDbExecutor,
  CmsPermission,
  CmsRole
} from '../../types/cmsDbTypes'
import type {
  CmsRoleCreateInput,
  CmsRoleListOptions,
  CmsRoleListResult,
  CmsRoleUpdateInput,
  CmsRoleWithPermissions
} from '../../types/cmsRoleTypes'

/**
 * Manages CMS role collections: querying lists, searching, creating, and wrapping role records with permissions into CmsRoleItem instances.
 *
 * Класс для управления списком ролей CMS: поиск и фильтрация списков, создание записей и оборачивание ролей с правами доступа в экземпляры CmsRoleItem.
 */
export class CmsRoleManager extends CmsDbAbstract<typeof roles> {
  /** Cached permission manager sharing the same database instance / Кэшированный менеджер прав доступа с общими настройками БД */
  protected permissionManager?: CmsPermissionManager

  /**
   * Initializes the role manager with a CmsDbInstance.
   *
   * Инициализирует менеджер ролей с экземпляром CmsDbInstance.
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  constructor(
    databaseInstance?: CmsDbInstance
  ) {
    super(roles, databaseInstance)
  }

  /**
   * Checks whether a role exists by unique code.
   *
   * Проверяет существование роли по уникальному коду.
   * @param code Role code / Код роли
   * @returns True if role exists / True, если роль существует
   */
  async hasByCode(code: string): Promise<boolean> {
    const trimmedCode = isString(code) ? code.trim() : ''
    if (trimmedCode.length === 0) {
      return false
    }

    return hasCmsRecord(
      this.databaseInstance.get(),
      roles,
      eq(roles.code, trimmedCode)
    )
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
   * Finds a role wrapped in CmsRoleItem by identifier.
   *
   * Находит роль в обёртке CmsRoleItem по идентификатору.
   * @param id Role identifier / Идентификатор роли
   * @returns CmsRoleItem instance or undefined / Экземпляр CmsRoleItem или undefined
   */
  async getById(id: number): Promise<CmsRoleItem | undefined> {
    if (!CmsVerification.isPositiveInteger(id, false)) {
      return undefined
    }

    const foundRecord = await CmsRoleItem.findOneWithPermissions(
      this.databaseInstance.get(),
      eq(roles.id, id)
    )

    return foundRecord ? this.wrapRoleItem(foundRecord) : undefined
  }

  /**
   * Finds a role wrapped in CmsRoleItem by unique code.
   *
   * Находит роль в обёртке CmsRoleItem по уникальному коду.
   * @param code Unique role code / Уникальный код роли
   * @returns CmsRoleItem instance or undefined / Экземпляр CmsRoleItem или undefined
   */
  async getByCode(code: string): Promise<CmsRoleItem | undefined> {
    const trimmedCode = isString(code) ? code.trim() : ''
    if (trimmedCode.length === 0) {
      return undefined
    }

    const foundRecord = await CmsRoleItem.findOneWithPermissions(
      this.databaseInstance.get(),
      eq(roles.code, trimmedCode)
    )

    return foundRecord ? this.wrapRoleItem(foundRecord) : undefined
  }

  /**
   * Finds multiple roles with their permissions wrapped in CmsRoleItem by role identifiers.
   *
   * Находит список ролей с правами доступа в обёртке CmsRoleItem по массиву идентификаторов.
   * @param ids Role identifiers / Идентификаторы ролей
   * @returns List of matching CmsRoleItem instances / Список найденных экземпляров CmsRoleItem
   */
  async getByIds(ids: readonly number[]): Promise<CmsRoleItem[]> {
    const validIds = uniqueArray(ids).filter(id => CmsVerification.isPositiveInteger(id, false))
    if (validIds.length === 0) {
      return []
    }

    const database = this.databaseInstance.get()
    const roleRows = await database
      .select()
      .from(roles)
      .where(inArray(roles.id, validIds))
      .orderBy(asc(roles.id))

    return this.attachPermissions(database, roleRows)
  }

  /**
   * Finds multiple roles with their permissions wrapped in CmsRoleItem by role codes.
   *
   * Находит список ролей с правами доступа в обёртке CmsRoleItem по массиву кодов.
   * @param codes Role codes / Коды ролей
   * @returns List of matching CmsRoleItem instances / Список найденных экземпляров CmsRoleItem
   */
  async getByCodes(codes: readonly string[]): Promise<CmsRoleItem[]> {
    const validCodes = uniqueArray(
      codes
        .filter(isString)
        .map(code => code.trim())
        .filter(code => code.length > 0)
    )
    if (validCodes.length === 0) {
      return []
    }

    const database = this.databaseInstance.get()
    const roleRows = await database
      .select()
      .from(roles)
      .where(inArray(roles.code, validCodes))
      .orderBy(asc(roles.id))

    return this.attachPermissions(database, roleRows)
  }

  /**
   * Returns a paginated and filtered list of roles wrapped in CmsRoleItem instances.
   *
   * Возвращает постраничный отфильтрованный список ролей в обёртках CmsRoleItem.
   * @param options Filtering and pagination options / Параметры фильтрации и пагинации
   * @returns Paginated CmsRoleItem list and total count / Список CmsRoleItem и общее количество записей
   */
  async getList(options: CmsRoleListOptions = {}): Promise<CmsRoleListResult> {
    const database = this.databaseInstance.get()
    const limit = toLimit(options.limit)
    const offset = toOffset(options.offset)
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

    const roleRows = await database
      .select()
      .from(roles)
      .where(whereCondition)
      .orderBy(asc(roles.id))
      .limit(limit)
      .offset(offset)

    const items = await this.attachPermissions(database, roleRows)

    return {
      items,
      total,
      limit,
      offset
    }
  }

  /**
   * Updates an existing role by ID and returns the updated CmsRoleItem.
   *
   * Редактирует существующую роль по ID и возвращает обновлённый CmsRoleItem.
   * @param id Role identifier / Идентификатор роли
   * @param input Role fields and optional permission assignments / Данные роли и необязательный список прав доступа
   * @returns Updated CmsRoleItem or undefined if not found / Обновлённый экземпляр CmsRoleItem или undefined, если не найдена
   */
  async update(
    id: number,
    input: CmsRoleUpdateInput
  ): Promise<CmsRoleItem | undefined> {
    const roleItem = await this.getById(id)
    if (!roleItem) {
      return undefined
    }

    return roleItem.update(input)
  }

  /**
   * Creates a new CMS role, optionally assigns permissions in a transaction, and wraps it in CmsRoleItem.
   *
   * Создаёт новую роль CMS, при необходимости назначает права доступа в транзакции и возвращает экземпляр CmsRoleItem.
   * @param input New role payload / Данные новой роли
   * @returns Created CmsRoleItem instance / Созданный экземпляр CmsRoleItem
   */
  async create(input: CmsRoleCreateInput): Promise<CmsRoleItem> {
    const createValues = CmsRoleItem.buildCreateValues(input)

    try {
      const createdRecord = await this.databaseInstance.get().transaction(async (transaction) => {
        const insertedRows = await transaction
          .insert(roles)
          .values(createValues)
          .returning()

        const createdRole = insertedRows[0]
        if (!createdRole) {
          ErrorCenterThrow.on({
            group: CMS_ROLE_ERROR_GROUP,
            code: 'create'
          })
        }

        let assignedPermissions: CmsPermission[] = []
        if (input.permissionIds !== undefined || input.permissionCodes !== undefined) {
          const resolvedPermissionIds = await CmsPermissionItem.resolveIds(
            transaction,
            input.permissionIds,
            input.permissionCodes
          )
          await CmsRoleItem.syncRolePermissions(transaction, createdRole.id, resolvedPermissionIds)
          assignedPermissions = await CmsPermissionItem.fetchByRoleId(transaction, createdRole.id)
        }

        return {
          ...createdRole,
          permissions: assignedPermissions
        }
      })

      return this.wrapRoleItem(createdRecord)
    } catch (error) {
      return ErrorCenterThrow.handle(
        {
          group: CMS_ROLE_ERROR_GROUP,
          code: 'create'
        },
        error
      )
    }
  }

  /**
   * Permanently deletes a role by ID from the database.
   *
   * Безвозвратно удаляет роль по ID из базы данных.
   * @param id Role identifier / Идентификатор роли
   * @returns True if role was deleted / True, если роль была удалена
   */
  async delete(id: number): Promise<boolean> {
    const roleItem = await this.getById(id)
    if (!roleItem) {
      return false
    }

    return roleItem.delete()
  }

  /**
   * Wraps a plain role record with permissions into a CmsRoleItem instance.
   *
   * Оборачивает запись роли с правами доступа в экземпляр CmsRoleItem.
   * @param roleRecord Role record with assigned permissions / Запись роли с назначенными правами доступа
   * @returns Wrapped CmsRoleItem instance / Экземпляр CmsRoleItem
   */
  protected wrapRoleItem(roleRecord: CmsRoleWithPermissions): CmsRoleItem {
    return new CmsRoleItem(roleRecord, this.databaseInstance)
  }

  /**
   * Builds WHERE clause for role list queries.
   *
   * Формирует условие WHERE для запросов списка ролей.
   * @param options Filtering options / Параметры фильтрации
   * @returns Combined SQL predicate or undefined / Объединённый SQL-предикат или undefined
   */
  protected buildListWhere(options: CmsRoleListOptions): SQL | undefined {
    const conditions: SQL[] = []

    if (isString(options.search)) {
      const trimmedSearch = options.search.trim()
      if (trimmedSearch.length > 0) {
        const pattern = `%${escapeCmsSearchPattern(trimmedSearch)}%`
        const searchPredicate = or(
          ilike(roles.code, pattern),
          ilike(roles.name, pattern),
          ilike(roles.description, pattern)
        )
        if (searchPredicate) {
          conditions.push(searchPredicate)
        }
      }
    }

    if (isString(options.createdOrigin)) {
      const trimmedCreatedOrigin = options.createdOrigin.trim()
      if (trimmedCreatedOrigin.length > 0) {
        conditions.push(eq(roles.createdOrigin, trimmedCreatedOrigin))
      }
    }

    if (options.permissionId !== undefined) {
      if (!CmsVerification.isPositiveInteger(options.permissionId, false)) {
        conditions.push(sql`false`)
      } else {
        const permissionSubquery = this.databaseInstance.get()
          .select({ roleId: rolePermissions.roleId })
          .from(rolePermissions)
          .where(eq(rolePermissions.permissionId, options.permissionId))
        conditions.push(inArray(roles.id, permissionSubquery))
      }
    }

    if (isString(options.permissionCode)) {
      const trimmedPermissionCode = options.permissionCode.trim()
      if (trimmedPermissionCode.length > 0) {
        const permissionCodeSubquery = this.databaseInstance.get()
          .select({ roleId: rolePermissions.roleId })
          .from(rolePermissions)
          .innerJoin(permissions, eq(rolePermissions.permissionId, permissions.id))
          .where(eq(permissions.code, trimmedPermissionCode))
        conditions.push(inArray(roles.id, permissionCodeSubquery))
      }
    }

    if (options.userId !== undefined) {
      if (!CmsVerification.isPositiveInteger(options.userId, false)) {
        conditions.push(sql`false`)
      } else {
        const userSubquery = this.databaseInstance.get()
          .select({ roleId: userRoles.roleId })
          .from(userRoles)
          .where(eq(userRoles.userId, options.userId))
        conditions.push(inArray(roles.id, userSubquery))
      }
    }

    return conditions.length > 0 ? and(...conditions) : undefined
  }

  /**
   * Attaches assigned permissions to a list of role records in a single batch query and wraps each in CmsRoleItem.
   *
   * Загружает и прикрепляет назначенные права доступа к списку ролей одним пакетным запросом и оборачивает каждую запись в CmsRoleItem.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param rolesList List of role records / Список записей ролей
   * @returns List of CmsRoleItem instances / Список экземпляров CmsRoleItem
   */
  protected async attachPermissions(
    executor: CmsDbExecutor,
    rolesList: readonly CmsRole[]
  ): Promise<CmsRoleItem[]> {
    if (rolesList.length === 0) {
      return []
    }

    const permissionsByRoleId = await CmsPermissionItem.fetchByRoleIds(
      executor,
      rolesList.map(roleRecord => roleRecord.id)
    )

    return rolesList.map(roleRecord => this.wrapRoleItem({
      ...roleRecord,
      permissions: [...(permissionsByRoleId.get(roleRecord.id) ?? [])]
    }))
  }
}
