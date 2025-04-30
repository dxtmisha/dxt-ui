type CookieSameSite = 'strict' | 'lax';
export type CookieOptions = {
    age?: number;
    sameSite?: CookieSameSite;
    arguments?: string[];
};
/**
 * Class for working with cookies.
 *
 * Класс для управления Cookie.
 */
export declare class Cookie<T> {
    private name;
    value?: T | string;
    private options;
    constructor(name: string);
    /**
     * Get data or update if none.
     *
     * Получает данные или обновляет, если их нет.
     * @param defaultValue value or function to change data/ значение или функция для изменения данных
     * @param options additional parameters/ дополнительные параметры
     */
    get(defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): string | T | undefined;
    /**
     * Updates cookie data.
     *
     * Обновляет данные cookie.
     * @param value value or function to change data/ значение или функция для изменения данных
     * @param options additional parameters/ дополнительные параметры
     */
    set(value?: T | string | (() => (T | string)), options?: CookieOptions): void;
    /**
     * Delete cookie data.
     *
     * Удаление данных из cookie.
     */
    remove(): void;
    /**
     * Returns cache time.
     *
     * Возвращает время кэширования.
     */
    private getAge;
    /**
     * Update cookie data.
     *
     * Обновление данных cookie.
     */
    private update;
}
export {};
