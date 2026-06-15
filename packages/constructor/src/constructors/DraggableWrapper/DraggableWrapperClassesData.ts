import type { Ref } from 'vue'
import { getElementId } from '@dxtmisha/functional'

import type { DraggableWrapperClassesList } from './basicTypes'
import type { ImageCoordinator } from '@dxtmisha/functional-basic'

/**
 * Class managing draggable component CSS classes, identifier, and DOM queries.
 *
 * Класс, управляющий классами CSS компонента перетаскивания, идентификатором и запросами к DOM.
 */
export class DraggableWrapperClassesData {
  /** Map of component classes / Карта классов компонента */
  readonly list: DraggableWrapperClassesList

  /** Unique identifier of the component instance / Уникальный идентификатор экземпляра компонента */
  protected readonly id = `draggable-wrapper--${getElementId()}`

  /**
   * Constructor.
   *
   * Конструктор.
   * @param element wrapper element reference / ссылка на элемент обертки
   * @param classDesign design class prefix / префикс класса дизайна
   * @param className main component class name / имя класса основного компонента
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string
  ) {
    this.list = DraggableWrapperClassesData.getClassesList(classDesign)
  }

  /**
   * Checks if an element defines a sorting position.
   *
   * Проверяет, определяет ли элемент позицию сортировки.
   * @param item HTML element to check / проверяемый HTML-элемент
   * @returns check result / результат проверки
   */
  isPosition(item: HTMLElement): boolean {
    return item.classList.contains(this.list.position)
  }

  /**
   * Checks if an element is a target drop area.
   *
   * Проверяет, является ли элемент целевой областью сброса.
   * @param item HTML element to check / проверяемый HTML-элемент
   * @returns check result / результат проверки
   */
  isDrop(item: HTMLElement): boolean {
    return item.classList.contains(this.list.drop)
  }

  /**
   * Returns the unique component identifier.
   *
   * Возвращает уникальный идентификатор компонента.
   * @returns unique identifier / уникальный идентификатор
   */
  getId(): string {
    return this.id
  }

  /**
   * Returns the component class name.
   *
   * Возвращает имя класса компонента.
   * @returns component class name / имя класса компонента
   */
  getName(): string {
    return this.className
  }

  /**
   * Returns the wrapper DOM element.
   *
   * Возвращает DOM-элемент обертки.
   * @returns wrapper DOM element or undefined / DOM-элемент обертки или undefined
   */
  getElement(): HTMLElement | undefined {
    return this.element.value
  }

  /**
   * Returns the bounding rectangle of the wrapper element.
   *
   * Возвращает ограничивающий прямоугольник элемента обертки.
   * @returns bounding rectangle or undefined / ограничивающий прямоугольник или undefined
   */
  getRect(): DOMRect | undefined {
    return this.element.value?.getBoundingClientRect()
  }

  /**
   * Finds the closest draggable trigger element.
   *
   * Находит ближайший элемент-триггер перетаскивания.
   * @param target search start target element / целевой элемент начала поиска
   * @returns trigger element or undefined / элемент-триггер или undefined
   */
  findClick(target: HTMLElement): HTMLElement | undefined {
    return target.closest<HTMLElement>(`.${this.id}.${this.list.click}, .${this.id} .${this.list.click}`) || undefined
  }

  /**
   * Returns list of elements at the specified coordinates.
   *
   * Возвращает список элементов по указанным координатам.
   * @param client coordinates object / объект координат
   * @returns array of elements / массив элементов
   */
  findElementsFromPoint(client: ImageCoordinator): Element[] {
    return document.elementsFromPoint(client.x, client.y)
  }

  /**
   * Finds a draggable item located under the given coordinates.
   *
   * Находит перетаскиваемый элемент, расположенный по указанным координатам.
   * @param client coordinates object / объект координат
   * @returns found item or undefined / найденный элемент или undefined
   */
  findItemByPoints(
    client: ImageCoordinator
  ): HTMLElement | undefined {
    const pointsElement = this.findElementsFromPoint(client)

    for (const element of pointsElement) {
      if (
        element instanceof HTMLElement
        && element.classList.contains(this.id)
        && !element.classList.contains(this.list.active)
      ) {
        return element
      }
    }

    return undefined
  }

  /**
   * Finds all draggable children elements inside the wrapper.
   *
   * Находит все перетаскиваемые дочерние элементы внутри обертки.
   * @returns list of items / список элементов
   */
  findItems(): NodeListOf<HTMLElement> | undefined {
    return this.element.value?.querySelectorAll<HTMLElement>(`.${this.id}`)
  }

  /**
   * Finds all active and selected elements.
   *
   * Находит все активные и выбранные элементы.
   * @returns list of items / список элементов
   */
  findSelection(): NodeListOf<HTMLElement> | undefined {
    return this.element.value?.querySelectorAll<HTMLElement>(
      `.${this.id}.${this.list.active}, .${this.id}.${this.list.selected}`
    )
  }

  /**
   * Toggle block selection CSS class on document body.
   *
   * Переключает класс CSS блокировки выделения текста на body документа.
   * @param status activation status / статус активации
   */
  setBlockSelection(status = false): void {
    if (status) {
      document.body.classList.add(this.list.body)
    } else {
      document.body.classList.remove(this.list.body)
    }
  }

  /**
   * Calculates component classes list by design prefix.
   *
   * Вычисляет список классов компонента по префиксу дизайна.
   * @param classDesign design class prefix / префикс класса дизайна
   * @returns classes list / список классов
   */
  static getClassesList(classDesign: string): DraggableWrapperClassesList {
    const className = `${classDesign}-draggableWrapper`

    return {
      body: `${className}__blockSelection`,

      active: `${className}__item--active`,
      selection: `${className}__item--selection`,
      selectionMore: `${className}__item--selection-more`,
      go: `${className}__item--go`,

      return: `${className}__item--return`,

      click: `${className}__click`,
      drop: `${className}__drop`,
      position: `${className}__position`,
      show: `${className}__square--show`,
      dragged: `${className}__item--dragged`,
      selected: `${className}__item--selected`
    }
  }
}
