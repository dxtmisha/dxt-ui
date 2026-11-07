// md5:cdadc102e0e08a4c63d458c90962136d true
export type IconsItem = string | Promise<string | unknown> | (() => Promise<string | unknown>);
export type IconsConfig = {
    url?: string;
    list?: Record<string, IconsItem>;
};
/** Icon management registry and loader service. @keywords icons, registry, loader, svg */
export declare class Icons {
    /** Checks if an icon exists in the registry. @keywords icon exists, check icon, has icon */
    static is(index: string): boolean;
    /** Asynchronously retrieves an icon by name, resolving loaders or fallback URLs. @keywords get icon, load icon, async icon */
    static get(index: string, url?: string, wait?: number): Promise<string>;
    /** Synchronously returns an icon if already loaded or defined as a string. @keywords get icon sync, cached icon */
    static getAsync(index: string, url?: string): string;
    /** Returns an array of all registered icon names. @keywords icon names, icon list, registry names */
    static getNameList(): string[];
    /** Returns the global base URL for icons. @keywords global url, icon base url */
    static getUrlGlobal(): string;
    /** Updates the icons configuration. @keywords set config, icon settings */
    static setConfig(config: IconsConfig): void;
    /** Sets the base file URL for icon assets. @keywords set icon url, base url */
    static setUrl(url: string): void;
    /** Registers a custom icon by name. @keywords add icon, register icon */
    static add(index: string, file: IconsItem): void;
    /** Registers multiple icons from a key-value map. @keywords add icons, batch register, icon list */
    static addByList(list: Record<string, IconsItem>): void;
    /** Registers a custom global icon file path. @keywords add global icon, external icon */
    static addGlobal(index: string, file: string): void;
    /** Registers an icon in loading state. @keywords icon loading, placeholder */
    static addLoad(index: string): void;
    /** Resets the icon registry to its initial state. @keywords reset icons, clear registry */
    static reset(): void;
}