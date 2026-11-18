// md5:643bf2ad53096b84f5f8629d27e64f3b true
/** Static facade dispatching errors via ErrorCenter and throwing ErrorCenterError using request-isolated instances. @keywords error center throw static facade */
export declare class ErrorCenterThrow {
    /** Returns the ErrorCenterThrowInstance for the active storage context. @keywords error center throw instance context */
    static getItem(): ErrorCenterThrowInstance;
    /** Triggers ErrorCenter error handling for a group and throws an ErrorCenterError. @keywords throw error center cause dispatch */
    static on<D = unknown>(cause: ErrorCenterCauseItem<D>, options?: ErrorOptions): never;
    /** Handles a caught error and throws an ErrorCenterError without double-reporting existing instances. @keywords handle caught error center throw */
    static handle<D = unknown>(cause: ErrorCenterCauseItem<D>, error?: unknown, options?: ErrorOptions): never;
}