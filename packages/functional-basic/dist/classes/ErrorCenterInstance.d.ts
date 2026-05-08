import { ErrorCenterHandler } from './ErrorCenterHandler';
import { ErrorCenterCauseItem, ErrorCenterCauseList, ErrorCenterGroup, ErrorCenterHandlerCallback, ErrorCenterHandlerList } from '../types/errorCenter';
/**
 * Class for managing error storage and handling within an instance.
 *
 * Класс для управления хранилищем ошибок и их обработкой внутри экземпляра.
 */
export declare class ErrorCenterInstance {
    protected handler: ErrorCenterHandler;
    /** List of stored error causes / Список сохраненных причин ошибок */
    protected causes: ErrorCenterCauseList;
    /**
     * Constructor
     * @param causes initial list of error causes / начальный список причин ошибок
     * @param handler handler instance / экземпляр обработчика
     */
    constructor(causes?: ErrorCenterCauseList, handler?: ErrorCenterHandler);
    /**
     * Checks if a cause with specific code exists.
     *
     * Проверяет наличие причины с конкретным кодом.
     * @param code error code / код ошибки
     * @param group error group / группа ошибки
     * @returns true if cause exists / true, если причина существует
     */
    has(code: string, group?: string): boolean;
    /**
     * Gets a specific error cause by code and group.
     *
     * Получает конкретную причину ошибки по коду и группе.
     * @param code error code / код ошибки
     * @param group error group / группа ошибки
     * @returns error cause item or undefined / элемент причины ошибки или undefined
     */
    get(code: string, group?: string): ErrorCenterCauseItem | undefined;
    /**
     * Adds an error cause to the storage.
     *
     * Добавляет причину ошибки в хранилище.
     * @param cause error cause item / элемент причины ошибки
     * @returns this instance / текущий экземпляр
     */
    add(cause: ErrorCenterCauseItem): this;
    /**
     * Adds a list of error causes to the storage.
     *
     * Добавляет список причин ошибок в хранилище.
     * @param causes error causes list / список причин ошибок
     * @returns this instance / текущий экземпляр
     */
    addList(causes: ErrorCenterCauseList): this;
    /**
     * Registers a new handler.
     *
     * Регистрирует новый обработчик.
     * @param group target group / целевая группа
     * @param handler handler callback / обратный вызов обработчика
     * @returns this instance / текущий экземпляр
     */
    addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this;
    /**
     * Registers a list of handlers.
     *
     * Регистрирует список обработчиков.
     * @param handlers handlers list / список обработчиков
     * @returns this instance / текущий экземпляр
     */
    addHandlerList(handlers: ErrorCenterHandlerList): this;
    /**
     * Triggers error handling for a group.
     *
     * Вызывает обработку ошибки для группы.
     * @param cause error cause details / детали причины ошибки
     * @returns this instance / текущий экземпляр
     */
    on(cause: ErrorCenterCauseItem): this;
    /**
     * Merges provided cause with stored cause data.
     *
     * Объединяет предоставленную причину с сохраненными данными причины.
     * @param cause input cause / входная причина
     * @returns merged error cause / объединенная причина ошибки
     */
    protected assign(cause: ErrorCenterCauseItem): ErrorCenterCauseItem;
}
