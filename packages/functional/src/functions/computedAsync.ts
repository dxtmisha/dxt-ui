import { computed, type ComputedRef, type DebuggerOptions, ref, watchEffect } from 'vue'
import { executePromise } from '@dxtmisha/functional-basic'

/**
 * Creates a computed property that can handle asynchronous getters.
 *
 * Создаёт вычисляемое свойство, которое может обрабатывать асинхронные геттеры.
 * @param getter Asynchronous function, synchronous function, or direct value to compute the result/
 * Асинхронная функция, синхронная функция или прямое значение для вычисления результата
 * @param debugOptions Used for debugging reactive computations. Supported by Vue.js library/
 * Используется для отладки реактивных вычислений. Поддерживается библиотекой Vue.js
 */
export function computedAsync<R>(
  getter: (() => Promise<R>) | (() => R) | R,
  debugOptions?: DebuggerOptions
): ComputedRef<R> {
  const item = ref<R>()

  watchEffect(async () => {
    item.value = await executePromise(getter)
  })

  return computed<R>(() => item.value as R, debugOptions)
}
