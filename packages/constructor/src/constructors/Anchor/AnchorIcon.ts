import { computed } from 'vue'
import type { AnchorProps } from './props'
import type { ConstrBind } from '@dxtmisha/functional'
import type { IconProps } from '../Icon'
import { AnchorEvent } from './AnchorEvent.ts'

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
  readonly icon = computed<string | undefined>(() => {
    if (this.props.hide) {
      return undefined
    }

    if (this.props.isCopy) {
      return this.props.iconTag
    }

    return this.props.iconLink
  })

  /** Binds for the icon/ Привязки для иконки */
  readonly binds = computed<ConstrBind<IconProps>>(() => {
    return {
      icon: this.icon.value,
      iconActive: this.props.iconContentCopy,
      active: this.event.isCopy(),
      dynamic: true
    }
  })

  /**
   * Check if the icon is set
   *
   * Проверяет, установлена ли иконка
   */
  is(): boolean {
    return Boolean(this.icon.value)
  }
}
