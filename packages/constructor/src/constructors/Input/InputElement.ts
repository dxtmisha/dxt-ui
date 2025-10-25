import { computed } from 'vue'
import type { RefType } from '@dxtmisha/functional'

import { InputType } from './InputType'
import { InputPattern } from './InputPattern'

import type { FieldElementInput, FieldInputProps } from '../../types/fieldTypes'

/**
 * Class for working with input elements.<br>
 * Класс для работы с элементами ввода.
 */
export class InputElement {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param type object for working with input type /<br>объект для работы с типом ввода
   * @param pattern object for working with checks by regular expressions /<br>
   * объект для работы с проверкой по регулярным выражениям
   */

  constructor(
    protected readonly props: FieldInputProps,
    protected readonly element: RefType<FieldElementInput>,
    protected readonly type?: InputType,
    protected readonly pattern?: InputPattern
  ) {
  }

  /**
   * Returns data for verification.
   *
   * Возвращает данные для проверки.
   */
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
            data[index] = this.props[index]
        }
      }
    })

    return {
      ...data,
      ...this.props.inputAttrs
    }
  })

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
   * Returns the input element.<br>
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

  getElement(): ConstrValue<InputElementItem> {
    return this.element
  }

  /**
   * Search for an element by its name inside a group or by selector.<br>
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
   * Clear all values to the original ones.<br>
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
