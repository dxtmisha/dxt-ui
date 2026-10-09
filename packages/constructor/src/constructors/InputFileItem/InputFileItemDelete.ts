import type { ConstrBind } from '@dxtmisha/functional'

import type { TextInclude } from '../../classes/TextInclude'
import type { DialogProps } from '../Dialog'
import type { InputFileItemEvent } from './InputFileItemEvent'

import type { InputFileItemPropsBasic } from './props'

/**
 * Helper class for managing delete confirmation and dialog configuration in InputFileItem.
 *
 * Вспомогательный класс для управления подтверждением удаления и конфигурацией диалога в InputFileItem.
 */
export class InputFileItemDelete {
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
   * Resolves properties and settings for the confirmation dialog.
   *
   * Определяет свойства и настройки для диалога подтверждения.
   * @returns dialog configuration object or undefined / объект конфигурации диалога или undefined
   */
  get dialog(): ConstrBind<DialogProps> | undefined {
    return {
      icon: this.props.iconWarning,
      description: this.text.deleteConfirm,
      clickOkAndClose: true,
      onOk: this.event.onDelete
    }
  }

  /**
   * Checks whether the delete confirmation dialog is required.
   *
   * Проверяет, требуется ли диалог подтверждения удаления.
   * @returns check result / результат проверки
   */
  is(): boolean {
    return this.props.confirmDelete !== false
  }
}
