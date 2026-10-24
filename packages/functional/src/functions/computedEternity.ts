import {
  customRef,
  watchEffect,
  type Ref,
  type WatchEffect,
  shallowRef
} from 'vue'
import { executeFunction, executePromise, isDomRuntime } from '@dxtmisha/functional-basic'

import { EffectScopeGlobal } from '../classes/ref/EffectScopeGlobal'

/**
 * Creates a computed property that is computed on demand and cached.
 * The value is updated automatically when dependencies change, but only if it has been accessed at least once.
 * Only the latest evaluation can update the value; results of obsolete evaluations are ignored.
 * The watcher remains active throughout the life of the application.
 * Without a DOM runtime, the first access starts one evaluation without creating a watcher.
 *
 * Создаёт вычисляемое свойство, которое вычисляется по требованию и кешируется.
 * Значение обновляется автоматически при изменении зависимостей, но только если к нему был осуществлён доступ хотя бы один раз.
 * Значение обновляет только последнее вычисление; результаты устаревших вычислений игнорируются.
 * Наблюдатель остаётся активным на протяжении работы всего приложения.
 * Вне DOM-среды первое обращение запускает одно вычисление без создания наблюдателя.
 *
 * @template T resolved result type / тип результата вычисления
 * @param getter synchronous or asynchronous evaluator; reactive dependencies are tracked before the first await / синхронное или асинхронное вычисление; реактивные зависимости отслеживаются до первого await
 * @param initialState initial cached value or a factory executed immediately during ref creation / начальное кешированное значение или фабрика, выполняемая сразу при создании ref
 * @returns custom ref with the initial or latest resolved value; assigning to value only emits a warning / custom ref с начальным или последним актуальным результатом; присваивание value только выводит предупреждение
 */
export function computedEternity<T>(
  getter: () => Promise<T> | T,
  initialState?: (() => T) | T
): Ref<T> {
  return customRef<T>((track, trigger) => {
    const item: Ref<T | undefined> = shallowRef<T | undefined>(executeFunction(initialState))
    let ready = false

    /**
     * Updates the value from the getter if this evaluation is still current.
     *
     * Обновляет значение из геттера, если это вычисление ещё актуально.
     * @param onCleanup registers invalidation before rerunning or stopping the watcher / регистрирует потерю актуальности перед повторным запуском или остановкой наблюдателя
     * @returns completion of this evaluation, including publication when still current / завершение вычисления, включая публикацию результата, если он ещё актуален
     */
    const reading = async (onCleanup?: Parameters<WatchEffect>[0]): Promise<void> => {
      let active = true

      onCleanup?.(() => {
        active = false
      })

      const newValue = await executePromise(getter)

      if (active) {
        item.value = newValue
        trigger()
      }
    }

    /**
     * Starts evaluation on the first access and creates a persistent watcher in a DOM runtime.
     *
     * При первом обращении запускает вычисление и создаёт постоянный наблюдатель в DOM-среде.
     */
    const init = (): void => {
      if (!ready) {
        ready = true

        if (isDomRuntime()) {
          EffectScopeGlobal.run(() => {
            watchEffect(reading)
          })
        } else {
          reading().then()
        }
      }
    }

    return {
      /**
       * Starts lazy evaluation if needed and tracks access to the cached value.
       *
       * При необходимости запускает ленивое вычисление и отслеживает обращение к кешированному значению.
       * @returns currently cached value, which may be undefined until the first evaluation resolves / текущее кешированное значение, которое может быть undefined до завершения первого вычисления
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
       * @param _ ignored assigned value / игнорируемое присваиваемое значение
       */
      set(_: T) {
        console.warn('computedEternity: value is read-only.')
      }
    }
  })
}
