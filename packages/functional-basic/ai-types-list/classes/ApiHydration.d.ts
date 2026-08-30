// md5:d358bfffabeee1f45fe966bfb25e7bda true
/** Collects API data during SSR for client-side hydration. @keywords ssr hydration api data transfer */
export declare class ApiHydration {
    /** Initializes the API response with hydration payload. @keywords ssr init response hydration */
    initResponse(response: ApiResponse): void;
    /** Saves an API response for client-side hydration. @keywords ssr cache response hydration state */
    toClient<T>(apiFetch: ApiFetch, response: T): void;
    /** Serializes hydration data into a string for client injection. @keywords serialize hydration string ssr */
    toString(): string;
}