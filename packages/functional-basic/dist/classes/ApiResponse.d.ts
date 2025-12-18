import { ApiDefault } from './ApiDefault';
import { ApiFetch, ApiMethod, ApiResponseItem } from '../types/apiTypes';
export declare class ApiResponse {
    protected readonly requestDefault: ApiDefault;
    /** List of first-time API requests/ Список первичных API запросов */
    protected readonly first: ApiResponseItem[];
    /** Cached responses/ Кешированные ответы */
    protected readonly response: ApiResponseItem[];
    /** Loading instance/ Экземпляр загрузки */
    protected loading?: any;
    /** Developer mode flag/ Флаг режима разработчика */
    protected devMode: boolean;
    /**
     * Constructor
     * @param requestDefault default request processor/ процессор запросов по умолчанию
     */
    constructor(requestDefault: ApiDefault);
    /**
     * Checks if there is a global cached request, if there is, returns it.
     *
     * Проверяет, есть ли глобальный кешированный запрос, если есть, возвращает его.
     * @param path link to the request/ ссылка на запрос
     * @param method request method/ метод запроса
     * @param request data for the request/ данные для запроса
     * @param devMode is it developer mode/ является ли режим разработчика
     */
    get(path: string | undefined, method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponseItem | undefined;
    /**
     * Returns a list of data about the emulator.
     *
     * Возвращает список данных об эмуляторе.
     */
    getList(): (ApiResponseItem & Record<string, any>)[];
    /**
     * Adding cached requests.
     *
     * Добавление кешированных запросов.
     * @param response data for caching/ данные для кеширования
     */
    add(response: ApiResponseItem | ApiResponseItem[]): this;
    /**
     * Sets developer mode.
     *
     * Устанавливает режим разработчика.
     * @param devMode is it developer mode/ является ли режим разработчика
     */
    setDevMode(devMode: boolean): this;
    /**
     * Выполнение эмулятора, если доступно
     * @param apiFetch property of the request/ свойство запроса
     */
    emulator<T>(apiFetch: ApiFetch): Promise<T | undefined>;
    /**
     * Checks if the cached item is disabled.
     *
     * Проверяет, отключен ли кешированный элемент.
     * @param item cached item/ кешированный элемент
     */
    protected isDisable(item: ApiResponseItem): boolean;
    /**
     * Checks if the path matches the cached one.
     *
     * Проверяет, совпадает ли путь с кешированным.
     * @param item cached item/ кешированный элемент
     * @param path request path/ путь запроса
     */
    protected isPath(item: ApiResponseItem, path: string): boolean;
    /**
     * Checks if it is developer mode.
     *
     * Проверяет, является ли режимом разработчика.
     * @param devMode is it developer mode/ является ли режим разработчика
     */
    protected isDevMode(devMode?: boolean): boolean;
    /**
     * Checks if this is the first request.
     *
     * Проверяет, является ли это первым запросом.
     * @param item cached item/ кешированный элемент
     * @param devMode is it developer mode/ является ли режим разработчика
     */
    protected isFirst(item: ApiResponseItem, devMode?: boolean): boolean;
    /**
     * Checks if the request matches the cached one.
     *
     * Проверяет, совпадает ли запрос с кешированным.
     * @param item cached item/ кешированный элемент
     * @param request request data/ данные запроса
     */
    protected isResponse(item: ApiResponseItem, request?: ApiFetch['request']): boolean;
    /**
     * Emulates an execution request.
     *
     * Эмулирует запрос выполнения.
     * @param response Data for pre-request/ Данные для пред-запроса
     * @param request data for the request/ данные для запроса
     */
    protected fetch<T>(response: ApiResponseItem, request?: ApiFetch['request']): Promise<T>;
    /**
     * Enable loading for request emulation.
     *
     * Включить загрузку для эмуляции запроса.
     */
    protected startResponseLoading(): void;
    /**
     * Disable loading for request emulation.
     *
     * Отключить загрузку для эмуляции запроса.
     */
    protected stopResponseLoading(): void;
}
