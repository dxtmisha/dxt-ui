// md5:fca3a068f678b9b6115812e99f67c513 true
import { type ApiData, type ApiFetch } from '@dxtmisha/functional-basic';
export interface UseApiDeleteSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
/** Wrapper over `useApiRequest` pre-configured for DELETE HTTP requests. @keywords api, delete, fetch, request, http */
export declare function useApiDelete<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiDeleteSetup<T, Request, Return>): {
    loading: import("vue").Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};