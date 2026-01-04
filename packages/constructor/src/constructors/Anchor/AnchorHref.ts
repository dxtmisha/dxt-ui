import { computed } from 'vue'
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

  /** Computed href attribute/ Вычисляемый атрибут href */
  readonly href = computed<string | undefined>(() => {
    if (this.props.name) {
      return `#${this.props.name}`
    }

    return undefined
  })

  /**
   * Check if href exists
   *
   * Проверить, существует ли href
   */
  is() {
    return Boolean(this.href.value)
  }

  /**
   * Get href value
   *
   * Получить значение href
   */
  get(): string | undefined {
    return this.href.value
  }

  /**
   * Get full link
   *
   * Получить полную ссылку
   */
  getLink() {
    return `${location.origin}${location.pathname}${this.href.value}`
  }
}
