// md5:1a99d5daafd8e8cae1a732c33a47f93e true
/** Class for managing Figma PluginData storage. @keywords figma storage plugin data pluginData */
export declare class FigmaStorage<T> {
    /** Gets a FigmaStorage instance for a specific node. @keywords figma storage getInstance pluginData */
    static getInstance<T>(name: string, item?: UiFigmaNode): FigmaStorage<T>;
    /** Asynchronously gets a FigmaStorage instance by node ID. @keywords figma storage getInstanceById pluginData async */
    static getInstanceById<T>(name: string, id?: string): Promise<FigmaStorage<T>>;
    /** Initializes a new FigmaStorage instance. @keywords constructor figma storage pluginData cache */
    constructor(name: string, item?: PluginDataMixin, cache?: number | undefined);
    /** Retrieves data from storage with an optional fallback default value. @keywords get read figma storage pluginData */
    get(defaultValue?: T | (() => T)): T | undefined;
    /** Updates stored data. @keywords set write update figma storage pluginData */
    set(value?: T | (() => T)): T | undefined;
    /** Removes data from storage. @keywords remove delete clear figma storage pluginData */
    remove(): this;
}