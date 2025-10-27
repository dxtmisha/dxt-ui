import { MetaManager } from './MetaManager';
import { MetaOg } from './MetaOg';
import { MetaTwitter } from './MetaTwitter';
import { MetaRobots, MetaTag } from '../types/metaTypes';
/**
 * Unified class for managing all types of meta tags (standard HTML, Open Graph, Twitter Card).
 *
 * Унифицированный класс для управления всеми типами мета-тегов (стандартные HTML, Open Graph, Twitter Card).
 */
export declare class Meta extends MetaManager<MetaTag[]> {
    protected suffix?: string;
    protected og: MetaOg;
    protected twitter: MetaTwitter;
    /**
     * Creates an instance of Meta with integrated Open Graph and Twitter Card support.
     *
     * Создает экземпляр Meta с интегрированной поддержкой Open Graph и Twitter Card.
     */
    constructor();
    /**
     * Gets the MetaOg instance for advanced Open Graph operations.
     *
     * Получает экземпляр MetaOg для расширенных операций с Open Graph.
     */
    getOg(): MetaOg;
    /**
     * Gets the MetaTwitter instance for advanced Twitter Card operations.
     *
     * Получает экземпляр MetaTwitter для расширенных операций с Twitter Card.
     */
    getTwitter(): MetaTwitter;
    /**
     * Gets the page title without suffix.
     *
     * Получает заголовок страницы без суффикса.
     */
    getTitle(): string;
    /**
     * Gets the keywords meta tag.
     *
     * Получает мета-тег keywords.
     */
    getKeywords(): string;
    /**
     * Gets the description meta tag.
     *
     * Получает мета-тег description.
     */
    getDescription(): string;
    /**
     * Gets the Open Graph image URL.
     *
     * Получает URL изображения Open Graph.
     */
    getImage(): string;
    /**
     * Gets the canonical URL.
     *
     * Получает канонический URL.
     */
    getCanonical(): string;
    /**
     * Gets the robots meta tag value.
     *
     * Получает значение мета-тега robots.
     */
    getRobots(): MetaRobots;
    /**
     * Gets the author meta tag.
     *
     * Получает мета-тег author.
     */
    getAuthor(): string;
    /**
     * Gets the Open Graph site name.
     *
     * Получает название сайта Open Graph.
     */
    getSiteName(): string;
    /**
     * Gets the Open Graph locale.
     *
     * Получает локаль Open Graph.
     */
    getLocale(): string;
    /**
     * Sets the page title (with suffix) and updates Open Graph and Twitter Card titles.
     *
     * Устанавливает заголовок страницы (с суффиксом) и обновляет заголовки Open Graph и Twitter Card.
     * @param title page title / заголовок страницы
     */
    setTitle(title: string): this;
    /**
     * Sets the keywords meta tag.
     *
     * Устанавливает мета-тег keywords.
     * @param keywords keywords as string or array / ключевые слова в виде строки или массива
     */
    setKeywords(keywords: string | string[]): this;
    /**
     * Sets the description meta tag.
     *
     * Устанавливает мета-тег description.
     * @param description page description / описание страницы
     */
    setDescription(description: string): this;
    /**
     * Sets the image for Open Graph and Twitter Card.
     *
     * Устанавливает изображение для Open Graph и Twitter Card.
     * @param image image URL / URL изображения
     */
    setImage(image: string): this;
    /**
     * Sets the canonical URL and updates Open Graph and Twitter Card URLs.
     *
     * Устанавливает канонический URL и обновляет URL для Open Graph и Twitter Card.
     * @param canonical canonical URL / канонический URL
     */
    setCanonical(canonical: string): this;
    /**
     * Sets the robots meta tag.
     *
     * Устанавливает мета-тег robots.
     * @param robots robots directive / директива robots
     */
    setRobots(robots: MetaRobots): this;
    /**
     * Sets the author meta tag.
     *
     * Устанавливает мета-тег author.
     * @param author author name / имя автора
     */
    setAuthor(author: string): this;
    /**
     * Sets the site name for Open Graph and Twitter Card.
     *
     * Устанавливает название сайта для Open Graph и Twitter Card.
     * @param siteName site name / название сайта
     */
    setSiteName(siteName: string): this;
    /**
     * Sets the locale for Open Graph.
     *
     * Устанавливает локаль для Open Graph.
     * @param locale locale (e.g. 'en_US', 'ru_RU') / локаль (например, 'en_US', 'ru_RU')
     */
    setLocale(locale: string): this;
    /**
     * Sets the suffix to append to page title.
     *
     * Устанавливает суффикс для добавления к заголовку страницы.
     * @param suffix title suffix (e.g. 'My Site') / суффикс заголовка (например, 'Мой Сайт')
     */
    setSuffix(suffix?: string): void;
    /**
     * Generates the complete HTML for all meta-tags including Open Graph and Twitter Card.
     *
     * Генерирует полный HTML для всех мета-тегов, включая Open Graph и Twitter Card.
     */
    html(): string;
    /**
     * Gets the formatted suffix with separator.
     *
     * Получает отформатированный суффикс с разделителем.
     */
    protected getSuffix(): string;
}
