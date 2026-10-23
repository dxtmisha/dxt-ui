// md5:3140f4e4ee8f0c79032b7a879069fe38 true
/** Static utility class for storing and retrieving application-wide global data. @keywords global state, storage, registry */
export declare class Global {
    /** Retrieves a global value by property name. @keywords get, lookup, retrieve, state */
    static get<R = unknown>(name: string): R;
    /** Returns the entire global data storage record. @keywords storage, state, get all, dictionary */
    static getItem(): Record<string, unknown>;
    /** Initializes global data once. @keywords add, initialize, set global */
    static add(data: Record<string, unknown>): void;
}