// md5:91137859854f3aa65c8725235370b81b true
/** Error storage and centralized handling manager. @keywords error, center, manager, storage, handling */
export declare class ErrorCenter {
    /** Retrieves an error cause by code and optional group. @keywords get, error cause, lookup, code, group */
    static get(code: string, group?: string): ErrorCenterCauseItem | undefined;
    /** Checks whether an error cause exists by code and optional group. @keywords has, exists, check, error cause */
    static has(code: string, group?: string): boolean;
    /** Returns the global singleton instance of ErrorCenterInstance. @keywords singleton, instance, error center */
    static getItem(): ErrorCenterInstance;
    /** Configures console logging behavior or custom filter for errors. @keywords console, logging, debug, filter */
    static setIsConsole(isConsole: ErrorCenterHandlerIsConsole): void;
    /** Registers a single error cause in storage. @keywords add, register, error cause */
    static add(cause: ErrorCenterCauseItem): void;
    /** Registers a global callback executed on any triggered error. @keywords callback, listener, global, on error */
    static addCallback(callback: ErrorCenterHandlerCallback): void;
    /** Registers an error handler callback for a specific group. @keywords handler, group, error listener */
    static addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): void;
    /** Registers multiple group-specific error handlers. @keywords handler list, batch register, error handlers */
    static addHandlerList(handlers: ErrorCenterHandlerList): void;
    /** Registers a list of error causes in storage. @keywords batch add, error cause list, register */
    static addList(causes: ErrorCenterCauseList): void;
    /** Triggers error handling workflow for the specified error cause. @keywords trigger, dispatch, handle, error */
    static on(cause: ErrorCenterCauseItem): void;
}