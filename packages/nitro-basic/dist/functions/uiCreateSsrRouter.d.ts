import { RouteRecordRaw, Router } from 'vue-router';
import { NitroAppRouterOptions } from '../types/nitroAppTypes';
/**
 * Creates a router instance for SSR or client-side runtime.
 *
 * Создаёт экземпляр маршрутизатора для SSR или клиентской среды.
 * @param routes list of routes for the router/ список маршрутов для маршрутизатора
 * @param options router options/ опции маршрутизатора
 */
export declare function uiCreateSsrRouter(routes: RouteRecordRaw[], options?: NitroAppRouterOptions): Router;
