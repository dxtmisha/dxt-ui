// md5:5e0b3a020e89b400d25a8eab175fee55 true
/** Class for managing and resolving HTTP request headers. @keywords api, headers, http, request, fetch */
export declare class ApiHeaders {
    /** Merges and returns request headers with an optional Content-Type. @keywords headers, get, merge, content-type */
    get(value?: Record<string, string> | null, type?: string | undefined | null): Record<string, string> | undefined;
    /** Resolves and merges headers based on request configuration. @keywords headers, request, resolve, merge */
    getByRequest(request: ApiFetch['request'], value?: Record<string, string> | null, type?: string): Record<string, string> | undefined;
    /** Sets the default headers. @keywords headers, set, default, config */
    set(headers: ApiHeadersValue): this;
}