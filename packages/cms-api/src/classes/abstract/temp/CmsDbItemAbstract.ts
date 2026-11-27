// export:none

import { CmsDbAbstract } from './CmsDbAbstract'
import { CmsVerification } from '../../CmsVerification'
import type { CmsDbInstance } from '../../CmsDbInstance'
import {
  type CmsDbItemData,
  type CmsIdTable,
  CmsSystemStatus
} from '../../../types/cmsDbTypes'

/**
 * Abstract base class for CMS database entity item wrappers providing shared record getters, status transitions, updates, reloads, and deletion.
 *
 * Абстрактный базовый класс для обёрток записей сущностей БД CMS с общими геттерами, управлением системным статусом, обновлением, перезагрузкой и удалением.
 */
export abstract class CmsDbItemAbstract<
  TTable extends CmsIdTable = CmsIdTable,
  TData extends CmsDbItemData = CmsDbItemData,
  TUpdateInput extends object = Partial<TTable['$inferInsert']>
> extends CmsDbAbstract<TTable, TData> {
  /**
   * Initializes an entity item wrapper with its table schema, current record snapshot, and optional database instance manager.
   *
   * Инициализирует обёртку записи сущности со схемой таблицы, текущими данными записи и необязательным менеджером БД.
   * @param table Drizzle PostgreSQL table schema / Схема таблицы Drizzle PostgreSQL
   * @param data Entity record snapshot from database / Данные записи сущности из базы данных
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  constructor(
    table: TTable,
    protected data: TData,
    databaseInstance?: CmsDbInstance
  ) {
    super(table, databaseInstance)
  }

  /**
   * Checks whether this entity record exists in the database.
   *
   * Проверяет наличие этой записи в базе данных.
   * @returns True if record exists in the database / True, если запись существует в базе данных
   */
  async exists(): Promise<boolean> {
    return this.hasById(this.data.id)
  }

  /**
   * Returns the entity identifier.
   *
   * Возвращает идентификатор записи.
   * @returns Record identifier / Идентификатор записи
   */
  getId(): number {
    return this.data.id
  }

  /**
   * Returns a shallow cloned snapshot of the entity record.
   *
   * Возвращает неглубокую копию записи сущности.
   * @returns Entity record snapshot / Копия записи сущности
   */
  getData(): TData {
    return { ...this.data }
  }

  /**
   * Returns the system status of the entity record.
   *
   * Возвращает системный статус записи сущности.
   * @returns System status / Системный статус
   */
  getSystemStatus(): CmsSystemStatus {
    return this.data.systemStatus
  }

  /**
   * Returns the record creation timestamp.
   *
   * Возвращает дату создания записи.
   * @returns Creation date / Дата создания
   */
  getCreatedAt(): Date {
    return this.data.createdAt
  }

  /**
   * Returns the record last update timestamp.
   *
   * Возвращает дату последнего обновления записи.
   * @returns Last update date / Дата последнего обновления
   */
  getUpdatedAt(): Date {
    return this.data.updatedAt
  }

  /**
   * Marks this entity as active (`systemStatus = 'active'`).
   *
   * Переводит запись в активный системный статус (`systemStatus = 'active'`).
   * @returns Current item instance / Текущий экземпляр сущности
   */
  async activate(): Promise<this> {
    return this.updateSystemStatus(CmsSystemStatus.active)
  }

  /**
   * Marks this entity as blocked (`systemStatus = 'blocked'`).
   *
   * Переводит запись в заблокированный системный статус (`systemStatus = 'blocked'`).
   * @returns Current item instance / Текущий экземпляр сущности
   */
  async block(): Promise<this> {
    return this.updateSystemStatus(CmsSystemStatus.blocked)
  }

  /**
   * Marks this entity as soft-deleted (`systemStatus = 'deleted'`).
   *
   * Помечает запись как мягко удалённую (`systemStatus = 'deleted'`).
   * @returns Current item instance / Текущий экземпляр сущности
   */
  async softDelete(): Promise<this> {
    return this.updateSystemStatus(CmsSystemStatus.deleted)
  }

  /**
   * Updates this entity's fields in the database.
   *
   * Обновляет поля этой записи в базе данных.
   * @param input Partial entity update payload / Частичные данные для обновления записи
   * @returns Current item instance / Текущий экземпляр сущности
   */
  async update(input: TUpdateInput): Promise<this> {
    const values = this.buildUpdateValues(input)

    return this.executeUpdate(
      () => this.updateRecordById(this.data.id, values)
    )
  }

  /**
   * Permanently deletes this entity record from the database.
   *
   * Безвозвратно удаляет эту запись из базы данных.
   * @returns True if deleted / True, если запись была удалена
   */
  async delete(): Promise<boolean> {
    try {
      return await this.deleteRecordById(this.data.id)
    } catch (error) {
      return this.handleError('delete', error)
    }
  }

  /**
   * Reloads this entity's data from the database.
   *
   * Перезагружает данные этой записи из базы данных.
   * @returns Current item instance / Текущий экземпляр сущности
   */
  async reload(): Promise<this> {
    const recordId = this.data.id
    CmsVerification.isPositiveInteger(recordId)

    const foundRecord = await this.fetchById(recordId)
    if (foundRecord) {
      this.data = foundRecord
    }

    return this
  }

  /**
   * Returns a JSON string representation of the entity record.
   *
   * Возвращает JSON-строку с данными записи сущности.
   * @returns Serialized entity record / Сериализованная запись сущности
   */
  toJSONString(): string {
    return JSON.stringify(this.getData())
  }

  /**
   * Updates the system status of this entity and reloads its snapshot.
   *
   * Обновляет системный статус этой записи и перезагружает её данные.
   * @param systemStatus Target system status / Целевой системный статус
   * @returns Current item instance / Текущий экземпляр сущности
   */
  protected async updateSystemStatus(
    systemStatus: CmsSystemStatus
  ): Promise<this> {
    return this.executeUpdate(
      () => this.systemStatus.update(this.data.id, systemStatus)
    )
  }

  /**
   * Executes an update callback, reloads the local snapshot on success, and routes errors through handleError.
   *
   * Выполняет callback обновления, перезагружает локальное состояние при успехе и передаёт ошибки в handleError.
   * @param callback Async update operation returning whether a record was updated / Асинхронная операция обновления, возвращающая признак изменения записи
   * @returns Current item instance / Текущий экземпляр сущности
   */
  protected async executeUpdate(
    callback: () => Promise<boolean>
  ): Promise<this> {
    try {
      const updated = await callback()
      if (updated) {
        return await this.reload()
      }

      return this
    } catch (error) {
      return this.handleError('update', error)
    }
  }
}
