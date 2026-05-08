import { ApiDefaultValue, ApiFetch } from '../types/apiTypes';
/**
 * Class for working with default API request data.
 *
 * Класс для работы с данными запроса API по умолчанию.
 */
export declare class ApiDefault {
    /** Default request data / Данные запроса по умолчанию */
    protected value?: ApiDefaultValue;
    /**
     * Checks if default request data exists.
     *
     * Проверяет, существуют ли данные запроса по умолчанию.
     * @returns true if default data exists / true, если данные по умолчанию существуют
     */
    is(): boolean;
    /**
     * Gets the default request data.
     *
     * Получает данные запроса по умолчанию.
     * @returns default request data or undefined / данные запроса по умолчанию или undefined
     */
    get(): ApiDefaultValue | undefined;
    /**
     * Adds default data to the request.
     *
     * Добавляет данные по умолчанию к запросу.
     * @param request request data / данные запроса
     * @returns merged request data / объединенные данные запроса
     */
    request(request: ApiFetch['request']): ApiFetch['request'];
    /**
     * Sets the default request data.
     *
     * Устанавливает данные запроса по умолчанию.
     * @param request default request data / данные запроса по умолчанию
     * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
     */
    set(request: ApiDefaultValue): this;
    /**
     * Adds default data to FormData request.
     *
     * Добавляет данные по умолчанию к запросу FormData.
     * @param request FormData request / запрос FormData
     * @param value default values / значения по умолчанию
     * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
     */
    protected addByFormData(request: FormData, value: ApiDefaultValue): this;
}
