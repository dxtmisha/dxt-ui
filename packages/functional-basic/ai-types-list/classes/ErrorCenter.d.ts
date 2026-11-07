// md5:378ebd362c8895d775a28289ba0b5afb true
/** Class for managing error storage and handling. @keywords error center, error manager, error storage */
export declare class ErrorCenter {
    /** Checks if an error cause with a specific code exists. @keywords error exists, check error */
    static has(code: string, group?: ErrorCenterGroup): boolean;
    /** Gets an error cause by code and group. @keywords get error, find error cause */
    static get(code: string, group?: ErrorCenterGroup): ErrorCenterCauseItem | undefined;
    /** Returns the error handler instance. @keywords error handler, get handler */
    static getHandler(): ErrorCenterHandler;
    /** Returns the ErrorCenterInstance for the active storage context. @keywords error instance, error context */
    static getItem(): ErrorCenterInstance;
    /** Sets the console output flag or filter function. @keywords console logging, error console, filter */
    static setIsConsole(isConsole: ErrorCenterHandlerIsConsole): void;
    /** Adds an error cause to the storage. @keywords add error, register cause */
    static add(cause: ErrorCenterCauseItem): void;
    /** Adds a callback executed on any error. @keywords error callback, global error listener */
    static addCallback(callback: ErrorCenterHandlerCallback): void;
    /** Registers an error handler for a specific group. @keywords group handler, register handler */
    static addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): void;
    /** Registers a list of error handlers. @keywords register handlers, handler list */
    static addHandlerList(handlers: ErrorCenterHandlerList): void;
    /** Adds a list of error causes to the storage. @keywords add error list, batch causes */
    static addList(causes: ErrorCenterCauseList): void;
    /** Removes an error cause by code and group. @keywords remove error, delete cause */
    static remove(code: string, group?: ErrorCenterGroup): void;
    /** Removes a global error callback. @keywords remove callback, unbind listener */
    static removeCallback(callback: ErrorCenterHandlerCallback): void;
    /** Removes a handler or all handlers for a group. @keywords remove handler, unregister handler */
    static removeHandler(group?: ErrorCenterGroup, handler?: ErrorCenterHandlerCallback): void;
    /** Resets registered handlers and callbacks. @keywords reset errors, clear handlers */
    static reset(): void;
    /** Triggers error handling for an error cause. @keywords trigger error, handle error, emit error */
    static on(cause: ErrorCenterCauseItem): void;
}