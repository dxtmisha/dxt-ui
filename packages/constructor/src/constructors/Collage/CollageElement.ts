import type { Ref } from 'vue'

/**
 * Class managing DOM container elements and item queries for Collage.
 *
 * Класс, управляющий DOM-элементами контейнера и запросами элементов для Collage.
 */
export class CollageElement {
  /** Previous width of the container element for resize tracking / Предыдущая ширина элемента контейнера для отслеживания изменения размера */
  protected previousWidth: number = 0

  /**
   * Constructor for CollageElement.
   *
   * Конструктор для CollageElement.
   * @param element container element reference / ссылка на элемент контейнера
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>
  ) { }

  /**
   * Checks if the container element is available in the DOM.
   *
   * Проверяет, доступен ли элемент контейнера в DOM.
   * @returns true if element is available / true, если элемент доступен
   */
  is(): boolean {
    return Boolean(this.element.value)
  }

  /**
   * Checks if the container element width has changed and updates previous width. /
   * Проверяет, изменилась ли ширина элемента контейнера, и обновляет предыдущую ширину.
   * @returns true if width has changed / true, если ширина изменилась
   */
  isResize(): boolean {
    const width = this.element.value?.offsetWidth ?? 0

    if (width !== this.previousWidth) {
      this.previousWidth = width
      return true
    }

    return false
  }

  /**
   * Returns the container element reference.
   *
   * Возвращает ссылку на элемент контейнера.
   * @returns container element reference / ссылка на элемент контейнера
   */
  getElement(): Ref<HTMLElement | undefined> {
    return this.element
  }

  /**
   * Returns child items matching the data-value attribute.
   *
   * Возвращает дочерние элементы, соответствующие атрибуту data-value.
   * @returns array of item elements / массив элементов
   */
  getItems(): HTMLElement[] {
    if (!this.element.value) {
      return []
    }

    return Array.from(
      this.element.value.querySelectorAll<HTMLElement>('[data-collage-item]')
    )
  }
}
