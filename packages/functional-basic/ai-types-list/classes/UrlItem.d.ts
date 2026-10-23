// md5:4ae15a90787c7ce6f547758a167323af true
/** Isomorphic utility class for URL parsing, manipulation, and serialization @keywords url, parser, route, query */
export declare class UrlItem {
    /** Creates a new UrlItem instance @keywords constructor, url, create */
    constructor(url?: string | URL);
    /** Gets the serialized full URL string @keywords href, url, address */
    get href(): string;
    /** Gets the protocol scheme including the trailing colon @keywords protocol, scheme, http, https */
    get protocol(): string;
    /** Gets the username specified before the domain name @keywords username, auth, credentials */
    get username(): string;
    /** Gets the password specified before the domain name @keywords password, auth, credentials */
    get password(): string;
    /** Gets the host including hostname and port @keywords host, domain, port */
    get host(): string;
    /** Gets the domain name or IP without the port @keywords hostname, domain */
    get hostname(): string;
    /** Gets the port number portion of the URL @keywords port, network */
    get port(): string;
    /** Gets the resource pathname @keywords pathname, path, route */
    get search(): string;
    /** Gets the search query string including the leading question mark @keywords search, query, params */
    get pathname(): string;
    /** Gets the URLSearchParams object representing search parameters @keywords searchParams, query, urlsearchparams */
    get searchParams(): URLSearchParams;
    /** Gets the fragment identifier hash string including the leading hash symbol @keywords hash, fragment, anchor */
    get hash(): string;
    /** Gets the serialized origin of the URL @keywords origin, domain, protocol */
    get origin(): string;
    /** Updates the internal URL value @keywords set, update, parse */
    set(url?: string | URL): this;
    /** Checks whether the specified query parameter exists @keywords hasParam, query, contains, exists */
    hasParam(name: string): boolean;
    /** Gets a request-isolated instance of UrlItem @keywords getInstance, singleton, request */
    static getInstance(): UrlItem;
    /** Gets the value of a specific query parameter @keywords getParam, query, search */
    getParam(name: string): string | undefined;
    /** Gets all query parameters as an object with converted types @keywords getParams, query, dictionary */
    getParams(): Record<string, unknown>;
    /** Sets the value of a query parameter @keywords setParam, query, search */
    setParam(name: string, value: string): this;
    /** Replaces all query parameters with values from the specified object @keywords setParams, query, batch */
    setParams(params: Record<string, unknown>): this;
    /** Removes a query parameter by name @keywords deleteParam, query, remove */
    deleteParam(name: string): this;
    /** Converts the URL instance to its full string representation @keywords toString, stringify, serialize */
    toString(): string;
    /** Converts the URL instance to its JSON string representation @keywords toJSON, json, serialize */
    toJSON(): string;
}