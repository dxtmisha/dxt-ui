// md5:6a331ca900c5644d6d4fb327e56ffbeb true
/** Static class for managing page meta tags @keywords meta static manager tags */
export declare class MetaStatic {
    /** Gets singleton instance @keywords meta singleton item */
    static getItem(): At;
    /** Gets Open Graph instance @keywords meta og get */
    static getOg(): Ot;
    /** Gets Twitter Card instance @keywords meta twitter get */
    static getTwitter(): kt;
    /** Gets page title @keywords meta title get */
    static getTitle(): string;
    /** Gets meta keywords @keywords meta keywords get */
    static getKeywords(): string;
    /** Gets meta description @keywords meta description get */
    static getDescription(): string;
    /** Gets image URL @keywords meta image get */
    static getImage(): string;
    /** Gets canonical URL @keywords meta canonical get */
    static getCanonical(): string;
    /** Gets robots directive @keywords meta robots get */
    static getRobots(): MetaRobots;
    /** Gets author name @keywords meta author get */
    static getAuthor(): string;
    /** Gets site name @keywords meta sitename get */
    static getSiteName(): string;
    /** Gets locale @keywords meta locale get */
    static getLocale(): string;
    /** Sets page title @keywords meta title set */
    static setTitle(e: string): typeof MetaStatic;
    /** Sets meta keywords @keywords meta keywords set */
    static setKeywords(e: string | string[]): typeof MetaStatic;
    /** Sets meta description @keywords meta description set */
    static setDescription(e: string): typeof MetaStatic;
    /** Sets image URL @keywords meta image set */
    static setImage(e: string): typeof MetaStatic;
    /** Sets canonical URL @keywords meta canonical set */
    static setCanonical(e: string): typeof MetaStatic;
    /** Sets robots directive @keywords meta robots set */
    static setRobots(e: MetaRobots): typeof MetaStatic;
    /** Sets author name @keywords meta author set */
    static setAuthor(e: string): typeof MetaStatic;
    /** Sets site name @keywords meta sitename set */
    static setSiteName(e: string): typeof MetaStatic;
    /** Sets locale @keywords meta locale set */
    static setLocale(e: string): typeof MetaStatic;
    /** Sets title suffix @keywords meta suffix set */
    static setSuffix(e?: string): typeof MetaStatic;
    /** Generates meta tags HTML @keywords meta html generate */
    static html(): string;
    /** Generates safe title HTML @keywords meta title html */
    static htmlTitle(): string;
}