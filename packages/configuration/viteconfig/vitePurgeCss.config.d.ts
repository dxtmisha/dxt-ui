import type { UserConfig } from 'vite'
import type { ViteBasicFunctionOptions } from './viteBasicFunction.config'
import type { VitePluginPurgeCssOptions } from '../functions/vitePluginPurgeCss'

/**
 * Options for Vite configuration with PurgeCSS.
 *
 * Параметры конфигурации Vite с поддержкой PurgeCSS.
 */
export interface VitePurgeCssOptions extends ViteBasicFunctionOptions {
  /** PurgeCSS options (content, safelist, blocklist, etc.) / Параметры PurgeCSS (content, safelist, blocklist и т.д.) */
  purgeCss?: VitePluginPurgeCssOptions
}

/**
 * Creates a Vite config extending viteBasicFunction with PurgeCSS for unused CSS elimination.
 *
 * Создаёт конфигурацию Vite, расширяющую viteBasicFunction с поддержкой PurgeCSS для удаления неиспользуемого CSS.
 * @param options configuration options / параметры конфигурации
 * @returns Vite config / конфигурация Vite
 */
export declare const vitePurgeCss: (
  options?: VitePurgeCssOptions
) => UserConfig
