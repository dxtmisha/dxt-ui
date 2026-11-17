import { mergeProps, type Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName,
  isNull,
  type NumberOrString
} from '@dxtmisha/functional'

import { FieldArrowInclude } from '../../classes/Field/FieldArrowInclude'
import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { FieldFormInclude } from '../../classes/Field/FieldFormInclude'
import { FieldInputModeInclude } from '../../classes/Field/FieldInputModeInclude'
import { FieldMatchInclude } from '../../classes/Field/FieldMatchInclude'
import { FieldPatternInclude } from '../../classes/Field/FieldPatternInclude'
import { FieldTypeInclude } from '../../classes/Field/FieldTypeInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import { FieldVisibilityInclude } from '../../classes/Field/FieldVisibilityInclude'
import { TextInclude } from '../../classes/TextInclude'

import { FieldInclude } from '../Field'
import { MaskInclude } from '../Mask'

import { InputPassword } from './InputPassword'

import type { InputProps } from './props'
import type { InputComponents, InputEmits, InputSlots } from './types'

/** Input dependency constructors type / Тип конструкторов зависимостей Input */
export type InputConstructors = {
  /** Field arrow constructor / Конструктор стрелки поля */
  arrow: typeof FieldArrowInclude
  /** Field attributes constructor / Конструктор атрибутов поля */
  attributes: typeof FieldAttributesInclude
  /** Field change constructor / Конструктор изменения поля */
  change: typeof FieldChangeInclude
  /** Field code constructor / Конструктор кода поля */
  code: typeof FieldCodeInclude
  /** Field element constructor / Конструктор элемента поля */
  elementItem: typeof FieldElementInclude
  /** Field event constructor / Конструктор события поля */
  event: typeof FieldEventInclude
  /** Field constructor / Конструктор поля */
  field: typeof FieldInclude
  /** Field form constructor / Конструктор формы поля */
  form: typeof FieldFormInclude
  /** Field input mode constructor / Конструктор режима ввода поля */
  inputMode: typeof FieldInputModeInclude
  /** Mask constructor / Конструктор маски */
  mask: typeof MaskInclude
  /** Field match constructor / Конструктор совпадения поля */
  match: typeof FieldMatchInclude
  /** Input password constructor / Конструктор пароля ввода */
  password: typeof InputPassword
  /** Field pattern constructor / Конструктор шаблона поля */
  pattern: typeof FieldPatternInclude
  /** Text localization constructor / Конструктор локализации текста */
  text: typeof TextInclude
  /** Field type constructor / Конструктор типа поля */
  type: typeof FieldTypeInclude
  /** Field validation constructor / Конструктор валидации поля */
  validation: typeof FieldValidationInclude
  /** Field value constructor / Конструктор значения поля */
  value: typeof FieldValueInclude<NumberOrString>
  /** Field visibility constructor / Конструктор видимости поля */
  visibility: typeof FieldVisibilityInclude
}

/**
 * Input constructor class.
 * Manages the logic, state, and interaction of the text input component.
 *
 * Класс конструктора Input.
 * Управляет логикой, состоянием и взаимодействием компонента текстового ввода.
 */
export class Input extends DesignLogicAbstract<
  HTMLElement,
  InputComponents,
  InputEmits,
  InputSlots,
  InputProps,
  InputConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<InputConstructors> = {
    arrow: {
      item: FieldArrowInclude,
      parameters: () => [
        this.props,
        () => this.i('value'),
        () => this.i('type')
      ]
    },
    attributes: {
      item: FieldAttributesInclude,
      parameters: () => [
        this.props,
        () => this.i('type'),
        () => this.i('pattern'),
        () => this.i('inputMode')
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
          iconTrailing: this.callInstance('password', item => item.icon) ?? this.props.iconTrailing,
          maxlength: this.props.maxlength ?? this.props.max
        }),
        undefined,
        () => this.i('value'),
        () => this.i('event'),
        () => this.i('arrow'),
        undefined,
        () => this.callInstance('password', item => item.toggle())
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
    mask: {
      item: MaskInclude,
      parameters: () => [
        () => ({
          ...this.props,
          value: isNull(this.props.value) ? undefined : String(this.props.value),
          modelValue: isNull(this.props.modelValue) ? undefined : String(this.props.modelValue)
        }),
        this.naming,
        this.components,
        undefined,
        undefined,
        () => this.i('value'),
        '',
        () => this.i('type')
      ]
    },
    match: {
      item: FieldMatchInclude,
      parameters: () => [
        this.props,
        () => this.i('elementItem'),
        () => this.i('value'),
        () => this.i('text')
      ]
    },
    password: {
      item: InputPassword,
      canCreate: () => InputPassword.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('text'),
        () => this.i('visibility')
      ]
    },
    pattern: {
      item: FieldPatternInclude,
      parameters: () => [this.props]
    },
    text: {
      item: TextInclude,
      parameters: () => [this.props]
    },
    type: {
      item: FieldTypeInclude,
      parameters: () => [
        this.props,
        () => this.i('visibility')
      ]
    },
    validation: {
      item: FieldValidationInclude,
      parameters: () => [
        this.props,
        () => this.i('attributes'),
        () => this.i('value'),
        () => this.i('change'),
        () => this.i('code'),
        () => this.i('match')
      ]
    },
    value: {
      item: FieldValueInclude<NumberOrString>,
      parameters: () => [
        this.props,
        () => this.i('elementItem'),
        undefined,
        true,
        false,
        true
      ]
    },
    visibility: {
      item: FieldVisibilityInclude
    }
  }

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<InputProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComp<InputComponents, InputProps>,
    slots?: InputSlots,
    emits?: ConstrEmit<InputEmits>,
    constructors?: Partial<InputConstructors>
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
   * @returns input element bindings / привязки элемента ввода
   */
  get binds(): ConstrBind {
    const event = this.i('event')

    return mergeProps(
      this.i('attributes').listForInput,
      {
        value: this.i('value').item.value,
        onBlur: event.onBlur,
        onInput: event.onInput,
        onChange: event.onChange
      }
    )
  }
}
