// md5:3bcd3cefdba2bc0f744d594e65279109 true
/** Static entry point for running effects in a cached detached Vue scope. @keywords effect scope global detached vue ssr */
export declare class EffectScopeGlobal {
    /** Executes a callback synchronously inside the cached detached effect scope. @keywords run effect scope detached callback */
    static run<T>(fn: () => T): T | undefined;
}