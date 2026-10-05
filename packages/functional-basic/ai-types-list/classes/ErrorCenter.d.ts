// md5:0fcb140838dcf0dbdcdf3e3ae0714c06 true
/** Manages error storage, registry, and handling. @keywords error center, error handling, error storage */
export declare class ErrorCenter {
    /** Returns a request-isolated instance of ErrorCenterInstance. @keywords get item, instance, request isolated */
    static getItem(): ErrorCenterInstance;
    /** Checks if an error cause exists by code and group. @keywords has error, check cause, exists */
    static has(code: string, group?: string): boolean;
    /** Retrieves an error cause item by code and group. @keywords get error cause, find error */
    static get(code: string, group?: string): ErrorCenterCauseItem | undefined;
    /** Adds an error cause item to storage. @keywords add error cause, register error */
    static add(cause: ErrorCenterCauseItem): void;
    /** Adds a list of error causes to storage. @keywords add error cause list, batch register */
    static addList(causes: ErrorCenterCauseList): void;
    /** Registers a handler callback for a specific error group. @keywords add error handler, register group handler */
    static addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): void;
    /** Registers a list of error handlers. @keywords add handler list, register handlers */
    static addHandlerList(handlers: ErrorCenterHandlerList): void;
    /** Adds a global callback to execute on any error event. @keywords add callback, global error listener */
    static addCallback(callback: ErrorCenterHandlerCallback): void;
    /** Configures console output logging flag or filter predicate. @keywords set is console, console output, error logging */
    static setIsConsole(isConsole: ErrorCenterHandlerIsConsole): void;
    /** Triggers error handling and dispatches handlers for a cause. @keywords trigger error, dispatch error, on error */
    static on(cause: ErrorCenterCauseItem): void;
}