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
   * Checks if the main element exists.
   *
   * Проверяет, есть ли главный элемент.
   * @returns true if main element exists / true, если главный элемент существует
   */
  isMain(): boolean {
    return Boolean(this.element.value)
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
   * Returns the main element.
   *
   * Возвращает главный элемент.
   * @returns main element or undefined / главный элемент или undefined
   */
  getMain(): HTMLDivElement | undefined {
    return this.element.value
  }

  /**
   * Returns the control element of the current component.
   *
   * Возвращает элемент управления текущего компонента.
   * @returns control element or undefined / элемент управления или undefined
   */
  getControl(): HTMLElement | undefined {
    return this.classes().findControl()
  }

  /**
   * Returns the dimensions of the control element.
   *
   * Возвращает размеры элемента управления.
   * @returns bounding rect of control element or undefined / прямоугольник размеров элемента управления или undefined
   */
  getControlRect(): DOMRect | undefined {
    return this.getControl()?.getBoundingClientRect()
  }

  /**
   * Returns the body element of the window.
   *
   * Возвращает элемент тела окна.
   * @returns body element or undefined / элемент тела или undefined
   */
  getBody(): HTMLDivElement | undefined {
    return this.classes().findBody()
  }

  /**
   * Returns the dimensions of the window's body element.
   *
   * Возвращает размеры элемента тела окна.
   * @returns bounding rect of body element or undefined / прямоугольник размеров тела окна или undefined
   */
  getBodyRect(): DOMRect | undefined {
    return this.getBody()?.getBoundingClientRect()
  }

  /**
   * Returns the window context element.
   *
   * Возвращает элемент контекста окна.
   * @returns body context element or undefined / элемент контекста окна или undefined
   */
  getBodyContext(): HTMLDivElement | undefined {
    return this.classes().findBodyContext()
  }
}
