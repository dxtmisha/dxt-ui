// md5:b41f9711707e549468f43cfbe1338388 true
import { type ApiData, type ApiFetch } from '@dxtmisha/functional-basic';

export interface UseApiPutSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {}

/** Setup and execute API PUT request with reactive loading state. @keywords api, put, request, fetch, http, vue */
export declare function useApiPut<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiPutSetup<T, Request, Return>): {
    loading: import("vue").Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};