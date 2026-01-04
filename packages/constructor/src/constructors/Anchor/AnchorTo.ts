import type { Ref } from 'vue'
import { goScrollSmooth, toNumber } from '@dxtmisha/functional'

import { AnchorHref } from './AnchorHref'
import type { AnchorProps } from './props'

/**
 * Anchor scroll handler
 *
 * Обработчик прокрутки якоря
 */
export class AnchorTo {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param href href handler / обработчик ссылки
   */
  constructor(
    protected readonly props: AnchorProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly href: AnchorHref
  ) {
  }

  /**
   * Scroll to element
   *
   * Прокрутить к элементу
   */
  go() {
    if (this.element.value) {
      goScrollSmooth(
        this.element.value,
        {
          behavior: this.props.behavior,
          block: this.props.block,
          inline: this.props.inline
        },
        toNumber(this.props.shift)
      )

      history.replaceState({}, '', this.href.get())
    }
  }
}
