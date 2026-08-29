// md5:b70b0e6cc92468f48a3f1dd62b58e00b true
import { type ComputedRef, type Ref } from 'vue';
import { type ApiInstance, type ApiData, type ApiDataValidation, type ApiErrorStorageList, ApiErrorItem } from '@dxtmisha/functional-basic';

/** Reactive API reference controller interface. @keywords api, state, controller */
export interface UseApiRef<R> {
    /** Reactive data */
    data: ComputedRef<ApiData<R> | undefined>;
    /** Item reference */
    item: Ref<ApiData<R> | undefined>;
    /** Error item */
    errorItem: ComputedRef<ApiErrorItem | undefined>;
    /** Response contract validation status */
    isResponseContractValid: ComputedRef<boolean>;
    /** Result of response validation */
    responseValidationResult: ComputedRef<ApiDataValidation | undefined>;
    /** Length of the list */
    length: ComputedRef<number>;
    /** Request starting state indicator */
    starting: ComputedRef<boolean>;
    /** Request loading state indicator */
    loading: Ref<boolean>;
    /** Active reading state indicator */
    reading: Ref<boolean>;
    /** Checks if request is starting. @keywords api, starting, status */
    isStarting(): boolean;
    /** Checks if request is loading. @keywords api, loading, status */
    isLoading(): boolean;
    /** Checks if request is actively reading. @keywords api, reading, status */
    isReading(): boolean;
    /** Gets current response item data. @keywords api, get, item, data */
    getItem(): ApiData<R> | undefined;
    /** Performs manual request initialization. @keywords api, init, manual */
    init(): void;
    /** Performs SSR request initialization. @keywords api, ssr, init */
    initSsr(): void;
    /** Resets request state and data. @keywords api, reset */
    reset(): Promise<void>;
    /** Stops the active request. @keywords api, stop */
    stop(): void;
    /** Aborts the active request. @keywords api, abort */
    abort(): void;
}

/**
 * Main reactive composable for working with API requests in Vue.
 * Automatically handles SSR, reactivity, caching, error storage, data validation, and transformation.
 * @example
 * ```typescript
 * const { data, loading, errorItem, isResponseContractValid } = useApiRef(
 *   '/users/1',
 *   { method: 'GET' },
 *   true
 * );
 * ```
 * @keywords api, request, fetch, composable, ssr, cache, vue
 */
export declare function useApiRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;

/** Defines global execution conditions for API requests. @keywords api, conditions, global */
export declare const setApiRefGlobalConditions: (conditions: RefType<any>) => void;