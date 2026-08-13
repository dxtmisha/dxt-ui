// md5:a60ae3a17dfc3ddeb06e70c92b6fe084 true
/** Processes and formats API response data @keywords api, response, data, transform */
export declare class ApiDataReturn<T = any> {
    /** Creates ApiDataReturn instance @keywords constructor, api */
    constructor(apiFetch: ApiFetch, query: Response, end: ApiPreparationEnd, error?: ApiErrorItem | undefined);
    /** Initializes response data @keywords init, parse */
    init(): Promise<this>;
    /** Returns processed data @keywords get, data */
    get(): ApiData<T>;
    /** Returns processed data with status object @keywords get, status */
    getAndStatus(status: ApiStatus): ApiData<T>;
    /** Returns raw API data @keywords get, raw, data */
    getData(): ApiData<T> | undefined;
}