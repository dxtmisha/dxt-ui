import { ApiHeaders } from './ApiHeaders';
import { ApiDefault } from './ApiDefault';
import { ApiStatus } from './ApiStatus';
import { ApiResponse } from './ApiResponse';
import { ApiPreparation } from './ApiPreparation';
import { ApiData, ApiFetch, ApiMethodItem, ApiPreparationEnd } from '../types/apiTypes';
/**
 * Class for working with requests.
 *
 * Класс для работы с запросами.
 */
export declare class Api {
    protected static url: string;
    protected static headers: ApiHeaders;
    protected static requestDefault: ApiDefault;
    protected static status: ApiStatus;
    protected static response: ApiResponse;
    protected static preparation: ApiPreparation;
    /**
     * Is the server local.
     *
     * Является ли сервер локальный.
     */
    static isLocalhost(): boolean;
    /**
     * Returns the status of the last request.
     *
     * Возвращает статус последнего запроса.
     */
    static getStatus(): ApiStatus;
    /**
     * Getting the response handler.
     *
     * Получение обработчика ответа.
     */
    static getResponse(): ApiResponse;
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
    static setRequestDefault(request: Record<string, any>): Api;
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
     * To execute a request.
     *
     * Выполнить запрос.
     * @param apiFetch property of the request/ свойство запроса
     */
    protected static fetch<T>(apiFetch: ApiFetch): Promise<T>;
    /**
     * Reading data from the response.
     *
     * Чтение данных из ответа.
     * @param query response from the server/ ответ от сервера
     * @param queryReturn custom function for reading data/ кастомная функция для чтения данных
     * @param end finalization data/ данные финализации
     */
    protected static readData(query: Response, queryReturn: ApiFetch['queryReturn'], end: ApiPreparationEnd): Promise<any>;
    /**
     * Executing the request.
     *
     * Выполнение запроса.
     * @param apiFetch property of the request/ свойство запроса
     */
    protected static makeQuery(apiFetch: ApiFetch): Promise<Response>;
    /**
     * Transforms data if needed.
     *
     * Преобразует данные, если нужно.
     * @param data data for transformation/ данные для преобразования
     * @param toData is it necessary to process the data/ нужно ли обрабатывать данные
     */
    protected static makeData<T>(data: ApiData<T>, toData: boolean): T;
}
