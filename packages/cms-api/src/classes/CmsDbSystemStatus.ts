import { eq } from 'drizzle-orm'
import { hasKey } from '@dxtmisha/functional-basic'

import { useCmsDb } from '../composables/useCmsDb'
import { findOneRecord } from '../functions/db/findOneRecord'
import { updateRecord } from '../functions/db/updateRecord'
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
    const row = await findOneRecord<{ systemStatus: CmsSystemStatus }>(
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
    return updateRecord(
      this.databaseInstance.get(),
      baseTable,
      eq(baseTable.id, id),
      this.buildUpdateValues({}, systemStatus)
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
   * Builds an insert payload with `systemStatus` (defaulting to `'active'`) and optional `createdAt`/`updatedAt` timestamps via `getTimestamp`.
   *
   * Формирует объект значений для создания записи с полем `systemStatus` (по умолчанию `'active'`) и опциональными метками времени `createdAt`/`updatedAt` через `getTimestamp`.
   * @param values Partial insert values / Частичные значения для создания записи
   * @param systemStatus Optional explicit system status override / Необязательный явный системный статус
   * @returns Combined insert payload / Объединённый объект значений для вставки
   */
  buildCreateValues(
    values: object = {},
    systemStatus?: CmsSystemStatus
  ): Partial<TTable['$inferInsert']> {
    return this.buildSystemStatusValues(values, systemStatus, true)
  }

  /**
   * Builds a payload by applying optional `systemStatus` and delegating timestamp fields to `getTimestamp`.
   *
   * Формирует объект значений, добавляя системный статус при необходимости и делегируя заполнение временных меток в `getTimestamp`.
   * @param values Partial record values / Частичные значения записи
   * @param systemStatus Optional explicit system status / Необязательный явный системный статус
   * @param isCreate Whether the payload is built for record creation / Формируется ли объект для создания новой записи
   * @returns Combined record payload / Объединённый объект значений записи
   */
  buildSystemStatusValues(
    values: object = {},
    systemStatus?: CmsSystemStatus,
    isCreate: boolean = false
  ): Partial<TTable['$inferInsert']> {
    const baseTable = this.getBaseTable()
    const statusValues: Record<string, unknown> = {
      ...values
    }

    if (hasKey(baseTable, 'systemStatus')) {
      if (systemStatus !== undefined) {
        statusValues.systemStatus = systemStatus
      } else if (
        isCreate
        && statusValues.systemStatus === undefined
      ) {
        statusValues.systemStatus = 'active'
      }
    }

    if (this.getTimestamp) {
      return this.getTimestamp().buildTimestampValues(statusValues, isCreate)
    }

    return statusValues as Partial<TTable['$inferInsert']>
  }

  /**
   * Builds an update payload with optional `systemStatus` and `updatedAt` timestamp via `getTimestamp`.
   *
   * Формирует объект значений для обновления записи с опциональным `systemStatus` и меткой времени `updatedAt` через `getTimestamp`.
   * @param values Partial update values / Частичные значения для обновления
   * @param systemStatus Optional explicit system status / Необязательный явный системный статус
   * @returns Combined update payload / Объединённый объект значений для обновления
   */
  buildUpdateValues(
    values: object = {},
    systemStatus?: CmsSystemStatus
  ): Partial<TTable['$inferInsert']> {
    return this.buildSystemStatusValues(values, systemStatus)
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
