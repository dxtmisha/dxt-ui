// ai-none

import type { Ref } from 'vue'
import { getElementId, type DesignName } from '@dxtmisha/functional'
import { domElementsFromPoint, type ImageCoordinator } from '@dxtmisha/functional-basic'

import type { DraggableWrapperClassesList, DraggableWrapperControl } from './basicTypes'

/**
 * Class managing draggable component CSS classes, identifier, and DOM queries.
 *
 * Класс, управляющий классами CSS компонента перетаскивания, идентификатором и запросами к DOM.
 */
export class DraggableWrapperClassesData {
  /** Unique identifier of the component instance / Уникальный идентификатор экземпляра компонента */
  protected readonly id = `draggable-wrapper--${getElementId()}`

  /** Map of component classes / Карта классов компонента */
  protected readonly list: DraggableWrapperClassesList

  /**
   * Constructor.
   *
   * Конструктор.
   * @param element wrapper element reference / ссылка на элемент обертки
   * @param naming component naming helper / помощник именования компонента
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly naming: DesignName
  ) {
    this.list = DraggableWrapperClassesData.getClassesList(naming.getDesign())
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
   * Checks if an element is an active target drop area.
   *
   * Проверяет, является ли элемент активной целевой областью сброса.
   * @param item HTML element to check / проверяемый HTML-элемент
   * @returns check result / результат проверки
   */
  isDropActive(item: HTMLElement): boolean {
    return item.classList.contains(this.list.dropActive)
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
   * Checks if an element is in return state.
   *
   * Проверяет, находится ли элемент в состоянии возврата.
   * @param item HTML element to check / проверяемый HTML-элемент
   * @returns check result / результат проверки
   */
  isReturn(item: HTMLElement): boolean {
    return item.classList.contains(this.list.return)
  }

  /**
   * Checks if an element is selected.
   *
   * Проверяет, выбран ли элемент.
   * @param item HTML element to check / проверяемый HTML-элемент
   * @returns check result / результат проверки
   */
  isSelected(item: HTMLElement): boolean {
    return item.classList.contains(this.list.selected)
  }

  /**
   * Returns control classes data for draggable child items.
   *
   * Возвращает данные управляющих классов для перетаскиваемых дочерних элементов.
   * @param className optional custom class name for the item / необязательное пользовательское имя класса для элемента
   * @returns control classes object / объект управляющих классов
   */
  getControl(className?: string): DraggableWrapperControl {
    return {
      className: `${className || this.naming.getSubClass('item')} ${this.id}`,
      classClick: this.list.click,
      classDrop: this.list.drop,
      classPosition: this.list.position
    }
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
   * Returns the unique component identifier.
   *
   * Возвращает уникальный идентификатор компонента.
   * @returns unique identifier / уникальный идентификатор
   */
  getId(): string {
    return this.id
  }

  /**
   * Returns the list of component classes.
   *
   * Возвращает список классов компонента.
   * @returns classes list / список классов
   */
  getList(): DraggableWrapperClassesList {
    return this.list
  }

  /**
   * Returns the component class name.
   *
   * Возвращает имя класса компонента.
   * @returns component class name / имя класса компонента
   */
  getName(): string {
    return this.naming.getName()
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
   * Finds a draggable item located under the given coordinates.
   *
   * Находит перетаскиваемый элемент, расположенный по указанным координатам.
   * @param client coordinates object / объект координат
   * @returns found item or undefined / найденный элемент или undefined
   */
  findItemByPoints(
    client: ImageCoordinator
  ): HTMLElement | undefined {
    const pointsElement = domElementsFromPoint(client)

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
      document.body.classList.add(this.list.blockSelection)
    } else {
      document.body.classList.remove(this.list.blockSelection)
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
      blockSelection: `${className}__blockSelection`,
      squareShow: `${className}__square--show`,

      active: `${className}__item--active`,
      return: `${className}__item--return`,
      selected: `${className}__item--selected`,
      selection: `${className}__item--selection`,
      selectionMore: `${className}__item--selection-more`,

      click: `${className}__click`,
      drop: `${className}__drop`,
      dropActive: `${className}__drop--active`,
      position: `${className}__position`
    }
  }
}
