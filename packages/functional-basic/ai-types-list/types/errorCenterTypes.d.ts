// md5:2854dba65050ceaff33575e14759d317 true
/** Manages error groups, codes, handlers, and console reporting. @keywords error_center, handler, management */
export declare class ErrorCenterHandler {
    /** List of error handlers grouped by category. @keywords error_handlers, group */
    handlers: ErrorCenterHandlerItem[];
    /** Global callbacks executed on any error. @keywords error_callbacks, global */
    callbacks: ErrorCenterHandlerCallback[];
    /** Configuration for console logging. @keywords console_logging, config */
    isConsole: ErrorCenterHandlerIsConsole;
    /** Initializes error center handler with optional initial list and console setting. @keywords constructor, init */
    constructor(e?: ErrorCenterHandlerList, t?: ErrorCenterHandlerIsConsole);
    /** Checks if a handler group exists. @keywords has_group, check */
    has(e: ErrorCenterGroup): boolean;
    /** Retrieves handler item by group. @keywords get_handler, lookup */
    get(e: ErrorCenterGroup): ErrorCenterHandlerItem | undefined;
    /** Adds a callback handler for a specific group. @keywords add_handler, register */
    add(e: ErrorCenterGroup, t: ErrorCenterHandlerCallback): this;
    /** Adds a list of handlers. @keywords add_list, batch */
    addList(e: ErrorCenterHandlerList): this;
    /** Adds a global error callback. @keywords add_callback, global */
    addCallback(e: ErrorCenterHandlerCallback): this;
    /** Sets console logging behavior. @keywords set_console, config */
    setIsConsole(e: ErrorCenterHandlerIsConsole): this;
    /** Triggers error handling for a given cause. @keywords trigger_error, dispatch */
    on(e: ErrorCenterCauseItem): this;
    /** Outputs error details to the console if enabled. @keywords log_console, print */
    toConsole(e: ErrorCenterCauseItem): this;
}
/** Manages causes and error handling pipelines. @keywords error_cause_manager, pipeline */
export declare class ErrorCenterInstance {
    /** Internal error handler instance. @keywords handler_instance, error_center */
    handler: ErrorCenterHandler;
    /** List of known error causes. @keywords causes_list, errors */
    causes: ErrorCenterCauseList;
    /** Initializes error instance with causes and handler. @keywords constructor, init */
    constructor(e?: ErrorCenterCauseList, t?: ErrorCenterHandler);
    /** Checks if a specific error cause exists. @keywords has_cause, check */
    has(e: string, t?: ErrorCenterGroup): boolean;
    /** Retrieves a specific error cause item. @keywords get_cause, lookup */
    get(e: string, t?: ErrorCenterGroup): ErrorCenterCauseItem | undefined;
    /** Adds a new error cause. @keywords add_cause, register */
    add(e: ErrorCenterCauseItem): this;
    /** Adds a list of error causes. @keywords add_causes, batch */
    addList(e: ErrorCenterCauseList): this;
    /** Adds an error handler for a group. @keywords add_handler, register */
    addHandler(e: ErrorCenterGroup, t: ErrorCenterHandlerCallback): this;
    /** Adds a list of error handlers. @keywords add_handlers, batch */
    addHandlerList(e: ErrorCenterHandlerList): this;
    /** Adds a global error callback. @keywords add_callback, global */
    addCallback(e: ErrorCenterHandlerCallback): this;
    /** Sets console logging behavior. @keywords set_console, config */
    setIsConsole(e: ErrorCenterHandlerIsConsole): this;
    /** Dispatches an error through the handler pipeline. @keywords trigger_error, dispatch */
    on(e: ErrorCenterCauseItem): this;
    /** Assigns or merges error details with a registered cause template. @keywords assign_cause, merge */
    assign(e: ErrorCenterCauseItem): ErrorCenterCauseItem;
}
/** Static accessor for global error management. @keywords error_center_static, global */
export declare class ErrorCenter {
    /** Retrieves the global error instance. @keywords get_item, instance */
    static getItem(): ErrorCenterInstance;
    /** Checks if a specific error cause exists globally. @keywords has_cause, check */
    static has(e: string, t?: ErrorCenterGroup): boolean;
    /** Retrieves a global error cause item. @keywords get_cause, lookup */
    static get(e: string, t?: ErrorCenterGroup): ErrorCenterCauseItem | undefined;
    /** Adds a global error cause. @keywords add_cause, register */
    static add(e: ErrorCenterCauseItem): void;
    /** Adds a list of global error causes. @keywords add_causes, batch */
    static addList(e: ErrorCenterCauseList): void;
    /** Adds a global error handler. @keywords add_handler, register */
    static addHandler(e: ErrorCenterGroup, t: ErrorCenterHandlerCallback): void;
    /** Adds a list of global error handlers. @keywords add_handlers, batch */
    static addHandlerList(e: ErrorCenterHandlerList): void;
    /** Adds a global error callback. @keywords add_callback, global */
    static addCallback(e: ErrorCenterHandlerCallback): void;
    /** Sets global console logging behavior. @keywords set_console, config */
    static setIsConsole(e: ErrorCenterHandlerIsConsole): void;
    /** Dispatches a global error. @keywords trigger_error, dispatch */
    static on(e: ErrorCenterCauseItem): void;
}
/** Error group identifier / Идентификатор группы ошибок */
export type ErrorCenterGroup = string | undefined;
/** Interface for an error item / Интерфейс для элемента ошибки */
export type ErrorCenterCauseItem<D = any> = {
    group?: ErrorCenterGroup;
    code: string;
    priority?: number;
    label?: string;
    message?: string;
    details?: D;
};
/** List of error items / Список элементов ошибок */
export type ErrorCenterCauseList = ErrorCenterCauseItem[];
/** Callback function for error handling / Функция обратного вызова для обработки ошибок */
export type ErrorCenterHandlerCallback = (cause: ErrorCenterCauseItem) => void;
/** Interface for error handler storage / Интерфейс для хранения обработчика ошибок */
export type ErrorCenterHandlerItem = {
    group?: ErrorCenterGroup;
    handlers: ErrorCenterHandlerCallback[];
};
/** List of error handlers / Список обработчиков ошибок */
export type ErrorCenterHandlerList = ErrorCenterHandlerItem[];
/** Callback function to check whether to log error to console / Функция обратного вызова для проверки вывода ошибки в консоль */
export type ErrorCenterHandlerIsConsoleCallback = (cause: ErrorCenterCauseItem) => boolean;
/** Type for console logging configuration / Тип для конфигурации вывода в консоль */
export type ErrorCenterHandlerIsConsole = boolean | ErrorCenterHandlerIsConsoleCallback;