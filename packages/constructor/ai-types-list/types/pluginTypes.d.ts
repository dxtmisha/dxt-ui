// md5:602ddc82c1133ea44e1c70163434867a true
import type { Plugin as VitePlugin } from 'vite';
/** Library component item with name and regex matcher. @keywords component, regex */
export type PluginComponentItem = {
    name: string;
    reg: RegExp;
};
export type PluginComponentList = Record<string, PluginComponentItem>;
export type PluginComponentImports = PluginComponentItem[];
/** Configuration options for the plugin. @keywords plugin, options, configuration */
export type PluginOptions = {
    style?: boolean;
    styleNamespace?: string;
    component?: boolean;
    viteOptions?: VitePlugin;
};