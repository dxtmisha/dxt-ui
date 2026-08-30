// md5:098b0afd2a13acc439d6c4ab910ccf66 true
/** Handles and processes data returned from an API request. @keywords api, response, data handler, parser */
export declare class ApiDataReturn<T = any> {
    /** Initializes the API data return handler instance. @keywords constructor, api data */
    constructor(apiFetch: ApiFetch, query: Response, end: ApiPreparationEnd, error?: ApiErrorItem | undefined);
    /** Initializes instance by reading data from the response. @keywords init, parse, read response */
    init(): Promise<this>;
    /** Retrieves processed API response data. @keywords get, data, payload */
    get(): ApiData<T>;
    /** Retrieves processed data along with the status object. @keywords get, status, api data */
    getAndStatus(status: ApiStatus): ApiData<T>;
    /** Retrieves raw data received from the API. @keywords raw data, get */
    getData(): ApiData<T> | undefined;
}