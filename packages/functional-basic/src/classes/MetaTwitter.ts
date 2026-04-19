import { MetaManager } from './MetaManager'

import { MetaTwitterCard, MetaTwitterTag } from '../types/metaTypes'

/**
 * Class for working with Twitter Card meta tags.
 *
 * Класс для управления мета-тегами Twitter Card.
 */
export class MetaTwitter extends MetaManager<MetaTwitterTag[]> {
  constructor() {
    super(Object.values(MetaTwitterTag))
  }

  /**
   * Gets the Twitter Card type.
   *
   * Получает тип Twitter Card.
   * @returns card type / тип карточки
   */
  getCard(): MetaTwitterCard {
    return this.get(MetaTwitterTag.card) as MetaTwitterCard
  }

  /**
   * Gets the website or brand @username.
   *
   * Получает аккаунт сайта или бренда (@username).
   * @returns @username / аккаунт
   */
  getSite(): string {
    return this.get(MetaTwitterTag.site)
  }

  /**
   * Gets the content creator @username.
   *
   * Получает автора контента (@username).
   * @returns @username / аккаунт автора
   */
  getCreator(): string {
    return this.get(MetaTwitterTag.creator)
  }

  /**
   * Gets the page URL.
   *
   * Получает URL страницы.
   * @returns URL / URL
   */
  getUrl(): string {
    return this.get(MetaTwitterTag.url)
  }

  /**
   * Gets the card title.
   *
   * Получает заголовок карточки.
   * @returns title / заголовок
   */
  getTitle(): string {
    return this.get(MetaTwitterTag.title)
  }

  /**
   * Gets the card description.
   *
   * Получает описание карточки.
   * @returns description / описание
   */
  getDescription(): string {
    return this.get(MetaTwitterTag.description)
  }

  /**
   * Gets the card image URL.
   *
   * Получает URL изображения карточки.
   * @returns image URL / URL изображения
   */
  getImage(): string {
    return this.get(MetaTwitterTag.image)
  }

  /**
   * Sets the Twitter Card type.
   *
   * Устанавливает тип Twitter Card.
   * @param card card type / тип карточки
   * @returns current instance / текущий экземпляр
   */
  setCard(card: MetaTwitterCard): this {
    this.set(MetaTwitterTag.card, card)
    return this
  }

  /**
   * Sets the website or brand @username.
   *
   * Устанавливает аккаунт сайта или бренда (@username).
   * @param site @username / аккаунт
   * @returns current instance / текущий экземпляр
   */
  setSite(site: string): this {
    this.set(MetaTwitterTag.site, site)
    return this
  }

  /**
   * Sets the content creator @username.
   *
   * Устанавливает автора контента (@username).
   * @param creator @username / аккаунт автора
   * @returns current instance / текущий экземпляр
   */
  setCreator(creator: string): this {
    this.set(MetaTwitterTag.creator, creator)
    return this
  }

  /**
   * Sets the page URL.
   *
   * Устанавливает URL страницы.
   * @param url URL / URL
   * @returns current instance / текущий экземпляр
   */
  setUrl(url: string): this {
    this.set(MetaTwitterTag.url, url)
    return this
  }

  /**
   * Sets the card title.
   *
   * Устанавливает заголовок карточки.
   * @param title title / заголовок
   * @returns current instance / текущий экземпляр
   */
  setTitle(title: string): this {
    this.set(MetaTwitterTag.title, title)
    return this
  }

  /**
   * Sets the card description.
   *
   * Устанавливает описание карточки.
   * @param description description / описание
   * @returns current instance / текущий экземпляр
   */
  setDescription(description: string): this {
    this.set(MetaTwitterTag.description, description)
    return this
  }

  /**
   * Sets the card image URL.
   *
   * Устанавливает URL изображения карточки.
   * @param image image URL / URL изображения
   * @returns current instance / текущий экземпляр
   */
  setImage(image: string): this {
    this.set(MetaTwitterTag.image, image)
    return this
  }
}
