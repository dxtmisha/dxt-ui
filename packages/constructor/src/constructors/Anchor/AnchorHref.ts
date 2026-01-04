import type { AnchorProps } from './props.ts'
import { computed } from 'vue'

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
