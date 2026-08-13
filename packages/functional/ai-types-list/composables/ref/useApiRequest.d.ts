// md5:5807f9b7323b8a7fefa1ddd4981597f2 true
import { ApiInstance, ApiMethodItem, ApiData, ApiFetch, ApiErrorStorageList, ApiDataValidation } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';

/** Setup interface for API request. @keywords useApiRequest setup api request configuration */
export interface UseApiRequestSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> {
    /** Path to the API endpoint. @keywords path endpoint api */
    path?: RefOrNormal<string | undefined>;
    /** HTTP method used for the request. @keywords method http get post */
    method?: ApiMethodItem;
    /** Action callback after successful completion. @keywords action callback success */
    action?: (data: Return | undefined) => Promise<void> | void;
    /** Transformation function for response data. @keywords transformation transform response data */
    transformation?: (data: T) => Return;
    /** Function to validate the request payload contract. @keywords validate request contract payload */
    validateRequestContract?: (data: Request) => ApiDataValidation & Return;
    /** Function to validate response data contract. @keywords validate response contract schema */
    validateResponseContract?: (data: T) => ApiDataValidation & Return;
    /** Array of expected error contracts for the request. @keywords error contract list */
    errorContract?: ApiErrorStorageList;
    /** If true, extracts nested data field. @keywords toData extract response data */
    toData?: boolean;
    /** Additional request options. @keywords options request headers params */
    options?: ApiOptions;
    /** Custom Api instance. @keywords apiInstance custom api */
    apiInstance?: ApiInstance;
}

/** Execute an API request with loading states. @keywords useApiRequest request api fetch */
export declare function useApiRequest<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>({ path, method, action, transformation, validateRequestContract, validateResponseContract, errorContract, toData, options, apiInstance }: UseApiRequestSetup<T, Request, Return>): {
    /** Loading state flag. @keywords loading state ref */
    loading: Ref<boolean, boolean>;
    /** Send the API request. @keywords send request api method */
    send(request?: Request): Promise<Return | undefined>;
};