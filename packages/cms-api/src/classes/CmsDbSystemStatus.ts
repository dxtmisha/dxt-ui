import { eq } from 'drizzle-orm'

import { useCmsDb } from '../composables/useCmsDb'
import { CmsVerification } from './CmsVerification'
import type { CmsDbInstance } from './CmsDbInstance'
import type {
  CmsIdTable,
  CmsSystemStatus
} from '../types/cmsDbTypes'

/**
 * Manages reading and updating the `systemStatus` column of records in a CMS Drizzle table.
 *
 * Управляет чтением и обновлением колонки `systemStatus` записей в таблице CMS Drizzle.
 */
export class CmsDbSystemStatus<TTable extends CmsIdTable = CmsIdTable> {
  /**
   * Initializes the system status manager with a table schema and CmsDbInstance.
   *
   * Инициализирует менеджер системного статуса со схемой таблицы и экземпляром CmsDbInstance.
   * @param table Drizzle PostgreSQL table schema with id and systemStatus columns / Схема таблицы Drizzle PostgreSQL с колонками id и systemStatus
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  constructor(
    protected readonly table: TTable,
    protected readonly databaseInstance: CmsDbInstance = useCmsDb().cmsDbInstance
  ) {}

  /**
   * Returns the system status of a record by identifier from the bound table.
   *
   * Возвращает системный статус записи по идентификатору из привязанной таблицы.
   * @param id Record identifier / Идентификатор записи
   * @returns System status or undefined if invalid or not found / Системный статус или undefined, если ID некорректен или запись не найдена
   */
  async get(id: number): Promise<CmsSystemStatus | undefined> {
    if (!CmsVerification.isPositiveInteger(id)) {
      return undefined
    }

    const baseTable = this.getBaseTable()
    const rows = await this.databaseInstance.get()
      .select({ systemStatus: baseTable.systemStatus })
      .from(baseTable)
      .where(eq(baseTable.id, id))
      .limit(1)

    return rows[0]?.systemStatus as CmsSystemStatus | undefined
  }

  /**
   * Updates the system status of a record by identifier in the bound table.
   *
   * Обновляет системный статус записи по идентификатору в привязанной таблице.
   * @param id Record identifier / Идентификатор записи
   * @param systemStatus Target system status / Целевой системный статус
   * @returns True if a matching record was updated / True, если запись найдена и обновлена
   */
  async update(
    id: number,
    systemStatus: CmsSystemStatus
  ): Promise<boolean> {
    CmsVerification.isPositiveInteger(id, true)

    const baseTable = this.getBaseTable()
    const updatedRows = await this.databaseInstance.get()
      .update(baseTable)
      .set(CmsDbSystemStatus.buildUpdateValues(baseTable, { systemStatus }))
      .where(eq(baseTable.id, id))
      .returning({ id: baseTable.id })

    return updatedRows.length > 0
  }

  /**
   * Marks a record as active (`systemStatus = 'active'`) by identifier.
   *
   * Переводит запись в активный системный статус (`systemStatus = 'active'`) по идентификатору.
   * @param id Record identifier / Идентификатор записи
   * @returns True if a matching record was activated / True, если запись найдена и активирована
   */
  async activate(id: number): Promise<boolean> {
    return this.update(id, 'active')
  }

  /**
   * Marks a record as blocked (`systemStatus = 'blocked'`) by identifier.
   *
   * Переводит запись в заблокированный системный статус (`systemStatus = 'blocked'`) по идентификатору.
   * @param id Record identifier / Идентификатор записи
   * @returns True if a matching record was blocked / True, если запись найдена и заблокирована
   */
  async block(id: number): Promise<boolean> {
    return this.update(id, 'blocked')
  }

  /**
   * Marks a record as soft-deleted (`systemStatus = 'deleted'`) by identifier.
   *
   * Помечает запись как мягко удалённую (`systemStatus = 'deleted'`) по идентификатору.
   * @param id Record identifier / Идентификатор записи
   * @returns True if a matching record was marked as deleted / True, если запись найдена и помечена как удалённая
   */
  async softDelete(id: number): Promise<boolean> {
    return this.update(id, 'deleted')
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
   * Builds an update payload by combining the provided values with the current updatedAt timestamp when the table defines it.
   *
   * Формирует объект значений для обновления, объединяя переданные поля с текущей меткой времени updatedAt, если она присутствует в таблице.
   * @param table Base CMS table schema / Базовая схема таблицы CMS
   * @param values Partial update values / Частичные значения для обновления
   * @returns Combined update payload / Объединённый объект значений для обновления
   */
  static buildUpdateValues(
    table: CmsIdTable,
    values: Record<string, unknown> = {}
  ): Partial<CmsIdTable['$inferInsert']> {
    const updateValues: Record<string, unknown> = {
      ...values
    }

    if (table.updatedAt) {
      updateValues.updatedAt = new Date()
    }

    return updateValues as Partial<CmsIdTable['$inferInsert']>
  }
}
