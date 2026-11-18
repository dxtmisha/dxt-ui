// md5:b940e84014aa6b745836ac4ce2795305 true
/** Manages error storage and handling across groups. @keywords error center, storage, handler, registry */
export declare class ErrorCenter {
    /** Gets a stored error cause by code and optional group. @keywords get error cause, lookup, code, group */
    static get(code: string, group?: ErrorCenterGroup): ErrorCenterCauseItem | undefined;
    /** Checks if an error cause exists for the given code and optional group. @keywords has error, exists, check cause */
    static has(code: string, group?: ErrorCenterGroup): boolean;
    /** Returns the active error handler instance. @keywords get handler, error handler instance */
    static getHandler(): ErrorCenterHandler;
    /** Returns the ErrorCenterInstance for the active storage context. @keywords get item, instance, storage context */
    static getItem(): ErrorCenterInstance;
    /** Sets the console logging flag or filter function for errors. @keywords console output, logging, filter, setIsConsole */
    static setIsConsole(isConsole: ErrorCenterHandlerIsConsole): void;
    /** Adds a single error cause definition to storage. @keywords add cause, register error */
    static add(cause: ErrorCenterCauseItem): void;
    /** Registers a global callback executed on any error. @keywords add callback, global listener, error hook */
    static addCallback(callback: ErrorCenterHandlerCallback): void;
    /** Registers an error handler callback for a specific group. @keywords add handler, group handler, register */
    static addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): void;
    /** Registers multiple group error handlers at once. @keywords add handler list, batch register handlers */
    static addHandlerList(handlers: ErrorCenterHandlerList): void;
    /** Adds multiple error cause definitions to storage. @keywords add list, batch add causes */
    static addList(causes: ErrorCenterCauseList): void;
    /** Removes an error cause from storage by code and optional group. @keywords remove cause, delete error */
    static remove(code: string, group?: ErrorCenterGroup): void;
    /** Removes a previously registered global error callback. @keywords remove callback, unregister global listener */
    static removeCallback(callback: ErrorCenterHandlerCallback): void;
    /** Removes a specific handler or all handlers for a group. @keywords remove handler, unregister group handler */
    static removeHandler(group?: ErrorCenterGroup, handler?: ErrorCenterHandlerCallback): void;
    /** Resets all registered handlers and global callbacks. @keywords reset handlers, clear callbacks */
    static reset(): void;
    /** Merges an input error cause with stored cause metadata. @keywords assign cause, merge error data */
    static assign<D = unknown>(cause: ErrorCenterCauseItem<D>): ErrorCenterCauseItem<D>;
    /** Triggers error handling for the specified error cause. @keywords trigger error, emit, dispatch, on */
    static on(cause: ErrorCenterCauseItem): void;
}