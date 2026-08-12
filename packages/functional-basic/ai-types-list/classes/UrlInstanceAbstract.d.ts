// md5:bad131cd89440c0332f7c1f9743e7729
/**
 * Base abstract class for working with URL-based states (Hash, Query).
 *
 * Базовый абстрактный класс для работы с состояниями на основе URL (Hash, Query).
 */
export declare abstract class UrlInstanceAbstract {
    /** URL state data record / Запись данных состояния URL */
    protected data?: Record<string, any>;
    /** Watchers map for URL state variables / Карта слушателей для переменных состояния URL */
    protected watch: Record<string, ((value: any) => void)[]>;
    /** Update block flag / Флаг блокировки обновления */
    protected block: boolean;
    /** Debounce timer instance / Экземпляр таймера задержки */
    protected time?: any;
    /**
     * Get data.
     *
     * Получение данных.
     * @param name variable name / название переменной
     * @param defaultValue value or function to change data / значение или функция для изменения данных
     * @returns stored value / сохранённое значение
     */
    get<T>(name: string, defaultValue?: T | (() => T)): T;
    /**
     * Change data.
     *
     * Изменение данных.
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
     * Update variables from URL string.
     *
     * Обновление переменных из строки URL.
     * @returns this instance / текущий экземпляр
     */
    reload(): this;
    /**
     * Returns the query/hash data object, initializing if needed.
     *
     * Возвращает объект данных, инициализируя при необходимости.
     * @returns Record<string, any> data object / объект данных
     */
    protected getData(): Record<string, any>;
    /**
     * Reads data from the URL and triggers watchers.
     *
     * Считывает данные из URL и вызывает наблюдателей.
     * @returns this instance / текущий экземпляр
     */
    protected initData(): this;
    /**
     * Calling all functions whose data has changed.
     *
     * Вызов всех функций, у которых были изменены данные.
     * @param location fresh data / свежие данные
     * @returns this instance / текущий экземпляр
     */
    protected makeWatch(location: Record<string, any>): this;
    /**
     * Initializes data and event listeners.
     *
     * Инициализирует данные и слушатели событий.
     */
    protected abstract init(): this;
    /**
     * Obtaining data from the URL string.
     *
     * Получение данных из строки URL.
     */
    protected abstract getLocation(): Record<string, any>;
    /**
     * Update string in URL.
     *
     * Обновление строки в URL.
     */
    protected abstract update(): this;
}
