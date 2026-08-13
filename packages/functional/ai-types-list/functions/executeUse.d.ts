// md5:2df670a762da59a102f5708e049713b2 true
/** Types of initialization for a singleton @keywords execute, use, type */
export declare enum ExecuteUseType {
    /** Global application instance @keywords global, singleton */
    global = "global",
    /** Provide/inject shared instance @keywords provide, inject */
    provide = "provide",
    /** Local closure instance @keywords local, closure */
    local = "local"
}

export type ExecuteUseReturn<R> = Readonly<R & {
    /** Returns raw instance @keywords init, raw */
    init(): Readonly<R>;
    /** Resets cached instance @keywords destroy, reset */
    destroyExecute?(): void;
}>;

/**
 * Creates a managed singleton with initialization strategies.
 * @keywords execute, use, singleton, factory
 */
export declare function executeUse<R, O extends any[], RI extends ExecuteUseReturn<R> = ExecuteUseReturn<R>>(callback: (...args: O) => R, type?: ExecuteUseType): ((...args: O) => RI) | (() => RI);

/**
 * Creates a global singleton.
 * @keywords execute, use, global, singleton
 */
export declare function executeUseGlobal<R>(callback: () => R): (() => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>) | (() => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>);

/**
 * Creates a component-scoped singleton.
 * @keywords execute, use, provide, singleton
 */
export declare function executeUseProvide<R, O extends any[]>(callback: (...args: O) => R): ((...args: O) => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>) | (() => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>);

/**
 * Creates a local singleton.
 * @keywords execute, use, local, singleton
 */
export declare function executeUseLocal<R, O extends any[]>(callback: (...args: O) => R): ((...args: O) => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>) | (() => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>);

/**
 * Initializes all global callbacks.
 * @keywords execute, use, global, init
 */
export declare function executeUseGlobalInit(): void;