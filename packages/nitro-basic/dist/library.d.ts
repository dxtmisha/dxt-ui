import { App } from 'vue';
import { FunctionalPluginOptions } from '@dxtmisha/functional';
import { Router } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';
import { RouterOptions } from 'vue-router';
import { SSRContext } from 'vue/server-renderer';

/**
 * Get injected value by name.
 *
 * Получение внедренного значения по имени.
 * @param name Key name / Имя ключа
 */
export declare function getInject<T>(name: string): T | undefined;

/**
 * Gets the pathname from the request URL.
 *
 * Получает путь из URL запроса.
 * @param request HTTP request / HTTP запрос
 */
export declare function getRequestUrl(request: Request): string;

/**
 * Inits the cookie storage plugin for the application.
 *
 * Внедряет хранилище cookie в приложение.
 * @param app Vue application instance / Экземпляр приложения Vue
 * @param request HTTP request / HTTP запрос
 */
export declare function initCookieStorage<T>(app: App<T>, request: Request): void;

/**
 * Initializes the API headers and provides them to the application.
 *
 * Инициализирует заголовки API и предоставляет их приложению.
 * @param app root component of the application / корневой компонент приложения
 */
export declare function initHeaders<T>(app: App<T>): void;

/**
 * Initializes the router for the application.
 *
 * Инициализирует маршрутизатор в приложении.
 * @param request HTTP request / HTTP запрос
 * @param router Vue router instance / Экземпляр маршрутизатора Vue
 */
export declare function initRouter(request: Request, router: Router | undefined): Promise<void>;

/**
 * Generate JSON scripts for hydration.
 *
 * Генерирует JSON-скрипты для гидратации.
 */
export declare function initScriptsJson(): string;

/**
 * Inits the server storage plugin for the application.
 *
 * Внедряет серверное хранилище в приложение.
 * @param app Vue application instance / Экземпляр приложения Vue
 */
export declare function initServerStorage<T>(app: App<T>): void;

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

/**
 * Key used to store the server-side headers object in the Vue app context/
 * Ключ, используемый для хранения объекта заголовков в контексте приложения Vue
 */
export declare const NITRO_API_HEADERS = "__ui_server_headers";

/**
 * Key used to store the server-side cookie object in the Vue app context/
 * Ключ, используемый для хранения объекта cookie в контексте приложения Vue
 */
export declare const NITRO_APP_COOKIE = "__ui_server_cookie";

/**
 * Key used to store the server-side storage object in the Vue app context/
 * Ключ, используемый для хранения объекта серверного хранилища в
 * контексте приложения Vue
 */
export declare const NITRO_APP_STORAGE = "__ui_server_storage";

/**
 * Configuration for basic Nitro initializations/
 * Конфигурация для базовых инициализаций Nitro
 */
export declare type NitroAppBasicConfig = {
    /** Api cache configuration / Конфигурация кэша API */
    api?: {
        /** Storage key prefix / Префикс ключа хранилища */
        cacheStorageKey?: string;
        /** Cache cleanup threshold / Порог очистки кэша */
        cacheStepAgeClearOld?: number;
    };
};

/**
 * Interface for Nitro application initialization options/
 * Интерфейс для опций инициализации приложения Nitro
 */
export declare interface NitroAppOptions extends FunctionalPluginOptions {
    /** Router configuration / Конфигурация маршрутизатора */
    appRouter?: {
        /** List of route records / Список записей маршрутов */
        routes: RouteRecordRaw[];
        /** Router creation options / Опции создания маршрутизатора */
        options?: NitroAppRouterOptions;
    };
}

/**
 * Interface for the partial router options /
 * Интерфейс для частичных опций маршрутизатора
 */
export declare type NitroAppRouterOptions = Partial<RouterOptions>;

/**
 * Initialize cookie storage.
 *
 * Инициализация хранилища cookie.
 */
export declare function uiCookieStorage(): void;

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
};

/**
 * Initializes the server-side application, including storage, routing, and SSR rendering.
 *
 * Инициализирует серверное приложение, включая хранилища, роутинг и SSR-рендеринг.
 * @param app root component of the application / корневой компонент приложения
 * @param request incoming server request / входящий запрос сервера
 * @param router optional router instance / экземпляр роутера (опционально)
 * @param context SSR context for the renderer / контекст SSR для рендерера
 * @param body HTML template for substitution / HTML-шаблон для подстановки
 * @returns rendered application data and metadata / данные отрендеренного приложения и метаданные
 */
export declare function uiCreateServerApp<T>(app: App<T>, request: Request, router?: Router | undefined, context?: SSRContext, body?: string): Promise<{
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

/**
 * Creates a router instance for SSR or client-side runtime.
 *
 * Создаёт экземпляр маршрутизатора для SSR или клиентской среды.
 * @param routes list of routes for the router/ список маршрутов для маршрутизатора
 * @param options router options/ опции маршрутизатора
 */
export declare function uiCreateSsrRouter(routes: RouteRecordRaw[], options?: NitroAppRouterOptions): Router;

/**
 * Initializes the server-side storage for the application.
 *
 * This function sets up the global `ServerStorage` by providing a mechanism
 * to retrieve the storage object from the Vue application context using `inject`.
 * It looks for the `NITRO_APP_STORAGE` key.
 *
 * Инициализирует серверное хранилище для приложения.
 *
 * Эта функция настраивает глобальный `ServerStorage`, предоставляя механизм
 * для получения объекта хранилища из контекста приложения Vue с помощью `inject`.
 * Она ищет ключ `NITRO_APP_STORAGE`.
 */
export declare function uiServerStorage(): void;

/**
 * Composable for getting request headers.
 *
 * Композабл для получения заголовков запроса.
 * @param name Header name / Имя заголовка
 */
export declare function useHeaders(name: string): string | undefined;

export declare function useHeaders(): Headers | undefined;

export { }
