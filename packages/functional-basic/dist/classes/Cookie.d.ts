import { CookieOptions } from './CookieStorage';
/**
 * Class for working with cookies.
 *
 * Класс для управления Cookie.
 */
export declare class Cookie<T> {
    private name;
    /**
     * Returns an instance of the class according to the specified cookie name.
     *
     * Возвращает экземпляр класса по указанному имени cookie.
     * @param name cookie name/ название cookie
     */
    static getInstance<T>(name: string): Cookie<unknown>;
    /** Cookie value / Значение cookie */
    private value?;
    /** Cookie options / Параметры cookie */
    private options;
    /**
     * Constructor
     * @param name cookie name/ название cookie
     */
    constructor(name: string);
    /**
     * Get data or update if none.
     *
     * Получает данные или обновляет, если их нет.
     * @param defaultValue value or function to change data / значение или функция для изменения данных
     * @param options additional parameters / дополнительные параметры
     * @returns cookie value / значение cookie
     */
    get(defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): string | T | undefined;
    /**
     * Updates cookie data.
     *
     * Обновляет данные cookie.
     * @param value value or function to change data / значение или функция для изменения данных
     * @param options additional parameters / дополнительные параметры
     */
    set(value?: T | string | (() => (T | string)), options?: CookieOptions): void;
    /**
     * Delete cookie data.
     *
     * Удаление данных из cookie.
     */
    remove(): void;
    /**
     * Update cookie data.
     *
     * Обновление данных cookie.
     */
    private update;
}
