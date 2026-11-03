// md5:25958ad8920b1a1991b3ef69ae33fc2c true
import { type Plugin } from 'vue';
import { type InputSocialIcons } from '@dxtmisha/media';
import { type ApiConfig, type ErrorCenterCauseList, type ErrorCenterHandlerCallback, type ErrorCenterHandlerList, type IconsConfig, type TranslateConfig } from '@dxtmisha/functional-basic';
import type { Router } from 'vue-router';
/** Configuration options for functional services plugin. @keywords plugin, options, config */
export interface FunctionalPluginOptions {
    /** Configuration for the API client. */
    api?: ApiConfig;
    /** Configuration for the translation service. */
    translate?: TranslateConfig;
    /** Default geographical location or language code. */
    location?: string | (() => string);
    /** Suffix to be appended to all page titles. */
    metaSuffix?: string;
    /** Configuration for the icon management service. */
    icons?: IconsConfig;
    /** Configuration for the social network icons service. */
    iconsSocial?: InputSocialIcons;
    /** Vue Router instance for global navigation state management. */
    router?: Router;
    /** Error causes list for error center. */
    errorCauses?: ErrorCenterCauseList;
    /** Error handlers list for error center. */
    errorHandlers?: ErrorCenterHandlerList;
    /** Global error callback functions for error center. */
    errorCallbacks?: ErrorCenterHandlerCallback[];
}
/**
 * Vue plugin for initializing and configuring global functional services. @keywords vue, plugin, functional, api, translate, icons, meta
 * @example
 * 
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
 * 
 */
export declare const dxtFunctionalPlugin: Plugin;