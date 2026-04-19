import { MetaManager } from './MetaManager'

import { MetaOpenGraphTag, MetaOpenGraphType } from '../types/metaTypes'

/**
 * Class for working with Open Graph meta tags.
 *
 * Класс для управления мета-тегами Open Graph.
 */
export class MetaOg extends MetaManager<MetaOpenGraphTag[]> {
  constructor() {
    super(Object.values(MetaOpenGraphTag), true)
  }

  /**
   * Gets the Open Graph title.
   *
   * Получает заголовок Open Graph.
   * @returns title / заголовок
   */
  getTitle(): string {
    return this.get(MetaOpenGraphTag.title)
  }

  /**
   * Gets the Open Graph type.
   *
   * Получает тип Open Graph.
   * @returns type / тип
   */
  getType(): MetaOpenGraphType {
    return this.get(MetaOpenGraphTag.type) as MetaOpenGraphType
  }

  /**
   * Gets the Open Graph URL.
   *
   * Получает URL Open Graph.
   * @returns URL / URL
   */
  getUrl(): string {
    return this.get(MetaOpenGraphTag.url)
  }

  /**
   * Gets the Open Graph image URL.
   *
   * Получает URL изображения Open Graph.
   * @returns image URL / URL изображения
   */
  getImage(): string {
    return this.get(MetaOpenGraphTag.image)
  }

  /**
   * Gets the Open Graph description.
   *
   * Получает описание Open Graph.
   * @returns description / описание
   */
  getDescription(): string {
    return this.get(MetaOpenGraphTag.description)
  }

  /**
   * Gets the Open Graph locale.
   *
   * Получает локаль Open Graph.
   * @returns locale / локаль
   */
  getLocale(): string {
    return this.get(MetaOpenGraphTag.locale)
  }

  /**
   * Gets the Open Graph site name.
   *
   * Получает название сайта Open Graph.
   * @returns site name / название сайта
   */
  getSiteName(): string {
    return this.get(MetaOpenGraphTag.siteName)
  }

  /**
   * Sets the Open Graph title.
   *
   * Устанавливает заголовок Open Graph.
   * @param title title / заголовок
   * @returns current instance / текущий экземпляр
   */
  setTitle(title: string): this {
    return this.set(MetaOpenGraphTag.title, title)
  }

  /**
   * Sets the Open Graph type.
   *
   * Устанавливает тип Open Graph.
   * @param type type / тип
   * @returns current instance / текущий экземпляр
   */
  setType(type: MetaOpenGraphType): this {
    return this.set(MetaOpenGraphTag.type, type)
  }

  /**
   * Sets the Open Graph URL.
   *
   * Устанавливает URL Open Graph.
   * @param url URL / URL
   * @returns current instance / текущий экземпляр
   */
  setUrl(url: string): this {
    return this.set(MetaOpenGraphTag.url, url)
  }

  /**
   * Sets the Open Graph image URL.
   *
   * Устанавливает URL изображения Open Graph.
   * @param url image URL / URL изображения
   * @returns current instance / текущий экземпляр
   */
  setImage(url: string): this {
    return this.set(MetaOpenGraphTag.image, url)
  }

  /**
   * Sets the Open Graph description.
   *
   * Устанавливает описание Open Graph.
   * @param description description / описание
   * @returns current instance / текущий экземпляр
   */
  setDescription(description: string): this {
    return this.set(MetaOpenGraphTag.description, description)
  }

  /**
   * Sets the Open Graph locale.
   *
   * Устанавливает локаль Open Graph.
   * @param locale locale (e.g. 'en_US', 'ru_RU') / локаль (например, 'en_US', 'ru_RU')
   * @returns current instance / текущий экземпляр
   */
  setLocale(locale: string): this {
    return this.set(MetaOpenGraphTag.locale, locale)
  }

  /**
   * Sets the Open Graph site name.
   *
   * Устанавливает название сайта Open Graph.
   * @param siteName site name / название сайта
   * @returns current instance / текущий экземпляр
   */
  setSiteName(siteName: string) {
    return this.set(MetaOpenGraphTag.siteName, siteName)
  }
}
