import { ApiFetch } from '../types/apiTypes';
/**
 * Class for managing HTTP request headers.
 *
 * Класс для управления заголовками HTTP-запросов.
 */
export declare class ApiHeaders {
    /** Default headers / Заголовки по умолчанию */
    protected headers: Record<string, string>;
    /**
     * Gets the headers for the request.
     *
     * Получает заголовки для запроса.
     * @param value list of headers / список заголовков
     * @param type Content-Type header value / значение заголовка Content-Type
     * @returns merged headers or undefined / объединенные заголовки или undefined
     */
    get(value?: Record<string, string> | null, type?: string | undefined | null): Record<string, string> | undefined;
    /**
     * Gets the headers for the request based on request type.
     *
     * Получает заголовки для запроса на основе типа запроса.
     * @param request request data / данные запроса
     * @param value list of headers / список заголовков
     * @param type Content-Type header value / значение заголовка Content-Type
     * @returns merged headers or undefined / объединенные заголовки или undefined
     */
    getByRequest(request: ApiFetch['request'], value?: Record<string, string> | null, type?: string): Record<string, string> | undefined;
    /**
     * Sets the default headers.
     *
     * Устанавливает заголовки по умолчанию.
     * @param headers list of default headers/ список заголовков по умолчанию
     * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
     */
    set(headers: Record<string, string>): this;
}
