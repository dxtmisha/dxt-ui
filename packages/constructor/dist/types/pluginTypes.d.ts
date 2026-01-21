import { Plugin as VitePlugin } from 'vite';
/** Library component item with name and regex / Элемент компонента библиотеки с именем и регулярным выражением */
export type PluginComponentItem = {
    /** Component name / Название компонента */
    name: string;
    /** Regular expression for component search / Регулярное выражение для поиска компонента */
    reg: RegExp;
};
/** List of library components by key / Список компонентов библиотеки по ключу */
export type PluginComponentList = Record<string, PluginComponentItem>;
/** List of library component imports / Список импортов компонентов библиотеки */
export type PluginComponentImports = PluginComponentItem[];
export type PluginOptions = {
    style?: boolean;
    component?: boolean;
    viteOptions?: VitePlugin;
};
