/**
 * Class for working with data stored in the URL hash.
 *
 * Класс для работы с данными, сохранёнными в хеше URL.
 */
export declare class HashInstance {
    private hash?;
    private watch;
    private block;
    private time?;
    /**
     * Get data from hash.
     *
     * Получение данных из хэша.
     * @param name variable name / название переменной
     * @param defaultValue value or function to change data / значение или функция для изменения данных
     * @returns stored value / сохранённое значение
     */
    get<T>(name: string, defaultValue?: T | (() => T)): T;
    /**
     * Change data in hash.
     *
     * Изменение данных в хэше.
     * @param name variable name / название переменной
     * @param callback value or function to change data / значение или функция для изменения данных
     * @returns this instance / текущий экземпляр
     */
    set<T>(name: string, callback: T | (() => T)): this;
    /**
     * Adding an event when data is changed.
     *
     * Добавление события при изменении данных.
     * @param name variable name / название переменной
     * @param callback the function is called when the data is changed / функция вызывается при изменении данных
     * @returns this instance / текущий экземпляр
     */
    addWatch<T>(name: string, callback: (value: T) => void): this;
    /**
     * Removing an event when data is changed.
     *
     * Удаление события при изменении данных.
     * @param name variable name / название переменной
     * @param callback the function is called when the data is changed / функция вызывается при изменении данных
     * @returns this instance / текущий экземпляр
     */
    removeWatch<T>(name: string, callback: (value: T) => void): this;
    /**
     * Update hash variable from URL string.
     *
     * Обновление переменной хэша из строки URL.
     * @returns this instance / текущий экземпляр
     */
    reload(): this;
    /**
     * Obtaining data from the URL string.
     *
     * Получение данных из строки URL.
     * @returns Record<string, any> hash data / данные хэша
     */
    private getLocation;
    /**
     * Returns the hash object, initializing if needed.
     *
     * Возвращает объект хэша, инициализируя при необходимости.
     * @returns Record<string, any> hash object / объект хэша
     */
    private getHash;
    /**
     * Initializes hash data and registers the hashchange listener.
     *
     * Инициализирует данные хэша и регистрирует слушатель hashchange.
     * @returns this instance / текущий экземпляр
     */
    private init;
    /**
     * Reads hash data from the URL and triggers watchers.
     *
     * Считывает данные хэша из URL и вызывает наблюдателей.
     * @returns this instance / текущий экземпляр
     */
    private initData;
    /**
     * Update hash string in URL.
     *
     * Обновление строки хэша в URL.
     */
    private update;
    /**
     * Calling all functions whose data has changed.
     *
     * Вызов всех функций, у которых были изменены данные.
     * @param location fresh data / свежие данные
     */
    private makeWatch;
}
