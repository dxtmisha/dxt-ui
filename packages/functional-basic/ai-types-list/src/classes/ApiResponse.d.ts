// md5:6ce99c0a14a2b7de75281641753f9441 true
/** Class for managing and emulating cached API responses. @keywords api response cache emulator */
export declare class ApiResponse {
    /** Initializes the API response manager. @keywords constructor init */
    constructor(requestDefault: ApiDefault);
    /** Retrieves a matching cached API response item. @keywords get cache find */
    get(path: string | undefined, method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponseItem | undefined;
    /** Returns the list of cached API response items. @keywords list responses cache */
    getList(): (ApiResponseItem & Record<string, any>)[];
    /** Registers one or more cached response items. @keywords add register cache mock */
    add(response: ApiResponseItem | ApiResponseItem[]): this;
    /** Enables or disables developer mode. @keywords dev mode debug */
    setDevMode(devMode: boolean): this;
    /** Executes asynchronous response emulation if cached data matches. @keywords emulator async fetch mock */
    emulator<T>(apiFetch: ApiFetch): Promise<T | undefined>;
    /** Executes synchronous response emulation if cached data matches. @keywords emulator sync mock */
    emulatorAsync<T>(apiFetch: ApiFetch): T | undefined;
}