// md5:1b0883c7a42866e76547e794999e514f true
import { type ApiInstance, ApiMethodItem, type ApiData, type ApiFetch, type ApiErrorStorageList, type ApiDataValidation } from '@dxtmisha/functional-basic';

/** Configuration options for setting up an API request. @keywords api, request, setup, config */
export interface UseApiRequestSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> {
    /** Endpoint path or reactive reference. */
    path?: RefOrNormal<string | undefined>;
    /** HTTP method used for the request (defaults to POST). */
    method?: ApiMethodItem;
    /** Callback executed after receiving and processing response data regardless of outcome. */
    action?: (data: Return | undefined) => Promise<void> | void;
    /** Callback executed on successful response. */
    actionSuccess?: (data: Return) => Promise<void> | void;
    /** Callback executed on response error or validation failure. */
    actionError?: (data: Return | undefined, error?: unknown) => Promise<void> | void;
    /** Transforms raw response data before returning. */
    transformation?: (data: T) => Return;
    /** Validates request payload contract structure. */
    validateRequestContract?: (data: Request) => ApiDataValidation & Return;
    /** Validates response data contract structure. */
    validateResponseContract?: (data: T) => ApiDataValidation & Return;
    /** Expected error contracts list for centralized handling. */
    errorContract?: ApiErrorStorageList;
    /** Extracts nested data field from response object when true (defaults to true). */
    toData?: boolean;
    /** Additional request options such as headers or query parameters. */
    options?: ApiOptions;
    /** Custom API instance to execute the request on. */
    apiInstance?: ApiInstance;
}

/** Composable for managing API requests, loading state, and response handling. @keywords api, request, fetch, composable, loading */
export declare function useApiRequest<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>({ path, method, action, actionSuccess, actionError, transformation, validateRequestContract, validateResponseContract, errorContract, toData, options, apiInstance }: UseApiRequestSetup<T, Request, Return>): {
    /** Whether any send call is active. */
    loading: import("vue").Ref<boolean, boolean>;
    /** Sends API request and awaits callbacks while tracking active loading state. @keywords send, execute, dispatch */
    send(request?: Request): Promise<Return | undefined>;
};