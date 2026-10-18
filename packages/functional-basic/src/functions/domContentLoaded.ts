import { executePromise } from './executePromise'
import { isDomRuntime } from './isDomRuntime'

/**
 * Executes a callback function when the DOMContentLoaded event is fired.
 * If the DOM is already loaded (readyState is 'interactive' or 'complete') or if executing in a non-DOM environment,
 * the callback is executed immediately. Can also be called without arguments to simply await DOM readiness.
 *
 * Выполняет функцию обратного вызова при наступлении события DOMContentLoaded.
 * Если DOM уже загружен (readyState равен 'interactive' или 'complete') или код выполняется вне браузера,
 * функция обратного вызова выполняется немедленно. Может вызываться без аргументов для простого ожидания готовности DOM.
 *
 * @param callback optional function to execute when DOM is loaded / опциональная функция для выполнения при загрузке DOM
 * @param isServer whether to execute the callback in non-DOM/SSR environments (defaults to true) / выполнять ли функцию обратного вызова в среде без DOM/SSR (по умолчанию true)
 * @returns promise resolving to the callback result / промис, разрешающийся результатом выполнения функции
 *
 * @remarks
 * In non-DOM environments (SSR), execution can be disabled by passing `isServer: false`.
 *
 * В среде без DOM (SSR) выполнение можно отключить, передав `isServer: false`.
 */
export function domContentLoaded<T = void>(
  callback?: () => T | Promise<T>,
  isServer: boolean = true
): Promise<T> {
  if (!isDomRuntime()) {
    return executePromise(
      isServer ? callback : undefined
    ) as Promise<T>
  }

  if (document.readyState !== 'loading') {
    return executePromise(callback) as Promise<T>
  }

  return new Promise<T>((resolve, reject) => {
    document.addEventListener(
      'DOMContentLoaded',
      () => {
        (executePromise(callback) as Promise<T>).then(resolve, reject)
      },
      { once: true }
    )
  })
}
