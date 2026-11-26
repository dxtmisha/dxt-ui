import { getTableColumns } from 'drizzle-orm'
import { hasKey } from '@dxtmisha/functional-basic'

import { CmsDbAbstract } from './CmsDbAbstract'
import type {
  CmsDbUpdateValidator,
  CmsIdTable
} from '../../types/cmsDbTypes'

/**
 * Abstract base class providing table binding and validated create/update payload builders.
 *
 * Абстрактный базовый класс с привязкой таблицы и методами формирования и валидации данных для создания и обновления записей.
 */
export abstract class CmsDbValuesAbstract<
  TTable extends CmsIdTable = CmsIdTable
> extends CmsDbAbstract<TTable> {
  /**
   * Builds, validates, and post-processes database insert payload from create input by checking table columns, skipping forbidden columns, and applying registered validators.
   *
   * Формирует, валидирует и выполняет постобработку объекта создания записи в базе данных, проверяя колонки таблицы, исключая запрещённые поля и применяя валидаторы.
   * @param input Entity creation payload / Данные для создания записи
   * @returns Validated Drizzle insert payload / Валидированные поля для вставки
   */
  buildCreateValues<TInput extends object = Partial<TTable['$inferInsert']>>(
    input: TInput
  ): Partial<TTable['$inferInsert']> {
    return this.processCreateValues(
      this.resolveValues(
        input,
        getTableColumns(this.table),
        this.getForbiddenCreateColumns(),
        this.getCreateValidators()
      ) as Partial<TTable['$inferInsert']>
    )
  }

  /**
   * Builds, validates, and post-processes database update payload from partial update input by checking table columns, skipping forbidden columns, and applying registered validators.
   *
   * Формирует, валидирует и выполняет постобработку объекта обновления в базе данных из входных данных, проверяя колонки таблицы, исключая запрещённые поля и применяя валидаторы.
   * @param input Partial entity update payload / Частичные данные для обновления записи
   * @returns Validated partial Drizzle update payload / Валидированные поля для обновления
   */
  buildUpdateValues<TInput extends object = Partial<TTable['$inferInsert']>>(
    input: TInput
  ): Partial<TTable['$inferInsert']> {
    return this.processUpdateValues(
      this.resolveValues(
        input,
        getTableColumns(this.table),
        this.getForbiddenUpdateColumns(),
        this.getUpdateValidators()
      ) as Partial<TTable['$inferInsert']>
    )
  }

  /**
   * Returns the list of column names forbidden during record creation.
   *
   * Возвращает список имён колонок, запрещённых к ручной передаче при создании записи.
   * @returns List of forbidden column names / Список запрещённых имён колонок
   */
  protected getForbiddenCreateColumns(): readonly string[] {
    return [
      'id'
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
   * Returns a map of column value validators and normalizers used during record creation.
   *
   * Возвращает карту валидаторов и нормализаторов значений по имени колонки для создания записи.
   * @returns Column validator map / Карта валидаторов по имени колонки
   */
  protected getCreateValidators(): Record<string, CmsDbUpdateValidator> {
    return {}
  }

  /**
   * Returns a map of column value validators and normalizers used during record update.
   *
   * Возвращает карту валидаторов и нормализаторов значений по имени колонки для обновления записи.
   * @returns Column validator map / Карта валидаторов по имени колонки
   */
  protected getUpdateValidators(): Record<string, CmsDbUpdateValidator> {
    return this.getCreateValidators()
  }

  /**
   * Post-processes validated insert values before returning the final create payload.
   *
   * Выполняет постобработку провалидированных значений перед возвратом итоговых данных для создания записи.
   * @param values Validated Drizzle insert payload / Провалидированные поля для вставки
   * @returns Final Drizzle insert payload / Итоговые поля для вставки
   */
  protected processCreateValues(
    values: Partial<TTable['$inferInsert']>
  ): Partial<TTable['$inferInsert']> {
    return values
  }

  /**
   * Post-processes validated update values before returning the final update payload.
   *
   * Выполняет постобработку провалидированных значений перед возвратом итоговых данных для обновления записи.
   * @param values Validated Drizzle update payload / Провалидированные поля для обновления
   * @returns Final Drizzle update payload / Итоговые поля для обновления
   */
  protected processUpdateValues(
    values: Partial<TTable['$inferInsert']>
  ): Partial<TTable['$inferInsert']> {
    return values
  }

  /**
   * Filters input entries against table columns and forbidden columns, applying registered validators.
   *
   * Фильтрует поля входного объекта по колонкам таблицы и запрещённым полям, применяя зарегистрированные валидаторы.
   * @param input Entity payload / Входные данные записи
   * @param tableColumns Table column definitions / Определения колонок таблицы
   * @param forbiddenColumns List of forbidden column names / Список запрещённых имён колонок
   * @param validators Column validator map / Карта валидаторов по имени колонки
   * @returns Filtered and validated column values / Отфильтрованные и провалидированные значения колонок
   */
  protected resolveValues<TInput extends object>(
    input: TInput,
    tableColumns: Record<string, unknown>,
    forbiddenColumns: readonly string[],
    validators: Record<string, CmsDbUpdateValidator>
  ): Record<string, unknown> {
    const values: Record<string, unknown> = {}
    const forbiddenColumnSet = new Set(forbiddenColumns)

    for (const [key, value] of Object.entries(input)) {
      if (
        value === undefined
        || forbiddenColumnSet.has(key)
        || !hasKey(tableColumns, key)
      ) {
        continue
      }

      const resolvedValue = hasKey(validators, key)
        ? validators[key](value)
        : value

      if (resolvedValue !== undefined) {
        values[key] = resolvedValue
      }
    }

    return values
  }
}
