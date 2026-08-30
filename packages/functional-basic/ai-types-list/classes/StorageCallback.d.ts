// md5:abe9d7a2652056a2160ade213aa198f7 true
/** Manages storage callback lists and execution state. @keywords storage callback subscriber listener */
export declare class StorageCallback<T = any, Callback = (value: T) => void | Promise<void>> {
    /** Gets a StorageCallback singleton instance by name and group. @keywords singleton instance storage */
    static getInstance<T>(name: string, group?: string): StorageCallback<T, (value: T) => void | Promise<void>>;
    /** Initializes a new StorageCallback instance. @keywords constructor init */
    constructor(name: string, group?: string);
    /** Checks whether storage is currently in a loading state. @keywords loading state check */
    isLoading(): boolean;
    /** Gets the storage identifier name. @keywords name identifier */
    getName(): string;
    /** Gets the current loading state value. @keywords loading status */
    getLoading(): boolean;
    /** Subscribes a callback function to storage events. @keywords subscribe listener add once */
    addCallback(callback: Callback, isOnce?: boolean): this;
    /** Unsubscribes a callback function from storage events. @keywords unsubscribe listener remove */
    removeCallback(callback: Callback): this;
    /** Prepares storage callback state prior to execution. @keywords prepare init state */
    preparation(): this;
    /** Executes all registered callbacks asynchronously with the provided value. @keywords trigger emit execute dispatch */
    run(value: T): Promise<this>;
}