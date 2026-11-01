// md5:942f932d1de7cee9bfaf465cf33a55df
import { type ComputedRef, type DebuggerOptions } from 'vue';
/**
 * Creates a computed property that can handle asynchronous getters.
 * Only the latest evaluation can update the result. Evaluation starts on first access
 * and stops with the effect scope in which the property was created.
 * Current evaluation errors clear the result and are reported through ErrorCenter.
 * Reactive dependencies must be accessed before the first `await` statement.
 * By default, returning `undefined` from the getter preserves previous data unless a custom `ignore` is provided.
 *
 * Создаёт вычисляемое свойство, которое может обрабатывать асинхронные геттеры.
 * Только актуальное вычисление может обновить результат. Вычисление начинается при первом чтении
 * и прекращается вместе с областью эффектов, в которой было создано свойство.
 * Ошибки актуального вычисления очищают результат и передаются в ErrorCenter.
 * Реактивные зависимости должны быть прочитаны до первого выражения `await`.
 * По умолчанию возврат `undefined` из геттера сохраняет предыдущие данные, если не задано иное значение `ignore`.
 * @param getter Asynchronous function, synchronous function, or direct value to compute the result /
 * Асинхронная функция, синхронная функция или прямое значение для вычисления результата
 * @param initialState initial value of result / начальное значение результата
 * @param ignore value to ignore (defaults to undefined, preserving previous data) /
 * значение для исключения (по умолчанию undefined, сохраняя предыдущие данные)
 * @param debugOptions Used for debugging reactive computations. Supported by Vue.js library /
 * Используется для отладки реактивных вычислений. Поддерживается библиотекой Vue.js
 * @returns read-only reference to the latest result / ссылка только для чтения на актуальный результат
 */
export declare function computedAsync<R, I = R>(getter: (() => Promise<R>) | (() => R) | R, initialState?: (() => I) | I, ignore?: R, debugOptions?: DebuggerOptions): ComputedRef<R | I | undefined>;
