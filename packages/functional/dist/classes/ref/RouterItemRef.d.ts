import { RouteLocationRaw, Router } from 'vue-router';
import { ConstrHrefProps } from '../../types/constructorTypes';
/**
 * Router management class.
 *
 * Класс управления роутером.
 */
export declare class RouterItemRef {
    /**
     * Get router instance.
     *
     * Получить экземпляр роутера.
     */
    static get(): Router;
    /**
     * Returns the link by name.
     *
     * Возвращает ссылку по имени.
     * @param name route name/ имя маршрута
     * @param params route parameters/ параметры маршрута
     * @param query route query/ запрос маршрута
     */
    static getLink(name: string, params?: any, query?: any): string | undefined;
    /**
     * Returns the link property by name.
     *
     * Возвращает свойство ссылки по имени.
     * @param name route name/ имя маршрута
     * @param params route parameters/ параметры маршрута
     * @param query route query/ запрос маршрута
     */
    static getHref(name?: string, params?: any, query?: any): ConstrHrefProps;
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
    /**
     * Converts the raw route location to href properties.
     *
     * Преобразует необработанное местоположение маршрута в свойства href.
     * @param to raw route location/ необработанное местоположение маршрута
     */
    static rawToHref(to?: string | RouteLocationRaw): ConstrHrefProps;
}
