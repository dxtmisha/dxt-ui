import type { UserConfig } from 'vite'
import type { ViteBasicBaseOptions } from './viteBasicBase.config'

export type { ViteBasicBaseOptions }

/** Options for base Vite library configuration / Параметры базовой конфигурации Vite для библиотек */
export type ViteBasicFunctionOptions = ViteBasicBaseOptions

/**
 * Creates a base Vite config for Vue libraries with functions/composables/classes.
 *
 * Создаёт базовую конфигурацию Vite для Vue-библиотек с функциями/композаблами/классами.
 * @param options configuration options / параметры конфигурации
 * @returns Vite config / конфигурация Vite
 */
export declare const viteBasicFunction: (
  options?: ViteBasicFunctionOptions
) => UserConfig
