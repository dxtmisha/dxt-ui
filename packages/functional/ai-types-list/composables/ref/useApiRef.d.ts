// md5:b70b0e6cc92468f48a3f1dd62b58e00b true
import { type ComputedRef, type Ref } from 'vue';
import { type ApiInstance, type ApiData, type ApiDataValidation, type ApiErrorStorageList, ApiErrorItem, type ApiOptions, type RefOrNormal, type RefType } from '@dxtmisha/functional-basic';

export interface UseApiRef<R> {
    data: ComputedRef<ApiData<R> | undefined>;
    item: Ref<ApiData<R> | undefined>;
    errorItem: ComputedRef<ApiErrorItem | undefined>;
    isResponseContractValid: ComputedRef<boolean>;
    responseValidationResult: ComputedRef<ApiDataValidation | undefined>;
    length: ComputedRef<number>;
    starting: ComputedRef<boolean>;
    loading: Ref<boolean>;
    reading: Ref<boolean>;
    /** Checks if the request is starting @keywords starting, status */
    isStarting(): boolean;
    /** Checks if the request is currently loading @keywords loading, status */
    isLoading(): boolean;
    /** Checks if the request is currently reading @keywords reading, status */
    isReading(): boolean;
    /** Gets current item data @keywords data, get */
    getItem(): ApiData<R> | undefined;
    /** Performs manual request initialization @keywords init, start */
    init(): void;
    /** Performs SSR request initialization @keywords ssr, init */
    initSsr(): void;
    /** Resets request state and data @keywords reset */
    reset(): Promise<void>;
    /** Stops the active request @keywords stop */
    stop(): void;
    /** Aborts the active request @keywords abort, cancel */
    abort(): void;
}

/**
 * Main reactive composable for working with API requests in Vue, handling reactivity, SSR, caching, validation, and error management.
 * @keywords api, fetch, request, composable, vue, query
 * @example
 * ```typescript
 * const { data, loading, errorItem } = useApiRef('/users/1', { method: 'GET' });
 * ```
 * @param path Request endpoint path, Ref, or getter
 * @param options Request options (headers, method, body, etc.)
 * @param reactivity Automatically re-fetch when reactive dependencies change
 * @param conditions Execution conditions (request waits until evaluated to true)
 * @param transformation Transforms received response data
 * @param validateResponseContract Validates response data contract
 * @param errorContract Predefined error contracts for error handling
 * @param unmounted Stops request and clears cached data when component unmounts
 * @param apiInstance Custom Api instance
 */
export declare function useApiRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;

/**
 * Defines global conditions for executing API requests.
 * @keywords api, global, conditions
 * @param conditions Conditions evaluated before request execution
 */
export declare const setApiRefGlobalConditions: (conditions: RefType<any>) => void;