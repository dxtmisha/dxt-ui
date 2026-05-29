import type { AnchorProps } from './props'

/**
 * Anchor href attribute handler
 *
 * Обработчик атрибута href якоря
 */
export class AnchorHref {
  /**
   * Constructor
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props: AnchorProps
  ) {
  }

  /** Href attribute / Вычисляемый атрибут href */
  get href(): string | undefined {
    if (this.props.name) {
      return `#${this.props.name}`
    }

    return undefined
  }

  /**
   * Check if href exists
   *
   * Проверить, существует ли href
   */
  is() {
    return Boolean(this.href)
  }

  /**
   * Get href value
   *
   * Получить значение href
   */
  get(): string | undefined {
    return this.href
  }

  /**
   * Get full link
   *
   * Получить полную ссылку
   */
  getLink() {
    return `${location.origin}${location.pathname}${this.href}`
  }
}
