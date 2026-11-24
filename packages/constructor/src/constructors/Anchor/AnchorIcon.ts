// ai-none

import { type ConstrBind, getBind, isString } from '@dxtmisha/functional'

import type { IconProps, IconValue } from '../Icon'
import type { AnchorEvent } from './AnchorEvent'
import type { AnchorProps } from './props'

/**
 * Class for working with the anchor icon.
 *
 * Класс для работы с иконкой якоря.
 */
export class AnchorIcon {
  /**
   * Checks whether an anchor icon should be displayed for the given properties.
   *
   * Проверяет, должна ли отображаться иконка якоря для заданных свойств.
   * @param props input properties / входные свойства
   * @returns true if icon is configured and not hidden / true, если иконка задана и не скрыта
   */
  static is(props?: AnchorProps): boolean {
    if (props?.hide) {
      return false
    }

    return Boolean(props?.isCopy ? props.iconTag : props?.iconLink)
  }

  /**
   * Constructor
   * @param props input data / входные данные
   * @param event function returning event handler / функция, возвращающая обработчик событий
   */
  constructor(
    protected readonly props: Readonly<AnchorProps>,
    protected readonly event: () => AnchorEvent
  ) {
  }

  /** Binds for the icon / Привязки для иконки */
  get binds(): ConstrBind<IconProps> {
    const iconActive = this.props.isCopy
      ? (isString(this.props.iconContentCopy) ? this.props.iconContentCopy : this.props.iconContentCopy?.icon)
      : undefined

    return getBind(
      this.icon ?? undefined,
      {
        iconActive,
        active: this.props.isCopy ? this.event().isCopy() : false
      },
      'icon'
    )
  }

  /** Icon to display / Иконка для отображения */
  get icon(): IconValue | undefined {
    if (this.props.hide) {
      return undefined
    }

    if (this.props.isCopy) {
      return this.props.iconTag
    }

    return this.props.iconLink
  }

  /**
   * Check if the icon is set.
   *
   * Проверяет, установлена ли иконка.
   * @returns true if icon is present / true, если иконка задана
   */
  is(): boolean {
    return Boolean(this.icon)
  }
}
