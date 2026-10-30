// md5:c9571bd32412a82c734ce1c322554b51 true
/** Return type of the Cookie.get method / Тип возвращаемого значения метода Cookie.get */
export type CookieGet<T, D = undefined> = [D] extends [undefined] ? (T | undefined) : unknown extends T ? (D extends () => infer R ? R : D) : (T | (D extends () => infer R ? R : D));
/** Class for managing browser cookies. @keywords cookie, storage, browser */
export declare class Cookie<T = unknown> {
    /** Creates a new Cookie manager instance for the specified cookie name. @keywords cookie, constructor */
    constructor(name: string);
    /** Retrieves or creates an instance for the specified cookie name. @keywords cookie, getInstance, factory */
    static getInstance<T = unknown>(name: string): Cookie<T>;
    /** Retrieves cookie data or initializes with default value if absent. @keywords get, read, cookie */
    get<D extends T | string | (() => (T | string)) | undefined = undefined>(defaultValue?: D, options?: CookieOptions): CookieGet<T, D>;
    /** Updates or sets cookie data. @keywords set, write, update, cookie */
    set(value?: T | string | (() => (T | string)), options?: CookieOptions): void;
    /** Deletes the cookie. @keywords delete, remove, cookie */
    remove(): void;
}