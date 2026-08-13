// md5:819b8248cc174f9d2def9bbd338405ce true
import { Plugin } from 'vue';
import { InputSocialIcons } from '@dxtmisha/media';
import { ApiConfig, ErrorCenterCauseList, ErrorCenterHandlerCallback, ErrorCenterHandlerList, IconsConfig, TranslateConfig } from '@dxtmisha/functional-basic';
import { Router } from 'vue-router';

export interface FunctionalPluginOptions {
    api?: ApiConfig;
    translate?: TranslateConfig;
    location?: string | (() => string);
    metaSuffix?: string;
    icons?: IconsConfig;
    iconsSocial?: InputSocialIcons;
    router?: Router;
    errorCauses?: ErrorCenterCauseList;
    errorHandlers?: ErrorCenterHandlerList;
    errorCallbacks?: ErrorCenterHandlerCallback[];
}

/**
 * Vue plugin for initializing and configuring global functional services.
 * @keywords plugin, dxtFunctionalPlugin, functional, vue
 * @example
 * import { createApp } from 'vue'
 * import { dxtFunctionalPlugin } from '@dxtmisha/functional'
 * const app = createApp(App)
 * app.use(dxtFunctionalPlugin, { api: { url: 'https://api.example.com' } })
 */
export declare const dxtFunctionalPlugin: Plugin;