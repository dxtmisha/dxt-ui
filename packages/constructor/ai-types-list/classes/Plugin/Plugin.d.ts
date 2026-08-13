// md5:43c08940fb2f4cf5e59fce29b2df1be3 true
import { TransformResult } from 'rollup';
import { Plugin as VitePlugin } from 'vite';
export type PluginComponentImports = Record<string, string>;
export type PluginCode = string;
export type PluginOptions = Record<string, any>;
/** Base class for the Vite plugin. @keywords plugin base vite */
export declare class Plugin {
    /** Creates an instance of the plugin. @keywords constructor create plugin */
    constructor(design: string, packageName: string, componentsReg: RegExp, styleVarsReg: RegExp, componentsList: PluginComponentImports, name?: string, options?: PluginOptions);
    /** Initializes and returns the Vite plugin instance. @keywords init vite plugin */
    init(): VitePlugin;
}