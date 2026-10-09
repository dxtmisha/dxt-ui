import type { ConstrBind } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import type { TextInclude } from '../../classes/TextInclude'

import type { ButtonProps } from '../Button'

import type { InputFileItemEvent } from './InputFileItemEvent'

import type { InputFileItemPropsBasic } from './props'

/**
 * Helper class for managing action button configurations in InputFileItem.
 *
 * Вспомогательный класс для управления конфигурацией кнопок действий в InputFileItem.
 */
export class InputFileItemButton {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param event event interaction manager / менеджер событий взаимодействия
   * @param text text translations manager / менеджер переводов текста
   */
  constructor(
    protected readonly props: InputFileItemPropsBasic,
    protected readonly event: InputFileItemEvent,
    protected readonly text: TextInclude
  ) {
  }

  /**
   * Resolves properties and settings for the crop action button.
   *
   * Определяет свойства и настройки для кнопки действия кадрирования.
   * @returns button configuration object / объект конфигурации кнопки
   */
  get crop(): ConstrBind<ButtonProps> {
    return this.getButton(this.text.crop, this.props.iconCrop)
  }

  /**
   * Resolves properties and settings for the delete action button.
   *
   * Определяет свойства и настройки для кнопки действия удаления.
   * @returns button configuration object / объект конфигурации кнопки
   */
  get delete(): ConstrBind<ButtonProps> {
    return this.getButton(
      this.text.delete,
      this.props.iconDelete,
      this.props.confirmDelete === false ? this.event.onDelete : undefined
    )
  }

  /**
   * Resolves properties and settings for the retry action button.
   *
   * Определяет свойства и настройки для кнопки действия повтора.
   * @returns button configuration object / объект конфигурации кнопки
   */
  get retry(): ConstrBind<ButtonProps> {
    return this.getButton(
      this.text.retry,
      this.props.iconRetry,
      this.event.onRetry
    )
  }

  /**
   * Resolves common configuration properties for action buttons.
   *
   * Определяет общие свойства конфигурации для кнопок действий.
   * @param label button label / метка кнопки
   * @param icon button icon / иконка кнопки
   * @param onClick optional click handler callback / необязательный коллбэк обработчика клика
   * @returns button configuration object / объект конфигурации кнопки
   */
  protected getButton(
    label?: string,
    icon?: ButtonProps['icon'],
    onClick?: (event?: MouseEvent) => void
  ): ConstrBind<ButtonProps> {
    const item: ConstrBind<ButtonProps> = {
      title: label,
      icon,
      disabled: this.props.disabled,
      readonly: this.props.readonly,
      ...AriaStaticInclude.label(label),
      ...AriaStaticInclude.disabled(Boolean(this.props.disabled)),
      ...AriaStaticInclude.readonly(Boolean(this.props.readonly))
    }

    if (onClick) {
      item.onClick = onClick
    }

    return item
  }
}
