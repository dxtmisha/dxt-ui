// md5:08e2f4e574ad845f039767104a4c7fd6 true
/** Manage error storage and handling within an instance @keywords error_center instance handler */
export declare class ErrorCenterInstance {
    /** @keywords constructor init */
    constructor(causes?: ErrorCenterCauseList, handler?: ErrorCenterHandler);
    /** Check if error cause exists @keywords check exists error cause */
    has(code: string, group?: string): boolean;
    /** Get specific error cause item @keywords get error cause */
    get(code: string, group?: string): ErrorCenterCauseItem | undefined;
    /** Add error cause to storage @keywords add error cause */
    add(cause: ErrorCenterCauseItem): this;
    /** Add list of error causes to storage @keywords add error cause list */
    addList(causes: ErrorCenterCauseList): this;
    /** Register new error handler @keywords add error handler */
    addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this;
    /** Register list of error handlers @keywords add error handler list */
    addHandlerList(handlers: ErrorCenterHandlerList): this;
    /** Add global error callback @keywords add error callback */
    addCallback(callback: ErrorCenterHandlerCallback): this;
    /** Set console output option @keywords set console output */
    setIsConsole(isConsole: ErrorCenterHandlerIsConsole): this;
    /** Trigger error handling @keywords trigger handle error */
    on(cause: ErrorCenterCauseItem): this;
    /** Merge cause with stored data @keywords assign merge error cause */
    protected assign(cause: ErrorCenterCauseItem): ErrorCenterCauseItem;
}