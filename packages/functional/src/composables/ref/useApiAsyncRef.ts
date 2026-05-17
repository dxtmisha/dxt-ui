import { Api, type ApiInstance, type ApiData, type ApiDataValidation, type ApiErrorStorageList } from '@dxtmisha/functional-basic'

import { useApiRef, type UseApiRef } from './useApiRef'

import type { RefOrNormal, RefType } from '../../types/refTypes'
import type { ApiOptions } from '../../types/apiTypes'

/**
 * Asynchronous reactive composable for API requests with built-in SSR support.
 * Wraps `useApiRef` and immediately calls `initSsr()` to ensure data is pre-fetched on the server side.
 * Use this composable ONLY if you need the request to be executed on the server side during SSR.
 * For all other cases, use `useApiRef`.
 *
 * Асинхронный реактивный composable для API запросов со встроенной поддержкой SSR.
 * Оборачивает `useApiRef` и сразу вызывает `initSsr()`, чтобы гарантировать предзагрузку данных на сервере.
 * Используйте этот composable ТОЛЬКО если вам необходимо, чтобы запрос был выполнен на стороне сервера
 * во время SSR. Во всех остальных случаях используйте обычный `useApiRef`.
 *
 * @example
 * ```typescript
 * import { Schema as S } from '@effect/schema'
 * import { useApiAsyncRef } from '@dxtmisha/functional'
 *
 * const userSchema = S.Struct({ id: S.Number, name: S.String })
 *
 * // Data will be pre-fetched on the server during SSR (onServerPrefetch)
 * const { data, loading, errorItem, isResponseContractValid } = useApiAsyncRef(
 *   '/users/1',
 *   { method: 'GET' },
 *   true, // reactivity
 *   undefined, // conditions
 *   undefined, // transformation
 *   (data) => { // validateResponseContract
 *     try {
 *       return { status: 'success', data: S.decodeUnknownSync(userSchema)(data) }
 *     } catch (e) {
 *       return { status: 'error', errors: e }
 *     }
 *   },
 *   [ // errorContract
 *     { status: 404, message: 'User not found' }
 *   ]
 * )
 * ```
 *
 * @param path path to request (can be a Ref or Getter) / путь к запросу (может быть Ref или Getter)
 * @param options data for the request (headers, method, etc.) / данные для запроса (заголовки, метод и т.д.)
 * @param reactivity should reactivity be enabled (automatically re-fetch on deps change) /
 * включить ли реактивность (автоматически повторять запрос при изменении зависимостей)
 * @param conditions conditions for executing the request (request will wait until true) /
 * условия выполнения запроса (запрос будет ждать пока не станет true)
 * @param transformation transforms the received response data / преобразовывает полученные данные ответа
 * @param validateResponseContract function to validate response data contract. Used to ensure that the API
 * response matches the expected structure. Highly recommended to use with `@effect/schema`.
 * It should return `ApiDataValidation` containing a `status` ('success' or 'error')
 * and the parsed data or errors. /
 * Функция для проверки контракта данных ответа. Используется для гарантии того, что ответ API соответствует
 * ожидаемой структуре. Настоятельно рекомендуется использовать с `@effect/schema`. Должна возвращать объект
 * `ApiDataValidation`, содержащий `status` ('success' или 'error') и распарсенные данные или ошибки.
 * @param errorContract array of expected error contracts for the request (`ApiErrorStorageList`).
 * Highly recommended to add if there is information about possible request errors. Allows you to predefine
 * possible errors (by code, status, or custom validation). If an error occurs matching one of these contracts,
 * it will be automatically processed and made available via the `errorItem` computed property. /
 * Массив контрактов ожидаемых ошибок для запроса (`ApiErrorStorageList`). Желательно добавлять, если есть
 * информация о возможных ошибках запроса. Позволяет заранее описать возможные ошибки (по коду, статусу или
 * кастомной валидации). Если возникает ошибка, совпадающая с одним из контрактов, она автоматически
 * обрабатывается и становится доступной через вычисляемое свойство `errorItem` для удобного отображения в UI.
 * @param unmounted whether to stop the request and clear data from cache when component is unmounted /
 * нужно ли останавливать запрос и удалять данные из кеша при размонтировании компонента
 * @param apiInstance Api instance (defaults to global Api instance) /
 * Экземпляр Api (по умолчанию используется глобальный экземпляр Api)
 */
export function useApiAsyncRef<R, T = R>(
  path?: RefOrNormal<string | undefined>,
  options?: ApiOptions,
  reactivity: boolean = true,
  conditions?: RefType<boolean>,
  transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>,
  validateResponseContract?: (data: T) => ApiDataValidation,
  errorContract?: ApiErrorStorageList,
  unmounted: boolean = true,
  apiInstance: ApiInstance = Api.getItem()
): UseApiRef<R> {
  const item = useApiRef<R, T>(
    path,
    options,
    reactivity,
    conditions,
    transformation,
    validateResponseContract,
    errorContract,
    unmounted,
    apiInstance
  )

  item.initSsr()

  return item
}
