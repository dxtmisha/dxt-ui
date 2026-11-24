// ai-none

import { isDomRuntime } from '@dxtmisha/functional'

import type { AnchorProps } from './props'

/**
 * Anchor href attribute handler.
 *
 * Обработчик атрибута href якоря.
 */
export class AnchorHref {
  /**
   * Checks whether an anchor name is configured.
   *
   * Проверяет, задано ли имя якоря.
   * @param props input properties / входные свойства
   * @returns true if anchor name is present / true, если имя якоря задано
   */
  static is(props?: AnchorProps): boolean {
    return Boolean(props?.name)
  }

  /**
   * Constructor
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props: Readonly<AnchorProps>
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
   * Check if href exists.
   *
   * Проверить, существует ли href.
   * @returns true if href exists / true, если href существует
   */
  is(): boolean {
    return Boolean(this.href)
  }

  /**
   * Get href value.
   *
   * Получить значение href.
   * @returns href string or undefined / строка href или undefined
   */
  get(): string | undefined {
    return this.href
  }

  /**
   * Get full link including origin and pathname in DOM runtime.
   *
   * Получить полную ссылку, включая origin и pathname в DOM-среде.
   * @returns full link string / строка полной ссылки
   */
  getLink(): string {
    const href = this.href

    if (!href) {
      return ''
    }

    if (isDomRuntime()) {
      return `${location.origin}${location.pathname}${href}`
    }

    return href
  }
}
