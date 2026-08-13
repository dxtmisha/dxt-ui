// md5:a56b62c4909cacbf85b9e47cdaec64fa true
/** Setup interface for API PUT request @keywords useApiPutSetup, api, put */
export interface UseApiPutSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
/** Use API PUT request wrapper @keywords useApiPut, api, put, request */
export declare function useApiPut<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiPutSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};