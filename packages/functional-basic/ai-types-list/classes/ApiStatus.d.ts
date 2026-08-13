// md5:9e1d28f8520c7770bee84383192f8d75 true
/** Manages API request status and tracking. @keywords api status tracker */
export declare class ApiStatus {
    /** Gets the current API status data. @keywords get status */
    get(): ApiStatusItem | undefined;
    /** Gets the HTTP response status code. @keywords get status code */
    getStatus(): number | undefined;
    /** Gets the HTTP response status text. @keywords get status text */
    getStatusText(): string | undefined;
    /** Gets the last status type. @keywords get status type */
    getStatusType(): ApiStatusType | undefined;
    /** Gets the last error code. @keywords get code */
    getCode(): string | undefined;
    /** Gets the current error string. @keywords get error */
    getError(): string | undefined;
    /** Gets the last response data payload. @keywords get response data */
    getResponse<T>(): T | undefined;
    /** Gets the last response message string. @keywords get message */
    getMessage(): string;
    /** Sets full status data object. @keywords set status data */
    set(data: ApiStatusItem): this;
    /** Sets HTTP status code and optional text. @keywords set status */
    setStatus(status?: number, statusText?: string): this;
    /** Sets the error message state. @keywords set error */
    setError(error?: string): this;
    /** Sets the last response and extracts metadata. @keywords set last response */
    setLastResponse(response?: any): this;
    /** Sets the last status type. @keywords set last status */
    setLastStatus(status?: ApiStatusType): this;
    /** Sets the last execution code. @keywords set last code */
    setLastCode(code?: string): this;
    /** Sets the last response message. @keywords set last message */
    setLastMessage(message?: string): this;
}