import { Router } from 'vue-router';
/**
 * Initializes the router for the application.
 *
 * Инициализирует маршрутизатор в приложении.
 * @param request HTTP request / HTTP запрос
 * @param router Vue router instance / Экземпляр маршрутизатора Vue
 */
export declare function initServerRouter(request: Request, router: Router | undefined): Promise<void>;
