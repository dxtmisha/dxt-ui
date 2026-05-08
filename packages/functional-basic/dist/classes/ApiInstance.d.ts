import { LoadingInstance } from './LoadingInstance';
import { ErrorCenterInstance } from './ErrorCenterInstance';
import { ApiDefault } from './ApiDefault';
import { ApiHeaders } from './ApiHeaders';
import { ApiHydration } from './ApiHydration';
import { ApiPreparation } from './ApiPreparation';
import { ApiStatus } from './ApiStatus';
import { ApiResponse } from './ApiResponse';
import { ApiFetch, ApiMethod, ApiPreparationEnd } from '../types/apiTypes';
/** Options for the API instance / Опции для экземпляра API */
export type ApiInstanceOptions = {
    /** Class for working with headers / Класс для работы с заголовками */
    headersClass?: typeof ApiHeaders;
    /** Class for working with default request parameters / Класс для работы с параметрами запроса по умолчанию */
    requestDefaultClass?: typeof ApiDefault;
    /** Class for working with status / Класс для работы со статусом */
    statusClass?: typeof ApiStatus;
    /** Class for working with response / Класс для работы с ответом */
    responseClass?: typeof ApiResponse;
    /** Class for working with preparation / Класс для работы с модификацией запроса */
    preparationClass?: typeof ApiPreparation;
    /** Instance of loading handler / Экземпляр обработчика загрузки */
    loadingClass?: LoadingInstance;
    /** Instance of error handler / Экземпляр обработчика ошибок */
    errorCenterClass?: ErrorCenterInstance;
    /** Class for working with hydration / Класс для работы с гидратацией */
    hydrationClass?: typeof ApiHydration;
};
/**
 * Core class for managing HTTP requests using the Fetch API.
 *
 * Основной класс для управления HTTP-запросами через Fetch API.
 */
export declare class ApiInstance {
    protected url: string;
    /** Headers / Заголовки */
    protected headers: ApiHeaders;
    /** Default request parameters / Параметры запроса по умолчанию */
    protected requestDefault: ApiDefault;
    /** Status of the last request / Статус последнего запроса */
    protected status: ApiStatus;
    /** Response handler / Обработчик ответа */
    protected response: ApiResponse;
    /** Request modification handler / Обработчик модификации запроса */
    protected preparation: ApiPreparation;
    /** Loading handler / Обработчик загрузки */
    protected loading: LoadingInstance;
    /** Error handler / Обработчик ошибок */
    protected errorCenter: ErrorCenterInstance;
    /** Hydration handler / Обработчик гидратации */
    protected hydration: ApiHydration;
    /** Timeout for the request in milliseconds / Таймаут запроса в миллисекундах */
    protected timeout: number;
    protected origin?: string;
    /**
     * Constructor
     * @param url base path to the script / базовый путь к скрипту
     * @param options options for the API instance / опции для экземпляра API
     */
    constructor(url?: string, options?: ApiInstanceOptions);
    /**
     * Checks if the server is running on localhost.
     *
     * Проверяет, работает ли сервер на localhost.
     * @returns true if server is localhost / true, если сервер является локальным
     */
    isLocalhost(): boolean;
    /**
     * Returns the status of the last request.
     *
     * Возвращает статус последнего запроса.
     * @returns ApiStatus instance / экземпляр ApiStatus
     */
    getStatus(): ApiStatus;
    /**
     * Gets the response handler.
     *
     * Получает обработчик ответа.
     * @returns ApiResponse instance / экземпляр ApiResponse
     */
    getResponse(): ApiResponse;
    /**
     * Gets the hydration handler.
     *
     * Получает обработчик гидратации.
     * @returns ApiHydration instance / экземпляр ApiHydration
     */
    getHydration(): ApiHydration;
    /**
     * Gets the base origin URL combined with the API path.
     *
     * Получает базовый URL источника, объединенный с путем API.
     * @returns final base URL string / итоговая строка базового URL
     */
    getOrigin(): string;
    /**
     * Gets the full path to the request script.
     *
     * Получает полный путь к скрипту запроса.
     * @param path path to the script / путь к скрипту
     * @param api whether to prepend base API URL / нужно ли добавить базовый URL API
     * @returns full URL / полный URL
     */
    getUrl(path: string, api?: boolean): string;
    /**
     * Gets data for the request body.
     *
     * Получает данные для тела запроса.
     * @param request request data / данные запроса
     * @param method HTTP method / HTTP метод
     * @returns body data for non-GET requests or FormData / данные тела для не-GET запросов или FormData
     */
    getBody(request?: ApiFetch['request'], method?: ApiMethod): string | FormData | undefined;
    /**
     * Gets query string for GET method requests.
     *
     * Получает строку запроса для GET-методов.
     * @param request request data / данные запроса
     * @param path path to request / путь к запросу
     * @param method HTTP method / HTTP метод
     * @returns query string with prefix (? or &) / строка запроса с префиксом (? или &)
     */
    getBodyForGet(request: ApiFetch['request'], path?: string, method?: ApiMethod): string;
    /**
     * Returns a string representation of the hydration data for the client.
     *
     * Возвращает строковое представление данных гидратации для клиента.
     * @returns HTML script element string / строка HTML элемента script
     */
    getHydrationScript(): string;
    /**
     * Modifies the default header data.
     *
     * Изменяет данные заголовка по умолчанию.
     * @param headers default headers / заголовки по умолчанию
     */
    setHeaders(headers: Record<string, string>): this;
    /**
     * Modifies the default request data.
     *
     * Изменяет данные запроса по умолчанию.
     * @param request default request data / данные запроса по умолчанию
     */
    setRequestDefault(request: Record<string, any>): this;
    /**
     * Changes the base path to the script.
     *
     * Изменяет базовый путь к скрипту.
     * @param url path to the script / путь к скрипту
     */
    setUrl(url: string): this;
    /**
     * Modifies the function to be called before the request.
     *
     * Изменяет функцию для вызова перед запросом.
     * @param callback function to call before request / функция для вызова перед запросом
     */
    setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): this;
    /**
     * Modifies the function to be called after the request.
     *
     * Изменяет функцию для вызова после запроса.
     * @param callback function to call after request / функция для вызова после запроса
     */
    setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this;
    /**
     * Changes the timeout for the request in milliseconds.
     *
     * Изменяет таймаут запроса в миллисекундах.
     * @param timeout timeout in milliseconds / таймаут в миллисекундах
     */
    setTimeout(timeout: number): this;
    /**
     * Changes the origin (protocol and domain) for the base URL.
     *
     * Изменяет источник (протокол и домен) для базового URL.
     * @param origin protocol and domain / протокол и домен
     */
    setOrigin(origin: string): this;
    /**
     * Executes a request with the given path or configuration.
     *
     * Выполняет запрос с указанным путем или конфигурацией.
     * @param pathRequest path or configuration / путь или конфигурация запроса
     * @returns Promise with response data / Promise с данными ответа
     */
    request<T>(pathRequest: string | ApiFetch): Promise<T>;
    /**
     * Sends a GET method request.
     *
     * Отправляет запрос метода GET.
     * @param request fetch configuration / конфигурация запроса
     * @returns Promise with response data / Promise с данными ответа
     */
    get<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a POST method request.
     *
     * Отправляет запрос метода POST.
     * @param request fetch configuration / конфигурация запроса
     * @returns Promise with response data / Promise с данными ответа
     */
    post<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a PUT method request.
     *
     * Отправляет запрос метода PUT.
     * @param request fetch configuration / конфигурация запроса
     * @returns Promise with response data / Promise с данными ответа
     */
    put<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a PATCH method request.
     *
     * Отправляет запрос метода PATCH.
     * @param request fetch configuration / конфигурация запроса
     * @returns Promise with response data / Promise с данными ответа
     */
    patch<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a DELETE method request.
     *
     * Отправляет запрос метода DELETE.
     * @param request fetch configuration / конфигурация запроса
     * @returns Promise with response data / Promise с данными ответа
     */
    delete<T>(request: ApiFetch): Promise<T>;
    /**
     * Gets retry delay with jitter.
     *
     * Получает задержку повтора с джиттером.
     * @param retryCount count of retries / количество повторов
     * @param retryDelay base delay between retries / базовая задержка между повторами
     * @returns delay in milliseconds / задержка в миллисекундах
     */
    protected getRetryDelay(retryCount: number, retryDelay: number): number;
    /**
     * Execute API request with retry support.
     *
     * Выполнить запрос API с поддержкой повторов.
     * @param apiFetch fetch configuration / конфигурация запроса
     * @param retryCount current retry count / текущий счетчик повторов
     */
    protected fetch<T>(apiFetch: ApiFetch, retryCount?: number): Promise<T>;
    /**
     * Executing the HTTP request.
     *
     * Выполнение HTTP-запроса.
     * @param apiFetch fetch configuration / конфигурация запроса
     * @param pathToApi base path to API / базовый путь к API
     * @returns object containing response and optional timeout ID / объект, содержащий ответ и опциональный ID таймера
     */
    protected makeQuery(apiFetch: ApiFetch, pathToApi: string): Promise<{
        query: Response;
        timeoutId: any;
    }>;
    /**
     * Processing an error.
     *
     * Обработка ошибки.
     * @param error error object / объект ошибки
     * @param group error group for error center (default: 'api') / группа ошибки для центра ошибок (по умолчанию: 'api')
     */
    protected makeError(error: Record<string, any> & {
        name: string;
    }, group?: string): void;
    /**
     * Processes an error response.
     *
     * Обрабатывает ошибку ответа.
     * @param query error response / ответ с ошибкой
     */
    protected makeErrorQuery(query: Response): void;
    /**
     * Initialize controller for request with timeout support.
     *
     * Инициализация контроллера для запроса с поддержкой таймаута.
     * @param apiFetch request options / опции запроса
     * @param fetchInit request initialization object / объект инициализации запроса
     * @returns timeout ID (from setTimeout) or undefined / ID таймера (от setTimeout) или undefined
     */
    protected initController(apiFetch: ApiFetch, fetchInit: RequestInit): any;
}
