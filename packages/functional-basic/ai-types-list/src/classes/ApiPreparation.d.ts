// md5:256d65fc898bf3d42c563e26a868f88b true
/** Prepares and intercepts API requests before and after execution. @keywords api preparation, request interceptor */
export declare class ApiPreparation {
    /** Executes pre-request preparation hook if active. @keywords pre-request, prepare request */
    make(active: boolean, apiFetch: ApiFetch): Promise<void>;
    /** Analyzes request response after execution. @keywords post-request, response interceptor */
    makeEnd(active: boolean, query: Response, apiFetch: ApiFetch): Promise<ApiPreparationEnd>;
    /** Sets callback function to execute before the request. @keywords pre-request hook, interceptor */
    set(callback: (apiFetch: ApiFetch) => Promise<void>): this;
    /** Sets callback function to execute after the request. @keywords post-request hook, response handler */
    setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this;
}