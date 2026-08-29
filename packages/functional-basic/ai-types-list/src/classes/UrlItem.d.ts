// md5:ef3397b1df4faf0b4e940991337ab9e6 true
/** Isomorphic utility class for URL parsing, manipulation, and query parameter handling. @keywords url, uri, parser, query params */
export declare class UrlItem {
    /** Returns a request-isolated instance of UrlItem. @keywords singleton, instance, request */
    static getInstance(): UrlItem;
    /** Constructs a new UrlItem instance. @keywords constructor, url */
    constructor(url?: string | URL);
    /** Full URL string representation. @keywords href, full url */
    get href(): string;
    /** Protocol including trailing colon. @keywords protocol, scheme */
    get protocol(): string;
    /** Username component of the URL. @keywords username, auth */
    get username(): string;
    /** Password component of the URL. @keywords password, auth */
    get password(): string;
    /** Host including hostname and port. @keywords host, domain, port */
    get host(): string;
    /** Hostname excluding port. @keywords hostname, domain */
    get hostname(): string;
    /** Port number string. @keywords port */
    get port(): string;
    /** Path segment of the URL. @keywords pathname, path */
    get pathname(): string;
    /** Query string including leading question mark. @keywords search, query string */
    get search(): string;
    /** Read-only URLSearchParams instance. @keywords searchParams, query params */
    get searchParams(): URLSearchParams;
    /** Fragment identifier including leading hash sign. @keywords hash, fragment, anchor */
    get hash(): string;
    /** Origin component of the URL. @keywords origin, base */
    get origin(): string;
    /** Checks if the specified query parameter exists. @keywords hasParam, query param exists */
    hasParam(name: string): boolean;
    /** Gets the value of a query parameter. @keywords getParam, query param value */
    getParam(name: string): string | undefined;
    /** Returns all query parameters as an object with transformed types. @keywords getParams, query object */
    getParams(): Record<string, any>;
    /** Updates the URL value. @keywords set, update url */
    set(url?: string | URL): this;
    /** Sets the value of a query parameter. @keywords setParam, query param */
    setParam(name: string, value: string): this;
    /** Replaces all query parameters with the specified object. @keywords setParams, bulk params */
    setParams(params: Record<string, any>): this;
    /** Deletes a query parameter. @keywords deleteParam, remove query param */
    deleteParam(name: string): this;
    /** Converts the UrlItem instance to its full URL string representation. @keywords toString, stringify */
    toString(): string;
    /** Converts the UrlItem instance to JSON string representation. @keywords toJSON, serialize */
    toJSON(): string;
}