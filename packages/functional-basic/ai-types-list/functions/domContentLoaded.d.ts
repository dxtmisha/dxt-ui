// md5:a9f486c8239ae40ed5e042c2b4bd536c
/**
 * Executes a callback function when the DOMContentLoaded event is fired.
 * If the DOM is already loaded (readyState is 'interactive' or 'complete') or if executing in a non-DOM environment,
 * the callback is executed immediately.
 *
 * Выполняет функцию обратного вызова при наступлении события DOMContentLoaded.
 * Если DOM уже загружен (readyState равен 'interactive' или 'complete') или код выполняется вне браузера,
 * функция обратного вызова выполняется немедленно.
 *
 * @param callback function to execute when DOM is loaded / функция для выполнения при загрузке DOM
 * @returns promise resolving to the callback result / промис, разрешающийся результатом выполнения функции
 */
export declare function domContentLoaded<T = void>(callback: () => T | Promise<T>): Promise<T>;
