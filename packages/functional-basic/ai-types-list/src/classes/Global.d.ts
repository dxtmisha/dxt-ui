// md5:3092649fdf8dca8dd4aca9e7545e1c50 true
/** Static utility class for storing and retrieving application-wide global data. @keywords global, state, store, registry */
export declare class Global {
    /** Retrieves the entire global data storage object. @keywords store, storage, state */
    static getItem(): Record<string, any>;
    /** Retrieves a stored value by property name. @keywords get, property, value */
    static get<R = any>(name: string): R;
    /** Registers global data (executes only once). @keywords add, init, set */
    static add(data: Record<string, any>): void;
}