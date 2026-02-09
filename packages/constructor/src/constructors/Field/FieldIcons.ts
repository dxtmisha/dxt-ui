import { computed } from 'vue'
import type { ConstrBind } from '@dxtmisha/functional'

import { type TextInclude } from '../../classes/TextInclude'

import type { IconProps } from '../Icon'
import type { FieldProps } from './props'

/**
 * Class for displaying an icon for arrow control.
 *
 * Класс для вывода иконки для управления стрелками.
 */
export class FieldIcons {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param className class name/ название класса
   * @param text text include/ Подключение текста
   */
  constructor(
    protected readonly props: FieldProps,
    protected readonly className: string,
    protected readonly text: TextInclude
  ) {
  }

  /**
   * Determines whether to display arrows.
   *
   * Определяет, требуется ли отображение стрелок.
   */
  readonly isArrow = computed<boolean>(
    () => Boolean(
      (
        this.props.arrowCarousel
        || this.props.arrowStepper
      )
      && !this.props.disabled
    )
  )

  /**
   * Determines whether to display the "Delete" button.
   *
   * Определяет, требуется ли отображение кнопки "Удалить".
   */
  readonly isCancel = computed<boolean>(() => Boolean(
    this.props.cancel
    && !this.props.readonly
    && !this.props.disabled
    && !this.props.arrowCarousel
    && !this.props.arrowStepper
    && (
      (this.props.cancel === 'auto' && this.props.cancelShow)
      || this.props.cancel === 'always'
    )
  ))

  /**
   * Returns data for the data deletion button.
   *
   * Возвращает данные для кнопки удаления данных.
   */
  readonly cancelBind = computed<ConstrBind<IconProps>>(() => {
    return {
      'class': `${this.className}__cancel`,
      'icon': this.props.iconClose,
      'dynamic': true,
      'data-event-type': 'cancel',
      'ariaLabel': this.text.cancel.value
    }
  })

  /**
   * Returns data for the left arrow.
   *
   * Возвращает данные для стрелки слева.
   */
  readonly previousBind = computed<ConstrBind<IconProps>>(() => {
    return {
      'class': `${this.className}__previous`,
      'icon': this.props.arrowCarousel ? this.props.iconArrowLeft : this.props.iconMinus,
      'disabled': this.props.disabled || this.props.disabledPrevious,
      'dynamic': true,
      'data-event-type': 'previous',
      'ariaLabel': this.props.arrowCarousel ? this.text.previous.value : this.text.decrement.value
    }
  })

  /**
   * Returns data for the right arrow.
   *
   * Возвращает данные для стрелки справа.
   */
  readonly nextBind = computed<ConstrBind<IconProps>>(() => {
    return {
      'class': `${this.className}__next`,
      'icon': this.props.arrowCarousel ? this.props.iconArrowRight : this.props.iconPlus,
      'disabled': this.props.disabled || this.props.disabledNext,
      'dynamic': true,
      'data-event-type': 'next',
      'ariaLabel': this.props.arrowCarousel ? this.text.next.value : this.text.increment.value
    }
  })
}
