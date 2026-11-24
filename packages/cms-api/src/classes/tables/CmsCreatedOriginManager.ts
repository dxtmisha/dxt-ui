import {
  eq,
  type SQL
} from 'drizzle-orm'

import { seedCmsCreatedOrigins } from '../../functions/seedCmsCreatedOrigins'
import { CMS_CREATED_ORIGIN_ERROR_GROUP } from '../../media/errors/cmsCreatedOriginErrorCauseList'
import { createdOrigins } from '../../media/schema/createdOrigins'
import { CmsCreatedOriginItem } from './CmsCreatedOriginItem'
import { CmsDbCodeManagerAbstract } from '../abstract/CmsDbCodeManagerAbstract'
import type { CmsDbInstance } from '../CmsDbInstance'
import type {
  CmsCodeInsertValues,
  CmsCreatedOrigin,
  CmsNewCreatedOrigin
} from '../../types/cmsDbTypes'
import type {
  CmsCreatedOriginCreateInput,
  CmsCreatedOriginListOptions,
  CmsCreatedOriginUpdateInput
} from '../../types/cmsCreatedOriginTypes'

/**
 * Manages CMS created origin collections: querying lists, searching, seeding, creating, updating, and wrapping records into CmsCreatedOriginItem instances.
 *
 * Класс для управления списком источников создания записей CMS: поиск и фильтрация списков, инициализация, создание, обновление и оборачивание в экземпляры CmsCreatedOriginItem.
 */
export class CmsCreatedOriginManager extends CmsDbCodeManagerAbstract<
  typeof createdOrigins,
  CmsCreatedOrigin,
  CmsCreatedOriginCreateInput,
  CmsCreatedOriginUpdateInput,
  CmsCreatedOriginItem,
  CmsCreatedOriginListOptions
> {
  /** ErrorCenter group name for created origin errors / Имя группы ошибок ErrorCenter для источников создания записей */
  protected readonly errorGroup = CMS_CREATED_ORIGIN_ERROR_GROUP

  /**
   * Initializes the created origin manager with a CmsDbInstance.
   *
   * Инициализирует менеджер источников создания записей с экземпляром CmsDbInstance.
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  constructor(
    databaseInstance?: CmsDbInstance
  ) {
    super(createdOrigins, databaseInstance)
  }

  /**
   * Seeds default or custom created origins idempotently and returns them wrapped in CmsCreatedOriginItem.
   *
   * Идемпотентно добавляет стандартные или пользовательские источники создания записей и возвращает их в обёртке CmsCreatedOriginItem.
   * @param items Optional list of created origins to seed / Необязательный список источников создания для инициализации
   * @returns List of persisted CmsCreatedOriginItem instances / Список сохранённых экземпляров CmsCreatedOriginItem
   */
  async seed(items?: readonly CmsNewCreatedOrigin[]): Promise<CmsCreatedOriginItem[]> {
    try {
      const seededRecords = await seedCmsCreatedOrigins(
        this.databaseInstance.get(),
        items
      )

      return seededRecords.map(originRecord => this.wrapItem(originRecord))
    } catch (error) {
      return this.handleError('create', error)
    }
  }

  /**
   * Wraps a plain created origin record into a CmsCreatedOriginItem instance.
   *
   * Оборачивает запись источника создания в экземпляр CmsCreatedOriginItem.
   * @param originRecord Created origin database record / Запись источника создания из базы данных
   * @returns Wrapped CmsCreatedOriginItem instance / Экземпляр CmsCreatedOriginItem
   */
  protected wrapItem(originRecord: CmsCreatedOrigin): CmsCreatedOriginItem {
    return new CmsCreatedOriginItem(originRecord, this.databaseInstance)
  }

  /**
   * Builds and validates insert values from created origin create input.
   *
   * Формирует и валидирует данные для вставки источника создания записей.
   * @param input New created origin payload / Данные нового источника создания записей
   * @returns Validated Drizzle insert payload / Валидированные данные для вставки
   */
  protected prepareCreateValues(input: CmsCreatedOriginCreateInput): CmsCodeInsertValues {
    return CmsCreatedOriginItem.buildCreateValues(input)
  }

  /**
   * Builds SQL filter predicates for created origin list queries.
   *
   * Формирует массив SQL-условий фильтрации для запросов списка источников создания записей.
   * @param options Filtering options / Параметры фильтрации
   * @returns Array of SQL predicates / Массив SQL-условий
   */
  protected override buildListConditions(options: CmsCreatedOriginListOptions): SQL[] {
    const conditions = super.buildListConditions(options)

    if (options.systemStatus !== undefined) {
      conditions.push(eq(createdOrigins.systemStatus, options.systemStatus))
    }

    return conditions
  }
}
