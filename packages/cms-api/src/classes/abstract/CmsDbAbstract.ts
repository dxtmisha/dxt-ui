import {
  eq,
  type SQL
} from 'drizzle-orm'
import { ErrorCenterThrow } from '@dxtmisha/functional-basic'

import { countRecords } from '../../functions/db/countRecords'
import { deleteRecord } from '../../functions/db/deleteRecord'
import { findOneRecord } from '../../functions/db/findOneRecord'
import { hasRecord } from '../../functions/db/hasRecord'
import { updateRecord } from '../../functions/db/updateRecord'
import { CmsDbValuesAbstract } from './CmsDbValuesAbstract'
import { CmsVerification } from '../CmsVerification'
import type { CmsIdTable } from '../../types/cmsDbTypes'

/**
 * Abstract base class providing unified CMS table binding, database instance management, and shared record queries/mutations.
 *
 * Абстрактный базовый класс для единой привязки таблицы CMS, управления экземпляром базы данных и общих операций с записями.
 */
export abstract class CmsDbAbstract<
  TTable extends CmsIdTable = CmsIdTable,
  TData = TTable['$inferSelect']
> extends CmsDbValuesAbstract<TTable> {
  /** ErrorCenter group name for entity errors / Имя группы ошибок ErrorCenter для сущности */
  protected abstract readonly errorGroup: string

  /**
   * Checks whether a record exists in the bound table by identifier.
   *
   * Проверяет существование записи в привязанной таблице по идентификатору.
   * @param id Record identifier / Идентификатор записи
   * @returns True if record exists / True, если запись существует
   */
  async hasById(id: number): Promise<boolean> {
    if (!CmsVerification.isPositiveInteger(id, false)) {
      return false
    }

    const baseTable = this.getBaseTable()
    return hasRecord(
      this.databaseInstance.get(),
      baseTable,
      eq(baseTable.id, id)
    )
  }

  /**
   * Counts records in the bound table matching an optional SQL predicate.
   *
   * Подсчитывает количество записей в привязанной таблице по необязательному SQL-условию.
   * @param whereCondition Optional SQL predicate / Необязательное SQL-условие
   * @returns Number of matching records / Количество найденных записей
   */
  async countRecords(whereCondition?: SQL): Promise<number> {
    return countRecords(
      this.databaseInstance.get(),
      this.getBaseTable(),
      whereCondition
    )
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
   * Updates a record by identifier in the bound table.
   *
   * Обновляет запись по идентификатору в привязанной таблице.
   * @param id Record identifier / Идентификатор записи
   * @param values Partial column values to update / Частичные значения колонок для обновления
   * @returns True if a matching record was updated / True, если запись найдена и обновлена
   */
  protected async updateRecordById(
    id: number,
    values: Partial<TTable['$inferInsert']>
  ): Promise<boolean> {
    CmsVerification.isPositiveInteger(id)

    const baseTable = this.getBaseTable()
    return updateRecord(
      this.databaseInstance.get(),
      baseTable,
      eq(baseTable.id, id),
      values as Partial<CmsIdTable['$inferInsert']>
    )
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
    return deleteRecord(
      this.databaseInstance.get(),
      baseTable,
      eq(baseTable.id, id)
    )
  }

  /**
   * Fetches a single entity record by identifier from the bound table.
   * Subclasses with joined relations can override this method to load related entities.
   *
   * Загружает запись сущности по идентификатору из привязанной таблицы.
   * Подклассы со связанными сущностями могут переопределить этот метод.
   * @param id Record identifier / Идентификатор записи
   * @returns Loaded entity record or undefined / Загруженная запись сущности или undefined
   */
  protected async fetchById(id: number): Promise<TData | undefined> {
    if (!CmsVerification.isPositiveInteger(id, false)) {
      return undefined
    }

    const baseTable = this.getBaseTable()
    return findOneRecord<TData>(
      this.databaseInstance.get(),
      baseTable,
      eq(baseTable.id, id)
    )
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
}
