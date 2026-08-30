// md5:b9d0a1b9a2bc5566515e7a9db61d060f true
import { type ApiInstance, ApiMethodItem, type ApiData, type ApiFetch, type ApiErrorStorageList, type ApiDataValidation } from '@dxtmisha/functional-basic';

/** API request setup configuration options. @keywords api, request, setup, options */
export interface UseApiRequestSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> {
    /** Endpoint path or reactive ref. */
    path?: RefOrNormal<string | undefined>;
    /** HTTP method. Defaults to POST. */
    method?: ApiMethodItem;
    /** Callback executed upon successful request completion. */
    action?: (data: Return | undefined) => Promise<void> | void;
    /** Transforms raw response data before returning. */
    transformation?: (data: T) => Return;
    /** Validates request payload contract. */
    validateRequestContract?: (data: Request) => ApiDataValidation & Return;
    /** Validates response data contract. */
    validateResponseContract?: (data: T) => ApiDataValidation & Return;
    /** Expected error contracts list for centralized handling. */
    errorContract?: ApiErrorStorageList;
    /** Extracts nested 'data' field from response envelope. Defaults to true. */
    toData?: boolean;
    /** Additional request options. */
    options?: ApiOptions;
    /** Custom Api instance. Defaults to global singleton. */
    apiInstance?: ApiInstance;
}

/** Composable for managing and executing API requests with loading state. @keywords api, request, fetch, composable */
export declare function useApiRequest<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>({ path, method, action, transformation, validateRequestContract, validateResponseContract, errorContract, toData, options, apiInstance }: UseApiRequestSetup<T, Request, Return>): {
    /** Reactive loading state indicator. */
    loading: import("vue").Ref<boolean, boolean>;
    /** Executes the API request. @keywords send, execute, call */
    send(request?: Request): Promise<Return | undefined>;
};