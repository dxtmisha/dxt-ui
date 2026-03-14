import { executePromise } from '@dxtmisha/functional-basic'
import {
  customRef,
  watchEffect,
  onUnmounted,
  getCurrentInstance
} from 'vue'

/**
 * Creates a computed property that is computed on demand and cached.
 * The value is updated automatically when dependencies change, but only if it has been accessed at least once.
 * On unmount, the value is reset.
 *
 * Создаёт вычисляемое свойство, которое вычисляется по требованию и кешируется.
 * Значение обновляется автоматически при изменении зависимостей, но только если к нему был осуществлён доступ хотя бы один раз.
 * При размонтировании значение сбрасывается.
 *
 * @param getter A function that returns the value to be computed/
 * Функция, которая возвращает вычисляемое значение
 */
export function computedEternity<T>(
  getter: () => Promise<T> | T
) {
  return customRef<T>((track, trigger) => {
    let value: T | undefined
    let ready = false

    /**
     * Updates the value from the getter.
     *
     * Обновляет значение из геттера.
     */
    const reading = async () => {
      value = await executePromise(getter)
    }

    /**
     * Updates the value and triggers reactive updates.
     *
     * Обновляет значение и инициирует реактивное обновление.
     */
    const update = async () => {
      await reading()
      trigger()
    }

    /**
     * Resets the state.
     *
     * Сбрасывает состояние.
     */
    const reset = () => {
      ready = false
      value = undefined

      trigger()
    }

    /**
     * Method for monitoring changes.
     *
     * Метод для отслеживания изменений.
     */
    const init = () => {
      if (!ready) {
        ready = true

        watchEffect(async () => await update())

        if (getCurrentInstance()) {
          onUnmounted(() => reset())
        }
      }
    }

    return {
      /**
       * Gets the computed value.
       *
       * Получает вычисляемое значение.
       */
      get() {
        init()
        track()

        return value as T
      },
      /**
       * Displays a warning that the value is read-only.
       *
       * Выводит предупреждение о том, что значение доступно только для чтения.
       */
      set(_: T) {
        console.warn('computedEternity: value is read-only.')
      }
    }
  })
}
