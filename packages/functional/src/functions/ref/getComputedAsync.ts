import {
  computed,
  type ComputedRef,
  ref,
  type Ref,
  watchEffect
} from 'vue'
import { getRef } from './getRef'

/**
 * Processes an asynchronous method for wrapping in computed.
 *
 * Обрабатывает асинхронный метод для обёртки в computed.
 * @param callback callback function/ функция обратного вызова
 * @param ignore values to be ignored/ значения для исключения из обработки
 */
export const getComputedAsync = <T, I = undefined> (
  callback: () => Promise<Ref<T | I> | T | I>,
  ignore?: I
): ComputedRef<T | undefined> => {
  const item = ref<T>()
  let first = true

  const init = () => {
    if (first) {
      watchEffect(async () => {
        const newValue = getRef(await callback())

        if (newValue !== ignore) {
          item.value = newValue as T
        }
      })
      first = false
    }
  }

  return computed<T | undefined>(() => {
    init()

    return item.value
  })
}
