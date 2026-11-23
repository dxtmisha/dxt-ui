import { eq } from 'drizzle-orm'
import type { SelectedFields } from 'drizzle-orm/pg-core'

import { useCmsDb } from '../composables/useCmsDb'
import { findOneCmsRecord } from '../functions/findOneCmsRecord'
import { updateCmsRecord } from '../functions/updateCmsRecord'
import { CmsVerification } from './CmsVerification'
import type { CmsDbInstance } from './CmsDbInstance'
import type {
  CmsIdTable,
  CmsTimestampValues
} from '../types/cmsDbTypes'

/**
 * Manages reading and updating `createdAt` / `updatedAt` timestamp columns of records in a CMS Drizzle table.
 *
 * Управляет чтением и обновлением временных колонок `createdAt` и `updatedAt` записей в таблице CMS Drizzle.
 */
export class CmsDbTimestamp<TTable extends CmsIdTable = CmsIdTable> {
  /**
   * Initializes the timestamp manager with a table schema and CmsDbInstance.
   *
   * Инициализирует менеджер временных меток со схемой таблицы и экземпляром CmsDbInstance.
   * @param table Drizzle PostgreSQL table schema / Схема таблицы Drizzle PostgreSQL
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  constructor(
    protected readonly table: TTable,
    protected readonly databaseInstance: CmsDbInstance = useCmsDb().cmsDbInstance
  ) {}

  /**
   * Returns `createdAt` and `updatedAt` timestamps of a record by identifier from the bound table.
   *
   * Возвращает временные метки `createdAt` и `updatedAt` записи по идентификатору из привязанной таблицы.
   * @param id Record identifier / Идентификатор записи
   * @returns Timestamp values or undefined if invalid, unsupported, or not found / Значения временных меток или undefined, если ID некорректен, колонки отсутствуют или запись не найдена
   */
  async get(id: number): Promise<CmsTimestampValues | undefined> {
    if (!CmsVerification.isPositiveInteger(id, false)) {
      return undefined
    }

    const baseTable = this.getBaseTable()
    const selectFields: SelectedFields = {}

    if (baseTable.createdAt) {
      selectFields.createdAt = baseTable.createdAt
    }

    if (baseTable.updatedAt) {
      selectFields.updatedAt = baseTable.updatedAt
    }

    if (Object.keys(selectFields).length === 0) {
      return undefined
    }

    return findOneCmsRecord<CmsTimestampValues>(
      this.databaseInstance.get(),
      baseTable,
      eq(baseTable.id, id),
      selectFields
    )
  }

  /**
   * Returns the `createdAt` timestamp of a record by identifier from the bound table.
   *
   * Возвращает дату создания `createdAt` записи по идентификатору из привязанной таблицы.
   * @param id Record identifier / Идентификатор записи
   * @returns Creation date or undefined if invalid, unsupported, or not found / Дата создания или undefined, если ID некорректен, колонка отсутствует или запись не найдена
   */
  async getCreatedAt(id: number): Promise<Date | undefined> {
    if (!this.getBaseTable().createdAt) {
      return undefined
    }

    return (await this.get(id))?.createdAt
  }

  /**
   * Returns the `updatedAt` timestamp of a record by identifier from the bound table.
   *
   * Возвращает дату последнего обновления `updatedAt` записи по идентификатору из привязанной таблицы.
   * @param id Record identifier / Идентификатор записи
   * @returns Last update date or undefined if invalid, unsupported, or not found / Дата обновления или undefined, если ID некорректен, колонка отсутствует или запись не найдена
   */
  async getUpdatedAt(id: number): Promise<Date | undefined> {
    if (!this.getBaseTable().updatedAt) {
      return undefined
    }

    return (await this.get(id))?.updatedAt
  }

  /**
   * Updates the `updatedAt` timestamp of a record by identifier in the bound table.
   *
   * Обновляет метку времени `updatedAt` записи по идентификатору в привязанной таблице.
   * @param id Record identifier / Идентификатор записи
   * @param updatedAt Target timestamp (defaults to current date) / Целевая метка времени (по умолчанию текущая дата)
   * @returns True if a matching record was updated / True, если запись найдена и обновлена
   */
  async update(
    id: number,
    updatedAt: Date = new Date()
  ): Promise<boolean> {
    CmsVerification.isPositiveInteger(id)

    const baseTable = this.getBaseTable()
    if (!baseTable.updatedAt) {
      return false
    }

    return updateCmsRecord(
      this.databaseInstance.get(),
      baseTable,
      eq(baseTable.id, id),
      { updatedAt } as Partial<typeof baseTable.$inferInsert>
    )
  }

  /**
   * Builds an update payload by combining the provided values with the current `updatedAt` timestamp when the bound table defines it.
   *
   * Формирует объект значений для обновления, объединяя переданные поля с текущей меткой времени `updatedAt`, если она присутствует в таблице.
   * @param values Partial update values / Частичные значения для обновления
   * @returns Combined update payload / Объединённый объект значений для обновления
   */
  buildUpdateValues(
    values: Record<string, unknown> = {}
  ): Partial<CmsIdTable['$inferInsert']> {
    const updateValues: Record<string, unknown> = {
      ...values
    }

    if (this.getBaseTable().updatedAt) {
      updateValues.updatedAt = new Date()
    }

    return updateValues as Partial<CmsIdTable['$inferInsert']>
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
}
