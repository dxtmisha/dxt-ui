// md5:25958ad8920b1a1991b3ef69ae33fc2c
import { type Plugin } from 'vue';
import { type InputSocialIcons } from '@dxtmisha/media';
import { type ApiConfig, type ErrorCenterCauseList, type ErrorCenterHandlerCallback, type ErrorCenterHandlerList, type IconsConfig, type TranslateConfig } from '@dxtmisha/functional-basic';
import type { Router } from 'vue-router';
/**
 * Interface for the functional plugin options /
 * Интерфейс для опций функционального плагина
 */
export interface FunctionalPluginOptions {
    /** Configuration for the API client / Конфигурация для API-клиента */
    api?: ApiConfig;
    /** Configuration for the translation service / Конфигурация для сервиса переводов */
    translate?: TranslateConfig;
    /** Default geographical location or language code / Код географического местоположения или языка по умолчанию */
    location?: string | (() => string);
    /** Suffix to be appended to all page titles / Суффикс, который будет добавляться ко всем заголовкам страниц */
    metaSuffix?: string;
    /** Configuration for the icon management service / Конфигурация для сервиса управления иконками */
    icons?: IconsConfig;
    /** Configuration for the social networks icons management service / Конфигурация для сервиса управления иконками социальных сетей */
    iconsSocial?: InputSocialIcons;
    /** Vue Router instance for global navigation state management / Экземпляр Vue Router для глобального управления состоянием навигации */
    router?: Router;
    /** Error causes list for error center / Список причин ошибок для центра ошибок */
    errorCauses?: ErrorCenterCauseList;
    /** Error handlers list for error center / Список обработчиков ошибок для центра ошибок */
    errorHandlers?: ErrorCenterHandlerList;
    /** Global error callback functions for error center / Список глобальных функций обратного вызова для центра ошибок */
    errorCallbacks?: ErrorCenterHandlerCallback[];
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
