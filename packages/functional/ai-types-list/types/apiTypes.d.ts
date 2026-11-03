// md5:9f2c52a560dd66de11c1d18ac244a882 true
import type { ApiData, ApiDataValidation, ApiDefaultValue, ApiErrorStorageList, ApiFetch, ApiMethodItem, SearchColumns, SearchItem, SearchOptions } from '@dxtmisha/functional-basic';
import type { Ref } from 'vue';

export type ApiOptions = ApiMethodItem | RefOrNormal<ApiFetch>;
export type ApiManagementValue = ApiDefaultValue | ApiDefaultValue[];

/** Configuration for API management GET requests. @keywords api, get, fetch, request */
export type ApiManagementGet<Return extends ApiManagementValue, Type extends ApiManagementValue = Return> = {
  /** API endpoint path. */
  path?: RefOrNormal<string | undefined>;
  /** Additional request options. */
  options?: ApiOptions;
  /** Enable reactive updates when path or options change. */
  reactivity?: boolean;
  /** Condition to trigger the request. */
  conditions?: RefType<boolean>;
  /** Custom transformation for fetched data. */
  transformation?: (data: Type, isResponseContractValid?: ApiDataValidation) => ApiData<Return>;
  /** Function to validate response data contract. */
  validateResponseContract?: (data: Type) => ApiDataValidation;
  /** Storage of response error contracts. */
  errorContract?: ApiErrorStorageList;
  /** Data validation predicate function. */
  typeData?: (data: Return) => boolean;
  /** Whether to clear data when the component unmounts. */
  unmounted?: boolean;
  /** Function providing skeleton placeholder data during loading. */
  skeleton?: () => Return;
};

/** Configuration for client-side search across API data. @keywords api, search, filter */
export type ApiManagementSearch<T extends SearchItem, K extends SearchColumns<T>> = {
  /** List of columns to search through. */
  columns: K;
  /** Reactive search query. */
  value?: Ref<string>;
  /** Additional search algorithm options. */
  options?: SearchOptions;
};

/** Configuration for API mutation requests. @keywords api, mutation, request, post, put, delete */
export type ApiManagementRequest<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> = {
  /** Target API endpoint path. */
  path?: RefOrNormal<string | undefined>;
  /** Callback executed after receiving response data regardless of status. */
  action?: (data: Return | undefined) => Promise<void> | void;
  /** Callback executed on successful response. */
  actionSuccess?: (data: Return) => Promise<void> | void;
  /** Callback executed on error response or transport exception. */
  actionError?: (data: Return | undefined, error?: unknown) => Promise<void> | void;
  /** Data transformation applied before sending. */
  transformation?: (data: T) => Return;
  /** Request contract validation function. */
  validateRequestContract?: (data: Request) => ApiDataValidation & Return;
  /** Response contract validation function. */
  validateResponseContract?: (data: T) => ApiDataValidation & Return;
  /** Storage of response error contracts. */
  errorContract?: ApiErrorStorageList;
  /** Whether to wrap payload in a 'data' property. */
  toData?: boolean;
  /** Additional mutation request options. */
  options?: ApiOptions;
};