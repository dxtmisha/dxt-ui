// md5:23b727b3b6169c7179d6a81ffb6c68a2 true
import { type Plugin } from 'vue';
import { type InputSocialIcons } from '@dxtmisha/media';
import { type ApiConfig, type ErrorCenterCauseList, type ErrorCenterHandlerCallback, type ErrorCenterHandlerList, type IconsConfig, type TranslateConfig } from '@dxtmisha/functional-basic';
import type { Router } from 'vue-router';

/** Configuration options for initializing global functional services. @keywords plugin, options, config */
export interface FunctionalPluginOptions {
  /** API client configuration */
  api?: ApiConfig;
  /** Translation service configuration */
  translate?: TranslateConfig;
  /** Default geographical location or language code */
  location?: string | (() => string);
  /** Suffix appended to page titles */
  metaSuffix?: string;
  /** Icon management configuration */
  icons?: IconsConfig;
  /** Social media icons configuration */
  iconsSocial?: InputSocialIcons;
  /** Vue Router instance for navigation state management */
  router?: Router;
  /** Error causes list for error center */
  errorCauses?: ErrorCenterCauseList;
  /** Error handlers list for error center */
  errorHandlers?: ErrorCenterHandlerList;
  /** Global error callback functions for error center */
  errorCallbacks?: ErrorCenterHandlerCallback[];
}

/**
 * Vue plugin for initializing and configuring global functional services (API, Translate, Icons, Meta).
 * @keywords vue, plugin, functional, setup
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
export declare const dxtFunctionalPlugin: Plugin;