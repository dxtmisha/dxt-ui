import {
  and,
  eq,
  sql,
  type SQL
} from 'drizzle-orm'
import {
  isPositiveInteger,
  uniqueArray,
  type ErrorCenterInstance
} from '@dxtmisha/functional-basic'

import { useCmsDb } from '../composables/useCmsDb'
import { CmsError } from './CmsError'
import type { CmsDbInstance } from './CmsDbInstance'
import type { CmsErrorInstance } from './CmsErrorInstance'
import type {
  CmsDb,
  CmsIdTable
} from '../types/cmsDbTypes'

/**
 * Abstract base class providing unified CMS table binding, database instance management, and centralized CmsErrorInstance delegation.
 *
 * Абстрактный базовый класс для единой привязки таблицы CMS, управления экземпляром базы данных и делегирования обработки ошибок в CmsErrorInstance.
 */
export abstract class CmsDbAbstract<TTable extends CmsIdTable = CmsIdTable> {
  /**
   * Initializes the base CMS database handler with a table schema, CmsDbInstance, and CmsErrorInstance.
   *
   * Инициализирует базовый обработчик БД CMS со схемой таблицы, экземпляром CmsDbInstance и обработчиком ошибок CmsErrorInstance.
   * @param table Drizzle PostgreSQL table schema with a required id column / Схема таблицы Drizzle PostgreSQL с обязательной колонкой id
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   * @param error CMS error instance handler / Обработчик ошибок CMS
   */
  constructor(
    protected table: TTable,
    protected databaseInstance: CmsDbInstance = useCmsDb().cmsDbInstance,
    protected error: CmsErrorInstance = CmsError.getItem()
  ) {}

  /**
   * Returns the Drizzle table schema bound to this instance.
   *
   * Возвращает схему таблицы Drizzle, привязанную к этому экземпляру.
   * @returns Drizzle table schema with id column / Схема таблицы Drizzle с колонкой id
   */
  getTable(): TTable {
    return this.table
  }

  /**
   * Returns the active Drizzle database instance from the managed CmsDbInstance.
   *
   * Возвращает активный экземпляр базы данных Drizzle из управляемого CmsDbInstance.
   * @returns Typed Drizzle CMS database instance / Типизированный экземпляр базы данных Drizzle CMS
   */
  getDatabase(): CmsDb {
    return this.databaseInstance.get()
  }

  /**
   * Returns the managed CmsDbInstance wrapper.
   *
   * Возвращает управляемый экземпляр CmsDbInstance.
   * @returns CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  getDatabaseInstance(): CmsDbInstance {
    return this.databaseInstance
  }

  /**
   * Returns the managed CmsErrorInstance handler.
   *
   * Возвращает управляемый экземпляр обработчика ошибок CmsErrorInstance.
   * @returns CmsErrorInstance instance / Экземпляр CmsErrorInstance
   */
  getError(): CmsErrorInstance {
    return this.error
  }

  /**
   * Returns the ErrorCenter instance used for centralized error reporting.
   *
   * Возвращает экземпляр ErrorCenter, используемый для централизованной регистрации ошибок.
   * @returns ErrorCenter instance / Экземпляр ErrorCenter
   */
  getErrorCenter(): ErrorCenterInstance {
    return this.error.getErrorCenter()
  }

  /**
   * Sets or overrides the CmsDbInstance wrapper used by this instance.
   *
   * Устанавливает или заменяет экземпляр CmsDbInstance, используемый текущим объектом.
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   * @returns Current instance for chaining / Текущий экземпляр для цепочки вызовов
   */
  setDatabaseInstance(databaseInstance: CmsDbInstance): this {
    this.databaseInstance = databaseInstance
    return this
  }

  /**
   * Sets or overrides the ErrorCenter instance used for error reporting.
   *
   * Устанавливает или заменяет экземпляр ErrorCenter для регистрации ошибок.
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @returns Current instance for chaining / Текущий экземпляр для цепочки вызовов
   */
  setErrorCenter(errorCenter: ErrorCenterInstance): this {
    this.error.setErrorCenter(errorCenter)
    return this
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
    if (!isPositiveInteger(id)) {
      return false
    }

    const baseTable: CmsIdTable = this.table
    const whereCondition = condition
      ? and(eq(baseTable.id, id), condition)
      : eq(baseTable.id, id)

    const found = await this.getDatabase()
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
    const baseTable: CmsIdTable = this.table
    const countRows = await this.getDatabase()
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

    const baseTable: CmsIdTable = this.table
    const deletedRows = await this.getDatabase()
      .delete(baseTable)
      .where(eq(baseTable.id, id))
      .returning({ id: baseTable.id })

    return deletedRows.length > 0
  }

  /**
   * Validates and verifies entity identifiers by their IDs using the provided lookup callback.
   *
   * Проверяет и подтверждает существование идентификаторов сущностей по их ID с помощью функции поиска.
   * @param error CmsErrorInstance handler / Обработчик ошибок CmsErrorInstance
   * @param errorCode Error code reported when entities are invalid or missing / Код ошибки при невалидных или отсутствующих записях
   * @param entityName Human-readable entity name for error messages / Название сущности для сообщений об ошибках
   * @param fetchByIds Callback fetching persisted records matching given IDs / Функция выборки записей по ID
   * @param ids List of entity IDs / Список ID сущностей
   * @returns Deduplicated list of verified entity IDs / Уникальный список проверенных ID сущностей
   */
  protected static async resolveEntityIdsByIds(
    error: CmsErrorInstance,
    errorCode: string,
    entityName: string,
    fetchByIds: (ids: number[]) => Promise<Array<{ id: number }>>,
    ids?: readonly number[]
  ): Promise<number[]> {
    if (ids === undefined) {
      return []
    }

    const uniqueIds = uniqueArray(ids)
    for (const entityId of uniqueIds) {
      if (!isPositiveInteger(entityId)) {
        error.report(
          errorCode,
          `Invalid ${entityName} ID: ${String(entityId)}.`,
          { id: entityId }
        )
      }
    }

    if (uniqueIds.length === 0) {
      return []
    }

    const persistedByIds = await fetchByIds(uniqueIds)
    const foundIdSet = new Set(persistedByIds.map(record => record.id))
    const missingIds = uniqueIds.filter(entityId => !foundIdSet.has(entityId))

    if (missingIds.length > 0) {
      error.report(
        errorCode,
        `${entityName}s not found for IDs: ${missingIds.join(', ')}.`,
        { missingIds }
      )
    }

    return uniqueIds
  }

  /**
   * Resolves and verifies entity identifiers by their unique codes using the provided lookup callback.
   *
   * Разрешает и проверяет идентификаторы сущностей по их уникальным кодам с помощью функции поиска.
   * @param error CmsErrorInstance handler / Обработчик ошибок CmsErrorInstance
   * @param errorCode Error code reported when entities are missing / Код ошибки при отсутствующих записях
   * @param entityName Human-readable entity name for error messages / Название сущности для сообщений об ошибках
   * @param fetchByCodes Callback fetching persisted records matching given codes / Функция выборки записей по кодам
   * @param codes List of entity codes / Список кодов сущностей
   * @returns Deduplicated list of resolved entity IDs / Уникальный список найденных ID сущностей
   */
  protected static async resolveEntityIdsByCodes(
    error: CmsErrorInstance,
    errorCode: string,
    entityName: string,
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
      error.report(
        errorCode,
        `${entityName}s not found for codes: ${missingCodes.join(', ')}.`,
        { missingCodes }
      )
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
