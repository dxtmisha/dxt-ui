import {
  eq,
  type SQL
} from 'drizzle-orm'
import {
  ErrorCenterThrow,
  isFilled
} from '@dxtmisha/functional-basic'

import { deleteRecord } from '../../functions/db/deleteRecord'
import { findOneRecord } from '../../functions/db/findOneRecord'
import { hasRecord } from '../../functions/db/hasRecord'
import { insertRecord } from '../../functions/db/insertRecord'
import { updateRecord } from '../../functions/db/updateRecord'
import { CmsDbValuesAbstract } from './CmsDbValuesAbstract'
import { CmsVerification } from '../CmsVerification'
import type { CmsDbInstance } from '../CmsDbInstance'
import type {
  CmsDbIdData,
  CmsIdTable
} from '../../types/cmsDbTypes'

/**
 * Abstract base class for CMS database entity item wrappers providing shared record getters, updates, reloads, and deletion.
 *
 * Абстрактный базовый класс для обёрток записей сущностей БД CMS с общими геттерами, обновлением, перезагрузкой и удалением.
 */
export abstract class CmsDbItemAbstract<
  TTable extends CmsIdTable = CmsIdTable,
  TData extends CmsDbIdData = CmsDbIdData,
  TFilled extends object = object
> extends CmsDbValuesAbstract<TTable> {
  /** Local entity record snapshot / Локальный снимок записи сущности */
  protected data?: TData

  /**
   * Initializes an entity item wrapper with its table schema, optional record snapshot, and optional database instance manager.
   *
   * Инициализирует обёртку записи сущности со схемой таблицы, необязательными данными записи и необязательным менеджером БД.
   * @param table Drizzle PostgreSQL table schema / Схема таблицы Drizzle PostgreSQL
   * @param data Optional partial or full entity record snapshot / Необязательные частичные или полные данные записи сущности
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  constructor(
    table: TTable,
    data?: Partial<TData>,
    databaseInstance?: CmsDbInstance
  ) {
    super(table, databaseInstance)

    if (data) {
      this.setData(data)
    }
  }

  /**
   * Checks whether this entity record exists in the database.
   *
   * Проверяет наличие этой записи в базе данных.
   * @returns True if record exists in the database / True, если запись существует в базе данных
   */
  async existsInDatabase(): Promise<boolean> {
    if (!this.hasId()) {
      return false
    }

    return hasRecord(
      this.databaseInstance.get(),
      this.getBaseTable(),
      this.getWhereId()
    )
  }

  /**
   * Checks whether the local record snapshot has a valid positive integer identifier.
   *
   * Проверяет, содержит ли локальный снимок записи корректный положительный целочисленный идентификатор.
   * @returns True if record ID is present and valid / True, если идентификатор записи присутствует и корректен
   */
  hasId(): this is {
    getId(): number
    getData(): TData
  } & TFilled & this {
    return this.hasData()
      && CmsVerification.isPositiveInteger(this.getId(), false)
  }

  /**
   * Checks whether the local record snapshot exists and contains at least one field.
   *
   * Проверяет, существует ли локальный снимок записи и содержит ли он данные.
   * @returns True if record snapshot is present and non-empty / True, если снимок записи существует и не пуст
   */
  hasData(): this is {
    getData(): TData
  } & TFilled & this {
    return isFilled(this.data)
  }

  /**
   * Returns the entity identifier.
   *
   * Возвращает идентификатор записи.
   * @returns Record identifier or undefined / Идентификатор записи или undefined
   */
  getId(): number | undefined {
    return this.data?.id
  }

  /**
   * Returns a shallow cloned snapshot of the entity record.
   *
   * Возвращает неглубокую копию записи сущности.
   * @returns Entity record snapshot or undefined / Копия записи сущности или undefined
   */
  getData(): TData | undefined {
    return this.data ? { ...this.data } : undefined
  }

  /**
   * Updates the local record snapshot by merging partial fields or storing them when no snapshot exists.
   *
   * Обновляет локальный снимок записи, объединяя переданные поля с текущими данными или сохраняя их при отсутствии снимка.
   * @param data Partial or full entity record data / Частичные или полные данные записи сущности
   * @returns Current item instance / Текущий экземпляр сущности
   */
  setData(data: Partial<TData>): this {
    this.data = this.data
      ? { ...this.data, ...data }
      : { ...data } as TData

    return this
  }

  /**
   * Updates this entity's fields in the database using the local record snapshot.
   *
   * Обновляет поля этой записи в базе данных на основе локального снимка данных.
   * @returns Current item instance / Текущий экземпляр сущности
   */
  async update(): Promise<this> {
    if (!this.hasId()) {
      return this
    }

    const updatedRecord = await updateRecord<TData>(
      this.databaseInstance.get(),
      this.getBaseTable(),
      this.getWhereId(),
      this.buildUpdateValues(this.getData()) as Partial<CmsIdTable['$inferInsert']>
    )

    if (!updatedRecord) {
      ErrorCenterThrow.on({
        group: this.errorGroup,
        code: 'update'
      })
    }

    this.data = updatedRecord
    return this
  }

  /**
   * Resets the local record snapshot to undefined.
   *
   * Сбрасывает локальный снимок записи в undefined.
   * @returns Current item instance / Текущий экземпляр сущности
   */
  reset(): this {
    this.data = undefined

    return this
  }

  /**
   * Creates a new entity record in the database from the local record snapshot and stores the created snapshot on this item.
   *
   * Создаёт новую запись сущности в базе данных из локального снимка данных и сохраняет созданные данные в текущем экземпляре.
   * @returns Current item instance / Текущий экземпляр сущности
   */
  async create(): Promise<this> {
    if (await this.existsInDatabase()) {
      ErrorCenterThrow.on({
        group: this.errorGroup,
        code: 'create'
      })
    }

    const values = this.buildCreateValues(this.getData() ?? {})
    const createdRecord = await insertRecord<TData>(
      this.databaseInstance.get(),
      this.getBaseTable(),
      values as Partial<CmsIdTable['$inferInsert']>
    )

    if (!createdRecord) {
      ErrorCenterThrow.on({
        group: this.errorGroup,
        code: 'create'
      })
    }

    this.data = createdRecord

    return this
  }

  /**
   * Permanently deletes this entity record from the database.
   *
   * Безвозвратно удаляет эту запись из базы данных.
   * @returns Current item instance / Текущий экземпляр сущности
   */
  async delete(): Promise<this> {
    if (!this.hasId()) {
      return this
    }

    const deleted = await deleteRecord(
      this.databaseInstance.get(),
      this.getBaseTable(),
      this.getWhereId()
    )

    if (!deleted) {
      ErrorCenterThrow.on({
        group: this.errorGroup,
        code: 'delete'
      })
    }

    this.data = undefined

    return this
  }

  /**
   * Loads an entity record by identifier from the database into the local snapshot.
   *
   * Загружает запись сущности по идентификатору из базы данных в локальный снимок.
   * @param id Record identifier / Идентификатор записи
   * @returns Current item instance / Текущий экземпляр сущности
   */
  async load(id: number): Promise<this> {
    if (!CmsVerification.isPositiveInteger(id, false)) {
      this.data = undefined
      return this
    }

    const baseTable = this.getBaseTable()
    this.data = await findOneRecord<TData>(
      this.databaseInstance.get(),
      baseTable,
      eq(baseTable.id, id)
    )

    return this
  }

  /**
   * Reloads this entity's data from the database.
   *
   * Перезагружает данные этой записи из базы данных.
   * @returns Current item instance / Текущий экземпляр сущности
   */
  async reload(): Promise<this> {
    if (!this.hasId()) {
      this.data = undefined
      return this
    }

    return this.load(this.getId())
  }

  /**
   * Persists the current record snapshot to the database by updating an existing record or creating a new one.
   *
   * Сохраняет текущий снимок записи в базу данных: обновляет существующую запись при наличии ID или создаёт новую.
   * @returns Current item instance / Текущий экземпляр сущности
   */
  async save(): Promise<this> {
    if (this.hasId()) {
      return this.update()
    }

    return this.create()
  }

  /**
   * Returns a plain object representation of the entity record for JSON serialization.
   *
   * Возвращает объект с данными записи сущности для сериализации в JSON.
   * @returns Entity record snapshot or undefined / Копия записи сущности или undefined
   */
  toJSON(): TData | undefined {
    return this.getData()
  }

  /**
   * Returns a JSON string representation of the entity record.
   *
   * Возвращает JSON-строку с данными записи сущности.
   * @returns Serialized entity record / Сериализованная запись сущности
   */
  toJSONString(): string {
    return JSON.stringify(this.toJSON() ?? {})
  }

  /**
   * Builds a Drizzle equality predicate matching the current item ID on the bound table.
   *
   * Формирует SQL-условие равенства по идентификатору текущего элемента в привязанной таблице.
   * @returns SQL equality predicate / SQL-условие равенства по ID
   */
  protected getWhereId(): SQL {
    const id = this.getId() ?? 0
    CmsVerification.isPositiveInteger(id)

    return eq(this.getBaseTable().id, id)
  }
}
