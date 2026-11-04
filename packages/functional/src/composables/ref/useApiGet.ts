import { ApiMethodItem, type ApiData, type ApiFetch } from '@dxtmisha/functional-basic'
import { useApiRequest, type UseApiRequestReturn, type UseApiRequestSetup } from './useApiRequest'

/** Setup interface for API GET request / Интерфейс настроек для GET запроса API */
export interface UseApiGetSetup<
  T,
  Request extends ApiFetch['request'] = ApiFetch['request'],
  Return extends ApiData<T> = ApiData<T>
> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {}

/**
 * Use API get request.
 * This is a convenient wrapper over `useApiRequest` that pre-fills the GET method.
 *
 * Использование API get запроса.
 * Это удобная обертка над `useApiRequest`, которая предустанавливает метод GET.
 * @template T raw response data type / тип исходных данных ответа
 * @template Request request payload type / тип отправляемых данных запроса
 * @template Return transformed response data type / тип возвращаемых данных ответа
 * @param setup Configured parameters as a single object / Настроенные параметры в виде единого объекта
 * @returns Object with loading state and send method / Объект с состоянием загрузки и методом отправки
 */
export function useApiGet<
  T,
  Request extends ApiFetch['request'] = ApiFetch['request'],
  Return extends ApiData<T> = ApiData<T>
>(setup: UseApiGetSetup<T, Request, Return>): UseApiRequestReturn<Return, Request> {
  return useApiRequest<T, Request, Return>({
    ...setup,
    method: ApiMethodItem.get
  })
}
