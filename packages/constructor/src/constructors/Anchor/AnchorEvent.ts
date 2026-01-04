import { ref } from 'vue'
import { writeClipboardData } from '@dxtmisha/functional'

import { TooltipInclude } from '../Tooltip'
import { AnchorHref } from './AnchorHref'
import { AnchorTo } from './AnchorTo'

import type { AnchorProps } from './props'

/**
 * Anchor event handler
 *
 * Обработчик событий Anchor
 */
export class AnchorEvent {
  readonly copy = ref<boolean>()

  protected timeout: any

  /**
   * Constructor
   * @param props input data / входные данные
   * @param tooltip tooltip / подсказка
   * @param href href handler / обработчик ссылки
   * @param to scroll handler / обработчик прокрутки
   */
  constructor(
    protected readonly props: AnchorProps,
    protected readonly tooltip: TooltipInclude,
    protected readonly href: AnchorHref,
    protected readonly to?: AnchorTo
  ) {
  }

  /**
   * Is copy state
   *
   * Является ли состоянием копирования
   */
  isCopy(): boolean {
    return Boolean(this.copy.value)
  }

  /**
   * On click handler
   *
   * Обработчик нажатия
   */
  readonly onClick = (event: MouseEvent): void => {
    event.preventDefault()

    if (this.props.isCopy) {
      writeClipboardData(this.href.getLink())
        .then(() => this.toCopy())
    } else {
      this.to?.go()
    }
  }

  /**
   * Trigger copy state
   *
   * Запустить состояние копирования
   */
  protected toCopy() {
    clearTimeout(this.timeout)

    this.copy.value = true
    this.tooltip.open()

    this.timeout = setTimeout(() => {
      this.copy.value = false
      this.tooltip.close()
    })
  }
}
