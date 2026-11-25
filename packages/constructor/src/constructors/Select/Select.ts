import type { Ref } from 'vue'
import type { ConstrEmit, ConstrItems, DesignComp, DesignName, ListSelectedList } from '@dxtmisha/functional'

import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { FieldFormInclude } from '../../classes/Field/FieldFormInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import { FieldInclude } from '../Field'
import { MenuInclude } from '../Menu'

import { SelectAbstract, type SelectAbstractConstructors } from './SelectAbstract'
import { SelectInput } from './SelectInput'

import type { SelectProps } from './props'
import type { SelectComponents, SelectEmits, SelectSlots } from './types'

/**
 * Select dependency constructors type.
 *
 * Тип конструкторов зависимостей Select.
 */
export type SelectConstructors = SelectAbstractConstructors & {
  /** Field include constructor / Конструктор включения поля */
  field: typeof FieldInclude
  /** Select input helper constructor / Конструктор помощника ввода выбора */
  input: typeof SelectInput
}

/**
 * Select orchestrator class for managing dropdown select components.
 * Coordinates field framing, native input handling, dropdown menu behavior, events, and validation.
 *
 * Класс-оркестратор Select для управления компонентами выпадающего списка.
 * Координирует каркас поля, обработку нативного ввода, поведение выпадающего меню, события и валидацию.
 */
export class Select extends SelectAbstract<
  HTMLElement,
  SelectComponents,
  SelectEmits,
  SelectSlots,
  SelectProps,
  SelectConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<SelectConstructors> = {
    attributes: {
      item: FieldAttributesInclude,
      parameters: () => [this.props]
    },
    change: {
      item: FieldChangeInclude,
      parameters: () => [this.props]
    },
    code: {
      item: FieldCodeInclude,
      parameters: () => [this.props]
    },
    elementItem: {
      item: FieldElementInclude,
      parameters: () => [
        this.props,
        this.element
      ]
    },
    event: {
      item: FieldEventInclude,
      parameters: () => [
        this.props,
        () => this.i('change'),
        () => this.i('value'),
        () => this.i('validation'),
        this.emits,
        () => this.callInstance('form', item => item)
      ]
    },
    field: {
      item: FieldInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({
          iconTrailing: this.iconTrailing,
          maxlength: this.props.max,
          cancel: this.props.cancel ?? (this.props.multiple ? 'auto' : 'none')
        }),
        undefined,
        () => this.i('value'),
        () => this.i('event'),
        undefined,
        undefined,
        () => this.i('menu').getElement()?.toggle(),
        () => this.i('menu').getElement()?.next(),
        () => this.i('menu').getElement()?.previous()
      ]
    },
    form: {
      item: FieldFormInclude,
      canCreate: () => FieldFormInclude.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('value'),
        () => this.i('validation')
      ]
    },
    input: {
      item: SelectInput,
      parameters: () => [
        this.props,
        () => this.i('attributes'),
        () => this.i('event')
      ]
    },
    menu: {
      item: MenuInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => this.getMenuExtra()
      ]
    },
    validation: {
      item: FieldValidationInclude,
      parameters: () => [
        this.props,
        () => this.i('attributes'),
        () => this.i('value'),
        () => this.i('change'),
        () => this.i('code')
      ]
    },
    value: {
      item: FieldValueInclude<ListSelectedList>,
      parameters: () => [
        this.props,
        () => this.i('elementItem'),
        undefined,
        true,
        false,
        true
      ]
    }
  }

  /**
   * Constructor for the Select component.
   *
   * Конструктор для компонента Select.
   * @param props input properties / входные свойства
   * @param element reference to input HTML element / ссылка на HTML-элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with sub-components / объект для работы с субкомпонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits event emitter function / функция отправки событий
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<SelectProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComp<SelectComponents, SelectProps>,
    slots?: SelectSlots,
    emits?: ConstrEmit<SelectEmits>,
    constructors?: Partial<SelectConstructors>
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors
    )

    this.i('event')
    this.i('validation')
    this.callInstance('form', item => item)
  }

  /**
   * Handles user input on the combobox input to open the dropdown menu.
   *
   * Обрабатывает пользовательский ввод в поле combobox для открытия выпадающего меню.
   */
  readonly onInputValue = (): void => {
    this.i('menu').getElement()?.toOpen()
  }
}
