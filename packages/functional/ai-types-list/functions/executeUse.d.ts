// md5:2df670a762da59a102f5708e049713b2 true
export declare enum ExecuteUseType {
    global = "global",
    provide = "provide",
    local = "local"
}

export type ExecuteUseReturn<R extends object | void> = Readonly<R & {
    /** Returns the raw instance without management methods. @keywords init, unwrap */
    init(): Readonly<R>;
    /** Resets the cached instance for local and global strategies. @keywords reset, destroy, cache */
    destroyExecute?(): void;
}>;

/**
 * Creates a managed singleton encapsulating initialization logic and access strategy.
 * @keywords singleton, provide-inject, global-state, factory, cache
 * @remarks
 * Supports three initialization strategies:
 * - `global`: Single instance across the entire application.
 * - `provide`: Shared via provide/inject in the component hierarchy.
 * - `local`: Single instance scoped to the returned function closure.
 * @example
 * const useUserApi = executeUseGlobal(() => useApiGet('/api/user'));
 */
export declare function executeUse<R extends object | void, O extends unknown[], RI extends ExecuteUseReturn<R> = ExecuteUseReturn<R>>(callback: (...args: O) => R, type?: ExecuteUseType): ((...args: O) => RI) | (() => RI);

/**
 * Creates an application-wide global singleton.
 * @keywords global, singleton, shared-instance
 * @remarks See {@link executeUse} for more details.
 */
export declare function executeUseGlobal<R extends object | void>(callback: () => R): () => ExecuteUseReturn<R>;

/**
 * Creates a component-tree scoped singleton using provide/inject.
 * @keywords provide, inject, vue, scoped-state
 * @remarks Best for sharing state within a component sub-tree. See {@link executeUse}.
 */
export declare function executeUseProvide<R extends object | void, O extends unknown[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>;

/**
 * Creates a closure-scoped local singleton.
 * @keywords local, singleton, closure, memoize
 * @remarks Best for preserving internal state within a closure. See {@link executeUse}.
 */
export declare function executeUseLocal<R extends object | void, O extends unknown[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>;

/** Initializes all registered global singleton callbacks. @keywords initialize, bootstrap, global-init */
export declare function executeUseGlobalInit(): void;