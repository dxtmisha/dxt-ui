import {
  type WatchEffectOptions,
  type WatchStopHandle,
  watchEffect
} from 'vue'
import { isDomRuntime } from '@dxtmisha/functional-basic'

/**
 * Callback function for watchEffectAsync providing an isCurrent guard and an onCleanup registration function. /
 * Функция обратного вызова для watchEffectAsync, предоставляющая проверку актуальности isCurrent и регистрацию onCleanup.
 */
export type WatchEffectAsyncCallback = (
  isCurrent: () => boolean,
  onCleanup: (cleanupFunction: () => void) => void
) => Promise<void>

/**
 * Runs an effect function immediately and re-runs it reactively when dependencies change.
 * Enhances Vue's watchEffect by passing an isCurrent helper that tracks whether the current
 * evaluation is still active or invalidated by a newer run or watcher cleanup.
 * In SSR environments, the effect execution is skipped to prevent asynchronous leaks.
 *
 * Немедленно запускает функцию эффекта и реактивно перезапускает её при изменении зависимостей.
 * Расширяет watchEffect из Vue, передавая функцию isCurrent, которая отслеживает, актуально ли
 * текущее вычисление или оно было отменено новым запуском или очисткой наблюдателя.
 * В среде SSR выполнение эффекта пропускается для предотвращения асинхронных утечек.
 * @param effect function to execute, receiving an isCurrent check and an onCleanup registrar /
 * функция для выполнения, принимающая проверку isCurrent и регистратор onCleanup
 * @param options optional watcher configuration options / опциональные параметры конфигурации наблюдателя
 * @returns handle to stop the reactive effect / дескриптор для остановки реактивного эффекта
 */
export function watchEffectAsync(
  effect: WatchEffectAsyncCallback,
  options?: WatchEffectOptions
): WatchStopHandle {
  if (isDomRuntime()) {
    return watchEffect((onCleanup) => {
      /** Whether this evaluation is still current / Актуально ли это вычисление */
      let current = true

      onCleanup(() => {
        current = false
      })

      /**
       * Checks whether this evaluation is still current.
       *
       * Проверяет, актуально ли ещё это вычисление.
       * @returns true if current, false if cleaned up / true, если актуально, false, если очищено
       */
      const isCurrent = (): boolean => current

      effect(isCurrent, onCleanup)
    }, options)
  }

  return () => {}
}
