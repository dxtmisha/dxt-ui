// md5:b29133b2434b54d341aefd9face4239c true
/** Class for working with API responses. @keywords api, response, emulator */
export declare class ApiResponse {
    /** Constructor @keywords constructor */
    constructor(requestDefault: ApiDefault);
    /** Checks for global cached request and returns it if found. @keywords get, cache, response */
    get(path: string | undefined, method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponseItem | undefined;
    /** Returns list of cached API responses excluding global ones. @keywords list, cache, response */
    getList(): (ApiResponseItem & Record<string, any>)[];
    /** Adds cached requests. @keywords add, cache, response */
    add(response: ApiResponseItem | ApiResponseItem[]): this;
    /** Sets developer mode flag. @keywords set, devMode, developer */
    setDevMode(devMode: boolean): this;
    /** Executes emulator if available. @keywords emulator, fetch, async */
    emulator<T>(apiFetch: ApiFetch): Promise<T | undefined>;
    /** Executes emulator synchronously if available. @keywords emulator, sync, fetch */
    emulatorAsync<T>(apiFetch: ApiFetch): T | undefined;
    /** Checks if cached item is disabled. @keywords check, disable, item */
    protected isDisable(item: ApiResponseItem): boolean;
    /** Checks if path matches cached one. @keywords check, path, match */
    protected isPath(item: ApiResponseItem, path: string): boolean;
    /** Checks if developer mode is active. @keywords check, devMode, mode */
    protected isDevMode(devMode?: boolean): boolean;
    /** Checks if request is first. @keywords check, first, request */
    protected isFirst(item: ApiResponseItem, devMode?: boolean): boolean;
    /** Checks if request matches cached one. @keywords check, response, match */
    protected isResponse(item: ApiResponseItem, request?: ApiFetch['request']): boolean;
    /** Reads cached data configuration. @keywords read, data, cache */
    protected readData(apiFetch: ApiFetch): {
        response: ApiResponseItem;
        request: string | Record<string, any> | FormData | undefined;
    } | undefined;
    /** Emulates execution request. @keywords fetch, emulate, request */
    protected fetch<T>(response: ApiResponseItem, request?: ApiFetch['request']): Promise<T>;
    /** Emulates execution request synchronously. @keywords fetch, emulate, sync */
    protected fetchAsync<T>(response: ApiResponseItem): T;
    /** Enables loading for request emulation. @keywords start, loading, response */
    protected startResponseLoading(): void;
    /** Disables loading for request emulation. @keywords stop, loading, response */
    protected stopResponseLoading(): void;
}