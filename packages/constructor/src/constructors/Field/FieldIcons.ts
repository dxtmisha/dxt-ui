import type { ConstrBind } from '@dxtmisha/functional'

import { type TextInclude } from '../../classes/TextInclude'

import type { IconProps } from '../Icon'
import type { FieldProps } from './props'

/**
 * Class for managing and displaying action icons (arrows, cancel/clear button) inside the field.
 * It calculates binding parameters and checks visibility conditions for action controls.
 *
 * Класс для управления и отображения иконок действий (стрелки, кнопка отмены/очистки) внутри поля.
 * Вычисляет параметры привязки и проверяет условия видимости для элементов управления действиями.
 */
export class FieldIcons {
  /**
   * Constructor for initializing FieldIcons.
   *
   * Конструктор для инициализации FieldIcons.
   * @param props input properties / входящие свойства
   * @param className base CSS class name / базовое имя CSS-класса
   * @param text text translations utility / утилита перевода текста
   */
  constructor(
    protected readonly props: FieldProps,
    protected readonly className: string,
    protected readonly text: TextInclude
  ) {}

  /**
   * Returns binding attributes for the data deletion (clear) button.
   *
   * Возвращает атрибуты привязки для кнопки удаления (очистки) данных.
   * @returns data for the cancel button / данные для кнопки удаления
   */
  get cancelBind(): ConstrBind<IconProps> {
    return {
      'class': `${this.className}__cancel`,
      'icon': this.props.iconClose,
      'dynamic': true,
      'data-event-type': 'cancel',
      'ariaLabel': this.text.cancel
    }
  }

  /**
   * Returns binding attributes for the previous/decrement arrow.
   *
   * Возвращает атрибуты привязки для стрелки «назад» или уменьшения значения.
   * @returns data for the left arrow / данные для левой стрелки
   */
  get previousBind(): ConstrBind<IconProps> {
    return {
      'class': `${this.className}__previous`,
      'icon': this.props.arrowCarousel ? this.props.iconArrowLeft : this.props.iconMinus,
      'disabled': this.props.disabled || this.props.disabledPrevious,
      'dynamic': true,
      'data-event-type': 'previous',
      'ariaLabel': this.props.arrowCarousel ? this.text.previous : this.text.decrement
    }
  }

  /**
   * Returns binding attributes for the next/increment arrow.
   *
   * Возвращает атрибуты привязки для стрелки «вперед» или увеличения значения.
   * @returns data for the right arrow / данные для правой стрелки
   */
  get nextBind(): ConstrBind<IconProps> {
    return {
      'class': `${this.className}__next`,
      'icon': this.props.arrowCarousel ? this.props.iconArrowRight : this.props.iconPlus,
      'disabled': this.props.disabled || this.props.disabledNext,
      'dynamic': true,
      'data-event-type': 'next',
      'ariaLabel': this.props.arrowCarousel ? this.text.next : this.text.increment
    }
  }

  /**
   * Determines whether to display control arrows.
   *
   * Определяет, требуется ли отображение стрелок управления.
   * @returns true if arrows should be displayed / true, если требуется отображение стрелок
   */
  isArrow(): boolean {
    return Boolean(
      (
        this.props.arrowCarousel
        || this.props.arrowStepper
      )
      && !this.props.disabled
    )
  }

  /**
   * Determines whether to display the clear/cancel button.
   *
   * Определяет, требуется ли отображение кнопки очистки/отмены.
   * @returns true if the cancel button should be displayed / true, если требуется отображение кнопки «Удалить»
   */
  isCancel(): boolean {
    return Boolean(
      this.props.cancel
      && !this.props.readonly
      && !this.props.disabled
      && !this.props.arrowCarousel
      && !this.props.arrowStepper
      && (
        (this.props.cancel === 'auto' && this.props.cancelShow)
        || this.props.cancel === 'always'
      )
    )
  }
}
