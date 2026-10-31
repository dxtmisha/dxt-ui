import { computed, type ComputedGetter, type ComputedRef, type DebuggerOptions } from 'vue'
import { executeFunction } from '@dxtmisha/functional-basic'
import { GeoRef } from '../classes/ref/GeoRef'

/**
 * Creates a reactive `computed` property that updates based on the current language and specified conditions.
 *
 * Создаёт реактивное вычисляемое свойство `computed`, значение которого изменяется
 * в зависимости от текущего языка и определённых условий.
 *
 * @template T Type of the main computed value / Тип основного вычисляемого значения
 * @template D Type of the fallback value or factory / Тип резервного значения или фабрики
 * @param getter Function that provides the primary value depending on the current language or other reactive sources /
 * Функция, предоставляющая основное значение в зависимости от текущего языка или других реактивных источников
 * @param getterNone Alternative value or factory returned when conditions are not met or getter returns undefined /
 * Альтернативное значение или фабрика, возвращаемое при невыполнении условий либо при возврате undefined из getter
 * @param conditions Condition guard determining whether the main getter should be executed (always executed if omitted) /
 * Условие-затвор, определяющее необходимость вызова основного getter (при отсутствии условие считается выполненным)
 * @param debugOptions Vue reactive debugging options / Опции отладки реактивных вычислений Vue.js
 * @returns Computed reactive reference to the resolved value / Вычисляемая реактивная ссылка на полученное значение
 */
export function computedByLanguage<T, D = T | undefined>(
  getter: ComputedGetter<T>,
  getterNone?: D | (() => D),
  conditions?: () => boolean,
  debugOptions?: DebuggerOptions
): ComputedRef<T | (D extends () => infer DR ? DR : D)> {
  return computed(
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

      return executeFunction(getterNone) as T | (D extends () => infer DR ? DR : D)
    },
    debugOptions
  )
}
