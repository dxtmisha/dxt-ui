// md5:faf373cc5de08d2eb05718181477bafd true
/** Retrieves request headers or a specific header value. @keywords headers, request, composable, http */
export declare function useHeaders<T extends string | undefined = undefined>(name?: T): (T extends string ? string : Headers) | undefined;