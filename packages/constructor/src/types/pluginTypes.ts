import type { Plugin as VitePlugin } from 'vite'

/** Library component item with name and regex / Элемент компонента библиотеки с именем и регулярным выражением */
export type PluginComponentItem = {
  /** Component name / Название компонента */
  name: string
  /** Regular expression for component search / Регулярное выражение для поиска компонента */
  reg: RegExp
}

/** List of library components by key / Список компонентов библиотеки по ключу */
export type PluginComponentList = Record<string, PluginComponentItem>

/** List of library component imports/ Список импортов компонентов библиотеки */
export type PluginComponentImports = PluginComponentItem[]

/** Configuration options for the plugin/ Опции конфигурации для плагина */
export type PluginOptions = {
  /** Whether to include styles / Включать ли стили */
  style?: boolean
  /** Namespace for styles in the SCSS `@use` rule / Пространство имен для стилей в правиле SCSS `@use` */
  styleNamespace?: string
  /** Whether to include components / Включать ли компоненты */
  component?: boolean
  /** Additional Vite plugin options/ Дополнительные опции плагина Vite */
  viteOptions?: VitePlugin
}
