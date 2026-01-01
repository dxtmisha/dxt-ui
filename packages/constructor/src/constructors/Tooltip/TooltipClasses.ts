import { getElementId, isDomRuntime } from '@dxtmisha/functional'

/**
 * Class for working with class names.
 *
 * Класс для работы с названиями классов.
 */
export class TooltipClasses {
  /**
   * Identification of the current window. Used to search for the current component and its control/
   * Идентификация текущего окна. Используется для поиска текущего компонента и его контроля
   */
  protected readonly id = `tooltip--${getElementId()}`

  /**
   * Constructor
   * @param className class name/ название класса
   */
  constructor(
    protected readonly className: string
  ) {
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
   * Returns a class for control.
   *
   * Возвращает класс для контроля.
   */
  getClassControl(): string {
    return `${this.className}__control`
  }

  /**
   * Returns a class for control.
   *
   * Возвращает класс для контроля.
   */
  getControl(): string {
    return `${this.getClassControl()} ${this.getId()}`
  }

  /**
   * Returns the class selector for control.
   *
   * Возвращает селектор класса для управления.
   */
  getSelectorControl(): string {
    return `.${this.getClassControl()}.${this.id}`
  }

  /**
   * Finds the control element.
   *
   * Находит элемент управления.
   */
  findControl(): HTMLElement | undefined {
    if (isDomRuntime()) {
      return document.querySelector<HTMLElement>(this.getSelectorControl()) ?? undefined
    }
  }

  /**
   * Finds the control element among its descendants.
   *
   * Находит элемент управления среди его потомков.
   * @param target selected element/ выбранный элемент
   */
  findControlByTarget(target: HTMLElement): HTMLElement | undefined {
    return target.closest<HTMLElement>(this.getSelectorControl()) ?? undefined
  }
}
