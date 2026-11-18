import {
  ErrorCenterThrow,
  executeFunction,
  isPositiveInteger,
  type ErrorCenterCauseItem,
  type ErrorCenterThrowInstance
} from '@dxtmisha/functional-basic'
import { registerCmsErrorCauses } from '../functions/registerCmsErrorCauses'

/**
 * Static utility class for verifying CMS conditions and reporting domain errors via ErrorCenterThrow.
 *
 * Статический вспомогательный класс для проверки условий CMS и регистрации доменных ошибок через ErrorCenterThrow.
 */
export class CmsVerification {
  /**
   * Checks whether a value is a positive safe integer (> 0) and reports an error cause on failure if provided.
   *
   * Проверяет, является ли значение положительным безопасным целым числом (> 0), и регистрирует причину ошибки при неудаче, если она передана.
   * @param value Value to check / Проверяемое значение
   * @param cause Optional error cause details reported on failure / Необязательные детали причины ошибки при неудачной проверке
   * @param options Standard Error options / Стандартные опции Error
   * @param error Optional ErrorCenterThrowInstance handler / Необязательный обработчик ошибок ErrorCenterThrowInstance
   * @returns True if the value is a positive safe integer, otherwise false / True, если значение является положительным безопасным целым числом, иначе false
   */
  static isPositiveInteger<D = unknown>(
    value?: unknown,
    cause?: ErrorCenterCauseItem<D>,
    options?: ErrorOptions,
    error?: ErrorCenterThrowInstance
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
   * @param error Optional ErrorCenterThrowInstance handler / Необязательный обработчик ошибок ErrorCenterThrowInstance
   * @returns True if the check resolves to true, otherwise false / True, если проверка дала true, иначе false
   */
  static verify<D = unknown>(
    callback: boolean | (() => boolean),
    cause?: ErrorCenterCauseItem<D>,
    options?: ErrorOptions,
    error?: ErrorCenterThrowInstance
  ): boolean {
    const result = executeFunction(callback)

    if (!result && cause) {
      if (!error) {
        registerCmsErrorCauses()
      }

      (error ?? ErrorCenterThrow.getItem()).on(cause, options)
    }

    return result
  }
}
