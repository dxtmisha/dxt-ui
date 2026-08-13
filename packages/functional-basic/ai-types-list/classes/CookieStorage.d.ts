// md5:33d98f75fd15920a1f6df5a5ee33b8a5 true
export type CookieSameSite = 'strict' | 'lax';

export type CookieOptions = {
    age?: number;
    sameSite?: CookieSameSite;
    path?: string;
    domain?: string;
    secure?: boolean;
    httpOnly?: boolean;
    partitioned?: boolean;
    arguments?: string[] | Record<string, string | number | boolean>;
};

/**
 * Cookie storage management class with DOM and SSR support.
 * @keywords cookie storage manager web storage
 */
export declare class CookieStorage {
    protected static getListener?: (key: string) => any | undefined;
    protected static getListenerRaw?: () => string;
    protected static setListener?: (key: string, value: any, cookie: string, options?: CookieOptions) => void;

    /**
     * Initializes storage listeners.
     * @keywords cookie init storage
     */
    static init(getListener?: (key: string) => any | undefined, getListenerRaw?: () => string, setListener?: (key: string, value: any, cookie: string, options?: CookieOptions) => void): void;

    /**
     * Resets storage state and clears items.
     * @keywords cookie reset storage
     */
    static reset(): void;

    /**
     * Gets cookie value by name.
     * @keywords cookie get value
     */
    static get<T>(name: string, defaultValue?: T | (() => T)): T | undefined;

    /**
     * Sets cookie value.
     * @keywords cookie set value
     */
    static set<T>(name: string, value: T | (() => T), options?: CookieOptions): T;

    /**
     * Removes cookie by name.
     * @keywords cookie remove delete
     */
    static remove(name: string): void;

    /**
     * Updates cookies from DOM.
     * @keywords cookie update
     */
    static update(): void;

    protected static format(name: string, value: string, options?: CookieOptions): string;

    protected static hasDom(): boolean;

    protected static parse(cookie: string): Record<string, any>;

    protected static initItems(): Record<string, any>;

    protected static toMaxAge(stringValue: string, age?: CookieOptions['age']): string;

    protected static toSameSite(sameSite?: CookieOptions['sameSite']): string;

    protected static toPath(path?: CookieOptions['path']): string;

    protected static toDomain(domain?: CookieOptions['domain']): string | undefined;

    protected static toSecure(secure?: CookieOptions['secure']): string | undefined;

    protected static toHttpOnly(httpOnly?: CookieOptions['httpOnly']): string | undefined;

    protected static toPartitioned(partitioned?: CookieOptions['partitioned']): string | undefined;

    protected static toArguments(args?: CookieOptions['arguments']): string[];
}