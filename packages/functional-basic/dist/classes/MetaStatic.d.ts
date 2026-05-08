import { Meta } from './Meta';
import { MetaOg } from './MetaOg';
import { MetaTwitter } from './MetaTwitter';
import { MetaRobots } from '../types/metaTypes';
/**
 * Static class for managing meta tags.
 *
 * Статичный класс для управления мета-тегами.
 */
export declare class MetaStatic {
    /**
     * Returns the singleton instance of the Meta class.
     *
     * Возвращает синглтон-экземпляр класса Meta.
     * @returns Meta singleton / синглтон Meta
     */
    static getItem(): Meta;
    /**
     * Gets the MetaOg instance for advanced Open Graph operations.
     *
     * Получает экземпляр MetaOg для расширенных операций с Open Graph.
     * @returns MetaOg instance / экземпляр MetaOg
     */
    static getOg(): MetaOg;
    /**
     * Gets the MetaTwitter instance for advanced Twitter Card operations.
     *
     * Получает экземпляр MetaTwitter для расширенных операций с Twitter Card.
     * @returns MetaTwitter instance / экземпляр MetaTwitter
     */
    static getTwitter(): MetaTwitter;
    /**
     * Gets the page title without suffix.
     *
     * Получает заголовок страницы без суффикса.
     * @returns title without suffix / заголовок без суффикса
     */
    static getTitle(): string;
    /**
     * Gets the keywords meta tag.
     *
     * Получает мета-тег keywords.
     * @returns keywords content / содержимое keywords
     */
    static getKeywords(): string;
    /**
     * Gets the description meta tag.
     *
     * Получает мета-тег description.
     * @returns description content / содержимое description
     */
    static getDescription(): string;
    /**
     * Gets the Open Graph image URL.
     *
     * Получает URL изображения Open Graph.
     * @returns image URL / URL изображения
     */
    static getImage(): string;
    /**
     * Gets the canonical URL.
     *
     * Получает канонический URL.
     * @returns canonical URL / канонический URL
     */
    static getCanonical(): string;
    /**
     * Gets the robots meta tag value.
     *
     * Получает значение мета-тега robots.
     * @returns robots directive / директива robots
     */
    static getRobots(): MetaRobots;
    /**
     * Gets the author meta tag.
     *
     * Получает мета-тег author.
     * @returns author name / имя автора
     */
    static getAuthor(): string;
    /**
     * Gets the Open Graph site name.
     *
     * Получает название сайта Open Graph.
     * @returns site name / название сайта
     */
    static getSiteName(): string;
    /**
     * Gets the Open Graph locale.
     *
     * Получает локаль Open Graph.
     * @returns locale / локаль
     */
    static getLocale(): string;
    /**
     * Sets the page title (with suffix) and updates Open Graph and Twitter Card titles.
     *
     * Устанавливает заголовок страницы (с суффиксом) и обновляет заголовки Open Graph и Twitter Card.
     * @param title page title / заголовок страницы
     */
    static setTitle(title: string): typeof MetaStatic;
    /**
     * Sets the keywords meta tag.
     *
     * Устанавливает мета-тег keywords.
     * @param keywords keywords as string or array / ключевые слова в виде строки или массива
     */
    static setKeywords(keywords: string | string[]): typeof MetaStatic;
    /**
     * Sets the description meta tag.
     *
     * Устанавливает мета-тег description.
     * @param description page description / описание страницы
     */
    static setDescription(description: string): typeof MetaStatic;
    /**
     * Sets the image for Open Graph and Twitter Card.
     *
     * Устанавливает изображение для Open Graph и Twitter Card.
     * @param image image URL / URL изображения
     */
    static setImage(image: string): typeof MetaStatic;
    /**
     * Sets the canonical URL and updates Open Graph and Twitter Card URLs.
     *
     * Устанавливает канонический URL и обновляет URL для Open Graph и Twitter Card.
     * @param canonical canonical URL / канонический URL
     */
    static setCanonical(canonical: string): typeof MetaStatic;
    /**
     * Sets the robots meta tag.
     *
     * Устанавливает мета-тег robots.
     * @param robots robots directive / директива robots
     */
    static setRobots(robots: MetaRobots): typeof MetaStatic;
    /**
     * Sets the author meta tag.
     *
     * Устанавливает мета-тег author.
     * @param author author name / имя автора
     */
    static setAuthor(author: string): typeof MetaStatic;
    /**
     * Sets the site name for Open Graph and Twitter Card.
     *
     * Устанавливает название сайта для Open Graph и Twitter Card.
     * @param siteName site name / название сайта
     */
    static setSiteName(siteName: string): typeof MetaStatic;
    /**
     * Sets the locale for Open Graph.
     *
     * Устанавливает локаль для Open Graph.
     * @param locale locale (e.g. 'en_US', 'ru_RU') / локаль (например, 'en_US', 'ru_RU')
     */
    static setLocale(locale: string): typeof MetaStatic;
    /**
     * Sets the suffix to append to page title.
     *
     * Устанавливает суффикс для добавления к заголовку страницы.
     * @param suffix title suffix (e.g. 'My Site') / суффикс заголовка (например, 'Мой Сайт')
     */
    static setSuffix(suffix?: string): typeof MetaStatic;
    /**
     * Generates the complete HTML for all meta-tags including Open Graph and Twitter Card.
     *
     * Генерирует полный HTML для всех мета-тегов, включая Open Graph и Twitter Card.
     * @returns complete HTML string / полная HTML-строка
     */
    static html(): string;
    /**
     * Generates the title as an HTML-safe string.
     *
     * Генерирует заголовок в виде HTML-безопасной строки.
     * @returns title HTML-safe string / HTML-безопасная строка заголовка
     */
    static htmlTitle(): string;
}
