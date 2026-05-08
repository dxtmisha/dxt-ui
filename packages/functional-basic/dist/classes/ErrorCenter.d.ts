import { ErrorCenterInstance } from './ErrorCenterInstance';
import { ErrorCenterCauseItem, ErrorCenterCauseList, ErrorCenterGroup, ErrorCenterHandlerCallback, ErrorCenterHandlerList } from '../types/errorCenter';
/**
 * Class for managing error storage and handling.
 *
 * Класс для управления хранилищем ошибок и их обработкой.
 */
export declare class ErrorCenter {
    /** Instance of the error center / Экземпляр центра ошибок */
    protected static item: ErrorCenterInstance;
    /**
     * Returns a request-isolated instance of ErrorCenterInstance.
     *
     * Возвращает изолированный в рамках запроса экземпляр ErrorCenterInstance.
     * @returns ErrorCenterInstance instance / экземпляр ErrorCenterInstance
     */
    static getItem(): ErrorCenterInstance;
    /**
     * Checks if a cause with specific code exists.
     *
     * Проверяет наличие причины с конкретным кодом.
     * @param code error code / код ошибки
     * @param group error group / группа ошибки
     * @returns true if cause exists / true, если причина существует
     */
    static has(code: string, group?: string): boolean;
    /**
     * Gets a specific error cause by code and group.
     *
     * Получает конкретную причину ошибки по коду и группе.
     * @param code error code / код ошибки
     * @param group error group / группа ошибки
     * @returns error cause item or undefined / элемент причины ошибки или undefined
     */
    static get(code: string, group?: string): ErrorCenterCauseItem | undefined;
    /**
     * Adds an error cause to the storage.
     *
     * Добавляет причину ошибки в хранилище.
     * @param cause error cause item / элемент причины ошибки
     */
    static add(cause: ErrorCenterCauseItem): void;
    /**
     * Adds a list of error causes to the storage.
     *
     * Добавляет список причин ошибок в хранилище.
     * @param causes error causes list / список причин ошибок
     */
    static addList(causes: ErrorCenterCauseList): void;
    /**
     * Registers a new handler.
     *
     * Регистрирует новый обработчик.
     * @param group target group / целевая группа
     * @param handler handler callback / обратный вызов обработчика
     */
    static addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): void;
    /**
     * Registers a list of handlers.
     *
     * Регистрирует список обработчиков.
     * @param handlers handlers list / список обработчиков
     */
    static addHandlerList(handlers: ErrorCenterHandlerList): void;
    /**
     * Triggers error handling for a group.
     *
     * Вызывает обработку ошибки для группы.
     * @param cause error cause details / детали причины ошибки
     */
    static on(cause: ErrorCenterCauseItem): void;
}
