import { ApiDefault } from './ApiDefault';
import { ApiFetch, ApiMethod, ApiResponseItem } from '../types/apiTypes';
/**
 * Class for working with API responses.
 *
 * Класс для работы с ответами API.
 */
export declare class ApiResponse {
    protected readonly requestDefault: ApiDefault;
    /** List of first-time API requests / Список первичных API запросов */
    protected readonly first: ApiResponseItem[];
    /** Cached responses / Кешированные ответы */
    protected readonly response: ApiResponseItem[];
    /** Loading instance / Экземпляр загрузки */
    protected loading?: any;
    /** Developer mode flag / Флаг режима разработчика */
    protected devMode: boolean;
    /**
     * Constructor
     * @param requestDefault default request class/ класс запросов по умолчанию
     */
    constructor(requestDefault: ApiDefault);
    /**
     * Checks if there is a global cached request, if there is, returns it.
     *
     * Проверяет, есть ли глобальный кешированный запрос, если есть, возвращает его.
     * @param path link to the request / ссылка на запрос
     * @param method request method / метод запроса
     * @param request data for the request / данные для запроса
     * @param devMode optional developer mode flag / необязательный флаг режима разработчика
     * @returns cached response item or undefined / кешированный элемент ответа или undefined
     */
    get(path: string | undefined, method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponseItem | undefined;
    /**
     * Returns a list of cached API responses (excluding global responses).
     *
     * Возвращает список кешированных ответов API (исключая глобальные ответы).
     */
    getList(): (ApiResponseItem & Record<string, any>)[];
    /**
     * Adds cached requests.
     *
     * Добавляет кешированные запросы.
     * @param response data for caching / данные для кеширования
     */
    add(response: ApiResponseItem | ApiResponseItem[]): this;
    /**
     * Sets developer mode.
     *
     * Устанавливает режим разработчика.
     * @param devMode is it developer mode / является ли режим разработчика
     * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
     */
    setDevMode(devMode: boolean): this;
    /**
     * Executes the emulator if available.
     *
     * Выполняет эмулятор, если доступно.
     * @param apiFetch fetch configuration / конфигурация запроса
     * @returns emulated response or undefined / эмулированный ответ или undefined
     */
    emulator<T>(apiFetch: ApiFetch): Promise<T | undefined>;
    /**
     * Executes the emulator synchronously if available.
     *
     * Выполняет эмулятор синхронно, если доступно.
     * @param apiFetch fetch configuration / конфигурация запроса
     * @returns emulated response or undefined / эмулированный ответ или undefined
     */
    emulatorAsync<T>(apiFetch: ApiFetch): T | undefined;
    /**
     * Checks if the cached item is disabled.
     *
     * Проверяет, отключен ли кешированный элемент.
     * @param item cached item / кешированный элемент
     * @returns true if item is disabled / true, если элемент отключен
     */
    protected isDisable(item: ApiResponseItem): boolean;
    /**
     * Checks if the path matches the cached one.
     *
     * Проверяет, совпадает ли путь с кешированным.
     * @param item cached item / кешированный элемент
     * @param path request path / путь запроса
     * @returns true if paths match / true, если пути совпадают
     */
    protected isPath(item: ApiResponseItem, path: string): boolean;
    /**
     * Checks if it is developer mode.
     *
     * Проверяет, является ли режимом разработчика.
     * @param devMode is it developer mode / является ли режим разработчика
     * @returns true if in dev mode / true, если в режиме разработчика
     */
    protected isDevMode(devMode?: boolean): boolean;
    /**
     * Checks if this is the first request.
     *
     * Проверяет, является ли это первым запросом.
     * @param item cached item / кешированный элемент
     * @param devMode is it developer mode / является ли режим разработчика
     * @returns true if this is the first request / true, если это первый запрос
     */
    protected isFirst(item: ApiResponseItem, devMode?: boolean): boolean;
    /**
     * Checks if the request matches the cached one.
     *
     * Проверяет, совпадает ли запрос с кешированным.
     * @param item cached item / кешированный элемент
     * @param request request data / данные запроса
     * @returns true if requests match / true, если запросы совпадают
     */
    protected isResponse(item: ApiResponseItem, request?: ApiFetch['request']): boolean;
    /**
     * Reads cached data configuration.
     *
     * Считывает конфигурацию кешированных данных.
     * @param apiFetch fetch configuration / конфигурация запроса
     * @returns object with response and request data or undefined / объект с данными ответа и запроса или undefined
     */
    protected readData(apiFetch: ApiFetch): {
        response: ApiResponseItem;
        request: string | Record<string, any> | FormData | undefined;
    } | undefined;
    /**
     * Emulates an execution request (internal fetch).
     *
     * Эмулирует запрос выполнения (внутренний fetch).
     * @param response response item for emulation / элемент ответа для эмуляции
     * @param request data for the request / данные для запроса
     * @returns Promise with emulated response data / Promise с эмулированными данными ответа
     */
    protected fetch<T>(response: ApiResponseItem, request?: ApiFetch['request']): Promise<T>;
    /**
     * Emulates an execution request synchronously (internal fetch).
     *
     * Эмулирует запрос выполнения синхронно (внутренний fetch).
     * @param response response item for emulation / элемент ответа для эмуляции
     * @returns emulated response data / эмулированные данные ответа
     */
    protected fetchAsync<T>(response: ApiResponseItem): T;
    /**
     * Enables loading for request emulation.
     *
     * Включает загрузку для эмуляции запроса.
     */
    protected startResponseLoading(): void;
    /**
     * Disables loading for request emulation.
     *
     * Отключает загрузку для эмуляции запроса.
     */
    protected stopResponseLoading(): void;
}
