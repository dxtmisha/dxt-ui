import { ApiDefaultValue, ApiFetch } from '../types/apiTypes';
/**
 * Class for working with default API request data.
 *
 * Класс для работы с данными запроса API по умолчанию.
 */
export declare class ApiDefault {
    /** Default request data/ Данные запроса по умолчанию */
    protected value?: ApiDefaultValue;
    /**
     * Checks if default request data exists.
     *
     * Проверяет, существуют ли данные запроса по умолчанию.
     */
    is(): boolean;
    /**
     * Gets the default request data.
     *
     * Получает данные запроса по умолчанию.
     */
    get(): ApiDefaultValue;
    /**
     * Adds default data to the request.
     *
     * Добавляет данные по умолчанию к запросу.
     * @param request request data/ данные запроса
     */
    request(request: ApiFetch['request']): ApiFetch['request'];
    /**
     * Modifies the default request data.
     *
     * Изменяет данные запроса по умолчанию.
     */
    set(request: ApiDefaultValue): void;
    /**
     * Adds default data to FormData request.
     *
     * Добавляет данные по умолчанию к запросу FormData.
     * @param request FormData request/ запрос FormData
     * @param value default values/ значения по умолчанию
     */
    protected addByFormData(request: FormData, value: ApiDefaultValue): void;
}
