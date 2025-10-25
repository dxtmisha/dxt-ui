import { RouteLocationRaw, Router } from 'vue-router';
/**
 * Router management class.
 *
 * Класс управления роутером.
 */
export declare class RouterItemRef {
    protected static router?: Router;
    /**
     * Get router instance.
     *
     * Получить экземпляр роутера.
     */
    static get(): Router | undefined;
    /**
     * Site path change.
     *
     * Изменение пути сайта.
     * @param to new path/ новый путь
     */
    static push(to: string | RouteLocationRaw): void;
    /**
     * Set router instance.
     *
     * Установить экземпляр роутера.
     * @param router router instance/ экземпляр роутера
     */
    static set(router: Router): void;
    /**
     * Set router instance only once.
     *
     * Установить экземпляр роутера только один раз.
     * @param router router instance/ экземпляр роутера
     */
    static setOneTime(router: Router): void;
}
