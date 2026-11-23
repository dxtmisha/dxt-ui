import {
  inArray,
  type SQL
} from 'drizzle-orm'
import {
  normalizeCmsOptionalText,
  uniqueArray
} from '@dxtmisha/functional-basic'

import { findOneCmsRecord } from '../../functions/findOneCmsRecord'
import { CMS_CREATED_ORIGIN_ERROR_GROUP } from '../../media/errors/cmsCreatedOriginErrorCauseList'
import { createdOrigins } from '../../media/schema/createdOrigins'
import { CmsDbItemAbstract } from '../abstract/CmsDbItemAbstract'
import { CmsDbResolver } from '../CmsDbResolver'
import { CmsVerification } from '../CmsVerification'
import type { CmsDbInstance } from '../CmsDbInstance'
import type {
  CmsCreatedOrigin,
  CmsDbExecutor,
  CmsNewCreatedOrigin
} from '../../types/cmsDbTypes'
import type {
  CmsCreatedOriginCreateInput,
  CmsCreatedOriginUpdateInput
} from '../../types/cmsCreatedOriginTypes'

/**
 * Represents a single CMS created origin entity and provides instance-level methods for reading and editing.
 *
 * Представляет конкретный источник создания записей CMS и предоставляет методы для чтения и редактирования полей.
 */
export class CmsCreatedOriginItem extends CmsDbItemAbstract<typeof createdOrigins, CmsCreatedOrigin> {
  /** ErrorCenter group name for created origin errors / Имя группы ошибок ErrorCenter для источников создания записей */
  protected readonly errorGroup = CMS_CREATED_ORIGIN_ERROR_GROUP

  /**
   * Initializes a created origin entity wrapper with record data and database instance manager.
   *
   * Инициализирует обёртку конкретного источника создания записей с его данными и менеджером БД.
   * @param data Created origin record from database / Запись источника создания из базы данных
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  constructor(
    data: CmsCreatedOrigin,
    databaseInstance?: CmsDbInstance
  ) {
    super(createdOrigins, data, databaseInstance)
  }

  /**
   * Returns the unique created origin code.
   *
   * Возвращает уникальный код источника создания записей.
   * @returns Created origin code / Код источника создания записей
   */
  getCode(): string {
    return this.data.code
  }

  /**
   * Returns the display name or translation key of the created origin.
   *
   * Возвращает отображаемое название или ключ перевода источника создания записей.
   * @returns Created origin name / Название источника создания записей
   */
  getName(): string {
    return this.data.name
  }

  /**
   * Returns the created origin description or null.
   *
   * Возвращает описание источника создания записей или null.
   * @returns Created origin description or null / Описание источника создания записей или null
   */
  getDescription(): string | null {
    return this.data.description
  }

  /**
   * Updates this created origin's fields in the database.
   *
   * Обновляет поля этого источника создания записей в базе данных.
   * @param input Partial created origin update payload / Частичные данные для обновления источника создания
   * @returns Current created origin item / Текущий экземпляр CmsCreatedOriginItem
   */
  async update(input: CmsCreatedOriginUpdateInput): Promise<this> {
    CmsVerification.isPositiveInteger(this.data.id)

    return this.updateRecord(CmsCreatedOriginItem.buildUpdateValues(input))
  }

  /**
   * Finds a single created origin record matching a SQL predicate.
   *
   * Находит одну запись источника создания по SQL-предикату.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param whereCondition SQL predicate / SQL-условие поиска
   * @returns Created origin record or undefined / Запись источника создания или undefined
   */
  static async findOne(
    executor: CmsDbExecutor,
    whereCondition: SQL | undefined
  ): Promise<CmsCreatedOrigin | undefined> {
    return findOneCmsRecord<CmsCreatedOrigin>(
      executor,
      createdOrigins,
      whereCondition
    )
  }

  /**
   * Validates and verifies created origin identifiers by their IDs.
   *
   * Проверяет и подтверждает идентификаторы источников создания по их ID.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param originIds Optional list of created origin IDs / Необязательный список ID источников создания
   * @returns Deduplicated list of verified created origin IDs / Уникальный список проверенных ID источников создания
   */
  static async resolveIdsByIds(
    executor: CmsDbExecutor,
    originIds?: readonly number[]
  ): Promise<number[]> {
    return CmsDbResolver.resolveByIds(
      CMS_CREATED_ORIGIN_ERROR_GROUP,
      'notFound',
      uniqueIds => executor
        .select({ id: createdOrigins.id })
        .from(createdOrigins)
        .where(inArray(createdOrigins.id, uniqueIds)),
      originIds
    )
  }

  /**
   * Resolves and verifies created origin identifiers by their unique codes.
   *
   * Разрешает и проверяет идентификаторы источников создания по их уникальным кодам.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param originCodes Optional list of created origin codes / Необязательный список кодов источников создания
   * @returns Deduplicated list of resolved created origin IDs / Уникальный список найденных ID источников создания
   */
  static async resolveIdsByCodes(
    executor: CmsDbExecutor,
    originCodes?: readonly string[]
  ): Promise<number[]> {
    return CmsDbResolver.resolveByCodes(
      CMS_CREATED_ORIGIN_ERROR_GROUP,
      'notFound',
      uniqueCodes => executor
        .select({ id: createdOrigins.id, code: createdOrigins.code })
        .from(createdOrigins)
        .where(inArray(createdOrigins.code, uniqueCodes)),
      originCodes
    )
  }

  /**
   * Resolves and validates created origin identifiers from IDs and/or codes.
   *
   * Разрешает и валидирует идентификаторы источников создания из переданных ID и/или кодов.
   * @param executor Database or transaction executor / Исполнитель БД или транзакции
   * @param originIds Optional list of created origin IDs / Необязательный список ID источников создания
   * @param originCodes Optional list of created origin codes / Необязательный список кодов источников создания
   * @returns Deduplicated list of verified created origin IDs / Уникальный список проверенных ID источников создания
   */
  static async resolveIds(
    executor: CmsDbExecutor,
    originIds?: readonly number[],
    originCodes?: readonly string[]
  ): Promise<number[]> {
    const resolvedIds: number[] = []

    if (originIds !== undefined) {
      resolvedIds.push(
        ...await CmsCreatedOriginItem.resolveIdsByIds(executor, originIds)
      )
    }

    if (originCodes !== undefined) {
      resolvedIds.push(
        ...await CmsCreatedOriginItem.resolveIdsByCodes(executor, originCodes)
      )
    }

    return uniqueArray(resolvedIds)
  }

  /**
   * Builds and validates database insert payload from create input.
   *
   * Формирует и валидирует объект вставки в базу данных из входных данных создания источника создания записей.
   * @param input Created origin creation payload / Входные данные для создания источника создания записей
   * @returns Validated Drizzle insert payload / Валидированные данные для вставки
   */
  static buildCreateValues(
    input: CmsCreatedOriginCreateInput
  ): CmsNewCreatedOrigin {
    return {
      code: CmsCreatedOriginItem.normalizeCode(input.code),
      name: CmsCreatedOriginItem.normalizeName(input.name),
      description: normalizeCmsOptionalText(input.description),
      ...(input.systemStatus !== undefined ? { systemStatus: input.systemStatus } : {})
    }
  }

  /**
   * Builds and validates database update payload from partial update input.
   *
   * Формирует и валидирует объект обновления в базе данных из входных данных редактирования источника создания записей.
   * @param input Partial created origin update payload / Частичные данные для обновления источника создания записей
   * @returns Validated partial Drizzle update payload / Валидированные поля для обновления
   */
  static buildUpdateValues(
    input: CmsCreatedOriginUpdateInput
  ): Partial<CmsNewCreatedOrigin> {
    const values: Partial<CmsNewCreatedOrigin> = {}

    if (input.code !== undefined) {
      values.code = CmsCreatedOriginItem.normalizeCode(input.code)
    }

    if (input.name !== undefined) {
      values.name = CmsCreatedOriginItem.normalizeName(input.name)
    }

    if (input.description !== undefined) {
      values.description = normalizeCmsOptionalText(input.description)
    }

    if (input.systemStatus !== undefined) {
      values.systemStatus = input.systemStatus
    }

    return values
  }

  /**
   * Normalizes and validates a created origin code.
   *
   * Нормализует и проверяет код источника создания записей.
   * @param code Raw created origin code / Исходный код источника создания записей
   * @returns Trimmed non-empty created origin code / Очищенный код источника создания записей
   */
  static normalizeCode(
    code: string
  ): string {
    return CmsVerification.normalizeCode(code)
  }

  /**
   * Normalizes and validates a created origin display name.
   *
   * Нормализует и проверяет название источника создания записей.
   * @param name Raw created origin name / Исходное название источника создания записей
   * @returns Trimmed non-empty created origin name / Очищенное название источника создания записей
   */
  static normalizeName(
    name: string
  ): string {
    return CmsVerification.normalizeName(name)
  }
}
