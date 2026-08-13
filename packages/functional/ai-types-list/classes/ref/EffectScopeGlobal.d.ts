// md5:bed889aa58072c4a14425de9351cfa5e true
/** Global effect scope class. @keywords effect scope global scope */
export declare class EffectScopeGlobal {
    /** Runs a function within the global scope. @keywords run execute global scope */
    static run<T>(fn: () => T): T | undefined;
    /** Gets the global effect scope instance. @keywords get scope instance global */
    static getScope(): import("vue").EffectScope;
}