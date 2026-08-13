// md5:327299fcf896b638fcbe961ed91c6aff true
/** Class for working with data stored in URL query parameters. @keywords query, url, search_params */
export declare class QueryInstance extends UrlInstanceAbstract {
    /** Initializes query data and registers popstate listener. @keywords init, query, popstate */
    protected init(): this;
    /** Obtains data from the URL string. @keywords get, location, query */
    protected getLocation(): Record<string, any>;
    /** Updates query string in URL. @keywords update, url, query */
    protected update(): this;
}