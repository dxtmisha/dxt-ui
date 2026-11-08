// md5:1453bcd1bea065a5ccb52cfdd087dba3 true
import { type ComputedRef, type Ref } from 'vue';
import { type ApiInstance, type ApiData, type ApiDataValidation, type ApiErrorStorageList, ApiErrorItem } from '@dxtmisha/functional-basic';

/** Reactive API request state and controller interface. @keywords api, state, controller */
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
  /** Checks if the request is starting before data is loaded. @keywords isStarting, check, pending */
  isStarting(): boolean;
  /** Checks if the request is currently loading. @keywords isLoading, loading, status */
  isLoading(): boolean;
  /** Checks if data is currently being read. @keywords isReading, reading, active */
  isReading(): boolean;
  /** Retrieves the current response item data. @keywords getItem, data, response */
  getItem(): ApiData<R> | undefined;
  /** Manually initializes and executes the API request. @keywords init, execute, start */
  init(): void;
  /** Initializes the API request for SSR execution. @keywords initSsr, ssr, server */
  initSsr(): void;
  /** Resets request state and data to defaults. @keywords reset, clear, default */
  reset(): Promise<void>;
  /** Stops the active request and its reactive listeners. @keywords stop, cancel, halt */
  stop(): void;
  /** Aborts the active network request. @keywords abort, cancel, network */
  abort(): void;
}

/**
 * Reactive composable for managing API requests with SSR support, caching, validation, and error tracking.
 * @example
 * import { Schema as S } from '@effect/schema'
 * import { useApiRef } from '@dxtmisha/functional'
 *
 * const userSchema = S.Struct({ id: S.Number, name: S.String })
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
 * @keywords api, fetch, reactive, composable, vue, request
 */
export declare function useApiRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;

/** Registers a shared reactive source that triggers request reloads upon modification. @keywords watch, source, reload, global */
export declare const setApiRefGlobalWatchSource: (source: RefType<unknown>) => void;

/** Compatibility alias for registering the shared request reload source. @note Deprecated: use setApiRefGlobalWatchSource. @keywords conditions, global, reload */
export declare const setApiRefGlobalConditions: (source: RefType<unknown>) => void;