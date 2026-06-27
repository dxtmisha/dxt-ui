import { type App, type Plugin } from 'vue'
import { MediaSocial, type InputSocialIcons } from '@dxtmisha/media'
import {
  Api,
  type ApiConfig,
  ErrorCenter,
  type ErrorCenterCauseList,
  type ErrorCenterHandlerCallback,
  type ErrorCenterHandlerList,
  Icons,
  type IconsConfig,
  Translate,
  type TranslateConfig
} from '@dxtmisha/functional-basic'

import { executeUseGlobalInit } from './executeUse'
import { useMeta } from '../composables/ref/useMeta'
import { RouterItemRef } from '../classes/ref/RouterItemRef'
import { GeoRef } from '../classes/ref/GeoRef'

import type { Router } from 'vue-router'

/**
 * Interface for the functional plugin options /
 * Интерфейс для опций функционального плагина
 */
export interface FunctionalPluginOptions {
  /**
   * Configuration for the API client /
   * Конфигурация для API-клиента
   */
  api?: ApiConfig

  /**
   * Configuration for the translation service /
   * Конфигурация для сервиса переводов
   */
  translate?: TranslateConfig

  /**
   * Default geographical location or language code /
   * Код географического местоположения или языка по умолчанию
   */
  location?: string | (() => string)

  /**
   * Suffix to be appended to all page titles /
   * Суффикс, который будет добавляться ко всем заголовкам страниц
   */
  metaSuffix?: string

  /**
   * Configuration for the icon management service /
   * Конфигурация для сервиса управления иконками
   */
  icons?: IconsConfig

  /**
   * Configuration for the social networks icons management service /
   * Конфигурация для сервиса управления иконками социальных сетей
   */
  iconsSocial?: InputSocialIcons

  /**
   * Vue Router instance for global navigation state management /
   * Экземпляр Vue Router для глобального управления состоянием навигации
   */
  router?: Router

  /**
   * Error causes list for error center /
   * Список причин ошибок для центра ошибок
   */
  errorCauses?: ErrorCenterCauseList

  /**
   * Error handlers list for error center /
   * Список обработчиков ошибок для центра ошибок
   */
  errorHandlers?: ErrorCenterHandlerList

  /**
   * Global error callback functions for error center /
   * Список глобальных функций обратного вызова для центра ошибок
   */
  errorCallbacks?: ErrorCenterHandlerCallback[]
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
export const dxtFunctionalPlugin: Plugin = {
  /**
   * Plugin installation method.
   *
   * Метод установки плагина.
   * @param app Vue application instance/ экземпляр приложения Vue
   * @param options plugin configuration options/ опции конфигурации плагина
   */
  install(app: App, options: FunctionalPluginOptions = {}) {
    // 1. Configure API
    if (options.api) {
      Api.setConfig(options.api)
    }

    // 2. Configure Translation
    if (options.translate) {
      Translate.setConfig(options.translate)
    }

    // 3. Configure Geo
    if (options.location) {
      GeoRef.setValueDefault(options.location)
    }

    // 4. Configure Icons
    if (options.icons) {
      Icons.setConfig(options.icons)
    }

    // 4.1 Configure Socials Icons
    if (options.iconsSocial) {
      MediaSocial.addIcons(options.iconsSocial)
    }

    // 5. Configure Meta Suffix
    if (options.metaSuffix) {
      useMeta().setSuffix(options.metaSuffix)
    }

    // 6. Configure Router Reference
    if (options.router) {
      RouterItemRef.set(options.router)
    } else {
      const router = app.config.globalProperties.$router

      if (router) {
        RouterItemRef.set(router)
      }
    }

    // 7. Error Center
    if (options.errorCauses) {
      ErrorCenter.addList(options.errorCauses)
    }

    if (options.errorHandlers) {
      ErrorCenter.addHandlerList(options.errorHandlers)
    }

    if (options.errorCallbacks) {
      options.errorCallbacks.forEach(callback => ErrorCenter.addCallback(callback))
    }

    // 8. Initialize global singletons (ExecuteUseType.global)
    executeUseGlobalInit()
  }
}
