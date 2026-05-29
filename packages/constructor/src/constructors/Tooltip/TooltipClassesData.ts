import { getElementId, isDomRuntime } from '@dxtmisha/functional'

/**
 * Class for working with class names.
 *
 * Класс для работы с названиями классов.
 */
export class TooltipClassesData {
  /** Identification of the current window / Идентификация текущего окна */
  protected readonly id = `tooltip--${getElementId()}`
  /** Identification of the current item / Идентификация текущего элемента */
  protected readonly idItem = `tooltip--${getElementId()}-item`

  /**
   * Constructor
   * @param className class name / название класса
   */
  constructor(
    protected readonly className: string
  ) {
  }

  /**
   * Returns the identifier of the current window.
   *
   * Возвращает идентификатор текущего окна.
   * @returns identifier of the window / идентификатор окна
   */
  getId(): string {
    return this.id
  }

  /**
   * Returns the identifier of the current item.
   *
   * Возвращает идентификатор текущего элемента.
   * @returns identifier of the item / идентификатор элемента
   */
  getIdItem(): string {
    return this.idItem
  }

  /**
   * Returns a class for control.
   *
   * Возвращает класс для контроля.
   * @returns control class / класс контроля
   */
  getClassControl(): string {
    return `${this.className}__control`
  }

  /**
   * Returns a class for control.
   *
   * Возвращает класс для контроля.
   * @returns full control class / полный класс контроля
   */
  getControl(): string {
    return `${this.getClassControl()} ${this.getId()}`
  }

  /**
   * Returns the class selector for control.
   *
   * Возвращает селектор класса для управления.
   * @returns selector of the control / селектор управления
   */
  getSelectorControl(): string {
    return `.${this.getClassControl()}.${this.id}`
  }

  /**
   * Finds the control element.
   *
   * Находит элемент управления.
   * @returns html element or undefined / html-элемент или undefined
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
   * @param target selected element / выбранный элемент
   * @returns html element or undefined / html-элемент или undefined
   */
  findControlByTarget(target: HTMLElement): HTMLElement | undefined {
    return target.closest<HTMLElement>(this.getSelectorControl()) ?? undefined
  }
}
