/**
 * Working with data stored in hash.
 *
 * Работа с данными сохраненными в хеш.
 */
export declare class Hash {
    private static hash;
    private static watch;
    private static block;
    /**
     * Get data from hash.
     *
     * Получение данных из хэша.
     * @param name variable names/ названия переменных
     * @param defaultValue value or function to change data/ значение или функция для изменения данных
     */
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    /**
     * Change data in hash.
     *
     * Изменение данных в хэше.
     * @param name variable names/ названия переменных
     * @param callback value or function to change data/ значение или функция для изменения данных
     */
    static set<T>(name: string, callback: T | (() => T)): void;
    /**
     * Adding an event when data is changed.
     *
     * Добавление события при изменении данных.
     * @param name variable names/ названия переменных
     * @param callback the function is called when the data is changed/ функция вызывается при изменении данных
     */
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    /**
     * Obtaining data from the URL string.
     *
     * Получение данных из строки URL.
     */
    private static getLocation;
    /**
     * Update hash string in URL.
     *
     * Обновление строки хэша в URL.
     */
    private static update;
    /**
     * Update hash variable from URL string.
     *
     * Обновление переменной хэша из строки URL.
     */
    private static reload;
    /**
     * Calling all functions whose data has changed.
     *
     * Вызов всех функций, у которых были изменены данные.
     * @param location fresh data/ свежий данные
     */
    private static makeWatch;
}
