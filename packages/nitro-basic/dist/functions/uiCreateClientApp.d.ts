import { App } from 'vue';
import { Router } from 'vue-router';
import { NitroAppOptions } from '../types/nitroAppTypes';
/**
 * Finalizes the initialization and mount of the Vue application on the client side.
 * It waits for the router to be ready to avoid hydration mismatches and then mounts the application
 * to the specified container.
 *
 * Завершает инициализацию и монтирует приложение Vue на стороне клиента.
 * Ожидает готовности роутера для предотвращения ошибок гидратации, после чего монтирует
 * приложение в указанный контейнер.
 *
 * @param app current Vue application instance / текущий экземпляр приложения Vue
 * @param rootContainer selector or element for mounting / селектор или элемент для монтирования
 * @param router instance of Vue Router / экземпляр Vue Router
 * @param options configuration options for the application / параметры конфигурации приложения
 * @param action additional action to perform before mounting / дополнительное действие перед монтированием
 */
export declare function uiCreateClientApp<T>(app: App<T>, rootContainer?: string | T, router?: Router | undefined, options?: NitroAppOptions, action?: (app: App<T>) => Promise<void> | void): Promise<void>;
