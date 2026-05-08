import { ApiFetch, ApiPreparationEnd } from '../types/apiTypes';
/**
 * Class for preparing requests.
 *
 * Класс для подготовки запросов.
 */
export declare class ApiPreparation {
    /** Function for call before the request / Функция для вызова перед запросом */
    protected callback?: (apiFetch: ApiFetch) => Promise<void>;
    /** Function for call after the request / Функция для вызова после запроса */
    protected callbackEnd?: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>;
    /** Is the preparation in progress / Идет ли подготовка */
    protected loading: boolean;
    /**
     * Executes preparation before the request.
     *
     * Выполняет подготовку перед выполнением запроса.
     * @param active is preparation active / активна ли подготовка
     * @param apiFetch request options / опции запроса
     * @returns Promise<void> / Promise без возвращаемого значения
     */
    make(active: boolean, apiFetch: ApiFetch): Promise<void>;
    /**
     * Analyzes the request after execution.
     *
     * Анализирует запрос после выполнения.
     * @param active is preparation active / активна ли подготовка
     * @param query data received in the request / данные, полученные в запросе
     * @param apiFetch request options / опции запроса
     * @returns preparation end data / данные завершения подготовки
     */
    makeEnd(active: boolean, query: Response, apiFetch: ApiFetch): Promise<ApiPreparationEnd>;
    /**
     * Modifies the function to be called before the request.
     *
     * Изменяет функцию для вызова перед запросом.
     * @param callback function to call before request / функция для вызова перед запросом
     * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
     */
    set(callback: (apiFetch: ApiFetch) => Promise<void>): this;
    /**
     * Modifies the function to be called after the request.
     *
     * Изменяет функцию для вызова после запроса.
     * @param callback function to call after request / функция для вызова после запроса
     * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
     */
    setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this;
    /**
     * To execute preparation.
     *
     * Выполнить подготовку.
     * @param apiFetch request options / опции запроса
     * @param limit limit of retry attempts / лимит попыток повтора
     * @returns Promise<void> / Promise без возвращаемого значения
     */
    protected go(apiFetch: ApiFetch, limit?: number): Promise<void>;
}
