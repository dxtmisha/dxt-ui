// md5:f39488a0ccbc44685a2736031c63eeb2 true
/** Manages default API request data and parameters. @keywords api, default, request, params */
export declare class ApiDefault {
    /** Checks whether default request data exists. @keywords check, exists, status */
    is(): boolean;
    /** Retrieves default request data. @keywords get, read, default_data */
    get(): Record<string, any> | undefined;
    /** Merges default data into the specified request. @keywords merge, request, defaults */
    request(request: ApiFetch['request']): ApiFetch['request'];
    /** Sets the default request data. @keywords set, assign, configure */
    set(request: ApiDefaultValue): this;
}