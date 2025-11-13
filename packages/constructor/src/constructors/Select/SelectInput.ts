import { computed } from 'vue'
import { type ConstrBind } from '@dxtmisha/functional'
import { FieldValueInclude } from '../../classes/field/FieldValueInclude'

import type { SelectProps } from './props'

/**
 * Class for working with the select input.
 *
 * Класс для работы с input селекта.
 */
export class SelectInput {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param value object for working with values/ объект для работы со значениями
   */

  constructor(
    protected readonly props: Readonly<SelectProps>,
    protected readonly value: FieldValueInclude
  ) {
  }

  /**
   * Returns data for the input field.
   *
   * Возвращает данные для поля input.
   */
  readonly binds = computed<ConstrBind<Partial<HTMLInputElement>> | undefined>(() => ({
    name: this.props.name,
    value: this.value.string.value,
    type: 'text',
    required: this.props.required
  }))
}
