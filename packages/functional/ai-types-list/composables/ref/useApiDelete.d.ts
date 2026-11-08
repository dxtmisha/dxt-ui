// md5:4d59c9b5a127a9b85c8c394b45832276 true
import { type ApiData, type ApiFetch } from '@dxtmisha/functional-basic';
export interface UseApiDeleteSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
/** Wrapper around `useApiRequest` configured for HTTP DELETE requests. @keywords api, delete, request, fetch, http */
export declare function useApiDelete<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiDeleteSetup<T, Request, Return>): UseApiRequestReturn<Return, Request>;