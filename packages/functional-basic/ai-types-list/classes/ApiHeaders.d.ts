// md5:5e0b3a020e89b400d25a8eab175fee55 true
/** Class for managing and resolving HTTP request headers. @keywords http headers, request headers, api headers */
export declare class ApiHeaders {
    /** Resolves and merges HTTP request headers with optional Content-Type. @keywords get headers, merge headers, content-type */
    get(value?: Record<string, string> | null, type?: string | undefined | null): Record<string, string> | undefined;
    /** Resolves headers tailored to the specific request configuration. @keywords headers by request, request headers */
    getByRequest(request: ApiFetch['request'], value?: Record<string, string> | null, type?: string): Record<string, string> | undefined;
    /** Sets the default headers. @keywords default headers, set headers */
    set(headers: ApiHeadersValue): this;
}