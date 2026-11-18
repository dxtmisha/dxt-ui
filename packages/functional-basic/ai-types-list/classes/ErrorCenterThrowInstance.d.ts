// md5:0369b350b5357115032436e4ef87d580 true
/** Dispatches errors to ErrorCenterInstance (defaulting to the active static instance) and throws ErrorCenterError. @keywords errorCenter throw wrapper dispatch */
export declare class ErrorCenterThrowInstance {
    /** Creates an ErrorCenterThrowInstance with an optional custom ErrorCenterInstance. @keywords constructor init errorCenter */
    constructor(errorCenter?: ErrorCenterInstance);
    /** Triggers ErrorCenter error handling for the given cause and always throws ErrorCenterError. @keywords throw trigger dispatch error cause */
    on<D = unknown>(cause: ErrorCenterCauseItem<D>, options?: ErrorOptions): never;
    /** Handles a caught error without double-reporting existing ErrorCenterError instances and always throws ErrorCenterError. @keywords handle catch deduplicate rethrow */
    handle<D = unknown>(cause: ErrorCenterCauseItem<D>, error?: unknown, options?: ErrorOptions): never;
}