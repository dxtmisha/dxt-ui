import {
  computed,
  type ComputedRef,
  type DebuggerOptions,
  shallowRef,
  type ShallowRef
} from 'vue'
import { ErrorCenter, executeFunction, executePromise } from '@dxtmisha/functional-basic'

import { useScope } from '../composables/ref/useScope'
import { FUNCTIONAL_ERROR_GROUP } from '../types/errorTypes'
import { watchEffectAsync } from './watchEffectAsync'

/**
 * Creates a computed property that can handle asynchronous getters.
 * Only the latest evaluation can update the result. Evaluation starts on first access
 * and stops with the effect scope in which the property was created.
 * Current evaluation errors clear the result and are reported through ErrorCenter.
 * Reactive dependencies must be accessed before the first `await` statement.
 * By default, returning `undefined` from the getter preserves previous data unless a custom `ignore` is provided.
 *
 * Создаёт вычисляемое свойство, которое может обрабатывать асинхронные геттеры.
 * Только актуальное вычисление может обновить результат. Вычисление начинается при первом чтении
 * и прекращается вместе с областью эффектов, в которой было создано свойство.
 * Ошибки актуального вычисления очищают результат и передаются в ErrorCenter.
 * Реактивные зависимости должны быть прочитаны до первого выражения `await`.
 * По умолчанию возврат `undefined` из геттера сохраняет предыдущие данные, если не задано иное значение `ignore`.
 * @param getter Asynchronous function, synchronous function, or direct value to compute the result /
 * Асинхронная функция, синхронная функция или прямое значение для вычисления результата
 * @param initialState initial value of result / начальное значение результата
 * @param ignore value to ignore (defaults to undefined, preserving previous data) /
 * значение для исключения (по умолчанию undefined, сохраняя предыдущие данные)
 * @param debugOptions Used for debugging reactive computations. Supported by Vue.js library /
 * Используется для отладки реактивных вычислений. Поддерживается библиотекой Vue.js
 * @returns read-only reference to the latest result / ссылка только для чтения на актуальный результат
 */
export function computedAsync<R, I = R>(
  getter: (() => Promise<R>) | (() => R) | R,
  initialState?: (() => I) | I,
  ignore?: R,
  debugOptions?: DebuggerOptions
): ComputedRef<R | I | undefined> {
  /** Latest accepted result / Последний принятый результат */
  const item: ShallowRef<R | I | undefined> = shallowRef(executeFunction<R | I | undefined>(initialState))
  /** Effect scope owning the computed property / Область эффектов, которой принадлежит вычисляемое свойство */
  const { is, run } = useScope()
  /** Whether lazy initialization has not run yet / Ожидается ли первый запуск ленивой инициализации */
  let first = true

  /**
   * Evaluates the getter and invalidates pending results on cleanup.
   *
   * Вычисляет геттер и отменяет применение ожидающих результатов при очистке.
   * @param isCurrent check whether the current evaluation is still active / проверка актуальности текущего вычисления
   * @returns evaluation completion / завершение вычисления
   */
  const update = async (isCurrent: () => boolean): Promise<void> => {
    try {
      const newValue = await executePromise(getter)

      if (
        isCurrent()
        && is()
        && newValue !== ignore
      ) {
        item.value = newValue
      }
    } catch (error) {
      if (
        isCurrent()
        && is()
      ) {
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
    if (
      first
      && is()
    ) {
      first = false
      run(() => watchEffectAsync(update))
    }
  }

  return computed<R | I | undefined>(() => {
    init()
    return item.value
  }, debugOptions)
}
