import { ApiStatusItem, ApiStatusType } from '../types/apiTypes';
/**
 * Class for managing API request status.
 *
 * Класс для управления статусом запросов API.
 */
export declare class ApiStatus {
    protected value?: ApiStatusItem;
    /**
     * Returns the last status item data.
     *
     * Возвращает данные последнего элемента статуса.
     * @returns status item or undefined / элемент статуса или undefined
     */
    get(): ApiStatusItem | undefined;
    /**
     * Returns the execution status code.
     *
     * Возвращает код статуса выполнения.
     * @returns HTTP status code or undefined / код статуса HTTP или undefined
     */
    getStatus(): number | undefined;
    /**
     * Returns the execution status text.
     *
     * Возвращает текст статуса выполнения.
     * @returns status text or undefined / текст статуса или undefined
     */
    getStatusText(): string | undefined;
    /**
     * Returns the last status type.
     *
     * Возвращает последний тип статуса.
     * @returns status type or undefined / тип статуса или undefined
     */
    getStatusType(): ApiStatusType | undefined;
    /**
     * Returns the execution status code (string or number from response).
     *
     * Возвращает код статуса выполнения (строка или число из ответа).
     * @returns status code or undefined / код статуса или undefined
     */
    getCode(): string | undefined;
    /**
     * Returns the script execution error.
     *
     * Возвращает ошибку выполнения скрипта.
     * @returns error message or undefined / сообщение об ошибке или undefined
     */
    getError(): string | undefined;
    /**
     * Returns the data of the last request.
     *
     * Возвращает данные последнего запроса.
     * @returns last response data or undefined / данные последнего ответа или undefined
     */
    getResponse<T>(): T | undefined;
    /**
     * Returns messages from the last request.
     *
     * Возвращает сообщения от последнего запроса.
     * @returns message string / строка сообщения
     */
    getMessage(): string;
    /**
     * Sets the status item data.
     *
     * Устанавливает данные элемента статуса.
     * @param data status item data/ данные элемента статуса
     * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
     */
    set(data: ApiStatusItem): this;
    /**
     * Sets the status code and optional status text.
     *
     * Устанавливает код статуса и необязательный текст статуса.
     * @param status status code / код статуса
     * @param statusText optional status text / необязательный текст статуса
     * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
     */
    setStatus(status?: number, statusText?: string): this;
    /**
     * Sets the error message.
     *
     * Устанавливает сообщение об ошибке.
     * @param error error message/ сообщение об ошибке
     * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
     */
    setError(error?: string): this;
    /**
     * Sets the data of the last response and automatically extracts status/message if it's an object.
     *
     * Устанавливает данные последнего ответа и автоматически извлекает статус / сообщение, если это объект.
     * @param response response data / данные ответа
     * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
     */
    setLastResponse(response?: any): this;
    /**
     * Sets the last status.
     *
     * Устанавливает последний статус.
     * @param status status/ статус
     * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
     */
    setLastStatus(status?: ApiStatusType): this;
    /**
     * Sets the last execution code.
     *
     * Устанавливает последний код выполнения.
     * @param code status code / код статуса
     * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
     */
    setLastCode(code?: string): this;
    /**
     * Sets messages from the last request.
     *
     * Устанавливает сообщения от последнего запроса.
     * @param message message text/ текст сообщения
     * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
     */
    setLastMessage(message?: string): this;
    /**
     * Sets a specific field in the status item.
     *
     * Устанавливает конкретное поле в элементе статуса.
     * @param name field name/ название поля
     * @param value field value/ значение поля
     */
    protected setValue<K extends keyof ApiStatusItem>(name: K, value?: ApiStatusItem[K]): void;
}
