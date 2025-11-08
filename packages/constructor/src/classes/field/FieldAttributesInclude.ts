import { computed } from 'vue'
import { toBinds } from '@dxtmisha/functional'

import { FieldTypeInclude } from './FieldTypeInclude'
import { FieldPatternInclude } from './FieldPatternInclude'
import { FieldInputModeInclude } from './FieldInputModeInclude'

import type { FieldAllProps } from '../../types/fieldTypes'

/**
 * Class for working with input elements.
 *
 * Класс для работы с элементами ввода.
 */
export class FieldAttributesInclude {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with input type/ объект для работы с типом ввода
   * @param pattern object for working with checks by regular expressions/
   * объект для работы с проверкой по регулярным выражениям
   * @param inputMode object for working with the keyboard/ объект для работы с клавиатурой
   */
  constructor(
    protected readonly props: FieldAllProps,
    protected readonly type?: FieldTypeInclude,
    protected readonly pattern?: FieldPatternInclude,
    protected readonly inputMode?: FieldInputModeInclude
  ) {
  }

  /** Returns data for verification/ Возвращает данные для проверки */
  readonly list = computed<Record<string, any>>(() => {
    return this.getData(this.getAttributes())
  })

  /** Returns data for verification/ Возвращает данные для проверки */
  readonly listForCheck = computed<Record<string, any>>(() => {
    const data = this.list.value

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

  /** Returns data for the input element/ Возвращает данные для элемента ввода */
  readonly listForInput = computed<Record<string, any>>(() => {
    return this.getData(this.getInputAttributes())
  })

  /**
   * Returns the list of attributes to be set on the input element.
   *
   * Возвращает список атрибутов, которые нужно установить на элемент ввода.
   */
  protected getAttributes(): (keyof typeof this.props)[] {
    return [
      'type',
      'name',
      'required',
      'multiple',

      'step',
      'min',
      'max',

      'minlength',
      'maxlength',

      'accept',
      'pattern'
    ]
  }

  /**
   * Returns the list of attributes to be set on the input element.
   *
   * Возвращает список атрибутов, которые нужно установить на элемент ввода.
   */
  protected getInputAttributes(): (keyof typeof this.props)[] {
    return [
      ...this.getAttributes(),

      // Input
      'list',

      // Value
      'placeholder',

      // Basic
      'readonly',
      'disabled',
      'autofocus',
      'tabindex',
      'form',

      // UX
      'autocomplete',
      'autocapitalize',
      'inputMode',
      'enterKeyHint',
      'spellcheck',
      'autocorrect'
    ]
  }

  /**
   * Returns data for the specified attributes.
   *
   * Возвращает данные для указанных атрибутов.
   * @param attributes list of attributes/ список атрибутов
   */
  protected getData(attributes: (keyof typeof this.props)[]): Record<string, any> {
    const data: Record<string, any> = {}

    attributes.forEach((index) => {
      let value: any = undefined

      if (index in this.props) {
        switch (index) {
          case 'type':
            if (this.type) {
              value = this.type.item.value
            } else {
              value = this.props.type
            }
            break
          case 'pattern':
            if (this.pattern) {
              value = this.pattern.item.value
            }
            break
          case 'inputMode':
            if (this.inputMode) {
              console.log('this.inputMode.item.value', this.inputMode.item.value)
              value = this.inputMode.item.value
            }
            break
          default:
            value = this.props[index]
        }
      }

      if (value !== undefined) {
        data[index] = value
      }
    })

    return toBinds(data, this.props.inputAttrs)
  }
}
