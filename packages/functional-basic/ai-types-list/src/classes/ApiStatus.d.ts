// md5:5bcd6550cb0cb5a19974ac4c5418b73b true
/** Manages API request status and response metadata. @keywords api status response handler */
export declare class ApiStatus {
    /** Returns the last status item data. @keywords status data item */
    get(): ApiStatusItem | undefined;
    /** Returns the execution HTTP status code. @keywords http status code */
    getStatus(): number | undefined;
    /** Returns the execution status text. @keywords status text */
    getStatusText(): string | undefined;
    /** Returns the last status type. @keywords status type */
    getStatusType(): ApiStatusType | undefined;
    /** Returns the execution status code string. @keywords response code */
    getCode(): string | undefined;
    /** Returns the script execution error message. @keywords error message */
    getError(): string | undefined;
    /** Returns the data of the last response. @keywords response data */
    getResponse<T>(): T | undefined;
    /** Returns messages from the last request. @keywords message response */
    getMessage(): string;
    /** Sets the status item data. @keywords set status data */
    set(data: ApiStatusItem): this;
    /** Sets the HTTP status code and optional status text. @keywords set status http code */
    setStatus(status?: number, statusText?: string): this;
    /** Sets the error message. @keywords set error */
    setError(error?: string): this;
    /** Sets the last response data and extracts status/message if applicable. @keywords set response */
    setLastResponse(response?: any): this;
    /** Sets the last status type. @keywords set status type */
    setLastStatus(status?: ApiStatusType): this;
    /** Sets the last execution code. @keywords set code */
    setLastCode(code?: string): this;
    /** Sets the last message text. @keywords set message */
    setLastMessage(message?: string): this;
}