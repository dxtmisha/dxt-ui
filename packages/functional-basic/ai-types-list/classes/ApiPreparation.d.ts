// md5:256d65fc898bf3d42c563e26a868f88b true
/** Handles pre-request preparation and post-request analysis hooks. @keywords api preparation, interceptor, request lifecycle */
export declare class ApiPreparation {
    /** Executes pre-request preparation logic if active. @keywords pre-request, prepare */
    make(active: boolean, apiFetch: ApiFetch): Promise<void>;
    /** Analyzes and processes response data after request execution. @keywords post-request, response interceptor */
    makeEnd(active: boolean, query: Response, apiFetch: ApiFetch): Promise<ApiPreparationEnd>;
    /** Registers the pre-request callback hook. @keywords pre-request hook, interceptor */
    set(callback: (apiFetch: ApiFetch) => Promise<void>): this;
    /** Registers the post-request callback hook. @keywords post-request hook, response handler */
    setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this;
}