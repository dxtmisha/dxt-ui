// md5:6f34fdd5b60f9d33b678e50fc67f1af8
import { ErrorCenterCauseItem, ErrorCenterGroup, ErrorCenterHandlerCallback, ErrorCenterHandlerIsConsole, ErrorCenterHandlerItem, ErrorCenterHandlerList } from '../types/errorCenterTypes';
/**
 * Class for managing and triggering error handlers.
 *
 * Класс для управления и вызова обработчиков ошибок.
 */
export declare class ErrorCenterHandler {
    /** Registered handlers list / Список зарегистрированных обработчиков */
    protected handlers: ErrorCenterHandlerList;
    /** Callbacks executed on every error / Обратные вызовы, выполняемые при каждой ошибке */
    protected callbacks: ErrorCenterHandlerCallback[];
    /** Console output flag or filter function / Флаг или функция фильтрации вывода в консоль */
    protected isConsole: ErrorCenterHandlerIsConsole;
    /**
     * Constructor
     * @param handlers initial handlers list / начальный список обработчиков
     * @param isConsole console output flag or filter function / флаг или функция вывода в консоль
     */
    constructor(handlers?: ErrorCenterHandlerList, isConsole?: ErrorCenterHandlerIsConsole);
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
     * Adds a callback to be executed on any error.
     *
     * Добавляет обратный вызов, который будет выполняться при любой ошибке.
     * @param callback callback function / функция обратного вызова
     * @returns this instance / текущий экземпляр
     */
    addCallback(callback: ErrorCenterHandlerCallback): this;
    /**
     * Sets console output flag or filter function.
     *
     * Устанавливает флаг или функцию фильтрации вывода в консоль.
     * @param isConsole console output flag or filter function / флаг или функция вывода в консоль
     * @returns this instance / текущий экземпляр
     */
    setIsConsole(isConsole: ErrorCenterHandlerIsConsole): this;
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
