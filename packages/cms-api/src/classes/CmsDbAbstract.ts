import {
  and,
  eq,
  sql,
  type SQL
} from 'drizzle-orm'
import {
  ErrorCenterThrow,
  isPositiveInteger,
  uniqueArray
} from '@dxtmisha/functional-basic'

import { useCmsDb } from '../composables/useCmsDb'
import { registerCmsErrorCauses } from '../functions/registerCmsErrorCauses'
import { CmsDbSystemStatus } from './CmsDbSystemStatus'
import { CmsVerification } from './CmsVerification'
import type { CmsDbInstance } from './CmsDbInstance'
import type { CmsIdTable } from '../types/cmsDbTypes'

/**
 * Abstract base class providing unified CMS table binding, database instance management, and centralized ErrorCenterThrow delegation.
 *
 * Абстрактный базовый класс для единой привязки таблицы CMS, управления экземпляром базы данных и делегирования обработки ошибок в ErrorCenterThrow.
 */
export abstract class CmsDbAbstract<TTable extends CmsIdTable = CmsIdTable> {
  /** Lazily initialized system status manager / Лениво инициализируемый менеджер системного статуса */
  protected systemStatus?: CmsDbSystemStatus<TTable>

  /**
   * Initializes the base CMS database handler with a table schema and CmsDbInstance.
   *
   * Инициализирует базовый обработчик БД CMS со схемой таблицы и экземпляром CmsDbInstance.
   * @param table Drizzle PostgreSQL table schema with a required id column / Схема таблицы Drizzle PostgreSQL с обязательной колонкой id
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  constructor(
    protected table: TTable,
    protected readonly databaseInstance: CmsDbInstance = useCmsDb().cmsDbInstance
  ) {}

  /**
   * Returns the bound table typed as CmsIdTable for shared base queries.
   *
   * Возвращает привязанную таблицу с типом CmsIdTable для общих базовых запросов.
   * @returns Base CMS table schema / Базовая схема таблицы CMS
   */
  protected getBaseTable(): CmsIdTable {
    return this.table
  }

  /**
   * Returns a lazily initialized CmsDbSystemStatus instance for managing record system statuses.
   *
   * Возвращает лениво инициализируемый экземпляр CmsDbSystemStatus для управления системным статусом записей.
   * @returns CmsDbSystemStatus instance / Экземпляр CmsDbSystemStatus
   */
  protected getSystemStatus(): CmsDbSystemStatus<TTable> {
    if (!this.systemStatus) {
      this.systemStatus = new CmsDbSystemStatus(this.table, this.databaseInstance)
    }

    return this.systemStatus
  }

  /**
   * Builds an update payload by combining the provided values with the current updatedAt timestamp when the bound table defines it.
   *
   * Формирует объект значений для обновления, объединяя переданные поля с текущей меткой времени updatedAt, если она присутствует в таблице.
   * @param values Partial update values / Частичные значения для обновления
   * @returns Combined update payload / Объединённый объект значений для обновления
   */
  protected getUpdateValues(
    values: Record<string, unknown> = {}
  ): Partial<CmsIdTable['$inferInsert']> {
    return CmsDbSystemStatus.buildUpdateValues(this.getBaseTable(), values)
  }

  /**
   * Checks whether a record exists in the bound table by identifier and optional SQL predicate.
   *
   * Проверяет существование записи в привязанной таблице по идентификатору и необязательному SQL-условию.
   * @param id Record identifier / Идентификатор записи
   * @param condition Optional extra SQL predicate / Необязательное дополнительное SQL-условие
   * @returns True if record exists / True, если запись существует
   */
  protected async existsRecordById(
    id: number,
    condition?: SQL
  ): Promise<boolean> {
    if (!CmsVerification.isPositiveInteger(id)) {
      return false
    }

    const baseTable = this.getBaseTable()
    const whereCondition = condition
      ? and(eq(baseTable.id, id), condition)
      : eq(baseTable.id, id)

    const found = await this.databaseInstance.get()
      .select({ id: baseTable.id })
      .from(baseTable)
      .where(whereCondition)
      .limit(1)

    return found.length > 0
  }

  /**
   * Counts records in the bound table matching an optional SQL predicate.
   *
   * Подсчитывает количество записей в привязанной таблице по необязательному SQL-условию.
   * @param whereCondition Optional SQL predicate / Необязательное SQL-условие
   * @returns Number of matching records / Количество найденных записей
   */
  protected async countRecords(whereCondition?: SQL): Promise<number> {
    const baseTable = this.getBaseTable()
    const countRows = await this.databaseInstance.get()
      .select({ count: sql<number>`count(*)::int` })
      .from(baseTable)
      .where(whereCondition)

    return countRows[0]?.count ?? 0
  }

  /**
   * Permanently deletes a record by identifier from the bound table.
   *
   * Безвозвратно удаляет запись по идентификатору из привязанной таблицы.
   * @param id Record identifier / Идентификатор записи
   * @returns True if a record was deleted / True, если запись была удалена
   */
  protected async deleteRecordById(id: number): Promise<boolean> {
    if (!isPositiveInteger(id)) {
      return false
    }

    const baseTable = this.getBaseTable()
    const deletedRows = await this.databaseInstance.get()
      .delete(baseTable)
      .where(eq(baseTable.id, id))
      .returning({ id: baseTable.id })

    return deletedRows.length > 0
  }

  /**
   * Validates and verifies entity identifiers by their IDs using the provided lookup callback.
   *
   * Проверяет и подтверждает существование идентификаторов сущностей по их ID с помощью функции поиска.
   * @param errorGroup Error group / Группа ошибки
   * @param errorCode Error code reported when entities are invalid or missing / Код ошибки при невалидных или отсутствующих записях
   * @param fetchByIds Callback fetching persisted records matching given IDs / Функция выборки записей по ID
   * @param ids List of entity IDs / Список ID сущностей
   * @returns Deduplicated list of verified entity IDs / Уникальный список проверенных ID сущностей
   */
  protected static async resolveEntityIdsByIds(
    errorGroup: string,
    errorCode: string,
    fetchByIds: (ids: number[]) => Promise<Array<{ id: number }>>,
    ids?: readonly number[]
  ): Promise<number[]> {
    if (ids === undefined) {
      return []
    }

    const uniqueIds = uniqueArray(ids)
    for (const entityId of uniqueIds) {
      if (!isPositiveInteger(entityId)) {
        registerCmsErrorCauses()
        ErrorCenterThrow.on({
          group: errorGroup,
          code: errorCode,
          details: { id: entityId }
        })
      }
    }

    if (uniqueIds.length === 0) {
      return []
    }

    const persistedByIds = await fetchByIds(uniqueIds)
    const foundIdSet = new Set(persistedByIds.map(record => record.id))
    const missingIds = uniqueIds.filter(entityId => !foundIdSet.has(entityId))

    if (missingIds.length > 0) {
      registerCmsErrorCauses()
      ErrorCenterThrow.on({
        group: errorGroup,
        code: errorCode,
        details: { missingIds }
      })
    }

    return uniqueIds
  }

  /**
   * Resolves and verifies entity identifiers by their unique codes using the provided lookup callback.
   *
   * Разрешает и проверяет идентификаторы сущностей по их уникальным кодам с помощью функции поиска.
   * @param errorGroup Error group / Группа ошибки
   * @param errorCode Error code reported when entities are missing / Код ошибки при отсутствующих записях
   * @param fetchByCodes Callback fetching persisted records matching given codes / Функция выборки записей по кодам
   * @param codes List of entity codes / Список кодов сущностей
   * @returns Deduplicated list of resolved entity IDs / Уникальный список найденных ID сущностей
   */
  protected static async resolveEntityIdsByCodes(
    errorGroup: string,
    errorCode: string,
    fetchByCodes: (codes: string[]) => Promise<Array<{ id: number, code: string }>>,
    codes?: readonly string[]
  ): Promise<number[]> {
    if (codes === undefined) {
      return []
    }

    const uniqueCodes = uniqueArray(
      codes
        .map(code => code.trim())
        .filter(code => code.length > 0)
    )

    if (uniqueCodes.length === 0) {
      return []
    }

    const persistedByCodes = await fetchByCodes(uniqueCodes)
    const idByCode = new Map(persistedByCodes.map(record => [record.code, record.id]))
    const missingCodes = uniqueCodes.filter(code => !idByCode.has(code))

    if (missingCodes.length > 0) {
      registerCmsErrorCauses()
      ErrorCenterThrow.on({
        group: errorGroup,
        code: errorCode,
        details: { missingCodes }
      })
    }

    const resolvedIds: number[] = []
    for (const code of uniqueCodes) {
      const entityId = idByCode.get(code)
      if (entityId !== undefined) {
        resolvedIds.push(entityId)
      }
    }

    return uniqueArray(resolvedIds)
  }
}
