import { CMS_CREATED_ORIGIN_ERROR_GROUP } from '../../media/errors/cmsCreatedOriginErrorCauseList'
import { createdOrigins } from '../../media/schema/createdOrigins'
import { CmsDbCodeItemAbstract } from '../abstract/temp/CmsDbCodeItemAbstract'
import type { CmsDbInstance } from '../CmsDbInstance'
import type { CmsCreatedOrigin } from '../../types/cmsDbTypes'
import type { CmsCreatedOriginUpdateInput } from '../../types/cmsCreatedOriginTypes'

/**
 * Represents a single CMS created origin entity and provides instance-level methods for reading and editing.
 *
 * Представляет конкретный источник создания записей CMS и предоставляет методы для чтения и редактирования полей.
 */
export class CmsCreatedOriginItem extends CmsDbCodeItemAbstract<
  typeof createdOrigins,
  CmsCreatedOrigin,
  CmsCreatedOriginUpdateInput
> {
  /** Table schema bound to created origin records / Схема таблицы источников создания записей */
  static readonly table = createdOrigins

  /** ErrorCenter group name for created origin errors / Имя группы ошибок ErrorCenter для источников создания записей */
  static readonly errorGroup = CMS_CREATED_ORIGIN_ERROR_GROUP

  /** ErrorCenter group name for created origin errors / Имя группы ошибок ErrorCenter для источников создания записей */
  protected readonly errorGroup = CmsCreatedOriginItem.errorGroup

  /**
   * Initializes a created origin entity wrapper with record data and database instance manager.
   *
   * Инициализирует обёртку конкретного источника создания записей с его данными и менеджером БД.
   * @param data Created origin record from database / Запись источника создания из базы данных
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  constructor(
    data: CmsCreatedOrigin,
    databaseInstance?: CmsDbInstance
  ) {
    super(CmsCreatedOriginItem.table, data, databaseInstance)
  }
}
