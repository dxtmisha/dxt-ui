import { getElementId } from '@dxt-ui/functional'
import { type WindowClassesList, WindowStatusControlItem, WindowStatusItem } from './basicTypes'

/**
 * Class for working with class names.
 *
 * Класс для работы с названиями классов.
 */
export class WindowClasses {
  /**
   * Identification of the current window. Used to search for the current component and its control.
   *
   * Идентификация текущего окна. Используется для поиска текущего компонента и его контроля.
   */
  protected readonly id = `window--${getElementId()}`

  readonly list: WindowClassesList

  /**
   * Constructor
   * @param className class name/ название класса
   */
  constructor(
    protected readonly className: string
  ) {
    this.list = WindowClasses.getClassesList(className, this.id)
  }

  /**
   * Checks if the selected element is a window.
   *
   * Проверяет, является ли выбранный элемент окном.
   * @param target selected item/ выбранный элемент
   */
  isWindow(target?: HTMLElement): boolean {
    return Boolean(
      target
      && target.classList.contains(this.className)
    )
  }

  /**
   * Returns the identifier of the current window.
   *
   * Возвращает идентификатор текущего окна.
   */
  getId(): string {
    return this.id
  }

  /**
   * Returns the full name of the class for the status.
   *
   * Возвращает полное название класса для статуса.
   * @param status названия статуса
   */
  getClassStatus(status: WindowStatusItem): string {
    return `${this.className}[data-status="${status}"]`
  }

  /**
   * Returns the class selector for control.
   *
   * Возвращает селектор класса для управления.
   */
  getSelectorControl(): string {
    return `.${this.list.control}.${this.id}`
  }

  /**
   * Search and return the window element at the selected item.
   *
   * Поиск и возврат элемента окна у выбранного элемента.
   * @param target selected item/ выбранный элемент
   */
  findMain<T extends HTMLElement>(target: HTMLElement): T | undefined {
    return target?.closest<T>(`.${this.className}`) ?? undefined
  }

  /**
   * Search and return of the control element of the current component.
   *
   * Поиск и возврат элемента управления текущего компонента.
   */
  findControl(): HTMLElement | undefined {
    return document.querySelector<HTMLElement>(`.${this.list.control}.${this.id}`) ?? undefined
  }

  /**
   * Find the control at the selected window.
   *
   * Найди элемент управления у выбранного окна.
   * @param element window element/ элемент окна
   */
  findControlByElement(element?: HTMLElement): HTMLElement | undefined {
    if (element) {
      return document.querySelector<HTMLElement>(`.${this.list.control}.${element.dataset?.window}`) ?? undefined
    }

    return undefined
  }

  /**
   * Search and return of the window body element for the current component.
   *
   * Поиск и возврат элемента тела окна для текущего компонента.
   */
  findBody(): HTMLDivElement | undefined {
    return document.querySelector<HTMLDivElement>(`.${this.className}.${this.id} .${this.className}__body`) ?? undefined
  }

  /**
   * Search and return of the context body element of the window for the current component.
   *
   * Поиск и возврат элемента контекста тела окна для текущего компонента.
   */
  findBodyContext(): HTMLDivElement | undefined {
    return document.querySelector<HTMLDivElement>(`.${this.className}.${this.id} .${this.className}__body__context`) ?? undefined
  }

  /**
   * Search and return of the window body element for other components (not current)
   * with additional selectors.
   *
   * Поиск и возврат элемента тела окна для других компонентов (не текущего)
   * с дополнительными селекторами.
   * @param selectors additional CSS selectors/ дополнительные CSS селекторы
   * @param status status of the window/ статус окна
   */
  findBodyOther(selectors: string, status: WindowStatusItem = WindowStatusItem.open): HTMLDivElement | undefined {
    if (status === WindowStatusItem.open) {
      const element = document.querySelector<HTMLDivElement>(
        `.${this.className}:not(.${this.id})[data-status="${WindowStatusItem.flash}"] .${this.className}__body ${selectors}`
      )

      if (element) {
        return element
      }
    }

    return document.querySelector<HTMLDivElement>(
      `.${this.className}:not(.${this.id})[data-status="${status}"] .${this.className}__body ${selectors}`
    ) ?? undefined
  }

  /**
   * Returns the list of available classes.
   *
   * Возвращает список доступных классов.
   * @param className class name/ название класса
   * @param id identification of the current window/ идентификация текущего окна
   */
  static getClassesList(className: string, id: string = 'id'): WindowClassesList {
    return {
      block: `${className}--${WindowStatusControlItem.block}`,
      blockChildren: `${className}--${WindowStatusControlItem.blockChildren}`,
      blockOther: `${className}--${WindowStatusControlItem.blockOther}`,
      close: `${className}--${WindowStatusControlItem.close}`,
      static: `${className}--${WindowStatusControlItem.static}`,

      control: `${className}__control`,
      controlId: `${className}__control ${id}`,
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
   * @param design design name/ названия дизайна
   */
  static getClassesListByDesign(design: string) {
    return this.getClassesList(`${design}-window`)
  }
}
