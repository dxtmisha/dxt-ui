// md5:f71613eec1779133071539b82a40fb56 true
export type ErrorCenterGroup = string | undefined;
/** Error cause item descriptor. @keywords error cause details */
export type ErrorCenterCauseItem<D = any> = {
    group?: ErrorCenterGroup;
    code: string;
    priority?: number;
    label?: string;
    message?: string;
    details?: D;
};
export type ErrorCenterCauseList = ErrorCenterCauseItem[];
/** Callback function for processing error causes. @keywords error handler callback */
export type ErrorCenterHandlerCallback = (cause: ErrorCenterCauseItem) => void | Promise<void>;
/** Error handler registration mapping an optional group to callback handlers. @keywords error handler item */
export type ErrorCenterHandlerItem = {
    group?: ErrorCenterGroup;
    handlers: ErrorCenterHandlerCallback[];
};
export type ErrorCenterHandlerList = ErrorCenterHandlerItem[];
/** Predicate callback to check whether an error should be logged to console. @keywords error console predicate */
export type ErrorCenterHandlerIsConsoleCallback = (cause: ErrorCenterCauseItem) => boolean;
export type ErrorCenterHandlerIsConsole = boolean | ErrorCenterHandlerIsConsoleCallback;