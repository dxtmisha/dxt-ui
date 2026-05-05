import { App } from 'vue';
import { SSRContext } from 'vue/server-renderer';
/**
 * Renders the Vue application to a string and extracts context data.
 *
 * Рендерит приложение Vue в строку и извлекает данные контекста.
 * @param app Vue application instance / Экземпляр приложения Vue
 * @param context SSR context / Контекст SSR
 */
export declare function initSsrApp<T>(app: App<T>, context?: SSRContext): Promise<{
    appHtml: string;
    teleportsHtml: string;
    context: SSRContext;
}>;
