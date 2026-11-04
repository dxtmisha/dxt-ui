import { executeFunction, toBinds, type FunctionOr } from '@dxtmisha/functional'

import type { FieldTypeInclude } from './FieldTypeInclude'
import type { FieldPatternInclude } from './FieldPatternInclude'
import type { FieldInputModeInclude } from './FieldInputModeInclude'

import type { FieldAllProps } from '../../types/fieldTypes'

/**
 * Class for working with input elements.
 *
 * Класс для работы с элементами ввода.
 */
export class FieldAttributesInclude {
  /**
   * Constructor
   *
   * Конструктор
   * @param props input data or function returning input data / входные данные или функция, возвращающая входные данные
   * @param type function returning object for working with input type / функция, возвращающая объект для работы с типом ввода
   * @param pattern function returning object for working with checks by regular expressions /
   * функция, возвращающая объект для работы с проверкой по регулярным выражениям
   * @param inputMode function returning object for working with the keyboard / функция, возвращающая объект для работы с клавиатурой
   * @param typeDefault default value for type / значение по умолчанию для типа
   */
  constructor(
    protected readonly props: FunctionOr<FieldAllProps>,
    protected readonly type?: () => FieldTypeInclude,
    protected readonly pattern?: () => FieldPatternInclude,
    protected readonly inputMode?: () => FieldInputModeInclude,
    protected readonly typeDefault: string = 'text'
  ) {
  }

  /**
   * Returns data for verification.
   *
   * Возвращает данные для проверки.
   * @returns data record / объект с данными
   */
  get list(): Record<string, any> {
    return {
      type: this.typeDefault,
      ...this.getData(this.getAttributes())
    }
  }

  /**
   * Returns data for verification.
   *
   * Возвращает данные для проверки.
   * @returns data record / объект с данными
   */
  get listForCheck(): Record<string, any> {
    const data = this.list
    const props = this.getProps()

    if (
      props.min
      || props.max
      || props.step
    ) {
      return {
        ...data,
        type: 'number'
      }
    }

    return data
  }

  /**
   * Returns data for the input element.
   *
   * Возвращает данные для элемента ввода.
   * @returns data record / объект с данными
   */
  get listForInput(): Record<string, any> {
    return this.getData(this.getInputAttributes())
  }

  /**
   * Returns data for the checkbox element.
   *
   * Возвращает данные для элемента checkbox.
   * @returns data record / объект с данными
   */
  get listForCheckbox(): Record<string, any> {
    return {
      ...this.getData(this.getInputAttributes()),
      value: this.getProps().valueVariant
    }
  }

  /**
   * Returns properties.
   *
   * Возвращает свойства.
   * @returns properties object / объект свойств
   */
  protected getProps(): FieldAllProps {
    return executeFunction(this.props)
  }

  /**
   * Returns the list of attributes to be set on the input element.
   *
   * Возвращает список атрибутов, которые нужно установить на элемент ввода.
   * @returns array of attribute keys / массив ключей атрибутов
   */
  protected getAttributes(): (keyof FieldAllProps)[] {
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
   * @returns array of input attribute keys / массив ключей атрибутов ввода
   */
  protected getInputAttributes(): (keyof FieldAllProps)[] {
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
   * @param attributes list of attributes / список атрибутов
   * @returns attribute values map / объект значений атрибутов
   */
  protected getData(attributes: (keyof FieldAllProps)[]): Record<string, any> {
    const data: Record<string, any> = {}
    const props = this.getProps()

    attributes.forEach((index) => {
      let value: any = undefined

      if (index in props) {
        switch (index) {
          case 'type':
            if (this.type) {
              value = this.type().item
            } else {
              value = props.type
            }
            break
          case 'pattern':
            if (this.pattern) {
              value = this.pattern().item
            } else {
              value = props.pattern
            }
            break
          case 'inputMode':
            if (this.inputMode) {
              value = this.inputMode().item
            } else {
              value = props.inputMode
            }
            break
          case 'autocomplete':
            if (this.inputMode) {
              value = this.inputMode().autocomplete
            } else {
              value = props.autocomplete
            }
            break
          default:
            value = props[index]
        }
      }

      if (value !== undefined) {
        data[index] = value
      }
    })

    return toBinds(data, props.inputAttrs)
  }
}
