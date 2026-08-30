// md5:948957388c1177778120a7ecb3f713a3 true
import { type ApiData, type ApiFetch } from '@dxtmisha/functional-basic';
export interface UseApiPostSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
/** Composable wrapper over useApiRequest pre-configured for HTTP POST requests. @keywords api, post, http, fetch, request */
export declare function useApiPost<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiPostSetup<T, Request, Return>): {
    loading: import("vue").Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};