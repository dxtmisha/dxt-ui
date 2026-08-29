// md5:098b0afd2a13acc439d6c4ab910ccf66 true
/** Handles and processes data returned from an API request. @keywords api, response, data, parser */
export declare class ApiDataReturn<T = any> {
    /** Creates an ApiDataReturn instance. @keywords constructor, api, fetch */
    constructor(apiFetch: ApiFetch, query: Response, end: ApiPreparationEnd, error?: ApiErrorItem | undefined);
    /** Initializes the instance by reading and parsing response data. @keywords init, parse, response */
    init(): Promise<this>;
    /** Returns processed API response data. @keywords get, data, response */
    get(): ApiData<T>;
    /** Returns processed data attached with API status information. @keywords status, data, response */
    getAndStatus(status: ApiStatus): ApiData<T>;
    /** Returns raw API response data if available. @keywords raw, data, response */
    getData(): ApiData<T> | undefined;
}