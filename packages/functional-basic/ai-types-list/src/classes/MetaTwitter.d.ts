// md5:cf1a2c13e0d332846621d09ae77641c6 true
/** Manages Twitter Card meta tags. @keywords twitter, meta, tags, card */
export declare class MetaTwitter extends MetaManager<MetaTwitterTag[]> {
    /** Initializes the MetaTwitter instance. @keywords constructor, init */
    constructor();
    /** Gets the Twitter Card type. @keywords twitter, card, type */
    getCard(): MetaTwitterCard;
    /** Gets the website or brand @username. @keywords twitter, site, handle, username */
    getSite(): string;
    /** Gets the content creator @username. @keywords twitter, creator, author */
    getCreator(): string;
    /** Gets the page URL. @keywords twitter, url */
    getUrl(): string;
    /** Gets the card title. @keywords twitter, title */
    getTitle(): string;
    /** Gets the card description. @keywords twitter, description */
    getDescription(): string;
    /** Gets the card image URL. @keywords twitter, image */
    getImage(): string;
    /** Sets the Twitter Card type. @keywords twitter, card, set */
    setCard(card: MetaTwitterCard): this;
    /** Sets the website or brand @username. @keywords twitter, site, handle */
    setSite(site: string): this;
    /** Sets the content creator @username. @keywords twitter, creator */
    setCreator(creator: string): this;
    /** Sets the page URL. @keywords twitter, url */
    setUrl(url: string): this;
    /** Sets the card title. @keywords twitter, title */
    setTitle(title: string): this;
    /** Sets the card description. @keywords twitter, description */
    setDescription(description: string): this;
    /** Sets the card image URL. @keywords twitter, image */
    setImage(image: string): this;
}