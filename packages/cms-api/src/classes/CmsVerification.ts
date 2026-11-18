import type { ErrorCenterCauseItem } from '@dxtmisha/functional-basic'
import { CmsError } from './CmsError'
import type { CmsErrorInstance } from './CmsErrorInstance'

/**
 * Utility class for verifying CMS conditions and reporting domain errors via CmsErrorInstance.
 *
 * Вспомогательный класс для проверки условий CMS и регистрации доменных ошибок через CmsErrorInstance.
 */
export class CmsVerification {
  /**
   * Initializes the verification helper with a CmsErrorInstance handler.
   *
   * Инициализирует помощник проверок с обработчиком ошибок CmsErrorInstance.
   * @param error CMS error instance handler / Обработчик ошибок CMS
   */
  constructor(
    protected error: CmsErrorInstance = CmsError.getItem()
  ) {}

  /**
   * Checks whether a value is a non-negative finite number (>= 0) and reports an error cause on failure if provided.
   *
   * Проверяет, является ли значение неотрицательным конечным числом (>= 0), и регистрирует причину ошибки при неудаче, если она передана.
   * @param value Value to check / Проверяемое значение
   * @param cause Optional error cause details reported on failure / Необязательные детали причины ошибки при неудачной проверке
   * @param options Standard Error options / Стандартные опции Error
   * @returns True if the value is a non-negative finite number, otherwise false / True, если значение является неотрицательным конечным числом, иначе false
   */
  isNonNegative<D = unknown>(
    value?: unknown,
    cause?: ErrorCenterCauseItem<D>,
    options?: ErrorOptions
  ): value is number {
    return this.verify(
      () => typeof value === 'number' && Number.isFinite(value) && value >= 0,
      cause,
      options
    )
  }

  /**
   * Executes a predicate function and reports the specified error cause if it returns false and a cause is provided.
   *
   * Выполняет функцию-предикат и регистрирует указанную причину ошибки, если она возвращает false и причина передана.
   * @param callback Predicate function to verify / Функция-предикат для проверки
   * @param cause Optional error cause details reported on failure / Необязательные детали причины ошибки при неудачной проверке
   * @param options Standard Error options / Стандартные опции Error
   * @returns True if the predicate returns true, otherwise false / True, если предикат вернул true, иначе false
   */
  verify<D = unknown>(
    callback: () => boolean,
    cause?: ErrorCenterCauseItem<D>,
    options?: ErrorOptions
  ): boolean {
    const result = callback()

    if (!result && cause) {
      this.error.report(cause, options)
    }

    return result
  }
}
