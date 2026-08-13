// md5:04a85b4812b3d606da7360ea77ac67ae true
/** Class for working with plugin code @keywords plugin, code, wrapper */
export declare class PluginCode {
    /** Creates a PluginCode instance @keywords constructor, init */
    constructor(id: string, code: string);
    /** Checks if the file is a Vue component @keywords vue, component, check */
    isVue(): boolean;
    /** Checks if the file is a SCSS file @keywords scss, style, check */
    isScss(): boolean;
    /** Returns the modified code @keywords get, code, modified */
    get(): string;
    /** Returns the file ID @keywords get, id */
    getId(): string;
    /** Returns the original code @keywords get, code, original */
    getCode(): string;
    /** Checks for the presence of code matching a pattern @keywords has, search, match */
    has(pattern: string | RegExp, flags?: string): boolean;
    /** Adds code after the script setup tag or at the start @keywords add, script, setup */
    addAfterScript(code: string): this;
    /** Adds code to the beginning of the file @keywords add, start, prepend */
    addStart(code: string): this;
    /** Adds code to the beginning of the file if it is missing @keywords add, start, none */
    addStartIfNone(code: string, pattern?: string | RegExp): this;
    /** Replaces found code fragments with new content @keywords replace, regex, update */
    replace(pattern: string | RegExp, replacement: string | ((substring: string, ...args: any[]) => string)): this;
}