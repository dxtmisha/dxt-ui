// md5:910e0d75c99519e8e3f8d16fca6c69cb true
import { type ComputedRef, type Ref } from 'vue';
import { type ApiInstance, type ApiData, type ApiDataValidation, type ApiErrorStorageList, ApiErrorItem, type ApiOptions, type RefOrNormal, type RefType } from '@dxtmisha/functional-basic';
/** Return type contract for the useApiRef composable. @keywords api, ref, composable, response */
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
  /** Checks if the request is starting before data has arrived. @keywords request, starting, status */
  isStarting(): boolean;
  /** Checks if the request is currently loading. @keywords loading, status, active */
  isLoading(): boolean;
  /** Checks if the request is actively reading data. @keywords reading, fetching, status */
  isReading(): boolean;
  /** Returns the current item data. @keywords item, data, getter */
  getItem(): ApiData<R> | undefined;
  /** Manually initializes the request execution. @keywords init, execute, start */
  init(): void;
  /** Initializes the request for SSR execution. @keywords ssr, init, server */
  initSsr(): void;
  /** Resets state to initial values. @keywords reset, clear */
  reset(): Promise<void>;
  /** Stops the request. @keywords stop, cancel */
  stop(): void;
  /** Aborts the pending request. @keywords abort, cancel */
  abort(): void;
}
/**
 * Reactive composable for API requests with SSR, caching, validation, and error management.
 * @example
 * 
 * import { Schema as S } from '@effect/schema'
 * import { useApiRef } from '@dxtmisha/functional'
 *
 * const userSchema = S.Struct({ id: S.Number, name: S.String })
 *
 * const { data, loading, errorItem, isResponseContractValid } = useApiRef(
 *   '/users/1',
 *   { method: 'GET' },
 *   true,
 *   undefined,
 *   (data) => ({ ...data, isTransformed: true }),
 *   (data) => {
 *     try {
 *       return { status: 'success', data: S.decodeUnknownSync(userSchema)(data) }
 *     } catch (e) {
 *       return { status: 'error', errors: e }
 *     }
 *   },
 *   [{ status: 404, message: 'User not found' }]
 * )
 * 
 * @keywords api, request, composable, vue, fetch, ssr, cache, schema
 */
export declare function useApiRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;
/** Registers a shared watch source to trigger request reloads across instances. @keywords api, reload, watch, trigger, global */
export declare const setApiRefGlobalWatchSource: (source: RefType<unknown>) => void;
/** Legacy alias for setApiRefGlobalWatchSource. @warning Deprecated: Use setApiRefGlobalWatchSource instead. @keywords api, reload, watch, legacy */
export declare const setApiRefGlobalConditions: (source: RefType<unknown>) => void;