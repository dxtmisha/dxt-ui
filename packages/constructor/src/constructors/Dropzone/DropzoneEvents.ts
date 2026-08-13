import { ref } from 'vue'
import { eventStopPropagation } from '@dxtmisha/functional'

import { DropzoneFiles } from './DropzoneFiles'
import type { DropzoneProps } from './props'

/**
 * Class managing dropzone drag-and-drop events and hover state.
 *
 * Класс, управляющий событиями перетаскивания и состоянием наведения Dropzone.
 */
export class DropzoneEvents {
  /** State indicating if files are currently dragged over / Состояние наведения перетаскиваемых файлов */
  readonly enter = ref<boolean>(false)

  /**
   * Constructor
   * @param props input data / входные данные
   * @param files file manager instance / экземпляр менеджера файлов
   */
  constructor(
    protected readonly props: DropzoneProps,
    protected readonly files: DropzoneFiles
  ) {
  }

  /**
   * Returns binding drag-and-drop event handlers for the label container.
   *
   * Возвращает обработчики событий привязки перетаскивания для контейнера label.
   * @returns object with event handlers / объект с обработчиками событий
   */
  get binds(): Record<string, any> {
    return {
      onDragover: this.onDragover,
      onDragenter: this.onDragenter,
      onDragleave: this.onDragleave,
      onDrop: this.onDrop
    }
  }

  /**
   * Dragover event handler.
   *
   * Обработчик события dragover.
   * @param event drag event / событие перетаскивания
   */
  protected readonly onDragover = (event: DragEvent): void => {
    eventStopPropagation(event)
  }

  /**
   * Dragenter event handler.
   *
   * Обработчик события dragenter.
   * @param event drag event / событие перетаскивания
   */
  protected readonly onDragenter = (event: DragEvent): void => {
    eventStopPropagation(event)

    if (!this.props.disabled) {
      this.enter.value = true
    }
  }

  /**
   * Dragleave event handler.
   *
   * Обработчик события dragleave.
   * @param event drag event / событие перетаскивания
   */
  protected readonly onDragleave = (event: DragEvent): void => {
    eventStopPropagation(event)

    const currentTarget = event.currentTarget as HTMLElement
    const relatedTarget = event.relatedTarget as Node

    if (
      relatedTarget
      && currentTarget
      && currentTarget.contains(relatedTarget)
    ) {
      return
    }

    this.enter.value = false
  }

  /**
   * Drop event handler.
   *
   * Обработчик события drop.
   * @param event drop event / событие сброса файлов
   */
  protected readonly onDrop = (event: DragEvent): void => {
    eventStopPropagation(event)

    if (!this.props.disabled) {
      this.enter.value = false

      if (event.dataTransfer?.files) {
        this.files.set(event.dataTransfer.files)
      }
    }
  }
}
