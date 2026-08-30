// md5:83255abedeb2e61cb9116670a7408eeb true
/** Centralized storage and matcher for identifying API error states based on response criteria. @keywords api error storage matcher status handler */
export declare class ApiErrorStorage {
    /** Finds a matching error item in storage by analyzing the API method and response. @keywords find match error response */
    find(method: ApiMethodItem, response: Response): Promise<ApiErrorStorageItem>;
    /** Adds one or more API error items or patterns to the internal storage. @keywords add register error rule pattern */
    add(item: Partial<ApiErrorStorageItem> | Partial<ApiErrorStorageItem>[], url?: string | RegExp, method?: ApiMethodItem): this;
}