// md5:2854dba65050ceaff33575e14759d317 true
export type ErrorCenterGroup = string | undefined;

/** Error item descriptor with metadata and custom payload details. @keywords error cause item */
export type ErrorCenterCauseItem<D = any> = {
  group?: ErrorCenterGroup;
  code: string;
  priority?: number;
  label?: string;
  message?: string;
  details?: D;
};

export type ErrorCenterCauseList = ErrorCenterCauseItem[];

/** Callback function for processing error items. @keywords error handler callback */
export type ErrorCenterHandlerCallback = (cause: ErrorCenterCauseItem) => void;

/** Error handler registration entry mapped to an optional error group. @keywords error handler item */
export type ErrorCenterHandlerItem = {
  group?: ErrorCenterGroup;
  handlers: ErrorCenterHandlerCallback[];
};

export type ErrorCenterHandlerList = ErrorCenterHandlerItem[];

/** Predicate determining whether an error should be logged to the console. @keywords error console filter */
export type ErrorCenterHandlerIsConsoleCallback = (cause: ErrorCenterCauseItem) => boolean;

/** Console logging configuration flag or dynamic predicate. @keywords error console logging */
export type ErrorCenterHandlerIsConsole = boolean | ErrorCenterHandlerIsConsoleCallback;