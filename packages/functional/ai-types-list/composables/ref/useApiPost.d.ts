// md5:35784dec00b2cc82b8ed9d7738c69440 true
import { ApiData, ApiFetch } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';

/**
 * Setup interface for API POST request.
 * @keywords api, post, setup, request
 */
export interface UseApiPostSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}

/**
 * Executes a POST request using the API.
 * @keywords api, post, request, send
 */
export declare function useApiPost<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiPostSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};