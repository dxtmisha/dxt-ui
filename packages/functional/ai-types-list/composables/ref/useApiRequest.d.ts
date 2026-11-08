// md5:b20a5c3dd2e3984098fa4bcdbdee4d7c true
import { type Ref } from 'vue';
import { type ApiInstance, ApiMethodItem, type ApiData, type ApiFetch, type ApiErrorStorageList, type ApiDataValidation } from '@dxtmisha/functional-basic';

/** Configuration options for executing an API request. @keywords api, request, options, setup */
export interface UseApiRequestSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> {
  path?: RefOrNormal<string | undefined>;
  method?: ApiMethodItem;
  action?: (data: Return | undefined) => Promise<void> | void;
  actionSuccess?: (data: Return) => Promise<void> | void;
  actionError?: (data: Return | undefined, error?: unknown) => Promise<void> | void;
  transformation?: (data: T) => Return;
  validateRequestContract?: (data: Request) => ApiDataValidation & Return;
  validateResponseContract?: (data: T) => ApiDataValidation & Return;
  errorContract?: ApiErrorStorageList;
  toData?: boolean;
  options?: ApiOptions;
  apiInstance?: ApiInstance;
}

/** Return interface providing reactive loading state and execution control. @keywords api, return, response */
export interface UseApiRequestReturn<Return, Request extends ApiFetch['request'] = ApiFetch['request']> {
  loading: Ref<boolean>;
  /** Sends the API request and awaits lifecycle callbacks. @keywords send, request, fetch */
  send(request?: Request): Promise<Return | undefined>;
}

/** Composable for managing API requests with reactive loading, contract validation, and lifecycle callbacks. @keywords useApiRequest, api, request, fetch, composable */
export declare function useApiRequest<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>({ path, method, action, actionSuccess, actionError, transformation, validateRequestContract, validateResponseContract, errorContract, toData, options, apiInstance }: UseApiRequestSetup<T, Request, Return>): UseApiRequestReturn<Return, Request>;