// md5:2a8963bdc4603321f685ab9cbe70f5ab true
import { Plugin as VitePlugin } from 'vite';
export type PluginComponentItem = {
    name: string;
    reg: RegExp;
};
export type PluginComponentList = Record<string, PluginComponentItem>;
export type PluginComponentImports = PluginComponentItem[];
/** Configuration options for the plugin @keywords plugin options configuration */
export type PluginOptions = {
    style?: boolean;
    styleNamespace?: string;
    component?: boolean;
    viteOptions?: VitePlugin;
};