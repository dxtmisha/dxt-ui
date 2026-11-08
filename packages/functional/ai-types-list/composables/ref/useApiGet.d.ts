// md5:7ef6ac1b3b9c76a062a07e1aebc24075 true
import { type ApiData, type ApiFetch } from '@dxtmisha/functional-basic';
export interface UseApiGetSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {}
/** Executes an API GET request wrapping useApiRequest with a preconfigured GET method. @keywords api, get, http, request, fetch */
export declare function useApiGet<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiGetSetup<T, Request, Return>): UseApiRequestReturn<Return, Request>;