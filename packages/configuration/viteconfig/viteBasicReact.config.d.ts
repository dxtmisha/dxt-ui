import type { UserConfig } from 'vite'
import type { ViteBasicBaseOptions } from './viteBasicBase.config'

export type { ViteBasicBaseOptions }

/** Options for base Vite React library configuration / Параметры базовой конфигурации Vite для React-библиотек */
export type ViteBasicReactOptions = ViteBasicBaseOptions

/**
 * Creates a base Vite config for React libraries with functions/hooks/classes/components.
 *
 * Создаёт базовую конфигурацию Vite для React-библиотек с функциями/хуками/классами/компонентами.
 * @param options configuration options / параметры конфигурации
 * @returns Vite config / конфигурация Vite
 */
export declare const viteBasicReact: (
  options?: ViteBasicReactOptions
) => UserConfig
