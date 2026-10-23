// md5:95483b4069f41b51a60c9adb08130f39 true
export type IconsItem = string | Promise<string | unknown> | (() => Promise<string | unknown>);
export type IconsConfig = {
    url?: string;
    list?: Record<string, IconsItem>;
};
/** Icon manager for registering, caching, and retrieving icon assets. @keywords icon, icons, manager, registry */
export declare class Icons {
    /** Checks whether an icon is registered by name. @keywords icon, check, exists, is */
    static is(index: string): boolean;
    /** Asynchronously retrieves an icon by name or URL with optional timeout. @keywords icon, get, fetch, load, async */
    static get(index: string, url?: string, wait?: number): Promise<string>;
    /** Synchronously returns an icon if loaded or retrieves from string source. @keywords icon, getAsync, sync, cache */
    static getAsync(index: string, url?: string): string;
    /** Returns a list of all registered icon names. @keywords icon, list, names, keys */
    static getNameList(): string[];
    /** Returns the global base URL for icon storage. @keywords icon, url, global, base */
    static getUrlGlobal(): string;
    /** Updates the icon configuration. @keywords icon, config, configure, settings */
    static setConfig(config: IconsConfig): void;
    /** Sets the global base URL for icon storage. @keywords icon, url, set, base */
    static setUrl(url: string): void;
    /** Registers a custom icon by name with a path, promise, or loader function. @keywords icon, register, add, custom */
    static add(index: string, file: IconsItem): void;
    /** Registers multiple icons from a key-value map. @keywords icon, register, bulk, addByList, map */
    static addByList(list: Record<string, IconsItem>): void;
    /** Registers a global icon path by name. @keywords icon, global, register, addGlobal */
    static addGlobal(index: string, file: string): void;
    /** Marks an icon as being loaded. @keywords icon, load, loading, addLoad */
    static addLoad(index: string): void;
    /** Resets the icon registry to its default state. @keywords icon, reset, clear */
    static reset(): void;
}