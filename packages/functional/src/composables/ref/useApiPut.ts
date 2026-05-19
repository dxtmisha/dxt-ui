import { ApiMethodItem, type ApiData, type ApiFetch } from '@dxtmisha/functional-basic'
import { useApiRequest, type UseApiRequestSetup } from './useApiRequest'

/**
 * Setup interface for API PUT request.
 *
 * Интерфейс настроек для PUT запроса API.
 */
export interface UseApiPutSetup<
  T,
  Request extends ApiFetch['request'] = ApiFetch['request'],
  Return extends ApiData<T> = ApiData<T>
> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {}

/**
 * Use API put request.
 * This is a convenient wrapper over `useApiRequest` that pre-fills the PUT method.
 *
 * Использование API put запроса.
 * Это удобная обертка над `useApiRequest`, которая предустанавливает метод PUT.
 * @param setup Configured parameters as a single object / Настроенные параметры в виде единого объекта
 * @returns Object with loading state and send method / Объект с состоянием загрузки и методом отправки
 */
export function useApiPut<
  T,
  Request extends ApiFetch['request'] = ApiFetch['request'],
  Return extends ApiData<T> = ApiData<T>
>(setup: UseApiPutSetup<T, Request, Return>) {
  return useApiRequest<T, Request, Return>({
    ...setup,
    method: ApiMethodItem.put
  })
}
