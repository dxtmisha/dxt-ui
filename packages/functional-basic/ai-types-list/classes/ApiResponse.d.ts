// md5:6ce99c0a14a2b7de75281641753f9441 true
/** Manages cached API responses, mocking, and request emulation. @keywords api response cache emulator mock */
export declare class ApiResponse {
    /** Initializes API response manager with default request configuration. @keywords constructor init */
    constructor(requestDefault: ApiDefault);
    /** Retrieves a matching cached API response if available. @keywords get cache lookup */
    get(path: string | undefined, method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponseItem | undefined;
    /** Returns all locally cached API response items. @keywords list items cache */
    getList(): (ApiResponseItem & Record<string, any>)[];
    /** Adds one or multiple cached API response entries. @keywords add register cache */
    add(response: ApiResponseItem | ApiResponseItem[]): this;
    /** Enables or disables developer mode. @keywords dev mode toggle */
    setDevMode(devMode: boolean): this;
    /** Asynchronously executes mock or emulated API response handler. @keywords emulator mock async request */
    emulator<T>(apiFetch: ApiFetch): Promise<T | undefined>;
    /** Synchronously executes mock or emulated API response handler. @keywords emulator mock sync request */
    emulatorAsync<T>(apiFetch: ApiFetch): T | undefined;
}