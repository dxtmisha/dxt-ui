// md5:bd99635f167f28939438e3a969a10113 true
/**
 * Returns the current date formatted according to the specified format.
 * @remarks Using this during SSR may cause hydration mismatches due to server/client timezone differences. Prefer calling inside client hooks (`useEffect`, `onMounted`).
 * @keywords current date, date format, now, client date, ssr
 */
export declare function getCurrentDate(format?: GeoDate): string;