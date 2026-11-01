import {
  customRef,
  type Ref
} from 'vue'
import { ErrorCenter, executeFunction, executePromise, isDomRuntime } from '@dxtmisha/functional-basic'

import { EffectScopeGlobal } from '../classes/ref/EffectScopeGlobal'
import { FUNCTIONAL_ERROR_GROUP } from '../types/errorTypes'
import { watchEffectAsync } from './watchEffectAsync'

/** Return value type of the computedEternity function / Тип возвращаемого значения функции computedEternity */
export type ComputedEternityValue<T, I = T | undefined> = [I] extends [undefined]
  ? (T | undefined)
  : (T | (I extends () => infer R ? R : I))

/**
 * Creates a computed property that is computed on demand and cached.
 * The value is updated automatically when dependencies change, but only if it has been accessed at least once.
 * Only the latest evaluation can update the value; results of obsolete evaluations are ignored.
 * Current evaluation errors reset the cached value to the initial state and are reported through ErrorCenter.
 * The watcher remains active throughout the life of the application.
 * Without a DOM runtime, evaluation is skipped and the initial state is returned.
 *
 * Создаёт вычисляемое свойство, которое вычисляется по требованию и кешируется.
 * Значение обновляется автоматически при изменении зависимостей, но только если к нему был осуществлён доступ хотя бы один раз.
 * Значение обновляет только последнее вычисление; результаты устаревших вычислений игнорируются.
 * Ошибки актуального вычисления сбрасывают кешированное значение к начальному состоянию и передаются в ErrorCenter.
 * Наблюдатель остаётся активным на протяжении работы всего приложения.
 * Вне DOM-среды вычисление пропускается и возвращается начальное значение.
 *
 * @template T resolved result type / тип результата вычисления
 * @template I initial state type / тип начального значения
 * @param getter synchronous or asynchronous evaluator or direct value; reactive dependencies are tracked before the first await / синхронное или асинхронное вычисление или прямое значение; реактивные зависимости отслеживаются до первого await
 * @param initialState initial cached value or a factory executed immediately during ref creation / начальное кешированное значение или фабрика, выполняемая сразу при создании ref
 * @returns custom ref with the initial or latest resolved value; assigning to value reports a read-only error through ErrorCenter / custom ref с начальным или последним актуальным результатом; присваивание value передаёт ошибку только для чтения в ErrorCenter
 */
export function computedEternity<T, I = T | undefined>(
  getter: (() => Promise<T> | T) | Promise<T> | T,
  initialState?: (() => I) | I
): Ref<ComputedEternityValue<T, I>> {
  return customRef<ComputedEternityValue<T, I>>((track, trigger) => {
    /** Initial fallback value / Начальное резервное значение */
    const initialValue: T | I | undefined = executeFunction<T | I | undefined>(initialState)
    /** Latest cached value / Последнее кешированное значение */
    let item: T | I | undefined = initialValue
    /** Whether lazy evaluation has already been initialized / Было ли уже инициализировано ленивое вычисление */
    let ready = false

    /**
     * Updates the value from the getter if this evaluation is still current.
     *
     * Обновляет значение из геттера, если это вычисление ещё актуально.
     * @param isCurrent check whether the current evaluation is still active / проверка актуальности текущего вычисления
     * @returns completion of this evaluation, including publication when still current / завершение вычисления, включая публикацию результата, если он ещё актуален
     */
    const reading = async (isCurrent: () => boolean): Promise<void> => {
      try {
        const newValue = await executePromise(getter)

        if (
          isCurrent()
          && !Object.is(item, newValue)
        ) {
          item = newValue
          trigger()
        }
      } catch (error) {
        if (isCurrent()) {
          if (!Object.is(item, initialValue)) {
            item = initialValue
            trigger()
          }

          ErrorCenter.on({
            group: FUNCTIONAL_ERROR_GROUP,
            code: 'computed-eternity',
            details: error
          })
        }
      }
    }

    /**
     * Starts evaluation on the first access and creates a persistent watcher in a DOM runtime.
     *
     * При первом обращении запускает вычисление и создаёт постоянный наблюдатель в DOM-среде.
     */
    const init = (): void => {
      if (
        !ready
        && isDomRuntime()
      ) {
        ready = true

        EffectScopeGlobal.run(() => {
          watchEffectAsync(reading)
        })
      }
    }

    return {
      /**
       * Starts lazy evaluation if needed and tracks access to the cached value.
       *
       * При необходимости запускает ленивое вычисление и отслеживает обращение к кешированному значению.
       * @returns currently cached value, which may be undefined until the first evaluation resolves / текущее кешированное значение, которое может быть undefined до завершения первого вычисления
       */
      get(): ComputedEternityValue<T, I> {
        init()
        track()

        return item as ComputedEternityValue<T, I>
      },
      /**
       * Reports an error that the value is read-only.
       *
       * Сообщает об ошибке, что значение доступно только для чтения.
       * @param value ignored assigned value / игнорируемое присваиваемое значение
       */
      set(value: ComputedEternityValue<T, I>): void {
        ErrorCenter.on({
          group: FUNCTIONAL_ERROR_GROUP,
          code: 'computed-eternity',
          message: 'computedEternity: value is read-only.',
          details: value
        })
      }
    }
  })
}
