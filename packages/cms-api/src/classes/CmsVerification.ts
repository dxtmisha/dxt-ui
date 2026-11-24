import {
  ErrorCenterThrow,
  executeFunction,
  isPositiveInteger,
  isString,
  toOptionalText
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
    isError: boolean = true
  ): value is number {
    return this.verify(
      isError,
      isPositiveInteger(value),
      undefined,
      'invalidId',
      { id: value }
    )
  }

  /**
   * Normalizes and validates a non-empty unique entity code without whitespace.
   *
   * Нормализует и проверяет непустой уникальный код сущности без пробельных символов.
   * @param code Raw entity code / Исходный код сущности
   * @param isError Whether to throw an error when the check fails / Нужно ли выбрасывать ошибку при неудачной проверке
   * @returns Trimmed non-empty entity code or empty string when invalid and isError is false / Очищенный код сущности или пустая строка при ошибке и isError = false
   */
  static normalizeCode(
    code?: unknown,
    isError: boolean = true
  ): string {
    const normalized = isString(code) ? code.trim() : ''
    const isValid = this.verify(
      isError,
      normalized.length > 0 && !/\s/.test(normalized),
      undefined,
      'invalidCode',
      { code }
    )

    return isValid ? normalized : ''
  }

  /**
   * Normalizes and validates an entity display name.
   *
   * Нормализует и проверяет отображаемое название сущности.
   * @param name Raw entity name / Исходное название сущности
   * @param isRequired Whether a non-empty name is required / Обязательно ли непустое название
   * @param isError Whether to throw an error when the check fails / Нужно ли выбрасывать ошибку при неудачной проверке
   * @returns Trimmed entity name or empty string when empty and allowed or isError is false / Очищенное название сущности или пустая строка, если поле необязательно или isError = false
   */
  static normalizeName(
    name?: unknown,
    isRequired: boolean = true,
    isError: boolean = true
  ): string {
    const normalized = isString(name) ? name.trim() : ''
    const isValid = this.verify(
      isError,
      !isRequired || normalized.length > 0,
      undefined,
      'invalidName',
      { name }
    )

    return isValid ? normalized : ''
  }

  /**
   * Normalizes an optional CMS text field, trimming strings and converting blank or non-string values to null.
   * When `isRequired` is enabled, verifies that the normalized value is a non-empty string.
   *
   * Нормализует необязательное текстовое поле CMS, удаляя пробелы и преобразуя пустые или нестроковые значения в null.
   * При включённом `isRequired` проверяет, что нормализованное значение является непустой строкой.
   * @param value Raw optional value / Исходное значение
   * @param isRequired Whether a non-empty string is required / Обязательна ли непустая строка
   * @param isError Whether to throw an error when the check fails / Нужно ли выбрасывать ошибку при неудачной проверке
   * @returns Trimmed string, null, or undefined / Очищенная строка, null или undefined
   */
  static normalizeOptionalText(
    value?: unknown,
    isRequired: boolean = false,
    isError: boolean = true
  ): string | null | undefined {
    const normalized = toOptionalText(value)

    if (isRequired) {
      const isValid = this.verify(
        isError,
        isString(normalized) && normalized.length > 0,
        undefined,
        'invalid',
        { value }
      )

      if (!isValid) {
        return null
      }
    }

    return normalized
  }

  /**
   * Evaluates a boolean value or predicate function and reports a CMS verification error if it resolves to false and `isError` is enabled.
   *
   * Проверяет логическое значение или выполняет функцию-предикат и регистрирует ошибку валидации CMS, если результат равен false и включён флаг `isError`.
   * @param isError Whether to throw an error when the check fails / Нужно ли выбрасывать ошибку при неудачной проверке
   * @param callback Boolean value or predicate function to verify / Логическое значение или функция-предикат для проверки
   * @param options Standard Error options / Стандартные опции Error
   * @param code Error code in the CMS verification group reported on failure / Код ошибки в группе валидации CMS при неудачной проверке
   * @param details Optional additional error details / Необязательные дополнительные данные ошибки
   * @returns True if the check resolves to true, otherwise false / True, если проверка дала true, иначе false
   */
  static verify<D = unknown>(
    isError: boolean = true,
    callback: boolean | (() => boolean) = false,
    options?: ErrorOptions,
    code: string = 'invalid',
    details?: D
  ): boolean {
    const result = executeFunction(callback)

    if (
      !result
      && isError
    ) {
      ErrorCenterThrow.on(
        {
          group: CMS_VERIFICATION_ERROR_GROUP,
          code,
          details
        },
        options
      )
    }

    return result
  }
}
