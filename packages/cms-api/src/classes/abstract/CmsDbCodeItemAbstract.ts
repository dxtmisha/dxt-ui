import { inArray } from 'drizzle-orm'
import { uniqueArray } from '@dxtmisha/functional-basic'

import { CmsDbItemAbstract } from './CmsDbItemAbstract'
import { CmsDbResolver } from '../CmsDbResolver'
import { CmsVerification } from '../CmsVerification'
import type {
  CmsCodeCreateInput,
  CmsCodeInsertValues,
  CmsCodeTable,
  CmsCodeUpdateInput,
  CmsDbCodeItemData,
  CmsDbExecutor
} from '../../types/cmsDbTypes'

/**
 * Abstract base class for code-addressable CMS database entity item wrappers providing shared getters, normalization, payload builders, single-record lookup, and ID/code resolution.
 *
 * Абстрактный базовый класс для обёрток записей сущностей БД CMS с уникальным кодом, предоставляющий общие геттеры, нормализацию, формирование данных вставки/обновления, поиск одной записи и разрешение идентификаторов.
 */
export abstract class CmsDbCodeItemAbstract<
  TTable extends CmsCodeTable = CmsCodeTable,
  TData extends CmsDbCodeItemData = CmsDbCodeItemData
> extends CmsDbItemAbstract<TTable, TData> {
  /** Table schema bound to the entity class for static queries / Схема таблицы, привязанная к классу сущности для статических запросов */
  static readonly table: CmsCodeTable

  /** ErrorCenter group name bound to the entity class for static queries / Имя группы ошибок ErrorCenter, привязанное к классу сущности для статических запросов */
  static readonly errorGroup: string

  /**
   * Returns the unique entity code.
   *
   * Возвращает уникальный код записи.
   * @returns Entity code / Код записи
   */
  getCode(): string {
    return this.data.code
  }

  /**
   * Returns the display name or translation key of the entity.
   *
   * Возвращает отображаемое название или ключ перевода записи.
   * @returns Entity display name / Название записи
   */
  getName(): string {
    return this.data.name
  }

  /**
   * Returns the entity description or null.
   *
   * Возвращает описание записи или null.
   * @returns Entity description or null / Описание записи или null
   */
  getDescription(): string | null {
    return this.data.description
  }

  /**
   * Validates and verifies entity identifiers by their IDs.
   *
   * Проверяет и подтверждает идентификаторы записей по их ID.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param ids Optional list of entity IDs / Необязательный список ID записей
   * @returns Deduplicated list of verified entity IDs / Уникальный список проверенных ID записей
   */
  static async resolveIdsByIds(
    executor: CmsDbExecutor,
    ids?: readonly number[]
  ): Promise<number[]> {
    const table = this.table

    return CmsDbResolver.resolveByIds(
      this.errorGroup,
      'notFound',
      async uniqueIds => await executor
        .select({ id: table.id })
        .from(table)
        .where(inArray(table.id, uniqueIds)) as Array<{ id: number }>,
      ids
    )
  }

  /**
   * Resolves and verifies entity identifiers by their unique codes.
   *
   * Разрешает и проверяет идентификаторы записей по их уникальным кодам.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param codes Optional list of entity codes / Необязательный список кодов записей
   * @returns Deduplicated list of resolved entity IDs / Уникальный список найденных ID записей
   */
  static async resolveIdsByCodes(
    executor: CmsDbExecutor,
    codes?: readonly string[]
  ): Promise<number[]> {
    const table = this.table

    return CmsDbResolver.resolveByCodes(
      this.errorGroup,
      'notFound',
      async uniqueCodes => await executor
        .select({ id: table.id, code: table.code })
        .from(table)
        .where(inArray(table.code, uniqueCodes)) as Array<{ id: number, code: string }>,
      codes
    )
  }

  /**
   * Resolves and validates entity identifiers from IDs and/or codes.
   *
   * Разрешает и валидирует идентификаторы записей из переданных ID и/или кодов.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param ids Optional list of entity IDs / Необязательный список ID записей
   * @param codes Optional list of entity codes / Необязательный список кодов записей
   * @returns Deduplicated list of verified entity IDs / Уникальный список проверенных ID записей
   */
  static async resolveIds(
    executor: CmsDbExecutor,
    ids?: readonly number[],
    codes?: readonly string[]
  ): Promise<number[]> {
    const resolvedIds: number[] = []

    if (ids !== undefined) {
      resolvedIds.push(
        ...await this.resolveIdsByIds(executor, ids)
      )
    }

    if (codes !== undefined) {
      resolvedIds.push(
        ...await this.resolveIdsByCodes(executor, codes)
      )
    }

    return uniqueArray(resolvedIds)
  }

  /**
   * Builds and validates database insert payload from create input.
   *
   * Формирует и валидирует объект вставки в базу данных из входных данных создания записи.
   * @param input Entity creation payload / Входные данные для создания записи
   * @returns Validated Drizzle insert payload / Валидированные данные для вставки
   */
  static buildCreateValues(
    input: CmsCodeCreateInput
  ): CmsCodeInsertValues {
    return {
      code: CmsVerification.normalizeCode(input.code),
      name: CmsVerification.normalizeName(input.name),
      description: CmsVerification.normalizeOptionalText(input.description),
      ...(input.systemStatus !== undefined ? { systemStatus: input.systemStatus } : {})
    }
  }

  /**
   * Builds and validates database update payload from partial update input.
   *
   * Формирует и валидирует объект обновления в базе данных из входных данных редактирования записи.
   * @param input Partial entity update payload / Частичные данные для обновления записи
   * @returns Validated partial Drizzle update payload / Валидированные поля для обновления
   */
  static buildUpdateValues(
    input: CmsCodeUpdateInput
  ): Partial<CmsCodeInsertValues> {
    const values: Partial<CmsCodeInsertValues> = {}

    if (input.code !== undefined) {
      values.code = CmsVerification.normalizeCode(input.code)
    }

    if (input.name !== undefined) {
      values.name = CmsVerification.normalizeName(input.name)
    }

    if (input.description !== undefined) {
      values.description = CmsVerification.normalizeOptionalText(input.description)
    }

    if (input.systemStatus !== undefined) {
      values.systemStatus = input.systemStatus
    }

    return values
  }
}
