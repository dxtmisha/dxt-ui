// md5:0bfa91ec8ef5c72b89db54dfd88c9385 true
/** Plugin data utility class @keywords plugin tool src js vue css dev */
export declare class PluginTool {
    /** Checks if the id is a user's file @keywords isSrc source file check */
    static isSrc(id: string): boolean;
    /** Checks if the id is a JS user's file @keywords isJs javascript file check */
    static isJs(id: string): boolean;
    /** Checks if the id is a Vue user's file @keywords isVue vue file check */
    static isVue(id: string): boolean;
    /** Checks if the id is a Style user's file @keywords isCss css style file check */
    static isCss(id: string): boolean;
    /** Checks if it is development mode @keywords isDev development mode check */
    static isDev(mode: string): boolean;
}