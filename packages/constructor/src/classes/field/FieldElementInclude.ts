import { computed, type Ref } from 'vue'

import { FieldTypeInclude } from './FieldTypeInclude'
import { FieldPatternInclude } from './FieldPatternInclude'

import type { FieldAllProps, FieldElementInput } from '../../types/fieldTypes'

/**
 * Class for working with input elements.
 *
 * Класс для работы с элементами ввода.
 */
export class FieldElementInclude {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param type object for working with input type/ объект для работы с типом ввода
   * @param pattern object for working with checks by regular expressions/
   * объект для работы с проверкой по регулярным выражениям
   */

  constructor(
    protected readonly props: FieldAllProps,
    protected readonly element: Ref<FieldElementInput>,
    protected readonly type?: FieldTypeInclude,
    protected readonly pattern?: FieldPatternInclude
  ) {
  }

  /** Returns data for verification/ Возвращает данные для проверки */
  readonly data = computed<Record<string, any>>(() => {
    const data: Record<string, any> = {}
    const indexList: (keyof typeof this.props)[] = [
      'type',
      'name',
      'required',

      'step',
      'min',
      'max',

      'minlength',
      'maxlength',

      'pattern'
    ]

    indexList.forEach((index) => {
      if (index in this.props) {
        switch (index) {
          case 'type':
            data[index] = this.type?.item.value ?? this.props.type
            break
          case 'pattern':
            if (this.pattern) {
              data.pattern = this.pattern.item.value
            }
            break
          default:
            if (this.props[index] !== undefined) {
              data[index] = this.props[index]
            }
        }
      }
    })

    return {
      ...data,
      ...this.props.inputAttrs
    }
  })

  /**
   * Returns data for verification taking into account number type/
   * Возвращает данные для проверки с учётом числового типа
   */
  readonly dataForCheck = computed<Record<string, any>>(() => {
    const data = this.data.value

    if (
      this.props.min
      || this.props.max
      || this.props.step
    ) {
      return {
        ...data,
        type: 'number'
      }
    }

    return data
  })

  /**
   * Returns the input element.
   *
   * Возвращает элемент ввода.
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
   */
  getElement(): Ref<FieldElementInput> {
    return this.element
  }

  /**
   * Search for an element by its name inside a group or by selector.
   *
   * Поиск элемента по его названию внутри группы или по селектору.
   * @param nameSelectors element name or selector /<br>название элемента или селектор
   */
  findByName(nameSelectors: string | HTMLInputElement): HTMLInputElement | undefined {
    if (nameSelectors instanceof Element) {
      return nameSelectors
    }

    const form = this.get()?.form

    if (form) {
      const item = form.querySelector<HTMLInputElement>(`[name="${nameSelectors}"]`)

      if (item) {
        return item
      }
    }

    const globalItem = document.querySelector<HTMLInputElement>(nameSelectors)

    if (globalItem) {
      return globalItem
    }

    return undefined
  }

  /**
   * Clear all values to the original ones.
   *
   * Очисти все значения до оригинальных.
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
}
