// md5:7c78dcba5e8b86f350050c869c3b55aa
import { type WatchEffectOptions, type WatchStopHandle } from 'vue';
/**
 * Callback function for watchEffectAsync providing an isCurrent guard and an onCleanup registration function. /
 * Функция обратного вызова для watchEffectAsync, предоставляющая проверку актуальности isCurrent и регистрацию onCleanup.
 */
export type WatchEffectAsyncCallback = (isCurrent: () => boolean, onCleanup: (cleanupFunction: () => void) => void) => Promise<void>;
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
export declare function watchEffectAsync(effect: WatchEffectAsyncCallback, options?: WatchEffectOptions): WatchStopHandle;
