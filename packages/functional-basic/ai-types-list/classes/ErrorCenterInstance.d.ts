// md5:d749d38cccc72a3489289e451b641041 true
/** Manages error storage and handling within an instance. @keywords error center, error manager, error storage */
export declare class ErrorCenterInstance {
    /** Initializes the error center instance with optional causes and handler. @keywords constructor, error center */
    constructor(causes?: ErrorCenterCauseList, handler?: ErrorCenterHandler);
    /** Checks if an error cause exists by code and optional group. @keywords error check, has cause */
    has(code: string, group?: string): boolean;
    /** Retrieves an error cause item by code and optional group. @keywords get error, find cause */
    get(code: string, group?: string): ErrorCenterCauseItem | undefined;
    /** Adds an error cause item to storage. @keywords add error, register cause */
    add(cause: ErrorCenterCauseItem): this;
    /** Adds a list of error causes to storage. @keywords add error list, batch causes */
    addList(causes: ErrorCenterCauseList): this;
    /** Registers an error handler callback for a specific group. @keywords add handler, register callback */
    addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this;
    /** Registers multiple error handlers from a list. @keywords add handlers, batch handlers */
    addHandlerList(handlers: ErrorCenterHandlerList): this;
    /** Registers a global callback executed on any error. @keywords error callback, global listener */
    addCallback(callback: ErrorCenterHandlerCallback): this;
    /** Sets console logging behavior or filter function. @keywords console logging, debug output */
    setIsConsole(isConsole: ErrorCenterHandlerIsConsole): this;
    /** Triggers error handling for an error cause item. @keywords trigger error, dispatch cause */
    on(cause: ErrorCenterCauseItem): this;
}