// md5:9538ab4eff08e1420fce5785d984c062 true
import { UrlInstanceAbstract } from "@dxtmisha/media";

/** Class for working with URL hash data. @keywords hash, url, instance */
export declare class HashInstance extends UrlInstanceAbstract {
    /** Initializes hash data and registers hashchange listener. @keywords init, hash */
    protected init(): this;
    /** Obtains data from the URL hash string. @keywords get, location, hash */
    protected getLocation(): Record<string, any>;
    /** Updates the hash string in the URL. @keywords update, hash */
    protected update(): this;
}