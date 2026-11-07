// md5:2f6360303fc5bd3a8f5f1b1e86ceb353 true
/**
 * Returns the current date in the specified format.
 * @remarks Using in SSR may cause hydration mismatches due to timezone differences; run within client hooks.
 * @keywords current date, format, timezone, date now
 */
export declare function getCurrentDate(format?: GeoDate, timeZone?: boolean): string;