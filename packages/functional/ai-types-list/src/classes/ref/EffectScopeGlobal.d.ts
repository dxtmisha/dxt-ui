// md5:bed889aa58072c4a14425de9351cfa5e true
/** Global effect scope class. @keywords effect scope, global effect */
export declare class EffectScopeGlobal {
    /** Runs a function within the global scope. @keywords run, execute, global scope */
    static run<T>(fn: () => T): T | undefined;
}