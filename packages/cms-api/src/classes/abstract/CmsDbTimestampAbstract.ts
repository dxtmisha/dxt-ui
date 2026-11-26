import { CmsDbItemAbstract } from './CmsDbItemAbstract'
import type {
  CmsDbTimestampData,
  CmsIdTable
} from '../../types/cmsDbTypes'

/**
 * Abstract base class extending CmsDbItemAbstract with `createdAt` / `updatedAt` timestamp management and payload population.
 *
 * Абстрактный базовый класс, расширяющий CmsDbItemAbstract управлением временными метками `createdAt` и `updatedAt` и их автоматическим заполнением.
 */
export abstract class CmsDbTimestampAbstract<
  TTable extends CmsIdTable = CmsIdTable,
  TData extends CmsDbTimestampData = CmsDbTimestampData,
  TFilled extends object = object
> extends CmsDbItemAbstract<
    TTable,
    TData,
    {
      getCreatedAt(): Date
      getUpdatedAt(): Date
    } & TFilled
  > {
  /**
   * Returns the record creation timestamp from the local snapshot.
   *
   * Возвращает дату создания записи из локального снимка данных.
   * @returns Creation date or undefined / Дата создания или undefined
   */
  getCreatedAt(): Date | undefined {
    return this.data?.createdAt
  }

  /**
   * Returns the record last update timestamp from the local snapshot.
   *
   * Возвращает дату последнего обновления записи из локального снимка данных.
   * @returns Last update date or undefined / Дата последнего обновления или undefined
   */
  getUpdatedAt(): Date | undefined {
    return this.data?.updatedAt
  }

  /**
   * Returns a partial insert payload containing `createdAt` when the column exists on the bound table.
   *
   * Возвращает частичный объект вставки с полем `createdAt`, если колонка определена в привязанной таблице.
   * @param date Target creation timestamp / Целевая метка времени создания
   * @returns Partial payload with `createdAt` or empty object / Частичный объект с `createdAt` или пустой объект
   */
  protected getCreatedAtValue(
    date: Date = new Date()
  ): Partial<TTable['$inferInsert']> {
    return this.hasColumn('createdAt')
      ? { createdAt: date } as Partial<TTable['$inferInsert']>
      : {}
  }

  /**
   * Returns a partial payload containing `updatedAt` when the column exists on the bound table.
   *
   * Возвращает частичный объект с полем `updatedAt`, если колонка определена в привязанной таблице.
   * @param date Target update timestamp / Целевая метка времени обновления
   * @returns Partial payload with `updatedAt` or empty object / Частичный объект с `updatedAt` или пустой объект
   */
  protected getUpdatedAtValue(
    date: Date = new Date()
  ): Partial<TTable['$inferInsert']> {
    return this.hasColumn('updatedAt')
      ? { updatedAt: date } as Partial<TTable['$inferInsert']>
      : {}
  }

  /**
   * Returns the list of column names forbidden during record creation, including `createdAt` and `updatedAt`.
   *
   * Возвращает список имён колонок, запрещённых к ручной передаче при создании записи, включая `createdAt` и `updatedAt`.
   * @returns List of forbidden column names / Список запрещённых имён колонок
   */
  protected override getForbiddenCreateColumns(): readonly string[] {
    return [
      ...super.getForbiddenCreateColumns(),
      'createdAt',
      'updatedAt'
    ]
  }

  /**
   * Post-processes validated insert values by populating `createdAt` and `updatedAt` timestamps when defined on the table.
   *
   * Выполняет постобработку провалидированных значений вставки, заполняя временные метки `createdAt` и `updatedAt` при их наличии в таблице.
   * @param values Validated Drizzle insert payload / Провалидированные поля для вставки
   * @returns Final Drizzle insert payload with timestamps / Итоговые поля для вставки с временными метками
   */
  protected override processCreateValues(
    values: Partial<TTable['$inferInsert']>
  ): Partial<TTable['$inferInsert']> {
    const currentDate = new Date()

    return {
      ...super.processCreateValues(values),
      ...this.getCreatedAtValue(currentDate),
      ...this.getUpdatedAtValue(currentDate)
    }
  }

  /**
   * Post-processes validated update values by populating `updatedAt` when defined on the table.
   *
   * Выполняет постобработку провалидированных значений обновления, заполняя временную метку `updatedAt` при её наличии в таблице.
   * @param values Validated Drizzle update payload / Провалидированные поля для обновления
   * @returns Final Drizzle update payload with `updatedAt` / Итоговые поля для обновления с `updatedAt`
   */
  protected override processUpdateValues(
    values: Partial<TTable['$inferInsert']>
  ): Partial<TTable['$inferInsert']> {
    return {
      ...super.processUpdateValues(values),
      ...this.getUpdatedAtValue()
    }
  }
}
