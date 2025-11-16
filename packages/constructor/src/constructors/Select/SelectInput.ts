import { computed } from 'vue'
import { type ConstrBind, toBinds } from '@dxtmisha/functional'

import { FieldValueInclude } from '../../classes/field/FieldValueInclude'
import { FieldEventInclude } from '../../classes/field/FieldEventInclude'

import type { SelectProps } from './props'
import type { FieldAttributesInclude } from '../../classes/field/FieldAttributesInclude.ts'

/**
 * Class for working with the select input.
 *
 * Класс для работы с input селекта.
 */
export class SelectInput {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param attributes object for working with input attributes/ объект для работы с атрибутами ввода
   * @param value object for working with values/ объект для работы со значениями
   * @param event object for working with events/ объект для работы с событиями
   */

  constructor(
    protected readonly props: Readonly<SelectProps>,
    protected readonly attributes: FieldAttributesInclude,
    protected readonly value: FieldValueInclude,
    protected readonly event: FieldEventInclude
  ) {
  }

  /** Indicates if it is in edit mode/ Указывает, находится ли в режиме редактирования */
  readonly isEdit = computed<boolean>(
    () => Boolean(this.props.editValue && !this.props.multiple)
  )

  /**
   * Returns data for the input field.
   *
   * Возвращает данные для поля input.
   */
  readonly binds = computed<ConstrBind<Partial<HTMLInputElement>> | undefined>(() => {
    return toBinds(
      this.attributes.listForInput.value,
      {
        'name': this.props.name,
        'value': this.value.string.value,
        'type': 'text',
        'required': this.props.required,
        'readonly': !this.isEdit.value,
        'placeholder': this.props.placeholder,
        'data-menu-control': '1',
        'onInput': this.isEdit.value ? this.event.onInput : this.event.onSelect,
        'onKeydown': this.onKeydown
      }
    ) as ConstrBind<Partial<HTMLInputElement>>
  })

  /**
   * Handles the keydown event to simulate a click on the input element.
   *
   * Обрабатывает событие нажатия клавиши для имитации клика по элементу ввода.
   * @param event The keydown event object/ Объект события нажатия клавиши
   */
  protected onKeydown = (event: Event) => {
    (event.target as HTMLInputElement).click()
    event.preventDefault()
  }
}
