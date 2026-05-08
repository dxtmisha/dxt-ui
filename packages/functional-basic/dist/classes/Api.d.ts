import { ApiInstance } from './ApiInstance';
import { ApiConfig, ApiFetch, ApiMethodItem, ApiPreparationEnd } from '../types/apiTypes';
import { ApiStatus } from './ApiStatus';
import { ApiResponse } from './ApiResponse';
import { ApiHydration } from './ApiHydration';
/**
 * Class for working with HTTP requests.
 *
 * Класс для работы с HTTP-запросами.
 */
export declare class Api {
    /**
     * Checks if the server is running on localhost.
     *
     * Проверяет, работает ли сервер на localhost.
     * @returns true if server is localhost / true, если сервер является локальным
     */
    static isLocalhost(): boolean;
    /**
     * Returns the singleton instance of the ApiInstance class.
     *
     * Возвращает синглтон-экземпляр класса ApiInstance.
     * @returns ApiInstance singleton / синглтон ApiInstance
     */
    static getItem(): ApiInstance;
    /**
     * Returns the status of the last request.
     *
     * Возвращает статус последнего запроса.
     * @returns ApiStatus instance / экземпляр ApiStatus
     */
    static getStatus(): ApiStatus;
    /**
     * Gets the response handler.
     *
     * Получает обработчик ответа.
     * @returns ApiResponse instance / экземпляр ApiResponse
     */
    static getResponse(): ApiResponse;
    /**
     * Gets the hydration handler.
     *
     * Получает обработчик гидратации.
     * @returns ApiHydration instance / экземпляр ApiHydration
     */
    static getHydration(): ApiHydration;
    /**
     * Returns a string representation of the hydration data for the client.
     *
     * Возвращает строковое представление данных гидратации для клиента.
     * @returns HTML script element string / строка HTML элемента script
     */
    static getHydrationScript(): string;
    /**
     * Gets the base origin URL combined with the API path.
     *
     * Получает базовый URL источника, объединенный с путем API.
     * @returns final base URL string / итоговая строка базового URL
     */
    static getOrigin(): string;
    /**
     * Gets the full path to the request script.
     *
     * Получает полный путь к скрипту запроса.
     * @param path path to the script / путь к скрипту
     * @param api whether to prepend base API URL / нужно ли добавить базовый URL API
     * @returns full URL / полный URL
     */
    static getUrl(path: string, api?: boolean): string;
    /**
     * Gets data for the request body.
     *
     * Получает данные для тела запроса.
     * @param request request data / данные запроса
     * @param method HTTP method / HTTP метод
     * @returns body data for non-GET requests or FormData / данные тела для не-GET запросов или FormData
     */
    static getBody(request?: ApiFetch['request'], method?: ApiMethodItem): string | FormData | undefined;
    /**
     * Gets query string for GET method requests.
     *
     * Получает строку запроса для GET-методов.
     * @param request request data / данные запроса
     * @param path path to request / путь к запросу
     * @param method HTTP method / HTTP метод
     * @returns query string for GET requests / строка запроса для GET-запросов
     */
    static getBodyForGet(request: ApiFetch['request'], path?: string, method?: ApiMethodItem): string;
    /**
     * Modifies the default header data.
     *
     * Изменяет данные заголовка по умолчанию.
     * @param headers default headers / заголовки по умолчанию
     * @returns void / ничего не возвращает
     */
    static setHeaders(headers: Record<string, string>): void;
    /**
     * Modifies the default request data.
     *
     * Изменяет данные запроса по умолчанию.
     * @param request default request data / данные запроса по умолчанию
     * @returns void / ничего не возвращает
     */
    static setRequestDefault(request: Record<string, any>): void;
    /**
     * Changes the base path to the script.
     *
     * Изменяет базовый путь к скрипту.
     * @param url path to the script / путь к скрипту
     * @returns void / ничего не возвращает
     */
    static setUrl(url: string): void;
    /**
     * Modifies the function to be called before the request.
     *
     * Изменяет функцию для вызова перед запросом.
     * @param callback function to call before request / функция для вызова перед запросом
     * @returns void / ничего не возвращает
     */
    static setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): void;
    /**
     * Modifies the function to be called after the request.
     *
     * Изменяет функцию для вызова после запроса.
     * @param callback function to call after request / функция для вызова после запроса
     * @returns void / ничего не возвращает
     */
    static setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): void;
    /**
     * Changes the timeout for the request in milliseconds.
     *
     * Изменяет таймаут запроса в миллисекундах.
     * @param timeout timeout in milliseconds / таймаут в миллисекундах
     * @returns void / ничего не возвращает
     */
    static setTimeout(timeout: number): void;
    /**
     * Changes the origin (protocol and domain) for the base URL.
     *
     * Изменяет источник (протокол и домен) для базового URL.
     * @param origin protocol and domain / протокол и домен
     * @returns void / ничего не возвращает
     */
    static setOrigin(origin: string): void;
    /**
     * Sets multiple API configuration options at once.
     *
     * Устанавливает несколько опций конфигурации API одновременно.
     * @param config configuration object / объект конфигурации
     * @returns void / ничего не возвращает
     */
    static setConfig(config?: ApiConfig): void;
    /**
     * Executes a request with the given path or configuration.
     *
     * Выполняет запрос с указанным путем или конфигурацией.
     * @param pathRequest path or configuration / путь или конфигурация запроса
     * @returns Promise with response data / Promise с данными ответа
     */
    static request<T>(pathRequest: string | ApiFetch): Promise<T>;
    /**
     * Sends a GET method request.
     *
     * Отправляет запрос метода GET.
     * @param request fetch configuration / конфигурация запроса
     * @returns Promise with response data / Promise с данными ответа
     */
    static get<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a POST method request.
     *
     * Отправляет запрос метода POST.
     * @param request fetch configuration / конфигурация запроса
     * @returns Promise with response data / Promise с данными ответа
     */
    static post<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a PUT method request.
     *
     * Отправляет запрос метода PUT.
     * @param request fetch configuration / конфигурация запроса
     * @returns Promise with response data / Promise с данными ответа
     */
    static put<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a PATCH method request.
     *
     * Отправляет запрос метода PATCH.
     * @param request fetch configuration / конфигурация запроса
     * @returns Promise with response data / Promise с данными ответа
     */
    static patch<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a DELETE method request.
     *
     * Отправляет запрос метода DELETE.
     * @param request fetch configuration / конфигурация запроса
     * @returns Promise with response data / Promise с данными ответа
     */
    static delete<T>(request: ApiFetch): Promise<T>;
}
