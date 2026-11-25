import type { SQL } from 'drizzle-orm'
import type { SelectedFields } from 'drizzle-orm/pg-core'

import { toOrderBy } from '../to/toOrderBy'
import type {
  CmsDbExecutor,
  CmsIdTable
} from '../../types/cmsDbTypes'

/** Options for querying multiple records from a CMS table / Опции выборки нескольких записей из таблицы CMS */
export interface FindRecordsOptions {
  /** Optional selected columns map / Необязательный набор выбираемых колонок */
  select?: SelectedFields
  /** SQL order-by expression or list; defaults to ascending table ID / SQL-выражение сортировки; по умолчанию по возрастанию ID таблицы */
  orderBy?: SQL | readonly SQL[]
  /** Maximum number of records to return / Максимальное количество возвращаемых записей */
  limit?: number
  /** Number of records to skip / Количество пропускаемых записей */
  offset?: number
}

/**
 * Queries multiple entity records matching an optional SQL predicate in the specified table.
 *
 * Загружает список записей в указанной таблице по необязательному SQL-предикату.
 * @param executor Database or transaction executor / Исполнитель БД или транзакции
 * @param table Drizzle table schema / Схема таблицы Drizzle
 * @param whereCondition Optional SQL predicate / Необязательное SQL-условие поиска
 * @param options Query projection, ordering, and pagination options / Параметры колонок, сортировки и пагинации
 * @returns List of matching records / Список найденных записей
 */
export async function findRecords<TRecord>(
  executor: CmsDbExecutor,
  table: CmsIdTable,
  whereCondition?: SQL,
  options: FindRecordsOptions = {}
): Promise<TRecord[]> {
  const orderByList = toOrderBy(table, options.orderBy)

  const baseQuery = (options.select ? executor.select(options.select) : executor.select())
    .from(table)
    .where(whereCondition)
    .orderBy(...orderByList)

  const limitedQuery = options.limit !== undefined
    ? baseQuery.limit(options.limit)
    : baseQuery

  const paginatedQuery = options.offset !== undefined
    ? limitedQuery.offset(options.offset)
    : limitedQuery

  return await paginatedQuery as TRecord[]
}
