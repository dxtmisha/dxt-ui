// md5:d7a2cbc053ae6f483605804a24320434 true
import type { Plugin as VitePlugin } from 'vite';

/** Library component descriptor for detection and import resolution. @keywords component descriptor regex */
export type PluginComponentItem = {
    name: string;
    reg: RegExp;
};

export type PluginComponentList = Record<string, PluginComponentItem>;

export type PluginComponentImports = PluginComponentItem[];

/** Configuration options for the Vite plugin. @keywords plugin options config styles components */
export type PluginOptions = {
    style?: boolean;
    styleNamespace?: string;
    styleMain?: boolean;
    component?: boolean;
    map?: boolean;
    viteOptions?: VitePlugin;
};