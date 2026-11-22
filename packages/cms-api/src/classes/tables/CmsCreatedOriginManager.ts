import {
  and,
  asc,
  eq,
  ilike,
  inArray,
  or,
  type SQL
} from 'drizzle-orm'
import {
  ErrorCenterThrow,
  isPositiveInteger,
  isString,
  uniqueArray
} from '@dxtmisha/functional-basic'

import { escapeCmsSearchPattern } from '../../functions/escapeCmsSearchPattern'
import { normalizeCmsLimit } from '../../functions/normalizeCmsLimit'
import { normalizeCmsOffset } from '../../functions/normalizeCmsOffset'
import { seedCmsCreatedOrigins } from '../../functions/seedCmsCreatedOrigins'
import { CMS_CREATED_ORIGIN_ERROR_GROUP } from '../../media/errors/cmsCreatedOriginErrorCauseList'
import { createdOrigins } from '../../media/schema/createdOrigins'
import { CmsCreatedOriginItem } from './CmsCreatedOriginItem'
import { CmsDbAbstract } from '../abstract/CmsDbAbstract'
import type { CmsDbInstance } from '../CmsDbInstance'
import type {
  CmsCreatedOrigin,
  CmsNewCreatedOrigin
} from '../../types/cmsDbTypes'
import type {
  CmsCreatedOriginCreateInput,
  CmsCreatedOriginListOptions,
  CmsCreatedOriginListResult,
  CmsCreatedOriginUpdateInput
} from '../../types/cmsCreatedOriginTypes'

/**
 * Manages CMS created origin collections: querying lists, searching, seeding, creating, updating, and wrapping records into CmsCreatedOriginItem instances.
 *
 * Класс для управления списком источников создания записей CMS: поиск и фильтрация списков, инициализация, создание, обновление и оборачивание в экземпляры CmsCreatedOriginItem.
 */
export class CmsCreatedOriginManager extends CmsDbAbstract<typeof createdOrigins> {
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
   * Checks whether a created origin exists by identifier.
   *
   * Проверяет существование источника создания записей по идентификатору.
   * @param id Created origin identifier / Идентификатор источника создания записей
   * @returns True if created origin exists / True, если источник создания записей существует
   */
  async hasById(id: number): Promise<boolean> {
    return this.existsRecordById(id)
  }

  /**
   * Checks whether a created origin exists by unique code.
   *
   * Проверяет существование источника создания записей по уникальному коду.
   * @param code Created origin code / Код источника создания записей
   * @returns True if created origin exists / True, если источник создания записей существует
   */
  async hasByCode(code: string): Promise<boolean> {
    const trimmedCode = isString(code) ? code.trim() : ''
    if (trimmedCode.length === 0) {
      return false
    }

    const found = await this.databaseInstance.get()
      .select({ id: createdOrigins.id })
      .from(createdOrigins)
      .where(eq(createdOrigins.code, trimmedCode))
      .limit(1)

    return found.length > 0
  }

  /**
   * Finds a created origin wrapped in CmsCreatedOriginItem by identifier.
   *
   * Находит источник создания записей в обёртке CmsCreatedOriginItem по идентификатору.
   * @param id Created origin identifier / Идентификатор источника создания записей
   * @returns CmsCreatedOriginItem instance or undefined / Экземпляр CmsCreatedOriginItem или undefined
   */
  async getById(id: number): Promise<CmsCreatedOriginItem | undefined> {
    if (!isPositiveInteger(id)) {
      return undefined
    }

    const foundRecord = await CmsCreatedOriginItem.findOne(
      this.databaseInstance.get(),
      eq(createdOrigins.id, id)
    )

    return foundRecord ? this.wrapCreatedOriginItem(foundRecord) : undefined
  }

  /**
   * Finds a created origin wrapped in CmsCreatedOriginItem by unique code.
   *
   * Находит источник создания записей в обёртке CmsCreatedOriginItem по уникальному коду.
   * @param code Unique created origin code / Уникальный код источника создания записей
   * @returns CmsCreatedOriginItem instance or undefined / Экземпляр CmsCreatedOriginItem или undefined
   */
  async getByCode(code: string): Promise<CmsCreatedOriginItem | undefined> {
    const trimmedCode = isString(code) ? code.trim() : ''
    if (trimmedCode.length === 0) {
      return undefined
    }

    const foundRecord = await CmsCreatedOriginItem.findOne(
      this.databaseInstance.get(),
      eq(createdOrigins.code, trimmedCode)
    )

    return foundRecord ? this.wrapCreatedOriginItem(foundRecord) : undefined
  }

  /**
   * Finds multiple created origins wrapped in CmsCreatedOriginItem by their identifiers.
   *
   * Находит список источников создания записей в обёртке CmsCreatedOriginItem по массиву идентификаторов.
   * @param ids Created origin identifiers / Идентификаторы источников создания записей
   * @returns List of matching CmsCreatedOriginItem instances / Список найденных экземпляров CmsCreatedOriginItem
   */
  async getByIds(ids: readonly number[]): Promise<CmsCreatedOriginItem[]> {
    const validIds = uniqueArray(ids).filter(id => isPositiveInteger(id))
    if (validIds.length === 0) {
      return []
    }

    const rows = await this.databaseInstance.get()
      .select()
      .from(createdOrigins)
      .where(inArray(createdOrigins.id, validIds))
      .orderBy(asc(createdOrigins.id))

    return rows.map(originRecord => this.wrapCreatedOriginItem(originRecord))
  }

  /**
   * Finds multiple created origins wrapped in CmsCreatedOriginItem by their unique codes.
   *
   * Находит список источников создания записей в обёртке CmsCreatedOriginItem по массиву кодов.
   * @param codes Created origin codes / Коды источников создания записей
   * @returns List of matching CmsCreatedOriginItem instances / Список найденных экземпляров CmsCreatedOriginItem
   */
  async getByCodes(codes: readonly string[]): Promise<CmsCreatedOriginItem[]> {
    const validCodes = uniqueArray(
      codes
        .filter(isString)
        .map(code => code.trim())
        .filter(code => code.length > 0)
    )
    if (validCodes.length === 0) {
      return []
    }

    const rows = await this.databaseInstance.get()
      .select()
      .from(createdOrigins)
      .where(inArray(createdOrigins.code, validCodes))
      .orderBy(asc(createdOrigins.id))

    return rows.map(originRecord => this.wrapCreatedOriginItem(originRecord))
  }

  /**
   * Returns a paginated and filtered list of created origins wrapped in CmsCreatedOriginItem instances.
   *
   * Возвращает постраничный отфильтрованный список источников создания записей в обёртках CmsCreatedOriginItem.
   * @param options Filtering and pagination options / Параметры фильтрации и пагинации
   * @returns Paginated CmsCreatedOriginItem list and total count / Список CmsCreatedOriginItem и общее количество записей
   */
  async getList(options: CmsCreatedOriginListOptions = {}): Promise<CmsCreatedOriginListResult> {
    const database = this.databaseInstance.get()
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

    const originRows = await database
      .select()
      .from(createdOrigins)
      .where(whereCondition)
      .orderBy(asc(createdOrigins.id))
      .limit(limit)
      .offset(offset)

    return {
      items: originRows.map(originRecord => this.wrapCreatedOriginItem(originRecord)),
      total,
      limit,
      offset
    }
  }

  /**
   * Creates a new CMS created origin and wraps it in CmsCreatedOriginItem.
   *
   * Создаёт новый источник создания записей CMS и возвращает экземпляр CmsCreatedOriginItem.
   * @param input New created origin payload / Данные нового источника создания записей
   * @returns Created CmsCreatedOriginItem instance / Созданный экземпляр CmsCreatedOriginItem
   */
  async create(input: CmsCreatedOriginCreateInput): Promise<CmsCreatedOriginItem> {
    const createValues = CmsCreatedOriginItem.buildCreateValues(input)

    try {
      const insertedRows = await this.databaseInstance.get()
        .insert(createdOrigins)
        .values(createValues)
        .returning()

      const createdRecord = insertedRows[0]
      if (!createdRecord) {
        ErrorCenterThrow.on({
          group: CMS_CREATED_ORIGIN_ERROR_GROUP,
          code: 'create'
        })
      }

      return this.wrapCreatedOriginItem(createdRecord)
    } catch (error) {
      return ErrorCenterThrow.handle(
        {
          group: CMS_CREATED_ORIGIN_ERROR_GROUP,
          code: 'create'
        },
        error
      )
    }
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

      return seededRecords.map(originRecord => this.wrapCreatedOriginItem(originRecord))
    } catch (error) {
      return ErrorCenterThrow.handle(
        {
          group: CMS_CREATED_ORIGIN_ERROR_GROUP,
          code: 'create'
        },
        error
      )
    }
  }

  /**
   * Updates an existing created origin by ID and returns the updated CmsCreatedOriginItem.
   *
   * Редактирует существующий источник создания записей по ID и возвращает обновлённый CmsCreatedOriginItem.
   * @param id Created origin identifier / Идентификатор источника создания записей
   * @param input Created origin fields to update / Данные источника создания для обновления
   * @returns Updated CmsCreatedOriginItem or undefined if not found / Обновлённый экземпляр CmsCreatedOriginItem или undefined, если не найден
   */
  async update(
    id: number,
    input: CmsCreatedOriginUpdateInput
  ): Promise<CmsCreatedOriginItem | undefined> {
    const originItem = await this.getById(id)
    if (!originItem) {
      return undefined
    }

    return originItem.update(input)
  }

  /**
   * Permanently deletes a created origin by ID from the database.
   *
   * Безвозвратно удаляет источник создания записей по ID из базы данных.
   * @param id Created origin identifier / Идентификатор источника создания записей
   * @returns True if created origin was deleted / True, если источник создания записей был удалён
   */
  async delete(id: number): Promise<boolean> {
    const originItem = await this.getById(id)
    if (!originItem) {
      return false
    }

    return originItem.delete()
  }

  /**
   * Wraps a plain created origin record into a CmsCreatedOriginItem instance.
   *
   * Оборачивает запись источника создания в экземпляр CmsCreatedOriginItem.
   * @param originRecord Created origin database record / Запись источника создания из базы данных
   * @returns Wrapped CmsCreatedOriginItem instance / Экземпляр CmsCreatedOriginItem
   */
  protected wrapCreatedOriginItem(originRecord: CmsCreatedOrigin): CmsCreatedOriginItem {
    return new CmsCreatedOriginItem(originRecord, this.databaseInstance)
  }

  /**
   * Builds WHERE clause for created origin list queries.
   *
   * Формирует условие WHERE для запросов списка источников создания записей.
   * @param options Filtering options / Параметры фильтрации
   * @returns Combined SQL predicate or undefined / Объединённый SQL-предикат или undefined
   */
  protected buildListWhere(options: CmsCreatedOriginListOptions): SQL | undefined {
    const conditions: SQL[] = []

    if (isString(options.search)) {
      const trimmedSearch = options.search.trim()
      if (trimmedSearch.length > 0) {
        const pattern = `%${escapeCmsSearchPattern(trimmedSearch)}%`
        const searchPredicate = or(
          ilike(createdOrigins.code, pattern),
          ilike(createdOrigins.name, pattern),
          ilike(createdOrigins.description, pattern)
        )
        if (searchPredicate) {
          conditions.push(searchPredicate)
        }
      }
    }

    if (options.systemStatus !== undefined) {
      conditions.push(eq(createdOrigins.systemStatus, options.systemStatus))
    }

    return conditions.length > 0 ? and(...conditions) : undefined
  }
}
