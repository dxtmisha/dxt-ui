// md5:87928def0e0fb6cfa2cb5fbfce67df42 true
/** Manages and extracts details from an API error response. @keywords api error, error response, error parser */
export declare class ApiErrorItem {
    /** Initializes the API error item. @keywords constructor, init */
    constructor(method: ApiMethodItem, response: Response, error: ApiErrorStorageItem);
    /** Gets the HTTP method used for the request. @keywords http method, request method */
    getMethod(): ApiMethodItem;
    /** Gets the raw Fetch Response object. @keywords fetch response, raw response */
    getResponse(): Response;
    /** Gets the matched error item from storage. @keywords storage error, error definition */
    getError(): ApiErrorStorageItem;
    /** Retrieves the error code from storage or response body. @keywords error code */
    getCode(): string | undefined;
    /** Retrieves the error message from storage, body, or status text. @keywords error message */
    getMessage(): string | undefined;
    /** Gets the HTTP response status code. @keywords http status, status code */
    getStatus(): number;
}