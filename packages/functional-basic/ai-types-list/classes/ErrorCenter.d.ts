// md5:10bb4a74ef54e395551594cd06bcb77d true
/** Manages error storage and dispatching. @keywords error management, handler, error center */
export declare class ErrorCenter {
    /** Retrieves a specific error cause by code and group. @keywords get error, find cause */
    static get(code: string, group?: ErrorCenterGroup): ErrorCenterCauseItem | undefined;
    /** Returns the error handler instance. @keywords error handler, get handler */
    static getHandler(): ErrorCenterHandler;
    /** Checks if an error cause exists for a code and group. @keywords check error, has cause */
    static has(code: string, group?: ErrorCenterGroup): boolean;
    /** Returns the global singleton instance of ErrorCenterInstance. @keywords singleton, instance */
    static getItem(): ErrorCenterInstance;
    /** Configures console logging flag or filter for errors. @keywords console log, filter, debug */
    static setIsConsole(isConsole: ErrorCenterHandlerIsConsole): void;
    /** Adds an error cause item to storage. @keywords add error, register cause */
    static add(cause: ErrorCenterCauseItem): void;
    /** Registers a global callback executed on any error. @keywords global error callback, listener */
    static addCallback(callback: ErrorCenterHandlerCallback): void;
    /** Registers an error handler for a specific group. @keywords register handler, group error */
    static addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): void;
    /** Registers multiple error handlers simultaneously. @keywords batch handlers, handler list */
    static addHandlerList(handlers: ErrorCenterHandlerList): void;
    /** Adds a list of error causes to storage. @keywords batch causes, error list */
    static addList(causes: ErrorCenterCauseList): void;
    /** Removes an error cause from storage by code and group. @keywords remove error, delete cause */
    static remove(code: string, group?: ErrorCenterGroup): void;
    /** Removes a specific handler or all handlers for a group. @keywords remove handler, unregister */
    static removeHandler(group?: ErrorCenterGroup, handler?: ErrorCenterHandlerCallback): void;
    /** Removes a registered global callback. @keywords remove callback, unbind */
    static removeCallback(callback: ErrorCenterHandlerCallback): void;
    /** Resets all registered handlers and callbacks. @keywords reset, clear handlers */
    static reset(): void;
    /** Dispatches error handling for a given cause. @keywords trigger error, dispatch, notify */
    static on(cause: ErrorCenterCauseItem): void;
}