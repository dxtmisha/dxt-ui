// md5:2df670a762da59a102f5708e049713b2 true
export declare enum ExecuteUseType {
    global = "global",
    provide = "provide",
    local = "local"
}

export type ExecuteUseReturn<R> = Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>;

/**
 * Creates a managed singleton instance with global, provide/inject, or local closure scope.
 * @remarks API clients, shared reactive state, resource optimization, and singleton third-party SDKs.
 * @keywords singleton, provide, inject, global, local, instance, state management
 */
export declare function executeUse<R, O extends any[], RI extends ExecuteUseReturn<R> = ExecuteUseReturn<R>>(callback: (...args: O) => R, type?: ExecuteUseType): ((...args: O) => RI) | (() => RI);

/** Creates an application-wide global singleton accessor. @keywords singleton, global, shared instance */
export declare function executeUseGlobal<R>(callback: () => R): (() => ExecuteUseReturn<R>);

/** Creates a component-tree scoped singleton accessor using provide/inject. @keywords singleton, provide, inject, vue */
export declare function executeUseProvide<R, O extends any[]>(callback: (...args: O) => R): ((...args: O) => ExecuteUseReturn<R>) | (() => ExecuteUseReturn<R>);

/** Creates a closure-scoped local singleton accessor. @keywords singleton, local, closure, cache */
export declare function executeUseLocal<R, O extends any[]>(callback: (...args: O) => R): ((...args: O) => ExecuteUseReturn<R>) | (() => ExecuteUseReturn<R>);

/** Initializes all registered global singleton instances. @keywords singleton, global init, prefetch */
export declare function executeUseGlobalInit(): void;