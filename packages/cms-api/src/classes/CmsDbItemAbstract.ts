import {
  eq,
  type SQL
} from 'drizzle-orm'
import {
  ErrorCenterThrow,
  isPositiveInteger,
  isString
} from '@dxtmisha/functional-basic'

import { CmsDbAbstract } from './CmsDbAbstract'
import type { CmsDbInstance } from './CmsDbInstance'
import type {
  CmsDbExecutor,
  CmsDbItemData,
  CmsIdTable,
  CmsSystemStatus
} from '../types/cmsDbTypes'

/**
 * Abstract base class for CMS database entity item wrappers providing shared record getters, status transitions, updates, reloads, and deletion.
 *
 * Абстрактный базовый класс для обёрток записей сущностей БД CMS с общими геттерами, управлением системным статусом, обновлением, перезагрузкой и удалением.
 */
export abstract class CmsDbItemAbstract<
  TTable extends CmsIdTable = CmsIdTable,
  TData extends CmsDbItemData = CmsDbItemData
> extends CmsDbAbstract<TTable> {
  /**
   * Initializes an entity item wrapper with its table schema, current record snapshot, error group, and optional database instance manager.
   *
   * Инициализирует обёртку записи сущности со схемой таблицы, текущими данными записи, группой ошибок и необязательным менеджером БД.
   * @param table Drizzle PostgreSQL table schema / Схема таблицы Drizzle PostgreSQL
   * @param data Entity record snapshot from database / Данные записи сущности из базы данных
   * @param errorGroup ErrorCenter group name for entity errors / Имя группы ошибок ErrorCenter для сущности
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  constructor(
    table: TTable,
    protected data: TData,
    protected readonly errorGroup: string,
    databaseInstance?: CmsDbInstance
  ) {
    super(table, databaseInstance)
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
   * Updates the system status of this entity and reloads its snapshot.
   *
   * Обновляет системный статус этой записи и перезагружает её данные.
   * @param systemStatus Target system status / Целевой системный статус
   * @returns Updated item instance or undefined if not found / Обновлённый экземпляр или undefined, если запись не найдена
   */
  async setSystemStatus(systemStatus: CmsSystemStatus): Promise<this | undefined> {
    try {
      const updated = await this.systemStatus.update(this.data.id, systemStatus)
      if (!updated) {
        return undefined
      }

      return await this.reload()
    } catch (error) {
      return this.handleError('update', error)
    }
  }

  /**
   * Marks this entity as active (`systemStatus = 'active'`).
   *
   * Переводит запись в активный системный статус (`systemStatus = 'active'`).
   * @returns Updated item instance or undefined if not found / Обновлённый экземпляр или undefined, если запись не найдена
   */
  async activate(): Promise<this | undefined> {
    return this.setSystemStatus('active')
  }

  /**
   * Marks this entity as blocked (`systemStatus = 'blocked'`).
   *
   * Переводит запись в заблокированный системный статус (`systemStatus = 'blocked'`).
   * @returns Updated item instance or undefined if not found / Обновлённый экземпляр или undefined, если запись не найдена
   */
  async block(): Promise<this | undefined> {
    return this.setSystemStatus('blocked')
  }

  /**
   * Marks this entity as soft-deleted (`systemStatus = 'deleted'`).
   *
   * Помечает запись как мягко удалённую (`systemStatus = 'deleted'`).
   * @returns Updated item instance or undefined if not found / Обновлённый экземпляр или undefined, если запись не найдена
   */
  async softDelete(): Promise<this | undefined> {
    return this.setSystemStatus('deleted')
  }

  /**
   * Permanently deletes this entity record from the database.
   *
   * Безвозвратно удаляет эту запись из базы данных.
   * @returns True if deleted / True, если запись была удалена
   */
  async delete(): Promise<boolean> {
    const recordId = this.data.id
    if (!isPositiveInteger(recordId)) {
      return false
    }

    try {
      return await this.deleteRecordById(recordId)
    } catch (error) {
      return this.handleError('delete', error)
    }
  }

  /**
   * Reloads this entity's data from the database.
   *
   * Перезагружает данные этой записи из базы данных.
   * @returns Reloaded item instance or undefined if missing / Обновлённый экземпляр или undefined, если запись не найдена
   */
  async reload(): Promise<this | undefined> {
    const recordId = this.data.id
    if (!isPositiveInteger(recordId)) {
      return undefined
    }

    const foundRecord = await this.fetchById(recordId)
    if (!foundRecord) {
      return undefined
    }

    this.data = foundRecord
    return this
  }

  /**
   * Returns a plain JSON-serializable snapshot of the entity record.
   *
   * Возвращает обычный объект данных записи для сериализации в JSON.
   * @returns Cloned entity record / Копия записи сущности
   */
  toJSON(): TData {
    return this.getData()
  }

  /**
   * Fetches the latest entity snapshot by identifier from the database.
   * Subclasses with joined relations can override this method to load related entities.
   *
   * Загружает актуальное состояние записи по идентификатору из базы данных.
   * Подклассы со связанными сущностями могут переопределить этот метод.
   * @param id Record identifier / Идентификатор записи
   * @returns Loaded entity record or undefined / Загруженная запись сущности или undefined
   */
  protected async fetchById(id: number): Promise<TData | undefined> {
    return CmsDbItemAbstract.findOneRecord<TData>(
      this.databaseInstance.get(),
      this.getBaseTable(),
      eq(this.getBaseTable().id, id)
    )
  }

  /**
   * Executes a single-table update by the entity ID with automatic updatedAt handling and refreshes local snapshot.
   *
   * Выполняет обновление полей в таблице по ID записи с автоматическим обновлением updatedAt и обновляет локальное состояние.
   * @param values Partial column values to update / Частичные значения колонок для обновления
   * @returns Updated item instance or undefined if not found / Обновлённый экземпляр или undefined, если запись не найдена
   */
  protected async updateRecord(
    values: Record<string, unknown>
  ): Promise<this | undefined> {
    const recordId = this.data.id
    if (!isPositiveInteger(recordId)) {
      return undefined
    }

    const baseTable = this.getBaseTable()

    try {
      const updatedRows = await this.databaseInstance.get()
        .update(baseTable)
        .set(this.getUpdateValues(values))
        .where(eq(baseTable.id, recordId))
        .returning()

      const updatedRecord = updatedRows[0] as TData | undefined
      if (!updatedRecord) {
        return undefined
      }

      this.data = updatedRecord
      return this
    } catch (error) {
      return this.handleError('update', error)
    }
  }

  /**
   * Wraps and throws an operational error through ErrorCenterThrow using the entity error group.
   *
   * Оборачивает и выбрасывает операционную ошибку через ErrorCenterThrow с группой ошибок сущности.
   * @param code Error code / Код ошибки
   * @param error Caught error instance / Перехваченное исключение
   */
  protected handleError(code: string, error: unknown): never {
    return ErrorCenterThrow.handle(
      {
        group: this.errorGroup,
        code
      },
      error
    )
  }

  /**
   * Finds a single entity record matching a SQL predicate in the specified table.
   *
   * Находит одну запись в указанной таблице по SQL-предикату.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param table Drizzle table schema / Схема таблицы Drizzle
   * @param whereCondition SQL predicate / SQL-условие поиска
   * @returns Found record or undefined / Найденная запись или undefined
   */
  protected static async findOneRecord<TRecord>(
    executor: CmsDbExecutor,
    table: CmsIdTable,
    whereCondition: SQL | undefined
  ): Promise<TRecord | undefined> {
    if (!whereCondition) {
      return undefined
    }

    const foundRows = await executor
      .select()
      .from(table)
      .where(whereCondition)
      .limit(1)

    return foundRows[0] as TRecord | undefined
  }

  /**
   * Normalizes and validates a non-empty unique entity code without whitespace.
   *
   * Нормализует и проверяет непустой уникальный код сущности без пробельных символов.
   * @param errorGroup Error group / Группа ошибки
   * @param code Raw entity code / Исходный код сущности
   * @returns Trimmed non-empty entity code / Очищенный код сущности
   */
  protected static normalizeCodeValue(
    errorGroup: string,
    code: string
  ): string {
    const normalized = isString(code) ? code.trim() : ''

    if (normalized.length === 0 || /\s/.test(normalized)) {
      ErrorCenterThrow.on({
        group: errorGroup,
        code: 'invalidCode',
        details: { code }
      })
    }

    return normalized
  }

  /**
   * Normalizes and validates a non-empty entity display name.
   *
   * Нормализует и проверяет непустое отображаемое название сущности.
   * @param errorGroup Error group / Группа ошибки
   * @param name Raw entity name / Исходное название сущности
   * @returns Trimmed non-empty entity name / Очищенное название сущности
   */
  protected static normalizeNameValue(
    errorGroup: string,
    name: string
  ): string {
    const normalized = isString(name) ? name.trim() : ''

    if (normalized.length === 0) {
      ErrorCenterThrow.on({
        group: errorGroup,
        code: 'invalidName',
        details: { name }
      })
    }

    return normalized
  }
}
