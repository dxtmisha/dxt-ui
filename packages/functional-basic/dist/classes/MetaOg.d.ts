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
     * @returns title / заголовок
     */
    getTitle(): string;
    /**
     * Gets the Open Graph type.
     *
     * Получает тип Open Graph.
     * @returns type / тип
     */
    getType(): MetaOpenGraphType;
    /**
     * Gets the Open Graph URL.
     *
     * Получает URL Open Graph.
     * @returns URL / URL
     */
    getUrl(): string;
    /**
     * Gets the Open Graph image URL.
     *
     * Получает URL изображения Open Graph.
     * @returns image URL / URL изображения
     */
    getImage(): string;
    /**
     * Gets the Open Graph description.
     *
     * Получает описание Open Graph.
     * @returns description / описание
     */
    getDescription(): string;
    /**
     * Gets the Open Graph locale.
     *
     * Получает локаль Open Graph.
     * @returns locale / локаль
     */
    getLocale(): string;
    /**
     * Gets the Open Graph site name.
     *
     * Получает название сайта Open Graph.
     * @returns site name / название сайта
     */
    getSiteName(): string;
    /**
     * Sets the Open Graph title.
     *
     * Устанавливает заголовок Open Graph.
     * @param title title / заголовок
     * @returns current instance / текущий экземпляр
     */
    setTitle(title: string): this;
    /**
     * Sets the Open Graph type.
     *
     * Устанавливает тип Open Graph.
     * @param type type / тип
     * @returns current instance / текущий экземпляр
     */
    setType(type: MetaOpenGraphType): this;
    /**
     * Sets the Open Graph URL.
     *
     * Устанавливает URL Open Graph.
     * @param url URL / URL
     * @returns current instance / текущий экземпляр
     */
    setUrl(url: string): this;
    /**
     * Sets the Open Graph image URL.
     *
     * Устанавливает URL изображения Open Graph.
     * @param url image URL / URL изображения
     * @returns current instance / текущий экземпляр
     */
    setImage(url: string): this;
    /**
     * Sets the Open Graph description.
     *
     * Устанавливает описание Open Graph.
     * @param description description / описание
     * @returns current instance / текущий экземпляр
     */
    setDescription(description: string): this;
    /**
     * Sets the Open Graph locale.
     *
     * Устанавливает локаль Open Graph.
     * @param locale locale (e.g. 'en_US', 'ru_RU') / локаль (например, 'en_US', 'ru_RU')
     * @returns current instance / текущий экземпляр
     */
    setLocale(locale: string): this;
    /**
     * Sets the Open Graph site name.
     *
     * Устанавливает название сайта Open Graph.
     * @param siteName site name / название сайта
     * @returns current instance / текущий экземпляр
     */
    setSiteName(siteName: string): this;
}
