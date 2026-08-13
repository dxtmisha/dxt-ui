// md5:2f325db308ee95623651bcdd679137d1 true
/** ErrorCenterHandler class for managing and triggering error handlers. @keywords error center handler */
export declare class ErrorCenterHandler {
    /** Constructor @keywords constructor error handler */
    constructor(handlers?: ErrorCenterHandlerList, isConsole?: ErrorCenterHandlerIsConsole);
    /** Checks if handlers exist for a group. @keywords has error group */
    has(group: ErrorCenterGroup): boolean;
    /** Gets handlers for a group. @keywords get error group */
    get(group: ErrorCenterGroup): ErrorCenterHandlerItem | undefined;
    /** Adds a handler for a specific group. @keywords add error handler */
    add(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this;
    /** Adds a list of group-based handlers. @keywords add error handler list */
    addList(handlers: ErrorCenterHandlerList): this;
    /** Adds a callback to be executed on any error. @keywords add error callback */
    addCallback(callback: ErrorCenterHandlerCallback): this;
    /** Sets console output flag or filter function. @keywords set error console */
    setIsConsole(isConsole: ErrorCenterHandlerIsConsole): this;
    /** Triggers handlers for a group and logs to console. @keywords trigger error on */
    on(cause: ErrorCenterCauseItem): this;
}