/**
 * Returns the execution result of an asynchronous function.
 *
 * Возвращает выполнение асинхронной функции.
 * @param callback function or any value/ функция или любое значение
 */
export declare function executePromise<T>(callback: (() => Promise<T>) | (() => T) | T): Promise<T>;
