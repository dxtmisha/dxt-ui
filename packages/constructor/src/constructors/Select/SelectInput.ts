import { mergeProps } from 'vue'
import { type ConstrBind, getObjectNoUndefined } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import type { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import type { FieldEventInclude } from '../../classes/Field/FieldEventInclude'

import type { AriaList } from '../../types/ariaTypes'
import type { SelectProps } from './props'

/**
 * Class for working with the select input element.
 * Manages edit mode detection, ARIA combobox attributes, and native input bindings.
 *
 * Класс для работы с элементом ввода селекта.
 * Управляет определением режима редактирования, ARIA-атрибутами combobox и привязками нативного input.
 */
export class SelectInput {
  /**
   * Constructor for SelectInput.
   *
   * Конструктор для SelectInput.
   * @param props input properties / входные свойства
   * @param attributes function returning field attributes manager / функция, возвращающая менеджер атрибутов поля
   * @param event function returning field event manager / функция, возвращающая менеджер событий поля
   */
  constructor(
    protected readonly props: Readonly<SelectProps>,
    protected readonly attributes: () => FieldAttributesInclude,
    protected readonly event: () => FieldEventInclude
  ) {
  }

  /**
   * Returns ARIA accessibility attributes for the combobox control.
   *
   * Возвращает ARIA-атрибуты доступности для элемента управления combobox.
   * @returns ARIA attributes map / карта ARIA-атрибутов
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.role('combobox')
    }
  }

  /**
   * Returns merged binding attributes and event listeners for the input element.
   *
   * Возвращает объединенные атрибуты привязки и обработчики событий для элемента input.
   * @returns input element bindings / привязки элемента ввода
   */
  get binds(): ConstrBind<Partial<HTMLInputElement>> {
    const event = this.event()

    return mergeProps(
      this.attributes().listForInput,
      getObjectNoUndefined({
        'name': this.props.name,
        'type': 'text',
        'required': this.props.required,
        'readonly': !this.isEdit(),
        'placeholder': this.props.placeholder,
        'data-menu-control': '1',
        'onFocus': event.onFocus,
        'onBlur': event.onBlur,
        'onInput': this.isEdit() ? event.onInput : event.onSelect
      }),
      this.aria
    ) as ConstrBind<Partial<HTMLInputElement>>
  }

  /**
   * Indicates whether the select input is in direct text edit mode.
   *
   * Указывает, находится ли элемент ввода селекта в режиме прямого редактирования текста.
   * @returns true if editable and single-select / true, если редактируемый и одиночный выбор
   */
  isEdit(): boolean {
    return Boolean(this.props.editValue && !this.props.multiple)
  }
}
