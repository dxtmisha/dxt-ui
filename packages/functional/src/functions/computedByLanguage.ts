import { computed, type ComputedGetter, type ComputedRef, type DebuggerOptions } from 'vue'
import { executeFunction } from '@dxtmisha/functional-basic'
import { GeoRef } from '../classes/ref/GeoRef'

/**
 * Метод `computedByLanguage` предоставляет возможность создания реактивного свойства `computed`,
 * значение которого изменяется в зависимости от текущего языка и определённых условий.
 * @param getter Функция, которая предоставляет основное значение, зависящее от текущего языка
 * или других факторов. Этот `getter` будет вызываться для получения актуального значения
 * @param getterNone Альтернативное значение, которое будет возвращено в случаях, если:
 *   Условия не выполнены,
 *   Значение, возвращённое `getter`, равно `undefined`
 * @param conditions Условие, определяющее, когда должен быть вызван основной `getter`.
 * Если функция отсутствует, условие считается выполненным всегда
 * @param debugOptions Используется для отладки реактивных вычислений.
 * Поддерживается библиотекой Vue.js
 */
export function computedByLanguage<T, R extends (T | undefined)>(
  getter: ComputedGetter<R>,
  getterNone: R | (() => R) = () => undefined as R,
  conditions?: () => boolean,
  debugOptions?: DebuggerOptions
): ComputedRef<R> {
  return computed<R>(
    () => {
      if (
        GeoRef.get().value
        && (
          conditions === undefined
          || conditions()
        )
      ) {
        const data = getter()

        if (data !== undefined) {
          return data
        }
      }

      return executeFunction(getterNone)
    },
    debugOptions
  )
}
