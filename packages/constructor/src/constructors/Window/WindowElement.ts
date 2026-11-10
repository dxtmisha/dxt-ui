// ai-none

import type { Ref } from 'vue'

import { WindowClassesData } from './WindowClassesData'

/**
 * A class for working with elements.
 *
 * Класс для работы с элементами.
 */
export class WindowElement {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param element the element of the window itself / элемент самого окна
   * @param classes function returning an object for working with classes and searching for elements / функция, возвращающая объект для работы с классами и поиском элементов
   */
  constructor(
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly classes: () => WindowClassesData
  ) {
  }

  /**
   * Returns the reactive reference to the main element.
   *
   * Возвращает реактивную ссылку на главный элемент.
   * @returns reactive reference to the main element / реактивная ссылка на главный элемент
   */
  getElement(): Ref<HTMLDivElement | undefined> {
    return this.element
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
   * Возвращает главный элемент.
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
    return this.classes().findControl()
  }

  /**
   * Returns the dimensions of the control element.
   *
   * Возвращает размеры элемента управления.
   */
  getControlRect(): DOMRect | undefined {
    return this.getControl()?.getBoundingClientRect()
  }

  /**
   * Returns the body element of the window.
   *
   * Возвращает элемент тела окна.
   */
  getBody(): HTMLDivElement | undefined {
    return this.classes().findBody()
  }

  /**
   * Returns the dimensions of the window's body element.
   *
   * Возвращает размеры элемента тела окна.
   */
  getBodyRect(): DOMRect | undefined {
    return this.getBody()?.getBoundingClientRect()
  }

  /**
   * Returns the window context element.
   *
   * Возвращает элемент контекста окна.
   */
  getBodyContext(): HTMLDivElement | undefined {
    return this.classes().findBodyContext()
  }
}
