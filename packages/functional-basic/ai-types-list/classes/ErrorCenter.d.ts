// md5:8533cfc1c0e0242583dec5ebb402532b true
/** Error management and storage class @keywords error center handler */
export declare class ErrorCenter {
    /** Returns request-isolated ErrorCenterInstance @keywords get item instance */
    static getItem(): ErrorCenterInstance;
    /** Checks if error cause exists @keywords has check error */
    static has(code: string, group?: string): boolean;
    /** Gets specific error cause @keywords get error cause */
    static get(code: string, group?: string): ErrorCenterCauseItem | undefined;
    /** Adds error cause @keywords add error cause */
    static add(cause: ErrorCenterCauseItem): void;
    /** Adds list of error causes @keywords add list causes */
    static addList(causes: ErrorCenterCauseList): void;
    /** Registers error handler @keywords add handler */
    static addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): void;
    /** Registers list of error handlers @keywords add handler list */
    static addHandlerList(handlers: ErrorCenterHandlerList): void;
    /** Adds global error callback @keywords add callback */
    static addCallback(callback: ErrorCenterHandlerCallback): void;
    /** Sets console output configuration @keywords set console */
    static setIsConsole(isConsole: ErrorCenterHandlerIsConsole): void;
    /** Triggers error event handling @keywords on error */
    static on(cause: ErrorCenterCauseItem): void;
}