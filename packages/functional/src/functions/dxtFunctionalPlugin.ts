import { type App, type Plugin } from 'vue'
import {
  Api,
  type ApiConfig,
  ErrorCenter,
  type ErrorCenterCauseList,
  Icons,
  type IconsConfig,
  Translate,
  type TranslateConfig
} from '@dxtmisha/functional-basic'

import { executeUseGlobalInit } from './executeUse'
import { useMeta } from '../composables/ref/useMeta'
import { RouterItemRef } from '../classes/ref/RouterItemRef'

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
   * Vue Router instance for global navigation state management /
   * Экземпляр Vue Router для глобального управления состоянием навигации
   */
  router?: Router

  /**
   * Error causes list for error center /
   * Список причин ошибок для центра ошибок
   */
  errorCauses?: ErrorCenterCauseList
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

    // 3. Configure Icons
    if (options.icons) {
      Icons.setConfig(options.icons)
    }

    // 4. Configure Meta Suffix
    if (options.metaSuffix) {
      useMeta().setSuffix(options.metaSuffix)
    }

    // 5. Configure Router Reference
    if (options.router) {
      RouterItemRef.set(options.router)
    } else {
      const router = app.config.globalProperties.$router

      if (router) {
        RouterItemRef.set(router)
      }
    }

    if (options.errorCauses) {
      ErrorCenter.addList(options.errorCauses)
    }

    // 6. Initialize global singletons (ExecuteUseType.global)
    executeUseGlobalInit()
  }
}
