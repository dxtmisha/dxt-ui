import { MetaManager } from './MetaManager';
import { MetaTwitterCard, MetaTwitterTag } from '../types/metaTypes';
/**
 * Class for working with Twitter Card meta tags.
 *
 * Класс для управления мета-тегами Twitter Card.
 */
export declare class MetaTwitter extends MetaManager<MetaTwitterTag[]> {
    constructor();
    /**
     * Gets the Twitter Card type.
     *
     * Получает тип Twitter Card.
     */
    getCard(): MetaTwitterCard;
    /**
     * Gets the website or brand @username.
     *
     * Получает аккаунт сайта или бренда (@username).
     */
    getSite(): string;
    /**
     * Gets the content creator @username.
     *
     * Получает автора контента (@username).
     */
    getCreator(): string;
    /**
     * Gets the page URL.
     *
     * Получает URL страницы.
     */
    getUrl(): string;
    /**
     * Gets the card title.
     *
     * Получает заголовок карточки.
     */
    getTitle(): string;
    /**
     * Gets the card description.
     *
     * Получает описание карточки.
     */
    getDescription(): string;
    /**
     * Gets the card image URL.
     *
     * Получает URL изображения карточки.
     */
    getImage(): string;
    /**
     * Sets the Twitter Card type.
     *
     * Устанавливает тип Twitter Card.
     * @param card card type / тип карточки
     */
    setCard(card: MetaTwitterCard): this;
    /**
     * Sets the website or brand @username.
     *
     * Устанавливает аккаунт сайта или бренда (@username).
     * @param site @username / аккаунт
     */
    setSite(site: string): this;
    /**
     * Sets the content creator @username.
     *
     * Устанавливает автора контента (@username).
     * @param creator @username / аккаунт автора
     */
    setCreator(creator: string): this;
    /**
     * Sets the page URL.
     *
     * Устанавливает URL страницы.
     * @param url URL / URL
     */
    setUrl(url: string): this;
    /**
     * Sets the card title.
     *
     * Устанавливает заголовок карточки.
     * @param title title / заголовок
     */
    setTitle(title: string): this;
    /**
     * Sets the card description.
     *
     * Устанавливает описание карточки.
     * @param description description / описание
     */
    setDescription(description: string): this;
    /**
     * Sets the card image URL.
     *
     * Устанавливает URL изображения карточки.
     * @param image image URL / URL изображения
     */
    setImage(image: string): this;
}
