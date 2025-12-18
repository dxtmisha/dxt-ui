/**
 * Class for managing HTTP request headers.
 *
 * Класс для управления заголовками HTTP-запросов.
 */
export declare class ApiHeaders {
    /** Default headers/ Заголовки по умолчанию */
    protected headers: Record<string, string>;
    /**
     * Getting the header for the request.
     *
     * Получение заголовка для запроса.
     * @param value list of headers/ список заголовков
     * @param type type of request/ тип запроса
     */
    get(value?: Record<string, string> | null, type?: string): Record<string, string> | undefined;
    /**
     * Modifies the default header data.
     *
     * Изменяет данные заголовка по умолчанию.
     */
    set(headers: Record<string, string>): this;
}
