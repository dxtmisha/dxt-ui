import {
  and,
  eq,
  inArray,
  type SQL
} from 'drizzle-orm'
import {
  ErrorCenterThrow,
  toLimit,
  toOffset
} from '@dxtmisha/functional-basic'

import { findOneRecord } from '../../functions/db/findOneRecord'
import { findRecords } from '../../functions/db/findRecords'
import { toIds } from '../../functions/to/toIds'
import { CmsDbAbstract } from './CmsDbAbstract'
import { CmsVerification } from '../CmsVerification'
import type { CmsDbItemAbstract } from './CmsDbItemAbstract'
import type {
  CmsDbItemData,
  CmsIdTable,
  CmsListOptions,
  CmsListResult
} from '../../types/cmsDbTypes'

/**
 * Abstract base class for CMS entity collection managers providing shared lookup by ID/IDs, pagination, creation, updates, deletion, and list filter composition.
 *
 * Абстрактный базовый класс для менеджеров коллекций сущностей БД CMS с общим поиском по ID, пагинацией, созданием, обновлением, удалением и построением фильтров списка.
 */
export abstract class CmsDbManagerAbstract<
  TTable extends CmsIdTable = CmsIdTable,
  TData extends CmsDbItemData = CmsDbItemData,
  TCreateInput extends object = Partial<TTable['$inferInsert']>,
  TUpdateInput extends object = Partial<TTable['$inferInsert']>,
  TItem extends CmsDbItemAbstract<TTable, TData, TUpdateInput> = CmsDbItemAbstract<TTable, TData, TUpdateInput>,
  TListOptions extends CmsListOptions = CmsListOptions,
  TListRow extends object = TTable['$inferSelect']
> extends CmsDbAbstract<TTable, TData> {
  /**
   * Checks whether more matching records exist beyond the requested pagination window (`offset + limit`).
   *
   * Проверяет, существуют ли ещё подходящие записи за пределами текущей страницы (`offset + limit`).
   * @param options Filtering and pagination options / Параметры фильтрации и пагинации
   * @returns True if at least one more record exists / True, если существует ещё хотя бы одна запись
   */
  async hasMore(options: TListOptions = {} as TListOptions): Promise<boolean> {
    const baseTable = this.getBaseTable()
    const limit = toLimit(options.limit)
    const offset = toOffset(options.offset)
    const whereCondition = this.getListWhereCondition(options)
    const nextRows = await findRecords<{ id: number }>(
      this.databaseInstance.get(),
      baseTable,
      whereCondition,
      {
        select: { id: baseTable.id },
        limit: 1,
        offset: offset + limit
      }
    )

    return nextRows.length > 0
  }

  /**
   * Finds an entity wrapped in an item instance by identifier.
   *
   * Находит запись в обёртке экземпляра сущности по идентификатору.
   * @param id Record identifier / Идентификатор записи
   * @returns Wrapped entity item or undefined / Экземпляр обёртки записи или undefined
   */
  async getById(id: number): Promise<TItem | undefined> {
    if (!CmsVerification.isPositiveInteger(id, false)) {
      return undefined
    }

    const baseTable = this.getBaseTable()
    const foundRecord = await this.fetchOneRecord(eq(baseTable.id, id))

    if (foundRecord) {
      return this.wrapItem(foundRecord)
    }

    return undefined
  }

  /**
   * Finds multiple entities wrapped in item instances by their identifiers.
   *
   * Находит список записей в обёртках экземпляров сущности по массиву идентификаторов.
   * @param ids Record identifiers / Идентификаторы записей
   * @returns List of wrapped entity items / Список найденных экземпляров обёртки
   */
  async getByIds(ids: readonly number[]): Promise<TItem[]> {
    const validIds = toIds(ids)

    if (validIds.length === 0) {
      return []
    }

    return this.wrapItems(await this.selectByIdsRows(validIds))
  }

  /**
   * Returns a paginated and filtered list of entity item wrappers without executing a total count query.
   *
   * Возвращает постраничный отфильтрованный список обёрток записей без выполнения дополнительного запроса подсчёта `total`.
   * @param options Filtering and pagination options / Параметры фильтрации и пагинации
   * @returns List of wrapped entity items / Список экземпляров обёртки записи
   */
  async getItems(options: TListOptions = {} as TListOptions): Promise<TItem[]> {
    const limit = toLimit(options.limit)
    const offset = toOffset(options.offset)
    const whereCondition = this.getListWhereCondition(options)

    return this.fetchListItems(whereCondition, limit, offset)
  }

  /**
   * Returns a paginated and filtered list of entities wrapped in item instances.
   *
   * Возвращает постраничный отфильтрованный список записей в обёртках экземпляров сущности.
   * @param options Filtering and pagination options / Параметры фильтрации и пагинации
   * @returns Paginated list result and total count / Постраничный список экземпляров и общее количество записей
   */
  async getList(options: TListOptions = {} as TListOptions): Promise<CmsListResult<TItem>> {
    const limit = toLimit(options.limit)
    const offset = toOffset(options.offset)
    const whereCondition = this.getListWhereCondition(options)
    const total = await this.countRecords(whereCondition)

    let items: TItem[] = []
    if (total > 0) {
      items = await this.fetchListItems(whereCondition, limit, offset)
    }

    return {
      items,
      total,
      limit,
      offset,
      hasMore: offset + limit < total
    }
  }

  /**
   * Counts total matching records for the given list filtering options.
   *
   * Подсчитывает общее количество записей, соответствующих параметрам фильтрации списка.
   * @param options Filtering options / Параметры фильтрации
   * @returns Total number of matching records / Общее количество подходящих записей
   */
  async getTotal(options: TListOptions = {} as TListOptions): Promise<number> {
    return this.countRecords(this.getListWhereCondition(options))
  }

  /**
   * Updates an existing entity by ID and returns the updated item instance.
   *
   * Редактирует существующую запись по ID и возвращает обновлённый экземпляр обёртки.
   * @param id Record identifier / Идентификатор записи
   * @param input Fields to update / Данные для обновления
   * @returns Updated item instance or undefined if not found / Обновлённый экземпляр обёртки или undefined, если запись не найдена
   */
  async update(
    id: number,
    input: TUpdateInput
  ): Promise<TItem | undefined> {
    const item = await this.getById(id)
    if (!item) {
      return undefined
    }

    return item.update(input)
  }

  /**
   * Creates a new entity record and wraps it in an item instance.
   *
   * Создаёт новую запись сущности и возвращает её обёрнутый экземпляр.
   * @param input New entity payload / Входные данные новой записи
   * @returns Created wrapped entity item / Созданный экземпляр обёртки записи
   */
  async create(input: TCreateInput): Promise<TItem> {
    const createValues = this.prepareCreateValues(input)

    try {
      const createdRecord = await this.createRecord(createValues, input)
      return this.wrapItem(createdRecord)
    } catch (error) {
      return this.handleError('create', error)
    }
  }

  /**
   * Permanently deletes an entity by ID from the database.
   *
   * Безвозвратно удаляет запись по ID из базы данных.
   * @param id Record identifier / Идентификатор записи
   * @returns True if record was deleted / True, если запись была удалена
   */
  async delete(id: number): Promise<boolean> {
    const item = await this.getById(id)
    if (!item) {
      return false
    }

    return item.delete()
  }

  /**
   * Wraps a plain or enriched entity record into an item instance.
   *
   * Оборачивает запись сущности в экземпляр обёртки.
   * @param record Entity record / Запись сущности
   * @returns Wrapped entity item instance / Экземпляр обёртки сущности
   */
  protected abstract wrapItem(record: TData): TItem

  /**
   * Builds validated insert payload from create input.
   *
   * Формирует валидированный объект вставки из входных данных создания записи.
   * @param input Entity creation payload / Входные данные для создания записи
   * @returns Validated Drizzle insert payload / Валидированные данные для вставки
   */
  protected abstract prepareCreateValues(input: TCreateInput): Partial<TTable['$inferInsert']>

  /**
   * Fetches a single entity record matching a SQL predicate.
   * Subclasses with joined relations can override this method to enrich the fetched record.
   *
   * Загружает одну запись сущности по SQL-условию.
   * Подклассы со связанными сущностями могут переопределить этот метод для загрузки связей.
   * @param whereCondition SQL predicate / SQL-условие поиска
   * @returns Fetched entity record or undefined / Найденная запись сущности или undefined
   */
  protected async fetchOneRecord(whereCondition: SQL): Promise<TData | undefined> {
    return findOneRecord<TData>(
      this.databaseInstance.get(),
      this.getBaseTable(),
      whereCondition
    )
  }

  /**
   * Queries rows by a pre-validated list of entity identifiers.
   * Subclasses can override column projection or soft-delete filtering.
   *
   * Запрашивает строки по предварительно проверенному списку идентификаторов.
   * Подклассы могут переопределить выборку колонок или фильтрацию мягко удалённых записей.
   * @param validIds Validated positive integer IDs / Проверенные положительные целочисленные идентификаторы
   * @returns Selected rows / Выбранные строки
   */
  protected async selectByIdsRows(validIds: readonly number[]): Promise<TListRow[]> {
    const baseTable = this.getBaseTable()

    return findRecords<TListRow>(
      this.databaseInstance.get(),
      baseTable,
      inArray(baseTable.id, validIds)
    )
  }

  /**
   * Queries a paginated slice of list rows matching the computed WHERE condition.
   * Subclasses can override column projection or sort order.
   *
   * Запрашивает страницу строк списка по итоговому условию WHERE.
   * Подклассы могут переопределить выборку колонок или порядок сортировки.
   * @param whereCondition Combined SQL predicate or undefined / Объединённый SQL-предикат или undefined
   * @param limit Applied page limit / Применённый лимит выборки
   * @param offset Applied page offset / Применённое смещение выборки
   * @returns Selected rows / Выбранные строки
   */
  protected async selectListRows(
    whereCondition: SQL | undefined,
    limit: number,
    offset: number
  ): Promise<TListRow[]> {
    return findRecords<TListRow>(
      this.databaseInstance.get(),
      this.getBaseTable(),
      whereCondition,
      { limit, offset }
    )
  }

  /**
   * Converts database rows into wrapped entity items.
   * Subclasses with relations can override this method to batch-attach related data.
   *
   * Преобразует строки из БД в обёрнутые экземпляры сущности.
   * Подклассы со связями могут переопределить этот метод для пакетной загрузки связанных данных.
   * @param rows Selected table rows / Выбранные строки таблицы
   * @returns List of wrapped entity item instances / Список экземпляров обёртки сущности
   */
  protected async wrapItems(
    rows: readonly TListRow[]
  ): Promise<TItem[]> {
    return rows.map(row => this.wrapItem(row as unknown as TData))
  }

  /**
   * Persists a new entity record in the database and returns the stored record.
   * Subclasses requiring transactional relation writes can override this method.
   *
   * Сохраняет новую запись сущности в базе данных и возвращает сохранённую запись.
   * Подклассы, которым требуется транзакционное сохранение связей, могут переопределить этот метод.
   * @param createValues Validated insert payload / Валидированные поля для вставки
   * @param _input Original creation payload / Исходные входные данные создания
   * @returns Persisted entity record / Сохранённая запись сущности
   */
  protected async createRecord(
    createValues: Partial<TTable['$inferInsert']>,
    _input: TCreateInput
  ): Promise<TData> {
    const baseTable = this.getBaseTable()
    const insertedRows = await this.databaseInstance.get()
      .insert(baseTable)
      .values(createValues as TTable['$inferInsert'])
      .returning()

    const createdRecord = insertedRows[0]

    if (!createdRecord) {
      ErrorCenterThrow.on({
        group: this.errorGroup,
        code: 'create'
      })
    }

    return createdRecord as unknown as TData
  }

  /**
   * Builds SQL filter predicates for list queries.
   *
   * Формирует список SQL-условий фильтрации для запросов списка.
   * @param _options Filtering options / Параметры фильтрации
   * @returns Array of SQL filter conditions / Массив SQL-условий фильтрации
   */
  protected buildListConditions(_options: TListOptions): SQL[] {
    return []
  }

  /**
   * Combines filter conditions produced by `buildListConditions` into a single SQL predicate.
   *
   * Объединяет условия фильтрации из `buildListConditions` в единый SQL-предикат.
   * @param options Filtering options / Параметры фильтрации
   * @returns Combined SQL predicate or undefined / Объединённый SQL-предикат или undefined
   */
  private getListWhereCondition(options: TListOptions): SQL | undefined {
    const conditions = this.buildListConditions(options)
    return conditions.length > 0 ? and(...conditions) : undefined
  }

  /**
   * Queries a paginated slice of rows and resolves them into wrapped entity items.
   *
   * Запрашивает страницу строк списка и преобразует их в экземпляры обёртки.
   * @param whereCondition Combined SQL predicate or undefined / Объединённый SQL-предикат или undefined
   * @param limit Applied page limit / Применённый лимит выборки
   * @param offset Applied page offset / Применённое смещение выборки
   * @returns List of wrapped entity item instances / Список экземпляров обёртки сущности
   */
  private async fetchListItems(
    whereCondition: SQL | undefined,
    limit: number,
    offset: number
  ): Promise<TItem[]> {
    return this.wrapItems(await this.selectListRows(whereCondition, limit, offset))
  }
}
