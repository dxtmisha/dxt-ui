/**
 * Static utility class for storing and retrieving application-wide global data.
 *
 * Статический служебный класс для хранения и получения глобальных данных приложения.
 */
export declare class Global {
    /**
     * Returns the instance of the class.
     *
     * Возвращает инстанс класса.
     * @returns global data storage / хранилище глобальных данных
     */
    static getItem(): Record<string, any>;
    /**
     * Returns the value by its name.
     *
     * Возвращает значение по его имени.
     * @param name property name/ название свойства
     */
    static get<R = any>(name: string): R;
    /**
     * Adds data, this method works only once.
     *
     * Добавляет данные, этот метод работает только 1 раз.
     * @param data global data/ глобальные данные
     * @returns void
     */
    static add(data: Record<string, any>): void;
}
