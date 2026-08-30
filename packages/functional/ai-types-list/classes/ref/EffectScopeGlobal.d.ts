// md5:bed889aa58072c4a14425de9351cfa5e true
/** Global effect scope container. @keywords effect scope, reactivity, global scope */
export declare class EffectScopeGlobal {
    /** Runs a callback within the global effect scope. @keywords run, execute, global effect scope */
    static run<T>(fn: () => T): T | undefined;
}