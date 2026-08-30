// md5:664f73aba341cad33f0ebccc58d9f842 true
/** Error management and handling center. @keywords error, handler, registry, storage */
export declare class ErrorCenter {
    /** Returns request-isolated ErrorCenter instance. @keywords instance, singleton, context */
    static getItem(): ErrorCenterInstance;
    /** Checks if an error cause exists by code and optional group. @keywords exists, check, has */
    static has(code: string, group?: string): boolean;
    /** Retrieves an error cause item by code and group. @keywords get, find, cause */
    static get(code: string, group?: string): ErrorCenterCauseItem | undefined;
    /** Registers an error cause. @keywords add, register, cause */
    static add(cause: ErrorCenterCauseItem): void;
    /** Registers multiple error causes. @keywords addList, batch, causes */
    static addList(causes: ErrorCenterCauseList): void;
    /** Registers an error handler for a specific group. @keywords handler, group, listen */
    static addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): void;
    /** Registers multiple error handlers. @keywords handlers, list, batch */
    static addHandlerList(handlers: ErrorCenterHandlerList): void;
    /** Registers a global callback executed on any error. @keywords callback, global, hook */
    static addCallback(callback: ErrorCenterHandlerCallback): void;
    /** Configures console output logging or filter. @keywords console, log, filter */
    static setIsConsole(isConsole: ErrorCenterHandlerIsConsole): void;
    /** Triggers error handling workflow for an error cause. @keywords trigger, dispatch, emit */
    static on(cause: ErrorCenterCauseItem): void;
}