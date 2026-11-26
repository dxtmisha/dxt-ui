import {
  eq,
  inArray,
  sql,
  type SQL
} from 'drizzle-orm'
import {
  ErrorCenterThrow,
  isString
} from '@dxtmisha/functional-basic'

import { CMS_ROLE_ERROR_GROUP } from '../../media/errors/cmsRoleErrorCauseList'
import { permissions } from '../../media/schema/permissions'
import { rolePermissions } from '../../media/schema/rolePermissions'
import { roles } from '../../media/schema/roles'
import { userRoles } from '../../media/schema/userRoles'
import { CmsDbCodeManagerAbstract } from '../abstract/temp/CmsDbCodeManagerAbstract'
import { CmsPermissionItem } from './CmsPermissionItem'
import { CmsPermissionManager } from './CmsPermissionManager'
import { CmsRoleItem } from './CmsRoleItem'
import { CmsVerification } from '../CmsVerification'
import type { CmsDbInstance } from '../CmsDbInstance'
import type {
  CmsCodeCreatedOriginInsertValues,
  CmsNewRole,
  CmsPermission,
  CmsRole
} from '../../types/cmsDbTypes'
import type {
  CmsRoleCreateInput,
  CmsRoleListOptions,
  CmsRoleUpdateInput,
  CmsRoleWithPermissions
} from '../../types/cmsRoleTypes'

/**
 * Manages CMS role collections: querying lists, searching, creating, and wrapping role records with permissions into CmsRoleItem instances.
 *
 * Класс для управления списком ролей CMS: поиск и фильтрация списков, создание записей и оборачивание ролей с правами доступа в экземпляры CmsRoleItem.
 */
export class CmsRoleManager extends CmsDbCodeManagerAbstract<
  typeof roles,
  CmsRoleWithPermissions,
  CmsRoleCreateInput,
  CmsRoleUpdateInput,
  CmsRoleItem,
  CmsRoleListOptions
> {
  /** ErrorCenter group name for role errors / Имя группы ошибок ErrorCenter для ролей */
  protected readonly errorGroup = CMS_ROLE_ERROR_GROUP

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
   * Wraps a plain role record with permissions into a CmsRoleItem instance.
   *
   * Оборачивает запись роли с правами доступа в экземпляр CmsRoleItem.
   * @param roleRecord Role record with assigned permissions / Запись роли с назначенными правами доступа
   * @returns Wrapped CmsRoleItem instance / Экземпляр CmsRoleItem
   */
  protected wrapItem(roleRecord: CmsRoleWithPermissions): CmsRoleItem {
    return new CmsRoleItem(roleRecord, this.databaseInstance)
  }

  /**
   * Builds and validates insert values from role create input.
   *
   * Формирует и валидирует данные для вставки роли.
   * @param input New role payload / Данные новой роли
   * @returns Validated Drizzle insert payload / Валидированные данные для вставки
   */
  protected prepareCreateValues(input: CmsRoleCreateInput): CmsCodeCreatedOriginInsertValues {
    return CmsRoleItem.buildCreateValues(input)
  }

  /**
   * Fetches a single role record with assigned permissions matching a SQL predicate.
   *
   * Загружает одну запись роли с назначенными правами доступа по SQL-условию.
   * @param whereCondition SQL predicate / SQL-условие поиска
   * @returns Role record with permissions or undefined / Запись роли с правами доступа или undefined
   */
  protected override async fetchOneRecord(whereCondition: SQL): Promise<CmsRoleWithPermissions | undefined> {
    return CmsRoleItem.findOneWithPermissions(
      this.databaseInstance.get(),
      whereCondition
    )
  }

  /**
   * Attaches permissions to selected role rows and wraps them into CmsRoleItem instances.
   *
   * Прикрепляет права доступа к выбранным строкам ролей и оборачивает их в экземпляры CmsRoleItem.
   * @param rows Selected role rows / Выбранные строки ролей
   * @returns List of wrapped CmsRoleItem instances / Список экземпляров CmsRoleItem
   */
  protected override async wrapItems(
    rows: readonly CmsRole[]
  ): Promise<CmsRoleItem[]> {
    return this.attachPermissions(rows)
  }

  /**
   * Creates a role record in a transaction and optionally assigns permissions.
   *
   * Создаёт запись роли в транзакции и при необходимости назначает права доступа.
   * @param createValues Validated role insert values / Валидированные поля для вставки роли
   * @param input Original role creation payload / Исходные данные создания роли
   * @returns Created role record with permissions / Созданная запись роли с правами доступа
   */
  protected override async createRecord(
    createValues: Partial<CmsNewRole>,
    input: CmsRoleCreateInput
  ): Promise<CmsRoleWithPermissions> {
    return this.databaseInstance.get().transaction(async (transaction) => {
      const insertedRows = await transaction
        .insert(roles)
        .values(createValues as CmsNewRole)
        .returning()

      const createdRole = insertedRows[0]
      if (!createdRole) {
        ErrorCenterThrow.on({
          group: this.errorGroup,
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
  }

  /**
   * Builds SQL filter predicates for role list queries.
   *
   * Формирует массив SQL-условий фильтрации для запросов списка ролей.
   * @param options Filtering options / Параметры фильтрации
   * @returns Array of SQL predicates / Массив SQL-условий
   */
  protected override buildListConditions(options: CmsRoleListOptions): SQL[] {
    const conditions = super.buildListConditions(options)

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

    return conditions
  }

  /**
   * Attaches assigned permissions to a list of role records in a single batch query and wraps each in CmsRoleItem.
   *
   * Загружает и прикрепляет назначенные права доступа к списку ролей одним пакетным запросом и оборачивает каждую запись в CmsRoleItem.
   * @param rolesList List of role records / Список записей ролей
   * @returns List of CmsRoleItem instances / Список экземпляров CmsRoleItem
   */
  protected async attachPermissions(
    rolesList: readonly CmsRole[]
  ): Promise<CmsRoleItem[]> {
    if (rolesList.length === 0) {
      return []
    }

    const permissionsByRoleId = await CmsPermissionItem.fetchByRoleIds(
      this.databaseInstance.get(),
      rolesList.map(roleRecord => roleRecord.id)
    )

    return rolesList.map(roleRecord => this.wrapItem({
      ...roleRecord,
      permissions: [...(permissionsByRoleId.get(roleRecord.id) ?? [])]
    }))
  }
}
