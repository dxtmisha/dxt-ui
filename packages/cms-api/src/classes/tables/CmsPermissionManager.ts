import {
  eq,
  inArray,
  sql,
  type SQL
} from 'drizzle-orm'
import { isString } from '@dxtmisha/functional-basic'

import { CMS_PERMISSION_ERROR_GROUP } from '../../media/errors/cmsPermissionErrorCauseList'
import { permissions } from '../../media/schema/permissions'
import { rolePermissions } from '../../media/schema/rolePermissions'
import { roles } from '../../media/schema/roles'
import { CmsDbCodeManagerAbstract } from '../abstract/CmsDbCodeManagerAbstract'
import { CmsPermissionItem } from './CmsPermissionItem'
import { CmsVerification } from '../CmsVerification'
import type { CmsDbInstance } from '../CmsDbInstance'
import type {
  CmsCodeCreatedOriginInsertValues,
  CmsPermission
} from '../../types/cmsDbTypes'
import type {
  CmsPermissionCreateInput,
  CmsPermissionListOptions,
  CmsPermissionUpdateInput
} from '../../types/cmsPermissionTypes'

/**
 * Manages CMS permission collections: querying lists, searching, creating, and wrapping permission records into CmsPermissionItem instances.
 *
 * Класс для управления списком прав доступа CMS: поиск и фильтрация списков, создание записей и оборачивание прав в экземпляры CmsPermissionItem.
 */
export class CmsPermissionManager extends CmsDbCodeManagerAbstract<
  typeof permissions,
  CmsPermission,
  CmsPermissionCreateInput,
  CmsPermissionUpdateInput,
  CmsPermissionItem,
  CmsPermissionListOptions
> {
  /** ErrorCenter group name for permission errors / Имя группы ошибок ErrorCenter для прав доступа */
  protected readonly errorGroup = CMS_PERMISSION_ERROR_GROUP

  /**
   * Initializes the permission manager with a CmsDbInstance.
   *
   * Инициализирует менеджер прав доступа с экземпляром CmsDbInstance.
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  constructor(
    databaseInstance?: CmsDbInstance
  ) {
    super(permissions, databaseInstance)
  }

  /**
   * Wraps a plain permission record into a CmsPermissionItem instance.
   *
   * Оборачивает запись права доступа в экземпляр CmsPermissionItem.
   * @param permissionRecord Permission database record / Запись права доступа из базы данных
   * @returns Wrapped CmsPermissionItem instance / Экземпляр CmsPermissionItem
   */
  protected wrapItem(permissionRecord: CmsPermission): CmsPermissionItem {
    return new CmsPermissionItem(permissionRecord, this.databaseInstance)
  }

  /**
   * Builds and validates insert values from permission create input.
   *
   * Формирует и валидирует данные для вставки права доступа.
   * @param input New permission payload / Данные нового права доступа
   * @returns Validated Drizzle insert payload / Валидированные данные для вставки
   */
  protected prepareCreateValues(input: CmsPermissionCreateInput): CmsCodeCreatedOriginInsertValues {
    return CmsPermissionItem.buildCreateValues(input)
  }

  /**
   * Builds SQL filter predicates for permission list queries.
   *
   * Формирует массив SQL-условий фильтрации для запросов списка прав доступа.
   * @param options Filtering options / Параметры фильтрации
   * @returns Array of SQL predicates / Массив SQL-условий
   */
  protected override buildListConditions(options: CmsPermissionListOptions): SQL[] {
    const conditions = super.buildListConditions(options)

    if (isString(options.createdOrigin)) {
      const trimmedCreatedOrigin = options.createdOrigin.trim()
      if (trimmedCreatedOrigin.length > 0) {
        conditions.push(eq(permissions.createdOrigin, trimmedCreatedOrigin))
      }
    }

    if (options.roleId !== undefined) {
      if (!CmsVerification.isPositiveInteger(options.roleId, false)) {
        conditions.push(sql`false`)
      } else {
        const roleSubquery = this.databaseInstance.get()
          .select({ permissionId: rolePermissions.permissionId })
          .from(rolePermissions)
          .where(eq(rolePermissions.roleId, options.roleId))
        conditions.push(inArray(permissions.id, roleSubquery))
      }
    }

    if (isString(options.roleCode)) {
      const trimmedRoleCode = options.roleCode.trim()
      if (trimmedRoleCode.length > 0) {
        const roleCodeSubquery = this.databaseInstance.get()
          .select({ permissionId: rolePermissions.permissionId })
          .from(rolePermissions)
          .innerJoin(roles, eq(rolePermissions.roleId, roles.id))
          .where(eq(roles.code, trimmedRoleCode))
        conditions.push(inArray(permissions.id, roleCodeSubquery))
      }
    }

    return conditions
  }
}
