// md5:cf1a2c13e0d332846621d09ae77641c6 true
/** Manage Twitter Card meta tags @keywords meta twitter card tags */
export declare class MetaTwitter extends MetaManager<MetaTwitterTag[]> {
	/** Initialize MetaTwitter instance @keywords constructor create */
	constructor();
	/** Get Twitter Card type @keywords get card type */
	getCard(): MetaTwitterCard;
	/** Get website or brand username @keywords get site username */
	getSite(): string;
	/** Get content creator username @keywords get creator username */
	getCreator(): string;
	/** Get page URL @keywords get url */
	getUrl(): string;
	/** Get card title @keywords get title */
	getTitle(): string;
	/** Get card description @keywords get description */
	getDescription(): string;
	/** Get card image URL @keywords get image */
	getImage(): string;
	/** Set Twitter Card type @keywords set card type */
	setCard(card: MetaTwitterCard): this;
	/** Set website or brand username @keywords set site username */
	setSite(site: string): this;
	/** Set content creator username @keywords set creator username */
	setCreator(creator: string): this;
	/** Set page URL @keywords set url */
	setUrl(url: string): this;
	/** Set card title @keywords set title */
	setTitle(title: string): this;
	/** Set card description @keywords set description */
	setDescription(description: string): this;
	/** Set card image URL @keywords set image */
	setImage(image: string): this;
}