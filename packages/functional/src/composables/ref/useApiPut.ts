import { type ApiInstance, ApiMethodItem, type ApiData, type ApiFetch, type ApiErrorStorageList } from '@dxtmisha/functional-basic'
import { useApiRequest } from './useApiRequest'

import type { ApiOptions } from '../../types/apiTypes'
import type { RefOrNormal } from '../../types/refTypes'

/**
 * Use API put request.
 * This is a convenient wrapper over `useApiRequest` that pre-fills the PUT method.
 *
 * Использование API put запроса.
 * Это удобная обертка над `useApiRequest`, которая предустанавливает метод PUT.
 * @param path Path to the API endpoint / Путь к endpoint API
 * @param action Action to perform after the request / Действие, выполняемое после запроса
 * @param transformation Transformation function / Функция трансформации
 * @param errorContract array of expected error contracts for the request (`ApiErrorStorageList`).
 * Highly recommended to add if there is information about possible request errors. Allows you to predefine
 * possible errors (by code, status, or custom validation) which will be centrally processed by the application. /
 * Массив контрактов ожидаемых ошибок для запроса (`ApiErrorStorageList`). Желательно добавлять, если есть
 * информация о возможных ошибках запроса. Позволяет заранее описать возможные ошибки (по коду, статусу или
 * кастомной валидации) для централизованной обработки в приложении.
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
  errorContract?: ApiErrorStorageList,
  toData: boolean = true,
  options?: ApiOptions,
  apiInstance?: ApiInstance
) {
  return useApiRequest<T, Request, Return>(
    path,
    ApiMethodItem.put,
    action,
    transformation,
    errorContract,
    toData,
    options,
    apiInstance
  )
}
