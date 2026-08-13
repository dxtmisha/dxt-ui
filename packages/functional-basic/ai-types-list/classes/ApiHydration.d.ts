// md5:23f6294f60fc28c1012a0f90fc4e058c true
/**
 * Manages API response hydration for server-side rendering (SSR).
 * @keywords api, hydration, ssr, client, cache
 */
export declare class ApiHydration {
    /**
     * Initializes response collection from client data.
     * @keywords init, response, hydration
     */
    initResponse(response: ApiResponse): void;
    /**
     * Stores API fetch and response pair for client hydration.
     * @keywords to, client, hydration, save
     */
    toClient<T>(apiFetch: ApiFetch, response: T): void;
    /**
     * Serializes hydration data into a script string.
     * @keywords to, string, serialize, html
     */
    toString(): string;
}