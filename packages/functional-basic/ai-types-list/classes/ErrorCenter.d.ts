// md5:a408ec81ccc6f11b1354015fe7403b81 true
/** Manages error registration, storage, and handling. @keywords error management, handler, error center */
export declare class ErrorCenter {
    /** Retrieves an error cause by code and group. @keywords get error cause, find error */
    static get(code: string, group?: ErrorCenterGroup): ErrorCenterCauseItem | undefined;
    /** Checks whether an error cause exists by code and group. @keywords check error, has error */
    static has(code: string, group?: ErrorCenterGroup): boolean;
    /** Returns the active error handler instance. @keywords error handler, get handler */
    static getHandler(): ErrorCenterHandler;
    /** Returns the ErrorCenterInstance for the active storage context. @keywords error instance, storage context */
    static getItem(): ErrorCenterInstance;
    /** Sets console logging flag or filter predicate for errors. @keywords console logging, debug output, filter */
    static setIsConsole(isConsole: ErrorCenterHandlerIsConsole): void;
    /** Registers an error cause in storage. @keywords add error, register cause */
    static add(cause: ErrorCenterCauseItem): void;
    /** Adds a global callback invoked on any error occurrence. @keywords error callback, global listener */
    static addCallback(callback: ErrorCenterHandlerCallback): void;
    /** Registers an error handler callback for a specific group. @keywords group handler, error listener */
    static addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): void;
    /** Registers a batch list of error handlers. @keywords batch handlers, register list */
    static addHandlerList(handlers: ErrorCenterHandlerList): void;
    /** Adds multiple error causes to storage. @keywords batch causes, add list */
    static addList(causes: ErrorCenterCauseList): void;
    /** Removes an error cause from storage by code and optional group. @keywords remove error, delete cause */
    static remove(code: string, group?: ErrorCenterGroup): void;
    /** Removes a registered global error callback. @keywords remove callback, unsubscribe */
    static removeCallback(callback: ErrorCenterHandlerCallback): void;
    /** Removes a specific handler or all handlers for a group. @keywords remove handler, unregister group */
    static removeHandler(group?: ErrorCenterGroup, handler?: ErrorCenterHandlerCallback): void;
    /** Resets all registered handlers and callbacks. @keywords reset, clear handlers */
    static reset(): void;
    /** Triggers error handling workflow for a given error cause. @keywords trigger error, dispatch error, handle */
    static on(cause: ErrorCenterCauseItem): void;
}