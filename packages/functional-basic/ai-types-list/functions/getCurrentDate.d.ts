// md5:bd99635f167f28939438e3a969a10113 true
/**
 * Returns the current date in the specified format.
 * @remarks Using for SSR rendering may lead to hydration mismatches due to timezone differences. Use within client-side hooks.
 * @keywords current date, today, now, format, ssr
 */
export declare function getCurrentDate(format?: GeoDate): string;