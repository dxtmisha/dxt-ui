import { eq } from 'drizzle-orm'

import { useCmsDb } from '../composables/useCmsDb'
import { findOneCmsRecord } from '../functions/findOneCmsRecord'
import { updateCmsRecord } from '../functions/updateCmsRecord'
import { CmsVerification } from './CmsVerification'
import type { CmsDbInstance } from './CmsDbInstance'
import type { CmsDbTimestamp } from './CmsDbTimestamp'
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
   * Initializes the system status manager with a table schema, CmsDbInstance, and optional lazy timestamp manager factory.
   *
   * Инициализирует менеджер системного статуса со схемой таблицы, экземпляром CmsDbInstance и необязательной фабрикой ленивого получения менеджера временных меток.
   * @param table Drizzle PostgreSQL table schema with id and systemStatus columns / Схема таблицы Drizzle PostgreSQL с колонками id и systemStatus
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   * @param getTimestamp Optional lazy factory returning CmsDbTimestamp / Необязательная фабрика ленивого получения CmsDbTimestamp
   */
  constructor(
    protected readonly table: TTable,
    protected readonly databaseInstance: CmsDbInstance = useCmsDb().cmsDbInstance,
    protected readonly getTimestamp?: () => CmsDbTimestamp<TTable>
  ) {}

  /**
   * Returns the system status of a record by identifier from the bound table.
   *
   * Возвращает системный статус записи по идентификатору из привязанной таблицы.
   * @param id Record identifier / Идентификатор записи
   * @returns System status or undefined if invalid or not found / Системный статус или undefined, если ID некорректен или запись не найдена
   */
  async get(id: number): Promise<CmsSystemStatus | undefined> {
    if (!CmsVerification.isPositiveInteger(id, false)) {
      return undefined
    }

    const baseTable = this.getBaseTable()
    const row = await findOneCmsRecord<{ systemStatus: CmsSystemStatus }>(
      this.databaseInstance.get(),
      baseTable,
      eq(baseTable.id, id),
      { systemStatus: baseTable.systemStatus }
    )

    return row?.systemStatus
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
    CmsVerification.isPositiveInteger(id)

    const baseTable = this.getBaseTable()
    return updateCmsRecord(
      this.databaseInstance.get(),
      baseTable,
      eq(baseTable.id, id),
      this.getUpdateValues(systemStatus)
    )
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
   * Builds the update payload with `systemStatus` and optional `updatedAt` timestamp via `getTimestamp`.
   *
   * Формирует объект значений для обновления с `systemStatus` и опциональной меткой времени `updatedAt` через `getTimestamp`.
   * @param systemStatus Target system status / Целевой системный статус
   * @returns Update payload object / Объект значений для обновления
   */
  protected getUpdateValues(
    systemStatus: CmsSystemStatus
  ): Partial<CmsIdTable['$inferInsert']> {
    if (this.getTimestamp) {
      return this.getTimestamp().buildUpdateValues({ systemStatus })
    }

    return { systemStatus } as Partial<CmsIdTable['$inferInsert']>
  }
}
