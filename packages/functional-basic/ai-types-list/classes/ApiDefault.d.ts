// md5:f39488a0ccbc44685a2736031c63eeb2 true
/** Class for managing default API request data. @keywords api default request */
export declare class ApiDefault {
    /** Checks if default request data exists. @keywords is check default */
    is(): boolean;
    /** Gets the default request data. @keywords get default data */
    get(): Record<string, any> | undefined;
    /** Merges default data into the provided request data. @keywords request merge default */
    request(request: ApiFetch['request']): ApiFetch['request'];
    /** Sets the default request data. @keywords set default data */
    set(request: ApiDefaultValue): this;
}