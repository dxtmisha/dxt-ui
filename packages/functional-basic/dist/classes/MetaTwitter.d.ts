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
     * @returns card type / тип карточки
     */
    getCard(): MetaTwitterCard;
    /**
     * Gets the website or brand @username.
     *
     * Получает аккаунт сайта или бренда (@username).
     * @returns @username / аккаунт
     */
    getSite(): string;
    /**
     * Gets the content creator @username.
     *
     * Получает автора контента (@username).
     * @returns @username / аккаунт автора
     */
    getCreator(): string;
    /**
     * Gets the page URL.
     *
     * Получает URL страницы.
     * @returns URL / URL
     */
    getUrl(): string;
    /**
     * Gets the card title.
     *
     * Получает заголовок карточки.
     * @returns title / заголовок
     */
    getTitle(): string;
    /**
     * Gets the card description.
     *
     * Получает описание карточки.
     * @returns description / описание
     */
    getDescription(): string;
    /**
     * Gets the card image URL.
     *
     * Получает URL изображения карточки.
     * @returns image URL / URL изображения
     */
    getImage(): string;
    /**
     * Sets the Twitter Card type.
     *
     * Устанавливает тип Twitter Card.
     * @param card card type / тип карточки
     * @returns current instance / текущий экземпляр
     */
    setCard(card: MetaTwitterCard): this;
    /**
     * Sets the website or brand @username.
     *
     * Устанавливает аккаунт сайта или бренда (@username).
     * @param site @username / аккаунт
     * @returns current instance / текущий экземпляр
     */
    setSite(site: string): this;
    /**
     * Sets the content creator @username.
     *
     * Устанавливает автора контента (@username).
     * @param creator @username / аккаунт автора
     * @returns current instance / текущий экземпляр
     */
    setCreator(creator: string): this;
    /**
     * Sets the page URL.
     *
     * Устанавливает URL страницы.
     * @param url URL / URL
     * @returns current instance / текущий экземпляр
     */
    setUrl(url: string): this;
    /**
     * Sets the card title.
     *
     * Устанавливает заголовок карточки.
     * @param title title / заголовок
     * @returns current instance / текущий экземпляр
     */
    setTitle(title: string): this;
    /**
     * Sets the card description.
     *
     * Устанавливает описание карточки.
     * @param description description / описание
     * @returns current instance / текущий экземпляр
     */
    setDescription(description: string): this;
    /**
     * Sets the card image URL.
     *
     * Устанавливает URL изображения карточки.
     * @param image image URL / URL изображения
     * @returns current instance / текущий экземпляр
     */
    setImage(image: string): this;
}
