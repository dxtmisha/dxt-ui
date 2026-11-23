import {
  and,
  eq,
  sql,
  type SQL
} from 'drizzle-orm'

import { useCmsDb } from '../../composables/useCmsDb'
import { deleteCmsRecord } from '../../functions/deleteCmsRecord'
import { findOneCmsRecord } from '../../functions/findOneCmsRecord'
import { updateCmsRecord } from '../../functions/updateCmsRecord'
import { CmsDbSystemStatus } from '../CmsDbSystemStatus'
import { CmsDbTimestamp } from '../CmsDbTimestamp'
import { CmsVerification } from '../CmsVerification'
import type { CmsDbInstance } from '../CmsDbInstance'
import type { CmsIdTable } from '../../types/cmsDbTypes'

/**
 * Abstract base class providing unified CMS table binding, database instance management, and centralized ErrorCenterThrow delegation.
 *
 * Абстрактный базовый класс для единой привязки таблицы CMS, управления экземпляром базы данных и делегирования обработки ошибок в ErrorCenterThrow.
 */
export abstract class CmsDbAbstract<TTable extends CmsIdTable = CmsIdTable> {
  /** Lazily initialized system status manager / Лениво инициализируемый менеджер системного статуса */
  protected systemStatusInstance?: CmsDbSystemStatus<TTable>

  /** Lazily initialized timestamp manager / Лениво инициализируемый менеджер временных меток */
  protected timestampInstance?: CmsDbTimestamp<TTable>

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
   * Lazily initialized CmsDbSystemStatus instance for managing record system statuses /
   * Лениво инициализируемый экземпляр CmsDbSystemStatus для управления системным статусом записей
   */
  protected get systemStatus(): CmsDbSystemStatus<TTable> {
    if (!this.systemStatusInstance) {
      this.systemStatusInstance = new CmsDbSystemStatus(
        this.table,
        this.databaseInstance,
        () => this.timestamp
      )
    }

    return this.systemStatusInstance
  }

  /**
   * Lazily initialized CmsDbTimestamp instance for managing record timestamps /
   * Лениво инициализируемый экземпляр CmsDbTimestamp для управления временными метками записей
   */
  protected get timestamp(): CmsDbTimestamp<TTable> {
    if (!this.timestampInstance) {
      this.timestampInstance = new CmsDbTimestamp(
        this.table,
        this.databaseInstance
      )
    }

    return this.timestampInstance
  }

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
   * Builds an update payload by combining the provided values with the current updatedAt timestamp when the bound table defines it.
   *
   * Формирует объект значений для обновления, объединяя переданные поля с текущей меткой времени updatedAt, если она присутствует в таблице.
   * @param values Partial update values / Частичные значения для обновления
   * @returns Combined update payload / Объединённый объект значений для обновления
   */
  protected getUpdateValues(
    values: Record<string, unknown> = {}
  ): Partial<CmsIdTable['$inferInsert']> {
    return this.timestamp.buildUpdateValues(values)
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
    if (!CmsVerification.isPositiveInteger(id, false)) {
      return false
    }

    const baseTable = this.getBaseTable()
    const whereCondition = condition
      ? and(eq(baseTable.id, id), condition)
      : eq(baseTable.id, id)

    const found = await findOneCmsRecord<{ id: number }>(
      this.databaseInstance.get(),
      baseTable,
      whereCondition,
      { id: baseTable.id }
    )

    return Boolean(found)
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
    CmsVerification.isPositiveInteger(id)

    const baseTable = this.getBaseTable()
    return deleteCmsRecord(
      this.databaseInstance.get(),
      baseTable,
      eq(baseTable.id, id)
    )
  }

  /**
   * Updates a record by identifier in the bound table with automatic `updatedAt` handling.
   *
   * Обновляет запись по идентификатору в привязанной таблице с автоматическим обновлением `updatedAt`.
   * @param id Record identifier / Идентификатор записи
   * @param values Partial column values to update / Частичные значения колонок для обновления
   * @returns True if a matching record was updated / True, если запись найдена и обновлена
   */
  protected async updateRecordById(
    id: number,
    values: Record<string, unknown>
  ): Promise<boolean> {
    CmsVerification.isPositiveInteger(id)

    const baseTable = this.getBaseTable()
    return updateCmsRecord(
      this.databaseInstance.get(),
      baseTable,
      eq(baseTable.id, id),
      this.getUpdateValues(values)
    )
  }
}
