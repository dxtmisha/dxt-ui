import { ErrorCenterCauseItem, ErrorCenterGroup, ErrorCenterHandlerCallback, ErrorCenterHandlerItem, ErrorCenterHandlerList } from '../types/errorCenter';
/**
 * Class for managing and triggering error handlers.
 *
 * Класс для управления и вызова обработчиков ошибок.
 */
export declare class ErrorCenterHandler {
    /** Registered handlers list / Список зарегистрированных обработчиков */
    protected handlers: ErrorCenterHandlerList;
    /**
     * Constructor
     * @param handlers initial handlers list / начальный список обработчиков
     */
    constructor(handlers?: ErrorCenterHandlerList);
    /**
     * Checks if handlers exist for a group.
     *
     * Проверяет наличие обработчиков для группы.
     * @param group error group / группа ошибки
     * @returns true if handlers exist / true, если обработчики существуют
     */
    has(group: ErrorCenterGroup): boolean;
    /**
     * Gets handlers for a group.
     *
     * Получает обработчики для группы.
     * @param group error group / группа ошибки
     * @returns handler item or undefined / элемент обработчика или undefined
     */
    get(group: ErrorCenterGroup): ErrorCenterHandlerItem | undefined;
    /**
     * Adds a handler for a specific group.
     *
     * Добавляет обработчик для определенной группы.
     * @param group error group / группа ошибки
     * @param handler callback function / функция обратного вызова
     * @returns this instance / текущий экземпляр
     */
    add(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this;
    /**
     * Adds a list of group-based handlers.
     *
     * Добавляет список обработчиков по группам.
     * @param handlers handlers list / список обработчиков
     * @returns this instance / текущий экземпляр
     */
    addList(handlers: ErrorCenterHandlerList): this;
    /**
     * Triggers handlers for a group and logs to console.
     *
     * Вызывает обработчики для группы и выводит ошибку в консоль.
     * @param cause error cause details / детали причины ошибки
     * @returns this instance / текущий экземпляр
     */
    on(cause: ErrorCenterCauseItem): this;
    /**
     * Logs error cause to the console.
     *
     * Выводит причину ошибки в консоль.
     * @param cause error details / детали ошибки
     * @returns this instance / текущий экземпляр
     */
    protected toConsole(cause: ErrorCenterCauseItem): this;
}
