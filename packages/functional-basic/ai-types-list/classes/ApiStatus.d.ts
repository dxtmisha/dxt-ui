// md5:5bcd6550cb0cb5a19974ac4c5418b73b true
/** Class for managing API request status. @keywords api, status, request, response */
export declare class ApiStatus {
    /** Returns the last status item data. @keywords status item, state */
    get(): ApiStatusItem | undefined;
    /** Returns the HTTP execution status code. @keywords http status, status code */
    getStatus(): number | undefined;
    /** Returns the execution status text. @keywords status text, http message */
    getStatusText(): string | undefined;
    /** Returns the last status type. @keywords status type, state */
    getStatusType(): ApiStatusType | undefined;
    /** Returns the execution status code from the response. @keywords code, response code */
    getCode(): string | undefined;
    /** Returns the script execution error message. @keywords error, failure */
    getError(): string | undefined;
    /** Returns the data of the last request response. @keywords response, payload, data */
    getResponse<T>(): T | undefined;
    /** Returns messages from the last request. @keywords message, response message */
    getMessage(): string;
    /** Sets the status item data. @keywords set status, state */
    set(data: ApiStatusItem): this;
    /** Sets the status code and optional status text. @keywords set status, http code */
    setStatus(status?: number, statusText?: string): this;
    /** Sets the error message. @keywords set error, failure */
    setError(error?: string): this;
    /** Sets last response data and auto-extracts status or message. @keywords set response, payload */
    setLastResponse(response?: any): this;
    /** Sets the last status type. @keywords set status, status type */
    setLastStatus(status?: ApiStatusType): this;
    /** Sets the last execution status code. @keywords set code, status code */
    setLastCode(code?: string): this;
    /** Sets messages from the last request. @keywords set message */
    setLastMessage(message?: string): this;
}