// md5:87928def0e0fb6cfa2cb5fbfce67df42 true
/** Manages and extracts error codes, messages, and status from API error responses. @keywords api error response handler parser */
export declare class ApiErrorItem {
    /** Initializes an ApiErrorItem instance. @keywords constructor init */
    constructor(method: ApiMethodItem, response: Response, error: ApiErrorStorageItem);
    /** Retrieves the HTTP method used for the request. @keywords method http */
    getMethod(): ApiMethodItem;
    /** Retrieves the raw Fetch response object. @keywords response fetch raw */
    getResponse(): Response;
    /** Retrieves the matched error storage item. @keywords error item storage */
    getError(): ApiErrorStorageItem;
    /** Retrieves the error code from storage or the response body. @keywords code error */
    getCode(): string | undefined;
    /** Retrieves the error message from storage, response body, or status text. @keywords message error */
    getMessage(): string | undefined;
    /** Retrieves the HTTP status code of the response. @keywords status http code */
    getStatus(): number;
}