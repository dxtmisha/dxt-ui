// md5:557415234235fc0e60c246e9bf121e6a true
import { type Plugin } from 'vue';
import { type InputSocialIcons } from '@dxtmisha/media';
import { type ApiConfig, type ErrorCenterCauseList, type ErrorCenterHandlerCallback, type ErrorCenterHandlerList, type IconsConfig, type TranslateConfig } from '@dxtmisha/functional-basic';
import type { Router } from 'vue-router';

/** Options for configuring the functional plugin. @keywords plugin, options, config */
export interface FunctionalPluginOptions {
    /** Configuration for the API client. */
    api?: ApiConfig;
    /** Configuration for the translation service. */
    translate?: TranslateConfig;
    /** Default geographical location or language code. */
    location?: string | (() => string);
    /** Suffix appended to all page titles. */
    metaSuffix?: string;
    /** Configuration for the icon management service. */
    icons?: IconsConfig;
    /** Configuration for the social icons service. */
    iconsSocial?: InputSocialIcons;
    /** Vue Router instance for navigation state management. */
    router?: Router;
    /** Error causes list for error center. */
    errorCauses?: ErrorCenterCauseList;
    /** Error handlers list for error center. */
    errorHandlers?: ErrorCenterHandlerList;
    /** Global error callback functions for error center. */
    errorCallbacks?: ErrorCenterHandlerCallback[];
}

/**
 * Vue plugin for initializing and configuring global functional services (API, Translate, Icons, Meta).
 * @keywords vue, plugin, api, translate, icons, meta, error-center
 * @example
 * ```typescript
 * import { createApp } from 'vue';
 * import { dxtFunctionalPlugin } from '@dxtmisha/functional';
 * import router from './router';
 *
 * const app = createApp(App);
 * app.use(dxtFunctionalPlugin, {
 *   api: { url: 'https://api.example.com' },
 *   metaSuffix: ' | My App',
 *   router
 * });
 * ```
 */
export declare const dxtFunctionalPlugin: Plugin;