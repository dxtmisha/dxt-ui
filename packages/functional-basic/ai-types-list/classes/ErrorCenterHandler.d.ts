// md5:e83550df89e05c1187ed3a994f4b7576 true
/** Manages and triggers error handlers by group or globally. @keywords error center, handler, error handling */
export declare class ErrorCenterHandler {
    /** Initializes the error center handler manager. @keywords constructor, init */
    constructor(handlers?: ErrorCenterHandlerList, isConsole?: ErrorCenterHandlerIsConsole);
    /** Checks if handlers exist for a specific error group. @keywords has, error group, check */
    has(group: ErrorCenterGroup): boolean;
    /** Retrieves handlers associated with an error group. @keywords get, handler item */
    get(group: ErrorCenterGroup): ErrorCenterHandlerItem | undefined;
    /** Registers an error handler callback for a specific group. @keywords add, register, error handler */
    add(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this;
    /** Registers a list of group-based error handlers. @keywords add list, batch register */
    addList(handlers: ErrorCenterHandlerList): this;
    /** Registers a global callback executed on any error. @keywords add callback, global handler */
    addCallback(callback: ErrorCenterHandlerCallback): this;
    /** Sets the console logging flag or filter predicate. @keywords console output, logging, filter */
    setIsConsole(isConsole: ErrorCenterHandlerIsConsole): this;
    /** Dispatches error handlers matching the cause and handles console logging. @keywords dispatch, trigger, handle error */
    on(cause: ErrorCenterCauseItem): this;
}