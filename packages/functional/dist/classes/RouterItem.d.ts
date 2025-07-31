import { RouteLocationRaw, Router } from 'vue-router';
/**
 * Router management class.
 *
 * Класс управления роутером.
 */
export declare class RouterItem {
    protected static router?: Router;
    static get(): Router | undefined;
    /**
     * Site path change.<br>
     * Изменение пути сайта.
     * @param to new path/ новый путь
     */
    static push(to: string | RouteLocationRaw): void;
    static set(router: Router): void;
    static setOneTime(router: Router): void;
}
