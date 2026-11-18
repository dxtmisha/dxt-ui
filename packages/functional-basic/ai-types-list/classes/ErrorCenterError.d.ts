// md5:20e13df7981b49ba99a0c3d121f74423 true
/** Custom Error subclass carrying structured ErrorCenter cause data with typed access to group, code, label, and details. @keywords ErrorCenterError, custom error, structured error, cause */
export declare class ErrorCenterError<D = unknown> extends Error {
    /** Creates an ErrorCenterError instance from structured cause data and optional Error options. @keywords constructor, ErrorCenterError, causeItem */
    constructor(causeItem: ErrorCenterCauseItem<D>, options?: ErrorOptions);
    /** Gets the full structured error cause item. @keywords getCauseItem, cause data, error metadata */
    getCauseItem(): ErrorCenterCauseItem<D>;
    /** Gets the error code. @keywords getCode, error code */
    getCode(): string;
    /** Gets the additional error details payload, if present. @keywords getDetails, error details, payload */
    getDetails(): D | undefined;
    /** Gets the error group identifier. @keywords getGroup, error group */
    getGroup(): ErrorCenterGroup;
    /** Gets the error label, if present. @keywords getLabel, error label */
    getLabel(): string | undefined;
    /** Gets the error message from the cause item, if present. @keywords getMessage, error message */
    getMessage(): string | undefined;
}