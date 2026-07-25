import { executePromise } from './executePromise'
import { isDomRuntime } from './isDomRuntime'

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
export async function domContentLoaded<T = void>(
  callback: () => T | Promise<T>
): Promise<T> {
  if (
    !isDomRuntime()
    || document.readyState !== 'loading'
  ) {
    return executePromise(callback)
  }

  return new Promise<T>((resolve, reject) => {
    document.addEventListener(
      'DOMContentLoaded',
      () => {
        executePromise(callback).then(resolve, reject)
      },
      { once: true }
    )
  })
}
