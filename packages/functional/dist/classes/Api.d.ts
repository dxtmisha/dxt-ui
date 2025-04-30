import { RefOrNormal } from '../types/refTypes';
export declare enum ApiMethodItem {
    get = "GET",
    post = "POST",
    put = "PUT",
    delete = "DELETE"
}
export type ApiMethod = string & ApiMethodItem;
export type ApiFetch = {
    api?: boolean;
    path?: string;
    pathFull?: string;
    method?: ApiMethod;
    request?: FormData | Record<string, any> | string;
    auth?: boolean;
    headers?: Record<string, string> | null;
    type?: string;
    toData?: boolean;
    global?: boolean;
    devMode?: boolean;
    hideError?: boolean;
    queryReturn?: (query: Response) => Promise<any>;
    globalPreparation?: boolean;
    globalEnd?: boolean;
    init?: RequestInit;
};
export type ApiResponse = {
    path: string | RegExp;
    method: ApiMethod;
    request?: ApiFetch['request'] | '*any';
    response: any | ((request?: ApiFetch['request']) => any);
    disable?: RefOrNormal<boolean | undefined>;
    isForGlobal?: boolean;
    lag?: RefOrNormal<boolean | undefined>;
};
export type ApiData<T> = T & {
    data?: T;
    success?: boolean;
};
export type ApiPreparationEnd = {
    reset?: boolean;
    data?: any;
};
/**
 * Class for working with requests.
 *
 * Класс для работы с запросами.
 */
export declare class Api {
    protected static url: string;
    protected static response: ApiResponse[];
    protected static responseLoading?: any;
    protected static headers: Record<string, string>;
    protected static requestDefault: RefOrNormal<Record<string, any>>;
    protected static preparation: boolean;
    protected static preparationItem?: () => Promise<void>;
    protected static preparationEndItem?: (query: Response) => Promise<ApiPreparationEnd>;
    protected static status?: number;
    protected static statusText?: string;
    protected static error?: string;
    protected static lastResponse?: any;
    protected static lastMessage?: string;
    /**
     * Is the server local.
     *
     * Является ли сервер локальный.
     */
    static isLocalhost(): boolean;
    /**
     * Returns the data of the last request.
     *
     * Возвращает данные последнего запроса.
     */
    static getLastResponse<T>(): T;
    /**
     * Returns messages from the last request.
     *
     * Возвращает сообщения от последнего запроса.
     */
    static getLastMessage(): string;
    /**
     * Getting the header for the request.
     *
     * Получение заголовка для запроса.
     * @param value list of headers/ список заголовков
     * @param type type of request/ тип запроса
     */
    static getHeaders(value?: Record<string, string> | null, type?: string): Record<string, string> | undefined;
    /**
     * Getting the full path to the request script.
     *
     * Получение полного пути к скрипту запроса.
     * @param path path to the script/ путь к скрипту
     * @param api adding a path to the site’s API/ добавление пути к API сайта
     */
    static getUrl(path: string, api?: boolean): string;
    /**
     * Getting data for the body.
     *
     * Получение данных для тела.
     * @param request this request/ данный запрос
     * @param method method for request/ метод запрос
     */
    static getBody(request?: ApiFetch['request'], method?: ApiMethodItem): string | FormData | undefined;
    /**
     * Getting data for the body of the get method.
     *
     * Получение данных для тела метода get.
     * @param request this request/ данный запрос
     * @param path path to request/ путь к запрос
     * @param method method for request/ метод запрос
     */
    static getBodyForGet(request: ApiFetch['request'], path?: string, method?: ApiMethodItem): string;
    /**
     * Returns a list of data about the emulator.
     *
     * Возвращает список данных об эмуляторе.
     */
    static getResponseList(): (ApiResponse & Record<string, any>)[];
    /**
     * Returns the execution status code.
     *
     * Возвращает код статуса выполнения.
     */
    static getStatus(): number | undefined;
    /**
     * Returns the execution status text.
     *
     * Возвращает текст статуса выполнения.
     */
    static getStatusText(): string | undefined;
    /**
     * Returns the script execution error.
     *
     * Возвращает ошибку выполнения скрипта.
     */
    static getError(): string | undefined;
    /**
     * Adds default data to the request.
     *
     * Добавляет данные по умолчанию к запросу.
     */
    static addRequestDefault(request: ApiFetch['request']): ApiFetch['request'];
    /**
     * Modifies the default header data.
     *
     * Изменяет данные заголовка по умолчанию.
     */
    static setHeaders(headers: Record<string, string>): Api;
    /**
     * Modifies the default request data.
     *
     * Изменяет данные запроса по умолчанию.
     */
    static setRequestDefault(request: RefOrNormal<Record<string, any>>): void;
    /**
     * Change the base path to the script.
     *
     * Изменить базовый путь к скрипту.
     * @param url path to the script/ путь к скрипту
     */
    static setUrl(url: string): Api;
    /**
     * The function is modified for a call before the request.
     *
     * Изменить функцию перед запросом.
     * @param callback function for call/ функция для вызова
     */
    static setPreparation(callback: () => Promise<void>): Api;
    /**
     * Modify the function after the request.
     *
     * Изменить функцию после запроса.
     * @param callback function for call/ функция для вызова
     */
    static setEnd(callback: (query: Response) => Promise<ApiPreparationEnd>): Api;
    /**
     * To execute a request.
     *
     * Выполнить запрос.
     * @param pathRequest query string or list of parameters/ строка запроса или список параметров
     */
    static request<T>(pathRequest: string | ApiFetch): Promise<T>;
    /**
     * Sends a get method request.
     *
     * Отправляет запрос метода get.
     * @param request list of parameters/ список параметров
     */
    static get<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a post method request.
     *
     * Отправляет запрос метода post.
     * @param request list of parameters/ список параметров
     */
    static post<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a put method request.
     *
     * Отправляет запрос метода put.
     * @param request list of parameters/ список параметров
     */
    static put<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a delete method request.
     *
     * Отправляет запрос метода delete.
     * @param request list of parameters/ список параметров
     */
    static delete<T>(request: ApiFetch): Promise<T>;
    /**
     * Adding cached requests.
     *
     * Добавление кешированных запросов.
     * @param response data for caching/ данные для кеширования
     */
    static addResponse(response: ApiResponse | ApiResponse[]): Api;
    /**
     * Checks if there is a global cached request, if there is, returns it.
     *
     * Проверяет, есть ли глобальный кешированный запрос, если есть, возвращает его.
     * @param path link to the request/ ссылка на запрос
     * @param method request method/ метод запроса
     * @param request data for the request/ данные для запроса
     * @param devMode is it developer mode/ является ли режим разработчика
     */
    protected static getResponse(path: string | undefined, method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponse | undefined;
    /**
     * To execute a request.
     *
     * Выполнить запрос.
     * @param apiFetch property of the request/ свойство запроса
     */
    protected static fetch<T>(apiFetch: ApiFetch): Promise<T>;
    /**
     * Emulates an execution request.
     *
     * Эмулирует запрос выполнения.
     * @param response Data for pre-request/ Данные для пред-запроса
     * @param request data for the request/ данные для запроса
     */
    protected static fetchResponse<T>(response: ApiResponse, request?: ApiFetch['request']): Promise<T>;
    /**
     * Выполнение эмулятора, если доступно
     * @param apiFetch property of the request/ свойство запроса
     */
    protected static makeEmulator<T>(apiFetch: ApiFetch): Promise<T | undefined>;
    /**
     * Executing the request.
     *
     * Выполнение запроса.
     * @param apiFetch property of the request/ свойство запроса
     */
    protected static makeQuery(apiFetch: ApiFetch): Promise<Response>;
    /**
     * Preparation before executing the request.
     *
     * Подготовка перед выполнением запроса.
     */
    protected static makePreparation(): Promise<void>;
    /**
     * Analysis of the request after execution.
     *
     * Анализ запроса после выполнения.
     * @param query data received in the request/ данные, полученные в запросе
     */
    protected static makePreparationEnd(query: Response): Promise<ApiPreparationEnd>;
    /**
     * Transforms data if needed.
     *
     * Преобразует данные, если нужно.
     * @param data data for transformation/ данные для преобразования
     * @param toData is it necessary to process the data/ нужно ли обрабатывать данные
     */
    protected static makeData<T>(data: ApiData<T>, toData: boolean): T;
    /**
     * Enable loading for request emulation.
     *
     * Включить загрузку для эмуляции запроса.
     */
    protected static startResponseLoading(): void;
    /**
     * Disable loading for request emulation.
     *
     * Отключить загрузку для эмуляции запроса.
     */
    protected static stopResponseLoading(): void;
}
