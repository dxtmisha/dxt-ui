import {
  executeFunction,
  isPositiveInteger,
  type ErrorCenterCauseItem
} from '@dxtmisha/functional-basic'
import { CmsError } from './CmsError'
import type { CmsErrorInstance } from './CmsErrorInstance'

/**
 * Static utility class for verifying CMS conditions and reporting domain errors via CmsErrorInstance.
 *
 * Статический вспомогательный класс для проверки условий CMS и регистрации доменных ошибок через CmsErrorInstance.
 */
export class CmsVerification {
  /**
   * Checks whether a value is a positive safe integer (> 0) and reports an error cause on failure if provided.
   *
   * Проверяет, является ли значение положительным безопасным целым числом (> 0), и регистрирует причину ошибки при неудаче, если она передана.
   * @param value Value to check / Проверяемое значение
   * @param cause Optional error cause details reported on failure / Необязательные детали причины ошибки при неудачной проверке
   * @param options Standard Error options / Стандартные опции Error
   * @param error Optional CmsErrorInstance handler / Необязательный обработчик ошибок CmsErrorInstance
   * @returns True if the value is a positive safe integer, otherwise false / True, если значение является положительным безопасным целым числом, иначе false
   */
  static isPositiveInteger<D = unknown>(
    value?: unknown,
    cause?: ErrorCenterCauseItem<D>,
    options?: ErrorOptions,
    error?: CmsErrorInstance
  ): value is number {
    return this.verify(
      isPositiveInteger(value),
      cause,
      options,
      error
    )
  }

  /**
   * Evaluates a boolean value or predicate function and reports the specified error cause if it resolves to false and a cause is provided.
   *
   * Проверяет логическое значение или выполняет функцию-предикат и регистрирует указанную причину ошибки, если результат равен false и причина передана.
   * @param callback Boolean value or predicate function to verify / Логическое значение или функция-предикат для проверки
   * @param cause Optional error cause details reported on failure / Необязательные детали причины ошибки при неудачной проверке
   * @param options Standard Error options / Стандартные опции Error
   * @param error Optional CmsErrorInstance handler / Необязательный обработчик ошибок CmsErrorInstance
   * @returns True if the check resolves to true, otherwise false / True, если проверка дала true, иначе false
   */
  static verify<D = unknown>(
    callback: boolean | (() => boolean),
    cause?: ErrorCenterCauseItem<D>,
    options?: ErrorOptions,
    error?: CmsErrorInstance
  ): boolean {
    const result = executeFunction(callback)

    if (!result && cause) {
      (error ?? CmsError.getItem()).report(cause, options)
    }

    return result
  }
}
