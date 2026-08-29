// md5:664f73aba341cad33f0ebccc58d9f842 true
/** Class for managing error storage and handling. @keywords error, storage, handling, error-center */
export declare class ErrorCenter {
    /** Returns a request-isolated instance of ErrorCenterInstance. @keywords get-item, instance, isolate */
    static getItem(): ErrorCenterInstance;
    /** Checks if an error cause exists by code and optional group. @keywords has, check, error-cause */
    static has(code: string, group?: string): boolean;
    /** Gets an error cause by code and optional group. @keywords get, find, error-cause */
    static get(code: string, group?: string): ErrorCenterCauseItem | undefined;
    /** Adds an error cause to the storage. @keywords add, register, error-cause */
    static add(cause: ErrorCenterCauseItem): void;
    /** Adds a list of error causes to the storage. @keywords add-list, bulk-add, error-causes */
    static addList(causes: ErrorCenterCauseList): void;
    /** Registers an error handler for a specific group. @keywords add-handler, register-handler, error-group */
    static addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): void;
    /** Registers multiple error handlers. @keywords add-handler-list, handlers */
    static addHandlerList(handlers: ErrorCenterHandlerList): void;
    /** Adds a callback executed on any error. @keywords add-callback, global-handler, on-error */
    static addCallback(callback: ErrorCenterHandlerCallback): void;
    /** Sets console output flag or filter function. @keywords set-is-console, logger, console-output */
    static setIsConsole(isConsole: ErrorCenterHandlerIsConsole): void;
    /** Triggers error handling for an error cause. @keywords on, trigger, dispatch, handle-error */
    static on(cause: ErrorCenterCauseItem): void;
}