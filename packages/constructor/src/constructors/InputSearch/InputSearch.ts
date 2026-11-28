import { mergeProps, type Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName
} from '@dxtmisha/functional'

import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { FieldFormInclude } from '../../classes/Field/FieldFormInclude'
import { FieldInputModeInclude } from '../../classes/Field/FieldInputModeInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import { TextInclude } from '../../classes/TextInclude'
import { FieldInclude } from '../Field'

import { InputSearchQuery } from './InputSearchQuery'

import type { InputSearchComponents, InputSearchEmits, InputSearchSlots } from './types'
import type { InputSearchProps } from './props'

/** InputSearch dependency constructors type / Тип конструкторов зависимостей InputSearch */
export type InputSearchConstructors = {
  /** Field attributes constructor / Конструктор атрибутов поля */
  attributes: typeof FieldAttributesInclude
  /** Field change constructor / Конструктор изменения поля */
  change: typeof FieldChangeInclude
  /** Field code constructor / Конструктор кода поля */
  code: typeof FieldCodeInclude
  /** Field element constructor / Конструктор элемента поля */
  elementItem: typeof FieldElementInclude
  /** Field event constructor / Конструктор событий поля */
  event: typeof FieldEventInclude
  /** Field constructor / Конструктор поля */
  field: typeof FieldInclude
  /** Field form constructor / Конструктор формы поля */
  form: typeof FieldFormInclude
  /** Field input mode constructor / Конструктор режима ввода поля */
  inputMode: typeof FieldInputModeInclude
  /** Search query manager constructor / Конструктор менеджера поискового запроса */
  query: typeof InputSearchQuery
  /** Text localization constructor / Конструктор локализации текста */
  text: typeof TextInclude
  /** Field validation constructor / Конструктор валидации поля */
  validation: typeof FieldValidationInclude
  /** Field value constructor / Конструктор значения поля */
  value: typeof FieldValueInclude<string>
}

/**
 * InputSearch constructor class for managing search input logic, debounce timing, and field states.
 *
 * Класс-конструктор InputSearch для управления логикой ввода поиска, задержкой debounce и состояниями поля.
 */
export class InputSearch extends DesignLogicAbstract<
  HTMLElement,
  InputSearchComponents,
  InputSearchEmits,
  InputSearchSlots,
  InputSearchProps,
  InputSearchConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<InputSearchConstructors> = {
    attributes: {
      item: FieldAttributesInclude,
      parameters: () => [
        () => ({
          ...this.props,
          placeholder: this.props.placeholder ?? this.i('text').search
        }),
        undefined,
        undefined,
        () => this.i('inputMode'),
        'search'
      ]
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
          loading: this.props.loading ?? this.i('query').loading.value
        }),
        undefined,
        () => this.i('value'),
        () => this.getFieldEvent()
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
    inputMode: {
      item: FieldInputModeInclude,
      parameters: () => [this.props]
    },
    query: {
      item: InputSearchQuery,
      parameters: () => [
        this.props,
        () => this.i('event')
      ]
    },
    text: {
      item: TextInclude,
      parameters: () => [this.props]
    },
    validation: {
      item: FieldValidationInclude,
      parameters: () => [
        this.props,
        () => this.i('attributes'),
        () => this.i('value'),
        () => this.i('change'),
        () => this.i('code'),
        undefined,
        this.isMounted
      ]
    },
    value: {
      item: FieldValueInclude<string>,
      parameters: () => [
        this.props,
        () => this.i('elementItem')
      ]
    }
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param element input element ref / ссылка на элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits function called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<InputSearchProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComp<InputSearchComponents, InputSearchProps>,
    slots?: InputSearchSlots,
    emits?: ConstrEmit<InputSearchEmits>,
    constructors?: Partial<InputSearchConstructors>
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
   * Input binding values and event handlers.
   *
   * Значения привязок ввода и обработчики событий.
   * @returns object with input bindings / объект с привязками для поля ввода
   */
  get binds(): ConstrBind {
    const query = this.i('query')
    const event = this.i('event')

    return mergeProps(
      this.i('attributes').listForInput,
      {
        value: query.draft.value ?? this.i('value').item.value,
        onFocus: event.onFocus,
        onBlur: event.onBlur,
        onInput: query.onInput,
        onChange: query.onChange,
        onKeydown: query.onKeydown
      }
    )
  }

  /**
   * Returns a field event adapter that cancels any pending debounce timer on clear.
   *
   * Возвращает адаптер событий поля, отменяющий активный таймер debounce при очистке.
   * @returns field event controller / контроллер событий поля
   */
  protected getFieldEvent(): FieldEventInclude {
    const event = this.i('event')

    return Object.assign(
      Object.create(event) as FieldEventInclude,
      { onClear: this.i('query').onClear }
    )
  }
}
