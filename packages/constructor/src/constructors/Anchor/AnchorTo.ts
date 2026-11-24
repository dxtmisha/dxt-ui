// ai-none

import type { Ref } from 'vue'
import { goScrollSmooth, isDomRuntime, toNumber } from '@dxtmisha/functional'

import type { AnchorHref } from './AnchorHref'
import type { AnchorProps } from './props'

/**
 * Anchor scroll handler.
 *
 * Обработчик прокрутки якоря.
 */
export class AnchorTo {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param element anchor DOM element reference / ссылка на DOM-элемент якоря
   * @param href function returning href handler / функция, возвращающая обработчик ссылки
   */
  constructor(
    protected readonly props: Readonly<AnchorProps>,
    protected readonly element: Ref<HTMLAnchorElement | undefined>,
    protected readonly href: () => AnchorHref
  ) {
  }

  /**
   * Scroll to anchor element and update URL hash.
   *
   * Прокрутить к элементу якоря и обновить хэш URL.
   */
  go(): void {
    if (this.element.value && isDomRuntime()) {
      goScrollSmooth(
        this.element.value,
        {
          behavior: this.props.behavior,
          block: this.props.block,
          inline: this.props.inline
        },
        toNumber(this.props.shift)
      )

      const href = this.href().get()

      if (href) {
        history.replaceState({}, '', href)
      }
    }
  }
}
