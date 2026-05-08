import { Plugin } from 'vue';
import { ApiConfig, ErrorCenterCauseList, IconsConfig, TranslateConfig } from '@dxtmisha/functional-basic';
import { Router } from 'vue-router';
/**
 * Interface for the functional plugin options /
 * Интерфейс для опций функционального плагина
 */
export interface FunctionalPluginOptions {
    /**
     * Configuration for the API client /
     * Конфигурация для API-клиента
     */
    api?: ApiConfig;
    /**
     * Configuration for the translation service /
     * Конфигурация для сервиса переводов
     */
    translate?: TranslateConfig;
    /**
     * Suffix to be appended to all page titles /
     * Суффикс, который будет добавляться ко всем заголовкам страниц
     */
    metaSuffix?: string;
    /**
     * Configuration for the icon management service /
     * Конфигурация для сервиса управления иконками
     */
    icons?: IconsConfig;
    /**
     * Vue Router instance for global navigation state management /
     * Экземпляр Vue Router для глобального управления состоянием навигации
     */
    router?: Router;
    /**
     * Error causes list for error center /
     * Список причин ошибок для центра ошибок
     */
    errorCauses?: ErrorCenterCauseList;
}
/**
 * Vue plugin for initializing and configuring global functional services
 * (Api, Translate, Icons, Meta).
 *
 * Vue плагин для инициализации и настройки глобальных функциональных сервисов
 * (Api, Translate, Icons, Meta).
 *
 * @example
 * ```typescript
 * import { createApp } from 'vue'
 * import { dxtFunctionalPlugin } from '@dxtmisha/functional'
 * import router from './router'
 *
 * const app = createApp(App)
 * app.use(dxtFunctionalPlugin, {
 *   api: { url: 'https://api.example.com' },
 *   metaSuffix: ' | My App',
 *   router
 * })
 * ```
 */
export declare const dxtFunctionalPlugin: Plugin;
