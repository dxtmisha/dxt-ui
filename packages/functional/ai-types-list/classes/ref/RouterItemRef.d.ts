// md5:8f0ceac558da924375efe8430f3b4898
import type { LocationQueryRaw, RouteLocationRaw, RouteParamsRawGeneric, Router } from 'vue-router';
import type { ConstrHrefProps } from '../../types/constructorTypes';
/**
 * Static facade for an installed Vue Router instance stored through `ServerStorage`. It resolves named routes to href properties and dispatches navigation.
 *
 * Статический фасад установленного Vue Router, сохранённого через `ServerStorage`. Разрешает именованные маршруты в свойства href и запускает навигацию.
 */
export declare class RouterItemRef {
    /**
     * Returns the registered router; it may be absent at runtime.
     *
     * Возвращает зарегистрированный роутер; фактически он может отсутствовать.
     * @returns Registered router, or undefined when none is installed. / Зарегистрированный роутер либо undefined при его отсутствии.
     */
    static get(): import("vue-router")._RouterClassic;
    /**
     * Resolves a named location to `router.resolve(...).href`, or returns `undefined` without a router.
     *
     * Разрешает именованное местоположение в `router.resolve(...).href`; без роутера возвращает `undefined`.
     * @param name Registered route name. / Имя зарегистрированного маршрута.
     * @param params Named-route parameters. / Параметры именованного маршрута.
     * @param query Route query parameters. / Параметры строки запроса маршрута.
     * @param hash Route fragment including its leading #. / Фрагмент маршрута с начальным #.
     * @returns Requested string, or undefined when unavailable. / Запрошенная строка либо undefined при отсутствии.
     */
    static getLink(name: string, params?: RouteParamsRawGeneric, query?: LocationQueryRaw, hash?: string): string | undefined;
    /**
     * Returns `{ href }` for a nonempty resolved link, otherwise `{}`.
     *
     * Возвращает `{ href }` для непустой разрешённой ссылки, иначе `{}`.
     * @param name Registered route name. / Имя зарегистрированного маршрута.
     * @param params Named-route parameters. / Параметры именованного маршрута.
     * @param query Route query parameters. / Параметры строки запроса маршрута.
     * @param hash Route fragment including its leading #. / Фрагмент маршрута с начальным #.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    static getHref(name?: string, params?: RouteParamsRawGeneric, query?: LocationQueryRaw, hash?: string): ConstrHrefProps;
    /**
     * Starts router navigation when a router is registered.
     *
     * Запускает навигацию при наличии зарегистрированного роутера.
     * @param to Raw route location. / Необработанное местоположение маршрута.
     * @returns No return value. / Нет возвращаемого значения.
     */
    static push(to: string | RouteLocationRaw): void;
    /**
     * Stores or replaces the router in the current context.
     *
     * Сохраняет или заменяет роутер текущего контекста.
     * @param router Vue Router instance to register. / Регистрируемый экземпляр Vue Router.
     * @returns No return value. / Нет возвращаемого значения.
     */
    static set(router: Router): void;
    /**
     * Registers the router only if no router has been stored.
     *
     * Регистрирует роутер только при отсутствии сохранённого.
     * @param router Vue Router instance to register. / Регистрируемый экземпляр Vue Router.
     * @returns No return value. / Нет возвращаемого значения.
     */
    static setOneTime(router: Router): void;
    /**
     * Converts a named raw location to href props, retaining params, query and hash.
     *
     * Преобразует именованное местоположение в href-свойства, сохраняя параметры, query и hash.
     * @param to Raw route location. / Необработанное местоположение маршрута.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    static rawToHref(to?: string | RouteLocationRaw): ConstrHrefProps;
}
