// md5:09d74ccb68d9bd2bac19ab046a4905df true
import type { ApiData, ApiDataValidation, ApiDefaultValue, ApiErrorStorageList, ApiFetch, ApiMethodItem, SearchColumns, SearchItem, SearchOptions } from '@dxtmisha/functional-basic';
import type { Ref } from 'vue';
export type ApiOptions = ApiMethodItem | RefOrNormal<ApiFetch>;
export type ApiManagementValue = ApiDefaultValue | ApiDefaultValue[];
/** Configuration for GET requests in API management @keywords api, get, fetch, request */
export type ApiManagementGet<Return extends ApiManagementValue, Type extends ApiManagementValue = Return> = {
    /** API endpoint path */
    path?: RefOrNormal<string | undefined>;
    /** Additional request options */
    options?: ApiOptions;
    /** Enables reactive refetching on path or options change */
    reactivity?: boolean;
    /** Condition required to trigger the request */
    conditions?: RefType<boolean>;
    /** Custom transformation applied to fetched data */
    transformation?: (data: Type, isResponseContractValid?: ApiDataValidation) => ApiData<Return>;
    /** Validates the response data contract */
    validateResponseContract?: (data: Type) => ApiDataValidation;
    /** Storage of response error contracts */
    errorContract?: ApiErrorStorageList;
    /** Data validation function returning a boolean / Функция проверки данных, возвращающая boolean */
    typeData?: (data: Return) => boolean;
    /** Clears data on component unmount */
    unmounted?: boolean;
    /** Provides skeleton placeholder data during loading */
    skeleton?: () => Return;
};
/** Configuration for client-side search across API data @keywords api, search, filter */
export type ApiManagementSearch<T extends SearchItem, K extends SearchColumns<T>> = {
    /** Columns to search through */
    columns: K;
    /** Reactive search query string */
    value?: Ref<string>;
    /** Search algorithm configuration */
    options?: SearchOptions;
};
/** Configuration for mutation requests (POST, PUT, DELETE) @keywords api, mutation, request, post, put, delete */
export type ApiManagementRequest<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> = {
    /** Target API endpoint path */
    path?: RefOrNormal<string | undefined>;
    /** Callback after receiving response data, regardless of success / Колбэк после получения данных ответа, независимо от успешности */
    action?: (data: Return | undefined) => Promise<void> | void;
    /** Callback for a successful response / Колбэк для успешного ответа */
    actionSuccess?: (data: Return) => Promise<void> | void;
    /** Callback for error data or a transport exception / Колбэк для ошибочных данных или исключения при передаче запроса */
    actionError?: (data: Return | undefined, error?: unknown) => Promise<void> | void;
    /** Transformation applied before sending data */
    transformation?: (data: T) => Return;
    /** Request contract validation function */
    validateRequestContract?: (data: Request) => ApiDataValidation & Return;
    /** Response contract validation function */
    validateResponseContract?: (data: T) => ApiDataValidation & Return;
    /** Storage of response error contracts */
    errorContract?: ApiErrorStorageList;
    /** Wraps payload into a `data` property */
    toData?: boolean;
    /** Additional mutation request options */
    options?: ApiOptions;
};
