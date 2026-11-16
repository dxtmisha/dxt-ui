import {
  ErrorCenter,
  isNull,
  uniqueArray,
  type ErrorCenterInstance
} from '@dxtmisha/functional-basic'

import { useCmsDb } from '../composables/useCmsDb'
import type { CmsDbInstance } from './CmsDbInstance'
import type { CmsDb } from '../types/cmsDbTypes'

/** Default number of records per page / Количество записей на странице по умолчанию */
const DEFAULT_LIST_LIMIT = 20

/** Maximum allowed number of records per page / Максимально допустимое количество записей на странице */
const MAX_LIST_LIMIT = 100

/**
 * Abstract base class providing unified CMS database instance management and centralized ErrorCenter error handling.
 *
 * Абстрактный базовый класс для единого управления экземпляром базы данных CMS и централизованной обработки ошибок через ErrorCenter.
 */
export abstract class CmsDbAbstract {
  /**
   * Initializes the base CMS database handler with a CmsDbInstance and ErrorCenter.
   *
   * Инициализирует базовый обработчик БД CMS с экземпляром CmsDbInstance и центром ошибок ErrorCenter.
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   */
  constructor(
    protected databaseInstance: CmsDbInstance = useCmsDb().cmsDbInstance,
    protected errorCenter: ErrorCenterInstance = ErrorCenter.getItem()
  ) {}

  /**
   * Returns the active Drizzle database instance from the managed CmsDbInstance.
   *
   * Возвращает активный экземпляр базы данных Drizzle из управляемого CmsDbInstance.
   * @returns Typed Drizzle CMS database instance / Типизированный экземпляр базы данных Drizzle CMS
   */
  getDatabase(): CmsDb {
    return this.databaseInstance.get()
  }

  /**
   * Returns the managed CmsDbInstance wrapper.
   *
   * Возвращает управляемый экземпляр CmsDbInstance.
   * @returns CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  getDatabaseInstance(): CmsDbInstance {
    return this.databaseInstance
  }

  /**
   * Returns the ErrorCenter instance used for centralized error reporting.
   *
   * Возвращает экземпляр ErrorCenter, используемый для централизованной регистрации ошибок.
   * @returns ErrorCenter instance / Экземпляр ErrorCenter
   */
  getErrorCenter(): ErrorCenterInstance {
    return this.errorCenter
  }

  /**
   * Sets or overrides the CmsDbInstance wrapper used by this instance.
   *
   * Устанавливает или заменяет экземпляр CmsDbInstance, используемый текущим объектом.
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   * @returns Current instance for chaining / Текущий экземпляр для цепочки вызовов
   */
  setDatabaseInstance(databaseInstance: CmsDbInstance): this {
    this.databaseInstance = databaseInstance
    return this
  }

  /**
   * Sets or overrides the ErrorCenter instance used for error reporting.
   *
   * Устанавливает или заменяет экземпляр ErrorCenter для регистрации ошибок.
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @returns Current instance for chaining / Текущий экземпляр для цепочки вызовов
   */
  setErrorCenter(errorCenter: ErrorCenterInstance): this {
    this.errorCenter = errorCenter
    return this
  }

  /**
   * Reports an error via the instance ErrorCenter and throws an Error.
   *
   * Регистрирует ошибку через ErrorCenter экземпляра и выбрасывает исключение Error.
   * @param code Error code within the cms group / Код ошибки в группе cms
   * @param message Human-readable error message / Человекочитаемое сообщение об ошибке
   * @param details Optional raw error payload / Необязательные дополнительные детали ошибки
   */
  protected reportError(
    code: string,
    message: string,
    details?: unknown
  ): never {
    return CmsDbAbstract.reportError(this.errorCenter, code, message, details)
  }

  /**
   * Reports unexpected transaction errors through the instance ErrorCenter without double-reporting domain errors.
   *
   * Передаёт неожиданные ошибки транзакции в ErrorCenter экземпляра, избегая повторной регистрации доменных ошибок.
   * @param code Fallback error code / Код ошибки по умолчанию
   * @param message Fallback error message / Сообщение об ошибке по умолчанию
   * @param error Caught error instance / Перехваченная ошибка
   */
  protected handleTransactionError(
    code: string,
    message: string,
    error: unknown
  ): never {
    return CmsDbAbstract.handleTransactionError(this.errorCenter, code, message, error)
  }

  /**
   * Escapes SQL LIKE wildcards in a search term.
   *
   * Экранирует спецсимволы SQL LIKE в поисковой строке.
   * @param value Raw search text / Исходная поисковая строка
   * @returns Escaped LIKE pattern value / Экранированная строка для шаблона LIKE
   */
  protected escapeSearchPattern(value: string): string {
    return value.replaceAll('\\', '\\\\').replaceAll('%', '\\%').replaceAll('_', '\\_')
  }

  /**
   * Clamps and normalizes list limit parameter.
   *
   * Ограничивает и нормализует параметр количества записей на странице.
   * @param limit Requested limit / Запрошенное количество записей
   * @returns Normalized limit / Нормализованный лимит
   */
  protected normalizeLimit(limit?: number): number {
    if (limit === undefined || !Number.isFinite(limit)) {
      return DEFAULT_LIST_LIMIT
    }

    const integerLimit = Math.trunc(limit)
    if (integerLimit < 1) {
      return 1
    }

    return Math.min(integerLimit, MAX_LIST_LIMIT)
  }

  /**
   * Normalizes list offset parameter.
   *
   * Нормализует параметр смещения выборки.
   * @param offset Requested offset / Запрошенное смещение
   * @returns Non-negative integer offset / Неотрицательное целочисленное смещение
   */
  protected normalizeOffset(offset?: number): number {
    if (offset === undefined || !Number.isFinite(offset)) {
      return 0
    }

    return Math.max(0, Math.trunc(offset))
  }

  /**
   * Checks that an identifier is a positive safe integer.
   *
   * Проверяет, что идентификатор является положительным безопасным целым числом.
   * @param id Candidate identifier / Проверяемый идентификатор
   * @returns True if valid positive safe integer / True, если корректный положительный идентификатор
   */
  static isValidId(id: number): boolean {
    return Number.isSafeInteger(id) && id > 0
  }

  /**
   * Normalizes optional string fields, converting blank strings to null.
   *
   * Нормализует необязательные строковые поля, преобразуя пустые строки в null.
   * @param value Raw optional string or null / Исходная строка, null или undefined
   * @returns Trimmed string, null, or undefined / Очищенная строка, null или undefined
   */
  static normalizeOptionalText(value?: string | null): string | null | undefined {
    if (value === undefined) {
      return undefined
    }

    if (isNull(value)) {
      return null
    }

    const trimmed = value.trim()
    return trimmed.length > 0 ? trimmed : null
  }

  /**
   * Reports an error via ErrorCenter and throws an Error.
   *
   * Регистрирует ошибку через ErrorCenter и выбрасывает исключение Error.
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @param code Error code within the cms group / Код ошибки в группе cms
   * @param message Human-readable error message / Человекочитаемое сообщение об ошибке
   * @param details Optional raw error payload / Необязательные дополнительные детали ошибки
   */
  static reportError(
    errorCenter: ErrorCenterInstance,
    code: string,
    message: string,
    details?: unknown
  ): never {
    errorCenter.on({
      group: 'cms',
      code,
      message,
      details
    })

    throw new Error(`[@dxtmisha/cms-api] ${message}`)
  }

  /**
   * Reports unexpected database transaction errors through ErrorCenter without double-reporting domain errors.
   *
   * Передаёт неожиданные ошибки транзакции БД в ErrorCenter, избегая повторной регистрации доменных ошибок.
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @param code Fallback error code / Код ошибки по умолчанию
   * @param message Fallback error message / Сообщение об ошибке по умолчанию
   * @param error Caught error instance / Перехваченная ошибка
   */
  static handleTransactionError(
    errorCenter: ErrorCenterInstance,
    code: string,
    message: string,
    error: unknown
  ): never {
    if (error instanceof Error && error.message.startsWith('[@dxtmisha/cms-api]')) {
      throw error
    }

    errorCenter.on({
      group: 'cms',
      code,
      message,
      details: error
    })

    throw error instanceof Error ? error : new Error(`[@dxtmisha/cms-api] ${message}`)
  }

  /**
   * Resolves and validates entity identifiers from IDs and/or unique codes using provided lookup callbacks.
   *
   * Разрешает и валидирует идентификаторы сущностей из переданных ID и/или кодов с помощью функций поиска.
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @param errorCode Error code reported when entities are invalid or missing / Код ошибки при невалидных или отсутствующих записях
   * @param entityName Human-readable entity name for error messages / Название сущности для сообщений об ошибках
   * @param fetchByIds Callback fetching persisted records matching given IDs / Функция выборки записей по ID
   * @param fetchByCodes Callback fetching persisted records matching given codes / Функция выборки записей по кодам
   * @param ids Optional list of entity IDs / Необязательный список ID сущностей
   * @param codes Optional list of entity codes / Необязательный список кодов сущностей
   * @returns Deduplicated list of verified entity IDs / Уникальный список проверенных ID сущностей
   */
  protected static async resolveEntityIds(
    errorCenter: ErrorCenterInstance,
    errorCode: string,
    entityName: string,
    fetchByIds: (ids: number[]) => Promise<Array<{ id: number }>>,
    fetchByCodes: (codes: string[]) => Promise<Array<{ id: number, code: string }>>,
    ids?: readonly number[],
    codes?: readonly string[]
  ): Promise<number[]> {
    const resolvedIds: number[] = []

    if (ids !== undefined) {
      const uniqueIds = uniqueArray(ids)
      for (const entityId of uniqueIds) {
        if (!CmsDbAbstract.isValidId(entityId)) {
          CmsDbAbstract.reportError(
            errorCenter,
            errorCode,
            `Invalid ${entityName} ID: ${String(entityId)}.`,
            { id: entityId }
          )
        }
      }

      if (uniqueIds.length > 0) {
        const persistedByIds = await fetchByIds(uniqueIds)
        const foundIdSet = new Set(persistedByIds.map(record => record.id))
        const missingIds = uniqueIds.filter(entityId => !foundIdSet.has(entityId))

        if (missingIds.length > 0) {
          CmsDbAbstract.reportError(
            errorCenter,
            errorCode,
            `${entityName}s not found for IDs: ${missingIds.join(', ')}.`,
            { missingIds }
          )
        }

        resolvedIds.push(...uniqueIds)
      }
    }

    if (codes !== undefined) {
      const uniqueCodes = uniqueArray(
        codes
          .map(code => code.trim())
          .filter(code => code.length > 0)
      )

      if (uniqueCodes.length > 0) {
        const persistedByCodes = await fetchByCodes(uniqueCodes)
        const idByCode = new Map(persistedByCodes.map(record => [record.code, record.id]))
        const missingCodes = uniqueCodes.filter(code => !idByCode.has(code))

        if (missingCodes.length > 0) {
          CmsDbAbstract.reportError(
            errorCenter,
            errorCode,
            `${entityName}s not found for codes: ${missingCodes.join(', ')}.`,
            { missingCodes }
          )
        }

        for (const code of uniqueCodes) {
          const entityId = idByCode.get(code)
          if (entityId !== undefined) {
            resolvedIds.push(entityId)
          }
        }
      }
    }

    return uniqueArray(resolvedIds)
  }
}
