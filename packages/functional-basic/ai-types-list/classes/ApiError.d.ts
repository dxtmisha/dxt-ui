// md5:dcbd254f917ee86a99d351f3cb40c0f4 true
/** Utility class for managing API error storage and resolving structured error items. @keywords api, error, error-storage, response-handling */
export declare class ApiError {
    /** Retrieves the singleton instance of the API error storage. @keywords storage, singleton, instance */
    static getStorage(): ApiErrorStorage;
    /** Adds error items to the storage matching optional URL and HTTP method criteria. @keywords add, register, error-item, filter */
    static add(item: Partial<ApiErrorStorageItem> | Partial<ApiErrorStorageItem>[], url?: string | RegExp, method?: ApiMethodItem): void;
    /** Creates an ApiErrorItem by matching the response against stored error criteria. @keywords get-item, match, parse-error, response */
    static getItem(method: ApiMethodItem, response: Response): Promise<ApiErrorItem>;
}