// md5:83255abedeb2e61cb9116670a7408eeb true
/** Centralized storage and matcher for identifying API error states from HTTP responses. @keywords api, error storage, error handling, error matcher */
export declare class ApiErrorStorage {
    /** Finds a matching registered error item by evaluating the API response and method. @keywords find error, match error, api error */
    find(method: ApiMethodItem, response: Response): Promise<ApiErrorStorageItem>;
    /** Registers error criteria items with optional URL pattern and HTTP method filters. @keywords add error, register error, error rule */
    add(item: Partial<ApiErrorStorageItem> | Partial<ApiErrorStorageItem>[], url?: string | RegExp, method?: ApiMethodItem): this;
}