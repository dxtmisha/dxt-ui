// md5:2c174819262b262d3fb876c7f5ad8e00 true
/** Manages API error storage and error items. @keywords api error storage handler */
export declare class ApiError {
    /** Gets the API error storage instance. @keywords get storage error */
    static getStorage(): ApiErrorStorage;
    /** Adds error items to storage. @keywords add error item */
    static add(item: Partial<ApiErrorStorageItem> | Partial<ApiErrorStorageItem>[], url?: string | RegExp, method?: ApiMethodItem): void;
    /** Gets structured error item from response. @keywords get error item response */
    static getItem(method: ApiMethodItem, response: Response): Promise<ApiErrorItem>;
}