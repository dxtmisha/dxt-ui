// md5:a62711e7b7827f3edae13e0ecefb3f24 true
import { type ApiData, type ApiFetch } from '@dxtmisha/functional-basic';

export interface UseApiGetSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {}

/** Wrapper over useApiRequest with pre-configured GET method. @keywords api, get, fetch, request, http */
export declare function useApiGet<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiGetSetup<T, Request, Return>): {
    loading: import("vue").Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};