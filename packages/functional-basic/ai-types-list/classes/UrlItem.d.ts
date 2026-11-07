// md5:10ac66e2bf176953971f1613ad155f7e true
/** Isomorphic utility class for URL parsing, manipulation, and query parameters. @keywords url, uri, parser, query, searchParams */
export declare class UrlItem {
    /** Creates a new UrlItem instance. @keywords constructor, url, create */
    constructor(url?: string | URL | null);
    /** Gets the full URL serialized string. @keywords href, url, address */
    get href(): string;
    /** Gets the protocol scheme including trailing colon. @keywords protocol, scheme, http, https */
    get protocol(): string;
    /** Gets the username specified before the domain name. @keywords username, auth, credentials */
    get username(): string;
    /** Gets the password specified before the domain name. @keywords password, auth, credentials */
    get password(): string;
    /** Gets the host portion (hostname and port). @keywords host, domain, port */
    get host(): string;
    /** Gets the domain hostname excluding port. @keywords hostname, domain */
    get hostname(): string;
    /** Gets the port number string. @keywords port, network */
    get port(): string;
    /** Gets the path of the URL. @keywords pathname, path, route */
    get pathname(): string;
    /** Gets the query string including leading question mark. @keywords search, query, querystring */
    get search(): string;
    /** Gets the URLSearchParams object for query parameters. @keywords searchParams, query, urlsearchparams */
    get searchParams(): URLSearchParams;
    /** Gets the fragment identifier hash including leading '#'. @keywords hash, fragment, anchor */
    get hash(): string;
    /** Gets the origin of the URL (protocol, hostname, and port). @keywords origin, domain, base */
    get origin(): string;
    /** Updates the current URL target. @keywords set, update, mutate */
    set(url?: string | URL | null): this;
    /** Checks if a query parameter exists in the URL. @keywords hasParam, query, contains, exists */
    hasParam(name: string): boolean;
    /** Returns a request-isolated instance of UrlItem. @keywords getInstance, singleton, factory */
    static getInstance(): UrlItem;
    /** Retrieves the value of a specific query parameter. @keywords getParam, query, search */
    getParam(name: string): string | undefined;
    /** Returns all query parameters transformed into an object record. @keywords getParams, query, record */
    getParams(): Record<string, unknown>;
    /** Sets or updates a single query parameter. @keywords setParam, query, param */
    setParam(name: string, value: string | number | boolean): this;
    /** Replaces all query parameters with the specified record. @keywords setParams, query, bulk */
    setParams(params: Record<string, unknown>): this;
    /** Removes a query parameter from the URL. @keywords deleteParam, remove, query */
    deleteParam(name: string): this;
    /** Serializes the URL instance to a JSON string. @keywords toJSON, serialize, json */
    toJSON(): string;
    /** Returns the full serialized URL string. @keywords toString, stringify, href */
    toString(): string;
}