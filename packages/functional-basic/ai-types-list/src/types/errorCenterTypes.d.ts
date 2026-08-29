// md5:2854dba65050ceaff33575e14759d317 true
export type ErrorCenterGroup = string | undefined;

/** Error cause descriptor containing code, priority, message, and metadata @keywords error, cause, details */
export type ErrorCenterCauseItem<D = any> = {
  group?: ErrorCenterGroup;
  code: string;
  priority?: number;
  label?: string;
  message?: string;
  details?: D;
};

export type ErrorCenterCauseList = ErrorCenterCauseItem[];

/** Error handling callback function @keywords error, handler, callback */
export type ErrorCenterHandlerCallback = (cause: ErrorCenterCauseItem) => void;

/** Error handler storage item mapped to a group @keywords error, handler, group */
export type ErrorCenterHandlerItem = {
  group?: ErrorCenterGroup;
  handlers: ErrorCenterHandlerCallback[];
};

export type ErrorCenterHandlerList = ErrorCenterHandlerItem[];

/** Predicate determining whether an error should be logged to the console @keywords error, console, predicate */
export type ErrorCenterHandlerIsConsoleCallback = (cause: ErrorCenterCauseItem) => boolean;

export type ErrorCenterHandlerIsConsole = boolean | ErrorCenterHandlerIsConsoleCallback;