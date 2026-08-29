// md5:dcbd254f917ee86a99d351f3cb40c0f4 true
/** Utility class for managing API error storage and creating structured error items. @keywords api, error, error-handling, storage */
export declare class ApiError {
    /** Retrieves the singleton instance of the API error storage. @keywords storage, singleton, instance */
    static getStorage(): ApiErrorStorage;
    /** Adds error definition item(s) to storage matching URL and method patterns. @keywords add, register, error-item */
    static add(item: Partial<ApiErrorStorageItem> | Partial<ApiErrorStorageItem>[], url?: string | RegExp, method?: ApiMethodItem): void;
    /** Creates structured ApiErrorItem by matching response against stored error criteria. @keywords get, parse, error-item, response */
    static getItem(method: ApiMethodItem, response: Response): Promise<ApiErrorItem>;
}