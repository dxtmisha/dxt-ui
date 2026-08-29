// md5:abe9d7a2652056a2160ade213aa198f7 true
/** Manages storage callback lists and execution state. @keywords storage, callback, listener, event */
export declare class StorageCallback<T = any, Callback = (value: T) => void | Promise<void>> {
    /** Returns or creates a StorageCallback instance by name and group. @keywords singleton, instance, lookup */
    static getInstance<T>(name: string, group?: string): StorageCallback<T, (value: T) => void | Promise<void>>;
    /** Initializes storage callback instance. @keywords constructor, init */
    constructor(name: string, group?: string);
    /** Checks whether storage is currently loading. @keywords loading, state, status */
    isLoading(): boolean;
    /** Gets the storage name. @keywords name, identifier */
    getName(): string;
    /** Gets the current loading state. @keywords loading, state */
    getLoading(): boolean;
    /** Adds a callback listener to the storage. @keywords subscribe, add listener, watch */
    addCallback(callback: Callback, isOnce?: boolean): this;
    /** Removes a callback listener from the storage. @keywords unsubscribe, remove listener */
    removeCallback(callback: Callback): this;
    /** Prepares state before callback execution. @keywords prepare, preload, setup */
    preparation(): this;
    /** Executes all registered callbacks with the provided storage value. @keywords trigger, dispatch, execute, emit */
    run(value: T): Promise<this>;
}