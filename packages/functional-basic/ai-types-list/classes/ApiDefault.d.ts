// md5:c003c02c58dbbd4d76813f393386b8e1 true
/** Manages default request data and parameters. @keywords api default request parameters */
export declare class ApiDefault {
    /** Checks if default request data is defined. @keywords api check default */
    is(): boolean;
    /** Gets default request data. @keywords api get default */
    get(): Record<string, any> | undefined;
    /** Merges default data into request. @keywords api request merge */
    request(request: ApiFetch['request']): ApiFetch['request'];
    /** Sets default request data. @keywords api set default */
    set(request: ApiDefaultValue): this;
    /** Adds default data to FormData. @keywords api form data add */
    protected addByFormData(request: FormData, value: ApiDefaultValue): this;
}