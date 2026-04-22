import { computed, type ComputedRef, type DebuggerOptions, ref, watchEffect } from 'vue'
import { executePromise, isDomRuntime } from '@dxtmisha/functional-basic'

/**
 * Creates a computed property that can handle asynchronous getters.
 *
 * Создаёт вычисляемое свойство, которое может обрабатывать асинхронные геттеры.
 * @param getter Asynchronous function, synchronous function, or direct value to compute the result/
 * Асинхронная функция, синхронная функция или прямое значение для вычисления результата
 * @param ignore values to be ignored/ значения для исключения из обработки
 * @param debugOptions Used for debugging reactive computations. Supported by Vue.js library/
 * Используется для отладки реактивных вычислений. Поддерживается библиотекой Vue.js
 */
export function computedAsync<R>(
  getter: (() => Promise<R>) | (() => R) | R,
  ignore?: R,
  debugOptions?: DebuggerOptions
): ComputedRef<R | undefined> {
  const item = ref<R>()
  let first = true

  const update = async () => {
    const newValue = await executePromise(getter)

    if (newValue !== ignore) {
      item.value = newValue as R
    }
  }

  const init = () => {
    if (first) {
      first = false

      if (isDomRuntime()) {
        watchEffect(update)
      } else {
        update().then()
      }
    }
  }

  return computed<R>(() => {
    init()
    return item.value as R
  }, debugOptions)
}
