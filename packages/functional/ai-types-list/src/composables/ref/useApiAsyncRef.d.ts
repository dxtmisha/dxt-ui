// md5:b745c8cd35a5178d52a7904f02eb9287 true
import { type ApiInstance, type ApiData, type ApiDataValidation, type ApiErrorStorageList } from '@dxtmisha/functional-basic';

/**
 * Asynchronous reactive composable for API requests with built-in SSR prefetching via `initSsr()`.
 * @example
 * const { data, loading, errorItem } = useApiAsyncRef('/users/1', { method: 'GET' });
 * @param path Request URL path, Ref, or getter.
 * @param options Request options such as headers and HTTP method.
 * @param reactivity Enable auto-refetch when reactive dependencies change.
 * @param conditions Condition ref that must resolve to true before request execution.
 * @param transformation Transforms raw response data.
 * @param validateResponseContract Validates response schema contract.
 * @param errorContract List of expected error structures for automated handling.
 * @param unmounted Clears cache and cancels pending request on component unmount.
 * @param apiInstance Custom API client instance (defaults to global instance).
 * @keywords useApiAsyncRef, ssr api, reactive fetch, composable, prefetch, api request
 */
export declare function useApiAsyncRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;