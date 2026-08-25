import { ref } from 'vue'

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
   */
  constructor(
    protected readonly props: DropzoneProps
  ) {
  }

  /**
   * Returns binding drag-and-drop event handlers for the input element.
   *
   * Возвращает обработчики событий привязки перетаскивания для элемента input.
   * @returns object with event handlers / объект с обработчиками событий
   */
  get binds(): Record<string, any> {
    return {
      onDragenter: this.onDragenter,
      onDragleave: this.onDragleave,
      onDrop: this.onDrop
    }
  }

  /**
   * Dragenter event handler.
   *
   * Обработчик события dragenter.
   */
  protected readonly onDragenter = (): void => {
    if (!this.props.disabled && !this.props.readonly) {
      this.enter.value = true
    }
  }

  /**
   * Dragleave event handler.
   *
   * Обработчик события dragleave.
   */
  protected readonly onDragleave = (): void => {
    this.enter.value = false
  }

  /**
   * Drop event handler.
   *
   * Обработчик события drop.
   */
  protected readonly onDrop = (): void => {
    this.enter.value = false
  }
}
