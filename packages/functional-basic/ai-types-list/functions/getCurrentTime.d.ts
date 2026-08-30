// md5:88ba641627c0f51eaa48660a1cf24513 true
/**
 * Returns the current time in milliseconds.
 * @remarks Warning (SSR): Using this function during SSR rendering can cause hydration mismatches due to server/client timestamp differences.
 * @keywords current time, timestamp, now, milliseconds, epoch
 */
export declare function getCurrentTime(): number;