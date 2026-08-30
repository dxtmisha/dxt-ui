// md5:ef3397b1df4faf0b4e940991337ab9e6 true
/** Isomorphic utility class for URL parsing, manipulation, and query parameter management. @keywords url, parser, query, uri */
export declare class UrlItem {
    /** Returns a request-isolated instance of UrlItem. @keywords singleton, instance, request, isolated */
    static getInstance(): UrlItem;
    /** Constructs a new UrlItem instance. @param url URL string or URL object @keywords constructor, create, init */
    constructor(url?: string | URL);
    /** Full URL string representation. @keywords href, url, link */
    get href(): string;
    /** Protocol scheme including trailing colon. @keywords protocol, scheme, http, https */
    get protocol(): string;
    /** Username component of URL credentials. @keywords username, auth, credentials */
    get username(): string;
    /** Password component of URL credentials. @keywords password, auth, credentials */
    get password(): string;
    /** Host containing hostname and port. @keywords host, domain, port */
    get host(): string;
    /** Hostname excluding port number. @keywords hostname, domain */
    get hostname(): string;
    /** Port number string. @keywords port, network */
    get port(): string;
    /** URL path component starting with slash. @keywords pathname, path, route */
    get pathname(): string;
    /** Query string including leading question mark. @keywords search, querystring, query */
    get search(): string;
    /** Read-only URLSearchParams query parameters object. @keywords searchParams, query, params */
    get searchParams(): URLSearchParams;
    /** Fragment identifier including leading hash sign. @keywords hash, fragment, anchor */
    get hash(): string;
    /** Read-only origin of the URL (scheme + host). @keywords origin, domain, base */
    get origin(): string;
    /** Checks if the specified query parameter exists. @param name Parameter name @keywords hasParam, query, exists, search */
    hasParam(name: string): boolean;
    /** Gets the value of a specific query parameter. @param name Parameter name @keywords getParam, query, parameter */
    getParam(name: string): string | undefined;
    /** Returns all query parameters as an object with transformed types. @keywords getParams, query, search, dictionary */
    getParams(): Record<string, any>;
    /** Updates the URL value and reinitializes state. @param url URL string or URL instance @keywords set, update, parse */
    set(url?: string | URL): this;
    /** Sets or updates the value of a query parameter. @param name Parameter name @param value Parameter value @keywords setParam, query, update */
    setParam(name: string, value: string): this;
    /** Replaces all query parameters with the provided key-value object. @param params Key-value parameter object @keywords setParams, query, batch */
    setParams(params: Record<string, any>): this;
    /** Deletes a query parameter by name. @param name Parameter name @keywords deleteParam, remove, query */
    deleteParam(name: string): this;
    /** Serializes the URL instance to its full string representation. @keywords toString, serialize, string */
    toString(): string;
    /** Serializes the URL instance to a JSON string representation. @keywords toJSON, serialize, json */
    toJSON(): string;
}