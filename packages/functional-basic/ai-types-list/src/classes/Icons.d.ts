// md5:01e7e867f6e99cdae68c47149f0951bc true
export type IconsItem = string | Promise<string | any> | (() => Promise<string | any>);
export type IconsConfig = {
    url?: string;
    list?: Record<string, IconsItem>;
};
/** Class for managing and resolving icons. @keywords icons, manager, assets */
export declare class Icons {
    /** Checks if an icon is registered. @keywords is, check, exists */
    static is(index: string): boolean;
    /** Retrieves icon content or path asynchronously. @keywords get, load, resolve */
    static get(index: string, url?: string, wait?: number): Promise<string>;
    /** Retrieves synchronous icon value or loaded content. @keywords getAsync, sync, cached */
    static getAsync(index: string, url?: string): string;
    /** Returns a list of all registered icon names. @keywords getNameList, list, names */
    static getNameList(): string[];
    /** Returns the global icons storage URL. @keywords getUrlGlobal, url, base */
    static getUrlGlobal(): string;
    /** Registers a custom icon definition. @keywords add, register, icon */
    static add(index: string, file: IconsItem): void;
    /** Marks an icon as loading. @keywords addLoad, preload, state */
    static addLoad(index: string): void;
    /** Registers a global icon URL path. @keywords addGlobal, global, url */
    static addGlobal(index: string, file: string): void;
    /** Registers multiple icons from a dictionary. @keywords addByList, batch, register */
    static addByList(list: Record<string, IconsItem>): void;
    /** Sets the base URL for icon storage. @keywords setUrl, base, storage */
    static setUrl(url: string): void;
    /** Updates the global icon configuration. @keywords setConfig, config, setup */
    static setConfig(config: IconsConfig): void;
}