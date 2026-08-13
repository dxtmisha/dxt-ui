// md5:01e7e867f6e99cdae68c47149f0951bc true
/** @keywords icon item type */
export type IconsItem = string | Promise<string | any> | (() => Promise<string | any>);

/** @keywords icon configuration */
export type IconsConfig = {
    url?: string;
    list?: Record<string, IconsItem>;
};

/** @keywords icons manager, svg */
export declare class Icons {
    /** @keywords check icon existence */
    static is(index: string): boolean;
    /** @keywords get icon value or promise */
    static get(index: string, url?: string, wait?: number): Promise<string>;
    /** @keywords get icon async */
    static getAsync(index: string, url?: string): string;
    /** @keywords get icon name list */
    static getNameList(): string[];
    /** @keywords get global url */
    static getUrlGlobal(): string;
    /** @keywords add icon */
    static add(index: string, file: IconsItem): void;
    /** @keywords add icon load */
    static addLoad(index: string): void;
    /** @keywords add global icon */
    static addGlobal(index: string, file: string): void;
    /** @keywords add icons by list */
    static addByList(list: Record<string, IconsItem>): void;
    /** @keywords set icons url */
    static setUrl(url: string): void;
    /** @keywords set icons config */
    static setConfig(config: IconsConfig): void;
}