import type { Ref } from 'vue'

import type { CollageElementRow } from './basicTypes'

/**
 * Class managing DOM container elements, item queries, and row layout lines for Collage.
 *
 * Класс, управляющий DOM-элементами контейнера, запросами элементов и строками макета для Collage.
 */
export class CollageElement {
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
      this.element.value.querySelectorAll<HTMLElement>('>[data-value]')
    )
  }

  /**
   * Groups child items into visual horizontal lines (rows) by their vertical center position.
   *
   * Группирует дочерние элементы в визуальные горизонтальные линии (строки) по их вертикальному центру.
   * @returns array of rows containing elements / массив строк, содержащих элементы
   */
  getLines(): HTMLElement[][] {
    if (!this.is()) {
      return []
    }

    const rows: CollageElementRow[] = []

    this
      .getItems()
      .forEach((itemElement) => {
        const rowCenter = this.getItemCenter(itemElement)
        const matchedRow = rows.find(row => Math.abs(row.center - rowCenter) <= 8)

        if (matchedRow) {
          matchedRow.items.push(itemElement)
        } else {
          rows.push({ center: rowCenter, items: [itemElement] })
        }
      })

    return rows
      .sort((firstRow, secondRow) => firstRow.center - secondRow.center)
      .map(row => row.items)
  }

  /**
   * Returns the vertical center coordinate of the given item element.
   *
   * Возвращает вертикальную координату центра указанного элемента.
   * @param itemElement target item element / целевой элемент
   * @returns vertical center coordinate / вертикальная координата центра
   */
  protected getItemCenter(itemElement: HTMLElement): number {
    const boundingClientRect = itemElement.getBoundingClientRect()
    return Math.ceil(boundingClientRect.top + boundingClientRect.height / 2)
  }
}
