import { isDomRuntime } from '@dxtmisha/functional'

import type { Ref } from 'vue'
import type { FieldAllProps, FieldElementInput } from '../../types/fieldTypes'

/**
 * Class for working with input elements.
 *
 * Класс для работы с элементами ввода.
 */
export class FieldElementInclude {
  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   */
  constructor(
    protected readonly props: FieldAllProps,
    protected readonly element: Ref<FieldElementInput>
  ) {
  }

  /**
   * Returns the input element.
   *
   * Возвращает элемент ввода.
   * @returns input element or undefined / элемент ввода или undefined
   */
  get(): HTMLInputElement | undefined {
    const element = this.element.value

    if (element) {
      if ('input' in element) {
        return element.input
      }

      return element as HTMLInputElement
    }

    return undefined
  }

  /**
   * Returns a reference to the input element.
   *
   * Возвращает ссылку на элемент ввода.
   * @returns ref to the input element / ссылка на элемент ввода
   */
  getElement(): Ref<FieldElementInput> {
    return this.element
  }

  /**
   * Clear all values to the original ones.
   *
   * Очистить все значения до оригинальных.
   * @returns current instance / текущий экземпляр
   */
  clear(): this {
    const element = this.element.value

    if (
      element
      && 'clear' in element
    ) {
      element.clear?.()
    }

    return this
  }

  /**
   * Search for an element by its name inside a group or by selector.
   *
   * Поиск элемента по его названию внутри группы или по селектору.
   * @param nameSelectors element name or selector / название элемента или селектор
   * @param isGlobal whether to search globally in the document / искать ли глобально в документе
   * @returns input element or undefined / элемент ввода или undefined
   */
  findByName(
    nameSelectors: string | HTMLInputElement,
    isGlobal: boolean = true
  ): HTMLInputElement | undefined {
    if (
      !isDomRuntime()
      || !nameSelectors
    ) {
      return undefined
    }

    if (nameSelectors instanceof Element) {
      return nameSelectors
    }

    const item = this.findByForm(nameSelectors)

    if (item) {
      return item
    }

    if (isGlobal) {
      return this.querySelector(nameSelectors)
    }

    return undefined
  }

  /**
   * Searches for an input element by name within the parent form.
   *
   * Ищет элемент ввода по имени внутри родительской формы.
   * @param nameSelectors element name / имя элемента
   * @returns input element or undefined / элемент ввода или undefined
   */
  protected findByForm(nameSelectors: string): HTMLInputElement | undefined {
    const form = this.get()?.form

    if (form) {
      return this.querySelector(`[name="${nameSelectors}"]`, form)
    }

    return undefined
  }

  /**
   * Searches for an input element by CSS selector within the given parent node.
   *
   * Ищет элемент ввода по CSS-селектору внутри указанного родительского узла.
   * @param selectors CSS selector / CSS-селектор
   * @param element parent node to search within / родительский узел для поиска
   * @returns input element or undefined / элемент ввода или undefined
   */
  protected querySelector(
    selectors: string,
    element: ParentNode = document
  ): HTMLInputElement | undefined {
    try {
      return element.querySelector<HTMLInputElement>(selectors) ?? undefined
    } catch {
      return undefined
    }
  }
}
