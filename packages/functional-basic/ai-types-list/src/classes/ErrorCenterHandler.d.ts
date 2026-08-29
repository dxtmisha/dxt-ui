// md5:e83550df89e05c1187ed3a994f4b7576 true
/** Class for managing and triggering error handlers. @keywords error, handler, error center, dispatch */
export declare class ErrorCenterHandler {
  /** Initializes error handler instance with optional handlers and console logging settings. @keywords constructor, error handler */
  constructor(handlers?: ErrorCenterHandlerList, isConsole?: ErrorCenterHandlerIsConsole);
  /** Checks if handlers exist for a group. @keywords has, check, error group */
  has(group: ErrorCenterGroup): boolean;
  /** Gets handlers registered for a group. @keywords get, find, error group */
  get(group: ErrorCenterGroup): ErrorCenterHandlerItem | undefined;
  /** Registers a handler callback for a specific error group. @keywords add, register, error handler */
  add(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this;
  /** Registers multiple group-based error handlers. @keywords addList, batch register */
  addList(handlers: ErrorCenterHandlerList): this;
  /** Registers a universal callback executed on any error. @keywords addCallback, global handler */
  addCallback(callback: ErrorCenterHandlerCallback): this;
  /** Configures console logging flag or filter predicate. @keywords setIsConsole, console, logger */
  setIsConsole(isConsole: ErrorCenterHandlerIsConsole): this;
  /** Triggers registered handlers for an error cause and performs logging. @keywords on, trigger, dispatch, emit */
  on(cause: ErrorCenterCauseItem): this;
}