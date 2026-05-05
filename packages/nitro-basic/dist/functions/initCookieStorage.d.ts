import { App } from 'vue';
/**
 * Inits the cookie storage plugin for the application.
 *
 * Внедряет хранилище cookie в приложение.
 * @param app Vue application instance / Экземпляр приложения Vue
 * @param request HTTP request / HTTP запрос
 */
export declare function initCookieStorage<T>(app: App<T>, request: Request): void;
