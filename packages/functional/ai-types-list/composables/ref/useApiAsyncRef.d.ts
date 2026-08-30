// md5:b745c8cd35a5178d52a7904f02eb9287 true
import { type ApiInstance, type ApiData, type ApiDataValidation, type ApiErrorStorageList } from '@dxtmisha/functional-basic';
/**
 * Asynchronous reactive composable for API requests with built-in SSR pre-fetching support.
 * @keywords api, composable, ssr, prefetch, useApiAsyncRef, useApiRef, reactive, fetch
 * @example
 * ```typescript
 * const { data, loading, errorItem } = useApiAsyncRef('/users/1', { method: 'GET' });
 * ```
 * @param path Request path (string, Ref, or Getter)
 * @param options Request options and headers
 * @param reactivity Auto-refetch when reactive dependencies change
 * @param conditions Execution conditions (waits until true)
 * @param transformation Transforms received response data
 * @param validateResponseContract Validates response data contract
 * @param errorContract Predefined expected error contracts
 * @param unmounted Aborts request and clears cache when component unmounts
 * @param apiInstance Custom Api instance
 */
export declare function useApiAsyncRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;