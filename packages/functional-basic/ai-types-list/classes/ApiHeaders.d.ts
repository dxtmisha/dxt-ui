// md5:ff6369e27093d00dafed05b62c7a8dcc true
/**
 * Manages HTTP request headers.
 * @keywords api headers request content-type
 */
export declare class ApiHeaders {
    /**
     * Retrieves request headers.
     * @keywords get headers content-type
     */
    get(value?: Record<string, string> | null, type?: string | undefined | null): Record<string, string> | undefined;
    /**
     * Retrieves headers based on request data.
     * @keywords get headers request content-type
     */
    getByRequest(request: ApiFetch['request'], value?: Record<string, string> | null, type?: string): Record<string, string> | undefined;
    /**
     * Sets default headers.
     * @keywords set headers defaults
     */
    set(headers: ApiHeadersValue): this;
}