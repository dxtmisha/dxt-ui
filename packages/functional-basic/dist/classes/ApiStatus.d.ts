import { ApiStatusItem } from '../types/apiTypes';
/**
 * API status class
 *
 * Класс статуса API
 */
export declare class ApiStatus {
    protected value?: ApiStatusItem;
    /**
     * Last response data
     *
     * Данные последнего ответа
     */
    get(): ApiStatusItem;
    /**
     * Returns the execution status code.
     *
     * Возвращает код статуса выполнения.
     */
    getStatus(): number | undefined;
    /**
     * Returns the execution status text.
     *
     * Возвращает текст статуса выполнения.
     */
    getStatusText(): string | undefined;
    /**
     * Returns the script execution error.
     *
     * Возвращает ошибку выполнения скрипта.
     */
    getError(): string | undefined;
    /**
     * Returns the data of the last request.
     *
     * Возвращает данные последнего запроса.
     */
    getResponse<T>(): T | undefined;
    /**
     * Returns messages from the last request.
     *
     * Возвращает сообщения от последнего запроса.
     */
    getMessage(): string;
    /**
     * Sets the status item data.
     *
     * Устанавливает данные элемента статуса.
     * @param data status item data/ данные элемента статуса
     */
    set(data: ApiStatusItem): this;
    /**
     * Sets the status code and optional status text.
     *
     * Устанавливает код статуса и необязательный текст статуса.
     * @param status status code/ код статуса
     * @param statusText optional status text/ необязательный текст статуса
     */
    setStatus(status?: number, statusText?: string): this;
    /**
     * Sets the error message.
     *
     * Устанавливает сообщение об ошибке.
     * @param error error message/ сообщение об ошибке
     */
    setError(error?: string): this;
    /**
     * Sets the data of the last response.
     *
     * Устанавливает данные последнего ответа.
     * @param response response data/ данные ответа
     */
    setLastResponse(response?: any): this;
    /**
     * Sets messages from the last request.
     *
     * Устанавливает сообщения от последнего запроса.
     * @param message message text/ текст сообщения
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
