// md5:28398f71aeeebe425ab34a94c9eaeca1 true
/** Manages storage callback lists and execution workflows. @keywords storage, callback, listener, event */
export declare class StorageCallback<T = unknown, Callback = (value: T) => void | Promise<void>> {
    /** Initializes a new StorageCallback instance. @keywords constructor, init */
    constructor(name: string, group?: string);
    /** Checks if callbacks are currently executing. @keywords loading, state, status */
    isLoading(): boolean;
    /** Retrieves or creates a cached instance by name and optional group. @keywords singleton, getInstance */
    static getInstance<T>(name: string, group?: string): StorageCallback<T>;
    /** Returns the current loading state. @keywords loading, state, status */
    getLoading(): boolean;
    /** Returns the storage identifier name. @keywords name, identifier, key */
    getName(): string;
    /** Registers a callback with optional one-time execution. @keywords addCallback, subscribe, listener, once */
    addCallback(callback: Callback, isOnce?: boolean): this;
    /** Unregisters a callback from the list. @keywords removeCallback, unsubscribe, listener */
    removeCallback(callback: Callback): this;
    /** Prepares callback execution state before launch. @keywords preparation, setup, lifecycle */
    preparation(): this;
    /** Executes all registered callbacks, consuming one-time registrations before invocation. @keywords run, execute, dispatch, notify */
    run(value: T): Promise<this>;
}