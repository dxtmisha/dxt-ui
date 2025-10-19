import { createElement } from '../functions/createElement'
import { isDomRuntime } from '../functions/isDomRuntime'

/**
 * Class for managing canonical URL on the page.
 *
 * Класс для управления каноническим URL на странице.
 */
export class MetaManagerCanonical {
  protected static element?: HTMLLinkElement

  /**
   * Get canonical URL from the page.
   *
   * Получает канонический URL со страницы.
   */
  static get(): string {
    return this.findElement()?.href ?? ''
  }

  /**
   * Set canonical URL on the page (replaces existing).
   *
   * Устанавливает канонический URL на странице (заменяет существующий).
   * @param href canonical URL / канонический URL
   */
  static set(href: string): void {
    if (!isDomRuntime()) {
      return
    }

    const existing = this.findElement()

    if (existing) {
      existing.href = href
    } else {
      createElement<HTMLLinkElement>(
        document.head,
        'link',
        { rel: 'canonical', href }
      )
    }

    this.element = this.findElement()
  }

  /**
   * Remove canonical URL from the page.
   *
   * Удаляет канонический URL со страницы.
   */
  static remove(): void {
    if (!isDomRuntime()) {
      return
    }

    const existing = this.findElement()

    if (existing) {
      existing.remove()
      this.element = undefined
    }
  }

  /**
   * Find canonical link element on the page.
   *
   * Находит элемент canonical ссылки на странице.
   */
  protected static findElement(): HTMLLinkElement | undefined {
    if (!isDomRuntime()) {
      return undefined
    }

    return document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? undefined
  }
}
