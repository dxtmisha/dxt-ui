import { Api, type ApiInstance, type ApiData, type ApiDataValidation } from '@dxtmisha/functional-basic'

import { useApiRef, type UseApiRef } from './useApiRef'

import type { RefOrNormal, RefType } from '../../types/refTypes'
import type { ApiOptions } from '../../types/apiTypes'

/**
 * Executes a request and immediately initializes it asynchronously.
 *
 * Выполняет запрос и сразу инициализирует его асинхронно.
 * @param path path to request / путь к запросу
 * @param options data for the request / данные для запроса
 * @param reactivity should reactivity be enabled / включить ли reactivity
 * @param conditions conditions for executing the request / условия выполнения запроса
 * @param transformation transforms the received request / преобразовывает полученный запрос
 * @param validateResponseContract function to validate response data contract / функция для проверки контракта данных ответа
 * @param unmounted delete data from the cache / удалить ли данные из кеша
 * @param apiInstance Api instance / Экземпляр Api
 */
export function useApiAsyncRef<R, T = R>(
  path?: RefOrNormal<string | undefined>,
  options?: ApiOptions,
  reactivity: boolean = true,
  conditions?: RefType<boolean>,
  transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>,
  validateResponseContract?: (data: T) => ApiDataValidation,
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
    unmounted,
    apiInstance
  )

  item.initSsr()

  return item
}
