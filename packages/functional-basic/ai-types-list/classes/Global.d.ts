// md5:39d6b567458e3f6d9833d52ee2b8c657 true
/** Static utility class for storing and retrieving application-wide global data. @keywords global, state, store, registry */
export declare class Global {
    /** Returns a global value by property name. @keywords get, global value, retrieve */
    static get<R = unknown>(name: string): R | undefined;
    /** Stores the first non-empty set of safe properties in the global registry. @keywords add, register, set, global data */
    static add(data: Record<string, unknown>): void;
}