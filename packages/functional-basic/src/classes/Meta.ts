import { isDomRuntime } from '../functions/isDomRuntime'
import { isFilled } from '../functions/isFilled'
import { toArray } from '../functions/toArray'

import { MetaManager } from './MetaManager'
import { MetaOg } from './MetaOg'
import { MetaTwitter } from './MetaTwitter'

import { MetaRobots, MetaTag } from '../types/metaTypes'

/**
 * Unified class for managing all types of meta tags (standard HTML, Open Graph, Twitter Card).
 *
 * Унифицированный класс для управления всеми типами мета-тегов (стандартные HTML, Open Graph, Twitter Card).
 */
export class Meta extends MetaManager<MetaTag[]> {
  /** Raw page title without suffix / Исходный заголовок страницы без суффикса */
  protected rawTitle?: string
  /** Page title suffix / Суффикс заголовка страницы */
  protected suffix?: string

  /** Open Graph meta instance / Экземпляр мета-тегов Open Graph */
  protected og: MetaOg
  /** Twitter Card meta instance / Экземпляр мета-тегов Twitter Card */
  protected twitter: MetaTwitter

  /**
   * Creates an instance of Meta with integrated Open Graph and Twitter Card support.
   *
   * Создает экземпляр Meta с интегрированной поддержкой Open Graph и Twitter Card.
   */
  constructor() {
    super(Object.values(MetaTag))

    this.og = new MetaOg()
    this.twitter = new MetaTwitter()
  }

  /**
   * Gets the MetaOg instance for advanced Open Graph operations.
   *
   * Получает экземпляр MetaOg для расширенных операций с Open Graph.
   * @returns MetaOg instance / экземпляр MetaOg
   */
  getOg(): MetaOg {
    return this.og
  }

  /**
   * Gets the MetaTwitter instance for advanced Twitter Card operations.
   *
   * Получает экземпляр MetaTwitter для расширенных операций с Twitter Card.
   * @returns MetaTwitter instance / экземпляр MetaTwitter
   */
  getTwitter(): MetaTwitter {
    return this.twitter
  }

  /**
   * Gets the page title without suffix.
   *
   * Получает заголовок страницы без суффикса.
   * @returns title without suffix / заголовок без суффикса
   */
  getTitle(): string {
    if (this.rawTitle !== undefined) {
      return this.rawTitle
    }

    let title = this.get(MetaTag.title)

    if (
      !isFilled(title)
      && isDomRuntime()
    ) {
      title = document.title
    }

    const suffix = this.getSuffix()

    if (
      suffix
      && title.endsWith(suffix)
    ) {
      return title.slice(0, -suffix.length).trim()
    }

    return title.trim()
  }

  /**
   * Gets the keywords meta tag.
   *
   * Получает мета-тег keywords.
   * @returns keywords content / содержимое keywords
   */
  getKeywords(): string {
    return this.get(MetaTag.keywords)
  }

  /**
   * Gets the description meta tag.
   *
   * Получает мета-тег description.
   * @returns description content / содержимое description
   */
  getDescription(): string {
    return this.get(MetaTag.description)
  }

  /**
   * Gets the Open Graph image URL.
   *
   * Получает URL изображения Open Graph.
   * @returns image URL / URL изображения
   */
  getImage(): string {
    return this.og.getImage()
  }

  /**
   * Gets the canonical URL.
   *
   * Получает канонический URL.
   * @returns canonical URL / канонический URL
   */
  getCanonical(): string {
    return this.get(MetaTag.canonical)
  }

  /**
   * Gets the robots meta tag value.
   *
   * Получает значение мета-тега robots.
   * @returns robots directive / директива robots
   */
  getRobots(): MetaRobots {
    return this.get(MetaTag.robots) as MetaRobots
  }

  /**
   * Gets the author meta tag.
   *
   * Получает мета-тег author.
   * @returns author name / имя автора
   */
  getAuthor(): string {
    return this.get(MetaTag.author)
  }

  /**
   * Gets the Open Graph site name.
   *
   * Получает название сайта Open Graph.
   * @returns site name / название сайта
   */
  getSiteName(): string {
    return this.og.getSiteName()
  }

  /**
   * Gets the Open Graph locale.
   *
   * Получает локаль Open Graph.
   * @returns locale / локаль
   */
  getLocale(): string {
    return this.og.getLocale()
  }

  /**
   * Sets the page title (with suffix) and updates Open Graph and Twitter Card titles.
   *
   * Устанавливает заголовок страницы (с суффиксом) и обновляет заголовки Open Graph и Twitter Card.
   * @param title page title / заголовок страницы
   * @returns current instance / текущий экземпляр
   */
  setTitle(title: string): this {
    this.rawTitle = title

    const fullTitle = isFilled(title)
      ? `${title}${this.getSuffix()}`
      : this.suffix
        ? this.suffix
        : ''

    if (isDomRuntime()) {
      document.title = fullTitle
    }

    this.set(MetaTag.title, fullTitle)
    this.og.setTitle(fullTitle)
    this.twitter.setTitle(fullTitle)

    return this
  }

  /**
   * Sets the keywords meta tag.
   *
   * Устанавливает мета-тег keywords.
   * @param keywords keywords as string or array / ключевые слова в виде строки или массива
   * @returns current instance / текущий экземпляр
   */
  setKeywords(keywords: string | string[]): this {
    this.set(MetaTag.keywords, toArray(keywords).join(', '))
    return this
  }

  /**
   * Sets the description meta tag.
   *
   * Устанавливает мета-тег description.
   * @param description page description / описание страницы
   * @returns current instance / текущий экземпляр
   */
  setDescription(description: string): this {
    this.set(MetaTag.description, description)
    return this
  }

  /**
   * Sets the image for Open Graph and Twitter Card.
   *
   * Устанавливает изображение для Open Graph и Twitter Card.
   * @param image image URL / URL изображения
   * @returns current instance / текущий экземпляр
   */
  setImage(image: string): this {
    this.og.setImage(image)
    this.twitter.setImage(image)
    return this
  }

  /**
   * Sets the canonical URL and updates Open Graph and Twitter Card URLs.
   *
   * Устанавливает канонический URL и обновляет URL для Open Graph и Twitter Card.
   * @param canonical canonical URL / канонический URL
   * @returns current instance / текущий экземпляр
   */
  setCanonical(canonical: string): this {
    this.set(MetaTag.canonical, canonical)
    this.og.setUrl(canonical)
    this.twitter.setUrl(canonical)
    return this
  }

  /**
   * Sets the robots meta tag.
   *
   * Устанавливает мета-тег robots.
   * @param robots robots directive / директива robots
   * @returns current instance / текущий экземпляр
   */
  setRobots(robots: MetaRobots): this {
    this.set(MetaTag.robots, robots)
    return this
  }

  /**
   * Sets the author meta tag.
   *
   * Устанавливает мета-тег author.
   * @param author author name / имя автора
   * @returns current instance / текущий экземпляр
   */
  setAuthor(author: string): this {
    this.set(MetaTag.author, author)
    return this
  }

  /**
   * Sets the site name for Open Graph and Twitter Card.
   *
   * Устанавливает название сайта для Open Graph и Twitter Card.
   * @param siteName site name / название сайта
   * @returns current instance / текущий экземпляр
   */
  setSiteName(siteName: string): this {
    this.og.setSiteName(siteName)
    this.twitter.setSite(siteName)
    return this
  }

  /**
   * Sets the locale for Open Graph.
   *
   * Устанавливает локаль для Open Graph.
   * @param locale locale (e.g. 'en_US', 'ru_RU') / локаль (например, 'en_US', 'ru_RU')
   * @returns current instance / текущий экземпляр
   */
  setLocale(locale: string): this {
    this.og.setLocale(locale)
    return this
  }

  /**
   * Sets the suffix to append to page title.
   *
   * Устанавливает суффикс для добавления к заголовку страницы.
   * @param suffix title suffix (e.g. 'My Site') / суффикс заголовка (например, 'Мой Сайт')
   * @returns current instance / текущий экземпляр
   */
  setSuffix(suffix?: string): this {
    this.suffix = suffix

    if (this.rawTitle !== undefined) {
      this.setTitle(this.rawTitle)
    }

    return this
  }

  /**
   * Generates the complete HTML for all meta-tags including Open Graph and Twitter Card.
   *
   * Генерирует полный HTML для всех мета-тегов, включая Open Graph и Twitter Card.
   * @returns complete HTML string / полная HTML-строка
   */
  html(): string {
    return `${super.html()}${this.og.html()}${this.twitter.html()}`
  }

  /**
   * Generates the title as an HTML-safe string.
   *
   * Генерирует заголовок в виде HTML-безопасной строки.
   * @returns title HTML-safe string / HTML-безопасная строка заголовка
   */
  htmlTitle(): string {
    return this.toHtmlTitle(this.get(MetaTag.title))
  }

  /**
   * Gets the formatted suffix with separator.
   *
   * Получает отформатированный суффикс с разделителем.
   * @returns formatted suffix string / отформатированная строка суффикса
   */
  protected getSuffix(): string {
    if (isFilled(this.suffix)) {
      return ` - ${this.suffix}`
    }

    return ''
  }
}
