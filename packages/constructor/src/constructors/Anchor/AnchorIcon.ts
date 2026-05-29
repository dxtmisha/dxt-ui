import type { ConstrBind } from '@dxtmisha/functional'

import { AnchorEvent } from './AnchorEvent'

import type { IconProps, IconValue } from '../Icon'
import type { AnchorProps } from './props'

/**
 * Class for working with the anchor icon
 *
 * Класс для работы с иконкой якоря
 */
export class AnchorIcon {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param event event handler / обработчик событий
   */
  constructor(
    protected readonly props: AnchorProps,
    protected readonly event: AnchorEvent
  ) {
  }

  /** Icon to display/ Иконка для отображения */
  get icon(): IconValue | undefined {
    if (this.props.hide) {
      return undefined
    }

    if (this.props.isCopy) {
      return this.props.iconTag
    }

    return this.props.iconLink
  }

  /** Binds for the icon/ Привязки для иконки */
  get binds(): ConstrBind<IconProps> {
    return {
      icon: this.icon,
      iconActive: this.props.isCopy ? this.props.iconContentCopy : undefined,
      active: this.event.isCopy()
    }
  }

  /**
   * Check if the icon is set
   *
   * Проверяет, установлена ли иконка
   */
  is(): boolean {
    return Boolean(this.icon)
  }
}
