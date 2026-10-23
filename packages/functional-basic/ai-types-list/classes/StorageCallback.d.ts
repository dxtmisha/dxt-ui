// md5:3765be7d636b69bd10eed837ccf48894 true
/** Manages storage callback lists and execution state. @keywords storage, callbacks, listeners */
export declare class StorageCallback<T = unknown, Callback = (value: T) => void | Promise<void>> {
    /** Initializes a storage callback manager. @keywords constructor, init */
    constructor(name: string, group?: string);
    /** Checks whether callbacks or storage are currently loading. @keywords loading, state, status */
    isLoading(): boolean;
    /** Returns or creates an instance by storage name and group. @keywords singleton, instance, lookup */
    static getInstance<T>(name: string, group?: string): StorageCallback<T>;
    /** Returns the current loading state. @keywords loading, state */
    getLoading(): boolean;
    /** Returns the storage name identifier. @keywords name, identifier */
    getName(): string;
    /** Registers a callback listener to the list. @keywords add, listener, callback, subscribe */
    addCallback(callback: Callback, isOnce?: boolean): this;
    /** Removes a callback listener from the list. @keywords remove, unsubscribe, callback */
    removeCallback(callback: Callback): this;
    /** Prepares state and data before execution. @keywords prepare, setup, init */
    preparation(): this;
    /** Executes all registered callbacks with the provided storage value. @keywords run, execute, notify, trigger */
    run(value: T): Promise<this>;
}