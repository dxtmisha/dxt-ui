// md5:f96dd2cbe49d356957f8f807cd64294b true
import { type ApiData, type ApiFetch } from '@dxtmisha/functional-basic';
export interface UseApiPostSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
/** Wrapper over `useApiRequest` pre-configured for HTTP POST requests. @keywords api, post, http request, fetch, network */
export declare function useApiPost<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiPostSetup<T, Request, Return>): UseApiRequestReturn<Return, Request>;