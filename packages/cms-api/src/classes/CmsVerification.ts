import {
  ErrorCenterThrow,
  executeFunction,
  isPositiveInteger,
  isString
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
    code: string,
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
   * Normalizes and validates a non-empty entity display name.
   *
   * Нормализует и проверяет непустое отображаемое название сущности.
   * @param name Raw entity name / Исходное название сущности
   * @param isError Whether to throw an error when the check fails / Нужно ли выбрасывать ошибку при неудачной проверке
   * @returns Trimmed non-empty entity name or empty string when invalid and isError is false / Очищенное название сущности или пустая строка при ошибке и isError = false
   */
  static normalizeName(
    name: string,
    isError: boolean = true
  ): string {
    const normalized = isString(name) ? name.trim() : ''
    const isValid = this.verify(
      isError,
      normalized.length > 0,
      undefined,
      'invalidName',
      { name }
    )

    return isValid ? normalized : ''
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
