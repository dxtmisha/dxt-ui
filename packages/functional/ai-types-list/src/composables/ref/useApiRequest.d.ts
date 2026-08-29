// md5:b9d0a1b9a2bc5566515e7a9db61d060f true
import { type ApiInstance, ApiMethodItem, type ApiData, type ApiFetch, type ApiErrorStorageList, type ApiDataValidation } from '@dxtmisha/functional-basic';

/** Configuration options for setting up an API request. @keywords api, request, setup, config */
export interface UseApiRequestSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> {
    /** API endpoint path as a string or reactive Ref. @keywords path, endpoint, ref */
    path?: RefOrNormal<string | undefined>;
    /** HTTP request method. Defaults to POST. @keywords method, http */
    method?: ApiMethodItem;
    /** Success callback executed after request completion. @keywords action, callback, handler */
    action?: (data: Return | undefined) => Promise<void> | void;
    /** Transforms raw response data before returning. @keywords transform, mapper */
    transformation?: (data: T) => Return;
    /** Validates request payload structure against a contract schema. @keywords validation, request, schema */
    validateRequestContract?: (data: Request) => ApiDataValidation & Return;
    /** Validates response data structure against a contract schema. @keywords validation, response, schema */
    validateResponseContract?: (data: T) => ApiDataValidation & Return;
    /** Predefined error contracts for centralized request error handling. @keywords error, contract */
    errorContract?: ApiErrorStorageList;
    /** Extracts nested data field from response envelope. Defaults to true. @keywords unwrap, data */
    toData?: boolean;
    /** Additional request configuration options. @keywords options, headers, query */
    options?: ApiOptions;
    /** Custom API instance to execute request. Defaults to global instance. @keywords api, instance */
    apiInstance?: ApiInstance;
}

/** Composable for managing API requests with reactive loading state. @keywords api, request, fetch, composable */
export declare function useApiRequest<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>({ path, method, action, transformation, validateRequestContract, validateResponseContract, errorContract, toData, options, apiInstance }: UseApiRequestSetup<T, Request, Return>): {
    /** Reactive loading state. @keywords loading, state, ref */
    loading: import("vue").Ref<boolean, boolean>;
    /** Executes the API request. @keywords send, execute, fetch */
    send(request?: Request): Promise<Return | undefined>;
};