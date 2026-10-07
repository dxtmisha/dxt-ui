// md5:11e9619a5a9b1577593d77403236b0fa true
import type { Plugin as VitePlugin } from 'vite';
/** Library component item with name matching pattern @keywords component regex item */
export type PluginComponentItem = {
    /** Component name */
    name: string;
    /** Regular expression for component search */
    reg: RegExp;
};
export type PluginComponentList = Record<string, PluginComponentItem>;
export type PluginComponentImports = PluginComponentItem[];
/** Configuration options for the plugin @keywords plugin options configuration */
export type PluginOptions = {
    /** Whether to include styles */
    style?: boolean;
    /** Namespace for styles in the SCSS `@use` rule */
    styleNamespace?: string;
    /** Whether to include the main style file */
    styleMain?: boolean;
    /** Whether to include components */
    component?: boolean;
    /** Additional Vite plugin options */
    viteOptions?: VitePlugin;
};