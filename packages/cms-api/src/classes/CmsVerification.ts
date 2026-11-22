import {
  ErrorCenterThrow,
  executeFunction,
  isPositiveInteger,
  isString,
  type ErrorCenterCauseItem
} from '@dxtmisha/functional-basic'
import { CMS_VERIFICATION_ERROR_GROUP } from '../media/errors/cmsVerificationErrorCauseList'

/**
 * Static utility class for verifying CMS conditions and reporting domain errors via ErrorCenterThrow.
 *
 * Статический вспомогательный класс для проверки условий CMS и регистрации доменных ошибок через ErrorCenterThrow.
 */
export class CmsVerification {
  /**
   * Checks whether a value is a positive safe integer (> 0) and optionally reports a cms-verification:invalidId error on failure.
   *
   * Проверяет, является ли значение положительным безопасным целым числом (> 0), и при необходимости регистрирует ошибку cms-verification:invalidId при неудаче.
   * @param value Value to check / Проверяемое значение
   * @param isError Whether to throw an error when the check fails / Нужно ли выбрасывать ошибку при неудачной проверке
   * @returns True if the value is a positive safe integer, otherwise false / True, если значение является положительным безопасным целым числом, иначе false
   */
  static isPositiveInteger(
    value?: unknown,
    isError: boolean = false
  ): value is number {
    return this.verify(
      isPositiveInteger(value),
      isError
        ? {
            group: CMS_VERIFICATION_ERROR_GROUP,
            code: 'invalidId',
            details: { id: value }
          }
        : undefined
    )
  }

  /**
   * Normalizes and validates a non-empty unique entity code without whitespace.
   *
   * Нормализует и проверяет непустой уникальный код сущности без пробельных символов.
   * @param code Raw entity code / Исходный код сущности
   * @returns Trimmed non-empty entity code / Очищенный код сущности
   */
  static normalizeCode(
    code: string
  ): string {
    const normalized = isString(code) ? code.trim() : ''

    this.verify(
      normalized.length > 0 && !/\s/.test(normalized),
      {
        group: CMS_VERIFICATION_ERROR_GROUP,
        code: 'invalidCode',
        details: { code }
      }
    )

    return normalized
  }

  /**
   * Normalizes and validates a non-empty entity display name.
   *
   * Нормализует и проверяет непустое отображаемое название сущности.
   * @param name Raw entity name / Исходное название сущности
   * @returns Trimmed non-empty entity name / Очищенное название сущности
   */
  static normalizeName(
    name: string
  ): string {
    const normalized = isString(name) ? name.trim() : ''

    this.verify(
      normalized.length > 0,
      {
        group: CMS_VERIFICATION_ERROR_GROUP,
        code: 'invalidName',
        details: { name }
      }
    )

    return normalized
  }

  /**
   * Evaluates a boolean value or predicate function and reports the specified error cause if it resolves to false and a cause is provided.
   *
   * Проверяет логическое значение или выполняет функцию-предикат и регистрирует указанную причину ошибки, если результат равен false и причина передана.
   * @param callback Boolean value or predicate function to verify / Логическое значение или функция-предикат для проверки
   * @param cause Optional error cause details reported on failure / Необязательные детали причины ошибки при неудачной проверке
   * @param options Standard Error options / Стандартные опции Error
   * @returns True if the check resolves to true, otherwise false / True, если проверка дала true, иначе false
   */
  static verify<D = unknown>(
    callback: boolean | (() => boolean),
    cause?: ErrorCenterCauseItem<D>,
    options?: ErrorOptions
  ): boolean {
    const result = executeFunction(callback)

    if (!result && cause) {
      ErrorCenterThrow.on(cause, options)
    }

    return result
  }
}
