import { getTableColumns } from 'drizzle-orm'
import { hasKey } from '@dxtmisha/functional-basic'

import { useCmsDb } from '../../../composables/useCmsDb'
import { CmsDbSystemStatus } from '../../CmsDbSystemStatus'
import { CmsDbTimestamp } from '../../CmsDbTimestamp'
import type { CmsDbInstance } from '../../CmsDbInstance'
import type {
  CmsDbUpdateValidator,
  CmsIdTable
} from '../../../types/cmsDbTypes'

/**
 * Abstract base class providing table/database binding, lazy `systemStatus` and `timestamp` managers, and validated create/update payload builders.
 *
 * Абстрактный базовый класс с привязкой таблицы и менеджера БД, ленивыми менеджерами `systemStatus` и `timestamp`, а также методами формирования и валидации данных для создания и обновления записей.
 */
export abstract class CmsDbValuesAbstract<TTable extends CmsIdTable = CmsIdTable> {
  /** Lazily initialized system status manager / Лениво инициализируемый менеджер системного статуса */
  protected systemStatusInstance?: CmsDbSystemStatus<TTable>

  /** Lazily initialized timestamp manager / Лениво инициализируемый менеджер временных меток */
  protected timestampInstance?: CmsDbTimestamp<TTable>

  /**
   * Initializes the base CMS values handler with a table schema and CmsDbInstance.
   *
   * Инициализирует базовый обработчик значений БД CMS со схемой таблицы и экземпляром CmsDbInstance.
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
   * Builds and validates database insert payload from create input by checking table columns, skipping forbidden columns, applying registered validators, and populating systemStatus and timestamps.
   *
   * Формирует и валидирует объект создания записи в базе данных, проверяя колонки таблицы, исключая запрещённые поля, применяя валидаторы и автоматически заполняя systemStatus и временные метки.
   * @param input Entity creation payload / Данные для создания записи
   * @returns Validated Drizzle insert payload / Валидированные поля для вставки
   */
  buildCreateValues<TInput extends object = Partial<TTable['$inferInsert']>>(
    input: TInput
  ): Partial<TTable['$inferInsert']> {
    return this.buildValues(input, true)
  }

  /**
   * Builds and validates database update payload from partial update input by checking table columns, skipping forbidden columns, applying registered validators, and populating updatedAt.
   *
   * Формирует и валидирует объект обновления в базе данных из входных данных, проверяя колонки таблицы, исключая запрещённые поля, применяя валидаторы и обновляя метку времени updatedAt.
   * @param input Partial entity update payload / Частичные данные для обновления записи
   * @returns Validated partial Drizzle update payload / Валидированные поля для обновления
   */
  buildUpdateValues<TInput extends object = Partial<TTable['$inferInsert']>>(
    input: TInput
  ): Partial<TTable['$inferInsert']> {
    return this.buildValues(input)
  }

  /**
   * Builds and validates database payload from input by checking table column existence, skipping forbidden columns, applying registered column validators, and delegating systemStatus and timestamps to `systemStatus.buildSystemStatusValues`.
   *
   * Формирует и валидирует объект значений для базы данных из входных данных, проверяя наличие колонок в таблице, исключая запрещённые поля, применяя валидаторы и заполняя systemStatus и временные метки через `systemStatus.buildSystemStatusValues`.
   * @param input Entity payload / Входные данные записи
   * @param isCreate Whether the payload is built for record creation / Формируется ли объект для создания новой записи
   * @returns Validated Drizzle record payload / Валидированные поля записи
   */
  buildValues<TInput extends object = Partial<TTable['$inferInsert']>>(
    input: TInput,
    isCreate: boolean = false
  ): Partial<TTable['$inferInsert']> {
    const tableColumns = getTableColumns(this.table)
    const forbiddenColumns = this.getForbiddenColumns(isCreate)
    const validators = this.getValidators(isCreate)
    const values: Record<string, unknown> = {}

    for (const [key, value] of Object.entries(input)) {
      if (
        value === undefined
        || forbiddenColumns.includes(key)
        || !hasKey(tableColumns, key)
      ) {
        continue
      }

      const validator = hasKey(validators, key)
        ? validators[key]
        : undefined

      values[key] = validator ? validator(value) : value
    }

    return this.systemStatus.buildSystemStatusValues(values, undefined, isCreate)
  }

  /**
   * Returns the list of column names forbidden for the current payload operation.
   *
   * Возвращает список имён колонок, запрещённых для текущей операции формирования данных.
   * @param isCreate Whether the payload is built for record creation / Формируется ли объект для создания новой записи
   * @returns List of forbidden column names / Список запрещённых имён колонок
   */
  protected getForbiddenColumns(
    isCreate: boolean = false
  ): readonly string[] {
    return isCreate
      ? this.getForbiddenCreateColumns()
      : this.getForbiddenUpdateColumns()
  }

  /**
   * Returns the list of column names forbidden during record creation.
   *
   * Возвращает список имён колонок, запрещённых к ручной передаче при создании записи.
   * @returns List of forbidden column names / Список запрещённых имён колонок
   */
  protected getForbiddenCreateColumns(): readonly string[] {
    return [
      'id',
      'createdAt',
      'updatedAt'
    ]
  }

  /**
   * Returns the list of column names forbidden from modification during update.
   *
   * Возвращает список имён колонок, запрещённых к изменению при обновлении.
   * @returns List of forbidden column names / Список запрещённых имён колонок
   */
  protected getForbiddenUpdateColumns(): readonly string[] {
    return this.getForbiddenCreateColumns()
  }

  /**
   * Returns the map of column value validators and normalizers for the current payload operation.
   *
   * Возвращает карту валидаторов и нормализаторов значений по имени колонки для текущей операции формирования данных.
   * @param isCreate Whether the payload is built for record creation / Формируется ли объект для создания новой записи
   * @returns Column validator map / Карта валидаторов по имени колонки
   */
  protected getValidators(
    isCreate: boolean = false
  ): Record<string, CmsDbUpdateValidator> {
    return isCreate
      ? this.getCreateValidators()
      : this.getUpdateValidators()
  }

  /**
   * Returns a map of column value validators and normalizers used during record creation.
   *
   * Возвращает карту валидаторов и нормализаторов значений по имени колонки для создания записи.
   * @returns Column validator map / Карта валидаторов по имени колонки
   */
  protected getCreateValidators(): Record<string, CmsDbUpdateValidator> {
    return this.getUpdateValidators()
  }

  /**
   * Returns a map of column value validators and normalizers keyed by column name.
   *
   * Возвращает карту валидаторов и нормализаторов значений по имени колонки.
   * @returns Column validator map / Карта валидаторов по имени колонки
   */
  protected getUpdateValidators(): Record<string, CmsDbUpdateValidator> {
    return {}
  }
}
