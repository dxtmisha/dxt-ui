import { createElement } from '../functions/createElement'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isFilled } from '../functions/isFilled'
import { toArray } from '../functions/toArray.ts'

export enum MetaOgProps {
  TITLE = 'og:title',
  DESCRIPTION = 'og:description',
  IMAGE = 'og:image',
  URL = 'og:url',
  TYPE = 'og:type',
  SITE_NAME = 'og:site_name',
  LOCALE = 'og:locale'
}

export enum MetaTwitterProps {
  CARD = 'twitter:card',
  TITLE = 'twitter:title',
  DESCRIPTION = 'twitter:description',
  IMAGE = 'twitter:image',
  SITE = 'twitter:site',
  CREATOR = 'twitter:creator'
}

export type MetaTwitterCardItem = 'summary' | 'summary_large_image' | 'app' | 'player'
export type MetaOgType = 'website' | 'article' | 'product' | 'video.movie' | 'music.song' | 'book' | 'profile'

/**
 * Class for managing meta tags and SEO.
 *
 * Класс для управления мета-тегами и SEO.
 */
export class MetaManager {
  protected static suffix?: string

  static getMeta(name: string): string {
    return this.findMetaElement(name)?.content ?? ''
  }

  static getTitle(): string {
    if (!isDomRuntime()) {
      return ''
    }

    return document.title
  }

  static getDescription(): string {
    return this.getMeta('description')
  }

  static getImage(): string {
    return this.getMeta('og:image')
  }

  static getKeywords(): string {
    return this.getMeta('keywords')
  }

  static setMeta(
    name: string,
    content: string,
    isProperty: boolean = false
  ) {
    const element = this.findMetaElement(name)

    if (element) {
      element.content = content
    } else if (isDomRuntime()) {
      const options = { content }

      if (isProperty) {
        Object.assign(options, { property: name })
      } else {
        Object.assign(options, { name })
      }

      createElement<HTMLMetaElement>(
        document.head,
        'meta',
        options
      )
    }
  }

  static setSuffix(suffix?: string) {
    this.suffix = suffix
  }

  static setTitle(title: string) {
    if (!isDomRuntime()) {
      return
    }

    const fullTitle = `${title}${this.addSuffix()}`

    document.title = fullTitle
    this.setMeta('og:title', fullTitle, true)
    this.setMeta('twitter:title', fullTitle)
  }

  static setDescription(description: string) {
    this.setMeta('description', description)
    this.setMeta('og:description', description, true)
    this.setMeta('twitter:description', description)
  }

  static setImages(url: string) {
    this.setMeta('og:image', url, true)
    this.setMeta('twitter:image', url)
  }

  static setKeywords(keywords: string | string[]) {
    this.setMeta(
      'keywords',
      toArray(keywords).join(', ')
    )
  }

  static setOgUrl(url: string) {
    this.setMeta('og:url', url, true)
  }

  /**
   * Set Open Graph content type (e.g., "website", "article", "product").
   *
   * Устанавливает тип контента для Open Graph (например, "website", "article", "product").
   * @param type content type / тип контента
   */
  static setOgType(type: MetaOgType) {
    this.setMeta('og:type', type, true)
  }

  static setOgSiteName(siteName: string) {
    this.setMeta('og:site_name', siteName, true)
  }

  static setOgLocale(locale: string) {
    this.setMeta('og:locale', locale, true)
  }

  // Twitter Cards
  static setTwitterCard(card: MetaTwitterCardItem) {
    this.setMeta('twitter:card', card)
  }

  static setTwitterSite(site: string) {
    this.setMeta('twitter:site', site)
  }

  static setTwitterCreator(creator: string) {
    this.setMeta('twitter:creator', creator)
  }

  protected static addSuffix(): string {
    if (isFilled(this.suffix)) {
      return ` - ${this.suffix}`
    }

    return ''
  }

  protected static findMetaElement(name: string): HTMLMetaElement | undefined {
    if (!isDomRuntime()) {
      return undefined
    }

    return document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
      || document.querySelector<HTMLMetaElement>(`meta[property="${name}"]`)
      || undefined
  }
}
