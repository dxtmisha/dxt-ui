// md5:3092649fdf8dca8dd4aca9e7545e1c50 true
/** Static utility class for storing and retrieving application-wide global data. @keywords global state storage data */
export declare class Global {
    /** Returns global data storage instance. @keywords global storage data */
    static getItem(): Record<string, any>;
    /** Returns a value by its property name. @keywords get global value property */
    static get<R = any>(name: string): R;
    /** Adds global data (works only once). @keywords add set global data init */
    static add(data: Record<string, any>): void;
}