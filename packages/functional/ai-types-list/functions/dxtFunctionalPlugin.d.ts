// md5:110dc25413b01aa86a6a98bb105d7e77 true
import { type Plugin } from 'vue';
import { type InputSocialIcons } from '@dxtmisha/media';
import { type ApiConfig, type ErrorCenterCauseList, type ErrorCenterHandlerCallback, type ErrorCenterHandlerList, type IconsConfig, type TranslateConfig } from '@dxtmisha/functional-basic';
import type { Router } from 'vue-router';
import type { ComponentStorageList } from '../types/componentStorageTypes';

/** Configuration options for the functional plugin. @keywords plugin, options, config */
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
    /** Configuration for social network icons. */
    iconsSocial?: InputSocialIcons;
    /** Vue Router instance for global navigation state management. */
    router?: Router;
    /** Error causes list for ErrorCenter. */
    errorCauses?: ErrorCenterCauseList;
    /** Error handlers list for ErrorCenter. */
    errorHandlers?: ErrorCenterHandlerList;
    /** Global error callback functions for ErrorCenter. */
    errorCallbacks?: readonly ErrorCenterHandlerCallback[];
    /** List of Vue components for registration in component storage. */
    components?: ComponentStorageList;
}

/**
 * Vue plugin for initializing and configuring global functional services (Api, Translate, Icons, Meta).
 * @keywords plugin, functional, setup, api, translate, icons, meta
 * @example
 * 
 * import { createApp } from 'vue'
 * import { dxtFunctionalPlugin } from '@dxtmisha/functional'
 * import router from './router'
 *
 * const app = createApp(App)
 * app.use(dxtFunctionalPlugin, {
 *   api: { urlRoot: 'https://api.example.com' },
 *   metaSuffix: ' | My App',
 *   router
 * })
 * 
 */
export declare const dxtFunctionalPlugin: Plugin<[options?: FunctionalPluginOptions]>;