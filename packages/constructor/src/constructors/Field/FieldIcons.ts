// ai-none

import type { ConstrBind, DesignName } from '@dxtmisha/functional'

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
   * Checks if any action icons (arrows or cancel button) should be displayed.
   *
   * Проверяет, требуется ли отображение каких-либо иконок действий (стрелок или кнопки отмены).
   * @param props input properties / входящие свойства
   * @returns true if any action icons should be displayed / true, если требуется отображение иконок действий
   */
  static is(props?: Readonly<FieldProps>): boolean {
    return this.isArrow(props) || this.isCancel(props)
  }

  /**
   * Determines whether to display control arrows.
   *
   * Определяет, требуется ли отображение стрелок управления.
   * @param props input properties / входящие свойства
   * @returns true if arrows should be displayed / true, если требуется отображение стрелок
   */
  static isArrow(props?: Readonly<FieldProps>): boolean {
    return Boolean(
      (
        props?.arrowCarousel
        || props?.arrowStepper
      )
      && !props.disabled
    )
  }

  /**
   * Determines whether to display the clear/cancel button.
   *
   * Определяет, требуется ли отображение кнопки очистки/отмены.
   * @param props input properties / входящие свойства
   * @returns true if the cancel button should be displayed / true, если требуется отображение кнопки «Удалить»
   */
  static isCancel(props?: Readonly<FieldProps>): boolean {
    return Boolean(
      props?.cancel
      && !props.readonly
      && !props.disabled
      && !props.arrowCarousel
      && !props.arrowStepper
      && (
        (props.cancel === 'auto' && props.cancelShow)
        || props.cancel === 'always'
      )
    )
  }

  /**
   * Constructor for initializing FieldIcons.
   *
   * Конструктор для инициализации FieldIcons.
   * @param props input properties / входящие свойства
   * @param naming component naming helper / помощник именования компонента
   * @param text text translations utility getter / функция получения утилиты перевода текста
   */
  constructor(
    protected readonly props: Readonly<FieldProps>,
    protected readonly naming: DesignName,
    protected readonly text: () => TextInclude
  ) {}

  /**
   * Returns binding attributes for the data deletion (clear) button.
   *
   * Возвращает атрибуты привязки для кнопки удаления (очистки) данных.
   * @returns data for the cancel button / данные для кнопки удаления
   */
  get cancelBind(): ConstrBind<IconProps> {
    return {
      'class': this.naming.getSubClass('cancel'),
      'icon': this.props.iconClose,
      'dynamic': true,
      'data-event-type': 'cancel',
      'ariaLabel': this.text().cancel
    }
  }

  /**
   * Returns binding attributes for the previous/decrement arrow.
   *
   * Возвращает атрибуты привязки для стрелки «назад» или уменьшения значения.
   * @returns data for the left arrow / данные для левой стрелки
   */
  get previousBind(): ConstrBind<IconProps> {
    const text = this.text()

    return {
      'class': this.naming.getSubClass('previous'),
      'icon': this.props.arrowCarousel ? this.props.iconArrowLeft : this.props.iconMinus,
      'disabled': this.props.disabled || this.props.disabledPrevious,
      'dynamic': true,
      'data-event-type': 'previous',
      'ariaLabel': this.props.arrowCarousel ? text.previous : text.decrement
    }
  }

  /**
   * Returns binding attributes for the next/increment arrow.
   *
   * Возвращает атрибуты привязки для стрелки «вперед» или увеличения значения.
   * @returns data for the right arrow / данные для правой стрелки
   */
  get nextBind(): ConstrBind<IconProps> {
    const text = this.text()

    return {
      'class': this.naming.getSubClass('next'),
      'icon': this.props.arrowCarousel ? this.props.iconArrowRight : this.props.iconPlus,
      'disabled': this.props.disabled || this.props.disabledNext,
      'dynamic': true,
      'data-event-type': 'next',
      'ariaLabel': this.props.arrowCarousel ? text.next : text.increment
    }
  }
}
