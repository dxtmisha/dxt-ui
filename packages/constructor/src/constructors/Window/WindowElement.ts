import type { Ref } from 'vue'

import { WindowClasses } from './WindowClasses'

/**
 * A class for working with elements.
 *
 * Класс для работы с элементами.
 */
export class WindowElement {
  /**
   * Constructor
   * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
   * @param element the element of the window itself/ элемент самого окна
   */
  constructor(
    protected readonly classes: WindowClasses,
    public readonly element: Ref<HTMLDivElement | undefined>
  ) {
  }

  /**
   * Checks if the main element exists.
   *
   * Проверяет, есть ли главный элемент.
   */
  isMain(): boolean {
    return Boolean(this.element.value)
  }

  /**
   * Returns the main element.
   *
   * Возвращает главного элемента.
   */
  getMain(): HTMLDivElement | undefined {
    return this.element.value
  }

  /**
   * Returns the control element of the current component.
   *
   * Возвращает элемент управления текущего компонента.
   */
  getControl(): HTMLElement | undefined {
    return this.classes.findControl()
  }

  /**
   * Returns the dimensions of the control element.
   *
   * Возвращает размеры элемента управления.
   */
  getControlRect(): DOMRect | undefined {
    return this.getControl()?.getBoundingClientRect() || undefined
  }

  /**
   * Returns the body element of the window.
   *
   * Возвращает элемент тела окна.
   */
  getBody(): HTMLDivElement | undefined {
    return this.classes.findBody()
  }

  /**
   * Returns the dimensions of the window's body element.
   *
   * Возвращает размеры элемента тела окна.
   */
  getBodyRect(): DOMRect | undefined {
    return this.getBody()?.getBoundingClientRect() || undefined
  }

  /**
   * Returns the window context element.
   *
   * Возвращает элемент контекста окна.
   */
  getBodyContext(): HTMLDivElement | undefined {
    return this.classes.findBodyContext()
  }
}
