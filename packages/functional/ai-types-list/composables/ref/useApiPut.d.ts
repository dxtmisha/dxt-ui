// md5:b640f42997a3cee3ce7317bbd6208114 true
import { type ApiData, type ApiFetch } from '@dxtmisha/functional-basic';
export interface UseApiPutSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
/** Convenient wrapper over useApiRequest preconfigured for HTTP PUT requests. @keywords useApiPut, api, put, request, fetch */
export declare function useApiPut<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiPutSetup<T, Request, Return>): UseApiRequestReturn<Return, Request>;