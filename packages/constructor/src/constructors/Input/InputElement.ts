import { computed, type Ref } from 'vue'
import { FieldElementInclude } from '../../classes/field/FieldElementInclude'

import { FieldTypeInclude } from '../../classes/field/FieldTypeInclude'
import { FieldPatternInclude } from '../../classes/field/FieldPatternInclude'

import type { FieldElementInput, FieldInputProps } from '../../types/fieldTypes'

/**
 * Class for working with input elements.
 *
 * Класс для работы с элементами ввода.
 */
export class InputElement extends FieldElementInclude {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param type object for working with input type/ объект для работы с типом ввода
   * @param pattern object for working with checks by regular expressions/
   * объект для работы с проверкой по регулярным выражениям
   */
  constructor(
    protected readonly props: FieldInputProps,
    protected readonly element: Ref<FieldElementInput>,
    protected readonly type?: FieldTypeInclude,
    protected readonly pattern?: FieldPatternInclude
  ) {
    super(props, element)
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
}
