import {
  customRef,
  watchEffect,
  type Ref,
  shallowRef
} from 'vue'
import { executeFunction, executePromise, isDomRuntime } from '@dxtmisha/functional-basic'

import { EffectScopeGlobal } from '../classes/ref/EffectScopeGlobal'

/**
 * Creates a computed property that is computed on demand and cached.
 * The value is updated automatically when dependencies change, but only if it has been accessed at least once.
 * The watcher remains active throughout the life of the application.
 *
 * Создаёт вычисляемое свойство, которое вычисляется по требованию и кешируется.
 * Значение обновляется автоматически при изменении зависимостей, но только если к нему был осуществлён доступ хотя бы один раз.
 * Вотчер остаётся активным на протяжении работы всего приложения.
 *
 * @param getter A function that returns the value to be computed/
 * Функция, которая возвращает вычисляемое значение
 * @param initialState initial value of result/ начальное значение результата
 */
export function computedEternity<T>(
  getter: () => Promise<T> | T,
  initialState?: (() => T) | T
) {
  return customRef<T>((track, trigger) => {
    const item: Ref<T | undefined> = shallowRef<T | undefined>(executeFunction(initialState))
    let ready = false

    /**
     * Updates the value from the getter.
     *
     * Обновляет значение из геттера.
     */
    const reading = async () => {
      item.value = await executePromise(getter)
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

        if (isDomRuntime()) {
          EffectScopeGlobal.run(() => {
            watchEffect(async () => await reading())
          })
        } else {
          reading().then()
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

        return item.value as T
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
