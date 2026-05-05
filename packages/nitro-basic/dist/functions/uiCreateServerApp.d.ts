import { App } from 'vue';
import { Router } from 'vue-router';
import { SSRContext } from 'vue/server-renderer';
import { NitroAppOptions } from '../types/nitroAppTypes';
/**
 * Initializes the server-side application, including storage, routing, and SSR rendering.
 *
 * Инициализирует серверное приложение, включая хранилища, роутинг и SSR-рендеринг.
 * @param app root component of the application / корневой компонент приложения
 * @param request incoming server request / входящий запрос сервера
 * @param router optional router instance / экземпляр роутера (опционально)
 * @param options configuration options for the application / параметры конфигурации приложения
 * @param action additional action to perform before rendering / дополнительное действие перед рендерингом
 * @param context SSR context for the renderer / контекст SSR для рендерера
 * @param body HTML template for substitution / HTML-шаблон для подстановки
 * @returns rendered application data and metadata / данные отрендеренного приложения и метаданные
 */
export declare function uiCreateServerApp<T>(app: App<T>, request: Request, router?: Router | undefined, options?: NitroAppOptions, action?: (app: App<T>) => Promise<void> | void, context?: SSRContext, body?: string): Promise<{
    appHtml: string;
    teleportsHtml: string;
    context: SSRContext;
    headers: Headers | undefined;
    lang: string;
    title: string;
    meta: string;
    scriptsJson: string;
    body: string;
}>;
