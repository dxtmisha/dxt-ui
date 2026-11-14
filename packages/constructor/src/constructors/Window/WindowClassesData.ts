// ai-none

import { domQuerySelector, type DesignName, getElementId } from '@dxtmisha/functional'
import { type WindowClassesList, WindowStatusControlItem, WindowStatusItem } from './basicTypes'

/**
 * Class for working with class names.
 *
 * Класс для работы с названиями классов.
 */
export class WindowClassesData {
  /** Class list for window styling and selectors / Список классов для стилизации и селекторов окна */
  readonly list: WindowClassesList

  /**
   * Identification of the current window. Used to search for the current component and its control.
   *
   * Идентификация текущего окна. Используется для поиска текущего компонента и его контроля.
   */
  protected readonly id = `window--${getElementId()}`
  protected readonly controlId = `${this.id}-control`

  /**
   * Constructor
   * @param naming component naming helper / помощник именования компонента
   */
  constructor(
    protected readonly naming: DesignName
  ) {
    this.list = WindowClassesData.getClassesList(naming.getName(), this.id)
  }

  /**
   * Returns the list of available classes.
   *
   * Возвращает список доступных классов.
   * @param className class name/ название класса
   * @param id identification of the current window/ идентификация текущего окна
   * @returns classes list / список классов
   */
  static getClassesList(className: string, id: string = 'id'): WindowClassesList {
    return {
      block: `${className}--${WindowStatusControlItem.block}`,
      blockChildren: `${className}--${WindowStatusControlItem.blockChildren}`,
      blockOther: `${className}--${WindowStatusControlItem.blockOther}`,
      close: `${className}--${WindowStatusControlItem.close}`,
      static: `${className}--${WindowStatusControlItem.static}`,

      control: `${className}__control`,
      controlId: `${className}__control window__control ${id}`,
      controlStatic: `${className}--${WindowStatusControlItem.controlStatic}`,
      controlOpenOnly: `${className}--${WindowStatusControlItem.controlOpenOnly}`,
      controlActive: `${className}--${WindowStatusControlItem.controlActive}`,

      persistent: `${className}--${WindowStatusControlItem.persistent}`
    }
  }

  /**
   * Returns a list of available classes by design name.
   *
   * Возвращает список доступных классов по названию дизайна.
   * @param design design name / название дизайна
   * @returns classes list for design / список классов для дизайна
   */
  static getClassesListByDesign(design: string): WindowClassesList {
    return this.getClassesList(`${design}-window`)
  }

  /**
   * Checks if the selected element is a window.
   *
   * Проверяет, является ли выбранный элемент окном.
   * @param target selected item/ выбранный элемент
   * @returns true if element is a window / true, если элемент является окном
   */
  isWindow(target?: HTMLElement): boolean {
    return Boolean(
      target
      && target.classList.contains(this.naming.getName())
    )
  }

  /**
   * Checks if the selected element is a window teleport.
   *
   * Проверяет, является ли выбранный элемент телепортом окна.
   * @param target selected item/ выбранный элемент
   * @returns true if element is a window teleport / true, если элемент является телепортом окна
   */
  isWindowTeleport(target?: HTMLElement): boolean {
    return Boolean(
      target
      && target.classList.contains(this.naming.getSubClass('teleport'))
    )
  }

  /**
   * Checks if the selected element is a window or a window teleport.
   *
   * Проверяет, является ли выбранный элемент окном или телепортом окна.
   * @param target selected item/ выбранный элемент
   * @returns true if element is a window or teleport / true, если элемент является окном или телепортом
   */
  isWindowOrTeleport(target?: HTMLElement): boolean {
    return this.isWindow(target) || this.isWindowTeleport(target)
  }

  /**
   * Returns the identifier of the current window.
   *
   * Возвращает идентификатор текущего окна.
   * @returns window identifier / идентификатор окна
   */
  getId(): string {
    return this.id
  }

  /**
   * Returns the identifier of the control of the current window.
   *
   * Возвращает идентификатор контроля текущего окна.
   * @returns control identifier / идентификатор элемента управления
   */
  getControlId(): string {
    return this.controlId
  }

  /**
   * Returns the full name of the class for the status.
   *
   * Возвращает полное название класса для статуса.
   * @param status status name / название статуса
   * @returns CSS selector for status / CSS-селектор для статуса
   */
  getClassStatus(status: WindowStatusItem): string {
    return `${this.naming.getName()}[data-status="${status}"]`
  }

  /**
   * Returns the class selector for control.
   *
   * Возвращает селектор класса для управления.
   * @returns CSS selector for control / CSS-селектор для элемента управления
   */
  getSelectorControl(): string {
    return `.${this.list.control}.${this.id}`
  }

  /**
   * Search and return the window element at the selected item.
   *
   * Поиск и возврат элемента окна у выбранного элемента.
   * @param target selected item / выбранный элемент
   * @returns found window element or undefined / найденный элемент окна или undefined
   */
  findMain<T extends HTMLElement = HTMLElement>(target?: HTMLElement): T | undefined {
    return target?.closest<T>(`.${this.naming.getName()}`) ?? undefined
  }

  /**
   * Search and return of the control element of the current component.
   *
   * Поиск и возврат элемента управления текущего компонента.
   * @returns control element or undefined / элемент управления или undefined
   */
  findControl(): HTMLElement | undefined {
    return domQuerySelector<HTMLElement>(`.${this.list.control}.${this.id}`)
  }

  /**
   * Find the control at the selected window.
   *
   * Найди элемент управления у выбранного окна.
   * @param element window element/ элемент окна
   * @returns control element or undefined / элемент управления или undefined
   */
  findControlByElement(element?: HTMLElement): HTMLElement | undefined {
    if (element) {
      return domQuerySelector<HTMLElement>(`.${this.list.control}.${element.dataset?.window}`)
    }

    return undefined
  }

  /**
   * Search and return of the window body element for the current component.
   *
   * Поиск и возврат элемента тела окна для текущего компонента.
   * @returns body element or undefined / элемент тела или undefined
   */
  findBody(): HTMLDivElement | undefined {
    return domQuerySelector<HTMLDivElement>(`.${this.naming.getName()}.${this.id} .${this.naming.getSubClass('body')}`)
  }

  /**
   * Search and return of the context body element of the window for the current component.
   *
   * Поиск и возврат элемента контекста тела окна для текущего компонента.
   * @returns body context element or undefined / элемент контекста тела или undefined
   */
  findBodyContext(): HTMLDivElement | undefined {
    return domQuerySelector<HTMLDivElement>(`.${this.naming.getName()}.${this.id} .${this.naming.getSubClass('body', 'context')}`)
  }

  /**
   * Search and return of the window body element for other components (not current)
   * with additional selectors.
   *
   * Поиск и возврат элемента тела окна для других компонентов (не текущего)
   * с дополнительными селекторами.
   * @param selectors additional CSS selectors/ дополнительные CSS селекторы
   * @param status status of the window/ статус окна
   * @returns matching element inside another window or undefined / найденный элемент внутри другого окна или undefined
   */
  findBodyOther(selectors: string, status: WindowStatusItem = WindowStatusItem.open): HTMLDivElement | undefined {
    if (status === WindowStatusItem.open) {
      const element = domQuerySelector<HTMLDivElement>(
        `.${this.naming.getName()}:not(.${this.id})[data-status="${WindowStatusItem.flash}"] .${this.naming.getSubClass('body')} ${selectors}`
      )

      if (element) {
        return element
      }
    }

    return domQuerySelector<HTMLDivElement>(
      `.${this.naming.getName()}:not(.${this.id})[data-status="${status}"] .${this.naming.getSubClass('body')} ${selectors}`
    )
  }
}
