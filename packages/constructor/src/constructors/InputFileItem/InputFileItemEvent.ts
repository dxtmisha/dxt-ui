import type { ConstrEmit } from '@dxtmisha/functional'

import type { InputFileItemPropsBasic } from './props'
import type { InputFileItemEmits } from './types'

/**
 * Helper class for handling user interaction events in InputFileItem.
 *
 * Вспомогательный класс для обработки событий взаимодействия пользователя в InputFileItem.
 */
export class InputFileItemEvent {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param emits event emitter callback / коллбэк отправки событий
   */
  constructor(
    protected readonly props: InputFileItemPropsBasic,
    protected readonly emits?: ConstrEmit<InputFileItemEmits>
  ) {
  }

  /**
   * Click event handler.
   *
   * Обработчик события клика.
   * @param event mouse click event / событие клика мыши
   */
  readonly onClick = (event: MouseEvent): void => {
    if (!this.props.disabled && !this.props.readonly) {
      this.emits?.('click', event)
    }
  }

  /**
   * Delete action handler.
   *
   * Обработчик действия удаления.
   * @param event optional mouse event / необязательное событие мыши
   */
  readonly onDelete = (event?: MouseEvent): void => {
    event?.stopPropagation()
    this.emits?.('delete', this.props.file ?? this.props.item)
  }

  /**
   * Retry action handler.
   *
   * Обработчик действия повтора.
   * @param event optional mouse event / необязательное событие мыши
   */
  readonly onRetry = (event?: MouseEvent): void => {
    event?.stopPropagation()
    this.emits?.('retry', this.props.file ?? this.props.item)
  }
}
