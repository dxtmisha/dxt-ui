// md5:d358bfffabeee1f45fe966bfb25e7bda true
/** Collects API data during SSR for client-side hydration. @keywords ssr hydration api state */
export declare class ApiHydration {
    /** Initializes the response with hydration data. @keywords init response hydration */
    initResponse(response: ApiResponse): void;
    /** Saves API response for client-side hydration. @keywords save cache hydration client */
    toClient<T>(apiFetch: ApiFetch, response: T): void;
    /** Serializes hydration data to a string representation for client transfer. @keywords serialize string hydration */
    toString(): string;
}