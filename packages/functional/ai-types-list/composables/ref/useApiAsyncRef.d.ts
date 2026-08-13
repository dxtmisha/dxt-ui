// md5:f9b56ace4b1041f788b535203348c83f true
import { ApiInstance, ApiData, ApiDataValidation, ApiErrorStorageList } from '@dxtmisha/functional-basic';

/**
 * Asynchronous reactive composable for API requests with built-in SSR support.
 * @keywords api, async, ssr, request, fetch
 */
export declare function useApiAsyncRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;