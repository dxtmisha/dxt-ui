import {
  computed,
  type ComputedRef,
  type DebuggerOptions,
  getCurrentScope,
  onScopeDispose,
  shallowRef,
  type ShallowRef,
  type WatchEffect,
  watchEffect
} from 'vue'
import { ErrorCenter, executeFunction, executePromise, isDomRuntime } from '@dxtmisha/functional-basic'

import { FUNCTIONAL_ERROR_GROUP } from '../types/errorTypes'

/**
 * Creates a computed property that can handle asynchronous getters.
 * Only the latest evaluation can update the result. Evaluation starts on first access
 * and stops with the effect scope in which the property was created.
 * Current evaluation errors clear the result and are reported through ErrorCenter.
 *
 * Создаёт вычисляемое свойство, которое может обрабатывать асинхронные геттеры.
 * Только актуальное вычисление может обновить результат. Вычисление начинается при первом чтении
 * и прекращается вместе с областью эффектов, в которой было создано свойство.
 * Ошибки актуального вычисления очищают результат и передаются в ErrorCenter.
 * @param getter Asynchronous function, synchronous function, or direct value to compute the result/
 * Асинхронная функция, синхронная функция или прямое значение для вычисления результата
 * @param initialState initial value of result/ начальное значение результата
 * @param ignore explicitly supplied value to ignore; when omitted, undefined clears the result/
 * явно переданное значение для исключения; без этого аргумента undefined очищает результат
 * @param debugOptions Used for debugging reactive computations. Supported by Vue.js library/
 * Используется для отладки реактивных вычислений. Поддерживается библиотекой Vue.js
 * @returns read-only reference to the latest result / ссылка только для чтения на актуальный результат
 */
export function computedAsync<R>(
  getter: (() => Promise<R>) | (() => R) | R,
  initialState?: (() => R) | R,
  ignore?: R,
  debugOptions?: DebuggerOptions
): ComputedRef<R | undefined> {
  /** Latest accepted result / Последний принятый результат */
  const item: ShallowRef<R | undefined> = shallowRef(executeFunction<R | undefined>(initialState))
  /** Effect scope owning the computed property / Область эффектов, которой принадлежит вычисляемое свойство */
  const scope = getCurrentScope()
  /** Whether an ignore argument was explicitly supplied / Передан ли явно аргумент ignore */
  const hasIgnore = arguments.length >= 3
  /** Whether lazy initialization has not run yet / Ожидается ли первый запуск ленивой инициализации */
  let first = true
  /** Whether the owning effect scope has stopped / Остановлена ли область эффектов владельца */
  let disposed = false

  if (scope) {
    onScopeDispose(() => {
      disposed = true
    })
  }

  /**
   * Evaluates the getter and invalidates pending results on cleanup.
   *
   * Вычисляет геттер и отменяет применение ожидающих результатов при очистке.
   * @param onCleanup watcher cleanup registration / регистрация очистки наблюдателя
   * @returns evaluation completion / завершение вычисления
   */
  const update = async (onCleanup: Parameters<WatchEffect>[0]): Promise<void> => {
    /** Whether this evaluation is still current / Актуально ли это вычисление */
    let active = true

    onCleanup(() => {
      active = false
    })

    try {
      /** Resolved getter result / Результат выполнения геттера */
      const newValue = await executePromise(getter)

      if (active && !disposed && (!hasIgnore || newValue !== ignore)) {
        item.value = newValue
      }
    } catch (error) {
      if (active && !disposed) {
        item.value = undefined
        ErrorCenter.on({
          group: FUNCTIONAL_ERROR_GROUP,
          code: 'computed-async',
          details: error
        })
      }
    }
  }

  /**
   * Starts the watcher lazily in the original effect scope.
   *
   * Лениво запускает наблюдатель в исходной области эффектов.
   */
  const init = (): void => {
    if (first && !disposed) {
      first = false

      if (isDomRuntime()) {
        if (scope) {
          scope.run(() => watchEffect(update))
        } else {
          watchEffect(update)
        }
      }
    }
  }

  return computed<R | undefined>(() => {
    init()
    return item.value
  }, debugOptions)
}
