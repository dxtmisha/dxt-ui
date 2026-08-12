// md5:7b801c7b36e1f2f60f51ede64582fc89
import { QueryInstance } from './QueryInstance';
/**
 * Static class for working with data stored in the URL query parameters.
 * Provides a centralized interface delegating to QueryInstance.
 *
 * Статический класс для работы с данными, сохранёнными в query-параметрах URL.
 * Предоставляет централизованный интерфейс, делегируя вызовы QueryInstance.
 */
export declare class Query {
    /**
     * Returns a request-isolated instance of QueryInstance.
     *
     * Возвращает изолированный в рамках запроса экземпляр QueryInstance.
     * @returns QueryInstance instance / экземпляр QueryInstance
     */
    static getItem(): QueryInstance;
    /**
     * Get data from query.
     *
     * Получение данных из query-параметров.
     * @param name variable name / название переменной
     * @param defaultValue value or function to change data / значение или функция для изменения данных
     * @returns stored value / сохранённое значение
     */
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    /**
     * Change data in query.
     *
     * Изменение данных в query-параметрах.
     * @param name variable name / название переменной
     * @param callback value or function to change data / значение или функция для изменения данных
     */
    static set<T>(name: string, callback: T | (() => T)): void;
    /**
     * Adding an event when data is changed.
     *
     * Добавление события при изменении данных.
     * @param name variable name / название переменной
     * @param callback the function is called when the data is changed / функция вызывается при изменении данных
     */
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    /**
     * Removing an event when data is changed.
     *
     * Удаление события при изменении данных.
     * @param name variable name / название переменной
     * @param callback the function is called when the data is changed / функция вызывается при изменении данных
     */
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    /**
     * Update query variables from URL string.
     *
     * Обновление переменных query-параметров из строки URL.
     * @returns void / ничего не возвращает
     */
    static reload(): void;
}
