import { ref } from 'vue'
import { eventStopPropagation, type ConstrEmit } from '@dxtmisha/functional'

import { InputImageFiles } from './InputImageFiles'
import type { InputImageEmits } from './types'
import type { InputImageProps } from './props'

/**
 * Class managing drag-and-drop events and hover state for InputImage.
 *
 * Класс, управляющий событиями перетаскивания и состоянием наведения для InputImage.
 */
export class InputImageEvents {
  /** State indicating if files are currently dragged over the drop area / Состояние наведения перетаскиваемых файлов над областью загрузки */
  readonly enter = ref<boolean>(false)

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param files file manager instance / экземпляр менеджера файлов
   * @param emits event callback function / функция вызова событий
   */
  constructor(
    protected readonly props: InputImageProps,
    protected readonly files: InputImageFiles,
    protected readonly emits?: ConstrEmit<InputImageEmits>
  ) {
  }

  /**
   * Returns binding drag-and-drop event handlers.
   *
   * Возвращает обработчики событий привязки перетаскивания.
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

    if (!this.props.disabled && !this.props.readonly) {
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

    const currentTarget = event.currentTarget as HTMLElement | null
    const relatedTarget = event.relatedTarget as Node | null

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

    if (!this.props.disabled && !this.props.readonly) {
      this.enter.value = false

      const files = event.dataTransfer?.files
      if (files && files.length > 0) {
        this.files.setFile(files[0])
        this.emits?.('drop', event)
      }
    }
  }
}
