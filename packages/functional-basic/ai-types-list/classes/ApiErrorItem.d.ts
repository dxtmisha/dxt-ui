// md5:96fcc1ff87ca2956b380d1c83a4c256f true
/** Retrieves or manages API error response details. @keywords api error item response status */
export declare class ApiErrorItem {
    /** Creates an instance of ApiErrorItem. @keywords create constructor api error item */
    constructor(method: ApiMethodItem, response: Response, error: ApiErrorStorageItem);
    /** Gets the HTTP request method. @keywords get method http */
    getMethod(): ApiMethodItem;
    /** Gets the raw fetch response object. @keywords get response fetch */
    getResponse(): Response;
    /** Gets the matched error storage item. @keywords get error storage item */
    getError(): ApiErrorStorageItem;
    /** Gets the error code. @keywords get error code */
    getCode(): string | undefined;
    /** Gets the error message. @keywords get error message */
    getMessage(): string | undefined;
    /** Gets the HTTP response status code. @keywords get status code */
    getStatus(): number;
}