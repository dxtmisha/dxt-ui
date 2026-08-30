// md5:cf1a2c13e0d332846621d09ae77641c6 true
/** Manages Twitter Card meta tags. @keywords twitter card, meta tags, social share */
export declare class MetaTwitter extends MetaManager<MetaTwitterTag[]> {
    /** Initializes the MetaTwitter instance. @keywords constructor, init */
    constructor();
    /** Gets the Twitter Card type. @keywords twitter card, type, get */
    getCard(): MetaTwitterCard;
    /** Gets the website or brand @username. @keywords twitter site, username, get */
    getSite(): string;
    /** Gets the content creator @username. @keywords twitter creator, author, get */
    getCreator(): string;
    /** Gets the page URL. @keywords twitter url, get */
    getUrl(): string;
    /** Gets the card title. @keywords twitter title, get */
    getTitle(): string;
    /** Gets the card description. @keywords twitter description, get */
    getDescription(): string;
    /** Gets the card image URL. @keywords twitter image, get */
    getImage(): string;
    /** Sets the Twitter Card type. @keywords twitter card, type, set */
    setCard(card: MetaTwitterCard): this;
    /** Sets the website or brand @username. @keywords twitter site, username, set */
    setSite(site: string): this;
    /** Sets the content creator @username. @keywords twitter creator, author, set */
    setCreator(creator: string): this;
    /** Sets the page URL. @keywords twitter url, set */
    setUrl(url: string): this;
    /** Sets the card title. @keywords twitter title, set */
    setTitle(title: string): this;
    /** Sets the card description. @keywords twitter description, set */
    setDescription(description: string): this;
    /** Sets the card image URL. @keywords twitter image, set */
    setImage(image: string): this;
}