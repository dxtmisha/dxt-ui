import type { ConstrEmit } from '@dxtmisha/functional'

import type { CropAreaCoordinator } from '../CropArea'
import type { InputFileItemFile } from './InputFileItemFile'

import type { InputFileItemEmits } from './types'
import type { InputFileItemPropsBasic } from './props'

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
   * @param file file manager instance / экземпляр менеджера файла
   * @param emits event emitter callback / коллбэк отправки событий
   */
  constructor(
    protected readonly props: InputFileItemPropsBasic,
    protected readonly file: InputFileItemFile,
    protected readonly emits?: ConstrEmit<InputFileItemEmits>
  ) {
  }

  /**
   * Crop change action handler.
   *
   * Обработчик действия изменения кадрирования.
   * @param coordinator optional crop coordinates / необязательные координаты кадрирования
   */
  readonly onCrop = (coordinator?: CropAreaCoordinator): void => {
    this.emits?.('crop', this.file.get(coordinator))
  }

  /**
   * Delete action handler.
   *
   * Обработчик действия удаления.
   * @param event optional mouse event / необязательное событие мыши
   */
  readonly onDelete = (event?: MouseEvent): void => {
    event?.stopPropagation()
    this.emits?.('delete', this.file.get())
  }

  /**
   * Retry action handler.
   *
   * Обработчик действия повтора.
   * @param event optional mouse event / необязательное событие мыши
   */
  readonly onRetry = (event?: MouseEvent): void => {
    event?.stopPropagation()
    this.emits?.('retry', this.file.get())
  }
}
