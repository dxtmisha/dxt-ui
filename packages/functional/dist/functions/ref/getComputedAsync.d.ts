import { ComputedRef, Ref } from 'vue';
/**
 * Processes an asynchronous method for wrapping in computed.
 *
 * Обрабатывает асинхронный метод для обёртки в computed.
 * @param callback callback function/ функция обратного вызова
 * @param ignore values to be ignored/ значения для исключения из обработки
 */
export declare const getComputedAsync: <T, I = undefined>(callback: () => Promise<Ref<T | I> | T | I>, ignore?: I) => ComputedRef<T | undefined>;
