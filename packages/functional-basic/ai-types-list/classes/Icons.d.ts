// md5:01e7e867f6e99cdae68c47149f0951bc true
export type IconsItem = string | Promise<string | any> | (() => Promise<string | any>);
export type IconsConfig = {
    url?: string;
    list?: Record<string, IconsItem>;
};
/** Icon manager utility for registering and loading icons. @keywords icons, icon-loader, assets */
export declare class Icons {
    /** Checks if an icon is registered. @keywords icons, has-icon, exists */
    static is(index: string): boolean;
    /** Retrieves icon content or path asynchronously. @keywords get-icon, async-icon, fetch-icon */
    static get(index: string, url?: string, wait?: number): Promise<string>;
    /** Synchronously returns an icon if loaded or string-based. @keywords get-sync, cached-icon */
    static getAsync(index: string, url?: string): string;
    /** Retrieves a list of all registered icon names. @keywords icon-list, names */
    static getNameList(): string[];
    /** Retrieves the global icon storage URL. @keywords global-url, base-url */
    static getUrlGlobal(): string;
    /** Registers a custom icon definition. @keywords register-icon, add-icon */
    static add(index: string, file: IconsItem): void;
    /** Registers an icon in pending loading state. @keywords add-loading, placeholder */
    static addLoad(index: string): void;
    /** Registers a global icon path. @keywords add-global, icon-url */
    static addGlobal(index: string, file: string): void;
    /** Registers multiple icons from a key-value record. @keywords batch-register, icon-list */
    static addByList(list: Record<string, IconsItem>): void;
    /** Sets the base icon storage URL. @keywords set-url, icon-path */
    static setUrl(url: string): void;
    /** Updates the icon configuration. @keywords config, setup */
    static setConfig(config: IconsConfig): void;
}