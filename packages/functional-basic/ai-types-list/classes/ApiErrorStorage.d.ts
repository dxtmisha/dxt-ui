// md5:e8b3f9c0c43d4f2605c1bbfa462485c4 true
/** Manager for handling and identifying API error states @keywords api error storage matcher */
export declare class ApiErrorStorage {
    /** Finds a matching error item in the storage by analyzing the response @keywords find api error */
    find(method: ApiMethodItem, response: Response): Promise<ApiErrorStorageItem>;
    /** Adds error items or lists to internal storage @keywords add api error */
    add(item: Partial<ApiErrorStorageItem> | Partial<ApiErrorStorageItem>[], url?: string | RegExp, method?: ApiMethodItem): this;
}