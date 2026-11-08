// md5:254d16952fed031fc63452a20d198f9b true
import { type ApiInstance, type ApiData, type ApiDataValidation, type ApiErrorStorageList } from '@dxtmisha/functional-basic';
/**
 * Asynchronous reactive composable for API requests with built-in SSR pre-fetching.
 * @note Use only when requests must be executed server-side during SSR; otherwise use `useApiRef`.
 * @example
 * const { data, loading, errorItem } = useApiAsyncRef('/users/1', { method: 'GET' });
 * @keywords api, ssr, composable, async, fetch, request, reactive, useApiAsyncRef
 */
export declare function useApiAsyncRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;