import { ApiResponse } from './ApiResponse';
import { ApiFetch, ApiHydrationList } from '../types/apiTypes';
/**
 * Class for collecting API data for hydration on the client side during SSR.
 *
 * Класс для сбора данных API для последующей гидратации на стороне клиента при SSR.
 */
export declare class ApiHydration {
    protected list: ApiHydrationList;
    /**
     * Initializes the response with hydration data.
     *
     * Инициализирует ответ данными гидратации.
     * @param response API response / ответ API
     * @returns void / ничего не возвращает
     */
    initResponse(response: ApiResponse): void;
    /**
     * Saves API response for client-side hydration.
     *
     * Сохраняет ответ API для гидратации на стороне клиента.
     * @param apiFetch API request configuration / конфигурация запроса API
     * @param response API response data / данные ответа API
     * @returns void / ничего не возвращает
     */
    toClient<T>(apiFetch: ApiFetch, response: T): void;
    /**
     * Returns a string representation of the hydration data for the client.
     *
     * Возвращает строковое представление данных гидратации для клиента.
     */
    toString(): string;
    /**
     * Returns the list of API responses for the client.
     *
     * Возвращает список ответов API для клиента.
     */
    protected getListByClient(): ApiHydrationList;
}
