// md5:1f6ab184315aa6aa4d26e8adea4bc858 true
/** Setup interface for API GET request @keywords api get setup request configuration */
export interface UseApiGetSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}

/** Executes an API GET request with loading state and send method @keywords api get request wrapper */
export declare function useApiGet<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiGetSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};