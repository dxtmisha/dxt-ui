// md5:ef3397b1df4faf0b4e940991337ab9e6 true
/** Isomorphic utility class for working with URLs. @keywords url, parse, query, params */
export declare class UrlItem {
    /** Returns a request-isolated instance of UrlItem. @keywords instance, singleton, url */
    static getInstance(): UrlItem;
    /** Constructs a new UrlItem instance. @keywords constructor, url */
    constructor(url?: string | URL);
    /** Full URL string. @keywords href, url */
    get href(): string;
    /** Protocol including trailing colon. @keywords protocol, url */
    get protocol(): string;
    /** Username. @keywords username, auth, url */
    get username(): string;
    /** Password. @keywords password, auth, url */
    get password(): string;
    /** Host (hostname and port). @keywords host, url */
    get host(): string;
    /** Hostname (excluding port). @keywords hostname, url */
    get hostname(): string;
    /** Port. @keywords port, url */
    get port(): string;
    /** Path name. @keywords pathname, path, url */
    get pathname(): string;
    /** Search string including leading question mark. @keywords search, query, url */
    get search(): string;
    /** Readonly search params object. @keywords searchParams, query, url */
    get searchParams(): URLSearchParams;
    /** Hash string including leading hash sign. @keywords hash, anchor, url */
    get hash(): string;
    /** Origin of the URL. @keywords origin, url */
    get origin(): string;
    /** Checks if the specified query parameter exists. @keywords hasParam, query, check */
    hasParam(name: string): boolean;
    /** Returns the value of a query parameter. @keywords getParam, query, value */
    getParam(name: string): string | undefined;
    /** Returns all query parameters as an object with transformed types. @keywords getParams, query, object */
    getParams(): Record<string, any>;
    /** Updates the URL value. @keywords set, url */
    set(url?: string | URL): this;
    /** Sets the value of a query parameter. @keywords setParam, query, update */
    setParam(name: string, value: string): this;
    /** Replaces all query parameters with the specified object. @keywords setParams, query, replace */
    setParams(params: Record<string, any>): this;
    /** Deletes a query parameter. @keywords deleteParam, query, remove */
    deleteParam(name: string): this;
    /** Converts the Url instance to its string representation. @keywords toString, string, url */
    toString(): string;
    /** Converts the Url instance to JSON string representation. @keywords toJSON, json, url */
    toJSON(): string;
}