// md5:d749d38cccc72a3489289e451b641041 true
/** Manages error cause storage and error handling. @keywords error center, errors, exception management */
export declare class ErrorCenterInstance {
    /** Initializes error causes and handler. @keywords constructor, init */
    constructor(causes?: ErrorCenterCauseList, handler?: ErrorCenterHandler);
    /** Checks if an error cause exists by code and group. @keywords has, check error, error code */
    has(code: string, group?: string): boolean;
    /** Retrieves an error cause by code and group. @keywords get, find error, cause */
    get(code: string, group?: string): ErrorCenterCauseItem | undefined;
    /** Adds an error cause to storage. @keywords add error, register cause */
    add(cause: ErrorCenterCauseItem): this;
    /** Adds multiple error causes to storage. @keywords add list, bulk error causes */
    addList(causes: ErrorCenterCauseList): this;
    /** Registers an error handler callback for a specific group. @keywords add handler, group handler */
    addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this;
    /** Registers multiple error handlers from a list. @keywords add handler list, bulk handlers */
    addHandlerList(handlers: ErrorCenterHandlerList): this;
    /** Registers a global callback executed on any error. @keywords callback, error listener */
    addCallback(callback: ErrorCenterHandlerCallback): this;
    /** Sets console logging behavior or filter function. @keywords console log, error output, debug */
    setIsConsole(isConsole: ErrorCenterHandlerIsConsole): this;
    /** Triggers error handling for the specified cause. @keywords trigger error, emit error, handle */
    on(cause: ErrorCenterCauseItem): this;
}