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
   */
  getCard(): MetaTwitterCard {
    return this.get(MetaTwitterTag.card) as MetaTwitterCard
  }

  /**
   * Gets the website or brand @username.
   *
   * Получает аккаунт сайта или бренда (@username).
   */
  getSite(): string {
    return this.get(MetaTwitterTag.site)
  }

  /**
   * Gets the content creator @username.
   *
   * Получает автора контента (@username).
   */
  getCreator(): string {
    return this.get(MetaTwitterTag.creator)
  }

  /**
   * Gets the page URL.
   *
   * Получает URL страницы.
   */
  getUrl(): string {
    return this.get(MetaTwitterTag.url)
  }

  /**
   * Gets the card title.
   *
   * Получает заголовок карточки.
   */
  getTitle(): string {
    return this.get(MetaTwitterTag.title)
  }

  /**
   * Gets the card description.
   *
   * Получает описание карточки.
   */
  getDescription(): string {
    return this.get(MetaTwitterTag.description)
  }

  /**
   * Gets the card image URL.
   *
   * Получает URL изображения карточки.
   */
  getImage(): string {
    return this.get(MetaTwitterTag.image)
  }

  /**
   * Sets the Twitter Card type.
   *
   * Устанавливает тип Twitter Card.
   * @param card card type / тип карточки
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
   */
  setImage(image: string): this {
    this.set(MetaTwitterTag.image, image)
    return this
  }
}
