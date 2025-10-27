import { ApiPreparationEnd } from '../types/apiTypes';
/**
 * Class for preparing requests.
 *
 * Класс для подготовки запросов.
 */
export declare class ApiPreparation {
    /** Function for call before the request/ Функция для вызова перед запросом */
    protected callback?: () => Promise<void>;
    /** Function for call after the request/ Функция для вызова после запроса */
    protected callbackEnd?: (query: Response) => Promise<ApiPreparationEnd>;
    /** Is the preparation in progress/ Идет ли подготовка */
    protected loading: boolean;
    /**
     * Preparation before executing the request.
     *
     * Подготовка перед выполнением запроса.
     * @param active is preparation active/ активна ли подготовка
     */
    make(active: boolean): Promise<void>;
    /**
     * Analysis of the request after execution.
     *
     * Анализ запроса после выполнения.
     * @param active is preparation active/ активна ли подготовка
     * @param query data received in the request/ данные, полученные в запросе
     */
    makeEnd(active: boolean, query: Response): Promise<ApiPreparationEnd>;
    /**
     * The function is modified for a call before the request.
     *
     * Изменить функцию перед запросом.
     * @param callback function for call/ функция для вызова
     */
    set(callback: () => Promise<void>): this;
    /**
     * Modify the function after the request.
     *
     * Изменить функцию после запроса.
     * @param callback function for call/ функция для вызова
     */
    setEnd(callback: (query: Response) => Promise<ApiPreparationEnd>): this;
    /**
     * To execute preparation.
     *
     * Выполнить подготовку.
     */
    protected go(): Promise<void>;
    /**
     * Analysis of the request after execution.
     *
     * Анализ запроса после выполнения.
     * @param query data received in the request/ данные, полученные в запросе
     */
    protected end(query: Response): Promise<ApiPreparationEnd>;
}
