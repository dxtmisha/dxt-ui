import { ApiMethodItem, type ApiData, type ApiFetch } from '@dxtmisha/functional-basic'
import { useApiRequest, type UseApiRequestSetup } from './useApiRequest'

/**
 * Setup interface for API POST request.
 *
 * Интерфейс настроек для POST запроса API.
 */
export interface UseApiPostSetup<
  T,
  Request extends ApiFetch['request'] = ApiFetch['request'],
  Return extends ApiData<T> = ApiData<T>
> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {}

/**
 * Use API post request.
 * This is a convenient wrapper over `useApiRequest` that pre-fills the POST method.
 *
 * Использование API post запроса.
 * Это удобная обертка над `useApiRequest`, которая предустанавливает метод POST.
 * @param setup Configured parameters as a single object / Настроенные параметры в виде единого объекта
 * @returns Object with loading state and send method / Объект с состоянием загрузки и методом отправки
 */
export function useApiPost<
  T,
  Request extends ApiFetch['request'] = ApiFetch['request'],
  Return extends ApiData<T> = ApiData<T>
>(setup: UseApiPostSetup<T, Request, Return>) {
  return useApiRequest<T, Request, Return>({
    ...setup,
    method: ApiMethodItem.post
  })
}
