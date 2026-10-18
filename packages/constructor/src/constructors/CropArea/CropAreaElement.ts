// ai-none

import type { Ref } from 'vue'
import type { DesignName } from '@dxtmisha/functional'

/**
 * Class managing CropArea DOM element, rect bounds, and document selection locking.
 *
 * Класс, управляющий DOM-элементом CropArea, границами rect и блокировкой выделения документа.
 */
export class CropAreaElement {
  /** Class for blocking text selection on document body / Класс для блокировки выделения текста на body */
  protected readonly classBlockSelection: string

  /**
   * Constructor.
   *
   * Конструктор.
   * @param element wrapper element reference / ссылка на элемент обертки
   * @param naming component naming helper / помощник именования компонента
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>,
    naming: DesignName
  ) {
    this.classBlockSelection = naming.getSubClass('blockSelection')
  }

  /**
   * Returns the bounding rectangle of the wrapper element.
   *
   * Возвращает ограничивающий прямоугольник элемента обертки.
   * @returns bounding rectangle or undefined / ограничивающий прямоугольник или undefined
   */
  get rect(): DOMRect | undefined {
    return this.element.value?.getBoundingClientRect()
  }

  /**
   * Toggle block selection CSS class on document body.
   *
   * Переключает класс CSS блокировки выделения текста на body документа.
   * @param status activation status / статус активации
   */
  setBlockSelection(status = false): void {
    if (status) {
      document.body.classList.add(this.classBlockSelection)
    } else {
      document.body.classList.remove(this.classBlockSelection)
    }
  }
}
