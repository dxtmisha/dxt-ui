import type { Ref } from 'vue'
import { getElementId } from '@dxtmisha/functional'

import type { SelectableAreaClassesList } from './basicTypes'

/**
 * Class managing selectable component CSS classes, identifier, and DOM queries.
 *
 * Класс, управляющий классами CSS компонента выделения, идентификатором и запросами к DOM.
 */
export class SelectableAreaClassesData {
  /** Map of component classes / Карта классов компонента */
  readonly list: SelectableAreaClassesList

  /** Unique identifier of the component instance / Уникальный идентификатор экземпляра компонента */
  protected readonly id = `selectable-area--${getElementId()}`

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
    this.list = SelectableAreaClassesData.getClassesList(classDesign)
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
   * Finds the closest selectable trigger element.
   *
   * Находит ближайший элемент-триггер выделения.
   * @param target search start target element / целевой элемент начала поиска
   * @returns trigger element or undefined / элемент-триггер или undefined
   */
  findClick(target: HTMLElement): HTMLElement | undefined {
    return target.closest<HTMLElement>(`.${this.id}.${this.list.click}, .${this.id} .${this.list.click}`) || undefined
  }

  /**
   * Finds a selectable item wrapper based on the child target.
   *
   * Находит обертку выбираемого элемента на основе дочерней цели.
   * @param target search start target element / целевой элемент начала поиска
   * @returns item element or undefined / элемент или undefined
   */
  findItem(target: HTMLElement): HTMLElement | undefined {
    return target.closest<HTMLElement>(`.${this.id}`) || undefined
  }

  /**
   * Finds an item by its dataset value.
   *
   * Находит элемент по значению в dataset.
   * @param value data value / значение данных
   * @returns item element or undefined / элемент или undefined
   */
  findByValue(value: string | number): HTMLElement | undefined {
    return this.element.value?.querySelector<HTMLElement>(`.${this.id}[data-value="${value}"]`) || undefined
  }

  /**
   * Finds all selectable children elements inside the wrapper.
   *
   * Находит все выделяемые дочерние элементы внутри обертки.
   * @returns list of items / список элементов
   */
  findItems(): HTMLElement[] {
    const nodes = this.element.value?.querySelectorAll<HTMLElement>(`.${this.id}`)
    return nodes ? Array.from(nodes) : []
  }

  /**
   * Finds all selected elements.
   *
   * Находит все выбранные элементы.
   * @returns list of items / список элементов
   */
  findSelection(): HTMLElement[] {
    const nodes = this.element.value?.querySelectorAll<HTMLElement>(`.${this.id}.${this.list.selected}`)
    return nodes ? Array.from(nodes) : []
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
  static getClassesList(classDesign: string): SelectableAreaClassesList {
    const className = `${classDesign}-selectableArea`

    return {
      body: `${className}__blockSelection`,
      show: `${className}__square--show`,
      selected: `${className}__item--selected`,
      click: `${className}__click`
    }
  }
}
