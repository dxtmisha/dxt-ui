// md5:2a75c77eadc20b9c4087fb179e60eb4a true
export declare enum ExecuteUseType {
    global = "global",
    provide = "provide",
    local = "local"
}
/** Management methods attached to managed singleton containers. @keywords management, lifecycle, container */
export interface ExecuteUseManagement<R extends object | void> {
    /** Returns the original factory result without management wrapper. @keywords init, unwrap, raw, container */
    init(): Readonly<R>;
    /** Fallback returning original factory result when init is already occupied. @keywords fallback, init, unwrap, raw */
    _init(): Readonly<R>;
    /** Removes cached local instance or resets global singleton and stops its effect scope. @keywords destroy, reset, dispose, cache */
    destroyExecute?(): void;
    /** Fallback resetting local or global instance when destroyExecute is already occupied. @keywords fallback, destroy, reset, dispose */
    _destroyExecute?(): void;
}
/** Readonly container merged with singleton management methods. @keywords container, management, readonly */
export type ExecuteUseReturn<R extends object | void> = Readonly<string extends keyof R ? Omit<R, keyof ExecuteUseManagement<R>> & ExecuteUseManagement<R> : R & Omit<ExecuteUseManagement<R>, keyof R>>;
/**
 * Creates a managed singleton encapsulating initialization logic and access strategy.
 * @keywords singleton, factory, provide, inject, local, global, di
 * @remarks Outer container must be a plain object or void; class instances or reactive proxies must be nested inside.
 * @warning Global factories are called with zero arguments during executeUseGlobalInit; do not declare mandatory parameters.
 * @note Provide strategy requires an active Vue setup() context; outside injection context, a fresh instance is returned per call.
 * @example
 * const useCounter = executeUseLocal((initialCount: number) => {
 *   const count = ref(initialCount)
 *   const increment = (): void => { count.value++ }
 *   return { count, increment }
 * })
 * const counter = useCounter(0)
 * counter.increment()
 */
export declare function executeUse<R extends object | void, O extends unknown[], RI extends ExecuteUseReturn<R> = ExecuteUseReturn<R>>(callback: (...args: O) => R, type?: ExecuteUseType): (...args: O) => RI;
/**
 * Creates a runtime-wide singleton shared across all SSR requests.
 * @keywords global, singleton, ssr, process, shared
 * @remarks Do not store user-specific state or capture request-scoped dependencies during SSR.
 */
export declare function executeUseGlobal<R extends object | void>(callback: () => R): () => ExecuteUseReturn<R>;
/**
 * Creates a component-scoped singleton shared via Vue provide/inject.
 * @keywords provide, inject, vue, component, scope
 * @remarks Requires an active Vue component setup() context; outside injection context, returns a fresh non-cached instance.
 */
export declare function executeUseProvide<R extends object | void, O extends unknown[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>;
/**
 * Creates a lazy singleton scoped to the current ServerStorage context.
 * @keywords local, storage, context, lazy, singleton
 * @remarks Effects run in a child scope of EffectScopeGlobal, survive disposal of the caller's scope, and stop on destroyExecute().
 */
export declare function executeUseLocal<R extends object | void, O extends unknown[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>;
/** Initializes all registered global singletons without clearing the shared registry. @keywords global, init, startup, eager */
export declare function executeUseGlobalInit(): void;