import { type ApiInstance, ApiMethodItem, type ApiData, type ApiFetch } from '@dxtmisha/functional-basic'
import { useApiRequest } from './useApiRequest'

import type { ApiOptions } from '../../types/apiTypes'
import type { RefOrNormal } from '../../types/refTypes'

/**
 * Use API put request.
 *
 * Использование API put запроса.
 * @param path Path to the API endpoint / Путь к endpoint API
 * @param action Action to perform after the request / Действие, выполняемое после запроса
 * @param transformation Transformation function / Функция трансформации
 * @param toData Extract 'data' field from response / Извлечь поле 'data' из ответа
 * @param options Additional request options / Дополнительные опции запроса
 * @param apiInstance Api instance / Экземпляр Api
 * @returns Object with loading state and send method / Объект с состоянием загрузки и методом отправки
 */
export function useApiPut<
  T,
  Request extends ApiFetch['request'] = ApiFetch['request'],
  Return extends ApiData<T> = ApiData<T>
>(
  path?: RefOrNormal<string | undefined>,
  action?: (data: Return | undefined) => Promise<void> | void,
  transformation?: (data: T) => Return,
  toData: boolean = true,
  options?: ApiOptions,
  apiInstance?: ApiInstance
) {
  return useApiRequest<T, Request, Return>(
    path,
    ApiMethodItem.put,
    action,
    transformation,
    toData,
    options,
    apiInstance
  )
}
