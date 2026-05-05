import { Router } from 'vue-router';
import { NitroAppOptions } from '../types/nitroAppTypes';
import { App } from 'vue';
/**
 * Creates a Vue SSR application instance and initializes core plugins.
 *
 * Создаёт экземпляр приложения Vue SSR и инициализирует основные плагины.
 * @param appComponent root component of the application/ корневой компонент приложения
 * @param options application configuration options/ опции конфигурации приложения
 */
export declare function uiCreateApp<A = any>(appComponent: A, options?: NitroAppOptions): {
    app: App<Element>;
    router: Router | undefined;
    options: NitroAppOptions;
};
