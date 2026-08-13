// md5:5338c114fde33fc9fa0201c3eb3da3d6 true
import { ApiData, ApiFetch } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';

export interface UseApiDeleteSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}

/**
 * Executes a DELETE request via the API.
 * @keywords api delete request setup composable
 */
export declare function useApiDelete<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiDeleteSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};