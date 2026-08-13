// md5:c4aa2dfdef9b3ca33ed916f715695400 true
export declare class PluginImport {
    /** Creates a PluginImport instance. @keywords plugin import constructor */
    constructor(packageName: string, code: string);
    /** Returns file content. @keywords get content */
    get(): string;
    /** Returns style connection code. @keywords import style */
    importStyle(): this;
}