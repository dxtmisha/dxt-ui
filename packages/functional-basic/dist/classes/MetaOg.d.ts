import { MetaManager } from './MetaManager';
import { MetaOpenGraphTag, MetaOpenGraphType } from '../types/metaTypes';
/**
 * Class for working with Open Graph meta tags.
 *
 * Класс для управления мета-тегами Open Graph.
 */
export declare class MetaOg extends MetaManager<MetaOpenGraphTag[]> {
    constructor();
    /**
     * Gets the Open Graph title.
     *
     * Получает заголовок Open Graph.
     */
    getTitle(): string;
    /**
     * Gets the Open Graph type.
     *
     * Получает тип Open Graph.
     */
    getType(): MetaOpenGraphType;
    /**
     * Gets the Open Graph URL.
     *
     * Получает URL Open Graph.
     */
    getUrl(): string;
    /**
     * Gets the Open Graph image URL.
     *
     * Получает URL изображения Open Graph.
     */
    getImage(): string;
    /**
     * Gets the Open Graph description.
     *
     * Получает описание Open Graph.
     */
    getDescription(): string;
    /**
     * Gets the Open Graph locale.
     *
     * Получает локаль Open Graph.
     */
    getLocale(): string;
    /**
     * Gets the Open Graph site name.
     *
     * Получает название сайта Open Graph.
     */
    getSiteName(): string;
    /**
     * Sets the Open Graph title.
     *
     * Устанавливает заголовок Open Graph.
     * @param title title / заголовок
     */
    setTitle(title: string): this;
    /**
     * Sets the Open Graph type.
     *
     * Устанавливает тип Open Graph.
     * @param type type / тип
     */
    setType(type: MetaOpenGraphType): this;
    /**
     * Sets the Open Graph URL.
     *
     * Устанавливает URL Open Graph.
     * @param url URL / URL
     */
    setUrl(url: string): this;
    /**
     * Sets the Open Graph image URL.
     *
     * Устанавливает URL изображения Open Graph.
     * @param url image URL / URL изображения
     */
    setImage(url: string): this;
    /**
     * Sets the Open Graph description.
     *
     * Устанавливает описание Open Graph.
     * @param description description / описание
     */
    setDescription(description: string): this;
    /**
     * Sets the Open Graph locale.
     *
     * Устанавливает локаль Open Graph.
     * @param locale locale (e.g. 'en_US', 'ru_RU') / локаль (например, 'en_US', 'ru_RU')
     */
    setLocale(locale: string): this;
    /**
     * Sets the Open Graph site name.
     *
     * Устанавливает название сайта Open Graph.
     * @param siteName site name / название сайта
     */
    setSiteName(siteName: string): this;
}
