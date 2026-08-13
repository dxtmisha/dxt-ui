// md5:724c9a1bd32fe32a6d1571b203242926 true
/** Base abstract class for URL-based state management. @keywords url_instance abstract state */
export declare abstract class UrlInstanceAbstract {
    /** Watchers map for URL state variables */
    protected watch: Record<string, ((value: any) => void)[]>;
    /** Update block flag */
    protected block: boolean;
    /** Timeout identifier */
    protected time: any;
    /** Data record storage */
    protected data: Record<string, any> | undefined;
    /** Get data by name with optional default value. @keywords get data */
    get<T>(name: string, defaultValue?: T | (() => T)): T;
    /** Set data value by name. @keywords set data */
    set<T>(name: string, callback: T | (() => T)): this;
    /** Add a watch callback for a specific property. @keywords add watch event */
    addWatch<T>(name: string, callback: (value: T) => void): this;
    /** Remove a watch callback. @keywords remove watch event */
    removeWatch<T>(name: string, callback: (value: T) => void): this;
    /** Reload state data. @keywords reload data */
    reload(): this;
    /** Get internal data record. @keywords get data record */
    protected getData(): Record<string, any>;
    /** Initialize internal data. @keywords init data */
    protected initData(): this;
    /** Trigger watch callbacks on change. @keywords make watch */
    protected makeWatch(location: Record<string, any>): this;
    /** Initialize instance and listeners. @keywords init */
    protected abstract init(): this;
    /** Get location data from URL. @keywords get location */
    protected abstract getLocation(): Record<string, any>;
    /** Update URL state representation. @keywords update */
    protected abstract update(): this;
}